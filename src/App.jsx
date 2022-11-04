import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/Nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Services from "./component/services/Service";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
