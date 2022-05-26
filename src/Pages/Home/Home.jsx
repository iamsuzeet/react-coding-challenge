import ItemPerPage from 'components/ItemPerPage';
import Pagination from 'components/Pagination';
import Search from 'components/Search';
import Section from 'components/Section';
import { useSearchRepoData } from 'query/search-query';
import { useState } from 'react';

import RepoResult from './RepoResult';

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    q: '',
    page: 1,
    per_page: 10,
    sort: 'best match',
    order: 'desc',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);

  const { data: searchRepoData, isFetching } = useSearchRepoData(searchParams);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchParams((prevVal) => ({
        ...prevVal,
        q: searchQuery,
        page: 1,
        per_page: 10,
        sort: 'best match',
        order: 'desc',
      }));
    }
  };

  const handlePageChange = (event) => {
    setSearchParams((prevVal) => ({
      ...prevVal,
      page: event?.selected + 1,
    }));
  };

  const handlePageSizeChange = (number) => {
    setSearchParams((prevVal) => ({
      ...prevVal,
      per_page: number,
    }));
  };

  return (
    <Section>
      <div className="col-md-10 bg-white p-5 rounded shadow">
        <form onSubmit={handleSearchSubmit}>
          <Search
            searchVal={searchQuery}
            setSearchVal={setSearchQuery}
            isFetching={isFetching}
          />
        </form>
        <RepoResult
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        {searchRepoData?.data?.items?.length && (
          <div className="mt-4 d-flex align-items-center justify-content-between">
            <ItemPerPage
              pageSize={pageSize}
              setPageSize={setPageSize}
              handlePageSizeChange={handlePageSizeChange}
            />

            <Pagination
              pageCount={Math.ceil(
                searchRepoData?.data?.total_count / searchParams?.per_page
              )}
              handlePageChange={handlePageChange}
              currentPage={searchParams?.page - 1}
            />
          </div>
        )}
      </div>
    </Section>
  );
};

export default Home;
