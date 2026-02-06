import {TodoItemProps} from "../types"

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem