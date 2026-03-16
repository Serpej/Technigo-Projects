import { TaskContainer } from "./components/TaskContainer"
import { TaskArrayContext } from "./components/ContextAPITaskArray";
import { useState } from "react";
import type { Tasktype } from "./types/Types";

export const App = () => {
const [tasks, setTasks] = useState<Tasktype[]>([
    {
      description: "Drink Water",
      done: false,
    },
    {
      description: "Clean Room",
      done: false,
    },
    {
      description: "Play Magic",
      done: false,
    }
  ])
  return(
    <TaskArrayContext.Provider value={{tasks, setTasks}}>
      <TaskContainer />
    </TaskArrayContext.Provider>
  )
}

export default App;