import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Generate from "./Routes/Generate";
import Generating from "./Routes/Generating";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Prompirit/user/:user/generate" element={<Generate />} />
        <Route
          path="/Prompirit/user/:user/generating"
          element={<Generating />}
        />
        <Route path="/Prompirit/user/:user" element={<Home />} />

        <Route path="/Prompirit/generate" element={<Generate />} />
        <Route path="/Prompirit/generating" element={<Generating />} />
        <Route path="/Prompirit" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
