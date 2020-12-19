import React, { useState } from "react";
import { useQuery } from "react-query";

import Planet from "./Planet";

import Loader from "../Loader";

////////////  async function of fetching data of planets from api  //////////

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  //////////////   useQuery to get data of planets asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const { data, status, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    { keepPreviousData: true },
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

      {status === "loading" ? (
        <Loader />
      ) : status === "error" ? (
        <div> Error fetching data</div>
      ) : status === "success" ? (
        <div>
          <button
            onClick={() => setPage((old) => Math.min(old - 1, old))}
            disabled={page == 1}
          >
            Previous
          </button>
          <span>{page}</span>
          <button
            onClick={() => {
              if (!isPreviousData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={!data.next}
          >
            Next
          </button>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Planets;
