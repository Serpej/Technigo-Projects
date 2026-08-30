import { useState, useEffect } from "react";
import { fetchScryfallResponse } from "../services/ScryfallService";
import { useSearchParams, NavLink, useLocation } from "react-router-dom";
import oceanFloor from "../assets/oceanFloor.jpg";
import { PageBackground  } from "./PageBackground";
import  fblthlpTheLost  from "../assets/fblthlpTheLost.jpg";
import { SearchBar } from "./SearchBar";
import type { ScryfallCard, CardDetailsState, ScryfallSearchResult } from "../types/cardTypes";

export const CardSearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState<ScryfallSearchResult>();
  const query = searchParams.get("q");
  const location = useLocation();

    useEffect(() => {
      if(!query) {
        return;
      }
      const fetchData = async () => {
        const cardData = await fetchScryfallResponse(query);

        if(!cardData) {
          return
        }
        
        setSearchResult(cardData);
      }
      fetchData();
    }, [query]);

  return (
    <div
      className="grid grid-rows-[1fr] h-full"
    >
      <PageBackground 
        className="grid col-start-1 row-start-1"
        src={oceanFloor}
        alt="Ocean floor with wavey a sand pattern"
      />
      <div
        className="grid col-start-1 row-start-1 grid-rows-[auto_1fr] min-h-0 overflow-hidden"
      >
        <SearchBar
          className="grid col-start-1 row-start-1"
        />
        <div
          className="grid col-start-1 row-start-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue overflow-auto"
        >

          {searchResult && !searchResult.found && (
            <div
              className="col-span-full place-content-center text-center"  
            >
              <div
                className="min-h-0 flex justify-center items-center flex-col gap-3"
              >
                <p
                  className="font-bold text-xl sm:text-3xl"
                >
                  {searchResult.message}
                </p>
                <img
                  className="min-w-0 grow w-full max-w-80 rounded-[4.75%/3.5%] border mx-20"
                  src={`${fblthlpTheLost}`}
                  alt="A picture of a lost homonculus called Fblthlp"
                />
              </div>
            </div>
          )}

          {searchResult?.found && searchResult.data.map((card: ScryfallCard, index) => {

            const imageUris = "image_uris" in card
              ? card.image_uris
              : card.card_faces[0].image_uris;
              
            const navigationState: CardDetailsState = {
              background: location,
              card: card,
              source: "search"
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
          })}
      </div>
      </div>
    </div>
  )
}