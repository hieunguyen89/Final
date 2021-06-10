import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = useState({
    brand: "",
    name: "",
  });
  const router = useRouter();

  const handleChangeBrand = (e) => {
    const { value } = e.target;
    setSearchQuery({ ...searchQuery, brand: value });
  };
  const handleChangeName = (e) => {
    const { value } = e.target;
    setSearchQuery({ ...searchQuery, name: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { brand: searchQuery.brand, name: searchQuery.name },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select defaultValue="dell" onChange={handleChangeBrand}>
          <option value="dell">Dell</option>
          <option value="hp">HP</option>
          <option value="asus">Asus</option>
        </select>
        <input type="text" value={searchQuery.name} onChange={handleChangeName} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

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
