import { useState } from "react";
import "./country.css";

const Country = ({ country, handelVisitedCountries }) => {
  console.log(country.flags);

  const [Visited, setVisited] = useState(false);
  console.log(handelVisitedCountries);

  const handleVisited = () => {
    // if (Visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!Visited);
    handelVisitedCountries(country);
  };
  return (
    <div className={`country ${Visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.png} alt="" />
      <p>Independent :{country.independent ? "Free" : "Not Free"}</p>
      <p>Population :{country.population}</p>
      <p>continents : {country.continents}</p>
      <p>status : {country.status}</p>
      <button onClick={handleVisited}>
        {" "}
        {Visited ? "visited" : "not Visited"}
      </button>
    </div>
  );
};

export default Country;
