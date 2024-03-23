import React from "react";

function Title({ className = "text-4xl", children }) {
  return (
    <p className={`text-grayDark font-semibold capitalize ${className}`}>
      {children}
    </p>
  );
}

export default Title;
