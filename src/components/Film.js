import React from "react";

const Film = ({ film }) => {
  return (
    <div className="card">
      <h3>{film.title}</h3>
      <p>Director - {film.director}</p>
      <p>Release Date - {film.release_date}</p>
    </div>
  );
};

export default Film;
