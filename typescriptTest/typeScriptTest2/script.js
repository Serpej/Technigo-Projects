// Color palette https://www.color-hex.com/color-palette/57051
import { SortState, VisibilityState } from "./Enums/enums.js";
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
const filterActiveButton = document.createElement("button");
filterActiveButton.textContent = "Filter Active";
const filterCompleteButton = document.createElement("button");
filterCompleteButton.textContent = "Filter Complete";
filterButtonsContainer.appendChild(filterAllButton);
filterButtonsContainer.appendChild(filterActiveButton);
filterButtonsContainer.appendChild(filterCompleteButton);
// Task Array
let taskArray = [];
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
        renderTask(task);
    }
});
filterAllButton.addEventListener("click", () => {
});
filterActiveButton.addEventListener("click", () => {
});
filterCompleteButton.addEventListener("click", () => {
});
// Render the current task (SortState.all as default)
function renderTask(task, sort = SortState.all) {
    taskList.innerHTML = "";
    let sortedTasks = taskArray; //Make refrence
    if (sort === SortState.active) {
        sortedTasks = taskArray.filter(task => !task.completed);
    }
    else if (sort === SortState.completed) {
        sortedTasks = taskArray.filter(task => task.completed);
    }
    ;
    sortedTasks.map(task => {
        const listElement = document.createElement("li");
        listElement.classList.add("taskListElement");
        listElement.textContent = task.text;
        addListButton(listElement, task.id);
        taskList.appendChild(listElement);
    });
}
;
function deleteTask(id) {
    taskArray = taskArray.filter(task => task.id !== id);
    renderTask();
}
;
// Adds a button to a list element
function addListButton(newTask, id) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Delete";
    completeButton.id = "listButton";
    completeButton.addEventListener("click", () => {
        newTask.style.textDecorationLine = "line-through";
        newTask.style.visibility = VisibilityState.hidden;
        deleteTask(id);
    });
    newTask.appendChild(completeButton);
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
//inital render
renderTask();
//# sourceMappingURL=script.js.map