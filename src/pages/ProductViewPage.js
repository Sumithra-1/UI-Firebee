/* External package import */
import React from "react";
/* External package import */

/* internal file import */
import Header from "./header/Header";
import ProductContainer from "../containers/ProductContainer/ProductContainer";
import SectionTwoContainer from "../containers/ProductContainer/SectionTwoContainer";
import FaQPage from "./FaqPage";
import Footer from "./Footer";
/* internal file import */

const ProductViewPage = () => {
  return (
    <div className="App">
      <Header />
      <ProductContainer/>
      <SectionTwoContainer/>
      <FaQPage/>
      <Footer/>
    </div>
  );
};

export default ProductViewPage;
