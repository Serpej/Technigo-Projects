
export const SearchBar = () => {
  return(
  <section
    className="bg-air-force-blue"
  >
    <form action="">
      <label htmlFor="searchBar">
        <input 
          type="text"
          required
          id="searchBar"
        />
      </label>
        <button>
          Search
        </button>
    </form>
  </section>
  )

}