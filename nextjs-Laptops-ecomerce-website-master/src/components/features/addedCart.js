/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RecentArival } from "../../../utilits/Laptops";

const AddedCart = ({ setClose, id }) => {
  const tempPRoducts = [...RecentArival];
  const product = tempPRoducts.find((item) => item.id === id);

  return (
    <div className="cart-content add-cart">
      <div className="cart-header">
        <div className="title">
          <FaCheck className="tick-icon" />
          <div className="title-text">PRODUCT SUCCESSFULLY ADDED TO YOUR SHOPPING CART</div>
        </div>
        <div className="cross-icon" onClick={setClose} style={{ cursor: "pointer" }}>
          <ImCross />
        </div>
      </div>
      <div className="cart-main">
        <div className="cart-top">
          <div className="img-wrap">
            <div className="img-top">
              <img src={`/img/${product.img}.png`} alt="" className="img-top-img" />
            </div>
          </div>
          <div className="cart-info">
            <div className="info-title">{product.title}</div>
            <div className="info-price">{product.price}</div>
            <div className="info-content">
              <div className="info-processor">
                <strong>processor:</strong> {product.processor}
              </div>
              <div className="info-size">
                <strong>size:</strong> {product.size}
              </div>
              <div className="info-ram">
                <strong>ram:</strong> {product.Ram}
              </div>
              <div className="info-storage">
                <strong>storage:</strong> {product.storage}
              </div>
            </div>
          </div>
        </div>
        <div className="cart-checkout">
          <div className="little-info">The total payment for product.</div>
          <div className="info-content">
            <div className="subtotal">
              <strong>subtotal:</strong> {product.price}
            </div>
            <div className="shipping">
              <strong>shipping:</strong> Free
            </div>
            <div className="total">
              <strong>Total (tax incl.)</strong> {product.price}
            </div>
          </div>
          <div className="cart-buttons">
            <button className="btn-cart check-btn">proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCart;
