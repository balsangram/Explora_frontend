// import React, { useState } from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";

function Sidebar() {
  // const [side, setSide] = useState(true); // This is the state for toggling sidebar visibility

  // Function to toggle sidebar visibility
  // function sidebarToggle() {
  //   setSide(!side);
  //   console.log(side);
  // }

  return (
    <div
      className="sidebar"
      // className={`sidebar ${side ? "visible" : "hidden"}`}
    >
      <h2>Sidebar Menu</h2>
      {/* Use onClick without parentheses to pass function reference */}
      {/* <p
      //  onClick={sidebarToggle}
      >
        Click to Toggle Sidebar
      </p> */}
      <ul className="sidebar-list">
        <li>
          {" "}
          <HomeIcon /> Home
        </li>
        <li>
          <SearchIcon /> Search
        </li>
        <li>
          <MessageIcon /> Messages
        </li>
        <li>
          {" "}
          <PersonIcon /> Profile
        </li>
        <li className="more-buttom">
          <ReorderIcon />
          More
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
