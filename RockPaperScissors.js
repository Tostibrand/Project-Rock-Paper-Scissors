// global variables that are set when the game (re)starts.
let lost = 0
let won = 0
let tie = 0
let round = 0


// link elements to a const for JS
const rock = document.querySelector(`#rockSelection`)
const paper = document.querySelector(`#paperSelection`)
const scissors = document.querySelector(`#scissorsSelection`)
const computerScore = document.querySelector(`#computerScore`)
const yourScore = document.querySelector(`#yourScore`)
const roundScore = document.querySelector(`#roundScore`)
const tieScore = document.querySelector(`#tieScore`)
const text = document.querySelector(`#text`)
const resetButton = document.querySelector(`#resetButton`)


// EVENT LISTENERS WHICH CALL PLAYROUND FUNCTION
rock.addEventListener(`click`, () => {playRound(`rock`)})
paper.addEventListener(`click`, () => {playRound(`paper`)})
scissors.addEventListener(`click`, () => {playRound(`scissors`)})
resetButton.addEventListener(`click`, () => {resetGame()})

// FUNCTION GETCOMPUTERCHOICE
// A function that will randomly get the computers choice
function getComputerChoice(){
    
    const rock = `rock`
    const paper = `paper`
    const scissors = `scissors`
    const number = Math.floor(Math.random()*3) + 1;
    
    if (number == 1){
        return rock
    } else if (number == 2) { 
        return paper
    } else {
        return scissors
    }
}

// FUNCTION RESET GAME
function resetGame(){
    lost = 0
    won = 0
    tie = 0
    round = 0
    text.textContent = `Let's Play!`
    roundScore.textContent = 0;
    yourScore.textContent = 0;
    computerScore.textContent = 0;
    tieScore.textContent = 0;

}
// FUNCTION PLAYROUND
// all different outcomes to the game. Each out come updates the game status in between rounds
function playRound(playerSelection, computerSelection = getComputerChoice()){
    const rock = `rock`
    const paper = `paper`
    const scissors = `scissors`

    if (won > lost && round == 5){
        text.textContent = `Game over, you won!`
    } else if (won < lost && round == 5){
        text.textContent = `Game over, you lost!`
    } else if (won == lost && round >= 5) {
        text.textContent =`Game over, it's a tie!`
    }else {
        
    if (playerSelection.toLowerCase() == computerSelection){
            tie++;
            round++;
            tieScore.textContent = tie;   
            roundScore.textContent = round;
            text.textContent = `It's a tie!`
            return;
    }
    else if(playerSelection.toLowerCase() == rock && computerSelection == paper){
            lost++;
            round++;            
            computerScore.textContent = lost;
            roundScore.textContent = round;
            text.textContent = `You lost!`                    
            return;
    }
    else if(playerSelection.toLowerCase() == paper && computerSelection == scissors){
          lost++;
          round++;          
          computerScore.textContent = lost;
          roundScore.textContent = round;
          text.textContent = `You lost!`
          return;
    }
    else if(playerSelection.toLowerCase() == scissors && computerSelection == rock){
          lost++;
          round++;         
          computerScore.textContent = lost; 
          roundScore.textContent = round;
          text.textContent = `You lost!`
          return;
    }
    else if(playerSelection.toLowerCase() == rock && computerSelection == scissors){
          won++;
          round++;         
          yourScore.textContent = won;
          roundScore.textContent = round;
          text.textContent = `You won!`
          return;
       
    }
    else if(playerSelection.toLowerCase() == scissors && computerSelection == paper){
          won++;
          round++;         
          yourScore.textContent = won;
          roundScore.textContent = round;
          text.textContent = `You won!`
          return;
    }
    else if(playerSelection.toLowerCase() == paper && computerSelection == rock){
            won++;
            round++;           
            yourScore.textContent = won;
            roundScore.textContent = round;
            text.textContent = `You won!`
            return;
    }
    }}
