import { Hero } from "../pages/Hero";
import { Login } from "../pages/Login";
import { About } from "./About";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  return (
    <div>
      <SearchBar
        className="flex flex-1 items-center px-4 bg-baltic-blue border-t border-dark-walnut py-1"
       />
      <Hero />
      <Login />
      <About />
    </div>
  )
} 