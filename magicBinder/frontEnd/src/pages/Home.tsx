import { Link } from "react-router-dom";
import { PageBackground } from "./PageBackground";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  return (
    <div className="grid grid-rows-[1fr] h-full">
      <div className="grid col-start-1 row-start-1 grid-rows-[auto_1fr] min-h-0 overflow-hidden">
        <SearchBar
          className="grid col-start-1 row-start-1"
        />
        <PageBackground
          className="grid col-start-1 row-start-2"
        />
      </div>
      <div
        className="grid col-start-1 row-start-1 place-self-center bg-deep-hero-blue/50 border border-baltic-blue rounded-sm shadow-2xl p-8"
      >
        <h1
          className="text-3xl text-center text-papyrus-white p-8  leading-0"
        >Your Local Trade Binder Community</h1>
        <div
          className="flex justify-center gap-8 pt-4"
        >
          <Link
            to="/login"
            className="flex-1 max-w-[30%] bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-4 py-2 m-1 rounded-sm text-2xl text-center cursor-pointer transition delay-80 hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="flex-1 max-w-[30%] bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-4 py-2 m-1 rounded-sm text-2xl text-center cursor-pointer transition delay-80 hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
} 