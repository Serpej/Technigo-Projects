/// <reference types="vite-plugin-svgr/client" />
import { Link, NavLink } from "react-router-dom";
import MagicBinderLogo from "../assets/MagicBinderLogo.svg?react";

export const NavBar = () => {
  return(
    <div>
      <div
        className="flex max-h-24"  
      >
        <Link 
          to="/"
          className="flex"
        >
          <MagicBinderLogo 
            className="w-24 flex-[1_1_auto] text-baltic-blue"
            aria-label="A logo of a binder inside a circle"
            role="image"
            fill="currentColor"
          />
        </Link>
        <ul
          className="flex flex-1 justify-evenly flex-row"
        >
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  )
}