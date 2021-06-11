import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Form, FormControl } from "react-bootstrap";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState({
    brand: "dell",
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
    <Wrapper>
      <div>
        <Form onSubmit={handleSubmit} inline>
          <select defaultValue="dell" onChange={handleChangeBrand}>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="acer">Acer</option>
            <option value="apple">Apple</option>
            <option value="samsung">SamSung</option>
          </select>
          <input type="text" value={searchQuery.name} onChange={handleChangeName} placeholder="Search" />
          <button type="submit">
            <FaSearch /> Search
          </button>
        </Form>
      </div>
    </Wrapper>
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
`;
