import "./App.css";
import React from "react";
import Dashboard from "./Dashboard";
import Course from "./Course";
import Programme from "./Programme";
import { BrowserRouter as Routes, Route, Link, Router } from "react-router-dom";

const App = () => {
  return (
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/Course">Course</Link>
            </li>
            <li>
              <Link to="/Programme">Programme</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Programme" element={<Programme />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
