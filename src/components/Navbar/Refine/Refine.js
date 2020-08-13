import React, { useState } from "react";

export default function Refine({ handleCheckBoxType }) {
  const [isCheck, setIsCheck] = useState([]);
  const type = [
    {
      id: 1,
      name: "Streaming media plyr",
      count: 5,
    },
    {
      id: 2,
      name: "Burst skus",
      count: 5,
    },
    {
      id: 3,
      name: "Voice assistants",
      count: 6,
    },
    {
      id: 4,
      name: "Apple",
      count: 2,
    },
    {
      id: 5,
      name: "45''-50''  tv's",
      count: 2,
    },
    {
      id: 6,
      name: "Earbud headphones",
      count: 2,
    },
    {
      id: 7,
      name: "Smart lighting",
      count: 5,
    },
    {
      id: 8,
      name: "Toy 2 life character",
      count: 10,
    },
    {
      id: 9,
      name: "Tv mounts",
      count: 2,
    },
    {
      id: 10,
      name: "External",
      count: 2,
    },
    {
      id: 11,
      name: "Blu-ray",
      count: 2,
    },
    {
      id: 12,
      name: "51''-60'' tv's",
      count: 2,
    },
    {
      id: 13,
      name: "At&t go phone",
      count: 2,
    },
    {
      id: 14,
      name: "Mid 32'' lcd",
      count: 2,
    },
    {
      id: 15,
      name: "Wireless speakers",
      count: 2,
    },
    {
      id: 16,
      name: "Ream paper",
      count: 1,
    },
  ];

  const handleCheckbox = (value) => {
    const currentIndex = isCheck.indexOf(value);
    const newChecked = [...isCheck];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setIsCheck(newChecked);
    handleCheckBoxType(newChecked);
  };
  
  return (
    <section className="show__refine">
      <h4 className="show__refine-title">Refine by</h4>
      <div className="show__refine-type">Type</div>
      <div className="show__refine-content">
        {type.map((items, index) => (
          <div className="show__refine-items" key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckbox(items.name)}
              checked={isCheck.indexOf(items.name) === -1 ? false : true}
            />{" "}
            {items.name}
            <span className="show__refine-count">({items.count})</span>
          </div>
        ))}
      </div>
    </section>
  );
}
