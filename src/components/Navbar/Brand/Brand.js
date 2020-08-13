import React, { useState } from "react";

export default function Brand({
  handleCheckBoxBrand,
  searchBrand,
  searchFilBrand,
}) {
  const [checkBrand, setCheckBrand] = useState([]);
  const brand = [
    {
      id: 1,
      name: "Apple",
      count: 14,
    },
    {
      id: 2,
      name: "HP",
      count: 8,
    },
    {
      id: 3,
      name: "Insignia",
      count: 8,
    },
    {
      id: 4,
      name: "Meta",
      count: 9,
    },
    {
      id: 5,
      name: "SamSung",
      count: 9,
    },
  ];
  const handleCheckBox = (value) => {
    const currentIndex = checkBrand.indexOf(value);
    const newChecked = [...checkBrand];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckBrand(newChecked);
    handleCheckBoxBrand(newChecked);
  };

  const filterProduct = brand.filter((prod) => {
    return prod.name.toLowerCase().indexOf(searchBrand.toLowerCase()) !== -1;
  });
  
  return (
    <section className="show__brand">
      <div className="show__brand-type">Brand</div>
      <div className="show__brand-search">
        <input
          type="text"
          placeholder="Search for other..."
          className="show__brand-input"
          value={searchBrand}
          onChange={searchFilBrand}
        />
      </div>
      <div className="show__brand-content">
        {filterProduct.map((items) => (
          <div className="show__brand-items" key={items.id}>
            <input
              type="checkbox"
              onChange={() => handleCheckBox(items.name)}
              checked={checkBrand.indexOf(items.name) === -1 ? false : true}
            />
            &nbsp;{items.name}
            <span className="show__brand-count">({items.count})</span>
          </div>
        ))}
      </div>
    </section>
  );
}
