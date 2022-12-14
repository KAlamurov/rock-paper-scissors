// Rock Paper Scissors Game by https://github.com/KAlamurov

const mainDiv = document.querySelector('#main');
const div = document.createElement('div');
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let choices = Array("Rock", "Paper", "Scissors");
    let randomIndex = [Math.floor(Math.random()*choices.length)];
    let randomItem = choices[randomIndex];
    return randomItem;
}

let playRound = (playerSelection, ComputerSelection) => {

    playerSelectionFixed = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    switch (ComputerSelection) {
        case "Rock":
            switch (playerSelectionFixed) {
                case "Scissors":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Scissors, Computer: Rock';
                    mainDiv.appendChild(div);
                    return "Lose!";
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Rock';
                    mainDiv.appendChild(div);
                    return "Win!";
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Rock';
                    mainDiv.appendChild(div);
                    return "Even!";
                    break;
            }
            break;

        case "Paper":
            switch (playerSelectionFixed) {
                case "Scissors":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Scissors, Computer: Paper';
                    mainDiv.appendChild(div);
                    return "Win!";
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Paper';
                    mainDiv.appendChild(div);
                    return "Even!";
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Paper';
                    mainDiv.appendChild(div);
                    return "Lose!";
                    break;
            }
            break;

        case "Scissors":
            switch (playerSelectionFixed) {
                case "Scissors":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Scissors, Computer: Scissors';
                    mainDiv.appendChild(div);
                    return "Even!";
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Scissors';
                    mainDiv.appendChild(div);
                    return "Lose!";
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Scissors';
                    mainDiv.appendChild(div);
                    return "Win!";
                    break;
            }
            break;
}

}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let ComputerSelection = getComputerChoice();
    playRound("rocK",ComputerSelection);
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let ComputerSelection = getComputerChoice();
    playRound("PaPer", ComputerSelection);
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let ComputerSelection = getComputerChoice();
    playRound("ScIssorS", ComputerSelection);
});
