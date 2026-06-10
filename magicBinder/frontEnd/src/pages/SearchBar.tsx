import Search from "../assets/Search.svg?react";

interface SearchBarProps {
  className?: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
  return(
  <div
    className={className}
  >
    <section
      className="flex w-full border-baltic-blue"
    >
      <form
        className="flex w-full items-center justify-center"
      >
        <label 
          htmlFor="searchBar"
          className="flex flex-1 max-w-[50%] min-w-19"  
        >
          <input
            type="text"
            required
            id="searchBar"
            className=" flex flex-1 m-1 bg-gray-pearl-white border border-pitch-black rounded-sm"
          />
        </label>
          <button
            className=" flex px-2 py-1 bg-gray-pearl-white border-pitch-black rounded-sm cursor-pointer transition delay-100 hover:scale-105 "
          >
            {<Search />}
          </button>
      </form>
    </section>
  </div>
  )

}