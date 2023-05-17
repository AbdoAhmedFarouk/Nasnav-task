import "./App.css";
import Modal from "./components/Modal/Modal";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import NavBar from "./containers/NavBar/NavBar";
import ProductSection from "./containers/ProductSection/ProductSection";
import SimilarProducts from "./containers/SimilarProducts/SimilarProducts";

function App() {
  const toggleCart = () => {
    let cartTxt = document.querySelector(".overlay");
    cartTxt.classList.remove("close-modal");
  };

  window.onload = () => {
    if (document.querySelector(".counter").textContent == 0) {
      document.querySelector(".added-product").classList.add("hidden");
    }
  };

  const counter = () => {
    document.querySelector(".counter").textContent++;
    document.querySelector(".product-number").textContent++;
    document.querySelector(".modal-quantitiy span").textContent++;
    if (document.querySelector(".counter").textContent > 0) {
      document.querySelector(".added-product").classList.remove("hidden");
    }
  };

  return (
    <div className="App">
      <Modal />
      <div>
        <Header toggleCart={toggleCart} counter={counter} />
        <NavBar />
      </div>
      <ProductSection counter={counter} />
      <SimilarProducts />
      <Footer />
    </div>
  );
}

export default App;
