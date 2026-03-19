import { useContext, useState } from "react";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";
import { TaskArrayContext } from "./ContextAPITaskArray";
import type { ContextTaskType, Tasktype } from "../types/Types";


export const TaskContainer = () => {
  const [ inputValue, setInputValue ] = useState("");
  const [ newDescription, setNewDescription ]= useState("");
  const [editBoolean, setEditBoolean] = useState(false);
  const [counter, setCounter] = useState(0);

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
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm
        handleOnSubmit= {(e: React.SubmitEvent<HTMLFormElement>) => {handleOnSubmit(e)}}
        inputValue= {inputValue}
        setInputValue= {setInputValue}
        addTask= {() => {addTask()}}
        editBoolean= {editBoolean}
       />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}