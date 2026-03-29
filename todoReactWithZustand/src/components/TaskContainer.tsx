import { useState } from "react";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { UseTaskArrayStore } from "../stores/useTaskArrayStore";
import { UseToggleDarkModeStore } from "../stores/useToggleDarkModeStore";
import { DateTime } from "luxon";

export const TaskContainer = () => {
  const [editBoolean, setEditBoolean] = useState(false);
  const { toggleDarkMode, setToggleDarkMode } = UseToggleDarkModeStore();
  const { tasks } = UseTaskArrayStore();

  const dateId = DateTime.now()

  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

 
  const taskList = tasks.map((task) => {
    return (
      <li 
        className="min-w-0"
        key={task.dateId.toISO()}
      >
        <Task
          description= {task.description}
          taskObjectDone= {task.done}
          handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
          editBoolean= {editBoolean}
          setEditBoolean= {setEditBoolean}
          taskBoolean= {task.edit}
          dateId= {task.dateId}
         />
      </li>
    )
  })

  return (
    <div className="bg-backgroundLight dark:bg-darkGreen duration-300 ease-in-out min-h-screen pl-3 pr-3 relative flex flex-col justify-center items-center xl:grid xl:grid-cols-3">
      <button
        className="col-start-3 md:absolute top-15 right-15 mt-10 md:mt-0 border-black dark:border-creamGreen rounded-md text-backgroundLight dark:text-darkGreen xl:text-xl bg-darkGreen dark:bg-backgroundLight min-w-15 min-h-10 cursor-pointer p-3 xl:p-5 duration-300 ease-in-out hover:shadow-lg shadow-mediumDarkGreen dark:shadow-creamGreen hover:scale-110"
        onClick={() => {setToggleDarkMode(!toggleDarkMode)}}
      >
        {toggleDarkMode ? "Light" : "Dark"} Mode
      </button>
      <div
        className="flex 2xl:max-w-125 2xl:max-h-70 xl:absolute top-0 left-20 xl:min-h-screen flex-col items-center justify-start"
      >
        <TaskCount />
      </div>
      <div 
        className="flex min-h-screen min-w-0 max-w-120.5 w-full flex-col items-stretch justify-start mb-5 xl:mb- xl:col-start-2"
      >
        <NewTaskForm
          handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
          editBoolean= {editBoolean}
          dateId= {dateId}
        />
        <ul
          className={`${tasks.length > 0 ? "visiible" : "hidden"}  flex flex-col basis-120.5 grow min-w-0 border rounded-md border-inset border-mediumDarkGreen  dark:border-creamGreen inset-shadow-sm inset-shadow-darGreen`}
        >
          {taskList}
        </ul>
      </div>
    </div>
  )
}