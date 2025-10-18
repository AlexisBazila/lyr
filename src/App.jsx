import { useState } from "react";
import "flyonui/flyonui.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "flowbite";

import NavBar from "./layouts/RnavBar/navBar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";
import HeroSection from "./layouts/heroSection/HeroSection";
import SmallSearcher from "./components/smallSearcher/SmallSearcher";
import InfoPropiedades from "./pages/InfoPropiedades";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Tasaciones from "./pages/Tasaciones";
import Propiedades from "./pages/Propiedades";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info-propiedad" element={<InfoPropiedades />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tasaciones" element={<Tasaciones />} />
        <Route path="/propiedades" element={<Propiedades />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
