import { useEffect, useState } from "react";
import { players } from "../../data/config";
import Square from "../Square";
import { 
    rowStyle,
    boardStyle,
    containerStyle,
    instructionsStyle,
    buttonStyle
} from "./style";

function Board({ winner, onWinner }) {

    const [arrClicked, setArrClicked] = useState([]);
    const [userTurn, setUserturn] = useState(0);

    useEffect(() => {
        showWinner();
    }, [winner])

    const changeTurn = (num) => {
        const newArray = [...arrClicked];
        newArray[num] = userTurn;
        setArrClicked(newArray);

        if (userTurn === 0) {
            setUserturn(1);
        } else {
            setUserturn(0);
        }

        checkWinner(newArray);
    }

    function checkWinner(arrCheck) {
        const combinationWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

        combinationWins.map(item => {
            if (arrCheck[item[0]] !== undefined && arrCheck[item[1]] !== undefined && arrCheck[item[2]] !== undefined) {
                if (arrCheck[item[0]] === arrCheck[item[1]] && arrCheck[item[0]] === arrCheck[item[2]]) {
                    onWinner(arrCheck[item[0]]);
                }
            }
        });
    }

    function showWinner() {
        if (winner === null) {
            return 'None';
        }

        return players[winner].name;
    }

    const checkToDisabelBtn = () => winner === null ? false : true;

    function resetGame() {
        onWinner(null);
        setArrClicked([]);
    }

    return (
        <div style={containerStyle} className="gameBoard">
            <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{players[userTurn].icon}</span></div>
            <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{showWinner()}</span></div>
            <button style={buttonStyle} onClick={() => resetGame()}>Reset</button>
            <div style={boardStyle}>
                <div className="board-row" style={rowStyle}>
                    <Square id={1} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={2} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={3} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                </div>
                <div className="board-row" style={rowStyle}>
                    <Square id={4} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={5} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={6} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                </div>
                <div className="board-row" style={rowStyle}>
                    <Square id={7} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={8} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                    <Square id={9} changeTurn={(id) => changeTurn(id)} arrClicked={arrClicked} disabled={checkToDisabelBtn()} />
                </div>
            </div>
        </div>
    );
}

export default Board;