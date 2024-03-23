import React from "react";
import Title from "../Title";
import SmallTitle from "../SmallTitle";
import Table from "../Table";
import PieChart from "./PieChart";
import Line from "../../commonSection/Line";
import MultiLineChart from "./MultiLineChart";
import LineChart from "./LineChart";
import ProductDashboardIcon from "../../icons/ProductDashboardIcon";
import GainDashboardIcon from "../../icons/GainDashboardIcon";
import SpentDashboardIcon from "../../icons/SpentDashboardIcon";
import InfoDashboardCard from "./InfoDashboardCard";
import UserDashboardIcon from "../../icons/UserDashboardIcon";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { Navigate, useNavigate } from "react-router-dom"

function AdminDashboard() {
  const listProducts = {
    data: [{ id: 1, productName: "Cat" }],
  };
  const navigate = useNavigate();
  // const { isAdmin } = useIsLogin();
  // if (!isAdmin) {
  //   console.log(!isAdmin);
  //   return <Navigate to="/home" />
  // }
  return (
    <div>
      <Title>Dashboards</Title>
      <div className="mt-5 bg-white block-border">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <InfoDashboardCard
            title="Current User"
            value={12}
            icon={<UserDashboardIcon />}
          />
          <InfoDashboardCard
            title="Number"
            value={45}
            icon={<ProductDashboardIcon />}
          />
          <InfoDashboardCard
            title="Revenue"
            value={2}
            token={true}
            icon={<GainDashboardIcon />}
          />
          <InfoDashboardCard
            title={"Spend"}
            value={5}
            token={true}
            icon={<SpentDashboardIcon />}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-6733">
          <div className="w-full rounded-lg border border-[#D9D9F2]">
            <SmallTitle className="p-3">RECENT ORDERS</SmallTitle>
            <Line />
            <div className="table-style">
              <Table
                pageSizePagination={10}
                columns={columns}
                data={listProducts?.data}
              />
            </div>
          </div>
          <div className="w-full rounded-lg border border-[#D9D9F2]">
            <SmallTitle className="p-3">Pie Activity</SmallTitle>
            <Line />
            <PieChart />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-6733">
          <div className="w-full rounded-lg border border-[#D9D9F2]">
            <SmallTitle className="p-3">MONTHLY ACTIVITY</SmallTitle>
            <Line />
            <div className="p-3">
              <MultiLineChart />
            </div>
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="w-full rounded-lg border border-[#D9D9F2]">
              <SmallTitle className="p-3">TOTAL PRODUCTS</SmallTitle>
              <Line />
              <div className="grid items-center grid-cols-2 gap-5 p-3">
                <div className="text-xl font-medium">75000$</div>
              </div>
            </div>
            <div className="w-full rounded-lg border border-[#D9D9F2]">
              <SmallTitle className="p-3">TOTAL SALES</SmallTitle>
              <Line />
              <div className="grid items-center grid-cols-2 gap-5 p-3">
                <div className="text-xl font-medium">75000$</div>
              </div>
            </div>
            <div className="w-full rounded-lg border border-[#D9D9F2]">
              <SmallTitle className="p-3">TOTAL EXPENSES</SmallTitle>
              <Line />
              <div className="grid items-center grid-cols-2 gap-5 p-3">
                <div className="text-xl font-medium">12000$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 border border-[#D9D9F2] rounded-lg">
          <SmallTitle className="p-3">Line chart data</SmallTitle>
          <Line />
          <div className="p-3">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

const columns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Product Name",
        accessor: (data) => <p>{data?.productName}</p>,
      },
      {
        Header: "Product Description",
        accessor: (data) => <p>{data?.description}</p>,
      },
    ],
  },
];
