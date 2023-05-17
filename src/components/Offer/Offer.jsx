import { Fragment } from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <Fragment>
      <span className="old-price me-3 fs-5">9,999 LE</span>
      <span className="sale fw-bold py-1 px-2 ">30% off</span>
    </Fragment>
  );
};

export default Offer;
