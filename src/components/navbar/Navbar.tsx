import ArrowDown from "components/images/ArrowDown";
import Bell from "components/images/Bell";
import Search from "components/search/Search";
import { NavbarProps } from "Interface";
import Logo from "../images/Logo";
import "./navbar.scss";

const Navbar = ({ openSidebar }: NavbarProps) => {
  const handleChange = () => {};
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <button className="burger-wrapper" onClick={openSidebar}>
          <img src="/images/burger.svg" alt="burger" />
        </button>

        <Logo />
        <div className="search_container">
          <Search
            hasButton={true}
            placeholder="Search for anything"
            hasDatalist={false}
            handleChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
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
    </div>
  );
};

export default Navbar;
