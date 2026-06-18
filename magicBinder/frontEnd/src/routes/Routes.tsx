import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { SignUp } from "../pages/SignUp";

export const routes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}  />
      <Route path="/signup" element={< SignUp />} />
      <Route path="/about" element={<About />} />

    </>
  )