const RockPaperScissors = new (function(){

    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    this.ROCK = ROCK;
    this.PAPER = PAPER;
    this.SCISSORS = SCISSORS;

    const choices = [ROCK, PAPER, SCISSORS];

    const whatDoesThisBeat = {
        [ROCK]: SCISSORS,
        [PAPER]: ROCK,
        [SCISSORS]: PAPER
    };

    this.isInputValid = input => choices.includes(input);

    this.getRandomChoice = () => {
        const random = Math.floor(Math.random() * 3);
        return choices[random];
    };

    this.determineVictor = (selection_player1, selection_player2) => {
        const isValid_Input1 = this.isInputValid(selection_player1);
        const isValid_Input2 = this.isInputValid(selection_player2);
        
        if (isValid_Input1 && isValid_Input2) return {
            p1_victory: whatDoesThisBeat[selection_player1] === selection_player2,
            p2_victory: whatDoesThisBeat[selection_player2] === selection_player1
        };
        else throw new TypeError("Inputs were invalid");
    };
})();