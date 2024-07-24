import Home from "./Pages/Home/Home.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Industries from "./Pages/Page2/industries.js";
import FeaturePage from "./Pages/Page3/features.js";
import VirtualPage from "./Pages/Page4/virtual.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/virtual" element={<VirtualPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
