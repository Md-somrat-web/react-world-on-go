import React, { use } from "react";

import Country from "../country/Country";
import "./countries.css";

const Countries = ({ CountriesPromise }) => {
  const Countries = use(CountriesPromise);
  console.log(Countries);
  return (
    <div>
      <h1>Traveling Countries : {Countries.length}</h1>
      <div className="countries">
        {Countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
