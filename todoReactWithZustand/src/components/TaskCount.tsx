import { UseTaskArrayStore } from "../stores/useTaskArrayStore";
import type { Tasktype } from "../types/Types"




export const TaskCount = () => {
  const { tasks } = UseTaskArrayStore();
  const doneTasks = tasks.filter((task: Tasktype) => task.done);
  const allDone = doneTasks.length === tasks.length && doneTasks.length !== 0;

  return (
    <div className="mt-15 bg-darkGreen dark:bg-creamGreen border-black dark:border-creamGreen border shadow-xs shadow-darkGreen rounded-md 2xl:p-15 xl:p-10 p-15 flex flex-col gap-2 text-creamGreen dark:text-darkGreen ">
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