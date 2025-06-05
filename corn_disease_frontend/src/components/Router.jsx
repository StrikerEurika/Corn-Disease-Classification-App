import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Disease from "../pages/Disease";
import Methodology from "../pages/Methodology";
import Help from "../pages/Help";
import Layout from "./Layout";

function Router() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/help" element={<Help />} />
      </Routes>
  );
}

export default Router;
