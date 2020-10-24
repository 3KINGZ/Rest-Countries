import React from "react";
import moon from "../../assets/icons/crescent-moon.svg";
import sun from "../../assets/icons/sunny.svg";
import "./Header.scss";

function Header({ mode, darkMode }) {
  return (
    <div className={`header ${darkMode ? "dark-mode-header" : "light-mode"}`}>
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div className="dark-mode-btn" onClick={mode}>
        <img
          className="moon-icon"
          src={darkMode ? sun : moon}
          alt="dark-mode-icon"
          width={17}
        />{" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </div>
  );
}

export default Header;
