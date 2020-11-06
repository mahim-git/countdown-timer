
const days = document.querySelector('#day');
const hours = document.querySelector('#hour');
const mins = document.querySelector('#min');
const secs = document.querySelector('#sec');
const newYear = "1 jan 2021"

function countdown(){

    const newYearsDate = new Date (newYear);
    const currentDate = new Date ();
    const totalSec = (newYearsDate - currentDate)/1000;
    const day = Math.floor(totalSec/86400);
    const hour = Math.floor(totalSec/3600)%24;
    const min = Math.floor(totalSec/60)%60;
    const sec = Math.floor(totalSec)%60;

    days.textContent = formatTime(day);
    hours.textContent = formatTime(hour);
    mins.textContent = formatTime(min);
    secs.textContent = formatTime(sec);

}

 function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);