// Rock Paper Scissors Game by https://github.com/KAlamurov

const playerSelection = "rOcK";

// Computer choice function with Math.random

let getComputerChoice = () => {
    let choices = Array("Rock", "Paper", "Scissors");
    let randomIndex = [Math.floor(Math.random()*choices.length)];
    let randomItem = choices[randomIndex];
    return randomItem;
}

// playRound function with user input being manipulated with charAt, toUpperCase and toLowerCase
// Using switch statemens for returning the outcome of the game

let playRound = (playerSelection, ComputerSelection) => {

playerSelectionFixed = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
switch (ComputerSelection) {
    case "Rock":
        switch (playerSelectionFixed) {
            case "Scissors":
                console.log("Player: Scissors, Computer: Rock");
                return "Lose!";
                break;
            case "Paper":
                console.log("Player: Paper, Computer: Rock");
                return "Win!";
                break;
            case "Rock":
                console.log("Player: Rock, Computer: Rock");
                return "Even!";
                break;
        }
        break;

    case "Paper":
        switch (playerSelectionFixed) {
            case "Scissors":
                console.log("Player: Scissors, Computer: Paper");
                return "Win!";
                break;
            case "Paper":
                console.log("Player: Paper, Computer: Paper");
                return "Even!";
                break;
            case "Rock":
                console.log("Player: Rock, Computer: Paper");
                return "Lose!";
                break;
        }
        break;

    case "Scissors":
        switch (playerSelectionFixed) {
            case "Scissors":
                console.log("Player: Scissors, Computer: Scissors");
                return "Even!";
                break;
            case "Paper":
                console.log("Player: Paper, Computer: Scissors");
                return "Lose!";
                break;
            case "Rock":
                console.log("Player: Rock, Computer: Scissors");
                return "Win!";
                break;
        }
        break;
}

}

//console.log(playRound(playerSelection,ComputerSelection));


let game = () => {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let ComputerSelection = getComputerChoice();
        switch (playRound(playerSelection, ComputerSelection)) {
            case "Win!":
                playerWinCount++
                break;
            case "Lose!":
                computerWinCount++
                break;
            case "Even!":
                computerWinCount++
                playerWinCount++
                break;
        }
    }
    console.log(`Player ${playerWinCount} , Computer ${computerWinCount}`);
    
    if (playerWinCount > computerWinCount) {
        console.log("Congratulations, you win !");
    }
    else if (playerWinCount == computerWinCount) {
        console.log("You are even !");
    }
    else {
        console.log("Sorry, you lost !");
    }
    }

console.log(game());