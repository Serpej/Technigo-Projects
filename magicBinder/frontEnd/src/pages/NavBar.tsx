/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import MagicBinderLogo from "../assets/MagicBinderLogo.svg?react";

export const NavBar = () => {
  return(
    <div>
      <div
        className=" max-w-full grid grid-cols-3 w-screen bg-papyrus-white/20" 
      >
        <div
          className="flex flex-1 items-center"
        >
          <NavLink
            to="/"
            className=" max-w-18"
          >
            {<MagicBinderLogo
              className=" max-h-14 m-1 ml-3 text-baltic-blue"
              aria-label="A logo of a binder inside a circle"
              role="image"
              fill="currentColor"
            />}
          </NavLink>
        </div>
        <div>
          <h1
            className="font-satans-minions whitespace-nowrap m-0 leading-none self-center text-[clamp(2rem,6vw,3.5rem)] text-center text-air-force-blue text-shadow-md text-shadow-pitch-black"
          >
            Magic Binder
          </h1>
        </div>
      </div>
    </div>
  )
}