import { useState, useEffect } from "react"
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
      setTaskList(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }
//Fetchdata only once.
  useEffect(() => {
    fetchTasks(url);
  },[]) 
  
  const handleNewTodoChange = (event) => {
    const text = event.target.value
    setNewTodo(text);
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const postDescription = 
      {
        description: newTodo
      };
    setLoading(true);
    try {
      const makeAPost  = await fetch(url, {
      //Method tells the server what kind of request
      method: "POST",
      //Headers gives the server information about the request
      headers: {
        "Content-Type": "application/json"},
      //The Body is the "payload", what you want to post
      body: JSON.stringify(postDescription)
      });

      if (!makeAPost.ok) {
        throw new Error(`HTTP error when posting: ${makeAPost.status}`);
      }
      const postData = await makeAPost.json();
      fetchTasks(url);
      console.log("Data from post: ", postData);
    } catch (error) {
      console.log("Posting Error: ", error)
    }
    setNewTodo("");
    setLoading(false);
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
        url={url}
      />
    </div>
  )
}
