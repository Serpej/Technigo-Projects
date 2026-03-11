import { Context } from "./components/CreateContext.js"
import { useState } from "react";
import { LoginPage } from "./components/loginPage.js";

export const App = () => {
  const [theme, setTheme] = useState("light");

  <Context.Provider value={theme}>
    <LoginPage />
  </Context.Provider>

  return <div className="App">Hello Coders!</div>;
};
