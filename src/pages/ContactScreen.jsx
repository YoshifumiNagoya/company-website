import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import NavMoblie from "../components/Navbar/NavMoblie";

const ContactScreen = () => {
  return (
    <div>
      <Navbar />
      <NavMoblie />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactScreen;
