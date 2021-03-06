/* eslint-disable react/button-has-type */
import React from "react";
import { BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const ButtonList = ({ addCart, setwishList, setCompare, goDetail, id }) => (
  <div className="buttons-list">
    <button
      className="icon-list"
      onClick={() => {
        setwishList(true);
      }}
    >
      <FiHeart />
    </button>
    <button
      className="icon-list"
      onClick={() => {
        setCompare(true);
      }}
    >
      <CgMenuLeft />
    </button>
    <button className="icon-list" onClick={goDetail}>
      <BsEye />
    </button>
    <button
      className="icon-list"
      onClick={() => {
        addCart(id);
      }}
    >
      <FaShoppingCart />
    </button>
  </div>
);

export default ButtonList;
