import { useContext, useState } from "react";
import { NewTaskForm } from "./NewtaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { InputValue, TaskArrayContext } from "./ContextAPITaskArray";
import type { ContextInputValue, ContextTaskType } from "../types/Types";

export const TaskContainer = () => {

  const [editDescription, setEditDescription] = useState(false);
  const { tasks, setTasks } = useContext<ContextTaskType>(TaskArrayContext);
  const { inputValue, setInputValue } = useContext<ContextInputValue>(InputValue);

  const addTask = () => {
    setTasks([...tasks, {description: inputValue, done: false}]);
  };

  const toggleTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done} : task
    ));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
    setInputValue("");
  }

  const deleteTask = (index:number) => {
    setTasks(tasks.filter((_, i) => 
      i !== index))
  };

  const handleEdit = (index:number, inputValue:string) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, description: inputValue} : task
    ));
  };

  const editTask = (index:number) => {
    setEditDescription(true);
    handleEdit(index, inputValue);
  };

 

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <Task
          description= {task.description}
          taskObjectDone= {task.done}
          handleOnChange= {(e:React.ChangeEvent<HTMLInputElement>) => {handleOnChange(e)}}
          toggleTask= {() => {toggleTask(index)}}
          deleteTask= {() => {deleteTask(index)}}
          editTask= {() => {editTask(index)}}
          handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
          editDescription= {editDescription}
          setEditDescription={setEditDescription}
         />
      </li>
    )
  })

  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm
        handleOnChange= {(e:React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
        handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
        addTask= {() => {addTask()}}
        editDescription= {editDescription}
       />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}