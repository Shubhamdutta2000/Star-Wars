import React, { useState } from "react";

import Navbar from "./Navbar";
import Films from "./Films";
import Planets from "./Planets";

const Home = () => {
  const [page, setPage] = useState("planets");

  return (
    <div>
      <div className="App">
        <h1>STAR WARS</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <Films />}
        </div>
      </div>
    </div>
  );
};

export default Home;
