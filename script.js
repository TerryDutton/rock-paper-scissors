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

    const sanitizePlayerInput = function(input){
        input = input.toLowerCase();
        const isValid = input === ROCK || input === SCISSORS || input === PAPER;
        return {input, isValid};
    };

    const playRound = function(playerSelection, computerSelection){
        const playerWins = doesFirstBeatSecond(playerSelection, computerSelection);
        if(playerWins) return `You win! ${playerSelection} beats ${computerSelection}.`;
        
        const computerWins = doesFirstBeatSecond(computerSelection, p);
        if(computerWins) return `You lose! ${computerSelection} beats ${playerSelection}`;
        
        return "It's a draw!";
    };
})();