import { FiTrash2, FiEdit, FiCheckSquare } from "react-icons/fi";
import { InputValue } from "./ContextAPITaskArray";
import { useContext } from "react";
import type { ContextInputValue } from "../types/Types";

export const Task = ({
  description, 
  taskObjectDone,
  handleOnChange,
  toggleTask,
  deleteTask,
  editTask,
  handleOnSubmit,
  editDescription,
  setEditDescription
}:{
  description: string,
  taskObjectDone: boolean,
  handleOnChange(e:React.ChangeEvent<HTMLInputElement>):void
  toggleTask(): void
  deleteTask():void
  editTask():void
  handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>):void
  editDescription: boolean
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>
 }) => {

  const { inputValue } = useContext<ContextInputValue>(InputValue)
  return (

  <div
    className="m-10 text-2xl text-background flex justify-between border-black border shadow-xs shadow-dark rounded-md bg-mediumDark p-5 w-100"
  >
    <div
      className={`flex flex-row ${editDescription ? "hidden" : "block"}`}
    >
      <button
        className="rounded-full w-8 h-8 border-2 border-accent cursor-pointer duration-300 ease-out  hover:scale-110 "
        type="button"
        onClick={() => {
        toggleTask()
        }}
        style={{backgroundColor:`${taskObjectDone ? "#FE7F2D" : "transparent"}`}}
      >
      </button>
      <h1
        className="ml-5"
        style={{textDecorationLine:`${taskObjectDone ? "line-through" : ""}`}}
      >
        {description}
      </h1>
    </div>

    <div
      className={`flex justify-center items-center gap-5 ${editDescription ? "hidden" : "block"}`}
    >
      <button
        className="cursor-pointer duration-300 ease-out  hover:scale-120"
        onClick={() => {
          editTask()
        }}
      >
        <FiEdit 
          className="w-7 h-7"
        />
      </button>
      <button
        className="cursor-pointer duration-300 ease-out  hover:scale-120"
        onClick={() => {
          deleteTask()
        }}
      >
        <FiTrash2
          className="w-7 h-7"
         />
      </button>
    </div>

    <div
      className={`flex flex-row ${editDescription ? "block" : "hidden"}`} 
    >
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => {
          handleOnSubmit(e)
          setEditDescription(false);
        }}
      >
        <input 
          type="text" 
          placeholder={description}
          className=""
          value= {inputValue}
          onChange={(e) => {handleOnChange(e)}}
        />
        <button
          className="cursor-pointer duration-300 ease-out hover:scale-120 mr-2 ml-2"
          type="submit"
        >
          <FiCheckSquare
            className="w-8 h-8"
          />
        </button>
      </form>
    </div>

  </div>

  )
}