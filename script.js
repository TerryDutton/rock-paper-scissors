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

    this.isInputValid = input => choices.includes(input);

    this.getRandomChoice = () => {
        const random = Math.floor(Math.random() * 3);
        return choices[random];
    };

    this.playRound = (selection_player1, selection_player2) => {
        const isValid_Input1 = this.isInputValid(selection_player1);
        const isValid_Input2 = this.isInputValid(selection_player2);
        
        if (isValid_Input1 && isValid_Input2) return {
            p1_victory: whatDoesThisBeat[selection_player1] === selection_player2,
            p2_victory: whatDoesThisBeat[selection_player2] === selection_player1
        };
        else throw new TypeError("Inputs were invalid: choices are " + choices);
    };
})();

const RPS_ConsoleGame = new (function(RPS){
    const getChoiceFromPlayer = function(player){
        while(true){
            let input = prompt(`Player ${player}, what do you choose?`);
            input = (input || "").toLowerCase();
            const isValid = RPS.isInputValid(input);
            if(!isValid) alert(`'${input}' is not a valid choice ):`);
            else return input;
        }
    };

    const getPlayerChoices = function(is2Player){
        const p1Choice = getChoiceFromPlayer(1);
        const p2Choice = is2Player ? getChoiceFromPlayer(2) : RPS.getRandomChoice();
        return {p1Choice, p2Choice};
    };

    const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

    const roundResultMessage = (winner, winningChoice, losingChoice) => {
        return `Player ${winner} wins! ${capitalize(winningChoice)} beats ${losingChoice}`;
    };

    const gameResultMessage = (winner, winningScore, losingScore) => {
        return `Player ${winner} wins ${winningScore} to ${losingScore}!`;
    };

    const getGameResultsMessage = function(score_p1, score_p2){
        if (score_p1 > score_p2) return gameResultMessage(1, score_p1, score_p2);
        if (score_p2 > score_p1) return gameResultMessage(2, score_p2, score_p1);
        return  `${score_p1} to ${score_p2}! It's a tie!`;
    };

    const play = function({is2Player = false, rounds = 5}){
        let score_p1 = 0;
        let score_p2 = 0; 

        for(let i = 1; i <= rounds; i++){
            const {p1Choice, p2Choice} = getPlayerChoices(is2Player);
            const {p1_victory, p2_victory} = RPS.playRound(p1Choice, p2Choice);
            
            score_p1 += p1_victory;
            score_p2 += p2_victory;
            
            if (p1_victory) console.log(roundResultMessage(1, p1Choice, p2Choice));
            else if (p2_victory) console.log(roundResultMessage(2, p2Choice, p1Choice));
            else console.log("It's a draw!");
        }

        const result = getGameResultsMessage(score_p1, score_p2);
        alert(result);
    };
})(RockPaperScissors);