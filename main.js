
var userChoice = (prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase());

var compChoice = Math.floor(Math.random() * 3) +1;
if (compChoice == 1) {
  compChoice = "rock";
} else if (compChoice == 2) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}


console.log(compChoice);

function compare(user,comp) {
  if (user == comp) {
      alert("Tie!")
  } else if (user == "rock") {
      if (comp == "paper") {
          alert("Paper beats rock, computer won this round!");
      } else {
        alert("Rock beats scissors, you won this round!");
      }
  } else if (user == "paper") {
      if (comp == "scissors") {
        alert("Scissors beats paper, computer won this round!");
      } else {
        alert("Paper beats rock, you won this round!");
      }
  } else if (user == "scissors") {
    if (comp == "rock") {
      alert("Rock beats scissors, computer won this round!");
    } else {
      alert("Scissors beats paper, you won this round!");
    }
  }
}

var compChose = alert("Computer chose " + compChoice);
compare(userChoice,compChoice);
