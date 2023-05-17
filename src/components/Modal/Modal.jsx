import { Fragment } from "react";
import { createPortal } from "react-dom";
import close from "../../../public/assets/close.svg";
import shirt from "../../assets/shirt.png";
import "./Modal.scss";

const closeModal = () => {
  document.querySelector(".overlay").classList.add("close-modal");
};

const Overlay = ({ clicked }) => {
  return (
    <div className="close-modal overlay position-fixed">
      <CartModal clicked={clicked} />
    </div>
  );
};

const CartModal = ({ clicked }) => {
  return (
    <div className="cart-modal position-absolute">
      <img
        onClick={closeModal}
        className="close position-absolute"
        src={close}
        alt="close"
      />
      <div className="position-absolute title py-3 px-4 position-absolute ">
        <h3 className="fw-bold m-0 text-center">My Cart</h3>
        <h5 className="text-start fw-bold my-4">Cart Summary</h5>
      </div>
      <div className="added-product py-3 px-4 position-absolute ">
        <div className="product-details rounded-3 p-2 d-flex align-items-center">
          <img className="me-3 product-img" src={shirt} alt="shirt" />
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </p>
            <p className="modal-quantitiy fw-bold m-0">
              Quantity: <span>0</span>
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-bold fs-4 position-relative">9,999</span>
              <button className="btn rounded-5 fw-bold px-4" type="submit">
                Remove
              </button>
            </div>
          </div>
        </div>
        <p className="product-price text-center mt-3 mb-4 fw-bold fs-4">
          Total: 9,999 LE
        </p>
        <div className="last-btns d-flex align-items-center justify-content-evenly ">
          <button className="btn  rounded-5 fw-bold" type="submit">
            Review Cart
          </button>
          <button className="btn text-white rounded-5 fw-bold " type="submit">
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <Overlay clicked={closeModal} />
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
