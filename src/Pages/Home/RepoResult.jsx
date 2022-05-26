import NoItem from 'components/NoItem';
import Spinner from 'components/Spinner';
import { useSearchRepoData } from 'query/search-query';
import RepoList from './RepoList';

const sortOptions = [
  {
    title: 'Best Match',
    value: 'best match',
  },
  {
    title: 'Stars',
    value: 'stars',
  },
  {
    title: 'Forks',
    value: 'forks',
  },
  {
    title: 'Updated',
    value: 'updated',
  },
];

const RepoResult = (props) => {
  const { searchParams, setSearchParams } = props;

  const { data: searchRepoData, isFetching } = useSearchRepoData(searchParams);

  const handleSortChange = (event) => {
    setSearchParams((params) => ({
      ...params,
      sort: event.target.value,
    }));
  };

  return (
    <>
      {!searchParams?.q && !searchRepoData?.data?.items?.length && (
        <NoItem message={'Nothing to show, Please query repository'} />
      )}

      {searchParams?.q && (
        <div className="d-flex justify-content-between">
          {!isFetching && (
            <h4>{searchRepoData?.data?.total_count || 0} repository results</h4>
          )}

          <div className="ml-auto">
            <div className="input-group mb-3 mw-100">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="sortOptions">
                  Sort:
                </label>
              </div>
              <select
                className="custom-select form-select"
                id="sortOptions"
                onChange={handleSortChange}
                disabled={isFetching}
              >
                {sortOptions?.map((sort) => (
                  <option
                    value={sort.value}
                    key={sort.title}
                    defaultValue={searchParams?.sort === sort.value}
                  >
                    {sort.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {isFetching ? <Spinner /> : <RepoList searchParams={searchParams} />}
    </>
  );
};

export default RepoResult;
