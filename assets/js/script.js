var buttonEl = document.querySelector(".str-quiz-button");
var timerEl = document.querySelector(".timer-count");
var quizTitleEl = document.querySelector(".quiz-title h1");
var quizInfoEl = document.querySelector(".quiz-info p");
var quizInfoSection = document.querySelector(".quiz-info");
var countDownInterval;
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
    options: ["stringify", "parse()", "convert()", "None of the above"],
    answer: "stringify()",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    options: ["Node", "Vue", "React", "Cassandra"],
    answer: "Cassandra",
  },
];

var endQuiz = function () {
  console.log("Quiz has ended!");
};
// compare the selected quiz answer.
var quizAnswer = function () {
  // console.log(event.target.value);
  console.log("The selected answer is: " + this.value);

  selectedAnswer = this.value;

  if (selectedAnswer === quizQuestions[quizQuestionIndex].answer) {
    score = score + 10;
    console.log("Correct! | Current Score is: " + score);
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
    timerEl.textContent = timerCountDown + " secs";
    timerCountDown--;

    if (timerCountDown === 0) {
      timerEl.textContent = "Times Up !";
      endquiz();
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
