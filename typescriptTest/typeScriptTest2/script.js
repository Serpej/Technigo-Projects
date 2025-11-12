// Color palette https://www.color-hex.com/color-palette/57051
import { VisibilityState } from "./Enums/enums";
const resultDiv = document.getElementById("result");
const taskList = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);
const addTaskButton = document.getElementById("addTaskButton");
const userTaskInput = document.getElementById("userTask");
let taskArray = [];
addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = userTaskInput.value;
    if (userInput.trim()) {
        // Ett nytt task object.
        const task = {
            id: Date.now(),
            text: userInput,
            completed: false,
        };
        addTask(taskList, userInput);
    }
});
function addTask(taskList, userInput) {
    const newTask = document.createElement("li");
    newTask.classList.add("taskListElement");
    newTask.textContent = userInput;
    addListButton(newTask);
    taskList.appendChild(newTask);
}
function addListButton(newTask) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.id = "listButton";
    completeButton.addEventListener("click", (e) => {
        e.preventDefault();
        newTask.style.textDecorationLine = "line-through";
        newTask.style.visibility = VisibilityState.hidden;
    });
    newTask.appendChild(completeButton);
}
;
/**
Function to addButton
 1. Create button element
 2. Add class to button
   2a. Add Event Listener to button
 3. Add button to li element
 */
/**
completeTask
  1. Toggle class to "hide"
  2. Make text crossed out
*/
//# sourceMappingURL=script.js.map