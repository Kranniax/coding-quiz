var buttonEl = document.querySelector(".str-quiz-button");
var timerEl = document.querySelector(".timer-count");
var quizTitleEl = document.querySelector(".quiz-title h1");
var quizInfoEl = document.querySelector(".quiz-info p");
var quizInfoSection = document.querySelector(".quiz-info");
var timerCountDown = 60;
var finalScore;
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
    options: ["stringify", "parse()", "convert()", "None of the above"],
    answer: "stringify()",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    options: ["Node", "Vue", "React", "Cassandra"],
    answer: "Cassandra",
  },
];
// compare the selected quiz answer.
var quizAnswer = function (event) {
  console.log(event.target.value);

  selectedAnswer = event.target.value;

  if (selectedAnswer === quizQuestions[quizQuestionIndex].answer) {
    finalScore = finalScore + 10;
    quizQuestionIndex++;
    showQuestions();
  } else {
    console.log("You are wrong");
    quizQuestionIndex++;
    timerCountDown = timerCountDown - 10;
    showQuestions();
  }
};

// show quiz questions and their corresponding options.
var showQuestions = function () {
  quizInfoEl.remove();

  // locate quiz question within the array.
  var quizQuestion = quizQuestions[quizQuestionIndex];

  
  quizTitleEl.textContent = quizQuestion.question;

  // create quiz options.
  quizQuestion.options.forEach(function (element) {
    var optionBTN = document.createElement("button");
    optionBTN.className = "option-style";
    optionBTN.setAttribute("value", element);
    optionBTN.textContent = element;
    optionBTN.addEventListener("click", quizAnswer);
    quizInfoSection.appendChild(optionBTN);
  });
};
// quiz countdown timer function.
var countdown = function () {
  var countDownInterval = setInterval(function () {
    timerEl.textContent = timerCountDown + " secs";
    timerCountDown--;

    if (timerCountDown === 0) {
      timerEl.textContent = "Times Up !";
      clearInterval(countDownInterval);
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

buttonEl.addEventListener("click", startQuiz);
