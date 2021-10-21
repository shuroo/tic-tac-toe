import { Row,Col, Container } from "react-bootstrap"
import "./DisplayBoard.css"

function DisplayBoard({board,onClickCell}){

    return (<Container className="boardClass">
        <Row><Col onClick={()=>onClickCell(0)}>{board[0]}</Col><Col onClick={()=>onClickCell(1)}>{board[1]}</Col><Col onClick={()=>onClickCell(2)}>{board[2]}</Col></Row>
        <Row><Col onClick={()=>onClickCell(3)}>{board[3]}</Col><Col onClick={()=>onClickCell(4)}>{board[4]}</Col><Col onClick={()=>onClickCell(5)}>{board[5]}</Col></Row>
        <Row><Col onClick={()=>onClickCell(6)}>{board[6]}</Col><Col onClick={()=>onClickCell(7)}>{board[7]}</Col><Col onClick={()=>onClickCell(8)}>{board[8]}</Col></Row>
        </Container>
        )
}

export default DisplayBoard;