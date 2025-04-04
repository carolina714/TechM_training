import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Diet Planner</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/meals">Meals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Plan Your Diet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
