import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import { ProductCard } from '../../containers/productPage/productCard';

const Cards = ({ productInfo }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1550,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:mx-20 md:mx-10 sm:mx-5">
      <h2 className="mb-4 ml-8 text-2xl font-bold">Similar sponsored items</h2>

      <Slider {...settings}>
        {productInfo &&
          productInfo[0]['products'].map((product) => (
            <ProductCard
              key={product.id}
              productName={product.title}
              price={product.price}
              img={product.thumbnail}
              brand={product.brand}
              productId={product.id}
            />
          ))}
      </Slider>
    </div>
  );
};

Cards.propTypes = {
  productInfo: PropTypes.string.isRequired,
};

export default Cards;
