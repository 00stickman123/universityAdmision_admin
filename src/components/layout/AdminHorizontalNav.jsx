import React from "react";
import UserDropdown from "./UserDropdown";

function AdminHorizontalNav() {
  return (
    <div className="fixed top-0 right-0 z-40 items-center justify-end hidden py-3 bg-white shadow-md dark:bg-slate-900 text-grayDark dark:text-white md:flex horizontal-nav-width pr-9">
      <UserDropdown />
    </div>
  );
}

export default AdminHorizontalNav;
