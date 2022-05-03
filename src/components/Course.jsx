import React from "react";
import ReactCourse from "./ReactCourse";
import ReactRoutingCourse from "./ReactRoutingCourse";
import ReduxCourse from "./ReduxCourse";
import { Routes, Route, Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <title>Course</title>
      <h1>Course</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/ReactCourse">React</Link>
          </li>
          <li>
            <Link to="/ReduxCourse">Redux</Link>
          </li>
          <li>
            <Link to="/ReactRoutingCourse">React Routing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ReactCourse" element={<ReactCourse />} />
        <Route path="/ReduxCourse" element={<ReduxCourse />} />
        <Route path="/ReactRoutingCourse" element={<ReactRoutingCourse />} />
      </Routes>
    </div>
  );
};
export default Course;
