import Offer from "../../components/Offer/Offer";
import Stars from "../../components/Stars/Stars";

import shirt from "../../assets/shirt.png";
import shirt1 from "../../assets/shirt1.png";
import shirt2 from "../../assets/shirt2.png";
import shirt3 from "../../assets/shirt3.png";
import rotate from "../../assets/rotate.svg";
import bigArr1 from "../../../public/assets/bigArr1.svg";
import bigArr2 from "../../../public/assets/bigArr2.svg";
import adidas from "../../assets/adidas.svg";
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";

import "./ProductSection.scss";

const Sections = () => {
  return (
    <div className="sections">
      <div className="container ">
        <div>
          <span className="fw-bold me-2">Men /</span>
          <span className="fw-bold me-2">Clothing /</span>
          <span className="fw-bold me-2">Tops /</span>
          <span className="fw-bold me-2">Adidas /</span>
          <span className="fw-bold">Adidas Black T-Shirt</span>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ counter }) => {
  return (
    <div>
      <Sections />
      <div className="product p-5">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <div className="product-box justify-content-center mb-3 d-flex align-items-center  position-relative">
                <img className="product-img" src={shirt} alt="shirt" />
                <img
                  className="rotate bg-white rounded-2 p-1 position-absolute"
                  src={rotate}
                  alt="rotate"
                />
              </div>
              <div className="more-imgs d-flex justify-content-center align-items-center">
                <img className="arr-1" src={bigArr1} alt="bigArr1" />
                <img className="mx-3" src={shirt} alt="shirt" />
                <img src={shirt2} alt="shirt2" />
                <img className="mx-3" src={shirt1} alt="shirt1" />
                <img className="me-3" src={shirt3} alt="shirt3" />
                <img className="arr-2" src={bigArr2} alt="bigArr2" />
              </div>
            </div>
            <div className="col-6">
              <div className="product-info pb-4">
                <img src={adidas} />
                <p className="my-4 fw-bold text-black fs-4 lh-1">
                  Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit.
                </p>
                <p className="m-0">Men</p>
                <div className="my-3 d-flex align-items-center">
                  <div className="stars">
                    <Stars rate="4.9 of 5" />
                  </div>
                  <span className="fs-5 mt-2">22 Rates</span>
                </div>
                <div className="price d-flex align-items-center">
                  <span className="view-price fw-bold me-5 fs-2 position-relative">
                    9,999
                  </span>
                  <Offer />
                </div>
              </div>
              <div className="product-size py-4">
                <h4 className="fw-bold mb-4">Size</h4>
                <div className="size d-flex align-items-center justify-content-around">
                  <span>Small</span>
                  <span>Medium</span>
                  <span className="active">Large</span>
                  <span>X Large</span>
                  <span>XX Large</span>
                </div>
              </div>
              <div className="product-color py-4">
                <h4 className="fw-bold mb-4">Color</h4>
                <img
                  className="rounded-circle me-4"
                  src={color1}
                  alt="color-1"
                />
                <img className="rounded-circle" src={color2} alt="color-2" />
              </div>
              <div className="product-quantity fw-bold pt-4">
                <h4 className="fw-bold">Quantity</h4>
                <div className="quantity-counter my-4 p-3 d-flex align-items-center justify-content-between">
                  <span className=" fs-3 rounded-circle decrement">-</span>
                  <span className="product-number fs-5">0</span>
                  <span
                    onClick={counter}
                    className="fs-3 rounded-circle increment"
                  >
                    +
                  </span>
                </div>
                <div className="btns d-flex align-items-center">
                  <button
                    className="me-5 fw-bold text-white fs-5"
                    type="submit "
                  >
                    Add To Cart
                  </button>
                  <button className="fw-bold px-5 fs-4" type="submit">
                    Pickup From Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
