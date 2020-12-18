import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Planets from "./components/Planets";

import "./styles/styles.css";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>STAR WARS</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <Films />}
      </div>
    </div>
  );
}

export default App;
