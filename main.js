//Rock Paper Scissors Game

//Step 1: Function which randomly returns a string

let choices = Array("Rock", "Paper", "Scissors");
let getComputerChoice = () => [Math.floor(Math.random() * choices.length)];
console.log(getComputerChoice());