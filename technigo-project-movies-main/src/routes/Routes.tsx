import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";
import { Error404 } from "../pages/Error404";

export const routes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieInfo />} />
      <Route path="*" element={<Error404 />} />
    </>
  )
