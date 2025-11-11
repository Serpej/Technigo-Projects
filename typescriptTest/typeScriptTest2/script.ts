// Color palette https://www.color-hex.com/color-palette/57051
import { ToggleStatus, Visibility } from "./interfaces";


const sortToggle: ToggleStatus = {
  all: "all",
  active: "active",
  completed: "completed",
};

const visibilityToggle: Visibility = {
  visible: "visible",
  hidden: "hidden",
};

const resultDiv = document.getElementById("result") as HTMLDivElement; 
const taskList: HTMLUListElement = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);

const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const userTaskInput = document.getElementById("userTask") as HTMLInputElement;

addTaskButton.addEventListener("click", (event) =>{
  event.preventDefault();
  const userInput: string = userTaskInput.value;
  if(userInput.trim()) {
    addTask(taskList, userInput);
  }
});

function addTask(taskList: HTMLUListElement, userInput: string):void {
  const newTask: HTMLLIElement = document.createElement("li");
  newTask.classList.add("taskListElement");
  newTask.textContent = userInput;
  taskList.appendChild(newTask);
  console.log("Hej")
}

/**
Function to addTask
  1. Create li element 
  2. Add text to element
  3. Add element to #ul
 */

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



