import React from "react";
import { useQuery } from "react-query";

import Film from "./Film";

const fetchFilms = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  return res.json();
};

const Films = () => {
  const { data, status } = useQuery("films", fetchFilms);
  console.log(data);

  return (
    <>
      <h2>Films</h2>
      {status == "loading" ? (
        <div>loading</div>
      ) : status == "error" ? (
        <div> Error fetching data</div>
      ) : status == "success" ? (
        data.results.map((film) => <Film key={film.name} film={film} />)
      ) : null}
      );
    </>
  );
};

export default Films;
