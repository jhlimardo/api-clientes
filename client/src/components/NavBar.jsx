import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
        <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home">
            <Link to="/" style={{ textDecoration: 'none' }} >
               Home
            </Link>
                </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="crear">
            <Link to="/add" style={{ textDecoration: 'none' }}>
              Alta de Cliente
            </Link>
                </a>
        </li>

        </ul>

 
    </div>
  );
}