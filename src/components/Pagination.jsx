import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const { pageCount, handlePageChange, currentPage } = props;
  return (
    <ReactPaginate
      pageCount={pageCount}
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName="pagination"
      activeClassName="active"
      onPageChange={handlePageChange}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
