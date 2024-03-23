// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from "../../components/banner/Banner";
import Sale from "../../components/home/sale/Sale"
import BestSellers from "../../components/home/bestSeller/BestSeller";
import NewArrivals from "../../components/home/newArrivals/NewArrivals";
import YearProduct from "../../components/home/yearProduct/YearProduct";
import SpecialOffers from "../../components/home/specialOffers/SpecialOffers";
import Clock from "../../components/home/clock/Clock";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className='w-full mx-auto'>
      <Banner/>
      <div className="max-w-container mx-auto px-4">
      {/* <Sale /> */}
      <NewArrivals />
      <BestSellers />
      <YearProduct />
      <SpecialOffers />
      <Clock/>
      </div>
    </div>
  );
};

export default Home;
