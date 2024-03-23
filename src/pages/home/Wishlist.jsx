// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BestSellers from "../../components/home/bestSeller/BestSeller";
import authService from "../../api/user.service";
import Heading from "../../components/home/products/Heading";
import Product from "../../components/home/products/Product";
const Wishlist = () => {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
      authService.getWishlist().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setListProducts(data.data.wishlist);
        }
      });
    }, []);
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <div className="w-full pb-20">
          <Heading heading="Wishlist" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
            {listProducts.map((product, index) => (
              <Product
                _id={product._id}
                img={product.images}
                productName={product.title}
                price={product.price}
                color={product.color}
                badge={true}
                des={product.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
