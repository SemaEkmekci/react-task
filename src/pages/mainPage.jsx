import React, { useEffect, useState } from 'react';
import Navbar from '../layout/mainPage/navbar'
import Main from '../components/mainPage/main'
import About from '../components/mainPage/about'
import Products from '../components/mainPage/products'
import Customer from '../components/mainPage/customer'
import Contact from '../components/mainPage/contact'
import Footer from '../layout/mainPage/footer'
import { ProductsApi } from '../services/productsApi';

const MainPage = () => {

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
     <Navbar productInfo={productInfo} />
     <Main/>
     <About/>
     <Products productInfo={productInfo} />
     <Customer/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default MainPage;
