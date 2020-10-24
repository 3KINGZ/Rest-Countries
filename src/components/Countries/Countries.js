import React from "react";
import Country from "../Country/Country";
import "./Countries.scss";

export const InputContext = React.createContext();

function Countries({ countries, searchVal, filterVal }) {
  return (
    <div className="countries">
      {countries
        .filter((countri) =>
          countri.name.toLowerCase().includes(searchVal.toLowerCase())
        )
        .filter((countri2) =>
          countri2.region.toLowerCase().includes(filterVal.toLowerCase())
        )
        .map((country) => (
          <Country country={country} key={country.name} />
        ))}
    </div>
  );
}

export default Countries;
