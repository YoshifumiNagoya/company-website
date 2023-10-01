import React from "react";
import Service from "../components/Service/Service";
import Navbar from "../components/Navbar/Navbar";
import NavUnder from "../components/NavUnder/NavUnder";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer/Footer";
import NavMoblie from "../components/Navbar/NavMoblie";

const ServiceScreen = () => {
  return (
    <>
      <Navbar />
      <NavMoblie />
      <NavUnder />
      <Service />
      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#E44E2E" }}
      />
      <Footer />
    </>
  );
};

export default ServiceScreen;
