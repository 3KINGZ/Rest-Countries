import React from "react";
import moon from "../../assets/icons/moon.svg";
import "./Header.scss";

function Header({ mode, darkMode }) {
  return (
    <div className={`header ${darkMode ? "dark-mode-header" : "light-mode"}`}>
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div className="dark-mode-btn" onClick={mode}>
        <img className="moon-icon" src={moon} alt="dark-mode-icon" width={17} />{" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </div>
  );
}

export default Header;
