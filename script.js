// Getting content from HTML
const minute = document.querySelector("#min");
const seconds = document.querySelector("#sec");
const milisec = document.querySelector("#milisec");
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

// To start timer
let timerStart;

// Variable for timer
let minuteCount = 0;
let secondsCount = 0;
let milisecCount = 0;

// Button starts here

// Start button
startBtn.addEventListener("click", () => {
    clearInterval(timerStart);
    timerStart = setInterval(startTimer, 10);
});

// Pause button
pauseBtn.addEventListener("click", () => {
    clearInterval(timerStart);
});


// Reset button
resetBtn.addEventListener("click", () => {
    clearInterval(timerStart);
    minuteCount = 00;
    secondsCount = 00;
    milisecCount = 00;

    milisec.innerHTML = milisecCount;
    seconds.innerHTML = secondsCount;
    minute.innerHTML = minuteCount;

    if (milisecCount < 10) {
        milisec.innerHTML = `0${milisecCount}`;
    };
    if (secondsCount < 10) {
        seconds.innerHTML = `0${secondsCount}`;
    };
    if (milisecCount < 10) {
        minute.innerHTML = `0${minuteCount}`;
    }
});

// Starttimer function
function startTimer() {
    milisecCount++;
    milisec.innerHTML = milisecCount;
    if (milisecCount < 10) {
        milisec.innerHTML = `0${milisecCount}`;
    };
    if (milisecCount == 100) {
        milisecCount = 0;
        secondsCount++;
        milisec.innerHTML = milisecCount;
        seconds.innerHTML = secondsCount;
        if (secondsCount < 10) {
            seconds.innerHTML = `0${secondsCount}`;
        };
    };
    if (secondsCount == 60) {
        secondsCount = 00;
        minuteCount++;
        minute.innerHTML = minuteCount;
        seconds.innerHTML = secondsCount;
        if (minuteCount < 10) {
            minute.innerHTML = `0${minuteCount}`;
        };
    };
};