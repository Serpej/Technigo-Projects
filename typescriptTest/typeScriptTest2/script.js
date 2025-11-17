// Color palette https://www.color-hex.com/color-palette/57051
import { SortState } from "./Enums/enums.js";
//DOM Elements
const resultDiv = getElement("result");
const addTaskButton = getElement("addTaskButton");
const userTaskInput = getElement("userTask");
const filterButtonsContainer = getElement("filterButtonsContainer");
const taskList = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);
const filterAllButton = document.createElement("button");
filterAllButton.textContent = "Filter All";
filterAllButton.type = "button";
const filterActiveButton = document.createElement("button");
filterActiveButton.textContent = "Filter Active";
filterActiveButton.type = "button";
const filterdeleteButton = document.createElement("button");
filterdeleteButton.textContent = "Filter Complete";
filterdeleteButton.type = "button";
filterButtonsContainer.appendChild(filterAllButton);
filterButtonsContainer.appendChild(filterActiveButton);
filterButtonsContainer.appendChild(filterdeleteButton);
// Task Array
let taskArray = [];
// Render the current task (SortState.all as default)
function renderTask(sort = SortState.all) {
    taskList.innerHTML = "";
    let sortedTasks = taskArray; //Make refrence
    // Filter based on sort state
    if (sort === SortState.active) {
        sortedTasks = taskArray.filter(task => !task.completed);
    }
    else if (sort === SortState.completed) {
        sortedTasks = taskArray.filter(task => task.completed);
    }
    ;
    sortedTasks.forEach(task => {
        const listElement = document.createElement("li");
        listElement.classList.add("taskListElement");
        listElement.textContent = task.text;
        addListButton(listElement, task.id);
        taskList.appendChild(listElement);
    });
}
;
// Delete task
function deleteTask(id) {
    taskArray = taskArray.filter(task => task.id !== id);
    renderTask();
}
;
// Toggle completed
function toggleCompleted(id) {
    taskArray = taskArray.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    renderTask();
}
// Adds a button to a list element
function addListButton(newTask, id) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "listButton";
    deleteButton.addEventListener("click", () => {
        /*     newTask.style.textDecorationLine = "line-through";
            newTask.style.visibility = VisibilityState.hidden; */
        toggleCompleted(id);
        deleteTask(id);
    });
    newTask.appendChild(deleteButton);
}
;
// Helper function to safely get DOM elements
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with id '${id}' not found.`);
    }
    ;
    return element;
}
// Eventlisteners
addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = userTaskInput.value;
    if (userInput.trim()) {
        const task = {
            id: Date.now(),
            text: userInput,
            completed: false,
        };
        taskArray.push(task);
        userTaskInput.value = "";
        renderTask();
    }
});
filterAllButton.addEventListener("click", () => { renderTask(); console.log("All button clicked"); });
filterActiveButton.addEventListener("click", () => { renderTask(SortState.active); console.log("Active button clicked"); });
filterdeleteButton.addEventListener("click", () => { renderTask(SortState.completed); console.log("Delete button clicked"); });
//inital render
renderTask();
//# sourceMappingURL=script.js.map