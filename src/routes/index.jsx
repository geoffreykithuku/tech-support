import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";

const Paths = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Paths;