import type { ContextTaskType, Tasktype } from "../types/Types"
import { TaskArrayContext } from "./ContextAPITaskArray"
import { useContext } from "react"


export const TaskCount = () => {
  const { tasks } = useContext<ContextTaskType>(TaskArrayContext);

  const doneTasks = tasks.filter((task: Tasktype) => task.done);

  const allDone = doneTasks.length === tasks.length && doneTasks.length !== 0;

  return (
    <div className="mt-15 2xl:min-w-[300px] 2xl:min-h-[250px] border rounded-md border-mediumDark  shadow-sm shadow-dark p-15 flex flex-col gap-2  text-dark">
      <p
        className="text-6xl 2xl:text-8xl font-medium text-center"
      >
        {`${doneTasks.length}/${tasks.length}`}
      </p>
      <p
        className={`text-2xl 2xl:text-5xl ${allDone ? "font-bold text-3xl" : ""}`}
      >
        {`${allDone ? "🎊 Great Job! 🎊" : "Tasks Done"}`}
      </p>
    </div>
  )
}