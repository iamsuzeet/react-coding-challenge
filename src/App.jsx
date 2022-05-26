import 'assets/scss/main.scss';

import Home from 'Pages/Home/Home';
import RepoDetails from 'Pages/RepoDetails';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * If set to `true`, the query will refetch on window focus if the data is stale.
       * If set to `false`, the query will not refetch on window focus.
       * If set to `'always'`, the query will always refetch on window focus.
       * Defaults to `true`.
       */
      refetchOnWindowFocus: false,

      /**
       * The time in milliseconds after data is considered stale.
       * If set to `Infinity`, the data will never be considered stale.
       */
      staleTime: 20 * 1000,
      /**
       * If `false`, failed queries will not retry by default.
       * If `true`, failed queries will retry infinitely., failureCount: num
       * If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
       * If set to a function `(failureCount, error) => boolean` failed queries will retry until the function returns false.
       */
      retry: false,

      //and many more . you can check docs
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username/:reponame" element={<RepoDetails />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <ReactQueryDevtools />} */}
    </QueryClientProvider>
  );
}

export default App;
