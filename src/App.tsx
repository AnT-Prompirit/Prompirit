import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Generate from "./Routes/Generate";
import Generating from "./Routes/Generating";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generate" element={<Generate />}></Route>
        <Route path="/generating" element={<Generating />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
