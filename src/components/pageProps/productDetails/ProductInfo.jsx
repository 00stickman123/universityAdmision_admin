// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import { productSlice } from "../../../redux/slice/productSlice";

import { addToCart } from "../../../redux/slice/productSlice";
import AuthService from "../../../api/user.service";

import { cartActions } from "../../../redux/slice/cartSlice";
import { toast, ToastContainer } from 'react-toastify'

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  const addToCart =()=> {
    // dispatch(cartActions.addItem({
    //   id: productInfo._id,
    //   productName: productInfo.productName,
    //   quantity: 1,
    //   img: productInfo.img,
    //   badge: productInfo.badge,
    //   price: productInfo.price,
    //   colors: productInfo.color,
    // }))
        AuthService.addToCart({
          cart: [
            {
              _id: productInfo.id,
              count: 1,
              color: productInfo.color,
            },
          ],
        }).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
                toast.success("Product added successfully", {
                  // position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
          }
        });
  };
  
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={addToCart}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
