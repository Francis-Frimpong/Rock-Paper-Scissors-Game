//Accessing html elements
//player1 icon characters
let firstFistHand = document.querySelector("#hand-fist1");
let firstHand = document.querySelector("#hand1");
let firstScissorsHand = document.querySelector("#hand-scissors1");

//player1 score card
let score1 = document.querySelector(".score-1");

//Player2 icon characters
const secondFistHand = document.querySelector(".hand-fist2");
const secondHand = document.querySelector(".hand2");
const secondScissorsHand = document.querySelector(".hand-scissors2");

//player2 score card
let score2 = document.querySelector(".score-2");

//Assigning items or symbols to it unique id.
let gameSymbol = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

//Generating random numbers between 0 and 4.
let random = Math.ceil(Math.random() * 3);
if (random === gameSymbol.Rock) {
  secondFistHand.style.color = "darkblue";
} else if (random === gameSymbol.Paper) {
  secondHand.style.color = "darkblue";
} else if (random === gameSymbol.Scissors) {
  secondScissorsHand.style.color = "darkblue";
}

//
let playerOneChar = document.querySelector(".player1-char");

playerOneChar.addEventListener("click", (e) => {
  let target = e.target.id;

  switch (target) {
    case "hand-fist1":
      firstFistHand = 1;
      console.log(firstFistHand);
      break;
    case "hand1":
      firstHand = 2;
      console.log(firstHand);
      break;
    case "hand-scissors1":
      firstScissorsHand = 3;
      console.log(firstScissorsHand);
      break;
  }
});

// let game = {
//   rock: 1,
//   paper: 2,
//   scissors: 3,

//   choice: function () {
//     let input = this.scissors;

//     let random = Math.ceil(Math.random() * 3);
//     console.log(random);
//     if (input === this.rock && random === this.scissors) {
//       console.log("Rock beats scissors");
//     } else if (input === this.paper && random === this.rock) {
//       console.log("Paper beats rock");
//     } else if (input === this.scissors && random === this.paper) {
//       console.log("Scissors beats paper");
//     } else {
//       console.log("Try again!");
//     }
//   },
// };

// game.choice();
