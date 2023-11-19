import React from "react";
import "./Leftbar.css";
import browse from "../../Icons/New post.png";
import WatcgList from '../../Icons/heart.png';
import Commingsoon from '../../Icons/calendar.png';
import Friend from '../../Icons/friends (1).png';
import parties from '../../Icons/friends.png';
import Settings from '../../Icons/Settingslogo.png';
import logout from '../../Icons/exit.png';
import { Link } from "react-router-dom";

export default function Leftbar() {
  return (
    <div className="leftbarMainContainer">
      <h2 className="logoname">
        Movieclub<span className="dot">.</span>
      </h2>
      <div>
        <p className="menu">Menu</p>
        <ul>
          <li>
            <img src={`${browse}`} className="listicons" alt="" />
            <p className="liListname">Categories</p>
          </li>
          <li>
            <img src={`${WatcgList}`} className="listicons" alt="" />
            <Link to="/watchlist" className="linkstoPage">WatchList</Link>

          </li>
          <li>
            <img src={`${Commingsoon}`} className="listicons" alt="" />
            <p className="liListname">Coming soon</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="menu">Social</p>
        <ul>
          <li>
            <img src={`${Friend}`} className="listicons" alt="" />
            <p className="liListname">Friends</p>
          </li>
          <li>
            <img src={`${parties}`} className="listicons" alt="" />
            <p className="liListname">Parties</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="menu">General</p>
        <ul>
          <li>
            <img src={`${Settings}`} className="listicons" alt="" />
            <p className="liListname">Settings</p>
          </li>
          <li>
            <img src={`${logout}`} className="listicons" alt="" />
            <p className="liListname">Logout</p>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
