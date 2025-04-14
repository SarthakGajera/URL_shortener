import Footer from "../components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
