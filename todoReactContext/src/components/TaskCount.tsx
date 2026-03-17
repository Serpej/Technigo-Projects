import type { ContextTaskType, Tasktype } from "../types/Types"
import { TaskArrayContext } from "./ContextAPITaskArray"
import { useContext } from "react"


export const TaskCount = () => {
  const { tasks } = useContext<ContextTaskType>(TaskArrayContext);

  const doneTasks = tasks.filter((task: Tasktype) => task.done)

  return (
    <div className="p-15 border flex flex-col gap-2 rounded-md text-dark">
      <p
        className="text-6xl font-medium text-center"
      >
        {`${doneTasks.length}/${tasks.length}`}
      </p>
      <p
        className="text-2xl"
      >
        Tasks Done
      </p>
    </div>
  )
}