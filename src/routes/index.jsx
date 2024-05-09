import Navbar from "../components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BusinessSupport from "../pages/BusinessSupport";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import PageNotReady from "../components/common/PageNotReady";

const Paths = () => {
  return (
    <div className="bg-[#E2DFD0] h-screen">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-it-support" element={<BusinessSupport />} />
        <Route path="/remote-support" element={<PageNotReady />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Paths;
