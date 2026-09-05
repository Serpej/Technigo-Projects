import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleButton } from "../helperFunctions/toggleButton";
import DropDownMenuIcon from "../assets/DropDownMenuIcon.svg?react";
import { LogOutButton } from "./LogOutButton";
import { useAuthStore } from "../stores/useAuthStore";

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(!ref.current || !isOpen) {
        return    
      }
      if(!ref.current.contains(event.target as Node)){
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside)
    };
  },[isOpen]);

  const { accessToken } =  useAuthStore()

  return(
    <div
      ref={ref}
      className="flex justify-end items-center bg-papyrus-white border rounded-sm fixed top-4 right-4 z-10"
    >
      <div
        className={`${isOpen ? "hidden aria-hidden" : "flex"} justify-center w-8 h-8 p-1 cursor-pointer transition delay-100 hover:scale-105`}
      >
        <button
          className="cursor-pointer"
          aria-label="Drop Down Menu"
          onClick={() => toggleButton(isOpen, setIsOpen)} 
        >
          {<DropDownMenuIcon />}
        </button>
      </div>
        <ul
            className={`${isOpen && "max-w-80 p-3 gap-2 max-h-full font-medium"} max-w-0 max-h-8 overflow-hidden aria-hidden flex flex-1 justify-evenly flex-col`}
          >
          <li>
            {accessToken 
              ? <LogOutButton /> 
              : <NavLink 
                to="/login"
                className={({ isActive }) => isActive 
                ? "underline font-bold" 
                : ""
                }> 
                  Log in 
                </NavLink>}
          </li>
          <li>
            {accessToken 
              ? "" 
              : <NavLink 
                  to="/signup" 
                  className={({ isActive }) => isActive 
                    ? "underline font-bold" 
                    : ""
                  }> 
                    Sign up 
                </NavLink>
            }
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive 
                ? "underline font-bold" 
                : ""
              }>
              About
            </NavLink>
          </li>
        </ul>

    </div>
  )
}