import { PageBackground } from "./PageBackground";
import deltaBackground from "../assets/deltaBackground.png"
import { SearchBar } from "./SearchBar";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect, useState } from "react";
import { fetchBindersResponse } from "../services/fetchBinders"
import type { cardBinderSummary } from "../types/types";


export const ProfilePage = () => {
  const user = useAuthStore((state) => state.userName);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [binders, setBinders] = useState<cardBinderSummary[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const renderBinder = ():React.ReactNode => {
    if(isLoading) {
      return <div>...Loading</div>
      
    }else if(binders.length === 0 && !isLoading) {
      return null
    } else {
      return binders.map((binder) => 
        <div>
          {binder.name}
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
        className="grid col-start-1 row-start-2 grid-cols-[70vw] grid-rows-[70vh] place-content-center"
        >
          <div
            className="grid grid-rows-[auto_1fr] min-h-0 gap-5  bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-10 border-2 rounded-sm border-deep-hero-blue "
          >
            <div
              className=" col-start-1 row-start-1 flex justify-center"
            >
              <h2
                className="text-4xl font-bold"
              >
                Welcome {user}
              </h2>
            </div>
            <div
              className="grid col-start-1 row-start-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {renderBinder()}
              <div>
                <button
                  className="cursor-pointer bg-bright-purple/50 hover:bg-bright-purple/70 border-2 border-deep-hero-blue/80 shadow-2xl py-20 px-15 rounded-sm transition delay-80 hover:scale-103 font-medium whitespace-nowrap"
                >
                  Add Binder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}