import { useNavigate, useLocation } from "react-router-dom"
import { useState  } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { handleCreateBinder } from "../helperFunctions/handleCreateBinder";
import { useAuthStore } from "../stores/useAuthStore";


export const NewBinder = () => {
  const [binderName, setBinderName] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const userId = useAuthStore((state) => state.userId);

  return(
    <div
      className="h-full flex items-center justify-center p20 fixed inset-0 bg-black/60"
      onClick={() => {navigate(-1)}}
    >
 
        <section
          className="flex justify-center items-center"
          onClick={(e) => {e.stopPropagation()}}
        >
          <form
            onSubmit={(e) => handleCreateBinder(
              e, 
              binderName, 
              userId, 
              navigate,
              location
            )}
            className="flex flex-1 max-w-sm sm:max-w-md w-full min-w-0 flex-col bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-5 sm:p-18 mx-10 border-2 rounded-sm border-deep-hero-blue"
          >
            <label htmlFor="binderName"
              className="flex flex-col flex-1 max-w-140 min-w-19 text-papyrus-white"
            >
              <p
                className="flex flex-1 m-1 mb-0 font-medium min-w-0"
              >
                Binder Name:
              </p>
              <input
                className="flex flex-1 text-pitch-black bg-sky-soap pl-2 m-1 rounded-sm border border-baltic-blue min-w-0"
                type="text"
                name="binderName"
                id="binderName"
                onChange = {(e) => handleValue(e, setBinderName)}
                value={binderName}
                required
              />
            </label>
            <button
              className="flex flex-1 bg-bright-purple/80 hover:bg-bright-purple border-2 border-deep-hero-blue/80 shadow-2xl px-1 py-0.5 m-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105 justify-center"
              type="submit"
            >
              Create Binder
            </button>
          </form>
        </section>
    </div>
  )
}