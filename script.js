// script.js
function checkAnswer() {
  let userAnswer = document.getElementById("quiz-answer").value.trim().toLowerCase();
  let resultText = document.getElementById("quiz-result");

  if (userAnswer === "paris") {
      resultText.textContent = "✅ Correct! Well done.";
      resultText.style.color = "green";
  } else {
      resultText.textContent = "❌ Incorrect. Try again!";
      resultText.style.color = "red";
  }
}
