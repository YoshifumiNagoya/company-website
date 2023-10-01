import React from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        pageClassName="pagination-design"
        containerClassName="pagination"
        previousLinkClassName="pagination_link"
        nextLinkClassName="pagination_link"
        activeClassName="pagination_link--active"
        activeLinkClassName="active-link-text"
        pageCount={pageCount}
        disabledClassName="pagination_link--disabled"
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        previousLabel="Previous"
        previousClassName="previous-button"
        nextClassName="next-button"
        pageLinkClassName="selected-page"
      />
    </div>
  );
};

export default Pagination;
