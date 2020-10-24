import React, { useState, useEffect } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import Countries from "../../components/Countries/Countries";
import { getCountries } from "../../services/services";
import "./HomePages.scss";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCountries()
      .then((data) => setCountries(data))
      .then((e) => setError("an error occurred"));
  }, []);

  return (
    <div className="homepage">
      <InputContainer />
      <div>
        <Countries countries={countries} />
      </div>
    </div>
  );
}

export default HomePage;
