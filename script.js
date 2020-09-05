var questions = [
  "Commonly used data types do NOT include:",
  "The condition in an if/else statement is contained within _____?",
  "In which HTML element tag do we put the JavaScript?",
  "What is the correct syntax for referring to an external script called 'script.js'?",
  "How do you write 'Hello World' in an alert box?",
  "How do you create a function in JavaScript?",
  "How do you call a function named 'myFunction'?",
  "How to write an IF statement in JavaScript?",
  "How does a FOR loop start?",
  "What is the correct way to write a JavaScript array?",
];
var answers = [
  "alerts",
  "{}",
  "<script>",
  "<script src='script.js'>",
  "alert('Hello World')",
  "function foo()",
  "foo()",
  "if (i==5)",
  "for (i = 0; i <= 5; i++)",
  "var colors = ['red', 'green', 'blue']",
];
var incorrectAnswers = [
  {
    questionOne: ["number", "string", "boolean"],
    questionTwo: ["()", "<>", "%%"],
    questionThree: ["<html>", "<javaScript>", "<footer>"],
    questionFour: [
      "<script href='script.js'>",
      "<script type='script.js'>",
      "<script name='script.js'>",
    ],
    questionFive: [
      "prompt('Hello World')",
      "say('Hello World')",
      "console.log('Hello World')",
    ],
    questionSix: ["function=foo()", "var function foo()", "function:foo()"],
    questionSeven: ["call function foo()", "call foo()", "function foo()"],
    questionEight: ["if i = 5", "if i == 5 then", "if i = 5 then"],
    questionNine: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
    ],
    questionTen: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors{'red', 'blue', 'green'}",
    ],
  },
];

var questionText = document.getElementById("question");
// var answerBtn = document.getElementById("answers");
// questionText.textContent = questions[1];
var timerEl = document.getElementById("timer");

// for (i = 0; i < answerBtn.length; i++) {
//   answerBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.open("https://www.espn.com");
//   });
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
