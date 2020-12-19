import React, { useState } from "react";
import { useQuery } from "react-query";

import Planet from "./Planet";

////////////  async function of fetching data of planets from api  //////////

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  //////////////   useQuery to get data of planets asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const { data, status } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      staleTime: 0,
      cacheTime: 10,
      onSuccess: () => console.log("Planets Data feched successfully"),
      onError: () => console.log("Error while fetching data of Planets"),
    }
  );

  return (
    <>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

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
