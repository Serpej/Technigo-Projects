import { PageBackground } from "../components/PageBackground";
import { NavLink, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import deltaBackground2 from "../assets/deltaBackground2.jpg";
import { useAuthStore } from "../stores/useAuthStore";
import type { user } from "../types/userTypes";
import { handleUserSearch } from "../helperFunctions/handleUserSearch";
import { useEffect, useState } from "react";
import { useMessageStore } from "../stores/useMessageStore";


export const UserSearchResults = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const accessToken = useAuthStore((state) => state.accessToken);
  const [users, setUsers] = useState<user[]>([]);
  const setMessage = useMessageStore(state => state.setMessage);

  useEffect( () => {
  
  const fetchUserSearchResponse = async () => {

    if(query === null) {
      setMessage("You need a search query.");
      return
    };

    const searchResult = await handleUserSearch(query);

    if(!searchResult) {
      throw new Error("Search failed: Search results undefined");
    };

    if(!searchResult.users) {
      return null
    };

    setUsers(searchResult.users);
  };

  fetchUserSearchResponse()

  },[query, setMessage])

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
          className="grid col-start-1 row-start-2 grid-cols-[90vw] grid-rows-[86vh] place-content-center h-full"
        >
          <div
            className="grid grid-rows-[auto_1fr] min-h-0 gap-5  bg-baltic-blue/50 backdrop-blur-sm shadow-2xl px-10 py-3 border-2 rounded-sm border-deep-hero-blue h-full"
          >
            <div
              className="col-start-1"
            >
              <h2
                className="text-2xl sm:text-4xl font-bold text-center"
              >
                Search Results Found {users.length} User(s)
              </h2>
            </div>
            <div
              className=" col-start-1 row-start-2 flex justify-center border-0 border-b-2 border-b-deep-hero-blue"
            >
              <div
                className="grid grid-cols-3 content-between w-full"
              >
                <div
                  className="grid col-start-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue overflow-auto"
                >
                  {
                    users.length > 0 &&
                    <ul>
                      {users.map((user) => {
                        const name = user.name
                        return(
                          <NavLink
                            key={user.name}
                            to={"/otherUsers"}
                          >
                            <div
                              className="text-2xl font-bold text-center"
                            >
                              {name}
                            </div>
                          </NavLink>
                        )
                      })}
                    </ul>
                  }
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    
    </div>
  )
}