import { FiTrash2, FiEdit } from "react-icons/fi";

export const Task = ({
  description, 
  taskObjectDone,
  toggleTask 
}:{
  description: string,
  taskObjectDone: boolean,
  toggleTask(): void
 }) => {

  
  return (
  <div
    className="m-10 text-2xl text-background flex justify-between border-black border shadow-xs shadow-dark rounded-md bg-mediumDark p-5 w-100"
  >
    <div
      className="flex flex-row"
    >
      <button
        className=" rounded-full w-10 h-10 border-2 border-accent cursor-pointer"
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
      className="flex justify-center items-center gap-5"
    >
      <button
      >
        <FiEdit 
          className="w-7 h-7"
        />
      </button>
      <button>
        <FiTrash2
            className="w-7 h-7"
         />
      </button>
    </div>
  </div>
  )
}