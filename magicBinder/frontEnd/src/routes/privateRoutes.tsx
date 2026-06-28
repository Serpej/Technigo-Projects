import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

//https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c

export const PrivateRoutes = () => {
  const auth = useAuthStore((state) => state.accessToken);

  return (
      auth ? <Outlet/> : <Navigate to="/login" />
  )
}

