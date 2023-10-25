import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <img src={Logo} alt="" width={96} />
            </Link>
            <Link to={"/favorites"}>Favorites</Link>
          </div>
          <div className="searchBox">
            <input className="searchField" type="search" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
