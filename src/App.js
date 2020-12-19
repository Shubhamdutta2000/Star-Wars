import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

//@ staleTime: fetching time to keep fetched data fresh
//           - It will refetch to see if there any updated data
//             that will render to the dom and keep it fresh

//@ cacheTime: this is how long stale queries are cached for
//              before they are disposed of
//          Ex: If we go on to another component and
//              back again it will use cached data and
//              it will really quick to load for cache time
//              (default: 300,000 ms)

const queryClient = new QueryClient();

/////////////////   SET default query options   ////////////////////

queryClient.setDefaultOptions({
  queries: {
    // staleTime: 0,
    // cacheTime: 300000,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
