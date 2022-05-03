import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import Course from "./components/Course";
import Programme from "./components/Programme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
