import React, { useContext } from "react";
import { ModeContext } from "../../App";
import "./Input.scss";

function Input() {
  const mode = useContext(ModeContext);

  return (
    <div className="input-text-container">
      <input
        type="text"
        placeholder="Search for a country..."
        className={`search-input ${
          mode ? "search-input-dark" : "search-input-light"
        }`}
      />
    </div>
  );
}

export default Input;
