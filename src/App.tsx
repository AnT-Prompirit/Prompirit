import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Generate from "./Routes/Generate";
import Generating from "./Routes/Generating";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/user/:user/generate" element={<Generate />} />
        <Route path="/user/:user/generating" element={<Generating />} />
        <Route path="/user/:user" element={<Home />} />

        <Route path="/generate" element={<Generate />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
