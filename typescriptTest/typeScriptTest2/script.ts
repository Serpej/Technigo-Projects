// Color palette https://www.color-hex.com/color-palette/57051

import { SortState, VisibilityState } from "./Enums/enums.js";
import {Task} from "./Interfaces/interfaces"

//DOM Elements
const resultDiv = getElement<HTMLDivElement>("result"); 
const addTaskButton = getElement<HTMLButtonElement>("addTaskButton");
const userTaskInput = getElement<HTMLInputElement>("userTask");
const filterButtonsContainer = getElement<HTMLDivElement>("filterButtonsContainer");

const taskList = document.createElement("ul") as HTMLUListElement;
taskList.id = "taskList";
resultDiv.appendChild(taskList);

const filterAllButton = document.createElement("button") as HTMLButtonElement;
filterAllButton.textContent = "Filter All";
const filterActiveButton = document.createElement("button") as HTMLButtonElement;
filterActiveButton.textContent = "Filter Active";
const filterCompleteButton = document.createElement("button") as HTMLButtonElement;
filterCompleteButton.textContent = "Filter Complete";
filterButtonsContainer.appendChild(filterAllButton);
filterButtonsContainer.appendChild(filterActiveButton);
filterButtonsContainer.appendChild(filterCompleteButton);

// Task Array
let taskArray: Task[] = [];

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
function renderTask(task?: Task, sort: SortState = SortState.all) {
  taskList.innerHTML = "";
  let sortedTasks = taskArray; //Make refrence

  if (sort === SortState.active) {
    sortedTasks = taskArray.filter(task => !task.completed);
  } else if (sort === SortState.completed) {
    sortedTasks = taskArray.filter(task => task.completed);
  };

  sortedTasks.map(task => {
  const listElement = document.createElement("li") as HTMLLIElement;
  listElement.classList.add("taskListElement");
  listElement.textContent = task.text;
  addListButton(listElement, task.id);
  taskList.appendChild(listElement);
  });
};

function deleteTask(id: number):void {
  taskArray = taskArray.filter(task => task.id !== id);
  renderTask()
};

// Adds a button to a list element
function addListButton(newTask: HTMLLIElement, id: number):void {
  const completeButton = document.createElement("button") as HTMLButtonElement;
  completeButton.textContent = "Delete";
  completeButton.id = "listButton";

  completeButton.addEventListener("click", () => {
    newTask.style.textDecorationLine = "line-through"; 
    newTask.style.visibility = VisibilityState.hidden;
    deleteTask(id);
  });
  newTask.appendChild(completeButton);
};

// Helper function to safely get DOM elements
function getElement<T extends HTMLElement>(id: string):T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id '${id}' not found.`);
  };
  return element;
}

//inital render
renderTask();
  


