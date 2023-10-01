import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Question from "../components/Question/Question";
import Footer from "../components/Footer/Footer";
import NavMoblie from "../components/Navbar/NavMoblie";

const RecruitScreen = () => {
  return (
    <>
      <Navbar />
      <NavMoblie />
      <Question />
      <Footer />
    </>
  );
};

export default RecruitScreen;
