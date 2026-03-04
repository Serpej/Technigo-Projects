import React from "react";
import { Link } from "react-router-dom";
import universe from "../assets/pexels-felix-mittermeier-1146134.jpg"

const backgroundImage = universe

export const Error404  = () => {

  return (
    <div
      className="min-h-screen bg-cover relative"
      style= {{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${backgroundImage})`}}
    >
      <Link 
        className=" flex items-center absolute top-[10px] left-[50px]" 
        to="/"
        >
        <svg 
          className="w-8 mr-[2px] drop-shadow-[2px_3px_4px_rgb(0_0_0_/_.5)]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 30 30"
          >
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
          </path>
        </svg>
        <p className="text-white font-semibold text-xl drop-shadow-[2px_3px_4px_rgb(0_0_0_/_.5)]">
          Movies
        </p>
      </Link>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-xl md:text-3xl text-white font-bold drop-shadow-[2px_3px_4px_rgb(0_0_0_/_.5)]">404. Page not found.</h1>
      </div>
      <p className="text-white text-sm absolute bottom-1 right-0 mr-[10px]">Photo by Felix Mittermeier</p>
    </div>
  )
}