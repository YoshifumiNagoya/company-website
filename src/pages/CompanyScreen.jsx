import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import NavUnder from "../components/NavUnder/NavUnder";
import ScrollToTop from "react-scroll-to-top";
import NavMoblie from "../components/Navbar/NavMoblie";

const CompanyScreen = () => {
  return (
    <>
      <Navbar />
      <NavMoblie />
      <NavUnder />
      <Team />
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

export default CompanyScreen;
