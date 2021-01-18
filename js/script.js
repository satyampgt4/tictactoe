
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var n = 0;
var w = 0;
var level = 0;
var player = 0;
var mo = 1;

function play(inpu) {
    var z = "img" + inpu.id[4];
    inpu = document.getElementById(z);
    console.log(inpu.src);
    if (player == 1) {
        console.log(inpu.src);
        if (w != 0) {
            alert(`Game over plese Start a new game`);
        }
        else if (inpu.src == "https://satyampgt4.github.io/tictactoe/img/n.png") {
            inpu.src = "https://satyampgt4.github.io/tictactoe/img/x.png";
            var f = inpu.id[3]
            board[f] = 1;
            n++;
            w = check();
            if (w == 1) {
                setTimeout(won, 300);

            }
            else if (w == 2) {
                setTimeout(draw, 300);
            }
            else if (w == 0) {
                setTimeout(computer, 200);
                function computer() {
                    var g = move();
                    // console.log(g);
                    var i = "img" + g;
                    // console.log(i);
                    document.getElementById(i).src = "https://satyampgt4.github.io/tictactoe/img/o.png";
                }
                setTimeout(result, 200);

            }

        }

        else
            alert(" Please Select An Empty Box")
    }
    else {
        if (w != 0) {
            alert(`Game over plese Restart the game`);
        }
        // console.log(inpu.src);
        else if (inpu.src == "https://satyampgt4.github.io/tictactoe/img/n.png") {

            var f = inpu.id[3]

            n++;
            if (mo == 1) {
                inpu.src = "https://satyampgt4.github.io/tictactoe/img/x.png";
                mo = -1;
                board[f] = 1;
            }
            else {
                inpu.src = "https://satyampgt4.github.io/tictactoe/img/o.png";
                mo = 1;
                board[f] = -1;
            }
            w = check();
            if (w == 1) {
                setTimeout(player1, 300);


            }
            else if (w == -1) {
                setTimeout(player2, 300);

            }
            else if (w == 2) {

                setTimeout(draw, 300);

            }

        }

        else
            alert(" Please Select An Empty Box")

    }
}
