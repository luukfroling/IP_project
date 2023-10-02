//SETTINGS (kunnen worden aangepast)

let settings = {
    total_time: 30,
    time_per_penalty: 1,
    time_per_hint: 5,
    hint_q1: "Doe eens normaal",
    hint_q2: "Zoals het artikel van Pols over Versnelling langs de helling: 40(4)",
    hint_q3: "De oplossing is niet ver",
    image_question_1: "",
    text_question_2: "Nienke Lurvink schrijft over escaperooms in de klas. Een referentie naar haar artikel bevat zowel de jaargang als de editie.",
    text_question_3: "this is going to be question 3, to be filled in late, just have to get some testing text now.",
    answer_1: "cbda",
    answer_2: "cbda",
    answer_3: [true, true, false, false, false, true]
}

//GLOBAL VARIABLES (beter niet aanpassen)
let penaltyCount = 0; 
let hintCount = 0;
let hasWon = false; 



//Deze functie wordt aangeroepen als de pagina volledig geladen is. 
window.onload = (event) => {
    // -- QUESTIONS -- 
    //Set the questions
    document.getElementById("question-2").innerHTML = settings.text_question_2;
    document.getElementById("question-3").innerHTML = settings.text_question_3;

    // -- HINTS --
    //Hide the hints based on if a hint has been provided
    settings.hint_q1 == "" ? document.getElementById("hint_btn_q1").style.display = "none" : document.getElementById("hint_btn_q1").style.display = "block"
    settings.hint_q2 == "" ? document.getElementById("hint_btn_q2").style.display = "none" : document.getElementById("hint_btn_q2").style.display = "block"
    settings.hint_q3 == "" ? document.getElementById("hint_btn_q3").style.display = "none" : document.getElementById("hint_btn_q3").style.display = "block"
};