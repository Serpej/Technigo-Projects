import { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownMenuIcon from "../assets/DropDownMenuIcon.svg?react"

interface DropDownMenuProps {
  className?: string;
}

export const DropDownMenu = ({ className }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div
      className={className} 
    >
      {<DropDownMenuIcon
        className="justify-end"
       />}
      {isOpen && <ul
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
        </ul>}

    </div>
  )
}