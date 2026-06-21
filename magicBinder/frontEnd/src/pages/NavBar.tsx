/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import MagicBinderLogo from "../assets/MagicBinderLogo.svg?react";

export const NavBar = () => {
  return(
    <div>
      <div
        className="px-4 max-w-full grid grid-cols-[1fr_2fr_1fr] w-screen bg-papyrus-white/20" 
      >
        <div
          className="flex"
        >
          <NavLink
            to="/"
            className="hidden sm:flex items-center w-18 sm:w-full"
          >
            {<MagicBinderLogo
              className=" max-h-14 max-w-14 text-baltic-blue"
              aria-label="A logo of a binder inside a circle"
              role="image"
              fill="currentColor"
            />}
          </NavLink>
        </div>
        <div
          className="col-start-1 sm:col-start-2"
        >
          <h1
            className="font-satans-minions whitespace-nowrap leading-none m-0 self-center text-[clamp(2.5rem,6vw,5rem)] text-center text-air-force-blue text-shadow-md text-shadow-pitch-black"
          >
            Magic Binder
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  )
}