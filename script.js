const Game = new (function(){

    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    const computerPlay = function(){
        const random = Math.floor(Math.random() * 3);
        return [ROCK, PAPER, SCISSORS][random];
    };

    const doesFirstBeatSecond = function(first, second){
        return (first === ROCK && second === SCISSORS) || 
        (first === SCISSORS && second === PAPER) || 
        (first === PAPER && second === ROCK);
    };
})();