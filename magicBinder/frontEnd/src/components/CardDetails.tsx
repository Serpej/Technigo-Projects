import { useNavigate } from "react-router-dom";

export const CardDetails = () => {

  const navigate = useNavigate();

  return(
    <div
      className="h-full flex items-center justify-center fixed inset-0 bg-black/40"
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
            <img src="" alt="magic card" />
            <button>Add to binder</button>
          </div>
        </div>
        <div
          className="flex flex-col"
        >
          <h4>Card Name</h4>
          <div
            className="border"
          >
            <p>
              Reading the card explains the card. Reading the card explains the card. Reading the card explains the card. Reading the card explains the card. Reading the card explains the card. Reading the card explains the card. Reading the card explains the card.
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