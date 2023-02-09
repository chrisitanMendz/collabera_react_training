import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import axiosIntance from '../utils/axiosInstance';

export const CartContext = createContext();

const cartInitialValue = {
  loading: false,
  cart: [],
  error: '',
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_CART_REQUEST':
    case 'ADD_CART_REQUEST':
    case 'UPDATE_CART_REQUEST':
    case 'DELETE_CART_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: payload,
      };

    case 'ADD_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
      };

    case 'UPDATE_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: state.cart.map(item => {
          if (payload.productId === item.productId) {
            return payload;
          }
          return item;
        }),
      };

    case 'DELETE_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: state.cart.filter(item => item.productId !== payload.productId),
      };

    case 'LOAD_CART_FAIL':
    case 'ADD_CART_FAIL':
    case 'UPDATE_CART_FAIL':
    case 'DELETE_CART_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialValue);
  const loadCart = useCallback(async () => {
    try {
      dispatch({ type: 'LOAD_CART_REQUEST' });
      const res = await axiosIntance.get('660/cart');
      dispatch({ type: 'ADD_CART_SUCCESS', payload: res });
    } catch (err) {
      dispatch({ type: 'LOAD_CART_FAIL', payload: err.message });
    }
  }, []);

  const addToCart = useCallback(async data => {
    try {
      dispatch({ type: 'ADD_CART_REQUEST' });
      const res = await axiosIntance.post('660/cart', data);
      dispatch({ type: 'ADD_CART_SUCCESS', payload: res });
    } catch (err) {
      dispatch({ type: 'ADD_CART_FAIL', payload: err.message });
    }
  }, []);

  const updateCart = useCallback(async data => {
    try {
      dispatch({ type: 'UPDATE_CART_REQUEST' });
      const { id, ...rest } = data;
      const res = await axiosIntance.put(`660/cart/${id}`, rest);
      dispatch({ type: 'UPDATE_CART_SUCCESS', payload: res });
    } catch (err) {
      dispatch({ type: 'UPDATE_CART_FAIL', payload: err.message });
    }
  }, []);

  const deleteCart = useCallback(async data => {
    const { id } = data;
    try {
      dispatch({ type: 'DELETE_CART_REQUEST' });
      await axiosIntance.delete(`660/cart/${id}`);

      dispatch({ type: 'DELETE_CART_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'DELETE_CART_FAIL', payload: err.message });
    }
  }, []);

  const value = useMemo(
    () => ({
      cartState,
      loadCart,
      addToCart,
      updateCart,
      deleteCart,
    }),
    [cartState, loadCart, addToCart, updateCart, deleteCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useCartContext = () => useContext(CartContext);
