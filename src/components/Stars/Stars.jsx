import star from "../../assets/star.svg";
import emptyStar from "../../assets/emptyStar.svg";

const Stars = ({ rate }) => {
  return (
    <div className="d-flex  align-items-center justify-content-center">
      <div className="stars">
        <img src={star} alt="star" />
        <img className="mx-1" src={star} alt="star" />
        <img src={star} alt="star" />
        <img className="mx-1" src={star} alt="star" />
        <img src={emptyStar} alt="emptyStar" />
      </div>
      <span className="fw-bold mt-2 mx-4 fs-6">{rate}</span>
    </div>
  );
};

export default Stars;
