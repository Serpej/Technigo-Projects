import { useState } from "react";

type ArrowProps = {
  onClick: () => void;
  showBackButton: boolean;
}

export const Arrow = ({ onClick, showBackButton }:ArrowProps) => {

  return (
    <div>
      <button 
        id="arrowButton" 
        className={`${!showBackButton ? 'isHidden' : ''}`} 
        onClick={onClick}
        >
        <img
        className="arrowImg" src="https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44038_1280.png"
        alt="an arrow symbol" />
      </button>
    </div>
  )
}