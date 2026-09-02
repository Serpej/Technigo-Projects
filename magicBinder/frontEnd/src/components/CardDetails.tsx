import { useLocation, useNavigate } from "react-router-dom";
import type { CardDetailsState, ScryfallCard } from "../types/cardTypes";
import { fetchCardPrint } from "../services/fetchCardPrint";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { useBinderStore } from "../stores/useBinderStore";
import { useMessageStore } from "../stores/useMessageStore";
import { CardSearchFrom } from "./cardDetailsComponents/CardSearchFrom"
import { AddToBinderButton } from "./cardDetailsComponents/CardSearchAddToBinderButton";
import { DeleteCardButton } from "./cardDetailsComponents/CardSearchDeleteCardButton"
import { handleSetBinderImage } from "../helperFunctions/handleSetBinderImage";
import { Toast } from "./Toast";

export const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState: CardDetailsState = location.state;
  const card = locationState.card;
  const source = locationState.source;
  const activeBinder = locationState.source === "binder"
    ? locationState.binderName : "";
  const binderCard = locationState.source === "binder" 
    ? locationState.card : "";

  const [prints, setPrints] = useState<ScryfallCard[]>([card]);
  const [chosenCardId, setChosenCardId] = useState<string>(card.id);
  const [activeFace, setActiveFace] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [condition, setCondition] = useState<string>("Near Mint");
  const [binderName, setBinderName] = useState<string>(activeBinder);
  const [hasFetchedBinders, setHasFetchedBinders] = useState<boolean>(false);
  const [hasFetchedCard, sethasFetchedCard] = useState<boolean>(false);

  const accessToken = useAuthStore(state => state.accessToken);
  const binders = useBinderStore(state => state.binders);
  const fetchBinders = useBinderStore(state => state.fetchBinders);
  const setMessage = useMessageStore(state => state.setMessage);
  const setBinderImage = useBinderStore(state => state.setBinderImage);
  const updateBinderImage = useBinderStore(state => state.updateBinderImage);

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
      sethasFetchedCard(true);
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

    if(!binders[0]){
      setMessage("You currently don't have any binders.");
    }
    if(!binderName && binders[0]) {
      setDefaultBinderName();
    }
       
  },[binders, binderName, setBinderName, hasFetchedBinders, setMessage]);


  if(!prints) {
    return null
  }

  const fetchedChosenCard = prints.find((cardObject) => cardObject.id === chosenCardId);

  if(!fetchedChosenCard) {
    return null
  }

  const imageUris = "image_uris" in fetchedChosenCard
    ? fetchedChosenCard.image_uris
    : fetchedChosenCard.card_faces[activeFace ? 1 : 0].image_uris;

  const type_line = "type_line" in fetchedChosenCard
    ?  fetchedChosenCard.type_line
    : fetchedChosenCard.card_faces[activeFace ? 1 : 0].type_line;

  const flipableLayouts = ["transform", "modal_dfc", "reversible_card"];
  const canFlip = flipableLayouts.includes(fetchedChosenCard.layout);

  const oracleText = "card_faces" in fetchedChosenCard
    ? `${fetchedChosenCard.card_faces[0].oracle_text} \n\n//\n\n ${fetchedChosenCard.card_faces[1].oracle_text}`
    : fetchedChosenCard.oracle_text;

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
    <div>
      <div
        className="h-full flex items-center justify-center fixed inset-0 bg-black/60"
        onClick={() => {navigate(-1)}}
      >
        <div
          className="lg:grid lg:grid-cols-[1fr_1fr] flex flex-col gap-5 lg:gap-0 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl py-18 lg:px-10  border-2 rounded-sm border-deep-hero-blue w-full max-w-[70vw] max-h-[80vh] overflow-auto relative mx-10"
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
                alt={fetchedChosenCard.name}
              />
              <div
                className="flex justify-center gap-2 mt-4"
              >
                {
                  canFlip &&
                    <button
                      className="cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
                      onClick={() => setActiveFace(!activeFace)}
                    >
                      Flip
                    </button>
                }
                {
                  binderName &&
                    source === "search" &&
                      <AddToBinderButton
                        binderName= {binderName}
                        setBinderName= {setBinderName}
                        cardId= {fetchedChosenCard.id}
                        condition= {condition}
                        amount= {amount}
                        accessToken= {accessToken}
                        setMessage= {setMessage}
                        binders= {binders}
                      />
                }
                {
                  binderName &&
                    source === "binder" &&
                      <DeleteCardButton
                        binderName= {binderName}
                        cardId= {binderCard ? binderCard._id : ""}
                        accessToken= {accessToken}
                        setMessage= {setMessage}
                        binders= {binders}
                        navigate= {navigate}
                      />
                }
                {
                  binderName &&
                    source === "binder" &&
                      <button
                        className="cursor-pointer bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm transition delay-80 hover:scale-105"
                        onClick={(e) => handleSetBinderImage(e, setBinderImage, updateBinderImage, imageUris.art_crop, setMessage, accessToken, binderName)}
                      >
                        Set Binder Image
                      </button>
                }
              </div>
            </div>
          </div>
            <div
              className="flex flex-col gap-2 p-4 mx-5 lg:m-0 lg:ml-10 bg-baltic-blue/90 border border-deep-hero-blue rounded-sm"
            >
              <p
                className="font-bold text-lg"
              >{fetchedChosenCard.name}</p>
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
              <CardSearchFrom
                handleOnChangePrint= {handleOnChangePrint}
                prints= {prints}
                binderName= {binderName}
                handleOnChangeCondition= {handleOnChangeCondition}
                handleOnChangeAmount= {handleOnChangeAmount}
                amount= {amount}
              />
              <div>
                <a
                  href={fetchedChosenCard.purchase_uris.cardmarket}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline font-medium"
                >
                  {hasFetchedCard &&
                    (fetchedChosenCard.nonfoil
                    ? `Price trend: ${fetchedChosenCard.prices.eur}€`
                    : `Price trend: ${fetchedChosenCard.prices.eur_foil}€`)
                  }
                </a>
              </div>
          </div>
        </div>
        <Toast
          className = "absolute bottom-30 left-[50%] -translate-x-1/2"
        />
      </div>
    </div>
  )
}