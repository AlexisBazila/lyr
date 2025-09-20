import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Nav from "./layouts/nav/nav";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
