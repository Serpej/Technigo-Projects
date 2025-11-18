// Color palette https://www.color-hex.com/color-palette/57051

import {SortState} from "./Enums/enums.js";
import {Task} from "./Interfaces/interfaces";
import {getButtonElement, getDivElement, getInputElement} from "./Utils/domHelpers.js";

//DOM Elements
const resultDiv = getDivElement("result"); 
const addTaskButton = getButtonElement("addTaskButton");
const userTaskInput = getInputElement("userTask");
const filterButtonsContainer = getDivElement("filterButtonsContainer");

const taskList = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);

const filterAllButton = document.createElement("button");
filterAllButton.classList.add("filterButtons");
filterAllButton.textContent = "Filter All";
filterAllButton.type = "button";

const filterActiveButton = document.createElement("button");
filterActiveButton.classList.add("filterButtons");
filterActiveButton.textContent = "Filter Active";
filterActiveButton.type = "button";

const filtercompleteButton = document.createElement("button");
filtercompleteButton.classList.add("filterButtons");
filtercompleteButton.textContent = "Filter Complete";
filtercompleteButton.type = "button";

filterButtonsContainer.appendChild(filterAllButton);
filterButtonsContainer.appendChild(filterActiveButton);
filterButtonsContainer.appendChild(filtercompleteButton);

// Task Array
let taskArray: Task[] = [];

// Render the current task (SortState.all as default)
function renderTask(sort: SortState = SortState.all) {
  taskList.innerHTML = "";

  let sortedTasks = taskArray; // Make refrence

  // Filter based on sort state
  if (sort === SortState.active) {
    sortedTasks = taskArray.filter(task => !task.completed);
  } else if (sort === SortState.completed) {
    sortedTasks = taskArray.filter(task => task.completed);
  };

  return sortedTasks.map(task => {
  const listElement = document.createElement("li");
  listElement.classList.add("taskListElement");
  listElement.textContent = task.text;
  if(task.completed) {
    listElement.style.textDecorationLine = "line-through"; 
  };
  addListButton(listElement, task.id);
  taskList.appendChild(listElement);
  });
};

// Toggle completed
function toggleCompleted(id: number):void {
  taskArray = taskArray.map(task => task.id === id ? {...task, completed: !task.completed} : task);
  renderTask()
}

// Adds a button to a list element
function addListButton(newTask: HTMLLIElement, id: number):void {
  const completeButton = document.createElement("button");
  completeButton.textContent = "Completed";
  completeButton.id = "listButton";

  completeButton.addEventListener("click", () => {
    toggleCompleted(id)
  });
  newTask.appendChild(completeButton);
};

// Eventlisteners
addTaskButton.addEventListener("click", (event) =>{
  event.preventDefault();
  const userInput: string = userTaskInput.value;
  if(userInput.trim()) {
      const task: Task = {
      id: Date.now(),
      text: userInput,
      completed: false,
  };
    taskArray.push(task);
    userTaskInput.value = "";
    renderTask();
  }
});
filterAllButton.addEventListener("click", () => {renderTask()});
filterActiveButton.addEventListener("click", () => {renderTask(SortState.active)});
filtercompleteButton.addEventListener("click", () => {renderTask(SortState.completed)});

//inital render
renderTask();
  


