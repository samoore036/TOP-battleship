import Gameboard from './Classes/Gameboard';
import Ship from './Classes/Ship';

function makeComputerBoard() {
    let computerBoard = new Gameboard();
    placeComputerShips();

    function placeComputerShips() {
        const carrier = new Ship('Carrier', 5);
        const battleship = new Ship('Battleship', 4);
        const destroyer = new Ship('Destroyer', 3);
        const submarine = new Ship('Submarine', 3);
        const patrolboat =  new Ship('Patrol Boat', 2);
        const computerShips = [carrier, battleship, destroyer, submarine, patrolboat];
    
        computerShips.forEach(ship => generateCoords(ship));    
    }

    function generateCoords(ship) {
        //1 is vertical, 0 is horizontal
        let random = Math.floor(Math.random() * 2);
        let vertical = random === 1 ? true : false;
        let randomRow = Math.floor(Math.random() * 9);
        let randomColumn = Math.floor(Math.random() * 9);
    
        let rows = [];
        let columns = [];
        if (vertical) {
            //redo randomRow until max row would be equal to or less than 8
            while (randomRow + ship.length > 8) {
                randomRow = Math.floor(Math.random() * 9);
            }
            for (let i = 0; i < ship.length; i++) {
                if (!computerBoard.board[randomRow + i][randomColumn]) {
                    rows.push(randomRow + i);
                    columns.push(randomColumn);
                }
            }
        } else {
            //redo randomColumn until max column would be equal to or less than 8
            while (randomColumn + ship.length > 8) {
                randomColumn = Math.floor(Math.random() * 9);
            }
            for (let i = 0; i < ship.length; i++) {
                if (!computerBoard.board[randomRow][randomColumn + i]) {
                    rows.push(randomRow);
                    columns.push(randomColumn + i);
                }
            }
        }
    
        if (allCoordsValid(rows, columns, vertical)) {
            computerBoard.placeShip(ship, rows, columns);
        } else {
            generateCoords(ship);
        }
    }

    function allCoordsValid(rows, columns, vertical) {
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let column = columns[i];
            if (!computerBoard.validPlacement(row, column, vertical)) {
                return false;
            }
        }
        return true;
    }

    return computerBoard;
}

export default makeComputerBoard;