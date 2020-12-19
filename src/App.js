import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Planets from "./components/Planets";

//@ staleTime: fetching time to keep fetched data fresh
//           - It will refetch to see if there any updated data
//             that will render to the dom and keep it fresh

//@ cacheTime: this is how long stale queries are cached for
//              before they are disposed of
//          Ex: If we go on to another component and
//              back again it will use cached data and
//              it will really quick to load for cache time
//              (default: 300,000 ms)

import "./styles/styles.css";

const queryClient = new QueryClient();

/////////////////   SET default query options   ////////////////////

queryClient.setDefaultOptions({
  queries: {
    // staleTime: 0,
    // cacheTime: 300000,
  },
});

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>STAR WARS</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <Films />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
