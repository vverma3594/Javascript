let minTime = document.querySelector("#min");
let secTime = document.querySelector("#sec");
let milisecTime = document.querySelector("#milisec");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
let timerRunning = false;


let startTimer = () => {
  count++;
  minutes = Math.floor(count / 100 / 60);
  seconds = Math.floor(count / 100 - minutes * 60);
  milliseconds = Math.floor(count - seconds * 100 - minutes * 6000);
  minTime.innerText = leadingZero(minutes);
  secTime.innerText = leadingZero(seconds);
  milisecTime.innerText = leadingZero(milliseconds);
};


startBtn.addEventListener("click", () => {
  if (!timerRunning) {
    interval = setInterval(startTimer, 10);
    timerRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  count = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  interval = 0;
  timerRunning = false;
  minTime.innerText = '00';
  secTime.innerText = '00';
  milisecTime.innerText = '00';
});


let leadingZero = (time) => {
  if (time <= 9) {
    return "0" + time;
  } else {
    return time;
  }
};
