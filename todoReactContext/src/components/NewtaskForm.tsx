import { TaskArrayContext } from "./ContextAPITaskArray";
import { useContext, useEffect } from "react";
import type { ContextType } from "../types/Types";


export const NewTaskForm = ({inputValue, setInputValue}: {inputValue: string, setInputValue: React.Dispatch<React.SetStateAction<string>>}) => {

/* https://dribbble.com/shots/22604632-Todo-Website-Todo-App */

const {tasks, setTasks} = useContext<ContextType>(TaskArrayContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e: React.SubmitEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTasks([...tasks, {description: inputValue, done: false}])
    setInputValue("");
  }

/*   useEffect(() => {

  },[tasks]) */

  return (
  <form
    action=""
    className="border border-dark m-5 rounded-md pr-6 pl-6 flex flex-row items-center"
    >
    <label>
      <input
        type="text" 
        placeholder="Add new Task" 
        className="p-3 text-xl bg-mediumDark rounded-md border-dark text-background"
        autoFocus
        value= {inputValue}
        onChange={(e) => {handleOnChange(e)}}
        />
    </label>
    <button 
      className=" ring-1 ring-dark rounded-full h-12 w-12 m-5 cursor-pointer flex items-center justify-center text-2xl font-medium bg-accent leading-none"
      onSubmit={(e) => {handleOnSubmit(e)}}
    >
    +
    </button>
  </form>
  )
}