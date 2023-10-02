//Youtube API, bron van 101 errors per seconde.
let introPlayer;

function onYouTubeIframeAPIReady() {
    introPlayer = new YT.Player('intro-video', {
        events: {
        'onStateChange': onPlayerStateChange
        }
    });

    outroPlayer = new YT.Player('outro-video', {
        events: {
        'onStateChange': onPlayerStateChange
        }
    });

    timeoutPlayer = new YT.Player('timeout-video', {
        events: {
        'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if(event.data == 0) {
        document.getElementById("enter_escaperoom").style.display = "block"         
        console.log("ended")
    }
}

//Mocht er nog functionaliteit na de afsluitende videos moeten komen, dan kan dat hier.
