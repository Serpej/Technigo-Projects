import { TaskContainer } from "./components/TaskContainer"
import { useEffect} from "react";
import { UseToggleDarkModeStore } from "./stores/useToggleDarkModeStore";

export const App = () => {
const { toggleDarkMode } = UseToggleDarkModeStore();

useEffect(() => {
  document.documentElement.classList.toggle("dark", toggleDarkMode)
  console.log(toggleDarkMode);
},[toggleDarkMode]);

  return (
      <TaskContainer />
  )
}

export default App;