import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "flyonui/flyonui.js";
import "./App.css";

import NavBar from "./layouts/navBar/navBar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";
import HeroSection from "./layouts/heroSection/HeroSection";
import SmallSearcher from "./components/smallSearcher/SmallSearcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="relative">
        <HeroSection
          title={"TU PROXIMO HOGAR A UN CLIC"}
          subtitle={
            "Descubrí las mejores opciones en venta, alquiler y loteos, con información actualizada y contacto directo."
          }
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg">
          <SmallSearcher />
        </div>
      </div>
    </>
  );
}

export default App;
