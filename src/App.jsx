import React from "react";
import Header from "./compontents/header/Header";
import Nav from "./compontents/nav/Nav";
import About from "./compontents/about/About";
import Experience from "./compontents/experience/Experience";
import Services from "./compontents/services/Services";
import Portfolio from "./compontents/portfolio/Portfolio";
import Testimonials from "./compontents/testimonials/Testimonials";
import Contact from "./compontents/contact/Contact";
import Footer from "./compontents/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
