import React, { useContext } from "react";
import { ModeContext } from "../../App";
import "./Filter.scss";

function Filter({ filterVal, onFilterChange }) {
  const mode = useContext(ModeContext);

  return (
    <div className="filter-container">
      <select
        value={filterVal}
        onChange={(e) => onFilterChange(e.target.value)}
        className={`filter ${mode ? "filter-dark" : "filter-light"}`}
      >
        <option value="" disabled defaultChecked>
          Filter by Region
        </option>
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
