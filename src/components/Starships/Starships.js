import React, { useState } from "react";
import { useQuery } from "react-query";

import Starship from "./Starship";

////////////  async function of fetching data of starships from api  //////////

const fetchStarships = async (page) => {
  const res = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
  return res.json();
};

const Starships = () => {
  const [page, setPage] = useState(1);

  //////////////   useQuery to get data of starships asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    status,
    isPreviousData,
  } = useQuery(
    ["starships", page],
    () => fetchStarships(page),
    { keepPreviousData: true },
    {
      staleTime: 0,
      cacheTime: 10,
      onSuccess: () => console.log("Starships Data feched successfully"),
      onError: () => console.log("Error while fetching data of Starships"),
    }
  );

  return (
    <>
      <h2>Starships</h2>

      {status === "loading" ? (
        <div>loading....</div>
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
          {data.results.map((starship) => (
            <Starship key={starship.name} starship={starship} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Starships;
