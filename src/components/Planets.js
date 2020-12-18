import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");

  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  return (
    <>
      <h2>Planets</h2>

      {status == "loading" ? (
        <div>loading</div>
      ) : status == "error" ? (
        <div> Error fetching data</div>
      ) : status == "success" ? (
        data.results.map((planet) => (
          <Planet key={planet.name} planet={planet} />
        ))
      ) : null}
    </>
  );
};

export default Planets;
