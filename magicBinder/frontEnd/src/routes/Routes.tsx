import { Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { About } from "../pages/About"

export const routes = (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
    </>
  )