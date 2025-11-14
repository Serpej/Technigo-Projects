// Color palette https://www.color-hex.com/color-palette/57051

import { SortState, VisibilityState } from "./Enums/enums.js";
import {Task} from "./Interfaces/interfaces"

//DOM Elements
const resultDiv = getElement<HTMLDivElement>("result"); 
const addTaskButton = getElement<HTMLButtonElement>("addTaskButton");
const userTaskInput = getElement<HTMLInputElement>("userTask");

const taskList = document.createElement("ul") as HTMLUListElement;
taskList.id = "taskList";
resultDiv.appendChild(taskList);

const filterAllButton = document.createElement("button") as HTMLButtonElement;
const filterActiveButton = document.createElement("button") as HTMLButtonElement;
const filterCompleteButton = document.createElement("button") as HTMLButtonElement;

//Task Array
let taskArray: Task[] = [];

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
    renderTask(taskList, task);
  }
});

// Render the current task (SortState.all as default)
function renderTask(taskList: HTMLUListElement, task: Task, sort: SortState = SortState.all) {
  let sortedTasks = taskArray; //Make refrence

  if (sort === SortState.active) {
    sortedTasks = taskArray.filter(task => !task.completed);
  } else if (sort === SortState.completed) {
    sortedTasks = taskArray.filter(task => task.completed);
  } else if (sort === SortState.all) {
    taskList.innerHTML = "";
  };

  sortedTasks.map(task => {
    const listElement = document.createElement("li") as HTMLLIElement;
    listElement.classList.add("taskListElement");
    listElement.textContent = task.text;
    addListButton(listElement);
    taskList.appendChild(listElement);
  });
};

function addListButton(newTask: HTMLLIElement):void {
  const completeButton = document.createElement("button") as HTMLButtonElement;
  completeButton.textContent = "Complete";
  completeButton.id = "listButton";

  completeButton.addEventListener("click", (e) => {
    e.preventDefault();
    newTask.style.textDecorationLine = "line-through"; 
    newTask.style.visibility = VisibilityState.hidden;
  });
  newTask.appendChild(completeButton);
};

//Helper function to safely get DOM elements
function getElement<T extends HTMLElement>(id: string):T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id '${id}' not found.`);
  };
  return element;
}
  


