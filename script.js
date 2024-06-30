function randomizeAnswer() {
    return Math.floor(Math.random() * 8);
}

const answerBox = document.getElementById("answer");

function clearBall() {
    answerBox.textContent = "";
}

function getAnswer() {
    clearBall();
    let result = randomizeAnswer();
    if (result === 1) {
        answerBox.textContent = "Maybe";
    } else if (result === 2) {
        answerBox.textContent = "Nope";
    } else if (result === 3) {
        answerBox.textContent = "Probably";
    } else if (result === 4) {
        answerBox.textContent = "Try again later";
    } else if (result === 5) {
        answerBox.textContent = "You suck lmao";
    } else if (result === 6) {
        answerBox.textContent = "Without a doubt";
    } else if (result === 7) {
        answerBox.textContent = "Wouldn't bet on it";
    } else {
        answerBox.textContent = "This sounds like a manic episode";
    }
}

const chanceButton = document.querySelector(".button-49");
chanceButton.addEventListener("click", getAnswer);
