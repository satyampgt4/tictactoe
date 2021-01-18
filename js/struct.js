function singleplay()
{
    player =1;
    document.getElementById("player").style.display= "none";
    document.getElementById("level").style.display = "flex";
}
function multiplay()
{
    player =2;
    document.getElementById("player").style.display= "none";
    document.getElementById("game-place").style.display = "flex";
}


function begin(){
    level =1;
    document.getElementById("level").style.display = "none";
    document.getElementById("game-place").style.display = "flex";
}
function inter(){
    level =2;
    document.getElementById("level").style.display = "none";
    document.getElementById("game-place").style.display = "flex";
}
function advence(){
    level =3;
    document.getElementById("level").style.display = "none";
    document.getElementById("game-place").style.display = "flex";
    g = move();
    var i = "img" + g;
    document.getElementById(i).src = "https://satyampgt4.github.io/tictactoe/img/o.png";
    
}
function back_restart(){
    
    document.getElementById("img0").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img1").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img2").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img3").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img4").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img5").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img6").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img7").src = "https://satyampgt4.github.io/tictactoe/img/n.png";
    document.getElementById("img8").src = "https://satyampgt4.github.io/tictactoe/img/n.png";


    document.getElementById("player").style.display= "flex";
    document.getElementById("game-place").style.display = "none";
    
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    n = 0;
    w = 0;
    level = 0;
    player = 0;
    mo = 1;
    
}
