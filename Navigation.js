let currentPage = 1; 
let newPage;

let changePage = (goingUp) => {
    if(document.getElementById("timer").style.display == "none"){
        document.getElementById("timer").style.display = "block"
        initiateCountdown();
    }
    if(goingUp){
        newPage = currentPage + 1;
        document.getElementById("page-" + newPage).style.display="block";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        document.addEventListener("scrollend", removePage);
    } else {
        // TODO going back a question
    }
}

let removePage = () => {
    document.removeEventListener("scrollend", removePage)
    document.getElementById("page-" + currentPage).style.display= "none";
    currentPage = newPage;
}