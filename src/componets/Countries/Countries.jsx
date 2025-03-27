import React, { use, useState } from "react";

import Country from "../country/Country";
import "./countries.css";

const Countries = ({ CountriesPromise }) => {
  const [VisitedCountries, setVisitedCountries] = useState([]);
  const Countries = use(CountriesPromise);
  const handelVisitedCountries = (country) => {
    console.log("clicked visited countries ", country);
  };
  console.log(Countries);
  return (
    <div>
      <h1>Traveling Countries : {Countries.length}</h1>
      <div className="countries">
        {Countries.map((country) => (
          <Country
            key={country.cca3}
            handelVisitedCountries={handelVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
