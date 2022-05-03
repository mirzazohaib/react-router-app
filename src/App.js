import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import Course from "./components/Course";
import Programme from "./components/Programme";
import ReactCourse from "./components/ReactCourse";
import ReactRoutingCourse from "./components/ReactRoutingCourse";
import ReduxCourse from "./components/ReduxCourse";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
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
        <Route path="/ReactCourse" element={<ReactCourse />} />
          <Route path="/ReduxCourse" element={<ReduxCourse />} />
          <Route path="/ReactRoutingCourse" element={<ReactRoutingCourse />} />
      </Routes>
    </div>
  );
};

export default App;
