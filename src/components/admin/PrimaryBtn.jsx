import React from "react";

function PrimaryBtn({
  className = "",
  accessoriesLeft = null,
  accessoriesRight = null,
  children,
  onClick = null,
  ...props
}) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 bg-primaryy w-full rounded text-white border min-w-[140px] mt-0 border-primary font-medium py-3 px-4 active:bg-primaryDark disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
    >
      {accessoriesLeft && <div className="">{accessoriesLeft}</div>}
      {children}
      {accessoriesRight && <div className="">{accessoriesRight}</div>}
    </button>
  );
}

export default PrimaryBtn;
