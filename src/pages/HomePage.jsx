 
import React, { Component,useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import './style.css';
import DisplayBoard from '../components/DisplayBoard'; 
function HomePage(){

    
    const [board, setBoard] = useState(["","","","","","","","",""]); 
    const [turn,setTurn] =  useState("X"); 
    const [won,setWon] =  useState(null); 

    function checkRow(index1,index2,index3){
        var box1 = board[index1];
        var box2 = board[index2];
        var box3 = board[index3];
        return ( box1 !=="" && box1===box2 && box2===box3 );
    }

    function checkIsWon(){ 
             var checkCol1 = checkRow(0,3,6);
             var checkRow1 = checkRow(0,1,2);
             var checkRow2 = checkRow(3,4,5);
             var checkRow3 = checkRow(6,7,8);
             var checkDiag1 = checkRow(0,4,8)
             var checkDiag2 = checkRow(2,4,6)
             var checkCol2 = checkRow(1,4,7)
             var checkCol3 = checkRow(2,5,8)

             let isWon = (true===checkCol3) || (true===checkCol2) ||
             (true===checkCol1) || (true===checkRow1) ||
             (true===checkRow2) || (true===checkRow3) ||
             (true===checkDiag1) || (true===checkDiag2);
    

      // todo: how to use this properly???
        if(isWon)
            {
                setWon(turn);
            };
    }
    
    function onClickCell(index){
        let cpyBoard = [ ... board];
        let nextTurn = (turn==="X")? "O" : "X";
        if(cpyBoard[index] === ''){
            cpyBoard[index] = nextTurn;
            setTurn(nextTurn);
            setBoard(cpyBoard);
        }
    }

    function refreshPage() {
        window.location.reload(false);
      }
   
    useEffect(()=>{ checkIsWon()},[board]);

    const wonAlert = ((won != null)?<Alert className="info alertBox">{turn} Won!</Alert> : null);
    const boardElement = (won?null : <DisplayBoard board={board} onClickCell={onClickCell} /> );
   return <div>
       <p> <h1>
   Tic Tac Toe
  </h1></p><p>
        <h4>
   By Shiri Rave
  </h4></p>
       <Container>{wonAlert}
  
   <div>{boardElement} </div>


   </Container>
   <div class="btnWrapper">
        
<Button  onClick={refreshPage} variant="reload">Start Over!
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z"/>
  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z"/>
</svg></Button>{' '}</div>
</div>
}

export default HomePage;