import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

function HeaderDetail({
  className = "",
  homeUrl = "",
  editUrl = "",
  editBtn = true,
  children,
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-5 py-5 md:items-center md:flex-row">
        <Title>Detail</Title>
        <div className="flex justify-around gap-5 md:justify-end">
          <Link to={homeUrl}>
            <SecondaryBtn className="min-w-[140px]">Cancel</SecondaryBtn>
          </Link>
          {editBtn && (
            <Link to={editUrl}>
              <PrimaryBtn className="min-w-[140px]">Edit</PrimaryBtn>
            </Link>
          )}
        </div>
      </div>
      <div className={`flex flex-col gap-4 bg-white block-border ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default HeaderDetail;
