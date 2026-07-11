import { useLocation, useNavigate } from "react-router-dom";
import type { CardDetailsState, ScryfallCard} from "../types/types";
import { fetchCardPrint } from "../services/fetchCardPrint";
import React, { useEffect, useState } from "react";

export const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState: CardDetailsState = location.state;
  const card = locationState.card;

  const [prints, setPrints] = useState<ScryfallCard[]>([card]);
  const [chosenCardId, setChosenCardId] = useState<string>(card.id);  

  useEffect(() => {
    if (!card) {
      return
    }

    const fetchData = async () => {


      const cardPrints = await fetchCardPrint(card.prints_search_uri);

      if(!cardPrints) {
        return
      }

      const { data } = cardPrints
      setPrints(data);
    }
    fetchData();
  },[card])

 
  const chosenCard = prints.find((cardObject) => cardObject.id === chosenCardId);
  if(!chosenCard) {
    return;
  }


  const imageUris = "image_uris" in chosenCard
    ? chosenCard.image_uris
    : chosenCard.card_faces[0].image_uris;

  const oracleText = "card_faces" in chosenCard
    ? `${chosenCard.card_faces[0].oracle_text} \n\n//\n\n ${chosenCard.card_faces[1].oracle_text}`
    : chosenCard.oracle_text;

  const handleOnChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>, 
    ) => {
    const setName:string = e.target.value;
    const chosenCardObject = prints.find((cardObject) => cardObject.set_name === setName);

    if(!chosenCardObject) {
      return null
    }
    setChosenCardId(chosenCardObject.id);
  }

  return(
    <div
      className="h-full flex items-center justify-center fixed inset-0 bg-black/60"
      onClick={() => {navigate(-1)}}
    >
      <div
        className="sm:grid sm:grid-cols-[1fr_1fr] flex flex-col gap-5 sm:gap-0 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl py-18 sm:px-10  border-2 rounded-sm border-deep-hero-blue w-full max-w-[70vw] max-h-[80vh] overflow-auto relative mx-10"
        onClick={(e) => {e.stopPropagation()}}
      >
        <div
          className="flex flex-col items-center min-w-0"
        >
          <button
            className="absolute top-5 right-5 cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
            onClick={() => navigate(-1)}
          >
            Close
          </button>
          <div
            className="flex flex-col h-full w-full items-center"
          >
            <img
              className="rounded-[4.75%/3.5%] mx-5 sm:mx-0 max-w-[40vh]"
              src={imageUris.normal}
              srcSet={`${imageUris.small} 146w, ${imageUris.normal} 488w, ${imageUris.large} 672w`}
              sizes="40vh"
              alt={card.name}
            />
            <div
              className="flex justify-center gap-2 mt-4"
            >
              <button
                className="cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
              >
                Foil
              </button>
              <button
                className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-2 py-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105"
              >
                Add to binder
              </button>
            </div>
          </div>
        </div>
          <div
            className="flex flex-col gap-2 p-4 mx-5 sm:m-0 sm:ml-10 bg-baltic-blue/90 border border-deep-hero-blue rounded-sm"
          >
            <h4
              className="font-bold text-lg"
            >{card.name}</h4>
            <p
              className="font-bold"
            >{card.type_line}</p>
            <div
              className=""
            >
              <p
                className="p-2 bg-air-force-blue border rounded-sm whitespace-pre-line"
              >
                {oracleText}
              </p>
            </div>
            <form action=""
              className="flex flex-col min-w-0"
            >
              <label 
                className="font-bold"
                htmlFor="print">
                Print:
                <select 
                  className="font-normal w-full border rounded-sm p-1 bg-air-force-blue"
                  name="print" id="print"
                  onChange={(e) => handleOnChangeSelect(e)}
                >
                  {prints.map((printOfCard, index) => {
                    return(
                      <option 
                        key={index} 
                        value={printOfCard.set_name}
                        className=""
                      >
                        {`${printOfCard.set_name} (${printOfCard.set})`}</option>
                    )
                  })}
                </select>
              </label>
              <label 
                className="font-bold"
                htmlFor="condition">
                Condition:
                <select 
                  name="condition" 
                  id="condition"
                  className="font-normal flex flex-col border rounded-sm w-full p-1 bg-air-force-blue"  
                >
                  <option 
                    value="near mint"
                    >
                    Near Mint
                  </option>
                  <option 
                    value="excellent"                  
                    >
                    Excellent
                  </option>
                  <option 
                    value="good"
                    >
                    Good
                  </option>
                  <option 
                    value="light played"
                    >
                    Light Played
                  </option>
                  <option 
                    value="played"
                    >
                    Played
                  </option>
                  <option 
                    value="poor"
                    >
                    Poor
                  </option>
                </select>
              </label>
              <label 
                className="font-bold flex flex-col"
                htmlFor="amount">
                Amount:
                <input
                  className="font-normal border rounded-sm bg-air-force-blue p-1" 
                  type="number" 
                  min="0" 
                  name="amount" 
                  id="amount" 
                />
              </label>
            </form>
        </div>
      </div>
    </div>
  )
}