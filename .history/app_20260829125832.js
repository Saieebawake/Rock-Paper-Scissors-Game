let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const  genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = () => {
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", )
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked -", userChoice);
        playGame(userChoice);
    });
});

