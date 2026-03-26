import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import { DateTime } from "luxon";




export const TodoList = () => {
  const { 
    todos, 
    addTodo, 
    deleteTodo, 
    completeTodo 
  } = useTodoStore();
  const [newTaskValue, setNewTaskValue] = useState("");

  const now = DateTime.now();

  const handleSubmit= (e) => {
    e.preventDefault();
    const taskObject = {
      description: newTaskValue,
      completed: false,
      created: now.toLocaleString(DateTime.DATETIME_MED),
    }
    addTodo(taskObject);
    setNewTaskValue("");
  }


  const listOfTodos = todos.map((todo, index) => {
    return (
      <li key={index}>
        <h3>
          {todo.description}
        </h3>

        {todo.completed && <div>Completed</div>}

        <p>
          {todo.created}
        </p>

        <button
          onClick={() => deleteTodo(todo)}
        >
          Delete Task
        </button>
        <button
          onClick={() => completeTodo(todo)}
        >
          Complete Task
        </button>
      </li>
    )
  })

  return (
    <div>
      <form  
        onSubmit={(e) => 
          {handleSubmit(e)}
        }
      >
      <input 
        type="text" 
        placeholder="Add New Task" 
        required
        autoFocus
        value={newTaskValue}
        onChange={(e) => {
          setNewTaskValue(e.currentTarget.value);
        }}
      />
      <button type="submit">
        Add Task
      </button>
      </form>

      <ul>
        {listOfTodos}
      </ul>
    </div>
  )
}
