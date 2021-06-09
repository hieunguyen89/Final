import React, { useState } from "react";
import styled from "styled-components";
import { RecentArival } from "../../../utilits/laptops";

const SearchBarSection = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = RecentArival.filter((laptop) => {
    if (
      laptop.brand.toLowerCase().includes(search) ||
      laptop.title.toLowerCase().includes(search) ||
      laptop.slug.toLowerCase().includes(search)
    ) {
      return laptop;
    }
    return {};
  });

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Wrapper>
      <div className="searchBarSection">
        <div className="searchBar">
          <input className="input" onChange={handleSearch} />
          <button type="button" className="button">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="display">
          {filteredProducts.map((laptop) => (
            <div key={laptop.title} className="product">
              <h6>{laptop.brand}</h6>
              <h3>{laptop.title}</h3>
              <h5>{laptop.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .searchBarSection {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .searchBar {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid;
    border-radius: 20px;
  }

  .input {
    width: 250px;
    border: none;
    border-radius: 20px;
  }

  .button {
    background-color: transparent;
    border: none;
    width: 25px;
    border-radius: 20px;
  }

  .display {
    display: flex;
    flex-wrap: wrap;
  }

  .product {
    margin: 20px;
    width: 200px;
    padding: 20px;
    border-radius: 20px;
    background-color: #f9d5d3;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export default SearchBarSection;
