import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <>
      <nav>
        <button onClick={(setPage = "planets")}>Planets</button>
        <button onClick={(setPage = "people")}>People</button>
      </nav>
    </>
  );
};
