let seconds = 0;
let minutes = 0;
let hours = 0;

formattedSecs = "";
formattedMins = "";
formattedHrs = "";

document.getElementById("start").addEventListener("click", function() {
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
        else{
            formattedSecs = seconds;
        }

        // FORMAT MINUTES
        if (minutes < 10) {
            formattedMins = "0" + minutes;
        }
        else{
            formattedMins = minutes;
        }

        // FORMAT HOURS
        if (hours < 10) {
            formattedHrs = "0" + hours;
        }
        else{
            formattedHrs = hours;
        }

        // document.getElementById("stopwatch").innerHTML = formattedHrs + " : " + formattedMins + " : " + formattedSecs;
        document.getElementById("start").style.display = "none";
        document.getElementById("start").innerHTML = "";
        document.getElementById("mins").innerHTML = formattedMins;
        document.getElementById("secs").innerHTML = formattedSecs;
        document.getElementById("pause").style.display = "block";
    }
    setInterval(timer, 1000);
})