import { FiPlus } from "react-icons/fi";

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



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
  <form
    className="border border-mediumDark shadow-sm shadow-dark xl:m-0 xl:mb-5 m-5 rounded-md pr-6 pl-6 flex flex-row items-center "
    onSubmit={(e) => {
      handleOnSubmit(e)
      addTask()
      setInputValue("")
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
          className="p-3 text-xl bg-mediumDark rounded-md border-dark text-background"
          autoFocus
          value= {inputValue}
          onChange={(e) => {handleInputChange(e)}}
          required
          />
      </label>
      <button
        className=" ring-1 ring-mediumDark shadow-sm shadow-dark rounded-full h-12 w-12 m-5 cursor-pointer flex items-center justify-center bg-accent duration-300 ease-out  hover:scale-110"
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