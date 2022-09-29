let options = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const image = document.querySelector('.image')
image.style.cssText = 'scale: 0;';  
const audio = document.querySelector('audio')
// const imagelost = document.querySelector('.imagelost')
// imagelost.style.cssText = 'scale: 0;';  



const buttons = document.querySelectorAll('button')
const div = document.querySelector('.divs')
// let totalGames = 0;
let Yourscore = 0;
let Compscore = 0;

buttons.forEach(button => button.addEventListener('click', playRound))


function playRound(playerSelection, computerSelection=getComputerChoice()) {
    audio.volume = 0.5
    audio.currentTime = 0.35;
    audio.play()
    while (Yourscore <5 && Compscore <5 ) {
    playerSelection = this.className
    console.log(playerSelection)
    
    if (playerSelection === computerSelection) {    
        image.style.cssText = 'scale: 0;';
        div.textContent = `Draw! Play again! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return "Draw! Play again"
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      
        image.style.cssText = 'scale: 1;';
        Yourscore += 1;
        div.textContent = `You Won! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Won!'   
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
     
        image.style.cssText = 'scale: 0;';
        Compscore += 1;
        div.textContent = `You Lost! Play again! Your score: is ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Lost!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
     
        image.style.cssText = 'scale: 1;';
        Yourscore += 1;
        div.textContent = `You Won! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Won!' 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
     
        image.style.cssText = 'scale: 0;';
        Compscore += 1;
        div.textContent = `You Lost! Play again! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
     
        image.style.cssText = 'scale: 0;';
        Compscore += 1;
        div.textContent = `You Lost! Play again! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        
        image.style.cssText = 'scale: 1;';
        Yourscore += 1;
        div.textContent = `You Won! Your score is: ${Yourscore}
        Computer score is: ${Compscore}`
        return 'You Won!' 
    }
}   if (Yourscore > Compscore) alert(`You Won this game! 
Your Score is: ${Yourscore}`)
    else {
        alert(`You Lost this game! Computer Score is: ${Compscore}`)
    }
console.log(score)
}


// let score = 0;
// function game() {
//     for (let i = 0; i < 5; i++) {
//         if (playRound() === 'You Won!') {
//             score +=1;
//             div.textContent = `Your score is ${score}`
//         } else console.log('This round you Lost')
//         } const result = alert(score >= 3 ? 'You won game, congratulations!' : 'You lost :(');
//         return result   
//     }


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));