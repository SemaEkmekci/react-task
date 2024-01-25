import React, { useEffect, useState } from 'react';
import { CategoryLabel } from '../../containers/mainPage/categoryLabel';
import { ProductCard } from '../../containers/mainPage/productCard';
import PropTypes from 'prop-types';

const Products = ({ productInfo }) => {
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (productInfo && productInfo[0] && productInfo[0]['products']) {
      const categories = productInfo[0]['products'].map(product => product.category);
      const uniqueCategories = [...new Set(categories)];
      setUniqueCategories(uniqueCategories);
    }
  }, [productInfo]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productInfo && productInfo[0]['products'].filter(product => {
    return selectedCategory === 'All' || product.category === selectedCategory;
  });

  return (
    <div id='products'>
      <h2 className="mb-4 text-5xl font-bold mt-20 text-center">Products</h2>

      <div className='flex'>
        <ul className="flex flex-col mt-4 mx-auto justify-center font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
          <CategoryLabel
            category="All"
            isSelected={selectedCategory === 'All'}
            onClick={() => handleCategoryClick('All')}
          />
          {uniqueCategories.map(category => (
            <CategoryLabel
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </ul>
      </div>
     
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-20 ml-20'>
        {filteredProducts && filteredProducts.map(product => (
          <ProductCard key={product.id} productName={product.title} price={product.price} img={product.thumbnail} productId={product.id}/>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  productInfo: PropTypes.string.isRequired,
};

export default Products;
