 import { useNavigate } from "react-router-dom";
 import { useAuthStore } from "../stores/useAuthStore";

export const LogOutButton = () => {
  const { logOutUser } = useAuthStore();

  const navigate = useNavigate();
  return (
    <button
      className=""
      onClick={() => {logOutUser(); navigate("/")}}
    >
      Log Out
    </button>
  )
}