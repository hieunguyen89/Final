import React from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa";
import { colors } from "../../../utilits/styles";

const Brands = ({ brands }) => (
  <BrandWraper>
    <div className="brandHeader">
      <div className="list-icon">
        <FaListUl />
      </div>

      <div className="brand-title">Shop By Categories</div>
    </div>
    <ul className="brands-ul">
      {brands.map((brand, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="brand-items" key={index}>
          <a href="/laptops" className="brand-link">
            {brand}
          </a>
        </li>
      ))}
    </ul>
  </BrandWraper>
);
const BrandWraper = styled.div`
  letter-spacing: 1.3px;
  .brandHeader {
    display: flex;
    align-items: center;
  }
  .list-icon {
    background: ${colors.camea};
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
  }
  .brand-title {
    color: ${colors.camea};
    font-weight: 700;
    font-size: 14px;
    margin-left: 0.5rem;
    margin-top: 1.3rem;
    margin-bottom: 1rem;
  }
  .brands-ul {
    margin: 0;
    padding: 0;
  }
  .brand-items {
    list-style: none;
    margin-bottom: 1rem;
  }
  .brand-link {
    color: ${colors.grey};
    text-decoration: none;
    font-size: 13px;
    text-transform: capitalize;

    :hover {
      color: ${colors.camea};
    }
  }
`;
export default Brands;
