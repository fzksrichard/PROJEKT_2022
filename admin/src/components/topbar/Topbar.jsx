/* import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  localStorage.clear();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());

  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DAC ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.postimg.cc/4yycwnyW/logo2.png" alt="" className="topAvatar" />
          <a onClick={(e) => handleLogout(e)} href="/login" className="logout">KIJELENTKEZÉS</a>
        </div>
      </div>
    </div>
  );
} */
  import React from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  localStorage.clear();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  
  }

  


  return (
    
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN OLDAL</span>
        </div>
        <div className="topRight">
         
         <a onClick={(e) => handleLogout(e)} href="/login"  className="logout">KIJELENTKEZÉS</a>
         
        </div>
      </div>
    </div>
  );
}
