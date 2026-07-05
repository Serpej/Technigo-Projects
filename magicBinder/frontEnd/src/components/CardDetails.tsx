import { useLocation, useNavigate } from "react-router-dom";
import type { CardDetailsState } from "../types/types";

export const CardDetails = () => {

  const navigate = useNavigate();
  const location= useLocation();

  if (!location.state.card) {
    return
  }
  const locationState: CardDetailsState = location.state;
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
              className="rounded-[4.75%/3.5%]"
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
            <label htmlFor="expansion">
              Expansion
              <select name="expansion" id="expansion">
                <option value="kaladesh">Kaladesh</option>
                <option value="mirrodin">Mirrodin</option>
                <option value="dragons of tarkir">Dragons of Tarkir</option>
              </select>
            </label>
            <label htmlFor="condition">
              Condition
              <select name="condition" id="condition">
                <option value="mint">Mint</option>
                <option value="near mint">Near Mint</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="light played">Light Played</option>
                <option value="played">Played</option>
                <option value="poor">Poor</option>
              </select>
            </label>
            <label htmlFor="amount">
              Amount
              <input type="number" name="amount" id="amount" />
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}