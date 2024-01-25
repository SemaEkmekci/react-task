import React from 'react'
import logo from '../../assets/ebaylogo.png';
import visa from '../../assets/visa.svg';
import mastercard from '../../assets/mastercard.svg';
import maestro from '../../assets/maestro.svg';
import amex from '../../assets/amex.svg';



const Footer = () => {
  return (
    <div>        
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full p-6  lg:py-8">
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  <img src={logo} className="h-[150px]" alt="Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className='ml-20'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ACCOUNT</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline">Wishlist</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Cart</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Track Order</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Shipping Details</a>
                      </li>
                  </ul>
              </div>
              <div className='ml-20'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">USEFUL LINKS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">About Us</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Conact</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Hot deals</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Promotions</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">New products</a>
                      </li>
                  </ul>
              </div>
              <div className='ml-20'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Helper Center</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Payment</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Refund</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Chechout</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Shipping</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Q&amp;A</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022, All rights reserved
          </span>
          <div className="flex  sm:text">
          <img className="ml-auto" src={visa} alt="Visa logo" width="50" height="50" />
          <img className="ml-8" src={mastercard} alt="Mastercard logo"        width="50" height="50" />
          <img className="ml-8" src={maestro} alt="Mastercard logo"        width="50" height="50" />
          <img className="ml-8" src={amex} alt="Mastercard logo"        width="50" height="50" />
        </div>
      </div>
    </div>
</footer>


    </div>
  )
}

export default Footer;
