
var userChoice = (prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase());

var compChoice = Math.floor(Math.random() * 3) +1;
if (compChoice == 0) {
  compChoice = "rock";
} else if (compChoice == 1) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}

console.log(compChoice);
