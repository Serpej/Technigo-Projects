import { useEffect, useRef, useState } from "react";
import Search from "../assets/Search.svg?react";
import { handleCardSearch } from "../helperFunctions/handleCardSearch";
import { handleUserSearch } from "../helperFunctions/handleUserSearch";
import { handleValue } from "../helperFunctions/handleValue"
import { useNavigate } from "react-router-dom";

interface SearchProps {
  className: string;
  accessToken: string;
}

export const SearchBar = ({
    className,
    accessToken
  }: SearchProps
 ) => {
  const [query, setQuery] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [searchType, setSearchType] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const inputRef =  useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

    useEffect(() => {
      
      if(!accessToken) {
        return
      }

      const setToLoggedIn = () => {
        setIsLoggedIn(true);
      }
      setToLoggedIn();

    }, [accessToken]);

  return(
  <div
    className={`
      ${className} grid grid-cols-[1fr_2fr_1fr] px-4 py-1 border-t border-deep-hero-blue
      ${searchType === true ? "bg-baltic-blue" : "bg-dark-walnut/90"}
    `}
  >
    <div>
      {
        isLoggedIn && <button
          className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-1 py-0.5 m-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 hover:font-medium"
          onClick={() => {
            setSearchType(prev => !prev);
            setQuery("");
            setErrorMessage("");
            inputRef.current?.focus();
          }}
        >
          {searchType ? "Switch To User Search" : "Switch To Card Search"}
        </button>
      }
    </div>
    <section
      className="col-start-2 flex w-full border-baltic-blue"
    >
      <form
        className="flex w-full items-center justify-center"
        onSubmit={(e) =>  searchType  
          ? handleCardSearch(e, query, setErrorMessage, navigate)
          : handleUserSearch(e, query, setErrorMessage, navigate)
        }
      >
        <label 
          htmlFor="searchBar"
          className="flex flex-1 max-w-140 min-w-19"  
        >
          <input
            type="text"
            required
            id="searchBar"
            ref={inputRef}
            placeholder={searchType ? "Lightning bolt" : "Magic Mike"}
            className=" flex flex-1 m-1 pl-2 bg-gray-pearl-white border border-pitch-black rounded-sm"
            onChange = {(e) => handleValue(e, setQuery)}
            value={query}
          />

        </label>
          <button
            className=" flex px-1 py-0.5 bg-gray-pearl-white border-pitch-black rounded-sm cursor-pointer transition delay-100 hover:scale-105"
            aria-label="Search Button"
          >
            {<Search />}
          </button>
          {errorMessage && (
              <p
                className="text-red-400 text-sm m-1"
              >
                {errorMessage}
              </p>
          )}
      </form>
    </section>
    <div></div>
  </div>
  )

}