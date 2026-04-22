import React from "react";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav>
      <h1>
        <NavLink to="/">Big Corp Inc.</NavLink>
        </h1>

      <ul className="navLinks">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}