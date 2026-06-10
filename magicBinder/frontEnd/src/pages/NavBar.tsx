/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import MagicBinderLogo from "../assets/MagicBinderLogo.svg?react";
import { SearchBar } from "./SearchBar";
import { DropDownMenu } from "./DropDownMenu";

//flex-[1_1_auto]

export const NavBar = () => {
  return(
    <div>
      <div
        className="flex w-screen max-h-12"  
      >
        <div
          className="flex flex-1 align-top gap-4"
        >
          <NavLink
            to="/"
            className="flex"
          >
            {<MagicBinderLogo
              className=" w-12 m-1 ml-3 text-baltic-blue"
              aria-label="A logo of a binder inside a circle"
              role="image"
              fill="currentColor"
            />}
          </NavLink>
          <h1
            className="font-satans-minions whitespace-nowrap m-0 self-center text-[clamp(1.5rem,4vw,3.3rem)] text-air-force-blue text-shadow-md text-shadow-pitch-black"
          >
            Magic Binder
          </h1>
        </div>
          <SearchBar
            className="flex flex-2 items-center px-4"
          />
          <DropDownMenu 
            className="flex flex-1 justify-end items-center px-4"
          />
      </div>
    </div>
  )
}