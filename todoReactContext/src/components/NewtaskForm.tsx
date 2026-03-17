import { InputValue} from "./ContextAPITaskArray";
import { useContext } from "react";
import type { ContextInputValue } from "../types/Types";


export const NewTaskForm = ({
  handleOnChange,
  handleOnSubmit,
  editDescription
}
: {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
  addTask: () => void
  editDescription: boolean
  }) => {

/* https://dribbble.com/shots/22604632-Todo-Website-Todo-App */

  const { inputValue } = useContext<ContextInputValue>(InputValue);

  return (
  <form
    className="border border-dark m-5 rounded-md pr-6 pl-6 flex flex-row items-center"
    onSubmit={(e) => {handleOnSubmit(e)}}
    >
    <fieldset
      className={`flex flex-row items-center ${editDescription ? "opacity-50" : ""}`}
      disabled={editDescription}
    >
      <label>
        <input
          type="text"
          placeholder="Add new Task"
          className="p-3 text-xl bg-mediumDark rounded-md border-dark text-background"
          autoFocus
          value= {inputValue}
          onChange={(e) => {handleOnChange(e)}}
          required
          />
      </label>
      <button
        className=" ring-1 ring-dark rounded-full h-12 w-12 m-5 cursor-pointer flex items-center justify-center text-2xl font-medium bg-accent leading-none duration-300 ease-out  hover:scale-110"
        type="submit"
      >
      +
      </button>
    </fieldset>
  </form>
  )
}