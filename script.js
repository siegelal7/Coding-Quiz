var currentScore = 0;

var questions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "numbers", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
    ],
  },
  {
    question:
      "The condition in an if/else statement is contained within _____?",
    answers: [
      { text: "()", correct: true },
      { text: "%%", correct: false },
      { text: "<>", correct: false },
      { text: "{}", correct: false },
    ],
  },
  {
    question: "In which HTML element tag do we put the JavaScript?",
    answers: [
      { text: "<body>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<link>", correct: false },
    ],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: [
      { text: "<script href='script.js'>", correct: false },
      { text: "<link src='script.js'>", correct: false },
      { text: "<script src='script.js'>", correct: true },
      { text: "<javascript src='script.js>", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alert('Hello World')", correct: true },
      { text: "yell('Hello World')", correct: false },
      { text: "alertUser('Hello World')", correct: false },
      { text: "console.log('Hello World')", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function foo()", correct: true },
      { text: "function=foo()", correct: false },
      { text: "var function foo()", correct: false },
      { text: "function:foo()", correct: false },
    ],
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: [
      { text: "if (i>=4)", correct: true },
      { text: "if i = 5", correct: false },
      { text: "if {i==5}", correct: false },
      { text: "if: (i>=4)", correct: false },
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for (i = 0; i <= 5; i++)", correct: true },
      { text: "for i = 1 to 5", correct: false },
      { text: "for (i = 0; i <= 5)", correct: false },
      { text: "for (i <= 5; i++)", correct: false },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      { text: "var colors = ['red', 'green', 'blue']", correct: true },
      { text: "var colors = 'red', 'green', 'blue'", correct: false },
      {
        text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        correct: false,
      },
      { text: "var colors{'red', 'blue', 'green'}", correct: false },
    ],
  },
];

var questionText = document.getElementById("question");
var answerEl = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var score = document.getElementById("highscores");
var lead = document.getElementById("leaders");
var validationText = document.getElementById("validation");

startBtn.addEventListener("click", generateQuestion);

// var askedQuestions = [];
var askedQuestionsNumber = 0;
// currentScore = 0;
function generateQuestion() {
  if (askedQuestionsNumber >= questions.length) {
    displayLeaderboard();
  } else {
    questionText.textContent = questions[askedQuestionsNumber].question;
    // console.log(randomQuestionIndex);
    answerEl.textContent = "";

    for (i = 0; i < questions[askedQuestionsNumber].answers.length; i++) {
      var button = document.createElement("button");
      button.classList.add("button");
      // console.log(i);
      if (questions[askedQuestionsNumber].answers[i].correct) {
        button.setAttribute("correct", true);
      }
      button.textContent = questions[askedQuestionsNumber].answers[i].text;

      for (j = 0; j < button.length; j++) {
        button[j].addEventListener("click", handleClick);
      }

      answerEl.appendChild(button);
    }
    askedQuestionsNumber++;
  }
}

// TODO fix this nonsense
function handleClick(event) {
  event.preventDefault();

  if (event.target.matches("button")) {
    event.preventDefault();
    // currentId = parseInt(event.target.parentElement.id);
    if (event.target.getAttribute("correct") == "true") {
      // console.log("correct");
      validationText.textContent = "Correct!";
      currentScore += 10;
      score.textContent = `${currentScore} points`;
    } else {
      validationText.textContent = "Wrong!";
    }

    generateQuestion();
  }
}
var timerInterval;
function timer() {
  var secondsLeft = 35;
  // Create the countdown timer.
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.lastChild);
      }
      questionText.textContent = "Highscores:";
      // console.log(currentScore);
      displayLeaderboard();
    }
  }, 1000);
}
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  answerEl.style.display = "block";
  startBtn.style.display = "none";
  timer();
  generateQuestion();
});
// timer();

answerEl.addEventListener("click", handleClick);
answerEl.style.display = "none";
var box = document.getElementById("jumbo");

// TODO
function displayLeaderboard() {
  clearInterval(timerInterval);
  questionText.style.display = "none";
  answerEl.style.display = "none";
  validationText.style.display = "none";
  var leaderScores = document.createElement("h4");
  leaderScores.textContent = "High scores:";
  box.appendChild(leaderScores);
  var scores = document.createElement("h5");
  name = prompt("Enter your intials");
  scores.textContent = `${name}: ${currentScore}`;
  box.appendChild(scores);
  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("leaders", JSON.stringify(currentScore));
}

function retrieveLeaderboard() {
  // scores.setAttribute("style", "display:none");
  // score.setAttribute("style", "display:none");
  validationText.style.display = "none";
  questionText.setAttribute("style", "display:none");
  answerEl.setAttribute("style", "display:none");
  startBtn.setAttribute("style", "display:none");
  // box.removeChild(scores);
  var people = document.createElement("h5");
  people.textContent = `${JSON.parse(
    localStorage.getItem("name")
  )}: ${JSON.parse(localStorage.getItem("leaders"))}`;
  box.appendChild(people);
}

lead.addEventListener("click", retrieveLeaderboard);
