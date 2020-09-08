var currentScore = 0;
var highScores = [];
var box = document.getElementById("jumbo");

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
      "String values must be enclosed within _____ when being assigned to variables?",
    answers: [
      { text: "quotes", correct: true },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: false },
      { text: "commas", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other Arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
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
    question:
      "A very useful tool during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "Terminal", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log()", correct: true },
    ],
  },
  {
    question:
      "Which of the following function of String object combines the text of two strings and returns a new string?",
    answers: [
      { text: "add()", correct: false },
      { text: "concat()", correct: true },
      { text: "merge()", correct: false },
      { text: "append()", correct: false },
    ],
  },
  {
    question:
      "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    answers: [
      { text: "last()", correct: false },
      { text: "append()", correct: false },
      { text: "push()", correct: true },
      { text: "put()", correct: false },
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

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
shuffleArray(questions);

function generateQuestion() {
  if (askedQuestionsNumber >= questions.length) {
    finalScore();
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

// I had to initialize this var outside the function so I could use it elsewhere
var timerInterval;
function timer() {
  var secondsLeft = 60;
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
      finalScore();
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
var leaderScores, scores;
// var highScores=[]
function finalScore() {
  clearInterval(timerInterval);
  questionText.style.display = "none";
  answerEl.style.display = "none";
  validationText.style.display = "none";
  leaderScores = document.createElement("h4");
  leaderScores.textContent = "High scores:";
  box.appendChild(leaderScores);
  scores = document.createElement("h5");
  var storedScores = JSON.parse(localStorage.getItem("highscores"));
  if (storedScores !== null) {
    highScores = storedScores;
  }

  var name = prompt("Enter your intials");
  // scores.textContent = `${name}: ${currentScore}`;
  // box.appendChild(scores);

  var userObject = {
    userInitials: name,
    finalScore: currentScore,
  };
  highScores.push(userObject);
  localStorage.setItem("highscores", JSON.stringify(highScores));
  retrieveLeaderboard();
}

function retrieveLeaderboard() {
  var leaderScores = document.createElement("h4");
  leaderScores = document.createElement("h4");
  leaderScores.textContent = "High scores:";
  box.appendChild(leaderScores);
  // leaderScores.textContent = "High Scores:";
  // scores.textContent = "";
  validationText.style.display = "none";
  questionText.setAttribute("style", "display:none");
  answerEl.setAttribute("style", "display:none");
  startBtn.setAttribute("style", "display:none");

  var storedScores = JSON.parse(localStorage.getItem("highscores"));
  if (storedScores !== null) {
    highScores = storedScores;
  }

  // box.removeChild(scores);

  for (i = 0; i < highScores.length; i++) {
    // highScores.sort();
    var people = document.createElement("h5");
    people.textContent = `${highScores[i].userInitials}: ${highScores[i].finalScore}`;
    box.appendChild(people);
  }

  // people.textContent = JSON.parse(localStorage.getItem("highscores"));
  // people.textContent = `${JSON.parse(
  //   localStorage.getItem("name")
  // )}: ${JSON.parse(localStorage.getItem("leaders"))}`;
  // box.appendChild(people);
}

lead.addEventListener("click", retrieveLeaderboard);
