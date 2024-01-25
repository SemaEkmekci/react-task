import React from 'react';
import axios from 'axios';

// const API_URL = 'https://dummyjson.com/products/1';
const API_URL = 'https://dummyjson.com/products';
// const API_URL = 'https://dummyjson.com/products/?skip=8&limit=8';

const ProductsApi = async () => {

    try {
    const response = await axios.get(`${API_URL}`);
    if (response.data) {
      return Array.isArray(response.data) ? response.data : [response.data];
    } else {
      console.error('API\'den veri çekilemedi.');
    }
  } catch (error) {
    console.error('Veri çekme hatası:', error.message);
  }
};


export { ProductsApi };





      

