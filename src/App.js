import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Navbar from './nav/navbar';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
