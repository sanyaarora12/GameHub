var mode = "normal";
var square = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
var choice;
var player = 1;
var gameStatus = -1;
var character;
var validity;
var botMark;
var selectedDiv;
var random;
var githubIcon = "<i class='fab fa-github black'></i>";
var bugIcon = "<i class='fas fa-bug blue'></i>";
var circleIcon = "<i class='far fa-circle black'></i>";
var crossIcon = "<i class='fas fa-times-circle blue'></i>";

var dw = $('.square').width();
$('.square').css({
    'height': dw + 'px'
});

var iw = $('.square').width();
iw = iw - 30;
$('.square').css({
    'font-size': iw + 'px'
});

var pad = dw-iw;
$(".square i").css({
    'padding': pad + 'px'
});

var squares = $(".square");

$("#developer").on("click", function () {
    mode = "developer";
    player = 1;
    gameStatus = -1;
    square = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    $("#developer").addClass("selected");
    $("#normal").removeClass("selected");
    $(".blue-border i").remove();
    $("#player-one").append("<i class='fab fa-github sample black'></i>");
    $("#player-two").append("<i class='fas fa-bug sample blue'></i>");
    removeIcons();
    $("#player-one").addClass("selected");
    $("#player-two").removeClass("selected");
    $("#answer").text("");
});

$("#normal").on("click", function () {
    reset();
});

$("#reset").on("click", function(){
    reset();
});

function reset(){
    mode = "normal";
    player = 1;
    gameStatus = -1;
    square = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    $("#normal").addClass("selected");
    $("#developer").removeClass("selected");
    $(".blue-border i").remove();
    $("#player-one").append("<i class='far fa-circle sample black'></i>");
    $("#player-two").append("<i class='fas fa-times-circle sample blue'></i>");
    $("#player-one").addClass("selected");
    $("#player-two").removeClass("selected");
    removeIcons();
    square = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    $("#answer").text("");
};

for(let i = 0;i<squares.length;i++)
{
    squares[i].addEventListener("click", function()
    {
        if(gameStatus === -1)
        {
            $("#answer").text("");
            selectedDiv = $(this);
            runGame(i);
        }
        if(gameStatus ===-1 && validity!== 0)
        {
            changePlayer();
            $("#answer").text("Thinking");
            setTimeout(botTurn,1000);
            setTimeout(changePlayer,1000);
        }
    });
}

function botTurn()
{
    chooseCharacter();
    do{
        choice = botChoice();
    }
    while(square[choice] === "O" || square[choice] === "X" );
    botMark = choice - 1;
    selectedDiv = $(".square").eq(botMark);
    checkValidityAndMarkCharacter();
    if(validity)
    {
        $("#answer").text("");
        markSquare(botMark);

    gameStatus = checkForWin();
    checkForGameEnd();            
    }
}

function botChoice(){
    random = (Math.floor(Math.random() * 9) + 1);
    random = (Math.floor(Math.random() * 9) + 1);
    random = (Math.floor(Math.random() * 9) + 1);
    return random;
}

function chooseCharacter(){
    character = (player === 1) ? 'O' : 'X';
}

function checkValidityAndMarkCharacter(){
    validity = markBoard(character);
}

function markSquare(num)
{
    if(mode === "developer"){
        if(player == 1)
        selectedDiv.append(githubIcon);
        else if(player == 2)
        selectedDiv.append(bugIcon);
    }

    else if(mode === "normal"){
        if(player == 1)
    selectedDiv.append(circleIcon);
    else if(player == 2)
    selectedDiv.append(crossIcon);
    }
}

function checkForGameEnd(){
    if(gameStatus === 0)
    {
        $("#answer").text("GAME DRAW");
    }
    else if(gameStatus === 1)
    {
        $("#answer").text("Player " + player + " Wins");

        for(var j = 0; j < square.length; j++)
        {
            square[j] = character;
        }
    }
}

function runGame(num){
    chooseCharacter();
    choice = num + 1;
    checkValidityAndMarkCharacter();
    if(validity)
    {
        $("#answer").text("");
        markSquare(num);

    gameStatus = checkForWin();
    checkForGameEnd();            
    }
}

function changePlayer(){
    player = (player % 2) ? 2 : 1;
    $("#player-one").toggleClass("selected");
    $("#player-two").toggleClass("selected");
}

function removeIcons()
{
        $(".square i").remove();
}

function markBoard(mark)
{
    if (choice == 1 && square[1] == '1')
    {
        square[1] = mark;
        return 1;
    }
    else if (choice == 2 && square[2] == '2')
    {
        square[2] = mark;
        return 1;
    }

    else if (choice == 3 && square[3] == '3')
    {
        square[3] = mark;
        return 1;
    }

    else if (choice == 4 && square[4] == '4')
    {
        square[4] = mark;
        return 1;
    }

    else if (choice == 5 && square[5] == '5')
    {
        square[5] = mark;
        return 1;
    }

    else if (choice == 6 && square[6] == '6')
    {
        square[6] = mark;
        return 1;
    }

    else if (choice == 7 && square[7] == '7')
    {
        square[7] = mark;
        return 1;
    }

    else if (choice == 8 && square[8] == '8')
    {
        square[8] = mark;
        return 1;
    }
    else if (choice == 9 && square[9] == '9')
    {
        square[9] = mark;
        return 1;
    }

    else
    {
        $("#answer").text("INVALID MOVE");
        return 0;
    }
}

// O --> GAME IS OVER AND NO RESULT
// 1 --> GAME IS OVER WITH RESULT
// -1 --> GAME IS STILL IN PROGRESS
function checkForWin()
{
    var returnValue = 0;

    if (square[1] == square[2] && square[2] == square[3])
    {
        returnValue = 1;
    }
    else if (square[4] == square[5] && square[5] == square[6])
        returnValue = 1;

    else if (square[7] == square[8] && square[8] == square[9])
        returnValue = 1;

    else if (square[1] == square[4] && square[4] == square[7])
        returnValue = 1;

    else if (square[2] == square[5] && square[5] == square[8])
        returnValue = 1;

    else if (square[3] == square[6] && square[6] == square[9])
        returnValue = 1;

    else if (square[1] == square[5] && square[5] == square[9])
        returnValue = 1;

    else if (square[3] == square[5] && square[5] == square[7])
        returnValue = 1;

    else if (square[1] != '1' && square[2] != '2' && square[3] != '3' &&
        square[4] != '4' && square[5] != '5' && square[6] != '6' && square[7]
        != '7' && square[8] != '8' && square[9] != '9')
        returnValue = 0;
    else
        returnValue = -1;

    return returnValue;
}