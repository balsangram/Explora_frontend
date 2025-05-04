import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
// import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomFriend from "../components/friend/CustomFriend";
import profileImg from "../assets/profile/profile.jpg";
import CustomSearch from "../components/search/CustomSearch";
import SearchMap from "../components/customSearch/SearchMap";
import SearchFriend from "../components/customSearch/searchFriend";
import MapIcon from "@mui/icons-material/Map";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [message, setMessage] = useState(false);
  const [search, setSearch] = useState(false);
  const [map, setMap] = useState(false);

  function sidebarFunction() {
    setSidebar(false);
    setMessage(false);
    setSearch(false);
    setMap(false);
  }

  function searchFunction() {
    setSidebar(true);
    setSearch(true);
    setMessage(false);
    setMap(false);
  }
  function messageFunction() {
    setSidebar(true);
    setMessage(true);
    setSearch(false);
    setMap(false);
  }
  function mapFunction() {
    setSidebar(true);
    setMap(true);
    setMessage(false);
    setSearch(false);
  }

  return (
    <div className={`sidebar_main ${sidebar ? "sidebar" : ""}`}>
      <h2>EXPLORER</h2>
      <div className={`sidebar_friends ${message ? "message" : ""}`}>
        <CustomFriend
          profile={profileImg}
          name="sangram"
          message="hello"
          time="12.30"
        />
      </div>

      <div className={`sidebar_friends ${search ? "search" : ""}`}>
        <SearchFriend />
      </div>
      <div className={`sidebar_friends ${map ? "map" : ""}`}>
        <SearchMap />
      </div>

      <ul className="sidebar_list">
        <li>
          <Link className="sidebar_Link" to="/" onClick={sidebarFunction}>
            <HomeIcon />
            <span className="sidebar_link_name">Home</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_Link" to="search" onClick={searchFunction}>
            <SearchIcon />
            <span className="sidebar_link_name">Search</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_Link" to="map" onClick={mapFunction}>
            <MapIcon />
            <span className="sidebar_link_name">Map</span>
          </Link>
        </li>
        <li>
          <Link
            className="sidebar_Link"
            to="connection/group"
            onClick={messageFunction}
          >
            <MessageIcon />
            <span className="sidebar_link_name">Messages</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar_Link" to="profile" onClick={sidebarFunction}>
            <PersonIcon />
            <span className="sidebar_link_name">Profile</span>
          </Link>
        </li>
      </ul>
      <button className="more_btn">
        <MenuIcon />
        <span className="btn_text">
        More
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
