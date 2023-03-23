import React, { useState } from "react";
import { sidebarNav, businessNav, settingsNav } from "../../staticData";
import "./sidebar.scss";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<number>(0)
  const handleClick =  (index: number)=>{
    setActiveLink(index)
    console.log(activeLink);
    
  }
  return (
    <aside className="sidebar-wrapper">
      <nav className="switch-wrapper">
        <img src="/images/switch.svg" alt="switch" />
        <span className="switch-text">Switch Organization</span>
        <img src="/images/arrowdown.svg" alt="arrowdown" />
      </nav>
      <nav className="dashboard-wrapper">
        <img
          src="/images/dashboard.svg"
          alt="dashboard"
          className="dashboard-icon"
        />
        <span className="dashboard-text">Dashboard</span>
      </nav>
      <div>
        <p className="link-header">CUSTOMERS</p>
      </div>
      <div className="link-wrapper">
        {sidebarNav.map((item, index) => (
          <nav
            key={index}
            className={
              activeLink === index
                ? "customer-link nav-link link-border"
                : "customer-link nav-link"
            }
            onClick={() => handleClick(index)}
          >
            <img src={item.icon} alt={item.alt} />
            <span className="link-text">{item.text}</span>
          </nav>
        ))}
      </div>
      <div className="settings">
        <p className="link-header">BUSINESSES</p>
      </div>
      <div className="link-wrapper">
        {businessNav.map((item, index) => (
          <nav key={index} className="nav-link">
            <img src={item.icon} alt={item.alt} />
            <span className="link-text">{item.text}</span>
          </nav>
        ))}
      </div>
      <div className="settings">
        <p className="link-header ">SETTINGS</p>
      </div>
      <div className="link-wrapper">
        {settingsNav.map((item, index) => (
          <nav key={index} className="nav-link">
            <img src={item.icon} alt={item.alt} />
            <span className="link-text">{item.text}</span>
          </nav>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
