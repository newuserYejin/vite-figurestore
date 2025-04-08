import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const menuList = ["짱구", "커비", "스누피", "산리오"];

  return (
    <div className="NavbarCss">
      <div>
        <div className="loginButton">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="navLogo">
        <img src={logoImg} alt="로고" />
      </div>
      <div className="menuArea">
        <ul className="menuList">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="searchBox">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
