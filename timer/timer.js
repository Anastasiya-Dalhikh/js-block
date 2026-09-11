const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');

let seconds = 0;
let intervalId = null;

function startTimer(){
    if(intervalId !== null){
        return;
    }
    intervalId = setInterval(()=>{
        seconds++;
        display.textContent = seconds + ' sec';
    },1000);
}

function pauseTimer(){
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);