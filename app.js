let game = {
  rock: 1,
  paper: 2,
  scissors: 3,

  choice: function () {
    let input = this.scissors;

    let random = Math.ceil(Math.random() * 3);
    console.log(random);
    if (input === this.rock && random === this.scissors) {
      console.log("Rock beats scissors");
    } else if (input === this.paper && random === this.rock) {
      console.log("Paper beats rock");
    } else if (input === this.scissors && random === this.paper) {
      console.log("Scissors beats paper");
    } else {
      console.log("Try again!");
    }
  },
};

game.choice();
