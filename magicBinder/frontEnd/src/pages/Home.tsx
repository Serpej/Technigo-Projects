import { Hero } from "../pages/Hero";
import { About } from "./About";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <About />
    </div>
  )
} 