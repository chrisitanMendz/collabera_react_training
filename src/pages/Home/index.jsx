import React, { useEffect, useState } from 'react';
import { useProductsContext } from '../../context/productsContext';
import { useCartContext } from '../../context/cartContext';
import Product from '../../components/Product';

function Home() {
  const { products, loadProducts } = useProductsContext();
  const { cart, loadCart } = useCartContext();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const filterCategory = () => {
    let newArr = [];
    for (let x = 0; x < products.length; x++) {
      if (!newArr.includes(products[x].category)) {
        newArr = [...newArr, products[x].category];
      }
    }
    setCategoryOptions(newArr);
  };

  useEffect(() => {
    filterCategory();
  }, [products]);

  const toFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-5 px-5">
      <div className="mb-10">
        <select name="" id="" onChange={toFilter} className="ml-auto">
          <option value="">Category</option>
          {categoryOptions.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {products?.map(item => {
          const cartItem = cart.find(x => x.productId === item.id);

          if (filter !== item.category && filter !== '') {
            return '';
          }

          return <Product key={item.id} item={item} cartItem={cartItem} />;
        })}
      </div>
    </div>
  );
}

export default Home;
