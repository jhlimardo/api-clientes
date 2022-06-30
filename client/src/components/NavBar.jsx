import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" href="home">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" href="crear">
            <Link to="/add" style={{ textDecoration: "none" }}>
              Alta de Cliente
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
