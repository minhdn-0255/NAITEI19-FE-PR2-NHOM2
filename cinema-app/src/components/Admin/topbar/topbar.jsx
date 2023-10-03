import React from "react";
import "./topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Movie Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <FontAwesomeIcon icon="fa-regular fa-bell" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
