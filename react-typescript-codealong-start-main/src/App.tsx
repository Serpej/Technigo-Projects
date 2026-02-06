import { useState } from 'react'
import TodoItem from './components/TodoItem'
import {Todo} from "./types/index.ts"
// Fortsätt videon vid 10:00
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>('')

  const addTodo = (): void => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo =>
    todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
