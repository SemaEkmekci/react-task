import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { addToCart, buyItNow, decreaseCartItem, downloadCartData } from '../../utils/productPage/productDetailsUtils';

const ProductDetails = ({ productInfo }) => {
    const { id } = useParams();
    const selectedProduct = productInfo && productInfo[0].products.find(product => product.id.toString() === id);
    const [cartItemCount, setCartItemCount] = useState(0);

    const updateCartItemCount = useCallback(() => {
        if (selectedProduct) {
            const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
            const selectedProductCount = itemsInCart.find(item => item.id === selectedProduct.id)?.quantity || 0;
            setCartItemCount(selectedProductCount);
        }
    }, [selectedProduct, setCartItemCount]);

    useEffect(() => {
        updateCartItemCount();
    }, [updateCartItemCount]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-4 sm:ml-8 md:ml-16 lg:ml-20 mt-8">
          <div className="grid grid-cols-1 gap-4 flex-1">
    <div className="flex items-center justify-center h-96">
        <div className="w-96 h-96 bg-sky-100 rounded-3xl flex items-center justify-center">
            <img className="w-80 h-80 " src={selectedProduct?.thumbnail} alt="product image" />
        </div>
    </div>
</div>

            

            <div className="flex-1 ml-4 sm:ml-0">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct?.brand + " " + selectedProduct?.title}</h2>
                <p className="text-sm text-gray-400 mb-2">Free 2 Days Shipping | 1 Year Warranty</p>

                <div className="flex items-center">
          
                    <div className="flex">
                        {[...Array(5)].map((star, index) => (
                            <svg
                                key={index}
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                        <span className="ml-2 rounded px-2.5 py-0.5 text-lg font-bold">5.0</span>
                        <span className="mr-2 rounded px-2.5 py-0.5 text-sm text-gray-400">from 392 Reviews</span>
                    </div>
                </div>

                <p className="text-2xl font-bold">
                    <sup className="text-gray-600 mb-2">$</sup>
                    {selectedProduct?.price}
                </p>

                <div className=" items-center">
                   
                    <div className="flex-wrap mt-4 mb-6">
                        <div className="flex items-center mr-4 mb-2">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">Free Return</span>
                        </div>

                        <div className="flex items-center mr-4 mb-2">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">Chat with us 24 hours</span>
                        </div>

                        <div className="flex items-center mr-4 mb-2">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">Comes with a Package</span>
                        </div>

                        <div className="flex items-center mr-4 mb-2">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">Comes with a Package</span>
                        </div>
                    </div>

                
                    <div className="flex -mx-2 mb-6 mt-6">
                        <button
                            className="mx-2 bg-blue-700 hover:bg-blue-500 text-white leading-tight py-3 px-8 rounded focus:outline-none "
                            type="button"
                            onClick={() => buyItNow(selectedProduct, updateCartItemCount)}
                        >
                            Buy it now
                        </button>

                        <button
                            className="mx-2 bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white leading-tight py-3 px-8 rounded focus:outline-none "
                            type="button"
                            onClick={() => {
                                addToCart(selectedProduct, () => {
                                  updateCartItemCount();
                                  window.location.reload();
                                });
                              }}
                        >
                            Add to Cart
                        </button>

                        {cartItemCount > 0 && (
                            <div className="mx-2 flex items-center relative">
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 leading-tight py-3 px-4 focus:outline-none transition duration-300 z-10"
                                    type="button"
                                    onClick={() => decreaseCartItem(selectedProduct, cartItemCount, setCartItemCount, updateCartItemCount)}
                                >
                                    -
                                </button>
                                <span className="relative border-l border-gray-300 px-4 py-2  text-gray-700 text-lg font-semibold z-10">
                                    {cartItemCount}
                                </span>
                                <div className="absolute inset-0 border border-dashed border-gray-300 rounded pointer-events-none"></div>
                            </div>
                        )}
                    </div>

                  
                    <div>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={downloadCartData}
                        >
                            Download Items in Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    productInfo: PropTypes.string.isRequired,
};

export default ProductDetails;
