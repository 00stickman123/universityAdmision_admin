import React from "react";
import SearchIcon from "../icons/SearchIcon";

function SearchInput({ className = "", classNameSearchInput = "", ...props }) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute top-3 left-3">
        <SearchIcon />
      </div>
      <input
        {...props}
        type="text"
        className={`w-full py-3 pl-10 pr-3 border rounded outline-none border-grayLight focus:border-primaryy hover:border-primaryy smooth-transform ${classNameSearchInput}`}
      />
    </div>
  );
}

export default SearchInput;
