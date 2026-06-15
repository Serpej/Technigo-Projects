import { Hero } from "../pages/Hero";
import { Login } from "../pages/Login";
import { About } from "./About";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <Login />
      <About />
    </div>
  )
} 