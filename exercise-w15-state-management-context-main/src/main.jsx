import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";
import { Context } from "./components/CreateContext.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  const [theme, setTheme] = useState("light");

  <Context.Provider value={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
