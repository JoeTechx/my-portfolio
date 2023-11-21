import React from "react";
import Nav from "../component/Nav/Nav";
import About from "../component/about/About";
import Header from "../component/header/Header";
import Contact from "../component/contact/Contact";
import Services from "../component/services/Service";
import Portfolio from "../component/portfolio/Portfolio";
import Experience from "../component/experience/Experience";
// import Testimonial from "../component/Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;
