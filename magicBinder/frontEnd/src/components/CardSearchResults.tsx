import { useState, useEffect } from "react";
import { fetchScryfallResponse } from "../services/ScryfallService";
import { useSearchParams, NavLink, useLocation } from "react-router-dom";
import oceanFloor from "../assets/oceanFloor.jpg";
import { PageBackground  } from "./PageBackground";
import type { ScryfallCard } from "../types/types";

export const CardSearchResults = () => {
  const [searchParams] = useSearchParams();
  const [cards, setCards] = useState<ScryfallCard[]>([]);
  const query = searchParams.get("q");
  const location = useLocation();

    useEffect(() => {
      if(!query) {
        return;
      }
      const fetchData = async () => {
        const cardData = await fetchScryfallResponse(query);

        if(!cardData) {
          return;
        }
        
        const { data } = cardData;
        setCards(data);
      }
      fetchData();
    }, [query]);


  return (
    <div
      className="grid grid-rows-[1fr] h-full"
    >

      <PageBackground 
        className="grid col-start-1 row-start-1  min-h-0 overflow-hidden"
        src={oceanFloor}
        alt="Ocean floor with wavey a sand pattern"
      />
      <div
        className="grid col-start-1 row-start-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue overflow-auto"
      >
          {cards.map((card:ScryfallCard) => {
            return (
              <div
                className="flex justify-center"
                key={card.scryfallId}
              >
                <span
                  className="hidden"
                  aria-hidden="true"
                >
                  {card.name}
                </span>
                <NavLink
                  to="/card" state={{ background: location }}
                >
                  <img
                    className="rounded-[4.75%/3.5%]"
                    src={card.image_uris.normal}
                    srcSet={`${card.image_uris.small} 146w, ${card.image_uris.normal} 488w, ${card.image_uris.large} 672w`}
                    sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 12vw"
                    alt={card.name}
                  />
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}