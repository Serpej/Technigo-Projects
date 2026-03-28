import { TaskContainer } from "./components/TaskContainer"
import { DarkModeContext } from "./components/darkmodeContext";
import { useEffect, useState } from "react";

export const App = () => {
const [toggleDarkMode, setToggleDarkMode] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle("dark", toggleDarkMode)
},[toggleDarkMode]);

  return(
    <DarkModeContext.Provider value={{toggleDarkMode, setToggleDarkMode}}>
      <TaskContainer />
    </DarkModeContext.Provider>
  )
}

export default App;