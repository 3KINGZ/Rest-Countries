import React, { useState, useEffect } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import Countries from "../../components/Countries/Countries";
import { getCountries } from "../../services/services";
import loadingGif from "../../assets/icons/loading.gif";
import "./HomePages.scss";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterVal, setFilterValue] = useState("");

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((e) => {
        setError("...Oops an error occurred while fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="homepage">
      {loading ? (
        <div className="loading-error">
          <h2>
            <img src={loadingGif} alt="loading" width={100} />
          </h2>
        </div>
      ) : error ? (
        <div className="loading-error">
          <h2>{error}</h2>
        </div>
      ) : (
        <>
          <InputContainer
            inputVal={inputValue}
            onInputChange={setInputValue}
            filterVal={filterVal}
            onFilterChange={setFilterValue}
          />
          <div>
            <Countries
              countries={countries}
              searchVal={inputValue}
              filterVal={filterVal}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
