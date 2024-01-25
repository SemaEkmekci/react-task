import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ img, productName, brand, price, productId }) {
  
    const handleClick = () => {
        window.location.href = `/product/${productId}`;
      };

    return (  
    <div className="relative ml-9 m-2 md:m-4 lg:m-8 flex flex-col w-full max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-gray-400">
       
      <a className="relative flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover w-full" src={img} alt="product image" />
      </a> 
       {/* <div className="relative w-96 h-96 bg-sky-100 rounded-3xl overflow-hidden  flex items-center justify-center ">
            <img className="w-80 h-80 object-cover" src={img} alt="product image" />
        </div> */}

      <div className="mt-4 px-3 md:px-5 pb-5">
        <a href="#" onClick={handleClick}>
          <h5 className="text-xl tracking-tight text-slate-900 hover:underline">{productName}</h5>
        </a>
        <p>
          <span className="text-lg font-semibold text-gray-500">{brand}</span>
        </p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{price}$</span>
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded px-2.5 py-0.5 text-lg font-bold">5.0</span>
          </div>
        </div>
      </div>
     
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
};

export { ProductCard };
