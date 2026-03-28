import { FiPlus } from "react-icons/fi";
import { useRef } from "react";
import { useInputValueStore } from "../stores/useInputValueStore";
import { UseTaskArrayStore } from "../stores/useTaskArrayStore";
import { DateTime } from "luxon";

export const NewTaskForm = ({
  handleOnSubmit,
  editBoolean,
  dateId,
}:{
  handleOnSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
  editBoolean: boolean
  dateId: DateTime<true>
}) => {

  const { inputValue, setInputValue } = useInputValueStore();
  const { addTask } = UseTaskArrayStore();


  const NewTaskinputRefrence = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
  <form
    className={`flex flex-row items-stretch min-w-0 border border-mediumDarkGreen dark:border-creamGreen shadow-sm shadow-darkGreen xl:mt-20 m-5 rounded-md pr-6 pl-6`}
    onSubmit={(e) => {
      handleOnSubmit(e);
      addTask(inputValue, dateId);
      setInputValue("");
      NewTaskinputRefrence.current?.focus();
    }}
    >
    <fieldset
      className={`flex flex-row items-center min-w-0 ${editBoolean ? "opacity-50 pointer-events-none" : ""}`}
      disabled={editBoolean}
    >
      <label
        className="flex-1 min-w-0"
      >
        <input
          type="text"
          placeholder="Add new Task"
          className="w-full min-w-0 text-xl p-3 bg-mediumDarkGreen dark:bg-creamGreen rounded-md border-darkGreen dark:border-creamGreen text-backgroundLight dark:text-darkGreen"
          autoFocus
          value= {inputValue}
          onChange={(e) => {handleInputChange(e)}}
          required
          ref={NewTaskinputRefrence}
          />
      </label>
      <button
        className="flex items-center justify-center w-full basis-12 aspect-square ring-1 ring-mediumDarkGreen dark:ring-creamGreen shadow-sm shadow-darkGreen rounded-full  m-5 cursor-pointer  bg-accent dark:text-darkGreen duration-300 ease-out  hover:scale-110"
        type="submit"
      >
      <FiPlus 
        className="w-7 h-7"
      />
      </button>
    </fieldset>
  </form>
  )
}