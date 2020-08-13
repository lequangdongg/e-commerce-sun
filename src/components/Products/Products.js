import React, { useState, useEffect } from "react";
import "./Product.scss";
import ProductSort from "./ProductSort/ProductSort";
import ProductItem from "./ProductItem/ProductItem";
import Pagination from "./Pagination/Pagination";
import axios from "axios";
export default function Products({
  search,
  result,
  checkBoxType,
  checkBoxBrand,
  countRating,
  textInput,
}) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(16);
  useEffect(() => {
    let string = `http://localhost:4000/products?`;
    if (search) {
      string += `q=${search}`;
    }
    if (result) {
      string += `&result=${result}`;
    }
    if (checkBoxType) {
      string += `&description=${checkBoxType}`;
    }
    if (checkBoxBrand) {
      string += `&brand=${checkBoxBrand}`;
    }
    if (countRating || countRating === 0) {
      string += `&ranking=${countRating}`;
    }
    if (textInput.from || textInput.to) {
      string += `&from=${textInput.from}&to=${textInput.to}`;
    }
    const fetchData = async () => {
      const res = await axios.get(string);
      setProducts(res.data);
    };
    fetchData();
  }, [search, result, checkBoxType, checkBoxBrand, countRating, textInput]);
  useEffect(() => {
    if (sort == 1) {
      setProducts([...products]);
    } else {
      setProducts(sortProduct(products));
    }
  }, [sort]);
  const sortProduct = (productList) => {
    let arr = [];
    if (sort == 2) {
      arr = [...productList].sort((a, b) => a.price - b.price);
    } else if (sort == 3) {
      arr = [...productList].sort((a, b) => b.price - a.price);
    }
    return arr;
  };

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

  const handleChange = (event) => {
    let value = event.target.value;
    setSort(() => value);
  };
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFrirstProduct = indexOfLastProducts - productPerPage;
  const currentProducts = products.slice(
    indexOfFrirstProduct,
    indexOfLastProducts
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="products">
      <ProductSort
        handleChange={handleChange}
        sort={sort}
        length={products.length}
      />
      <div className="product__content">
        {currentProducts.map((items) => (
          <ProductItem
            key={items.id}
            products={items}
            showRating={showRating}
          />
        ))}
      </div>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </div>
  );
}
