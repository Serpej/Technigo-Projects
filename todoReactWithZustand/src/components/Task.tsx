import { FiTrash2, FiEdit, FiCheckSquare } from "react-icons/fi";
import { useDescriptionStateStore } from "../stores/useDescriptionStateStore";
import { UseTaskArrayStore } from "../stores/useTaskArrayStore";
import { useEffect, useRef } from "react";
import { DateTime } from "luxon";

export const Task = ({ 
  description,
  taskObjectDone,
  handleOnSubmit,
  editBoolean,
  setEditBoolean,
  taskBoolean,
  dateId,
}:{
  description: string,
  taskObjectDone: boolean,
  handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>):void
  editBoolean: boolean;
  setEditBoolean: React.Dispatch<React.SetStateAction<boolean>>
  taskBoolean: boolean
  dateId: DateTime
 }) => {

  /* Nya zustand grejer */
  const { newDescription, setNewDescription } = useDescriptionStateStore();
  const { deleteTask, toggleTask, editTaskBoolean, editTaskDescription } = UseTaskArrayStore();

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  const inputRefrence = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (taskBoolean && inputRefrence.current) {
      inputRefrence.current.focus();
    }
  }, [taskBoolean])

  return (

  <div
    className="m-10 text-2xl text-backgroundLight dark:text-darkGreen flex flex-col min-w-0 basis-100 justify-between border-black dark:border-creamGreen border shadow-xs shadow-darkGreen rounded-md bg-mediumDarkGreen dark:bg-creamGreen p-5"
  >
    <div
      className="flex min-w-0"
    >
      <div
        className={`flex min-w-0 basis-100 items-center flex-row ${taskBoolean ? "hidden" : "block"}`}
      >
        <button
          className={`rounded-full w-full basis-8 aspect-square border ${taskObjectDone ? "border-black" : "border-accent dark:border-darkGreen border-2"} cursor-pointer duration-300 ease-out  hover:scale-110`}
          type="button"
          onClick={() => {
          toggleTask(dateId)
          }}
          style={{backgroundColor:`${taskObjectDone ? "#49D57C" : "transparent"}`}}
        >
        </button>
        <h1
          className="min-w-0 basis-40 sm:basis-50 text-xl sm:text-2xl grow wrap-break-word ml-5"
          style={{textDecorationLine:`${taskObjectDone ? "line-through" : ""}`}}
        >
          {description}
        </h1>
      </div>
      <div
        className={`flex w-full min-w-0 basis-10 justify-center items-center mr-2 ml-5 gap-2 sm:gap-5 ${taskBoolean ? "hidden" : "block"}`}
      >
        <button
          className="cursor-pointer duration-300 ease-out hover:scale-120"
          onClick={() => {
            setEditBoolean(!editBoolean)
            editTaskBoolean(dateId, true)
          }}
        >
          <FiEdit/>
        </button>
        <button
          className="cursor-pointer duration-300 ease-out hover:scale-120"
          onClick={() => {
            deleteTask(dateId)
          }}
        >
          <FiTrash2/>
        </button>
      </div>
      <div
        className={`flex min-w-0 flex-row ${taskBoolean ? "block" : "hidden"}`}
      >
        <form
          className="flex min-w-0 justify-center items-center"
          onSubmit={(e) => {
            handleOnSubmit(e)
            editTaskDescription(dateId, newDescription)
            setNewDescription("")
            editTaskBoolean(dateId, false)
            setEditBoolean(!editBoolean)
          }}
        >
          <input
            type="text"
            placeholder={description}
            className="w-full  w-min-0"
            value= {newDescription}
            onChange={(e) => {handleDescriptionChange(e)}}
            ref={inputRefrence}
          />
          <button
            className="cursor-pointer duration-300 ease-out hover:scale-120 mr-2 ml-2"
            type="submit"
          >
            <FiCheckSquare/>
          </button>
        </form>
      </div>
    </div>
    <div
      className="flex justify-end text-xs sm:text-sm opacity-50 mt-2"  
    >
      {dateId.toLocaleString(DateTime.DATETIME_MED)}
    </div>
  </div>


  )
}