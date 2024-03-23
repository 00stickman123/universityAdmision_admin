import React from "react";
import ShowPasswordIcon from "../icons/ShowPasswordIcon";
import SecondaryBtn from "./SecondaryBtn";

function ShowDetail() {
  return (
    <div>
      <ShowPasswordIcon className="hidden cursor-pointer md:block" />
      <SecondaryBtn className="block w-[100px] md:hidden cursor-pointer">
        Details
      </SecondaryBtn>
    </div>
  );
}

export default ShowDetail;
