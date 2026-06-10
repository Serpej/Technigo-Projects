/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import MagicBinderLogo from "../assets/MagicBinderLogo.svg?react";
import { DropDownMenu } from "./DropDownMenu";

//flex-[1_1_auto]

export const NavBar = () => {
  return(
    <div>
      <div
        className="flex w-screen bg-papyrus-white"  
      >
        <div
          className="flex flex-1 items-center"
        >
          <NavLink
            to="/"
            className="flex-1 max-w-14"
          >
            {<MagicBinderLogo
              className=" max-h-14 m-1 ml-3 text-baltic-blue"
              aria-label="A logo of a binder inside a circle"
              role="image"
              fill="currentColor"
            />}
          </NavLink>
        </div>
        <h1
          className="flex-1 font-satans-minions whitespace-nowrap m-0 leading-none self-center text-[clamp(2rem,6vw,3.5rem)] text-center text-air-force-blue text-shadow-md text-shadow-pitch-black"
        >
          Magic Binder
        </h1>
        <DropDownMenu 
          className="flex flex-1 justify-end items-center px-4"
        />
      </div>
    </div>
  )
}