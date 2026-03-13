export const Task = ({description, done}:{description: string, done: boolean}) => {
  return (
  <div>
    <h1>{description}</h1>
    <button
      type="button"
      onClick={() => {}}
    >
    Done
    </button>
  </div>
  )
}