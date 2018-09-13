var compChoice, playerChoice, wins, lossses, guessesLeft, guesses, letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function compChoiceGen(){
    compChoice = letters[Math.floor(Math.random()*26)];
    console.log(compChoice);
}

document.addEventListener('keydown', function(event) {
    playerChoice = event.key;
    console.log(playerChoice);
    if(playerChoice === compChoice) {
        alert("You Win!")
        resetGuesses();
        compChoiceGen()
        wins++;
    }
    else if(guessesLeft === 1){
        alert("You Lose")
        resetGuesses();
        compChoiceGen();
        losses ++;
    }
    else{
        guessesLeft = guessesLeft - 1;
        guesses = guesses + playerChoice+",";
    }
    display();
});

function start(){
    wins=0, losses=0, guessesLeft=10, guesses="";
    display();
    compChoiceGen();
}

function display(){
    document.getElementById("instructions").innerHTML = "Guess What Letter I'm Thinking Of ...";
    document.getElementById("wins").innerHTML ="Wins: "+wins;
    document.getElementById("losses").innerHTML ="Losses: "+losses;
    document.getElementById("guessesLeft").innerHTML ="Guesses Left: "+guessesLeft;
    document.getElementById("guesses").innerHTML ="Guesses: "+guesses;
    document.getElementById("reset").style.display = "inline";
    document.getElementById("start").style.display = "none";
}

function resetGuesses(){
    guessesLeft=10, guesses=""; 
}

function reset(){
    wins= 0;
    losses=0;
    resetGuesses();
    display();
}
