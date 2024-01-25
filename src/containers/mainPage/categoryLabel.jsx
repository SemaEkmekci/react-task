import React from 'react';
import PropTypes from 'prop-types';

function CategoryLabel({ category, isSelected, onClick }) {
  return (
    <li>
      <a
       
        onClick={onClick}
        className={`block py-2 px-3  cursor-pointer ${isSelected ? 'text-orange-500' : 'text-gray-500'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 mr-8`}
        aria-current="page"
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </a>
    </li>
  );
}

CategoryLabel.propTypes = {
  category: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export { CategoryLabel };
