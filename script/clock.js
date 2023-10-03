let minutes, seconds; 
let finalMinutes, finalSeconds; 

let initiateCountdown = () => {
    // Calculate the target time 5 minutes from now
    var now = new Date().getTime();
    var countDown = now + (settings.total_time * 60 * 1000 + 1000); // 5 minutes in milliseconds

    // Update the count down every 1 second
    var update = setInterval(function () {
        // Get the current date and time
        var current = new Date().getTime();

        // Find the difference between countDown and current time
        var diff = countDown - current - penaltyCount * settings.time_per_penalty * 60 * 1000 - hintCount * settings.time_per_hint * 60 * 1000;

        // Calculate time in minutes and seconds
        minutes = Math.floor(diff / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
        if((diff > 0) && (!hasWon)){
            document.getElementById("myAudio").play()
            document.getElementById("time").innerHTML = minutes + " : " + seconds;
        } else if(hasWon) {
            document.getElementById("time").innerHTML = finalMinutes + " : " + finalSeconds;
            document.getElementById("time").classList.remove("text-danger");
            document.getElementById("time").classList.add("text-success");
        } else {
            document.getElementById("time").innerHTML = "Time is up!";
            showTimeoutPage();
        }
        document.getElementById("penaltyCount").innerHTML = "Penalties: " + penaltyCount;
    }, 1000);
}
