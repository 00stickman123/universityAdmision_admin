// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../products/Heading";
import Product from "../products/Product";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";
import authService from "../../../api/product.service";
const SpecialOffers = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    authService.getProduct()
      .then((response) => {
        // console.log("Respone API", response);
        if (Array.isArray(response.data.data)) {
          setListProducts(response.data.data);
        } else {
          console.error("Data received is not an array:", response);
        }
      }).catch(error => {
        console.error("Error fetching data:", error);
      });
    }, []);
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {listProducts.map((product, index) => (
          <div className="px-2" key={index}>
            <Product
              _id={product.productId}
              img={product.thumbnail}
              productName={product.title}
              price={product.price}
              color={product.color}
              badge={true}
              des={product.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialOffers;
