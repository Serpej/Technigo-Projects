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
// Add Eventlisteners to buttons
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
        renderTask(taskList, task);
    }
});
filterAllButton.addEventListener("click", () => {
    renderTask(taskList);
});
filterActiveButton.addEventListener("click", () => {
    renderTask(taskList);
});
filterCompleteButton.addEventListener("click", () => {
    renderTask(taskList);
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
        taskList.innerHTML = ""; //Doesn't work with the filtering buttons
    }
    ;
    //Maybe need an If statement here?
    sortedTasks.map(task => {
        const listElement = document.createElement("li");
        listElement.classList.add("taskListElement");
        listElement.textContent = task.text;
        addListButton(listElement);
        taskList.appendChild(listElement);
    });
}
;
function addListButton(newTask) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.id = "listButton";
    completeButton.addEventListener("click", () => {
        newTask.style.textDecorationLine = "line-through";
        newTask.style.visibility = VisibilityState.hidden;
    });
    newTask.appendChild(completeButton);
}
;
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