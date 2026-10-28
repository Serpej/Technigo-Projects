import { PageBackground } from "./PageBackground";
import { NavLink, useSearchParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import deltaBackground2 from "../assets/deltaBackground2.jpg";
import { useAuthStore } from "../stores/useAuthStore";
import type { user } from "../types/userTypes";
import { handleUserSearch } from "../helperFunctions/handleUserSearch";
import { useEffect, useState } from "react";
import { useMessageStore } from "../stores/useMessageStore";
import  fblthlpTheLost  from "../assets/fblthlpTheLost.jpg";


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
          className="grid col-start-1 row-start-2 grid-cols-[80vw] grid-rows-[80vh] place-content-center h-full"
        >
          <div
            className="grid grid-rows-[auto_1fr] min-h-0 gap-5  bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-10 border-2 rounded-sm border-deep-hero-blue h-full"
          >
            <div
              className=" col-start-1 row-start-1 flex justify-center"
            >
              <h2
                className="text-2xl sm:text-4xl font-bold text-center"
              >
                Search Results Found {users.length} User(s)
              </h2>
            </div>

             <div
                  className="grid col-start-1 row-start-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-6"
                >
                  {
                    users.length > 0 &&
                    <ul>
                      {users.map((user, index) => {
                        const name = user.name
                        return(
                          <div 
                            className="flex justify-center lg:px-4"
                            key={index}
                          >
                            <NavLink
                              className="flex items-start justify-center min-w-0 max-w-52 min-h-0 max-h-52"   
                              to={"/otherUsers"}
                            >
                              <div
                                className=" relative flex justify-end items-center flex-col border-2 border-deep-hero-blue/80 shadow-2xl bg-pitch-black rounded-sm transition delay-80 hover:scale-103 font-medium whitespace-nowrap cursor-pointer text-papyrus-white overflow-hidden h-52 min-w-0 max-w-52"
                              >
                                <div
                                  className="absolute top-0 flex justify-center bg-pitch-black w-full pt-3 pb-6"
                                >
                                  {name}
                                </div>
                                <img 
                                  className="pt-2 object-cover"
                                  src={fblthlpTheLost} 
                                  alt="Users chosen binder image"
                                />
                              </div>
                            </NavLink>
                          </div>
                        )
                      })}
                    </ul>
                  }
                </div>
          </div>
          </div>
          </div>
    
    </div>
  )
}