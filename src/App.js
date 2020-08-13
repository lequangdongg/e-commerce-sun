import React, { useState, useEffect } from "react";
import "./App.css";
import TitleEcom from "./components/Title/TitleEcom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import axios from "axios";
function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [result, setResult] = useState(null);
  const [resultProduct] = useState({
    Appliancies: {
      id: 1,
      name: "Appliances",
      active: "false",
      search: "Appliancies",
    },
    Audio: {
      id: 2,
      name: "Audio",
      active: "false",
      search: "Audio",
    },
    Cameras: {
      id: 3,
      name: "Cameras & Cammorders",
      active: "false",
      search: "Cameras",
    },
    Car: {
      id: 4,
      name: "Car Electric & GPS",
      active: "false",
      search: "Car",
    },
    Cell: {
      id: 5,
      name: "Cell Phones",
      active: "false",
      search: "Cell",
    },
    Computer: {
      id: 6,
      name: "Computer & Tablet",
      active: "false",
      search: "Computer",
    },
    Health: {
      id: 7,
      name: "Health, Fitness & Beatiful",
      active: "false",
      search: "Health",
    },
    Office: {
      id: 8,
      name: "Office & School Supplies",
      active: "false",
      search: "Office",
    },
    TV: {
      id: 9,
      name: "TV & Home Theater",
      active: "false",
      search: "TV",
    },
    Video: {
      id: 10,
      name: "Video Games",
      active: "false",
      search: "Video",
    },
  });
  const [priceEqual2, setPriceEqual2] = useState([
    {
      id: 1,
      price: "≤1",
      to: 1,
      from: "",
    },
    {
      id: 2,
      price: "$1 - 80",
      from: 1,
      to: 80,
    },
    {
      id: 3,
      price: "$80 -160",
      from: 80,
      to: 160,
    },
    {
      id: 4,
      price: "$160 - 240",
      from: 160,
      to: 240,
    },
    {
      id: 5,
      price: "$240 - 1,820",
      from: 240,
      to: 1820,
    },
    {
      id: 6,
      price: "$1,820 - 3,400",
      from: 1820,
      to: 3400,
    },
    {
      id: 7,
      price: "$3,400 - 4,980",
      from: 3400,
      to: 4980,
    },
    {
      id: 8,
      price: "≥ $4,980",
      to: "",
      from: 4890,
    },
  ]);
  const [textInput, setTextInput] = useState({
    from: "",
    to: "",
  });
  const [refine, setRefine] = useState([]);
  const [checkBoxType, setcheckBoxType] = useState([]);
  const [checkBoxBrand, setCheckBoxBrand] = useState([]);
  const [countRating, setCountRaing] = useState(null);
  const [submitPrice, setSubmitPrice] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/products?");
      setRefine(res.data);
    };
    fetchData();
  }, []);
  const filterDescription = () => {
    let save = refine.map((items) => items.brand);
    const count = save.reduce(
      (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
      {}
    );
    return count;
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTitle(value);
  };

  const handleClick = (items) => {
    setResult(items);
  };

  const handleCheckBoxType = (values) => {
    setcheckBoxType(values);
  };

  const handleCheckBoxBrand = (values) => {
    setCheckBoxBrand(values);
  };

  const handleCheckRank = (items) => {
    setCountRaing(items);
  };

  const handleCheckPrice = (from, to) => {
    setTextInput({
      ...textInput,
      from,
      to,
    });
    const filPrice = priceEqual2.filter(
      (items) => items.from === from && items.to === to
    );
    setPriceEqual2([...filPrice]);
  };

  const handlePriceChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    setTextInput({
      ...textInput,
      [name]: value,
    });
  };

  const handleSubmitPrice = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:4000/products?from=${textInput.from}&to=${textInput.to}`
      )
      .then((res) => setSubmitPrice(res.data));
  };
  return (
    <div className="App">
      <TitleEcom
        searchTitle={searchTitle}
        handleSearchChange={handleSearchChange}
      />
      <div className="layout">
        <Navbar
          resultProduct={resultProduct}
          handleClick={handleClick}
          handleCheckBoxType={(values) => handleCheckBoxType(values)}
          handleCheckBoxBrand={(values) => handleCheckBoxBrand(values)}
          handleCheckRank={handleCheckRank}
          priceEqual2={priceEqual2}
          textInput={textInput}
          handleCheckPrice={handleCheckPrice}
          handlePriceChange={handlePriceChange}
          handleSubmitPrice={handleSubmitPrice}
        />
        <Products
          search={searchTitle}
          result={result}
          checkBoxType={checkBoxType.join("&description=")}
          checkBoxBrand={checkBoxBrand.join(`&brand=`)}
          countRating={countRating}
          textInput={textInput}
        />
      </div>
    </div>
  );
}

export default App;
