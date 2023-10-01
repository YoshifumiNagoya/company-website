import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import NavMoblie from "../components/Navbar/NavMoblie";

const ProductScreen = () => {
  return (
    <>
      <Navbar />
      <NavMoblie />
      <Product />
      <Footer />
    </>
  );
};

export default ProductScreen;
