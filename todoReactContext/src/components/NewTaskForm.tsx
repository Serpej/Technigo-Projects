import { FiPlus } from "react-icons/fi";
import { useRef } from "react";

export const NewTaskForm = ({
  handleOnSubmit,
  inputValue,
  setInputValue,
  addTask,
  editBoolean
}
: {
  handleOnSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  addTask: () => void
  editBoolean: boolean
  }) => {

  const NewTaskinputRefrence = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
  <form
    className="xl:mt-20 border border-mediumDarkGreen dark:border-creamGreen shadow-sm shadow-darkGreen xl:m-0 xl:mb-5 m-5 rounded-md pr-6 pl-6 flex flex-row items-center "
    onSubmit={(e) => {
      handleOnSubmit(e)
      addTask()
      setInputValue("")
      NewTaskinputRefrence.current?.focus();
    }}
    >
    <fieldset
      className={`flex flex-row items-center ${editBoolean ? "opacity-50" : ""}`}
      disabled={editBoolean}
    >
      <label>
        <input
          type="text"
          placeholder="Add new Task"
          className="p-3 text-xl bg-mediumDarkGreen dark:bg-creamGreen rounded-md border-darkGreen dark:border-creamGreen text-backgroundLight dark:text-darkGreen"
          autoFocus
          value= {inputValue}
          onChange={(e) => {handleInputChange(e)}}
          required
          ref={NewTaskinputRefrence}
          />
      </label>
      <button
        className=" ring-1 ring-mediumDarkGreen dark:ring-creamGreen shadow-sm shadow-darkGreen rounded-full h-12 w-12 m-5 cursor-pointer flex items-center justify-center bg-accent dark:text-darkGreen duration-300 ease-out  hover:scale-110"
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