//Accessing html elements
//player1 icon characters
let firstFistHand = document.querySelector("#hand-fist1");
let firstHand = document.querySelector("#hand1");
let firstScissorsHand = document.querySelector("#hand-scissors1");

//player1 score card
let playerScore = 0;
let machineScore = 0;
let score1 = document.querySelector(".score-1");

//player2 score card
let score2 = document.querySelector(".score-2");

let winingMsg = document.querySelector(".winners-msg");

//Assigning items or symbols to it unique id.
//GameSymbols
let rock = 1;
let paper = 2;
let scissors = 3;

let playButton = document.querySelector(".play_btn");

playButton.addEventListener("click", () => {
  winingMsg.style.display = "block";
  generateNums();
});

let resetButton = document.querySelector(".reset_btn");
resetButton.addEventListener("click", () => {
  reset();
});

//Generating random numbers between 0 and 4 and controlling the flow of the game .

function generateNums() {
  let playerOne = Math.ceil(Math.random() * 3);

  let machine = Math.ceil(Math.random() * 3);

  if (playerOne === rock && machine === scissors) {
    winingMsg.textContent =
      "Player shows rock\nMachine shows scissors\nPlayer wins!.";
    score1.textContent = `Player score:${(playerScore += 1)}`;
  } else if (machine === rock && playerOne === scissors) {
    winingMsg.textContent =
      "Machine shows rock\nPlayer shows scissors\nMachine wins!.";
    score2.textContent = `Machine score:${(machineScore += 1)}`;
  } else if (playerOne === paper && machine === rock) {
    winingMsg.textContent =
      "Player shows paper\nMachine shows rock\nPlayer wins!.";
    score1.textContent = `Player score:${(playerScore += 1)}`;
  } else if (machine === paper && playerOne === rock) {
    winingMsg.textContent =
      "Machine shows paper\nPlayer shows rock\nMachine wins!.";
    score2.textContent = `Machine score:${(machineScore += 1)}`;
  } else if (playerOne === scissors && machine === paper) {
    winingMsg.textContent =
      "Player shows scissors\nMachine shows paper\nPlayer wins!.";
    score1.textContent = `Player score:${(playerScore += 1)}`;
  } else if (machine === scissors && playerOne === paper) {
    winingMsg.textContent =
      "Machine shows scissors\nPlayer shows paper\nMachine wins!.";
    score2.textContent = `Machine score:${(machineScore += 1)}`;
  } else {
    winingMsg.textContent = "Its a tie, try again!";
  }
}

//Reaset button function
function reset() {
  score1.textContent = `Player score:${(playerScore = 0)}`;
  score2.textContent = `Machine score:${(machineScore = 0)}`;
  winingMsg.style.display = "none";
}
