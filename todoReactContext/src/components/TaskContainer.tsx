import { useContext, useState } from "react";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { TaskArrayContext } from "./ContextAPITaskArray";
import { DarkModeContext } from "./darkmodeContext";
import type { ContextTaskType, Tasktype, ContextDarkMode } from "../types/Types";


export const TaskContainer = () => {
  const [ inputValue, setInputValue ] = useState("");
  const [ newDescription, setNewDescription ]= useState("");
  const [editBoolean, setEditBoolean] = useState(false);
  const [counter, setCounter] = useState(0);

  const { toggleDarkMode, setToggleDarkMode } = useContext<ContextDarkMode>(DarkModeContext)
  const { tasks, setTasks } = useContext<ContextTaskType>(TaskArrayContext);

  const addTask = () => {
    const counterId = counter;
    setCounter(counter + 1);
    setTasks([...tasks, {id: counterId, description: inputValue, done: false, edit: false}]);
  };

  const toggleTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done} : task
    ));
  };

  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const deleteTask = (index:number) => {
    setTasks(tasks.filter((_, i) => 
      i !== index))
  };

  const handleEdit = (index:number, newDescription:string) => {
    const newTask = newDescription
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, description: newTask} : task
    ));
    setNewDescription("");
  };

  const objectEdit = (index:number, boolean:boolean = true):void => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task:Tasktype, i:number) => 
          i === index ? {...task, edit: boolean, done: false} : task
        );
        return updatedTasks;
      });
  };

  const editTask = (index:number) => {
    handleEdit(index, newDescription);
  };

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <Task
          description= {task.description}
          taskObjectDone= {task.done}
          toggleTask= {() => {toggleTask(index)}}
          deleteTask= {() => {deleteTask(index)}}
          editTask= {() => {editTask(index)}}
          handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
          newDescription= {newDescription}
          setNewDescription= {setNewDescription}
          editBoolean= {editBoolean}
          setEditBoolean= {setEditBoolean}
          objectEditBoolean= {task.edit}
          objectEdit= {(boolean:boolean) => {objectEdit(index, boolean)}}
         />
      </li>
    )
  })

  return (
    <div className="bg-background min-h-screen relative flex flex-col justify-center items-center xl:grid xl:grid-cols-3">

      <div
        className="flex 2xl:max-w-[500px] 2xl:max-h-[280px] xl:absolute top-0 left-20 xl:min-h-screen flex-col items-center justify-start"
      >
        <TaskCount />
      </div>
      <div 
        className="flex min-h-screen flex-col items-center justify-start mb-5 xl:mb- xl:col-start-2"
      >
        <NewTaskForm
          handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
          inputValue= {inputValue}
          setInputValue= {setInputValue}
          addTask= {() => {addTask()}}
          editBoolean= {editBoolean}
        />
        <ul
          className={`${tasks.length > 0 ? "visiible" : "hidden"} xl:w-[480px] border rounded-md border-inset border-mediumDark  inset-shadow-sm inset-shadow-dark`}
        >
          {taskList}
        </ul>
      </div>
    </div>
  )
}