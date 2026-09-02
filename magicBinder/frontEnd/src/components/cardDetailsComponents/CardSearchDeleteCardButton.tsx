import type { CardDetailsDeleteButtonProps } from "../../types/cardDetailsTypes";
import { handleDeleteCardFromBinder } from "../../helperFunctions/handleDeleteCardFromBinder"

export const DeleteCardButton = (
  {
    binderName,
    cardId,
    accessToken,
    setMessage,
    navigate,
  }: CardDetailsDeleteButtonProps

) => {
  return(
    <form action="">
      <label htmlFor="binder">
        <button
          className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-2 py-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 hover:font-medium"
          type="button"
          onClick={async (e) => {

            const message = await handleDeleteCardFromBinder(e, binderName, cardId, accessToken)
            if(!message){
              return
            }
            setMessage(message);
            navigate(-1);
          }
        }
        >
          Delete Card(s)
        </button>
      </label>
    </form>
  )
}