import { TaskContainer } from "./components/TaskContainer"
import { taskDoneValue } from "./components/ContextAPIDone";
import { useState } from "react";

export const App = () => {
  const [taskDone, setTaskDone] = useState(false);
  return(
    <taskDoneValue.Provider value={{taskDone, setTaskDone}}>
      <TaskContainer />
    </taskDoneValue.Provider>
  )
}

export default App;