import React from "react";

export default function Price({
  handleCheckPrice,
  handlePriceChange,
  priceEqual2,
  handleSubmitPrice,
  textInput,
}) {

  return (
    <section className="show__price">
      <div className="show__price-type">Price</div>
      <div className="show__price-content">
        {priceEqual2.map((items) => (
          <button
            className="show__price-num"
            key={items.id}
            onClick={() => handleCheckPrice(items.from, items.to)}
          >
            {items.price}
          </button>
        ))}
      </div>
      <div className="show__price-search">
        $
        <form onSubmit={handleSubmitPrice}>
          <input
            type="number"
            className="show__price-input"
            onChange={handlePriceChange}
            value={textInput.from}
            name="from"
          />
          <span> to $</span>
          <input
            type="number"
            className="show__price-input"
            onChange={handlePriceChange}
            name="to"
            value={textInput.to}
          />
          <button type="submit" className="show__price-btn">
            Go
          </button>
        </form>
      </div>
    </section>
  );
}
