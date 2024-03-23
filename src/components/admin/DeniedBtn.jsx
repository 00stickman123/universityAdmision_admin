import React from 'react';

function DeniedBtn({ className = "", children, ...props }) {
    return (
      <button
        {...props}
        className={`bg-denied w-full rounded text-white border border-denied font-medium py-3 px-4 active:bg-[#B52835] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {children}
      </button>
    )
  }
  

export default DeniedBtn;