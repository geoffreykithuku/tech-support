import Navbar from "../components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/common/Footer";

const Paths = () => {
  return (
    <div className="bg-[#E2DFD0] h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Paths;
