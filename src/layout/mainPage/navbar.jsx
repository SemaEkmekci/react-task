import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { CategoryLabel } from '../../containers/mainPage/categoryLabel';
import {handleHamburgerMenuClick, handleProductsMouseEnter, handleProductsMouseLeave} from '../../utils/mainPage/navbarUtils';

const Navbar = ({ productInfo })  => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    if (productInfo && productInfo[0] && productInfo[0]['products']) {
      const categories = productInfo[0]['products'].map(product => product.category);
      const uniqueCategories = [...new Set(categories)];
      setUniqueCategories(uniqueCategories);
    }
  }, [productInfo]);

    return (
    <div id="home">
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md navbar-container fixed  top-0  w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.864 18V15.864L7.776 5.328H1.512V2.352H12.12V4.488L5.208 15.024H12.192V18H0.864ZM14.5444 18V6.096H18.0724V18H14.5444ZM16.2964 4.344C15.7044 4.344 15.2244 4.176 14.8564 3.84C14.4884 3.504 14.3044 3.056 14.3044 2.496C14.3044 1.936 14.4884 1.488 14.8564 1.152C15.2244 0.815999 15.7044 0.647999 16.2964 0.647999C16.8884 0.647999 17.3684 0.815999 17.7364 1.152C18.1044 1.488 18.2884 1.936 18.2884 2.496C18.2884 3.056 18.1044 3.504 17.7364 3.84C17.3684 4.176 16.8884 4.344 16.2964 4.344ZM21.1772 18V6.096H24.0572L24.2972 7.608H24.3932C24.9052 7.128 25.4652 6.712 26.0732 6.36C26.6972 5.992 27.4092 5.808 28.2092 5.808C29.5052 5.808 30.4412 6.24 31.0172 7.104C31.6092 7.952 31.9052 9.12 31.9052 10.608V18H28.3772V11.064C28.3772 10.2 28.2572 9.608 28.0172 9.288C27.7932 8.968 27.4252 8.808 26.9132 8.808C26.4652 8.808 26.0812 8.912 25.7612 9.12C25.4412 9.312 25.0892 9.592 24.7052 9.96V18H21.1772ZM39.1596 23.064C38.2316 23.064 37.3916 22.96 36.6396 22.752C35.8876 22.544 35.2876 22.216 34.8396 21.768C34.3916 21.32 34.1676 20.744 34.1676 20.04C34.1676 19.08 34.7356 18.28 35.8716 17.64V17.544C35.5676 17.336 35.3036 17.072 35.0796 16.752C34.8716 16.432 34.7676 16.024 34.7676 15.528C34.7676 15.096 34.8956 14.68 35.1516 14.28C35.4076 13.88 35.7276 13.552 36.1116 13.296V13.2C35.6956 12.912 35.3196 12.496 34.9836 11.952C34.6636 11.408 34.5036 10.792 34.5036 10.104C34.5036 9.144 34.7356 8.352 35.1996 7.728C35.6636 7.088 36.2716 6.608 37.0236 6.288C37.7756 5.968 38.5756 5.808 39.4236 5.808C40.1276 5.808 40.7436 5.904 41.2716 6.096H45.6156V8.664H43.7196C43.8316 8.84 43.9196 9.064 43.9836 9.336C44.0636 9.608 44.1036 9.904 44.1036 10.224C44.1036 11.136 43.8956 11.888 43.4796 12.48C43.0636 13.072 42.5036 13.512 41.7996 13.8C41.0956 14.088 40.3036 14.232 39.4236 14.232C38.9596 14.232 38.4796 14.152 37.9836 13.992C37.6956 14.232 37.5516 14.528 37.5516 14.88C37.5516 15.184 37.6876 15.408 37.9596 15.552C38.2316 15.696 38.6956 15.768 39.3516 15.768H41.2716C42.7436 15.768 43.8636 16.008 44.6316 16.488C45.4156 16.952 45.8076 17.72 45.8076 18.792C45.8076 19.608 45.5356 20.336 44.9916 20.976C44.4476 21.632 43.6796 22.144 42.6876 22.512C41.6956 22.88 40.5196 23.064 39.1596 23.064ZM39.4236 12.096C39.8876 12.096 40.2716 11.928 40.5756 11.592C40.8956 11.256 41.0556 10.76 41.0556 10.104C41.0556 9.48 40.8956 9.008 40.5756 8.688C40.2716 8.352 39.8876 8.184 39.4236 8.184C38.9596 8.184 38.5676 8.344 38.2476 8.664C37.9436 8.984 37.7916 9.464 37.7916 10.104C37.7916 10.76 37.9436 11.256 38.2476 11.592C38.5676 11.928 38.9596 12.096 39.4236 12.096ZM39.7116 20.856C40.5116 20.856 41.1676 20.712 41.6796 20.424C42.1916 20.136 42.4476 19.792 42.4476 19.392C42.4476 19.024 42.2876 18.776 41.9676 18.648C41.6636 18.52 41.2156 18.456 40.6236 18.456H39.3996C38.9996 18.456 38.6636 18.44 38.3916 18.408C38.1356 18.392 37.9116 18.36 37.7196 18.312C37.2876 18.696 37.0716 19.088 37.0716 19.488C37.0716 19.936 37.3116 20.272 37.7916 20.496C38.2876 20.736 38.9276 20.856 39.7116 20.856Z" fill="#112B3C"/>
<path d="M49.7719 18.288C49.1639 18.288 48.6519 18.08 48.2359 17.664C47.8359 17.232 47.6359 16.704 47.6359 16.08C47.6359 15.44 47.8359 14.912 48.2359 14.496C48.6519 14.064 49.1639 13.848 49.7719 13.848C50.3799 13.848 50.8839 14.064 51.2839 14.496C51.6999 14.912 51.9079 15.44 51.9079 16.08C51.9079 16.704 51.6999 17.232 51.2839 17.664C50.8839 18.08 50.3799 18.288 49.7719 18.288Z" fill="#F66B0E"/>
</svg>
        </a>
        
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
        <Link className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 cursor-pointer" aria-current="page" to="contact" smooth={true} offset={-100}>
          Contact
        </Link>  


        <Link className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium  text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-orange-400 dark:hover:bg-orange-500 focus:outline-none dark:focus:ring-orange-600 cursor-pointer" aria-current="page" to="products" smooth={true} offset={-100}>
        Buy Online
        </Link>  
           
            <button data-collapse-toggle="mega-menu-icons" type="button"
            onClick={() => handleHamburgerMenuClick(isHamburgerMenuOpen, setHamburgerMenuOpen)} 
          

            className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}

              
            aria-controls="mega-menu-icons" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu-icons" className={`items-center justify-between ${isHamburgerMenuOpen ? 'grid' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">      
                <li>
                <Link className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0         md:hover:text-orange-500  md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" aria-current="page" to="home" smooth={true}  offset={-100}>
                  Home
                </Link>  
                </li>
                <li>
                    <Link className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0         md:hover:text-orange-500  md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" aria-current="page" to="about" smooth={true}  offset={-100}>
                    About us
                </Link>  
                </li>
                <li>
                <Link className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0         md:hover:text-orange-500  md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" aria-current="page" to="products" smooth={true} offset={-100}>
                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" 
                    onMouseEnter={() => handleProductsMouseEnter(setProductsOpen)}  onMouseLeave={() => handleProductsMouseLeave(setProductsOpen)}
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Products
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg>
                    </button>
                    </Link>  
                    <div id="mega-menu-icons-dropdown" className={`absolute z-10   ${isProductsOpen ? '' : 'hidden'}  text-sm bg-white border border-orange-500 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`} 
                    onMouseLeave={() => handleProductsMouseLeave(setProductsOpen)}
                    >
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                          
                                    {uniqueCategories.map(category => (
                        <CategoryLabel key={category} category={category} />
                      
                    ))}
                        </div>
                    </div>
                </li>
                <li>
                <Link className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0         md:hover:text-orange-500  md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" aria-current="page" to="customer" smooth={true} offset={-50}>
                Testimonial
                </Link>  
                </li>
            
            </ul>
        </div>
    </div>
</nav>

        </div>
    );
};


Navbar.propTypes = {
    productInfo: PropTypes.string.isRequired,
  };

export default Navbar;