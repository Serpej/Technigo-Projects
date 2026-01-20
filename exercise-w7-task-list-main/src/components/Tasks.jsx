import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export const Tasks = () => {
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newTodo, setNewTodo] = useState("")


  const url = "https://task-api-m07f.onrender.com/tasks";

  const fetchTasks = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Http error! ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setTaskList(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  fetchTasks(url);
  
  const handleNewTodoChange = (event) => {
    const text = event.target.value
    setNewTodo(text);
  }

  const onFormSubmit = async () => {
    const postDescription = 
      {
        description: newTodo
      };

      fetch(url, {
        method: "POST",
        body: postDescription
      })
    // define your POST request for new ToDo
    // don't forget to set the loading state
  }

  return (
    <div className="wrapper">
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}
