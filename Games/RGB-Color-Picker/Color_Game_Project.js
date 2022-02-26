var difficulty = 6;

var colors = generateRandomColors(difficulty);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var answer = document.querySelector("#answer");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  h1.style.backgroundColor = document.querySelector("body").background;
  difficulty = 3;
  colors = generateRandomColors(difficulty);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (i < difficulty) squares[i].style.backgroundColor = colors[i];
    else
      squares[i].style.backgroundColor = document.querySelector(
        "body"
      ).background;
  }
  answer.textContent = "";
  reset.textContent = "New Colors";
});

hard.addEventListener("click", function () {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  h1.style.backgroundColor = document.querySelector("body").background;
  difficulty = 6;
  colors = generateRandomColors(difficulty);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (i < difficulty) squares[i].style.backgroundColor = colors[i];
    else
      squares[i].style.backgroundColor = document.querySelector(
        "body"
      ).background;
  }
  answer.textContent = "";
  reset.textContent = "New Colors";
});

reset.addEventListener("click", function () {
  colors = generateRandomColors(difficulty);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < difficulty; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  answer.textContent = "";
  reset.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      for (var j = 0; j < difficulty; j++) {
        squares[j].style.backgroundColor = pickedColor;
        answer.textContent = "Correct!!!";
        h1.style.background = pickedColor;
        reset.textContent = "PLAY AGAIN?";
      }
    } else {
      this.style.backgroundColor = document.querySelector("body").background;
      answer.textContent = "Try Again!!!";
    }
  });
}

function pickColor() {
  //Random numer between 0(inclusive) and 5(inclusive)
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}