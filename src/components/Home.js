import React, { useState } from "react";

import Navbar from "./Navbar";
import Films from "./Films/Films";
import Planets from "./Planets/Planets";
import People from "./People/People";
import Starships from "./Starships/Starships";

const Home = () => {
  const [page, setPage] = useState("planets");

  return (
    <>
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

        <div className="footer">Made with ♥ by Shubham Dutta</div>
      </div>
    </>
  );
};

export default Home;
