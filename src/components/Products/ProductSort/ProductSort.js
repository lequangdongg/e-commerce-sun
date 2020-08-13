import React from "react";

export default function ProductSort({ handleChange, sort, length }) {
  return (
    <div className="product__sort">
      <p className="product__sort-amount">{length} Product(s) found</p>
      <div className="product__sort-box">
        Sort by
        <select value={sort} onChange={handleChange}>
          <option value="1"> Featured</option>
          <option value="2"> Price asc.</option>
          <option value="3"> Price desc.</option>
        </select>
      </div>
    </div>
  );
}
