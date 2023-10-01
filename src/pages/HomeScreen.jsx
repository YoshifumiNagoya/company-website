import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer/Footer";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import NavMoblie from "../components/Navbar/NavMoblie";

const HomeScreen = ({ theme, handleChangeTheme }) => {
  return (
    <>
      <Navbar />
      <NavMoblie theme={theme} handleChangeTheme={handleChangeTheme} />
      <Home theme={theme} handleChangeTheme={handleChangeTheme} />
      <About theme={theme} handleChangeTheme={handleChangeTheme} />
      <ProductSlider theme={theme} handleChangeTheme={handleChangeTheme} />
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#E44E2E" }}
      />
    </>
  );
};

export default HomeScreen;
