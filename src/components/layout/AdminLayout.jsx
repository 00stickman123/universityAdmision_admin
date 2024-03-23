import React from "react";
import AdminMainNav from "./AdminMainNav";
import AdminHorizontalNav from "./AdminHorizontalNav";
import AdminFooter from "./AdminFooter";

function AdminLayout(props) {
  return (
    <div className="flex bg-[#F6F5FA] w-full">
      <AdminMainNav />
      <AdminHorizontalNav />
      <div className="w-full min-h-screen pt-[44px] md:pt-[71px] md:pl-[276px]">
        <div className="flex flex-col justify-between w-full h-full px-4 pt-3 pb-6 md:p-5 text-grayDark">
          {props.children}
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
