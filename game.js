// Iteration 2: Generate 2 random number and display it on the screen
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let time = 5;
let score = 0;
function generateNumbers() {
  let num_1 = Math.round(Math.random() * 100);
  let num_2 = Math.round(Math.random() * 100);
  time = 5
  number1.innerText = num_1;
  number2.innerText = num_2;
}
 
generateNumbers()
// Iteration 3: Make the options button functional
 let greater_than = document.getElementById('greater-than')
 let equal_to = document.getElementById('equal-to')
 let lesser_than = document.getElementById('lesser-than')
// Iteration 4: Build a timer for the game
greater_than.addEventListener("click", function() {
    if (number1.innerText > number2.innerText) {
        score++;
        generateNumbers()
    } else {
        gameOver();
    }
});

equal_to.addEventListener("click", function() {
    if (number1.innerText === number2.innerText) {
        score++;
        generateNumbers()
    } else {
        gameOver();
    }
});

lesser_than.addEventListener("click", function() {
    if (number1.innerText < number2.innerText) {
        score++;
        generateNumbers()
    } else {
        gameOver();
    }
});




let intervalID = setInterval(function () {
    document.getElementById("timer").innerText = time
    if (time <= 0) {
        gameOver()
    }
    time--;
},1000);

function gameOver() {
    clearInterval(intervalID);
    localStorage.setItem("totalscore",score);
    location.href = './gameover.html'
}
