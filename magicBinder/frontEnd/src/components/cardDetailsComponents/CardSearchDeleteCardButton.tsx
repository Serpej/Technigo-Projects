import type { CardSearchAddButtonProps } from "../../types/cardDetailsTypes";
import { handleDeleteCardFromBinder } from "../../helperFunctions/handleDeleteCardFromBinder"

export const DeleteCardButton = (
  {
    binderName,
    cardId,
     accessToken,
    setMessage,
    binders
  }: CardSearchAddButtonProps
) => {
  return(
    <form action="">
      <label htmlFor="binder">
        <button
          className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 hover:font-medium"
          onClick={async () => {

            const message = await handleDeleteCardFromBinder(binderName, cardId, accessToken)
            if(!message){
              return
            }
            setMessage(message)
          }
        }
        >
          Delete Card(s)
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
  )
}