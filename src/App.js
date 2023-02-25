import "./App.css";

import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
