import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const Country1 = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountry(data);
    };
    fetchData();
    return () => {
      // cleanup
    };
  }, []);

  const filteredCountry = country.filter((countries) => {
    return countries.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <div className="row">
        <div className="full">
          <input
            className="search"
            placeholder="search"
            input="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredCountry.map((element, index) => (
            <div key={index} className="con">
              <div className="tex">
                <p>{index + 1}</p>
              </div>
              <div className="tex">
                <p>{element.name}</p>
              </div>
              <div className="tex">
                <p>{element.capital}</p>
              </div>
              <div className="tex">
                <p>{element.nativeName}</p>
              </div>
              <div className="tex">
                <p>{element.population}</p>
              </div>
              <div className="tex">
                <img src={element.flag} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country1;
