import { Context } from "./components/CreateContext"
import { useState } from "react";
import { LoginPage } from "./components/loginPage";

export const App = () => {
  const [theme, setTheme] = useState("light");
  return (  
  <Context.Provider value={{theme, setTheme}}>
    <LoginPage />
  </Context.Provider>
  )
};
