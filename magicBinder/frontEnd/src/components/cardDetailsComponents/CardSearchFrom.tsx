import type { CardSearchFormProps } from "../../types/cardDetailsTypes"

export const CardSearchFrom = (
  { 
    handleOnChangePrint,
    prints,
    binderName,
    handleOnChangeCondition,
    handleOnChangeAmount,
    amount
  }: CardSearchFormProps
) => {
return(
  <div>
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
        { binderName &&
          <div>
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
                  value="Near Mint"
                  >
                  Near Mint
                </option>
                <option
                  value="Excellent"
                  >
                  Excellent
                </option>
                <option
                  value="Good"
                  >
                  Good
                </option>
                <option
                  value="Light Played"
                  >
                  Light Played
                </option>
                <option
                  value="Played"
                  >
                  Played
                </option>
                <option
                  value="Poor"
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
          </div>
        }
      </form>
  </div>)
}