import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Blackjack">Blackjack</Link>
    </li>
  </ul>
);

export default Navbar;
