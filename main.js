// function computerPlay() {
//   let random = Math.random();
//   if (random <= 0.34) {
//     return "rock";
//   } else if (random >= 0.64) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const matchNow = `${playerSelection} vs ${computerSelection}`;
  if (playerSelection === computerSelection) {
    alert(`${matchNow} is a tie`);
    return;
  }

  //player plays rock

  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      alert(`${matchNow} = Player wins`);
    } else {
      computerScore++;
      alert(`${matchNow} = Computer wins`);
    }
  }

  //player plays paper

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      alert(`${matchNow} = Player wins`);
    } else {
      computerScore++;
      alert(`${matchNow} = Computer wins`);
    }
  }

  //player plays Scissors

  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      alert(`${matchNow} = Player wins`);
    } else {
      computerScore++;
      alert(`${matchNow} = Computer wins`);
    }
  }
}
