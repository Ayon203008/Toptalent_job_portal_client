import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ! This is applying to get the full screen */}

      <div className="grow">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
