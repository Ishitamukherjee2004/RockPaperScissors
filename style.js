let userScore = 0; 
let computerScore = 0; 

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let score = document.querySelector(".score");
let result = document.querySelector(".result>p");

const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const scissor = document.getElementById("scissor");

function wins(userChoice, computerChoice){
    console.log("WIN");
    userScore++;
    console.log("USER- "+userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML ="YOU WON!";
}
function loses(userChoice, computerChoice){
    console.log("LOST");
    computerScore++;
    console.log("Computer- "+computerScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "YOU LOST!";
}
function tie(userChoice, computerChoice){
    console.log("TIE");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "IT'S  A TIE!";
}

function game(userChoice){
    const compChoice = computerChoice();
    if(userChoice == "rock" && compChoice == "paper") loses(userChoice, computerChoice);
    else if(userChoice == "paper" && compChoice == "scissor") loses(userChoice, computerChoice);
    else if(userChoice == "scissor" && compChoice == "rock") loses(userChoice, computerChoice);
    else if(userChoice == "scissor" && compChoice == "paper") wins(userChoice, computerChoice);
    else if(userChoice == "paper" && compChoice =="rock") wins(userChoice, computerChoice);
    else if(userChoice == "rock" && compChoice == "scissor") wins(userChoice, computerChoice);
    else if(userChoice == compChoice) tie(userChoice, computerChoice);
}
game();
function computerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function main(){
    rock.addEventListener('click', function(){
        game("rock")
    })
    paper.addEventListener('click', function(){
        game("paper")
    })
    scissor.addEventListener('click', function(){
        game("scissor")
    })
}
main();