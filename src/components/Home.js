import React, { useState } from "react";

import Navbar from "./Navbar";
import Films from "./Films";
import Planets from "./Planets";
import People from "./People";
import Starships from "./Starships";

const Home = () => {
  const [page, setPage] = useState("planets");

  return (
    <div>
      <div className="App">
        <h1>STAR WARS</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? (
            <Planets />
          ) : page === "people" ? (
            <People />
          ) : page === "starships" ? (
            <Starships />
          ) : (
            <Films />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
