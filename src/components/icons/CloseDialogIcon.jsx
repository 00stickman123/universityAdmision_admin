import React from "react";

function CloseDialogIcon({ color = "#EB5757", ...props }) {
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
        opacity={0.4}
        d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2z"
        fill={color}
      />
      <path
        d="M15.016 13.77l-1.779-1.777 1.778-1.779a.874.874 0 000-1.237.872.872 0 00-1.237 0L12 10.753l-1.779-1.78a.877.877 0 00-1.238 0 .877.877 0 000 1.239l1.78 1.78-1.776 1.774a.874.874 0 101.237 1.239L12 13.229l1.78 1.78a.876.876 0 001.237-1.238"
        fill={color}
      />
    </svg>
  );
}

export default CloseDialogIcon;
