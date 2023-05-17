import { Fragment } from "react";

import ImgWithText from "../../components/ImgWithText/ImgWithText";

import logo from "../../../public/assets/logo.svg";
import arr1 from "../../../public/assets/arr1.svg";
import arr2 from "../../../public/assets/arr2.svg";
import cart from "../../../public/assets/cart.svg";
import location from "../../../public/assets/location.svg";
import list from "../../../public/assets/list.svg";
import contact from "../../../public/assets/contact.svg";
import search from "../../../public/assets/search.svg";
import adidas from "../../assets/adidas.svg";
import bag from "../../../public/assets/bag.svg";
import heart from "../../../public/assets/heart.svg";
import user from "../../../public/assets/user.svg";

import "./Header.scss";

const MiddleHeader = ({ toggleCart }) => {
  return (
    <div className="middle-header p-1">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="search-box">
          <ImgWithText
            textStyle={"fw-bold search"}
            imgStyle={"me-2"}
            theImg={search}
            text="Search"
          />
          <img />
        </div>

        <div className="brand-box">
          <img src={adidas} alt="adidas-brand" />
        </div>

        <div className="right-box d-flex align-items-center ">
          <div className="bag-box position-relative  d-flex align-items-center">
            <ImgWithText
              toggleCart={toggleCart}
              textStyle={"fw-bold"}
              imgStyle={"me-2"}
              theImg={bag}
              text="Cart"
            />
            <span className="counter d-flex align-items-center justify-content-center">
              0
            </span>
          </div>

          <div className="wishlist-box mx-4 d-flex align-items-center">
            <ImgWithText
              textStyle={"fw-bold"}
              imgStyle={"me-2"}
              theImg={heart}
              text="Wishlist"
            />
          </div>

          <div className="login-box d-flex align-items-center">
            <ImgWithText
              textStyle={"fw-bold"}
              imgStyle={"me-2"}
              theImg={user}
              text="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ toggleCart }) => {
  return (
    <Fragment>
      <div className="navbar header text-black w-100 ">
        <div className="container d-flex w-100 justify-content-between align-items-center">
          <div className="logo-box d-flex align-items-center">
            <img className="burger-icon me-4" src={list} alt="list" />
            <a href="#" className="navbar-brand m-0">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div className="offers d-flex align-items-center">
            <img src={arr1} alt="arr1" />
            <p className="text m-0 mx-3 text-capitalize">
              Valentine &#39;s day offers! buy two get one free
              <span className="shop-now fw-bold ms-2 text-decoration-underline">
                Shop Now
              </span>
            </p>
            <img src={arr2} alt="arr2" />
          </div>
          <div className="contact-box fw-bold d-flex align-items-center text-capitalize">
            <div className="contact me-3">
              <ImgWithText
                imgStyle={"me-2"}
                theImg={contact}
                text="Contact Us"
              />
            </div>
            <div className="cart mx-3">
              <ImgWithText imgStyle={"me-2"} theImg={cart} text="track order" />
            </div>
            <div className="location ">
              <ImgWithText
                imgStyle={"me-2"}
                theImg={location}
                text="find a store"
              />
            </div>
          </div>
        </div>
      </div>
      <MiddleHeader toggleCart={toggleCart} />
    </Fragment>
  );
};

export default Header;
