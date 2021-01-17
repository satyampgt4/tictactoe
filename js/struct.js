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
    location.reload();
}
