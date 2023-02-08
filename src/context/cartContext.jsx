import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosIntance from '../utils/axiosInstance';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');

  const loadCart = useCallback(async () => {
    try {
      const res = await axiosIntance.get('660/cart');
      setCart(res);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const addToCart = useCallback(async data => {
    try {
      const res = await axiosIntance.post('660/cart', data);
      setCart(prev => [...prev, res]);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      cart,
      error,
      loadCart,
      addToCart,
    }),
    [cart, error, loadCart, addToCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useCartContext = () => useContext(CartContext);
