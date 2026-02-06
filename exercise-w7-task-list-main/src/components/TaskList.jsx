//import { useEffect } from "react";

import { getDay, getMonth, getYear} from "date-fns";

const TaskList = ({ loading, taskList, setTaskList, url }) => {
  
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange= async (task) => {

    try {
      const descriptionOfUpdatedCheckList = {
        description: updatedTask
      }
      const updateCheckList = await fetch(url, {
      method: "POST",
      headers: {
          updatedTask, 
          "Content-Type": "application/json"},
      body: JSON.stringify(descriptionOfUpdatedCheckList)
      });

      if (!updateCheckList.ok) {
        throw new Error(`HTTP error when posting: ${updateCheckList.status}`);
      }
    } catch (error) {
      console.log("Error: ", error)
    }

    const updatedTask = { ...task, isChecked: !task.isChecked }

    const updatedTaskList = taskList.map((t) => {
      return t._id === task._id 
      ? {...t, isChecked: !t.isChecked} 
      : t;  
    });
    setTaskList(updatedTaskList);
  }

  const showDate = ((task) => {
    const dateString = `${getDay(task.date)} / ${getMonth(task.date) + 1} - ${getYear(task.date)}`
    return dateString
  })
  

  return (
    <section className="tasks">
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={()=> {onTaskCheckChange(task)}}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>

            <p>{showDate(task)}</p>
          </div>
        )).slice(0, 10)
        }
    </section>
  )
}

export default TaskList
