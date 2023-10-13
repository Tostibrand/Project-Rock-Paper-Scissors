// global variables that are set when the game (re)starts.
let lost = 0
let won = 0
let tie = 0
let round = 0

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



// FUNCTION PLAYROUND
// all different outcomes to the game. Each out come updates the game status in between rounds
function playRound(playerSelection = prompt(`Rock, paper or scissors?`), computerSelection = getComputerChoice()){
const rock = `rock`
const paper = `paper`
const scissors = `scissors`
    
if (playerSelection.toLowerCase() == computerSelection){
        tie++;
        round++;
        console.log(`It's a tie!`);
        console.log(`wins:`+ won);
        console.log(`losses:`+ lost);
        console.log(`ties:`+ tie);
        console.log(`round:`+ round)
        return;
}
else if(playerSelection.toLowerCase() == rock && computerSelection == paper){
        lost++;
        round++;
        console.log(`paper beats rock, you lost:`);
        console.log(`wins:`+ won);
        console.log(`losses:`+ lost);
        console.log(`ties:`+ tie);
        console.log(`round:`+ round)
        return;
}
else if(playerSelection.toLowerCase() == paper && computerSelection == scissors){
      lost++;
      round++;
      console.log(`paper beats rock, you lost:`);
      console.log(`wins:`+ won);
      console.log(`losses:`+ lost);
      console.log(`ties:`+ tie);
      console.log(`round:`+ round)
      return;
}
else if(playerSelection.toLowerCase() == scissors && computerSelection == rock){
      lost++;
      round++;
      console.log(`rock beats scissors, you lost:`);
      console.log(`wins:`+ won);
      console.log(`losses:`+ lost);
      console.log(`ties:`+ tie);
      console.log(`round:`+ round)
      return;
}
else if(playerSelection.toLowerCase() == rock && computerSelection == scissors){
      won++;
      round++;
      console.log(`rock beats scissors, you won:`);
      console.log(`wins:`+ won);
      console.log(`losses:`+ lost);
      console.log(`ties:`+ tie);
      console.log(`round:`+ round)
      return;
   
}
else if(playerSelection.toLowerCase() == scissors && computerSelection == paper){
      won++;
      round++;
      console.log(`You won! scissors beats paper:`);
      console.log(`wins:`+ won);
      console.log(`losses:`+ lost);
      console.log(`ties:`+ tie);
      console.log(`round:`+ round)
      return;
}
else if(playerSelection.toLowerCase() == paper && computerSelection == rock){
        won++;
        round++;
        console.log(`paper beats rock, you won`);
        console.log(`wins:`+ won);
        console.log(`losses:`+ lost);
        console.log(`ties:`+ tie);
        console.log(`round:`+ round)
        return;
}
}

// FUNCTION GAME
function game(){
// defines how many round there will be
for(i = 0; i < 5; i++){
    playRound()
    }
// evaluates the state of the game after 5 rounds and determines a winner
if (won > lost){
    console.log(`Game over, you won!`)
} else if (won < lost){
    console.log(`Game over, you lost!`)
} else {
    console.log(`Game over, it's a tie!`)
}
// resets the game after the loop is finished
{
    won = 0;
    lost = 0;
    ties = 0;
    round = 0;
}
}


