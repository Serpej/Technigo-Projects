import { TextArea, Button, Form } from "./StyledComponents"

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <Form onSubmit={onFormSubmit}>
      <h1>📝 ToDo App</h1>
      <h2>Type you tasks here below 👇</h2>

      <TextArea
        value={newTodo}
        onChange={onNewTodoChange}
        placeholder="Type a task.."
      />
      <Button type="submit">Submit form!</Button>
    </Form>
  )
}

export default TaskForm
