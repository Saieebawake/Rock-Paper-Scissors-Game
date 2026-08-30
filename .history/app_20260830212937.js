let userScore = 0;
let compScore = 0;

let resetBtn = document.querySelector(".reset-btn");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
     
    if(userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was a Draw, Play Again!";
    msg.style.backgroundColor ="#081b31";
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor ="#081b31";
};

resetBtn.addEventListener("click", resetGame);