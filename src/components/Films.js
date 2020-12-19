import React from "react";
import { useQuery } from "react-query";

import Film from "./Film";

////////////  async function of fetching data of films from api  //////////

const fetchFilms = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  return res.json();
};

const Films = () => {
  //////////////   useQuery to get data of films asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const { data, status } = useQuery("films", fetchFilms, {
    staleTime: 0,
    cacheTime: 10,
    onSuccess: () => console.log("Films Data feched successfully"),
    onError: () => console.log("Error while fetching data of films"),
  });

  return (
    <>
      <h2>Films</h2>
      {status === "loading" ? (
        <div>loading...</div>
      ) : status === "error" ? (
        <div> Error fetching data</div>
      ) : status === "success" ? (
        data.results.map((film) => <Film key={film.title} film={film} />)
      ) : null}
    </>
  );
};

export default Films;
