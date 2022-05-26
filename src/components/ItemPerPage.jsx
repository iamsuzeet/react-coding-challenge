const pageSizes = [10, 25, 50];

const ItemPerPage = (props) => {
  const { pageSize, setPageSize, handlePageSizeChange } = props;

  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-1 mr-2">
        <select
          className="form-select"
          value={pageSize}
          onChange={(e) => {
            setPageSize(e.target.value);
            handlePageSizeChange(e.target.value);
          }}
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <span>per page</span>
    </div>
  );
};

export default ItemPerPage;
