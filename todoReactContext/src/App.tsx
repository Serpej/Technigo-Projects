import { TaskContainer } from "./components/TaskContainer"
import { TaskArrayContext } from "./components/ContextAPITaskArray";
import { DarkModeContext } from "./components/darkmodeContext";
import { useState } from "react";
import type { Tasktype } from "./types/Types";

export const App = () => {
const [tasks, setTasks] = useState<Tasktype[]>([]);
const [toggleDarkMode, setToggleDarkMode] = useState(false);

  return(
    <DarkModeContext.Provider value={{toggleDarkMode, setToggleDarkMode}}>
    <TaskArrayContext.Provider value={{tasks, setTasks}}>
      <TaskContainer />
    </TaskArrayContext.Provider>
    </DarkModeContext.Provider>

  )
}

export default App;