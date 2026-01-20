const TaskList = ({ loading, taskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange = (task) => {
    // Make a POST request here with the updated task isChecked value

    /* 
    update a state object
    
    updatedTask is a new object that is the same as the task object except for the isChecked property, 
    which is toggled from true to false or from false to true. 
    This code is often used to update a property of an object while preserving the rest of its properties. */

    /*     pass the updatedTask to the headers of your POST request

    headers: { updatedTask, "Content-Type": "application/json" }
    */

    const updatedTask = { ...task, isChecked: !task.isChecked }

    /*    Update the task list in the state
    Use .map to update the specific task if found, otherwise return it unchanged

    setTaskList() 
    */
  }

  return (
    <section className="tasks">
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={()=> {}}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>

          {/* format the date */}
            <p>{task.date}</p>
          </div>
        ))
        /* reverse the list to show the newest tasks at the top
        
        show only the latest 10 tasks
        */
        }
    </section>
  )
}

export default TaskList
