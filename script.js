const RockPaperScissors = new (function(){

    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    const choices = [ROCK, PAPER, SCISSORS];

    const whatDoesThisBeat = {
        [ROCK]: SCISSORS,
        [PAPER]: ROCK,
        [SCISSORS]: PAPER
    };

    const computerPlay = function(){
        const random = Math.floor(Math.random() * 3);
        return choices[random];
    };

    const sanitizeInput = function(input){
        const i = input.toLowerCase();
        const isValid = choices.includes(i);
        return [i, isValid];
    };

    const determineVictor = function(selection_player1, selection_player2){
        return {
            p1_victory: whatDoesThisBeat[selection_player1] === selection_player2,
            p2_victory: whatDoesThisBeat[selection_player2] === selection_player1
        };
    };

    const getChoiceFromPlayer = function(player){
        while(true){
            const input = prompt(`Player ${player}, what do you choose?`);
            const [choice, isValid] = sanitizeInput(input);
            if(!isValid) alert(`'${input}' is not a valid choice ):`);
            else return choice;
        }
    };

    const getPlayerChoices = function(is2Player){
        const p1Choice = getChoiceFromPlayer(1);
        const p2Choice = is2Player ? getChoiceFromPlayer(2) : computerPlay();
        return {p1Choice, p2Choice};
    };

    this.play = function({is2Player = false, rounds = 5}){

    };
})();