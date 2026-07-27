import { PageBackground } from "./PageBackground";
import deltaBackground from "../assets/deltaBackground.png"
import { SearchBar } from "./SearchBar";
import { capitalize } from "../helperFunctions/handleCapitalize";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect, useState } from "react";
import { fetchBindersResponse } from "../services/fetchBinders";
import { NavLink, useLocation } from "react-router-dom";
import type { cardBinderSummary } from "../types/binderTypes";


export const ProfilePage = () => {
  const user = useAuthStore((state) => state.userName);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [binders, setBinders] = useState<cardBinderSummary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const navigationState = {
    background: location
  }

  useEffect(() => {

    const fetchData = async () => {
      
      try {
        setIsLoading(true);
        const result = await fetchBindersResponse(accessToken);
        
        if(!result || !result.success ) {
          setIsLoading(false);
          return
        }

        setBinders(result.binderObjects);
      }finally {
        setIsLoading(false);
      }
      
    };

    fetchData();
  }, [accessToken]);

  if(typeof user !== "string") {
    return
  }
  const capitalizedName = capitalize(user);

  const renderBinder = ():React.ReactNode => {
    if(isLoading) {
      return <div>...Loading</div>
      
    }else if(binders.length === 0 && !isLoading) {
      return null
    } else {
      return binders.map((binder, index) => 

        <div 
          className="flex justify-center"
          key={index}
        >
          <NavLink
            to="/binder"
            state={{ "binderName": binder.name, "binderId": binder._id }}
            className="flex grow justify-center min-w-0 max-w-52"
          >
            <button
              className="flex grow min-w-0 max-w-52 justify-center items-center cursor-pointer bg-bright-purple/50 hover:bg-bright-purple/70 border-2 border-deep-hero-blue/80 shadow-2xl rounded-sm transition delay-80 hover:scale-103 hover:font-medium whitespace-nowrap"
            >
              {binder.name}
            </button>
          </NavLink>
        </div>      
      )
    }
  }

  return(
    <div
      className="grid grid-rows-[1fr] h-full"
    >
      <div
        className="grid col-start-1 row-start-1 grid-rows-[auto_1fr] min-h-0 overflow-hidden"
      >
        <SearchBar
          className="col-start-1 row-start-1"
        />
        <PageBackground
          className="col-start-1 row-start-2"
          src={deltaBackground}
          alt="A beautiul view of a delta landscape in dusk."
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
                className="text-2xl sm:text-4xl font-bold"
              >
                Welcome {capitalizedName}
              </h2>
            </div>
            <div
              className="grid col-start-1 row-start-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 overflow-auto p-2"
            >
              {renderBinder()}
              <div
                className="flex justify-center"
              >
                <NavLink
                  to="/newbinder"
                  state={navigationState}
                  className="flex grow justify-center min-w-0 max-w-52"
                >
                  <button
                    className="flex grow min-w-0 max-w-52 justify-center items-center cursor-pointer bg-bright-purple/50 hover:bg-bright-purple/70 border-2 border-deep-hero-blue/80 shadow-2xl rounded-sm transition delay-80 hover:scale-103 font-medium whitespace-nowrap"
                  >
                    Add Binder
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}