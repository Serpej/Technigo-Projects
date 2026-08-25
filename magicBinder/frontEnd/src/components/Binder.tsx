import { PageBackground } from "./PageBackground";
import deltaBackground from "../assets/deltaBackground.png"
import { SearchBar } from "./SearchBar";
import { Toast } from "./Toast";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import type { BinderNameState } from "../types/binderTypes";
import type { FullUserCard } from "../types/cardTypes";
import type { CardDetailsState } from "../types/cardTypes"
import { capitalize } from "../helperFunctions/handleCapitalize";
import { useAuthStore } from "../stores/useAuthStore";
import { useBinderCardsStore } from "../stores/useBinderCardsStore";

export const Binder = () => {
  const location = useLocation();
  const binderObject = location.state as BinderNameState | null;
  const navigate = useNavigate();
  const accesstoken = useAuthStore(state => state.accessToken);
  const cards = useBinderCardsStore(state => state.cards);
  const fetchCards = useBinderCardsStore(state => state.fetchCards);
  const [hasFetchedBinder, setHasFetchedBinder] = useState<boolean>(false);

  useEffect(() => {

    const fecthBinderCards = async () => {
      
      if(!binderObject) {
        return
      }
      
      const binderCards = await fetchCards(binderObject.binderName, accesstoken);

      if(!binderCards) {
        return 
      }

      setHasFetchedBinder(true);
    }

    if(!hasFetchedBinder){
      fecthBinderCards();
    }
  
  },[accesstoken, binderObject, hasFetchedBinder, fetchCards])

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
        className="grid col-start-1 row-start-2 grid-cols-[90vw] grid-rows-[86vh] place-content-center h-full"
        >
          <div
            className="grid grid-rows-[auto_1fr] min-h-0 gap-5  bg-baltic-blue/50 backdrop-blur-sm shadow-2xl px-10 py-3 border-2 rounded-sm border-deep-hero-blue h-full"
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
              className="grid col-start-1 row-start-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 overflow-auto p-2"
            >
            {hasFetchedBinder && cards.map((card: FullUserCard, index) => {

              const imageUris = "image_uris" in card
                ? card.image_uris
                : card.card_faces[0].image_uris;
                
              const navigationState: CardDetailsState = {
                background: location,
                card: card,
                source: "binder",
              }

              return (
                <div
                  className="flex justify-center"
                  key={index}
                >
                  <span
                    className="hidden"
                    aria-hidden="true"
                  >
                    {card.name}
                  </span>
                  <NavLink
                    to="/card" state={navigationState}
                  >
                    <img
                      className="rounded-[4.75%/3.5%]"
                      src={imageUris.normal}
                      srcSet={`${imageUris.small} 146w, ${imageUris.normal} 488w, ${imageUris.large} 672w`}
                      sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 12vw"
                      alt={card.name}
                    />
                  </NavLink>
                </div>
              )
            })
            }
            </div>
          </div>
        </div>
      </div>
      <Toast 
        className = "absolute bottom-30 left-[50%] -translate-x-1/2"
      />
    </div>
  )
}