import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="mb-4 lg:col-span-1">
            <iframe
              title="Google Maps"
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124254.41468384612!2d106.70033386653754!3d10.762622791812793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2f195d0f13%3A0xf06b66d73ba6b0d3!2zVHLGsOG7nW5nIMSQ4bqhaSBIw6AgTuG6tW5nIFTDom4gUXXhuqNuZywgVGjhu6V5IFRo4bq_IENhbywgUGjGsOG7nW5nIDEwMDAwMDAsIFZpZXRuYW0gVMOyYSBOYW0!5e0!3m2!1svi!2s!4v1643100471841!5m2!1svi!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="mb-4 lg:col-span-3 flex justify-between">
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="logo">
                  <div>
                    <h1 className="text-2xl font-bold">Efurniture</h1>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  <span className="block leading-8">
                    Tên công ty: Công ty CP một thành viên Lofi Furniture
                  </span>
                  <span className="block leading-8">
                    Địa chỉ: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000
                  </span>
                  <span className="block leading-8">
                    Email: efurniture@gmail.com
                  </span>
                  <span className="block leading-8">
                    Hotline: 1900 8098
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col ml-1">
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-4">Customer services</h4>
                <ul>
                  <li className="mb-2">
                    <Link className="text-gray-300 hover:text-white">Help center</Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-gray-300 hover:text-white">Report abuse</Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-gray-300 hover:text-white">Privacy Policy</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-gray-300 hover:text-white">Get paid for your feed back</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 ml-1">Contact</h4>
                <ul className="footer__contact ">
                  <li className="mb-2 flex items-center ">
                    <i className="ri-map-pin-line mr-2"></i>
                    <p className="text-gray-300">Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000</p>
                  </li>
                  <li className="mb-2 flex items-center">
                    <i className="ri-phone-line mr-2"></i>
                    <p className="text-gray-300">028 7300 5588</p>
                  </li>
                  <li className="mb-2 flex items-center">
                    <i className="ri-mail-line mr-2"></i>
                    <p className="text-gray-300">efurniture@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center ">
          <p className="text-gray-300">
            Copyright {year} developed by Efurniture. @All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

