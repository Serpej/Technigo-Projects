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
    className="m-10 text-2xl text-background flex border-black border shadow-xs shadow-dark rounded-md bg-mediumDark p-5 w-100"
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
  )
}