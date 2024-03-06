// Iteration 5: Store the player score and display it on the game over screen
 let score_board = document.getElementById('score-board');

 let totalscore = localStorage.getItem('totalscore');

score_board.innerText = totalscore;

var playagain = document.getElementById('play-again-button');
playagain.onclick = function(){
    location.href = "game.html"
}
