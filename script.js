let startTime;
let interval;
let isRunning = false;
let lapCount = 1;
let elapsedTime = 0;

function startStop() {
  const startStopButton = document.getElementById("startStop");

  if (!isRunning) {
    startTime = new Date().getTime() - elapsedTime;
    startStopButton.textContent = "Pause";
    interval = setInterval(updateTime, 10);
  } else {
    clearInterval(interval);
    startStopButton.textContent = "Resume";
  }

  isRunning = !isRunning;
}

function updateTime() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  const formattedTime = new Date(elapsedTime).toISOString().substr(11, 8);
  document.querySelector(".time").textContent = formattedTime;
}

function reset() {
  clearInterval(interval);
  document.querySelector(".time").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
  lapCount = 1;
  elapsedTime = 0; // Reset elapsed time
}

function lap() {
  if (isRunning) {
    const lapTime = document.querySelector(".time").textContent;
    const lapList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
  }
}

reset(); // Initialize the stopwatch when the page loads
