// console.log(`hello world`)

// A function that will randomly get the computers choice

// let getComputerChoice = Math.floor(Math.random()*3) + 1;

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

// function playRound, added 2 parameters. I set the output from the getComputerChoice function as the default value for computerSelection.
// no need to pass computerSelection manually anymore now! just leave second parameter blank.
function playRound(playerSelection, computerSelection = getComputerChoice()){
const rock = `rock`
const paper = `paper`
const scissors = `scissors`

    
if (playerSelection.toLowerCase() == computerSelection){
    return `tie`
}
else if(playerSelection.toLowerCase() == rock && computerSelection == paper){
    return `paper beats rock, you lost!`
}
else if(playerSelection.toLowerCase() == paper && computerSelection == scissors){
    return `scissors beats paper, you lose!`
}
else if(playerSelection.toLowerCase() == scissors && computerSelection == rock){
    return `rock beats scissors, you lost!`
}
else if(playerSelection.toLowerCase() == rock && computerSelection == scissors){
    return `rock beats scissors, you won`
}
else if(playerSelection.toLowerCase() == scissors && computerSelection == paper){
    return `scissors beats paper, you won`
}
else if(playerSelection.toLowerCase() == paper && computerSelection == rock){
    return `paper beats rock, you won`
}
}



