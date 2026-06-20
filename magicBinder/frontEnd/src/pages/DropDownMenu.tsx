import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleButton } from "../helperFunctions/toggleButton";
import DropDownMenuIcon from "../assets/DropDownMenuIcon.svg?react";

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
  },[isOpen]);

  return(
    <div
      ref={ref}
      className="flex justify-end items-center bg-papyrus-white border fixed top-4 right-2 rounded-sm"
    >
      <div
        className={`${isOpen ? "hidden aria-hidden" : "flex"} justify-center w-8 h-8 p-1 cursor-pointer transition delay-100 hover:scale-105`}
      >
        <button
          className="cursor-pointer"
          onClick={() => toggleButton(isOpen, setIsOpen)} 
        >
          {<DropDownMenuIcon />}
        </button>
      </div>
        <ul
            className={`${isOpen && "max-w-80 px-2 max-h-full"} max-w-0 max-h-8 overflow-hidden aria-hidden flex flex-1 justify-evenly flex-col duration-150 ease-in-out`}
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
  )
}