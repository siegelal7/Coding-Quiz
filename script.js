// var questions = [
//   "Commonly used data types do NOT include:",
//   "The condition in an if/else statement is contained within _____?",
//   "In which HTML element tag do we put the JavaScript?",
//   "What is the correct syntax for referring to an external script called 'script.js'?",
//   "How do you write 'Hello World' in an alert box?",
//   "How do you create a function in JavaScript?",
//   "How do you call a function named 'myFunction'?",
//   "How to write an IF statement in JavaScript?",
//   "How does a FOR loop start?",
//   "What is the correct way to write a JavaScript array?",
// ];

const questions = [
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

// var answers = [
//   "alerts",
//   "{}",
//   "<script>",
//   "<script src='script.js'>",
//   "alert('Hello World')",
//   "function foo()",
//   "foo()",
//   "if (i==5)",
//   "for (i = 0; i <= 5; i++)",
//   "var colors = ['red', 'green', 'blue']",
// ];
// var incorrectAnswers = [
//   {
//     0: ["number", "string", "boolean"],
//     1: ["()", "<>", "%%"],
//     2: ["<html>", "<javaScript>", "<footer>"],
//     3: [
//       "<script href='script.js'>",
//       "<script type='script.js'>",
//       "<script name='script.js'>",
//     ],
//     4: [
//       "prompt('Hello World')",
//       "say('Hello World')",
//       "console.log('Hello World')",
//     ],
//     5: ["function=foo()", "var function foo()", "function:foo()"],
//     6: ["call function foo()", "call foo()", "function foo()"],
//     7: ["if i = 5", "if i == 5 then", "if i = 5 then"],
//     8: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i <= 5; i++)"],
//     9: [
//       "var colors = 'red', 'green', 'blue'",
//       "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
//       "var colors{'red', 'blue', 'green'}",
//     ],
//   },
// ];

var questionText = document.getElementById("question");
var answerBtn = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var testBtn = document.getElementById("test");
var testBtn2 = document.getElementById("test2");
var testBtn3 = document.getElementById("test3");
var testBtn4 = document.getElementById("test4");
// console.log(answerBtn.children);

// for (i = 0; i < answerBtn.length; i++) {
//   answerBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.open("https://www.espn.com");
//   });
// }

// questionText.textContent = questions[1];

var askedQuestions = [];
function generateQuestion() {
  var randomQuestionIndex = Math.floor(Math.random() * questions.length);
  if (askedQuestions.includes(randomQuestionIndex) === false) {
    askedQuestions.push(randomQuestionIndex);
    questionText.textContent = questions[randomQuestionIndex].question;
    // var currentQuestionIndex = questions.indexOf(
    //   questions[randomQuestionIndex]
    // );
    // var answer = answerBtn.children;
    // testBtn2.textContent = answers[currentQuestionIndex];
    // testBtn3.textContent = incorrectAnswers.toString(currentQuestionIndex);
  } else {
    // console.log("repeated");
    generateQuestion();
  }
}

// var currentQuestionIndex = generateQuestion();
// function generateAnswers(currentQuestionIndex) {
//   answers.childNodes.textContent = incorrectAnswers.currentQuestionIndex;
// }

function timer() {
  var secondsLeft = 75;
  // Create the countdown timer.
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //   speedRead();
      // TODO call show leaderboard function
    }
  }, 1000);
}
timer();

testBtn.addEventListener("click", generateQuestion);
