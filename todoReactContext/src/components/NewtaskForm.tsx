
export const NewTaskForm = () => {

/* https://dribbble.com/shots/22604632-Todo-Website-Todo-App */

  return (
  <form
    action=""
    className="border border-dark m-5 rounded-md pr-6 pl-6 flex flex-row items-center"
    >
    <label>
      <input
        type="text" 
        placeholder="Add new Task" 
        className="p-3 text-xl bg-mediumDark rounded-md border-dark text-background"
        autoFocus
        />
    </label>
    <button 
      className=" ring-1 ring-dark rounded-full h-12 w-12 m-5 cursor-pointer flex items-center justify-center text-2xl font-medium bg-accent leading-none"
    >
    +
    </button>
  </form>
  )
}