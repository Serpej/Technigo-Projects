import { useLocation } from "react-router-dom";
import type { BinderNameState } from "../types/binderTypes";
export const Binder = () => {
  const location = useLocation();
  const binderObject = location.state as BinderNameState | null;

  if(!binderObject){
   return null
  }

  const { binderName } = location.state;
  
  return(
    <div
      className="text-4xl font-medium"
    >
      {binderName}
    </div>
  )
}