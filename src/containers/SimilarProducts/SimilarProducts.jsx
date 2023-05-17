import ProductItem from "../../components/ProductItem/ProductItem";
import FromToIn from "../../components/FromToIn/FromToIn";
import PickUpFrom from "../../components/PickUpFrom/PickUpFrom";

import girl1 from "../../assets/girl1.png";
import girl2 from "../../assets/girl2.png";
import girl3 from "../../assets/girl3.png";
import boy1 from "../../assets/boy1.png";

import "./SimilarProducts.scss";

const SimilarProducts = () => {
  return (
    <div className="similar-porducts mt-4">
      <div className="container pb-4 position-relative">
        <h1 className="section-title m-0">Similar Products</h1>
        <h3 className="sub-title mb-5 mt-2">
          You may like these products also
        </h3>
        <div className="content-wrapper">
          <div className="img-wrapper d-grid col-3 position-relative">
            <ProductItem
              img={girl1}
              title={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              }
              rate="4.2 of 5"
              isOffer={true}
            />
            <PickUpFrom />
          </div>
          <div className="img-wrapper d-grid col-3 position-relative">
            <ProductItem
              img={girl2}
              title={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              }
              rate="4.2 of 5"
            />
            <FromToIn />
          </div>
          <div className="img-wrapper d-grid col-3 position-relative">
            <ProductItem
              img={boy1}
              title={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              }
              rate="4.2 of 5"
              isOffer={true}
            />
            <PickUpFrom />
          </div>
          <div className="img-wrapper d-grid col-3 position-relative">
            <ProductItem
              img={girl3}
              title={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              }
              rate="4.2 of 5"
              isOffer={true}
            />
            <FromToIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
