
var buttonEl = document.querySelector(".str-quiz-button");
var timerEl = document.querySelector(".timer-count");
var timeCountDown = 60;
var questions = [
  {
    question: "Javascript is an _______ language?",
    answer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answer: "Both A and B",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answer: "const",
  },
  {
    question: "What does the 'toLocateString()' method do in JS?",
    answer: "Returns a localized represenation of an object.",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    answer: "Cassandra",
  },
];

var count = function (){
    timeCountDown--;
    
};

var startQuiz = function (){
 

var countDownInterval = setInterval(count, 60000);

};



buttonEl.addEventListener("click", startQuiz);




