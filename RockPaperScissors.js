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

// function playRound, added 2 parameters. defined getComputerChoice as the default option for computerSelection
function playRound(playerSelection, computerSelection = getComputerChoice()){
const rock = `rock`
const paper = `paper`
const scissors = `scissors`
    
// if playerSelection == computerSelection
// return `tie`
if (playerSelection == computerSelection){
    return `tie`
}
// if playerSelection is `rock` and computerSelection is `paper`
// return `you lost`
else if(playerSelection == rock && computerSelection == paper){
    return `paper beats rock, you lost!`
}
// if playerSelection is `paper` and computerSelection is `scissors`
// return `you lost`
else if(playerSelection == paper && computerSelection == scissors){
    return `scissors beats paper, you lose!`
}
// if playerSelection is `scissors` and computerSelection is `rock`
// return `you lost`
else if(playerSelection == scissors && computerSelection == rock){
    return `rock beats scissors, you lost!`
}
// if playerSelection is `rock` and computerSelection is `scissors`
// return `you won`
else if(playerSelection == rock && computerSelection == scissors){
    return `rock beats scissors, you won`
}
// if playerSelection is `scissors` and computerSelection is `paper`
// return `you won`
else if(playerSelection == scissors && computerSelection == paper){
    return `scissors beats paper, you won`
}
// if playerSelection is `paper` and computerSelection is `rock`
// return `you won`
else if(playerSelection == paper && computerSelection == rock){
    return `paper beats rock, you won`
}
}



