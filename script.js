const Game = new (function(){

    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    this.computerPlay = function(){
        const random = Math.floor(Math.random() * 3);
        return [ROCK, PAPER, SCISSORS][random];
    }
})();

console.log(Game.computerPlay());