import React from "react";
import Header from "../header/Header";
import HeaderBottom from "../header/HeaderBottom";
import Footer from "../footer/Footer";

function MainLayout(props) {
  return (
    <>
      <Header />
      <HeaderBottom />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
