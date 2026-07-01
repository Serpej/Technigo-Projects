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
    <div>
      <ul>
        {cards.map((card:ScryfallCard) => {
          return (<li>{card?.name}</li>)
        })}
      </ul>
    </div>
  )
}