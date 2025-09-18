const timer = document.getElementById("timer");
const button = document.getElementById("startTimer");
const number = 4;

const viewOnScreen = (number) => {
  timer.textContent = number;
}
const timerInterval = setInterval(viewOnScreen(number), 1000);

const Countdown = (timerInterval, number) => {
  for(let i = number; i > 0; i--) {
    timerInterval
  }
}

Countdown(timerInterval, 4);


