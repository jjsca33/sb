const btnChoice = document.querySelector("#btnChoiceContainer");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");

const btnResetContainer = document.querySelector("#btnResetContainer");
const btnReset = document.querySelector("#btnReset");

const scoreContainer = document.querySelector("#scoreContainer");
const roundsCnt = document.querySelector("#roundCnt");
const finalCnt = document.querySelector("#finalCnt");

const humanScore = 0;
const compScore = 0;
const finalScore = 0;
const roundCnt = 0;

function getCompChoice() {
    const answerKey = ["Rock", "Paper", "Scissor"];
    Math.floor(Math.random() * answerKey.length);
    return Math.floor(Math.random() * answerKey.length);
}

btnRock.addEventListener("click", () => {
    playRound("Rock");
});
btnPaper.addEventListener("click", () => {
    playRound("Paper");
});
btnScissor.addEventListener("click", () => {
    playRound("Scissor");
});

function playRound(humanChoice) {
    const winCon = {
        Rock: "Scissor",
        Paper: "Rock",
        Scissor: "Paper",
    };
    const compChoice = getCompChoice();

    compScore.textContent = "";
    humanScore.textContent = "";
    roundCnt.textContent = "";

    if (humanChoice === compChoice) {
        scoreContainer.textContent = `Its a tie. Player and Comp both chose ${humanChoice}`;
        roundCnt++;
    } else if (winCon[humanChoice] === compChoice) {
        scoreContainer.textContent = `Human wins. Player's choice ${humanChoice} beats ${compChoice}`;
        humanScore++;
        roundCnt++;
    } else {
        scoreContainer.textContent = `Comp wins. Comp's choice ${compChoice} beats ${humanChoice}`;
        compScore++;
        roundCnt++;
    }

    if (humanScore === 5 || compScore === 5) {
        //
    }
}
