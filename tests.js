it;
describe("RockPaperScissors tests", function(){
    describe(".playRound() tests", function(){
        const choices = ["rock", "scissors", "paper"];
        choices.forEach(function(choice, i){
            const losingChoice = choices[(i + 1) % choices.length];
            it(`When player 1 chooses ${choice} and player 2 chooses ${losingChoice}, player 1 wins`, function(){
                const {p1_victory, p2_victory} = RockPaperScissors.playRound(choice, losingChoice);
                p1_victory.should.equal(true, "p1_victory");
                p2_victory.should.equal(false, "p2_victory");
            });
    
            it(`When player 2 chooses ${choice} and player 1 chooses ${losingChoice}, player 2 wins`, function(){
                const {p1_victory, p2_victory} = RockPaperScissors.playRound(losingChoice, choice);
                p1_victory.should.equal(false, "p1_victory");
                p2_victory.should.equal(true, "p2_victory");
            });
    
            it(`When both players choose ${choice}, neither wins`, function(){
                const {p1_victory, p2_victory} = RockPaperScissors.playRound(choice, choice);
                p1_victory.should.equal(false, "p1_victory");
                p2_victory.should.equal(false, "p2_victory");
            });
        });
    });

    describe(".getRandomChoice() tests", function(){
        it("Randomly returns 'rock', 'paper' or 'scissors'.", function(){
            const values = Array.from({length: 9}, _ => RockPaperScissors.getRandomChoice());
            values.should.include("rock");
            values.should.include("paper");
            values.should.include("scissors");
        });

        it("Returns no other values", function(){
            const values = Array.from({length: 9}, _ => RockPaperScissors.getRandomChoice());
            const filtered = values.filter(value => {
                value !== 'rock' && value !== 'scissors' && value !== 'paper';
            });
            filtered.should.be.empty;
        });
    });
});