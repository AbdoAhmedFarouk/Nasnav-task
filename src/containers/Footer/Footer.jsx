import logo2 from "../../../public/assets/logo2.svg";
import visa from "../../../public/assets/visa.png";
import cashOnDelivery from "../../../public/assets/cashOnDelivery.png";
import masterCard from "../../../public/assets/masterCard.png";
import companyLogo from "../../../public/assets/companyLogo.svg";
import sendArr from "../../../public/assets/sendArr.svg";
import facebook from "../../../public/assets/facebook.svg";
import linkedIn from "../../../public/assets/linkedIn.svg";
import insta from "../../../public/assets/insta.svg";
import twitter from "../../../public/assets/twitter.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div className="left-col pe-5">
              <img className="mb-4 " src={logo2} alt="logo" />
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
                <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat, vel illum dolore eu feugiat nulla facilisis at vero
                eros et accumsan et iusto odio dignissim qui blandit
              </p>
            </div>
          </div>
          <div className="col-6 px-5 pb-4 text-white">
            <h4 className="mb-3">Subscribe to our newsletter</h4>
            <form className="w-100 position-relative">
              <input
                className=" p-3 rounded-5"
                placeholder="Enter Your Mail"
                type="text"
                id="inputField"
                name="inputField"
              />
              <button
                className="d-flex fw-bold position-absolute align-items-center rounded-5"
                type="submit "
              >
                Subscribe <img className="ms-3 " src={sendArr} />
              </button>
            </form>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div className="links py-2 ">
                <ul className="m-0 ps-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Sell With Us</a>
                  </li>
                  <li>
                    <a href="#">Shipping And Returns</a>
                  </li>
                </ul>
              </div>
              <div className="socials d-flex flex-column align-items-center">
                <span className="d-flex align-items-center">
                  <img className="me-3" src={facebook} />
                  /YESHTERY
                </span>
                <span className="my-3 d-flex align-items-center">
                  <img className="me-3" src={linkedIn} />
                  /YESHTERY
                </span>
                <span className="align-items-center d-flex ">
                  <img className="me-3 " src={twitter} />
                  /YESHTERY
                </span>
                <span className="mt-3 d-flex align-items-center">
                  <img className="me-3" src={insta} />
                  /YESHTERY
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="owner mt-3 text-white d-flex align-items-center justify-content-between">
          <p className=" mt-4">© 2021 yeshtery, all rights reserved.</p>
          <div className="cash d-flex align-items-center">
            <span>
              <img src={cashOnDelivery} alt="cashOnDelivery" />
            </span>
            <span className="mx-2">
              <img src={visa} alt="visa" />
            </span>
            <span>
              <img src={masterCard} alt="masterCard" />
            </span>
          </div>
          <span className="d-flex align-items-center">
            Powered By <img className="ms-2" src={companyLogo} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
