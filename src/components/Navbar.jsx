import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router";

const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const menuList = ["짱구", "커비", "스누피", "산리오"];

  return (
    <div className="NavbarCss">
      <div>
        <div className="loginButton">
          <FontAwesomeIcon icon={faUser} />
          {auth ? (
            <div onClick={() => setAuth((prev) => !prev)}>로그아웃</div>
          ) : (
            <div onClick={() => navigate("/login")}>로그인</div>
          )}
        </div>
      </div>
      <div className="navLogo">
        <img src={logoImg} alt="로고" onClick={() => navigate("/")} />
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
