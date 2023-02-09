import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useCartContext } from '../../context/cartContext';
import { useLoadingContext } from '../../context/loadingContext';

const Product = ({ item, cartItem }) => {
  const { addToCart, updateCart, deleteCart } = useCartContext();
  const { loading } = useLoadingContext();
  const currentLoading = loading.some(x => x?.loadingId === item.id);

  return (
    <div
      key={item.id}
      className="flex flex-col mb-4 mx-2 px-2 py-2 shadow-sm bg-white duration-300
      hover:scale-105 hover:shadow-xl"
    >
      <div className="w-52 h-52 grid place-items-center overflow-hidden">
        <img src={item.image} alt="" />
      </div>
      <p className="text-xs line-clamp-2 max-w-[208px] mt-2">{item.title}</p>
      <p className="text-sm font-semibold my-2 text-[#1f2937] ">
        {new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'PHP',
        }).format(item.price)}
      </p>
      <div className="flex mb-5 items-center">
        {[0, 1, 2, 3, 4].map(num => (
          <StarIcon
            key={num}
            className={`h-5 w-5 text-gray-300 ${
              item.rating.rate > num && 'text-yellow-400'
            }`}
          />
        ))}
        <p className="text-xs ml-2 text-gray-500">
          {item.rating.count} Reviews
        </p>
      </div>
      {!cartItem ? (
        <button
          className="text-xs font-semibold bg-blue-600 text-white py-2 mt-auto duration-300 
          hover:opacity-75
          disabled:bg-gray-500 disabled:cursor-wait"
          disabled={currentLoading}
          onClick={() =>
            addToCart({
              productId: item.id,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-auto flex justify-center">
          <button
            className="text-xs font-semibold bg-blue-600 text-white h-8 w-16 duration-300 
            hover:opacity-75
            disabled:bg-gray-500 disabled:cursor-wait"
            disabled={currentLoading}
            onClick={() => {
              updateCart({
                ...cartItem,
                quantity: cartItem.quantity + 1,
              });
            }}
          >
            +
          </button>
          <p className="text-lg mx-auto grid place-items-center">
            {cartItem.quantity}
          </p>
          <button
            className="text-xs font-semibold bg-blue-600 text-white h-8 w-16 duration-300 
            hover:opacity-75
            disabled:bg-gray-500 disabled:cursor-wait"
            disabled={currentLoading}
            onClick={() => {
              if (cartItem.quantity !== 1) {
                updateCart({
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                });
              } else {
                deleteCart(cartItem);
              }
            }}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
