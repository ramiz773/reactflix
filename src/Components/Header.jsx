import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchBox from "./SearchBox";
import FavoriteButton from "./FavoriteButton";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <img src={Logo} alt="" width={96} />
            </Link>
            <Link to={"/favorites"}>Favorite</Link>
          </div>
          <SearchBox></SearchBox>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
