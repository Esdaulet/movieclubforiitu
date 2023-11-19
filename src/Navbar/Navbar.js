import React from "react";
import "./Navbar.css";
import progileImage from "../Icons/boy.jpg";
import { FcSearch } from "react-icons/fc";
import { GrNotification } from "react-icons/gr";

export default function Navbar() {
  return (
    <div className="MainNavbar">
      <div className="SearchDiv" style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid white",
            padding: "5px",
            borderRadius: "8px",
            marginLeft:"10px",
            marginTop:"10px"
          }}
        >
          <div className="searchIconContainer">
            <FcSearch className="searchIcon" />
          </div>
          <input type="search" className="inputStyle" placeholder="Search" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className="divforTwo"
        >
          <GrNotification className="notificationIcon" />
          <img src={`${progileImage}`} alt="" className="profileimages" />
          <p className="profileName">Esdaulet</p>
        </div>
      </div>
    </div>
  );
}
