import React, { Suspense, lazy } from "react";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Loading from "./components/Loading/Loading.jsx";

const Header = lazy(() => import("./containers/Header/Header"));
const ProductSection = lazy(() =>
  import("./containers/ProductSection/ProductSection")
);
const SimilarProducts = lazy(() =>
  import("./containers/SimilarProducts/SimilarProducts")
);
const Footer = lazy(() => import("./containers/Footer/Footer"));

<Suspense fallback={<Loading />}>
  <Header />
  <ProductSection />
  <SimilarProducts />
  <Footer />
</Suspense>;

let container = null;
document.addEventListener("DOMContentLoaded", function () {
  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
