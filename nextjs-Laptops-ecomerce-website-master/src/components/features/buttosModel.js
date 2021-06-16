/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { ImCross } from "react-icons/im";

const ButtonsModel = ({ setOPenmodels, text }) => (
  <div className="cart-content buttons-content">
    <div className="title">{text}</div>
    <div className="cross-icon" onClick={() => setOPenmodels(false)} style={{ cursor: "pointer" }}>
      <ImCross />
    </div>
  </div>
);

export default ButtonsModel;
