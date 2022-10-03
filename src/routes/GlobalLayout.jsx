import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <div>
            <Navbar />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalLayout;
