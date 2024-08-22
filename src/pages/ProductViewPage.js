import React from "react";
import Header from "./header/Header";
import ProductContainer from "../containers/ProductContainer/ProductContainer";
import SectionTwoContainer from "../containers/ProductContainer/SectionTwoContainer";
import FaQPage from "./FaqPage";
import Footer from "./Footer";

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
