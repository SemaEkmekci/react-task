import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ img,productName, price, productId }) {
  
  
  const handleClick = () => {
    window.location.href = `/product/${productId}`;
  };

  return (
<div className="Item w-64 h-80 relative mb-4 mt-8 cursor-pointer">
<a  className="" onClick={handleClick}>
  <div className="Bg w-64 h-56 left-0 top-[103px] absolute bg-orange-200" />
  <div className="Content  top-[235px] absolute flex-col justify-start items-start  inline-flex">
    <div className="Stool text-slate-800 text-2 font-bold font-['Source Sans Pro']  ml-4">{productName}</div>
    <div className="Frame10 w-56 justify-between items-center inline-flex">
      <div className="200 text-slate-800 text-base font-normal font-['Source Sans Pro'] leading-relaxed  ml-4">{"$" + price}</div>
      <div className="VuesaxLinearArrowRight w-6 h-6 justify-center items-center flex">
        <div className="ArrowRight w-6 h-6 relative">
        </div>
      </div>
    </div>
  </div>
  <img className="SofaBlack w-48 h-48 left-[36px] top-[-10px] absolute" src={img} />
  <div className="ArrowIcon absolute bottom-4 right-3 text-orange-500" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
         
          &#8594;
        </div>
        
  </a> 
</div>
  );
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
  };

export { ProductCard };
