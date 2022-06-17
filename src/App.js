import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/reboot.css";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/style.css";

import Home from "./screens/Home";

import ReactGA from "react-ga";
import { useEffect } from "react";

const TRACKING_ID = "G-B62PYYFZL9"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
