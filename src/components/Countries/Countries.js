import React from "react";
import Country from "../Country/Country";
import "./Countries.scss";

function Countries({ countries }) {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
}

export default Countries;
