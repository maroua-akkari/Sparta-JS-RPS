var userChoice = (prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase());

var compChoice = Math.floor(Math.random() * 3) +1;
if (compChoice == 1) {
  compChoice = "rock";
} else if (compChoice == 2) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}

function compare(user,comp) {
  if (user == comp) {
      alert("Tie!")
  } else if (user == "rock") {
      if (comp == "paper") {
          alert("Paper beats rock, computer won this round!");
          compScore +=1;
      } else {
        alert("Rock beats scissors, you won this round!");
        userScore +=1;
      }
  } else if (user == "paper") {
      if (comp == "scissors") {
        alert("Scissors beats paper, computer won this round!");
        compScore +=1;
      } else {
        alert("Paper beats rock, you won this round!");
        userScore +=1;
      }
  } else if (user == "scissors") {
    if (comp == "rock") {
      alert("Rock beats scissors, computer won this round!");
      compScore +=1;
    } else {
      alert("Scissors beats paper, you won this round!");
      userScore +=1;
    }
  }
}

  var compChose = alert("Computer chose " + compChoice);
  var userScore = 0;
  var compScore = 0;

  compare(userChoice,compChoice);
  var scores = alert("Current scores: " + "User: " + userScore + " Computer: " + compScore);
  
