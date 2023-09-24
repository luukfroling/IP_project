let initiateCountdown = () => {
    // Calculate the target time 5 minutes from now
    var now = new Date().getTime();
    var countDown = now + (5 * 60 * 1000 + 1000); // 5 minutes in milliseconds

    // Set initial remaining penalty-free time
    let remainingTime = countDown - now;

    // Update the count down every 1 second
    var update = setInterval(function () {
        // Get the current date and time
        var current = new Date().getTime();

        // Find the difference between countDown and current time
        var diff = countDown - current - penaltyCount * 60 * 1000;

        // Calculate time in minutes and seconds
        var minutes = Math.floor(diff / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        if(diff > 0){
            document.getElementById("myAudio").play()
            document.getElementById("time").innerHTML = minutes + " : " + seconds;
        } else {
            document.getElementById("time").innerHTML = "Time is up!";
        }
        document.getElementById("penaltyCount").innerHTML = "Penalties: " + penaltyCount;
    }, 1000);
}