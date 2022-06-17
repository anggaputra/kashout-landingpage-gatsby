import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/reboot.css";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/style.css";

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./screens/Home";
import Product from "./screens/Product";

import ReactGA from 'react-ga';


function App() {

  const TRACKING_ID = "G-B62PYYFZL9"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/gadget" element={<Product />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
