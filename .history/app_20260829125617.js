let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const  genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random())
}

const playGame = () => {
    console.log("User Choice = ",userChoice);
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked -", userChoice);
        playGame(userChoice);
    });
});

