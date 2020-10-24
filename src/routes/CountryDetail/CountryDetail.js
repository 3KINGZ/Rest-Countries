import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getCountry } from "../../services/services";
import backButton from "../../assets/icons/left-arrow.svg";
import Info from "../../components/Info/Info";
import { ModeContext } from "../../App";
import loadingGif from "../../assets/icons/loading.gif";
import "./CountryDetail.scss";

function CountryDetail({ match }) {
  const [country, setCountry] = useState({
    languages: [{ name: "" }],
    currencies: [{ name: "" }],
    topLevelDomain: [],
    borders: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const mode = useContext(ModeContext);

  useEffect(
    () => {
      getCountry(match.params.name)
        .then((data) => {
          setCountry(data);
          setLoading(false);
        })
        .catch((e) => {
          setError("an error occurred");
          setLoading(false);
        });
    },
    // eslint-disable-next-line
    []
  );

  let {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  console.log(country);

  return (
    <div className="country-detail">
      <Link to="/">
        <div className={`back-btn ${mode ? "back-btn-dark" : null}`}>
          <img
            src={backButton}
            alt="back button"
            className="back-btn-img"
            width={30}
          />
          {"  "}
          Back
        </div>
      </Link>
      {error ? (
        <div className="loading-error">
          <h2>{error}</h2>
        </div>
      ) : loading ? (
        <div className="loading-error">
          <h2>
            <img src={loadingGif} alt="loading" />
          </h2>
        </div>
      ) : (
        <>
          <div className="main-country-detail">
            <div className="info1">
              <img src={flag} alt={`${name} flag`} className="flag-detail" />
            </div>
            <div className="info2">
              <h2>{country.name}</h2>
              <div className="country-detail-info">
                <div className="infoo">
                  <Info name="Native Name" value={nativeName} />
                  <Info name="Population" value={population} />
                  <Info name="Region" value={region} />
                  <Info name="Sub Region" value={subregion} />
                  <Info name="Capital" value={capital} />
                </div>
                <div className="infoo infoo2">
                  <Info
                    name="Top Level Domain"
                    value={topLevelDomain}
                    type="multiple"
                  />
                  <Info name="Currencies" value={currencies} type="object" />
                  <Info name="Languages" value={languages} type="object" />
                </div>
              </div>
              <Info
                name="Border Countries"
                value={borders}
                type="multiple-block"
              />
            </div>
          </div>
        </>
      )}

      {/* <div className="main-country-detail">
        <div>
          <img src={flag} alt={`${name} flag`} className="flag-detail" />
        </div>
        <div className="info2">
          <h2>{country.name}</h2>
          <div className="country-detail-info">
            <div className="infoo">
              <Info name="Native Name" value={nativeName} />
              <Info name="Population" value={population} />
              <Info name="Region" value={region} />
              <Info name="Sub Region" value={subregion} />
              <Info name="Capital" value={capital} />
            </div>
            <div className="infoo infoo2">
              <Info
                name="Top Level Domain"
                value={topLevelDomain}
                type="multiple"
              />
              <Info name="Currencies" value={currencies} type="object" />
              <Info name="Languages" value={languages} type="object" />
            </div>
          </div>
          <Info name="Border Countries" value={borders} type="multiple-block" />
        </div>
      </div> */}
    </div>
  );
}

export default CountryDetail;
