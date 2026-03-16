import { useContext } from "react";
import { NewTaskForm } from "./NewtaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { TaskArrayContext } from "./ContextAPITaskArray";

export const TaskContainer = () => {

  const {tasks, setTasks} = useContext(TaskArrayContext);

 /*  const addTask = () => {
    
      1. make a new object where the value === description
      2. use spread operator to create a new array of objects and add task.
     
  } */


  const toggleTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done} : task
    ));
  };

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <Task
          description= {task.description}
          taskObjectDone= {task.done}
          toggleTask= {() => {toggleTask(index)}}
         />
      </li>
    )
  })

  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}