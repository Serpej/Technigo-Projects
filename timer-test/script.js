const timer = document.getElementById("timer");
const button = document.getElementById("startTimer");

const viewOnScreen = (number) => {
  timer.textContent = number;
}

const startingPrompt = prompt(`Enter a number for the timer`);
const startNumber = startingPrompt;

viewOnScreen(startNumber);



const updateCountdown = (currentNumber, intervalID) => {
  currentNumber--;
  viewOnScreen(currentNumber);
  if (currentNumber === 0) {
    clearInterval(intervalID)
  }
  return currentNumber;
}

const Countdown = () => {
  let currentNumber = startNumber;
  const intervalID = setInterval(() => {
    currentNumber = updateCountdown(currentNumber, intervalID)
  }, 1000);
}

button.onclick = Countdown;


