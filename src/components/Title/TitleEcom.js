import React from "react";
import "./TitleEcom.scss";

export default function TitleEcom({searchTitle, handleSearchChange}) {
  return (
    <header className="title">
      <div className="title__image">
        <img
          src={process.env.PUBLIC_URL + "/images/titleBanner.png"}
          alt=" Error"
        />
      </div>
      <h6 className="title__logo">amazing</h6>
      <div className="title__input">
        <div className="title__input-search">
          <input
            type="text"
            className="title__input-formControl"
            placeholder="Search a product"
            value={searchTitle}
            onChange={handleSearchChange}
          />
        </div>
        <span className="title__input-btn">
          <button className="title__input-default">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </header>
  );
}
