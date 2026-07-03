import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { About } from "../components/About";
import { SignUp } from "../components/SignUp";
import { ProfilePage } from "../components/ProfilePage";
import { PrivateRoutes } from "./privateRoutes";
import { CardSearchResults } from "../components/CardSearchResults";

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