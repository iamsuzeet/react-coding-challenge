import { AiOutlineSearch } from 'react-icons/ai';

const Search = (props) => {
  const { searchVal, setSearchVal, isFetching } = props;
  return (
    <div className=" p-1 bg-light rounded rounded-pill shadow-sm mb-4">
      <div className="input-group">
        <input
          type="search"
          placeholder="Search Repositories..."
          className="form-control border-0 bg-light"
          value={searchVal || ''}
          onChange={(e) => setSearchVal(e.target.value)}
          disabled={isFetching}
        />
        <div className="input-group-append">
          <button
            disabled={!searchVal || isFetching}
            type="submit"
            className="btn btn-link text-primary"
          >
            <AiOutlineSearch size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
