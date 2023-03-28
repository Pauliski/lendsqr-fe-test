import { SidebarProps } from "Interface";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarNav, businessNav, settingsNav } from "../../staticData";
import "./sidebar.scss";

const Sidebar = ({ sidebarIsOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Users");
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    setActiveLink(route);
    if (route === "Users") {
      navigate("/users");
    } else {
      navigate(`/${route.toLocaleLowerCase()}`);
    }
  };
  return (
    <aside className={sidebarIsOpen ? "sidebar-wrapper open-sidebar" : "sidebar-wrapper"}>
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
              activeLink === item.text
                ? "customer-link nav-link link-border"
                : "customer-link nav-link"
            }
            onClick={() => handleClick(item.text)}
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
