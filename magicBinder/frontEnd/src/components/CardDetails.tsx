import { useLocation, useNavigate } from "react-router-dom";
import type { CardDetailsState, CardPrints} from "../types/types";
import { fetchCardPrint } from "../services/fetchCardPrint";
import { useEffect, useState } from "react";

export const CardDetails = () => {
  const [prints, setPrints] = useState<CardPrints[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const locationState: CardDetailsState = location.state;


  useEffect(() => {
    if (!location.state.card) {
      return
    }
    const card = locationState.card

    const fetchData = async () => {
      const cardPrints = await fetchCardPrint(card.prints_search_uri);

      if(!cardPrints) {
        return
      }

      const { data } = cardPrints
      setPrints(data);
    }
    fetchData();
  },[prints, location.state, locationState.card])

  const card = locationState.card;



  return(
    <div
      className="h-full flex items-center justify-center fixed inset-0 bg-black/60"
      onClick={() => {navigate(-1)}}
    >
      <div
        className="grid grid-cols-2 bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-10  border-2 rounded-sm border-deep-hero-blue w-full max-w-3xl max-h-[80vh] overflow-auto"
        onClick={(e) => {e.stopPropagation()}}
      >
        <div
          className="flex flex-col"
        >
          <button
            onClick={() => navigate(-1)}
          >
            Close
          </button>
          <button>
          foil
          </button>
          <div>
            <img
              className="rounded-[4.75%/3.5%] p-4"
              src={card.image_uris.normal}
              srcSet={`${card.image_uris.small} 146w, ${card.image_uris.normal} 488w, ${card.image_uris.large} 672w`}
              sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 12vw"
              alt={card.name}
            />
            <button>Add to binder</button>
          </div>
        </div>
        <div
          className="flex flex-col"
        >
          <h4>{card.name}</h4>
          <p>{card.type_line}</p>
          <div
            className="border"
          >
            <p>
              {card.oracle_text}
            </p>
          </div>
          <form action=""
            className="flex flex-col"
          >
            <label htmlFor="print">
              Print:
              <select name="print" id="print">
                {prints.map((printOfCard) => {
                  return(
                    <option key={printOfCard.set} value={printOfCard.set}>{`${printOfCard.set_name} (${printOfCard.set})`}</option>
                  )
                })}
              </select>
            </label>
                 <label htmlFor="condition">
              Condition:
              <select name="condition" id="condition">
                <option value="near mint">Near Mint</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="light played">Light Played</option>
                <option value="played">Played</option>
                <option value="poor">Poor</option>
              </select>
            </label>
            <label htmlFor="amount">
              Amount:
              <input type="number" min="0" name="amount" id="amount" />
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}