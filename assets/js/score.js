var returnButtonEl = document.querySelector(".return-btn");
var scoreListEl = document.querySelector(".scores-list");
var viewScoresEl = document.querySelector(".view-scores");

// A function to load scores when "View Scores" header is clicked.
var viewScores = function () {
  // Check for local storage for an already existing list. If no list then set to
  // empty array.
  var savedScores = JSON.parse(localStorage.getItem("scores")) || [];

  // sort array based on who has the highest score. (descending order)
  savedScores.sort((a, b) => {
    return b.score - a.score;
  });
  // create list of highscores stored within the localStorage API.
  for (var i = 0; i < savedScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent =
      savedScores[i].initials + " -- " + savedScores[i].score;
    scoreListEl.appendChild(listItem);
  }
};
// a clear all function to remove all highscores saved within localStorage.
var clearHighScores = function (){
  localStorage.removeItem("scores");
  location.reload();
};
viewScores();
document.querySelector(".clr-scores").onclick = clearHighScores;