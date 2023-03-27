import ArrowDown from "components/images/ArrowDown";
import Bell from "components/images/Bell";
import Person from "components/images/Person";
import Search from "components/search/Search";
import React from "react";
import Logo from "../images/Logo";
import "./navbar.scss";

const Navbar = () => {
  const handleChange = ()=>{

  }
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <Logo />
        <Search
          hasButton={true}
          placeholder="Search for anything"
          hasDatalist={false}
          handleChange={handleChange}
        />
      </div>
      <div className="navbar-right">
        <span className="docs">Docs</span>
        <div className="notification">
          <Bell /> <span className="mobile-only">Notification</span>
        </div>
        <div className="person-details">
          <div className="person-image">
            <img src="/images/person.svg" alt="person" />
          </div>

          <div className="profile">
            <span className="username">Adedeji</span>
            <ArrowDown />
          </div>
        </div>
      </div>
      {/* <img src="/images/menu.svg" alt="menu" /> */}
    </div>
  );
};

export default Navbar;
