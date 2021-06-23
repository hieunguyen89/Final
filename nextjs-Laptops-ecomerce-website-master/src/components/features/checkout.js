/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Checkout = ({ cartItems, total, subTotal, onClose }) => {
  return (
    <div className="cart-content add-cart">
      <div className="cart-header">
        <div className="title">
          <FaCheck className="tick-icon" />
          <div className="title-text">Check out all the information below</div>
        </div>
        <div className="cross-icon" onClick={onClose} style={{ cursor: "pointer" }}>
          <ImCross />
        </div>
      </div>

      <div className="cart-main">
        {cartItems.map((item, index) => {
          return (
            <div className="cart-top" key={index}>
              <div className="img-wrap">
                <div className="img-top">
                  <img src={`/img/${item.img}.png`} alt="" className="img-top-img" />
                </div>
              </div>
              <div className="cart-info">
                <div className="info-title">{item.title}</div>
                <div className="info-price">{item.price}</div>
                <div className="info-content">
                  <div className="info-processor">
                    <strong>processor:</strong> {item.processor}
                  </div>
                  <div className="info-size">
                    <strong>size:</strong> {item.size}
                  </div>
                  <div className="info-ram">
                    <strong>ram:</strong> {item.Ram}
                  </div>
                  <div className="info-storage">
                    <strong>storage:</strong> {item.storage}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="cart-checkout">
          <div className="little-info">The total payment for Product.</div>
          <div className="info-content">
            <div className="subtotal">
              <strong>subtotal:</strong> {subTotal}
            </div>
            <div className="shipping">
              <strong>shipping:</strong> Free
            </div>
            <div className="total">
              <strong>Total (tax incl.)</strong> {total}
            </div>
          </div>
          <div className="cart-buttons">
            <button className="btn-cart check-btn">Complete Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
