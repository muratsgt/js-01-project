document.getElementById("btn").addEventListener("click", guessMe);

let trial = 0;
let theNumber = 0;
startGame();

function guessMe(){
    const yourGuess = document.getElementById("guess").value;
    document.getElementById("guess").value = "";
    if(isNaN(yourGuess)){
        doMessage("Are you sure that this is a number?")
    }
    else if(yourGuess == theNumber){
        alert("You are the winner :D. You guest after "+ trial + " times!");
        if(confirm("You wanna play again?")){
            startGame();
            return;
        }
    }
    else if(yourGuess < theNumber){
        doMessage("I am thinking about higher number");
    }
    else{
        doMessage("I am thinking about lower number");
    }
    incTrial();
}

function doMessage(msg){
    document.getElementById("message").innerHTML = msg;
}

function incTrial(){
    trial++;
    document.getElementById("trial").innerHTML = "This is your test number: "+ trial;
}

function startGame(){
    trial = 0;
    theNumber = Math.floor(Math.random()*100);
    document.getElementById("message").innerHTML = "";
    document.getElementById("trial").innerHTML = "";
}