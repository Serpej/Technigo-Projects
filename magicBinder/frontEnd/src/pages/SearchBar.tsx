import { useState } from "react";
import Search from "../assets/Search.svg?react";
import { handleCardSearch } from "../helperFunctions/handleCardSearch";
import { handleValue } from "../helperFunctions/handleValue"
import { useNavigate } from "react-router-dom";

interface SearchProps {
  className: string;
}

export const SearchBar = ({ className }: SearchProps) => {
  const [query, setQuery] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  return(
  <div
    className={`${className} grid grid-cols-[1fr_2fr_1fr] px-4 bg-baltic-blue border-t border-deep-hero-blue py-1`}
  >
    <div></div>
    <section
      className="col-start-2 flex w-full border-baltic-blue"
    >
      <form
        className="flex w-full items-center justify-center"
        onSubmit={(e) =>  handleCardSearch(e, query, setErrorMessage, navigate)}
      >
        <label 
          htmlFor="searchBar"
          className="flex flex-1 max-w-[75%] min-w-19"  
        >
          <input
            type="text"
            required
            id="searchBar"
            className=" flex flex-1 m-1 bg-gray-pearl-white border border-pitch-black rounded-sm"
            onChange = {(e) => handleValue(e, setQuery)}
            value={query}
          />
        </label>
          <button
            className=" flex px-1 py-0.5 bg-gray-pearl-white border-pitch-black rounded-sm cursor-pointer transition delay-100 hover:scale-105"
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