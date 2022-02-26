var mode = "normal";
var square = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
var choice;
var player = 1;
var gameStatus = -1;
var character;
var validity;

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
    document.querySelector("#answer").textContent = "";
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
    document.querySelector("#answer").textContent = "";
};

for(let i = 0;i<squares.length;i++)
{
    squares[i].addEventListener("click", function()
    {
        if(gameStatus === -1)
        {
            character = (player === 1) ? 'O' : 'X';
            choice = i + 1;
            validity = markBoard(character);
            if(validity)
            {
                document.querySelector("#answer").textContent = "";
            if(mode === "developer"){
                if(player == 1)
            $(this).append("<i class='fab fa-github black'></i>");
            else if(player == 2)
            $(this).append("<i class='fas fa-bug blue'></i>");
            }
    
            else if(mode === "normal"){
                if(player == 1)
            $(this).append("<i class='far fa-circle black'></i>");
            else if(player == 2)
            $(this).append("<i class='fas fa-times-circle blue'></i>");
            }
    
            gameStatus = checkForWin();
    
            if(gameStatus === 0)
            {
                document.querySelector("#answer").textContent = "GAME DRAW";
            }
            else if(gameStatus === 1)
            {
                document.querySelector("#answer").textContent = "Player " + player + " Wins" ;
            }
            changePlayer();
        }
        }
    });
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

    else if(gameStatus === 0)
    {
        document.querySelector("#answer").textContent = "GAME DRAW";
    }
    else
    {
        document.querySelector("#answer").textContent = "INVALID MOVE";
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