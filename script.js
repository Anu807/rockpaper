let userWinCount=0;
let computerWinCount=0;


function getComputerChoice() {
    let random= Math.floor(Math.random() * 3) +1;
    if (random == 1){
       return 'rock';
    } else if (random == 2){
        return 'paper';
    } else {
        return 'scissor';
    }
 } 

 function playRound (playerSelection,computerSelection) {
    if(playerSelection =='rock' && computerSelection == 'scissor'|| 
    playerSelection == 'paper' && computerSelection == 'rock'||
    playerSelection =='scissor' && computerSelection =='paper'){
    userWinCount++;
    return "You win! Congratulations";
    } else if (playerSelection == computerSelection) {
        return "It's a tie! Better luck next time!";
    } else {
        computerWinCount++;
        return "You lose, computer wins the battle! Better luck next time!";
    }
 }
 
 function playGame(){
    let i;
    for (i=0;i<5;i++){
    let playerSelection = prompt("Enter your choice:");
    playerSelection = playerSelection.toLowerCase;
    let computerSelection = getComputerChoice();
    let result =playRound(playerSelection,computerSelection);
    console.log(result);
    
    }  
    
   if (userWinCount>=3){
    console.log("You won the game!Hurray!!");
   } else if (userWinCount==computerWinCount){
    console.log("You tied with the computer! Sorry! Better luck next time!");
   } else if (userWinCount> computerWinCount){
    console.log("You won the game! Now enjoy your victory!");
   } else {
    console.log ("The computer has won! Better luck next time! Fighting!");
   }   
 }

 playGame();