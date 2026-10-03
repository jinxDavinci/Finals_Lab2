function evaluateScore(score) {
  if (score >= 90 && score <= 100) {
    return { remark: "Excellent", cssClass: "excellent" };
  } else if (score >= 75 && score < 90) {
    return { remark: "Passed", cssClass: "passed" };
  } else if (score > 0 && score < 75) {
    return { remark: "Failed", cssClass: "failed" };
  } else {
    return { remark: "Invalid score", cssClass: "invalid" };
  }
}

function showResult(name, scoreText, remark, cssClass) {
  document.getElementById("resultName").textContent = "Name: " + name;
  document.getElementById("resultScore").textContent = "Score: " + scoreText;

  const remarkEl = document.getElementById("resultRemark");
  remarkEl.textContent = remark;
  remarkEl.className = "remark " + cssClass;

  document.getElementById("result").classList.remove("hidden");
}

function showError(message) {
  document.getElementById("resultName").textContent = "";
  document.getElementById("resultScore").textContent = "";

  const remarkEl = document.getElementById("resultRemark");
  remarkEl.textContent = message;
  remarkEl.className = "remark invalid";

  document.getElementById("result").classList.remove("hidden");
}

function startProgram() {
  alert("Welcome to the Score Evaluator!");

  let name = prompt("Please enter your name:");

  if (name === null || name.trim() === "") {
    alert("Invalid input: Name cannot be empty.");
    showError("Invalid input: no name entered.");
    return;
  }
  name = name.trim();

  let scoreInput = prompt("Please enter your score (1-100):");

  if (scoreInput === null || scoreInput.trim() === "") {
    alert("Invalid input: Score cannot be empty.");
    showError("Invalid input: no score entered.");
    return;
  }
  scoreInput = scoreInput.trim();

  const score = Number(scoreInput);
  if (isNaN(score)) {
    alert("Invalid input: Score must be a number.");
    showError("Invalid score: not a number.");
    return;
  }

  // Zero input
  if (score === 0) {
    alert("Invalid input: Score cannot be zero.");
    showError("Invalid score: zero is not allowed.");
    return;
  }

  // Negative input
  if (score < 0) {
    alert("Invalid input: Score cannot be negative.");
    showError("Invalid score: negative number.");
    return;
  }

  // Score beyond 100
  if (score > 100) {
    alert("Invalid input: Score cannot be more than 100.");
    showError("Invalid score: more than 100.");
    return;
  }

  
  const proceed = confirm("Hi " + name + ", do you want to continue and see your result?");
  if (!proceed) {
    alert("You cancelled. No result will be shown.");
    showError("Cancelled by user.");
    return;
  }

  const result = evaluateScore(score);
  showResult(name, score, result.remark, result.cssClass);
}

document.getElementById("startBtn").addEventListener("click", startProgram);
