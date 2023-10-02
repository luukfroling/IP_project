//script specifieke variablen (beter niet veranderen)
let currentPage = 1; 
let newPage;

//Functie die de speler via een zachte scroll naar de volgende pagina brengt.
//Ontworpen om ook weer terug te kunnen, nog niet geimplementeert. 
let changePage = (goingUp) => {
    //Als de gebruiker voor het eerst begint halen we de timer tevoorschijn!
    if(document.getElementById("timer").style.display == "none"){
        document.getElementById("timer").style.display = "block"
        initiateCountdown();
    }
    //Als we naar een nieuwe pagina willen moeten we even bijhouden wat de current pagina is. 
    if(goingUp){
        newPage = currentPage + 1;
        document.getElementById("page-" + newPage).style.display="block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        document.addEventListener("scrollend", removePage);
    } else {
        // TODO going back a question
    }
}

//Haalt huidige pagina weg
let removePage = () => {
    document.removeEventListener("scrollend", removePage)
    document.getElementById("page-" + currentPage).style.display= "none";
    currentPage = newPage;
}

//Cross file functie, wordt in clock.js gebruikt. 
let showTimeoutPage = () => {
    newPage = 6;
    document.getElementById("page-6").style.display="block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    document.addEventListener("scrollend", removePage);
}