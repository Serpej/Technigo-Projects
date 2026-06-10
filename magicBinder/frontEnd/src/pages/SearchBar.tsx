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
        className="flex w-full items-center justify-between"
      >
        <label 
          htmlFor="searchBar"
          className="flex flex-1 min-w-19"  
        >
          <input
            type="text"
            required
            id="searchBar"
            className=" flex flex-1 w-full m-1 border border-dark-walnut rounded-sm"
          />
        </label>
          <button
            className=" flex justify-end px-2 py-1 border rounded-sm cursor-pointer transition delay-100 hover:scale-105"
          >
            {<Search />}
          </button>
      </form>
    </section>
  </div>
  )

}