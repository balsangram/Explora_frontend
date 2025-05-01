import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Heading from "./Heading";
import Sidebar from "./Sidebar";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* <Heading /> */}
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
