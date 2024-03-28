import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Generate from "./Routes/Generate";
import Generating from "./Routes/Generating";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:user" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generate/:user" element={<Generate />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/generating/:user" element={<Generating />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
