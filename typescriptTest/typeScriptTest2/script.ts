// Color palette https://www.color-hex.com/color-palette/57051

import { SortState, VisibilityState } from "./Enums/enums";
import {Task} from "./Interfaces/interfaces"

const resultDiv = document.getElementById("result") as HTMLDivElement; 
const taskList: HTMLUListElement = document.createElement("ul");
taskList.id = "taskList";
resultDiv.appendChild(taskList);

const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const userTaskInput = document.getElementById("userTask") as HTMLInputElement;
let taskArray: Task[] = [];

addTaskButton.addEventListener("click", (event) =>{
  event.preventDefault();
  const userInput: string = userTaskInput.value;
  if(userInput.trim()) {
      // Ett nytt task object.
      const task: Task = {
      id: Date.now(),
      text: userInput,
      completed: false,
  };
    addTask(taskList, userInput);
    
  }
});

function addTask(taskList: HTMLUListElement, userInput: string):void {
  const newTask: HTMLLIElement = document.createElement("li");
  newTask.classList.add("taskListElement");
  newTask.textContent = userInput;
  addListButton(newTask);
  taskList.appendChild(newTask);
}

function addListButton(newTask: HTMLLIElement):void {
  const completeButton = document.createElement("button") as HTMLButtonElement;
  completeButton.textContent = "Completed";
  completeButton.id = "listButton";

  completeButton.addEventListener("click", (e) => {
    e.preventDefault();
    newTask.style.textDecorationLine = "line-through"; 
    newTask.style.visibility = VisibilityState.hidden;
  });
  newTask.appendChild(completeButton);
};
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


