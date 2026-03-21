import type { ContextTaskType, Tasktype } from "../types/Types"
import { TaskArrayContext } from "./ContextAPITaskArray"
import { useContext } from "react"


export const TaskCount = () => {
  const { tasks } = useContext<ContextTaskType>(TaskArrayContext);

  const doneTasks = tasks.filter((task: Tasktype) => task.done);

  const allDone = doneTasks.length === tasks.length && doneTasks.length !== 0;

  return (
    <div className="mt-15 border rounded-md border-mediumDark  shadow-sm shadow-dark 2xl:p-15 xl:p-10 p-15 flex flex-col gap-2  text-dark">
      <p
        className="text-6xl 2xl:text-8xl font-medium text-center"
      >
        {`${doneTasks.length}/${tasks.length}`}
      </p>
      <p
        className={`text-2xl 2xl:text-4xl ${allDone ? "font-bold text-3xl" : ""}`}
      >
        {`${allDone ? "🎊 Great Job! 🎊" : "Tasks Done"}`}
      </p>
    </div>
  )
}