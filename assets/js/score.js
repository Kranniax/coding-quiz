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

returnButtonEl.addEventListener("click", function (){
    location.href = "index.html";
});
viewScoresEl.addEventListener("click", function () {
  location.href = "highScores.html";
});

viewScores();