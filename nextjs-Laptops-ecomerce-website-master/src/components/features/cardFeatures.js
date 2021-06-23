/* eslint-disable react/button-has-type */
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { MdStar, MdStarHalf } from "react-icons/md";
import { cartContext } from "../context";
import Spining from "../Spining";
import ButtonList from "./buttonList";
import ButtonsModel from "./buttosModel";
import { FeatureWrapper } from "./styles";

const CardFeatures = ({ laptop, load }) => {
  const { addCart, wishList, setwishList, compare, setCompare } = useContext(cartContext);
  const [spining, setSpining] = useState(false);
  const router = useRouter();
  const goDetail = () => {
    if (load) {
      setSpining(true);
      setTimeout(() => {
        setSpining(false);
      }, 100);
    }
    router.push(`/laptops/${laptop.slug}`);
  };

  return (
    <>
      <Spining spining={spining} />
      <div className="feature-cards">
        <ButtonList
          id={laptop.id}
          addCart={addCart}
          goDetail={goDetail}
          setwishList={setwishList}
          setCompare={setCompare}
        />
        <div className="card-content">
          <div className="feature-top">
            <img src={`/img/${laptop.img}.png`} alt="laptop" className="image-active" />
            <img src={`/img/${laptop.imgHover}.png`} alt="laptop" className="image-hover" />
          </div>
          <div className="footer">
            <div className="footer-top">
              <div className="stars">
                <MdStar className="star-checked" />
                <MdStar className="star-checked" />
                <MdStar className="star-checked" />
                <MdStarHalf className="star-checked" />
                <MdStar className="star" />
              </div>
              <div className="price">${laptop.price}</div>
            </div>

            <div className="footer-title">{laptop.title}</div>
            <button className="addCart" onClick={goDetail}>
              Go detail
            </button>
          </div>
        </div>
      </div>
      <FeatureWrapper>
        <div className={wishList ? "model-cart button-model" : "model-cart"}>
          <ButtonsModel setOPenmodels={setwishList} text="You must be logged in to manage your wishlist" />
        </div>
        <div className={compare ? "model-cart button-model" : "model-cart"}>
          <ButtonsModel setOPenmodels={setCompare} text="The product has been added to list compare." />
        </div>
      </FeatureWrapper>
    </>
  );
};

export default CardFeatures;
