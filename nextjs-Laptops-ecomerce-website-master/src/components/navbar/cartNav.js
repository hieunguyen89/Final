/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from "react";
import { ImCross } from "react-icons/im";

const CartNav = ({ total, subTotal, cartItems, setCartItems, openCheckout }) => {
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    //
    <div className="cart-wrap">
      <div className="cart-top-container">
        {cartItems.map((item, index) => {
          return (
            <div className="cart-top" key={index}>
              <div className="img-container">
                <img src={`/img/${item.img}.png`} alt="laptop" />
              </div>
              <div className="title-content">
                <div className="title">
                  <span style={{ fontSize: "15px" }}>{item.quantity} </span> X {item.title}
                </div>
                <div className="price">{item.total}</div>
              </div>
              <div className="close-btn">
                <button type="button" onClick={() => handleDelete(item.id)}>
                  <ImCross />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-items">
        <div className="items">
          <div className="item">{cartItems.length} items</div>
          <div className="orginal-price">{subTotal}</div>
        </div>
        <div className="items">
          <div className="shipping">Shipping</div>
          <div className="shipping">free</div>
        </div>
      </div>
      <div className=" cart-items">
        <div className="shipping">Total (tax incl.)</div>
        <div className="total">{total}</div>
      </div>
      <button type="button" className="viewCart" onClick={openCheckout}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartNav;
