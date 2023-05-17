import { Fragment } from "react";

const ImgWithText = ({ theImg, text, imgStyle, textStyle, toggleCart }) => {
  
  return (
    <Fragment>
      <img className={imgStyle} src={theImg} alt={text} />
      <span onClick={toggleCart} className={`cart-txt ${textStyle}`}>
        {text}
      </span>
    </Fragment>
  );
};

export default ImgWithText;
