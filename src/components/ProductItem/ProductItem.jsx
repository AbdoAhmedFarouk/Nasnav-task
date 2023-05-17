import { Fragment } from "react";
import Offer from "../Offer/Offer";
import Stars from "../Stars/Stars";
import rotate from "../../assets/rotate.svg";

import adidas from "../../assets/adidas.svg";

import "./ProductItem.scss";

const ProductItem = ({ img, title, rate, isOffer }) => {
  return (
    <Fragment>
      <div className="img-box position-relative">
        <img className="w-100" src={img} alt="girl1" />
        <img
          className="rotate p-1 rounded-3 position-absolute"
          src={rotate}
          alt="rotate"
        />
      </div>
      <div className="px-2">
        <p className="my-2 fw-bold ">{title}</p>
        <div
          className={`info-content mb-2 ${
            isOffer ? "" : "d-flex justify-content-between"
          }`}
        >
          <span className="price position-relative fw-bold fs-4">9,999</span>
          <div className="d-flex align-items-center text-center justify-content-between">
            {isOffer ? <Offer /> : ""}
            <span>
              <img src={adidas} alt="adidas" />
            </span>
          </div>
        </div>
        <Stars rate={rate} />
      </div>
    </Fragment>
  );
};

export default ProductItem;
