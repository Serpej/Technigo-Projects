import Search from "../assets/Search.svg?react";



export const SearchBar = () => {
  return(
  <div
    className="grid grid-cols-[1fr_2fr_1fr] px-4 bg-baltic-blue border-t border-dark-walnut py-1"
  >
    <div></div>
    <section
      className="col-start-2 flex w-full border-baltic-blue"
    >
      <form
        className="flex w-full items-center justify-center"
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
          />
        </label>
          <button
            className=" flex px-1 py-0.5 bg-gray-pearl-white border-pitch-black rounded-sm cursor-pointer transition delay-100 hover:scale-105 "
          >
            {<Search />}
          </button>
      </form>
    </section>
    <div></div>
  </div>
  )

}