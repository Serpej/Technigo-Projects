
export const NewTaskForm = () => {
  return (
  <form
    action=""
    className="border m-5 rounded-md p-6 flex flex-row items-center"
    >
    <label>
      <input
        type="text" 
        placeholder="Add new Task" 
        className="p-6 text-xl"
        autoFocus
        />
    </label>
    <button 
      className=" border rounded-full h-18 w-18 m-5 cursor-pointer flex items-center justify-center text-5xl"
    >
    +
    </button>
  </form>
  )
}