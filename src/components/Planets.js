import React from "react";
import { useQuery } from "react-query";

import Planet from "./Planet";

////////////  async function of fetching data of planets from api  //////////

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  //////////////   useQuery to get data of planets asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const { data, status } = useQuery("planets", fetchPlanets, {
    staleTime: 0,
    cacheTime: 10,
    onSuccess: () => console.log("Planets Data feched successfully"),
    onError: () => console.log("Error while fetching data of Planets"),
  });

  return (
    <>
      <h2>Planets</h2>

      {status === "loading" ? (
        <div>loading....</div>
      ) : status === "error" ? (
        <div> Error fetching data</div>
      ) : status === "success" ? (
        data.results.map((planet) => (
          <Planet key={planet.name} planet={planet} />
        ))
      ) : null}
    </>
  );
};

export default Planets;
