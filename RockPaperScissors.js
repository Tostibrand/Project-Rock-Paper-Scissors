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
// selectors
const selectionRock = document.querySelector(`#selectionRock`)
const selectionPaper = document.querySelector(`#selectionPaper`)
const selectionScissors = document.querySelector(`#selectionScissors`)
const selectionReset = document.querySelector(`#selectionReset`)
const youSelector = document.querySelector(`#youSelector`)
const computerSelector = document.querySelector(`#computerSelector`)

const computerSelectionIndicator = new Image(70, 100);
computerSelectionIndicator.src = "./images/computerSelector.png";


const playerSelectionIndicator = new Image(70, 100);
playerSelectionIndicator.src = "./images/youSelector.png";

youSelector.append(playerSelectionIndicator);
computerSelector.append(computerSelectionIndicator);



// EVENT LISTENERS WHICH CALL PLAYROUND FUNCTION
rock.addEventListener(`click`, () => {playRound(`rock`); selectionRock.append(playerSelectionIndicator);})
paper.addEventListener(`click`, () => {playRound(`paper`); selectionPaper.append(playerSelectionIndicator);})
scissors.addEventListener(`click`, () => {playRound(`scissors`); selectionScissors.append(playerSelectionIndicator);})
resetButton.addEventListener(`click`, () => {resetGame()})

// FUNCTION GETCOMPUTERCHOICE
// A function that will randomly get the computers choice
function getComputerChoice(){
    
    const rock = `rock`
    const paper = `paper`
    const scissors = `scissors`
    const number = Math.floor(Math.random()*3) + 1;
    
    if (number == 1){
        selectionRock.append(computerSelectionIndicator);
        return rock
    } else if (number == 2) { 
        selectionPaper.append(computerSelectionIndicator);
        return paper
    } else {
        selectionScissors.append(computerSelectionIndicator);
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

    youSelector.append(playerSelectionIndicator);
    computerSelector.append(computerSelectionIndicator);


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
    } else{

        
    if (playerSelection.toLowerCase() == computerSelection){
            tie++;
            round++;
            tieScore.textContent = tie;   
            roundScore.textContent = round;

            
            if (won > lost && round == 5){
                text.textContent = `Game over, you won!`
            } else if (won < lost && round == 5){
                text.textContent = `Game over, you lost!`
            } else if (won == lost && round >= 5) {
                text.textContent =`Game over, it's a tie!`
            }else {text.textContent = `It's a tie!`;
            return;
    }}
    else if(playerSelection.toLowerCase() == rock && computerSelection == paper){
            lost++;
            round++;            
            computerScore.textContent = lost;
            roundScore.textContent = round;
            
            if (won > lost && round == 5){
                text.textContent = `Game over, you won!`
            } else if (won < lost && round == 5){
                text.textContent = `Game over, you lost!`
            } else if (won == lost && round >= 5) {
                text.textContent =`Game over, it's a tie!`
            }else {text.textContent = `You lost!`;                 
            return;
    }}
    else if(playerSelection.toLowerCase() == paper && computerSelection == scissors){
          lost++;
          round++;          
          computerScore.textContent = lost;
          roundScore.textContent = round;
          if (won > lost && round == 5){
            text.textContent = `Game over, you won!`
        } else if (won < lost && round == 5){
            text.textContent = `Game over, you lost!`
        } else if (won == lost && round >= 5) {
            text.textContent =`Game over, it's a tie!`
        }else {
          text.textContent = `You lost!`
          return;
    }}
    else if(playerSelection.toLowerCase() == scissors && computerSelection == rock){
          lost++;
          round++;         
          computerScore.textContent = lost; 
          roundScore.textContent = round;
          if (won > lost && round == 5){
            text.textContent = `Game over, you won!`
        } else if (won < lost && round == 5){
            text.textContent = `Game over, you lost!`
        } else if (won == lost && round >= 5) {
            text.textContent =`Game over, it's a tie!`
        }else {
          text.textContent = `You lost!`
          return;
    }}
    else if(playerSelection.toLowerCase() == rock && computerSelection == scissors){
          won++;
          round++;         
          yourScore.textContent = won;
          roundScore.textContent = round;
          if (won > lost && round == 5){
            text.textContent = `Game over, you won!`
        } else if (won < lost && round == 5){
            text.textContent = `Game over, you lost!`
        } else if (won == lost && round >= 5) {
            text.textContent =`Game over, it's a tie!`
        }else {
          text.textContent = `You won!`
          return;
       
    }}
    else if(playerSelection.toLowerCase() == scissors && computerSelection == paper){
          won++;
          round++;         
          yourScore.textContent = won;
          roundScore.textContent = round;
          if (won > lost && round == 5){
            text.textContent = `Game over, you won!`
        } else if (won < lost && round == 5){
            text.textContent = `Game over, you lost!`
        } else if (won == lost && round >= 5) {
            text.textContent =`Game over, it's a tie!`
        }else {
          text.textContent = `You won!`
          return;
    }}
    else if(playerSelection.toLowerCase() == paper && computerSelection == rock){
            won++;
            round++;           
            yourScore.textContent = won;
            roundScore.textContent = round;
            text.textContent = `You won!`
            return;
    }
    }}
