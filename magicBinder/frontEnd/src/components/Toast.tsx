import { useEffect } from "react"
import { useVisibilityStore } from "../stores/useVisibilityStore";
import { useMessageStore } from "../stores/useMessageStore";

interface ToastProps {
  className: string
}

export const Toast = (
  { className }: ToastProps
) => {
  const visibility = useVisibilityStore(state => state.visibility);
  const setVisibility = useVisibilityStore(state => state.setVisibility);
  const message = useMessageStore(state => state.message);
  const setMessage = useMessageStore(state => state.setMessage);

  useEffect(() => {

    if(message) {
      const changeVisibility = () => setVisibility(true);
      changeVisibility();

      const startFadeOut = setTimeout(() => {
        setVisibility(false);
      }, 2100);

      const clearMessage = setTimeout(() => {
        setMessage("");
      }, 2500);

      return () => {
      clearTimeout(startFadeOut)
      clearTimeout(clearMessage)};
    }

  },[message, setMessage, setVisibility])

return(
      <div
        className={`${className} bg-pitch-black/80 text-amber-50 border-2 rounded-sm px-3 py-1.5 text-lg border-deep-hero-blue/80 duration-300 ease-in-out transition-opacity ${visibility ? "opacity-100" : "opacity-0"}`}
      >
        {message}
      </div>
)
}