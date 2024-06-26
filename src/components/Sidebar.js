import React from "react";
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../css/sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />

        <div className="sidebar_headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
        <div className="sidebar_search"></div>
        <div className="sidebar_chat"></div>
      </div>
    </div>
  );
}

export default Sidebar;
