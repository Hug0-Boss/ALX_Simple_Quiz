function checkAnswer() {
    // Function body
}
let correctAnswer = 4;

document.querySelector(name="quiz");


document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    // Retrieve the user's answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Define the correct answer
    let correctAnswer = "4";

    // Compare the user's answer with the correct answer
    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "No option selected.";
    }
}