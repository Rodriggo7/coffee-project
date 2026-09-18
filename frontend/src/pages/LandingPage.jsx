import React from "react";
import "../App.css";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Menu from "../components/Menu.jsx";
import Gallery from "../components/Gallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  return (
    <div id="page" className="s-pagewrap ss-home">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;