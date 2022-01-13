import { players } from "../../data/config";
import { squareStyle } from "./style";


function Square({ changeTurn, id, arrClicked, disabled }) {

    const handleClick = () => {
        if (disabled) {
            return;
        }
        if (arrClicked[id] !== undefined) {
            return;
        }
        changeTurn(id);
    }

    return (
        <div
            className="square"
            style={squareStyle}
            onClick={() => handleClick()}>
            {arrClicked[id] !== undefined && players[arrClicked[id]].icon}
        </div>
    );
}

export default Square;