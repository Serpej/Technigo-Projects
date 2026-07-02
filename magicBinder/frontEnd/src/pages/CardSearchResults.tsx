import { useState, useEffect } from "react";
import { fetchScryfallResponse } from "../services/ScryfallService";
import { useSearchParams } from "react-router-dom";
import type { ScryfallCard } from "../types/types";

export const CardSearchResults = () => {
  const [searchParams] = useSearchParams();
  const [cards, setCards] = useState<ScryfallCard[]>([]);
  const query = searchParams.get("q")

    useEffect(() => {
      if(!query) {
        return;
      }
      const fetchData = async () => {
        const cardData = await fetchScryfallResponse(query);
        const { data } = cardData;
        setCards(data);
      }
      fetchData();
    }, [query]);


  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-10 gap-6 mx-auto content-center justify-center  max-w-[60%]"
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
              <img
                className="rounded-[4.75%/3.5%]"
                src={card.image_uris.normal}
                srcSet={`${card.image_uris.small} 146w, ${card.image_uris.normal} 488w, ${card.image_uris.large} 672w`}
                sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 12vw"
                alt={card.name}
              />
            </div>
          )
        })}
    </div>
  )
}