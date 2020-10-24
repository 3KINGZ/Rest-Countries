import React, { useContext } from "react";
import { ModeContext } from "../../App";
import "./Filter.scss";

function Filter() {
  const mode = useContext(ModeContext);
  return (
    <div className="filter-container">
      <select className={`filter ${mode ? "filter-dark" : "filter-light"}`}>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
