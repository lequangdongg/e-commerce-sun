import React from "react";

export default function ProductItem({ products,showRating }) {
  return (
    <div className="product__content-items">
      <div className="product__content-picture">
        <img src={products.images} alt="" />
      </div>
      <div className="product__content-all">
        <div className="product__content-title">{products.name}</div>
        <div className="product__content-description">
          {products.description}
        </div>
        <div className="product__content-bottom">
          <div className="product__content-rank">
           {showRating(products.ranking)}
          </div>
          <div className="product__content-price">$ {products.price}</div>
        </div>
      </div>
    </div>
  );
}
