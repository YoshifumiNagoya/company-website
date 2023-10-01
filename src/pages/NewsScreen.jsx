import React from "react";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import Newsletter from "../components/Newsletter/Newsletter";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer/Footer";
import NavMoblie from "../components/Navbar/NavMoblie";

const NewsScreen = () => {
  return (
    <>
      <Navbar />
      <NavMoblie />
      <News />
      <Newsletter />
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

export default NewsScreen;
