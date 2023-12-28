import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Components
import { Background } from "./components/Background";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/404";

// Projects
import { Morse } from "./pages/Projects/Morse";
import { Binary } from "./pages/Projects/Binary";

// CSS
import "./index.css";
import "./medias.css";

export const App = () => (
  <Router>
    <div className="App text transition">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/morse" element={<Morse />} />
        <Route path="/projects/binary" element={<Binary />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </div>
  </Router>
);