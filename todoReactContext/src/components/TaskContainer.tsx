import { useContext, useState } from "react";
import { NewTaskForm } from "./NewtaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { TaskArrayContext } from "./ContextAPITaskArray";
import type { ContextType } from "../types/Types";

export const TaskContainer = () => {

  const [inputValue, setInputValue] = useState("");
  const {tasks, setTasks} = useContext<ContextType>(TaskArrayContext);

  const toggleTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done} : task
    ));
  };

 const newValue = "Edited!"
  const deleteTask = (index:number) => {
    setTasks(tasks.filter((_, i) => 
      i !== index))
  };

  const editTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, description: newValue} : task
    ));
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
         />
      </li>
    )
  })

  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm
        inputValue ={inputValue}
        setInputValue= {setInputValue}
       />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}