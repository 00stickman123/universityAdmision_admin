// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {
  bannerImgThree,
  banner,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import { Button } from "reactstrap";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={bannerImgThree} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={banner}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
