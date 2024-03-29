import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {

const recentItem = (topic) => (
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
  </div>
)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Saeed Ashoor</h2>
        <h3>saeedashoor.dev@gmail.com</h3>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('React JS')}
        {recentItem('Software Engineering')}
        {recentItem('Programming')}
        {recentItem('Web Development')}
        {recentItem('Design')}
      </div>
    </div>
  );
}

export default Sidebar;
