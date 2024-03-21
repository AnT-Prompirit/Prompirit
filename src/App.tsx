import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Generate from "./Routes/Generate";
import Generating from "./Routes/Generating";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Prompirit" element={<Home />}></Route>
        <Route path="/Prompirit/generate" element={<Generate />}></Route>
        <Route path="/Prompirit/generating" element={<Generating />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
