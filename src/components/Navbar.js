import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <>
      <nav>
        <button onClick={() => setPage("planets")}>Planets</button>
        <button onClick={() => setPage("films")}>Films</button>
        <button onClick={() => setPage("people")}>People</button>
        <button onClick={() => setPage("starships")}>Starships</button>
      </nav>
    </>
  );
};

export default Navbar;
