import type { ContextTaskType, Tasktype } from "../types/Types"
import { TaskArrayContext } from "./ContextAPITaskArray"
import { useContext } from "react"


export const TaskCount = () => {
  const { tasks } = useContext<ContextTaskType>(TaskArrayContext);

  const doneTasks = tasks.filter((task: Tasktype) => task.done);

  const allDone = doneTasks.length === tasks.length;

  return (
    <div className="border rounded-md border-mediumDark  shadow-sm shadow-dark p-15 flex flex-col gap-2  text-dark">
      <p
        className="text-6xl font-medium text-center"
      >
        {`${doneTasks.length}/${tasks.length}`}
      </p>
      <p
        className={`text-2xl ${allDone ? "font-bold text-3xl" : ""}`}
      >
        {`${allDone ? "🎊 Great Job! 🎊" : "Tasks Done"}`}
      </p>
    </div>
  )
}