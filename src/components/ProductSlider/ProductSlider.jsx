import React from "react";
import "./pruductslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/product/product1.jpg";
import product2 from "../../assets/product/product2.jpg";
import product3 from "../../assets/product/product3.png";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const data = [
    {
      img: product1,
      name: "bendoll faster",
    },
    {
      img: product2,
      name: "bendoll goll",
    },
    {
      img: product3,
      name: "exclusive piston",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container product-slider">
      <div className="section_title">
        <h5>製 品 紹 介</h5>
        <span className="line"></span>
      </div>
      <div className="product-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card content-slider" key={index}>
                <p>
                  <Link to="/product">
                    <img
                      src={item.img}
                      alt="slider-image"
                      className="center-image"
                    />
                  </Link>
                </p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
