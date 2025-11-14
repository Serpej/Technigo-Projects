// Color palette https://www.color-hex.com/color-palette/57051
import { SortState, VisibilityState } from "./Enums/enums.js";
const resultDiv = getElement("result");
const taskList = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);
const addTaskButton = getElement("addTaskButton");
const userTaskInput = getElement("userTask");
//Task Array
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
        taskArray.push(task);
        userTaskInput.value = "";
        renderTask(taskList, task);
    }
});
// Render the current task (SortState.all as default)
function renderTask(taskList, task, sort = SortState.all) {
    let sortedTasks = taskArray; //Make refrence
    if (sort === SortState.active) {
        sortedTasks = taskArray.filter(task => !task.completed);
    }
    else if (sort === SortState.completed) {
        sortedTasks = taskArray.filter(task => task.completed);
    }
    else if (sort === SortState.all) {
        taskList.innerHTML = "";
    }
    ;
    sortedTasks.map(task => {
        const listElement = document.createElement("li");
        listElement.classList.add("taskListElement");
        listElement.textContent = task.text;
        addListButton(listElement);
        taskList.appendChild(listElement);
    });
}
;
function addTask(taskList, task) {
    const listElement = getElement("li");
    listElement.classList.add("taskListElement");
    listElement.textContent = task.text;
    taskList.appendChild(listElement);
}
function addListButton(newTask) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
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
//Helper function to safely get DOM elements
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with id '${id}' not found.`);
    }
    ;
    return element;
}
//# sourceMappingURL=script.js.map