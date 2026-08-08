import { useLocation, useNavigate } from "react-router-dom";
import type { CardDetailsState, ScryfallCard} from "../types/cardTypes";
import { fetchCardPrint } from "../services/fetchCardPrint";
import React, { useEffect, useState } from "react";
import { handleAddToBinder } from "../helperFunctions/handleAddToBinder";
import { useAuthStore } from "../stores/useAuthStore";
import { useBinderStore } from "../stores/useBinderStore";

export const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState: CardDetailsState = location.state;
  const card = locationState.card;

  const [prints, setPrints] = useState<ScryfallCard[]>([card]);
  const [chosenCardId, setChosenCardId] = useState<string>(card.id);
  const [activeFace, setActiveFace] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [condition, setCondition] = useState<string>("Near Mint");
  const [binderName, setBinderName] = useState<string>("")
  const [hasFetchedBinders, setHasFetchedBinders] = useState<boolean>(false);

  const accessToken = useAuthStore((state) => state.accessToken);
  const binders = useBinderStore(state => state.binders);
  const fetchBinders = useBinderStore(state => state.fetchBinders);

  useEffect(() => {

    if (!card) {
      return
    }

    const fetchCardData = async () => {

      const cardPrints = await fetchCardPrint(card.prints_search_uri);

      if(!cardPrints) {
        return
      }

      const { data } = cardPrints
      setPrints(data);
    }

    fetchCardData();

  },[card])

  useEffect(() => {

    if(!accessToken) {
      return
    }

    const getBindersFromGlobalState = async () => {
      const fetchedBinders = await fetchBinders(accessToken);

      if(!fetchedBinders){
        return
      }
      setHasFetchedBinders(true);
    }

    if(!hasFetchedBinders) {
      getBindersFromGlobalState();
    }

  },[accessToken, fetchBinders, hasFetchedBinders])

  useEffect(() => {

    const setDefaultBinderName = () => {
      if(hasFetchedBinders){
        setBinderName(binders[0].name);
      }
    }
    setDefaultBinderName();
       
  },[binders, setBinderName, hasFetchedBinders])

  const chosenCard = prints.find((cardObject) => cardObject.id === chosenCardId);
  if(!chosenCard) {
    return null
  }

  const imageUris = "image_uris" in chosenCard
    ? chosenCard.image_uris
    : chosenCard.card_faces[activeFace ? 1 : 0].image_uris;

  const type_line = "type_line" in chosenCard
    ?  chosenCard.type_line
    : chosenCard.card_faces[activeFace ? 1 : 0].type_line;

  const flipableLayouts = ["transform", "modal_dfc", "reversible_card"];
  const canFlip = flipableLayouts.includes(chosenCard.layout);

  const oracleText = "card_faces" in chosenCard
    ? `${chosenCard.card_faces[0].oracle_text} \n\n//\n\n ${chosenCard.card_faces[1].oracle_text}`
    : chosenCard.oracle_text;

  const handleOnChangePrint = (
    e: React.ChangeEvent<HTMLSelectElement>, 
    ) => {
    const cardId:string = e.target.value;
    const chosenCardObject = prints.find((cardObject) => cardObject.id === cardId);

    if(!chosenCardObject) {
      return null
    }
    setChosenCardId(chosenCardObject.id);
  }

  const handleOnChangeCondition = (
    e: React.ChangeEvent<HTMLSelectElement>, 
    ) => {
    const condition:string = e.target.value;
    setCondition(condition);
  }

  const handleOnChangeAmount = (
    e: React.ChangeEvent<HTMLInputElement>, 
    ) => {
    const amount = e.target.valueAsNumber;

    setAmount(amount);
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
            className="absolute top-5 right-5 cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
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
              alt={chosenCard.name}
            />
            <div
              className="flex justify-center gap-2 mt-4"
            >
              { canFlip &&
                <button
                  className="cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
                  onClick={() => setActiveFace(!activeFace)}
                >
                  Flip
                </button>
              }
              { binderName &&
                <form action="">
                  <label htmlFor="binder">
                    <button
                      className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 hover:font-medium"
                      onClick={(e) => handleAddToBinder(e, binderName, chosenCard.id, condition, amount, accessToken)}
                    >
                      Add to binder
                    </button>
                    <select
                      className="font-normal pl-2 ml-2 min-w-0 border rounded-sm p-1 bg-gray-pearl-white border-pitch-black"
                      name="binders" 
                      id="binders"
                    >
                      {binders.map((binder, index) => {
                        return(
                          <option 
                            key={index} 
                            value={binder.name}
                          >
                            {`${binder.name}`}
                          </option>
                        )
                      })}
                    </select>
                  </label>
                </form>
              }
            </div>
          </div>
        </div>
          <div
            className="flex flex-col gap-2 p-4 mx-5 sm:m-0 sm:ml-10 bg-baltic-blue/90 border border-deep-hero-blue rounded-sm"
          >
            <p
              className="font-bold text-lg"
            >{chosenCard.name}</p>
            <p
              className="font-bold"
            >{type_line}</p>
            <div>
              <p
                className="p-2 bg-gray-pearl-white border-pitch-black border rounded-sm whitespace-pre-line"
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
                  className="font-normal pl-2 w-full border rounded-sm p-1 bg-gray-pearl-white border-pitch-black"
                  name="print" 
                  id="print"
                  onChange={(e) => handleOnChangePrint(e)}
                >
                  {prints.map((printOfCard, index) => {
                    return(
                      <option 
                        key={index} 
                        value={printOfCard.id}
                      >
                        {`${printOfCard.set_name}`}
                      </option>
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
                  className="font-normal flex flex-col pl-2 border rounded-sm w-full p-1 bg-gray-pearl-white border-pitch-black"
                  onChange={(e) => handleOnChangeCondition(e)}
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
                  className="pl-2 font-normal border rounded-sm bg-gray-pearl-white border-pitch-black p-1" 
                  type="number" 
                  min="0" 
                  name="amount" 
                  id="amount"
                  onChange={(e) => handleOnChangeAmount(e)}
                  value={amount}
                />
              </label>
            </form>
            <div>
              <a 
                href={chosenCard.purchase_uris.cardmarket}
                rel="noopener noreferrer"
                target="_blank"
                className="underline font-medium"
              >
                {chosenCard.nonfoil 
                ? `Price trend: ${chosenCard.prices.eur}€` 
                : `Price trend: ${chosenCard.prices.eur_foil}€`}
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}