import React from "react";

function ShowPasswordIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 12s-3.636 7-10 7-10-7-10-7 3.636-7 10-7c2.878 0 5.198 1.432 6.876 3M9 12a3 3 0 103-3"
        stroke="#707670"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ShowPasswordIcon;
