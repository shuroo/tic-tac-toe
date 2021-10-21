 
import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import './style.css';
import DisplayBoard from '../components/DisplayBoard'; 
function HomePage(){

    
    const [board, setBoard] = useState(["   ","   ","  "," ","  ","  ","  ","  ","  "]); 
    const [turn,setTurn] =  useState("X"); 
    const [won,setWon] =  useState(null); 

    function checkRow(box1,box2,box3){
        return ( box1.trim().length > 0 && box1.trim()===box2.trim() ===box3.trim() );
    }

    function checkIsWon(){ 
        var isWon = [ checkRow(board[0],board[3],board[6]) || 
        // checkRow(board[0],board[1],board[2]) ||
        // checkRow(board[3],board[4],board[5]) ||
        // checkRow(board[6],board[7],board[8]) || 
        // checkRow(board[1],board[4],board[7]) ||
        // checkRow(board[2],board[5],board[8]) ||
        checkRow(board[0],board[4],board[8]) 
           
    ]

                if(isWon){setWon(turn)};
    }
    
    function onClickCell(index){
        let cpyBoard = [ ... board];
        let nextTurn = (turn==="X")? "O" : "X";
        cpyBoard[index] = nextTurn;
        setTurn(nextTurn);
        setBoard(cpyBoard);
    }
   
    useEffect(()=>{ checkIsWon()},[board]);

    const wonAlert = (won?<Alert className="info alertBox">You Won!</Alert> : null);
    const boardElement = (won?null : <DisplayBoard board={board} onClickCell={onClickCell} /> );
   return <Container>{wonAlert}
   
   <div>{boardElement} </div>
   </Container>

}

export default HomePage;