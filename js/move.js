
function move() {

    var x = win(-1, -1, 0);

    if (level>1 && x == -1) {
        x = win(1, 1, 0);
        
    }
    if (level>2 && x == -1) {
        x = win(-1, 0, 0);
    }
    if (x == -1) {
        x = Math.floor(Math.random() * 100) % 9;
        // console.log(x);
        while (board[x] != 0) {
            x = Math.floor(Math.random() * 100) % 9;
        }        
    }
    board[x] = -1;
        n++;
    return x;

}

 function check(){
     
     var flag=0;
     var winner;
     for(var i=0; i<3;i++)
     {
         if((board[0+(i*3)]!=0)
         &&(board[0+(i*3)]== board[1+(i*3)]) && (board[0+(i*3)]==board[2+(i*3)]))
         { winner= board[0+(i*3)];
          flag=1;

         }

         else if((board[0+i]!=0)
         &&(board[0+i]==board[3+i])&&(board[0+i]==board[6+i]))
         {winner = board[0+i];
         flag=1;
         }
     }

    if((board[0]!=0)
         &&(board[0]==board[8])&&(board[4]==board[8]))
         {winner= board[0];
         flag=1;
         }
    else if((board[2]!=0)
         &&(board[02]==board[4])&&(board[4]==board[6]))
         {winner=board[2];
         flag=1;
         }
    if(flag==1) // anyone won
    {
       return winner;
    }
    if(n==9)
    {
        w=2;
        return 2;
    }
    return 0; 

 }
 

 function win(g,h,e){
for(var i=0; i<3;i++){
         for(var j=0;j<3;j++){
          if((board[(j%3)+(i*3)]== g&& board[((1+j)%3)+(i*3)]== h&& board[((2+j)%3)+(i*3)]==e))
          {
             board[((2+j)%3)+(i*3)] =g;
             return ((2+j)%3)+(i*3);
          }
         }

        for(var j=0; j<9;j=j+3){
         if((board[(j%9)+i]==g && board[((j+3)%9)+i]==h&& board[((j+6)%9)+i]==e))
         {
            board[((j+6)%9)+i]=g;
            return ((j+6)%9)+i;
         }
        }
     }
for(var j=0; j<12;j=j+4){
    if((board[(0+j)%12]==g &&board[(4+j)%12]==h &&board[(8+j)%12]==e))
         {board[(8+j)%12]=g;
         return (8+j)%12;
         }
}
    if((board[(2)]==g &&board[(4)]== h&&board[(6)]==e))
         {board[(6)]=g;
         return 6;
         }
    if((board[(6)]==g &&board[(2)]==h &&board[(4)]==e))
         {board[(4)]=g;
         return 4;
         }
    if((board[(4)]==g &&board[(6)]==h &&board[(2)]==e))
         {board[(2)]=g;
         return 2;
         }



    return -1;
}
function draw(){
    alert(`It's a Draw`);
}
function player1 (){
    alert("Player 1 won the game");
}
function player2 (){
    alert("Player 2 won the game");
}
function won (){
    alert("You Won the game");
}
function lost (){
    alert("You Lost the game");
}
function result(){
    w =check();
    if (w == -1) {
        setTimeout(lost, 500);

    }
    else if (w == 2) {
        setTimeout(draw, 500);

    }
}