let options = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function playRound(playerSelection, computerSelection=getComputerChoice()) {
    playerSelection = prompt('Your turn')
    
    if (playerSelection === computerSelection) {    
        return "Draw! Play again"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won!'   
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lost!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won!'
    }
}

let score = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        if (playRound() === 'You Won!') {
            score +=1;
            console.log('This round: WON!')
        } else console.log('This round you Lost')
        } const result = score >= 3 ? 'You won game, congratulations!' : 'You lost :(';
        return result   
    }


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));