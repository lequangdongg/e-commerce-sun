import React from "react";

export default function Pagination({ productPerPage, totalProduct, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      <button className="pagination__left">
        <i className="fas fa-chevron-left fa-2x"></i>
        <span className="pagination__left-btn">Previous page</span>
      </button>
      <div className="pagination__num">
        {pageNumber.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <button className="pagination__right">
        <span className="pagination__right-btn">Next page</span>
        <i className="fas fa-chevron-right fa-2x"></i>
      </button>
    </div>
  );
}
