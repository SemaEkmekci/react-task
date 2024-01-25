import React, { useEffect, useState } from 'react';
import Navbar from '../layout/productPage/navbar'
import Footer from '../layout/productPage/footer'
import ProductDetails from '../components/productPage/productDetails'
import Cards from '../components/productPage/cards'
import { ProductsApi } from '../services/productsApi';
import {updateCartItemCount } from '../utils/productPage/navbarUtils';



const ProductPage = () => {
    const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProductsApi();
        setProductInfo(Array.isArray(data) ? data : [data]);
        console.log('Api Data:', data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);


    return (
        <div>
            <Navbar productInfo={productInfo}/>
            {/* <ProductDetails productInfo={productInfo}/> */}
            <ProductDetails productInfo={productInfo} updateCartItemCount={updateCartItemCount} />

            <Cards productInfo={productInfo}/>
            <Footer/>
    
        </div>
    );
};

export default ProductPage;

