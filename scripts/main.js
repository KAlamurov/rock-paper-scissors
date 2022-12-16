// Rock Paper Scissors Game by https://github.com/KAlamurov

const mainDiv = document.querySelector('#main');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const btnn = document.createElement("button");
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
                    computerScore++
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Rock';
                    mainDiv.appendChild(div);
                    playerScore++
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Rock';
                    mainDiv.appendChild(div);
                    computerScore++
                    playerScore++
                    break;
            }
            break;

        case "Paper":
            switch (playerSelectionFixed) {
                case "Scissors":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Scissors, Computer: Paper';
                    mainDiv.appendChild(div);
                    playerScore++
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Paper';
                    mainDiv.appendChild(div);
                    computerScore++
                    playerScore++
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Paper';
                    mainDiv.appendChild(div);
                    computerScore++
                    break;
            }
            break;

        case "Scissors":
            switch (playerSelectionFixed) {
                case "Scissors":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Scissors, Computer: Scissors';
                    mainDiv.appendChild(div);
                    computerScore++
                    playerScore++
                    break;
                case "Paper":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Paper, Computer: Scissors';
                    mainDiv.appendChild(div);
                    computerScore++
                    break;
                case "Rock":
                    div.classList.add('gameResult');
                    div.textContent = 'Player: Rock, Computer: Scissors';
                    mainDiv.appendChild(div);
                    playerScore++
                    break;
            }
            break;
}

    div2.classList.add('Outcome');
    div2.textContent = `Score - Computer: ${computerScore} , Player: ${playerScore}`;
    mainDiv.appendChild(div2);


    if (playerScore > 4 && computerScore < 5) {
        div3.classList.add('EndGame');
        div3.textContent = 'Congratulations, you won!';
        mainDiv.appendChild(div3);
        computerScore = 0;
        playerScore = 0;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        btnn.innerHTML = "Try Again";
        btnn.setAttribute("id", "retry");
        mainDiv.appendChild(btnn);
        btnn.addEventListener('click', () => {
            location.reload();
        });


    } else if (computerScore > 4 && playerScore < 5) {
        div3.classList.add('EndGame');
        div3.textContent = 'Sorry, you lost!';
        mainDiv.appendChild(div3);
        computerScore = 0;
        playerScore = 0; 
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        btnn.innerHTML = "Try Again";
        btnn.setAttribute("id", "retry");
        mainDiv.appendChild(btnn);
        btnn.addEventListener('click', () => {
            location.reload();
        });
    }
      else if (computerScore == 5 && playerScore == 5) {
        div3.classList.add('EndGame');
        div3.textContent = 'You are even!';
        mainDiv.appendChild(div3); 
        computerScore = 0;
        playerScore = 0;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        btnn.innerHTML = "Try Again";
        btnn.setAttribute("id", "retry");
        mainDiv.appendChild(btnn);
        btnn.addEventListener('click', () => {
            location.reload();
        });
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
