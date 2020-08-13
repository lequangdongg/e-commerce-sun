import React, { useState } from "react";
import ShowResult from "./ShowResult/ShowResult";
import Refine from "./Refine/Refine";
import Brand from "./Brand/Brand";
import Rating from "./Rating/Rating";
import Price from "./Price/Price";
import "./Navbar.scss";
export default function Navbar({
  resultProduct,
  handleClick,
  handleCheckBoxType,
  handleCheckBoxBrand,
  handleCheckRank,
  refine,
  handleCheckPrice,
  handlePriceChange,
  priceEqual2,
  handleSubmitPrice,
  textInput,
}) {
  const [searchBrand, setSearchBrand] = useState("");

  const searchFilBrand = (event) => {
    const value = event.target.value;
    setSearchBrand(value);
  };

  return (
    <div className="show">
      <ShowResult resultProduct={resultProduct} handleClick={handleClick} />
      <Refine handleCheckBoxType={handleCheckBoxType} />
      <Brand
        handleCheckBoxBrand={handleCheckBoxBrand}
        searchFilBrand={searchFilBrand}
        searchBrand={searchBrand}
      />
      <Rating handleCheckRank={handleCheckRank} />
      <Price
        handleCheckPrice={handleCheckPrice}
        handlePriceChange={handlePriceChange}
        priceEqual2={priceEqual2}
        textInput={textInput}
        handleSubmitPrice={handleSubmitPrice}
      />
      <footer className="footer">Data courtesy of Best Buy</footer>
    </div>
  );
}
