import React from "react";

export default function Rating({handleCheckRank}) {
  const ratings = [
    {
      id:1,
      ranking: 5,
      quantity: 3,
    },
    {
      id: 2,
      ranking: 4,
      quantity: 22,
    },
    {
      id:3,
      ranking:3,
      quantity: 5,
    },
    {
      id:4,
      ranking:2,
      quantity: 4,
    },
    {
      id:5,
      ranking: 1,
      quantity: 4,
    },
    {
      id: 6,
      ranking: 0,
      quantity: 10,
    },
  ];
  const showRating = (rating) => {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + 100} className="far fa-star"></i>);
    }
    return result;
  };


  return (
    <section className="show_rating">
      <div className="show__rating-type">Ratings</div>
      {ratings.map((items) => (
        <div className="show__rating-star" key={items.id} onClick={() => handleCheckRank(items.ranking)}>
          {showRating(items.ranking)}
          <span className="show_rating-count">& Up {items.quantity}</span>
        </div>
      ))}
    </section>
  );
}
