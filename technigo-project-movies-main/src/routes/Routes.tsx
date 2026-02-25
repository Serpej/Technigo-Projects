import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieInfo />} />
    </>
  )
