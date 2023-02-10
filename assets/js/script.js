var buttonEl = document.querySelector(".str-quiz-button");
var timerEl = document.querySelector(".timer-count");
var quizTitleEl = document.querySelector(".quiz-title h1");
var quizInfoEl = document.querySelector(".quiz-info p");
var quizInfoSection = document.querySelector(".quiz-info");
var quizSectionEl = document.querySelector("#quiz-section");
var initalFormEl = document.querySelector("#initial-form");
var initialsInput = document.querySelector(".input-initials");
var viewScoresEl = document.querySelector(".view-scores");
var scoreListEl = document.querySelector(".scores-list");
var highScoresEl = document.querySelector(".high-scores");
var countDownInterval;
var localHighScores = [];
var timerCountDown = 60;
var score = 0;
var quizQuestionIndex = 0;
var quizQuestions = [
  {
    question: "Javascript is an _______ language?",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the above",
    ],
    answer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both A and B", "None of the above"],
    answer: "Both A and B",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    options: ["const", "var", "let", "constant"],
    answer: "const",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert()", "None of the above"],
    answer: "stringify()",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    options: ["Node", "Vue", "React", "Cassandra"],
    answer: "Cassandra",
  },
];

var endQuiz = function () {
  clearInterval(countDownInterval);
  timerEl.textContent = "Times Up !";

  // TODO: After End Quiz
  quizTitleEl.textContent = "Your Final Quiz Score: " + score + " points.";
  quizInfoSection.innerHTML = "";

  // Showcase initials form
  initalFormEl.classList.remove("hide");

  initalFormEl.addEventListener("submit", saveScores);
};

var saveScores = function (event) {
  event.preventDefault();

  var initials = initialsInput.value.trim();

  if (!initials) {
    alert("Please enter your correct initials");
    return false;
  }

  var highScores = JSON.parse(localStorage.getItem("scores")) || [];

  // save user initials and score inside an object array.
  var userScore = {
    initials: initials,
    score: score,
  };

  // push new object into an object array.
  highScores.push(userScore);

  // store new updated object array inside localStorage.
  localStorage.setItem("scores", JSON.stringify(highScores));
  location.reload();
};
// var viewScores = function () {
//   var savedScores = JSON.parse(localStorage.getItem("scores")) || [];

//   savedScores.sort((a, b) => {
//     return b.score - a.score;
//   });

//   quizTitleEl.textContent = "High Scores";
//   quizInfoSection.innerHTML = "";
//   buttonEl.remove();

//   highScoresEl.classList.remove("hide");
//   scoreListEl.innerHTML = "";

//   for (var i = 0; i < savedScores.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.textContent =
//       savedScores[i].initials + " -- " + savedScores[i].score;
//     scoreListEl.appendChild(listItem);
//   }
// };

// compare the selected quiz answer.
var quizAnswer = function () {
  // console.log(event.target.value);
  console.log("The selected answer is: " + this.value);

  selectedAnswer = this.value;

  if (selectedAnswer === quizQuestions[quizQuestionIndex].answer) {
    score = score + 10;
    // console.log("Correct! | Current Score is: " + score);
  } else {
    console.log("You are wrong");
    timerCountDown = timerCountDown - 10;
  }
  quizQuestionIndex++;

  if (quizQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    showQuestions();
  }
};

// show quiz questions and their corresponding options.
var showQuestions = function () {
  quizInfoEl.remove();

  // locate quiz question within the array.
  var quizQuestion = quizQuestions[quizQuestionIndex];

  quizTitleEl.textContent = quizQuestion.question;

  // clear previous options
  quizInfoSection.innerHTML = "";

  var letters = ["a", "b", "c", "d"];

  // create quiz options.
  quizQuestion.options.forEach(function (element, i) {
    quizInfoSection.className = "options-container";
    var optionBTN = document.createElement("button");
    optionBTN.className = "option-style";
    optionBTN.setAttribute("value", element);
    optionBTN.textContent = letters[i] + ". " + element;
    optionBTN.addEventListener("click", quizAnswer);
    quizInfoSection.appendChild(optionBTN);
  });
};
// quiz countdown timer function.
var countdown = function () {
  countDownInterval = setInterval(function () {
    if (timerCountDown >= 0) {
      timerEl.textContent = timerCountDown + " secs";
      timerCountDown--;
    } else {
      endQuiz();
    }
  }, 1000);
};
// the initial start of the coding quiz.
var startQuiz = function () {
  buttonEl.remove();

  // start the timer countdown.
  countdown();
  // start the quiz questions.
  showQuestions();
};
viewScoresEl.addEventListener("click", function (){
  location.href = "highScores.html";
});
buttonEl.addEventListener("click", startQuiz);
// loadScores();
