import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { SignUp } from "../pages/SignUp";
import { ProfilePage } from "../pages/ProfilePage";
import { PrivateRoutes } from "./privateRoutes";
import { CardSearchResults } from "../pages/CardSearchResults";

export const routes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}  />
      <Route path="/signup" element={< SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<CardSearchResults />} />
      <Route element={<PrivateRoutes />}> 
        <Route path="/profilepage" element={<ProfilePage />} />
      </Route>
    </>
  )