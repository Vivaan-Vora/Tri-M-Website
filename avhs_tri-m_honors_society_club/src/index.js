import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Team,
  Calendar,
  Join,
  Collaboration,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/join" element={<Join />} />
      <Route path="/collaboration" element={<Collaboration />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
