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
      className="grid grid-cols-5 gap-4 m-10 mx-40 content-center justify-center"
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
                src={card.image_uris.small}
                alt={card.name}
              />
            </div>
          )
        })}
    </div>
  )
}