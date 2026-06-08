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
      className="flex border border-baltic-blue"
    >
      <form
        className="flex w-full items-center"
      >
        <label 
          htmlFor="searchBar"
          className="flex flex-3"  
        >
          <input
            type="text"
            required
            id="searchBar"
            className=" m-1 border border-dark-walnut rounded-sm"
          />
        </label>
          <button
            className=" flex-1 px-2 py-1"
          >
            {<Search />}
          </button>
      </form>
    </section>
  </div>
  )

}