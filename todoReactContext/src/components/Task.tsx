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
    className="m-10 text-2xl text-background flex justify-between border-black border shadow-xs shadow-dark rounded-md bg-mediumDark p-5 w-100"
  >
    <div
      className={`flex flex-row ${objectEditBoolean ? "hidden" : "block"}`}
    >
      <button
        className={`rounded-full w-8 h-8 border ${taskObjectDone ? "border-black" : "border-accent border-2"} cursor-pointer duration-300 ease-out  hover:scale-110`}
        type="button"
        onClick={() => {
        toggleTask()
        }}
        style={{backgroundColor:`${taskObjectDone ? "#49D57C" : "transparent"}`}}
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
      className={`flex justify-center items-center gap-5 ${objectEditBoolean ? "hidden" : "block"}`}
    >
      <button
        className="cursor-pointer duration-300 ease-out  hover:scale-120"
        onClick={() => {
          setEditBoolean(!editBoolean)
          objectEdit(true)
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
      className={`flex flex-row ${objectEditBoolean ? "block" : "hidden"}`} 
    >
      <form
        className="flex justify-center items-center"
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
          className=""
          value= {newDescription}
          onChange={(e) => {handleDescriptionChange(e)}}
          ref={inputRefrence}
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