//Functie die evalueert of vraag 1 en 2 goed beantwoord zijn. 
let evaluateAnswer = (id) => {
    //Check of input waarde gelijk is aan antwoord
    if(document.getElementById(id+"-input").value == settings[id]){
        //Geef feedback aan de gebruiker dat het antwoord goed is
        // document.getElementById(id).classList.remove("btn-secondary")
        document.getElementById(id).classList.remove("btn-outline-danger")
        document.getElementById(id).classList.add("btn-outline-success")
        document.getElementById("correctAudio").play()
        //Geef gebruiker mogelijkheid om verder te gaan
        document.getElementById("enter_qst"+(currentPage)).style.display = "block";
    } else {
        //Geef gebruiker feedback dat het antwoord niet goed was
        document.getElementById("wrongAudio").play()
        // document.getElementById(id).classList.remove("btn-secondary")
        document.getElementById(id).classList.add("btn-outline-success")
        document.getElementById(id).classList.add("btn-outline-danger")
        //Minpunten!
        penaltyCount++;
    }
}

//Functie die bepaald of de gebruiker bij de huidige vraag al een hint gehad heeft. 
//Zo niet wordt er een hint aan de speler gegeven. 
let requestHint = (id) => {
    hint_index = "hint_q" + id; 
    if(document.getElementById(hint_index).innerText != settings[hint_index]){
        document.getElementById(hint_index).innerText = settings[hint_index]
        document.getElementById("hintAudio").play()
        //Opnieuw, minpunten!!
        hintCount++;
    }
}

//Lege array om de staat van de knoppen bij te houden, in het begin allemaal false natuurlijk. 
buttons = new Array(6)
buttons.fill(false)

let clicked = (id) => {
    //Check welke knop is ingedrukt en sla de waarde op.
    let btn = id.charAt(3);
    buttons[btn] = !buttons[btn]
    //Geef speler feedback of de knop wel of niet is ingedrukt.
    if(buttons[btn]){ //Wel ingedrukt
        document.getElementById(id).classList.remove("btn-outline-secondary")
        document.getElementById(id).classList.add("btn-secondary")
    } else { //Niet ingedrukt
        document.getElementById(id).classList.remove("btn-secondary")
        document.getElementById(id).classList.add("btn-outline-secondary")
    }
}

//Functie die checkt of de gebruiker vraag 3 goed beantwoord heeft
//Geeft de speler ook feedback gebaseerd op de uitkomst
let submitButtons = (id) => {
    //Nieuwe poging nieuwe kansen, verwijder het rood. 
    document.getElementById(id).classList.remove("btn-outline-danger")

    //Check of de twee arrays aan elkaar gelijk zijn door er strings van te maken #classicJS
    if(JSON.stringify(buttons) === JSON.stringify(settings.answer_3)){ //Antwoord klopt!
        document.getElementById("enter_qst"+(currentPage)).style.display = "block";
        //Geef elk goed antwoord een groene kleur, wel zo leuk
        for(i = 0; i < buttons.length; i++){
            if(buttons[i]){
                document.getElementById("btn" + i).classList.remove("btn-secondary")
                document.getElementById("btn" + i).classList.add("btn-success")
            }
        }
        document.getElementById(id).classList.remove("btn-secondary")
        document.getElementById(id).classList.add("btn-success")
        document.getElementById("correctAudio").play()
        //Omdat dit de laatste vraag is slaan we de tijd (de score) van de speler op. 
        //Ook laten het programma weten dat de gebruiker heeft gewonnen
        hasWon = true
        finalMinutes = minutes;
        finalSeconds = seconds;
    } else {//Antwoord klopt niet...
        document.getElementById("wrongAudio").play()
        document.getElementById(id).classList.remove("btn-secondary")
        document.getElementById(id).classList.add("btn-outline-danger")
        //Minpunten!
        penaltyCount++;
    }
}
