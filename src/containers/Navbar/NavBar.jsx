import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="bg-black d-flex align-items-center p-3">
      <div className="container  ">
        <ul className="d-flex m-0 text-white justify-content-between align-items-center">
          <li className="nav-item ">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Unisex</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Kids</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Best Sellers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">New Arrivals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Offters</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
