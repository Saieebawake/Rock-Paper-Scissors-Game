let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const  genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a Draw.");
    msg.innerText = "Game was a Draw.";
    msg.style.backgroundColor =  "#081";
};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor =  "green";
    }
    else {
        console.log("You Lose.");
        msg.innerText = "You Lose.";
        msg.style.backgroundColor =  "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false: true;
        }
        else {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked -", userChoice);
        playGame(userChoice);
    });
});

