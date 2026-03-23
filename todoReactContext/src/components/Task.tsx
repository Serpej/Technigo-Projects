import { FiTrash2, FiEdit, FiCheckSquare } from "react-icons/fi";
import { useEffect, useRef } from "react";

export const Task = ({
  description, 
  taskObjectDone,
  toggleTask,
  deleteTask,
  editTask,
  handleOnSubmit,
  newDescription,
  setNewDescription,
  editBoolean,
  setEditBoolean,
  objectEditBoolean,
  objectEdit
}:{
  description: string,
  taskObjectDone: boolean,
  toggleTask(): void
  deleteTask():void
  editTask():void
  handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>):void
  newDescription: string
  setNewDescription: React.Dispatch<React.SetStateAction<string>>
  editBoolean: boolean;
  setEditBoolean: React.Dispatch<React.SetStateAction<boolean>>
  objectEditBoolean: boolean
  objectEdit(boolean?:boolean):void
 }) => {


  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  const inputRefrence = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (objectEditBoolean && inputRefrence.current) {
      inputRefrence.current.focus();
    }
  }, [objectEditBoolean])

  return (

  <div
    className="m-10 text-2xl text-backgroundLight dark:text-darkGreen flex min-w-0 basis-100 justify-between border-black dark:border-creamGreen border shadow-xs shadow-darkGreen rounded-md bg-mediumDarkGreen dark:bg-creamGreen p-5"
  >
    <div
      className={`flex min-w-0 basis-100 items-center flex-row ${objectEditBoolean ? "hidden" : "block"}`}
    >
      <button
        className={`rounded-full w-full basis-8 aspect-square border ${taskObjectDone ? "border-black" : "border-accent dark:border-darkGreen border-2"} cursor-pointer duration-300 ease-out  hover:scale-110`}
        type="button"
        onClick={() => {
        toggleTask()
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
      className={`flex w-full min-w-0 basis-10 justify-center items-center mr-2 ml-5 gap-2 sm:gap-5 ${objectEditBoolean ? "hidden" : "block"}`}
    >
      <button
        className="cursor-pointer duration-300 ease-out hover:scale-120"
        onClick={() => {
          setEditBoolean(!editBoolean)
          objectEdit(true)
        }}
      >
        <FiEdit/>
      </button>
      <button
        className="cursor-pointer duration-300 ease-out hover:scale-120"
        onClick={() => {
          deleteTask()
        }}
      >
        <FiTrash2/>
      </button>
    </div>
    <div
      className={`flex min-w-0 flex-row ${objectEditBoolean ? "block" : "hidden"}`} 
    >
      <form
        className="flex min-w-0 justify-center items-center"
        onSubmit={(e) => {
          handleOnSubmit(e)
          editTask()
          objectEdit(false)
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

  )
}