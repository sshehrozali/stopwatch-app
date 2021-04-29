let clockEngine;
let seconds = 0;
let minutes = 0;
let hours = 0;

let formattedSecs = "";
let formattedMins = "";
let formattedHrs = "";

// Timer function
function timer() {
    seconds = seconds + 1;      // Update Seconds

    if (seconds == 60) {        // Update minutes
        seconds = 0;
        minutes = minutes + 1;
    }

    if (minutes == 60 && seconds == 60) {       // Update hours
        seconds = 0;
        minutes = 0;
        hours = hours + 1;
    }

    // Correct Display
    // FORMAT SECONDS
    if (seconds < 10) {
        formattedSecs = "0" + seconds;
    }
    else {
        formattedSecs = seconds;
    }

    // FORMAT MINUTES
    if (minutes < 10) {
        formattedMins = "0" + minutes;
    }
    else {
        formattedMins = minutes;
    }

    // FORMAT HOURS
    if (hours < 10) {
        formattedHrs = "0" + hours;
    }
    else {
        formattedHrs = hours;
    }

    // Update HTML
    document.getElementById("start").style.display = "none";    // Set display none
    document.getElementById("start").innerHTML = "";

    document.getElementById("mins").innerHTML = formattedMins;  // Update Minutes and Seconds
    document.getElementById("secs").innerHTML = formattedSecs;

    document.getElementById("time").style.display = "flex";    // Apply CSS
    document.getElementById("time").style.flexDirection = "column";
    document.getElementById("time").style.justifyContent = "center";
    document.getElementById("time").style.alignItems = "center";

    document.getElementById("time").style.animation = "swirl-in-fwd 0.6s ease-out both";    // Apply animation

    document.getElementById("pause").style.display = "block";   // Set Pause button
    document.getElementById("pause").style.animation = "bounce-in-bottom 1.1s both";    // Apply animation
}

// Play and pause 
document.getElementById("pause").addEventListener("click", function () {

    var btnCheck =  document.getElementById("pause").innerHTML;

    if (btnCheck == `<i class="pt-3 py-sm-3 py-md-5 py-lg-5 far fa-play-circle fa-2x"></i>`) {
        document.getElementById("pause").innerHTML = `<i class="pt-3 py-sm-3 py-md-5 py-lg-5 fas fa-pause-circle fa-2x"></i>`;
        clockEngine = setInterval(timer, 1000);
    }

    else{
        clearInterval(clockEngine);
        document.getElementById("pause").innerHTML = `<i class="pt-3 py-sm-3 py-md-5 py-lg-5 far fa-play-circle fa-2x"></i>`;
    }
})

// Start Stopwatch
document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").style.animation = "swirl-out-bck 0.6s ease-in both";
    clockEngine = setInterval(timer, 1000);
})