var returnButtonEl = document.querySelector(".return-btn");
var scoreListEl = document.querySelector(".scores-list");
var viewScoresEl = document.querySelector(".view-scores");

var viewScores = function () {
  var savedScores = JSON.parse(localStorage.getItem("scores")) || [];

  savedScores.sort((a, b) => {
    return b.score - a.score;
  });

  for (var i = 0; i < savedScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent =
      savedScores[i].initials + " -- " + savedScores[i].score;
    scoreListEl.appendChild(listItem);
  }
};

var clearHighScores = function (){
  localStorage.removeItem("scores");
  location.reload();
};
viewScores();
document.querySelector(".clr-scores").onclick = clearHighScores;