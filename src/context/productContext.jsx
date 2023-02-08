import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/products');
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      console.log(json);
      setProducts(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const value = useMemo(
    () => ({
      products,
      getProducts,
    }),
    [products, getProducts],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductContext);
