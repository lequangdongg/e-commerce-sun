import React from "react";

export default function ShowResult({ resultProduct, handleClick }) {
  const fil = Object.values(resultProduct);
  return (
    <section className="show__result">
      <h4 className="show__result-title">Show result for</h4>
      {fil.map((items) => (
        <div className="show__result-items" key={items.id}>
          <i className="fa fa-angle-right"></i>
          <span
            className="show__result-text"
            onClick={() => handleClick(items.search)}
          >
            {items.name}
          </span>
        </div>
      ))}
    </section>
  );
}
