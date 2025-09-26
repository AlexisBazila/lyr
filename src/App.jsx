import { useState } from "react";
import "flyonui/flyonui.js";
import "./App.css";

import NavBar from "./layouts/RnavBar/navBar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";
import HeroSection from "./layouts/heroSection/HeroSection";
import SmallSearcher from "./components/smallSearcher/SmallSearcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
