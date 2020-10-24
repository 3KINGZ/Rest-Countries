import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Info from "../Info/Info";
import { ModeContext } from "../../App";
import "./Country.scss";

function Country({ country }) {
  const { flag, name, population, region, capital } = country;

  const mode = useContext(ModeContext);

  return (
    <Link to={`/country/${name}`}>
      <div className={`country ${mode ? "country-dark" : "country-light"}`}>
        <img src={flag} className="flag" alt="country" />
        <div className="info">
          <h3>{name}</h3>
          <div className="main-info">
            <Info name="Population" value={population} />
            <Info name="Region" value={region} />
            <Info name="Capital" value={capital} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
