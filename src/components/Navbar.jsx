import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router";

const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const menuList = ["짱구", "커비", "스누피", "산리오"];
  const [searchWord, setSearchWord] = useState("");

  const [showSidebar, setShowSidebar] = useState(false);

  const handleCloseSidebar = () => {
    console.log("클릭");
    setShowSidebar(false);
  };

  async function itemSearch(e) {
    if (e.key == "Enter") {
      let keyword = e.target.value;

      navigate(`/?q=${keyword}`);
    }
  }

  function goHome() {
    setSearchWord("");
    navigate("/");
  }

  return (
    <div className="NavbarCss">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="hambergerIcon"
          onClick={() => setShowSidebar(true)}
        />
        <div className="loginButton">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FontAwesomeIcon icon={faUser} />
            {auth ? (
              <div onClick={() => setAuth((prev) => !prev)}>로그아웃</div>
            ) : (
              <div onClick={() => navigate("/login")}>로그인</div>
            )}
          </div>
        </div>
      </div>
      <div className="navLogo">
        <img src={logoImg} alt="로고" onClick={goHome} />
      </div>
      <div className="menuArea">
        <ul className="menuList">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="searchBox">
          <FontAwesomeIcon icon={faSearch} />
          <input
            value={searchWord}
            type="text"
            onKeyUp={(e) => itemSearch(e)}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
      </div>

      {showSidebar && (
        <div className="sidebarOverlay" onClick={handleCloseSidebar}>
          <div className="sideBar">
            <div>메뉴</div>
            <ul className="menuList">
              {menuList.map((menu, index) => (
                <li key={index} onClick={handleCloseSidebar}>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
