const getRoundHandler = function({roundResultsDiv, finalResultsDiv}){
    
    return function onRoundComplete(results){
        const {gameIsOver} = results;
        giveRoundResults(results);
        if (gameIsOver) giveFinalResults(results);
    };

    function giveRoundResults(results){
        const roundResult = createNodeWithInnerText('h3', getRoundResultMessage(results));
        const scores = createNodeWithInnerText('div', getScoresMessage(results));
        attachElements(roundResultsDiv, [roundResult, scores]);
    }

    function giveFinalResults(results){
        const message = getFinalResultMessage(results);
        const node = document.createElement('h1');
        node.innerText = message;
        finalResultsDiv.appendChild(node);
    }

    function createNodeWithInnerText(tag, content){
        const node = document.createElement(tag);
        node.innerText = content;
        return node;
    }

    function attachElements(parent, elements){
        const wrapper = document.createElement('div');
        elements.forEach(function(element){
            wrapper.appendChild(element);
        });
        parent.appendChild(wrapper);
    }

    function getRoundResultMessage(results){
        const {
            p1WinsThisRound,
            p2WinsThisRound,
            p1ChoiceThisRound,
            p2ChoiceThisRound
        } = results;

        if (!p1WinsThisRound && !p2WinsThisRound) return `Both players picked ${p1ChoiceThisRound}! It's a draw!`;
        
        const winner = p1WinsThisRound ? 1 : 2;
        const winningChoice = p1WinsThisRound ? p1ChoiceThisRound : p2ChoiceThisRound;
        const losingChoice  = p1WinsThisRound ? p2ChoiceThisRound : p1ChoiceThisRound;
        return `Player ${winner} wins! ${titleize(winningChoice)} beats ${losingChoice}!`;
    }

    function titleize(word){
        return word[0].toUpperCase() + word.slice(1);
    }

    function getScoresMessage(results){
        const {p1Score, p2Score} = results;
        return `The score is ${p1Score}-${p2Score}!`;
    }

    function getFinalResultMessage(results){
        const {p1Score, p2Score} = results;
        
        const winner = p1Score > p2Score ? 1 : 2;
        const winningScore = Math.max(p1Score, p2Score);
        const losingScore = Math.min(p1Score, p2Score);
        return `Player ${winner} wins with ${winningScore} points to ${losingScore}!`;
    }
};