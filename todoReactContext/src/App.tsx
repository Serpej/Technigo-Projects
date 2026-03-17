import { TaskContainer } from "./components/TaskContainer"
import { InputValue, TaskArrayContext } from "./components/ContextAPITaskArray";
import { useState } from "react";
import type { Tasktype } from "./types/Types";

export const App = () => {
const [tasks, setTasks] = useState<Tasktype[]>([]);
const [inputValue, setInputValue] = useState("");

  return(
    <InputValue.Provider value={{inputValue, setInputValue}}>
    <TaskArrayContext.Provider value={{tasks, setTasks}}>
      <TaskContainer />
    </TaskArrayContext.Provider>
    </InputValue.Provider>
  )
}

export default App;