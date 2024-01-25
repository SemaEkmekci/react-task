import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import logo from '../../assets/ebaylogo.png';
import { CategoryLabel } from '../../containers/mainPage/categoryLabel';
import {updateCartItemCount } from '../../utils/productPage/navbarUtils';


const Navbar = ({ productInfo }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    if (productInfo && productInfo[0] && productInfo[0]['products']) {
      const categories = productInfo[0]['products'].map((product) => product.category);
      const uniqueCategories = [...new Set(categories)];
      setUniqueCategories(uniqueCategories);
    }
  }, [productInfo]);

  useEffect(() => {
    updateCartItemCount(setCartItemCount);
  }, []);


  

  return (

<nav className="shadow w-full bg-blue rounded-bl-3xl rounded-br-3xl shadow">
  <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <div className="w-32 h-12 relative flex-col justify-start items-start inline-flex mt-4 ml-3">
      <img
          width="250"
          height="200"
          style={{
            position: 'absolute',
            top: '-47px',
            left: '0',
            overflow: 'hidden',
            objectFit: 'cover',
          }}
          alt="eBay Home"
          src={logo}
          id="gh-logo"
        />
      </div>
      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div className="max-w-md mt-8 mx-auto shadow-lg absolute top-0 left-0 right-0 z-10">
         <div
          className="relative flex items-center w-full h-12 focus-within:shadow-lg bg-gray-200 overflow-hidden rounded-lg"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
        >
          <button
            id="dropdownHover"
            data-dropdown-toggle="dropdownHover" 
            className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            All Categories
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div
  id="dropdownHover"
  className={`z-30 ${isCategoriesOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-md w-48 absolute mt-2`}
>
  <ul className="py-2 text-sm text-gray-700">
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
      >
        Dashboard
      </a>
    </li>
    {uniqueCategories.map((category) => (
      <li key={category}>
        <CategoryLabel category={category} />
      </li>
    ))}
  </ul>
</div>         
          <input
            className="ml-2 peer h-full w-full outline-none text-md text-gray-900 bg-gray-200 pr-2 rounded-none"
            type="text"
            id="search"
            placeholder="|   Search for items..."
          />
          <button className="bg-blue-500 h-full">
            <div className="grid place-items-center h-full w-14 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    <div className="md:flex items-center">

      <div className="flex justify-center md:block">
        <a className="relative text-gray-700 hover:text-gray-600" href="#">
          <svg className="h-20 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <span className="absolute top-0 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs"> {cartItemCount}</span>
        </a>
      </div>
    </div>
  </div>
</nav>
  );
};

Navbar.propTypes = {
  productInfo: PropTypes.array, 
};


export default Navbar;
