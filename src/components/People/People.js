import React, { useState } from "react";
import { useQuery } from "react-query";

import Person from "./Person";

////////////  async function of fetching data of people from api  //////////

const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);

  //////////////   useQuery to get data of people asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    status,
    isPreviousData,
  } = useQuery(
    ["people", page],
    () => fetchPeople(page),
    { keepPreviousData: true },
    {
      staleTime: 0,
      cacheTime: 10,
      onSuccess: () => console.log("People Data feched successfully"),
      onError: () => console.log("Error while fetching data of People"),
    }
  );

  return (
    <>
      <h2>People</h2>

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
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default People;