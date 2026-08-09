import { PageBackground } from "./PageBackground";
import deltaBackground from "../assets/deltaBackground.png"
import { SearchBar } from "./SearchBar";import 
{ useLocation, useNavigate } from "react-router-dom";
import type { BinderNameState } from "../types/binderTypes";
import { capitalize } from "../helperFunctions/handleCapitalize";
import { useEffect } from "react";
import { useAuthStore } from "../stores/useAuthStore";

export const Binder = () => {
  const location = useLocation();
  const binderObject = location.state as BinderNameState | null;
  const navigate = useNavigate();
  const accesstoken = useAuthStore(state => state.accessToken);
  useEffect(() => {
  
  //här ska binderkorten fetchas

    const fecthBinderCards = async () => {
      if(!binderObject) {
        return
      }
      const binderCards = await handleFetchBinderCards(binderObject.binderName, accesstoken);
    }
    fecthBinderCards();
  })

  if(!binderObject){
   return null
  }

  const { binderName } = location.state;
  if(typeof binderName !== "string") {
    return
  }
  const capitalizedName = capitalize(binderName);

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
              className=" col-start-1 row-start-1 flex justify-center border-0 border-b-2 border-b-deep-hero-blue"
            >
              <div
                className="grid grid-cols-3 content-between w-full"
              >
                <div
                  className="flex items-start"
                >
                  <button
                    className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 m-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 hover:font-medium"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </div>
                <h2
                  className="text-2xl sm:text-4xl font-bold text-center"
                >
                  {capitalizedName}
                </h2>
                <div></div>
              </div>
            </div>
            <div
              className="grid col-start-1 row-start-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 overflow-auto p-2"
            >
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}