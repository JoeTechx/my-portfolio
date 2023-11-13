import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio/portfolio";
import Nav from "./component/Nav/Nav";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;