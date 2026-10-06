import { PageBackground } from "../components/PageBackground";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import deltaBackground2 from "../assets/deltaBackground2.jpg";
import { useAuthStore } from "../stores/useAuthStore";
export const UserSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const accessToken = useAuthStore((state) => state.accessToken);

  return(
    <div
      className="grid grid-rows-[1fr] h-full"
    >
      <PageBackground 
        className="grid col-start-1 row-start-1"
        src={deltaBackground2}
        alt="A Delta landscape in dusk"
      />
      <div
        className="grid col-start-1 row-start-1 grid-rows-[auto_1fr] min-h-0 overflow-hidden"
      >
        <SearchBar
          className="grid col-start-1 row-start-1"
          accessToken= {accessToken}
        />
        <div
          className="grid col-start-1 row-start-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue overflow-auto"
        >
        {query}
        </div>
      </div>
    
    </div>
  )
}