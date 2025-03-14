let userScore=0;
let computerScore=0;

const Choices = document.querySelectorAll(".Choice");
const msg =document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const computerScorepara =document.querySelector("#computer-score");

const genComputerChoice =() => {
    const options=["rock", "paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame =() => {
    msg.innerText = "game was draw.play gain!";
    msg.style.backgroundColor= "#081b31";

    // Check for overall winner (first to 5)
    if (userScore === 5) {
        msg.innerText = "🎉 Congratulations! WINNER! 🏆";
        disableGame();
    } else if (computerScore === 5) {
        msg.innerText = "💀 Game Over! The computer wins. Try again!";
        disableGame();
        const disableGame = () => {
            Choices.forEach(choice => {
                choice.style.pointerEvents = "none"; // Disable clicking
            });
        };
    }
};
const showWinner =(userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`you win! your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor= "green";
} else {
    computerScore++;
    computerScorepara.innerText= computerScore;
    msg.innerText=`you lose!. ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor= "red";
}
};



const palyGame = (userChoice) => {
    //generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice ===computerChoice) {
        //draw game
        drawgame();
    }
    else{
        let userWin =true;
        if(userChoice ==="rock") {
            //scissors,paper
            userWin=computerChoice ==="paper" ? false:true;
        }else if(userChoice === "paper") {
            //rock,scissors
            userWin =computerChoice === "scissors" ? false:true;
        }else{
            //rock,paper
            userWin=computerChoice ==="rock" ? false:true;
          }
          showWinner(userWin,userChoice,computerChoice);
        }
    };
        Choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice =choice.getAttribute("id");
            palyGame(userChoice);
        });
    });

