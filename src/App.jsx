import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio/portfolio";
import Footer from "./component/footer/Footer";
import ThemeToggle from "./component/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
