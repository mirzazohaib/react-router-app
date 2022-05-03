import "./App.css";
import React from "react";
import Dashboard from "./Dashboard";
import Course from "./Course";
import Programme from "./Programme";
import { Routes, Route, Link, Router } from "react-router-dom";

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
       
      </div>
    </Router>
  );
};

export default App;
