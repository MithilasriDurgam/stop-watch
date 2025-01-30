let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        document.getElementById('startStop').classList.remove('stop');  // Remove the 'stop' class
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Stop';
        document.getElementById('startStop').classList.add('stop');  // Add the 'stop' class
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    displayTime();
}

function displayTime() {
    const time = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('time').textContent = time;
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('startStop').classList.remove('stop');  // Remove 'stop' class
}
