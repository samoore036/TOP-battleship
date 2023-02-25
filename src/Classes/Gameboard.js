class Gameboard {
    constructor() {
        this.board = [];
        this.ships = [];
        this.initialize();
    }

    //create a gameboard array that is 10 x 10 and initially empty
    initialize() {
        //create 9 rows each with 9 columns each
        for (let i = 0; i < 9; i++) {
            this.board[i] = [];
            for (let j = 0; j < 9; j++) {
                this.board[i][j] = null;
            }
        }
    }

    //cell will contain the ship's name
    placeShip(ship, rows, columns) {
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let column = columns[i];
            this.board[row][column] = ship.name;
            ship.addCoords(row, column);
        }

        this.ships.push(ship);
    }

    //ships cannot be placed outside of bounds or adjacent to any other ship
    validPlacement(row, column, isVertical) {
        //check if placement is within bounds of the board
        if (row < 0 || row > 8 || column < 0 || column > 8) {
            return false;
        }

        //check adjacent cells
        if (isVertical) {
            if (column - 1 >= 0) {
                if (this.board[row][column - 1]) {
                    return false;
                }
            }
            if (column + 1 <= 8) {
                if (this.board[row][column + 1]) {
                    return false;
                }
            }
        } else {
            if (row - 1 >= 0) {
                if (this.board[row - 1][column]) {
                    return false;
                }
            }
            if (row + 1 <= 8) {
                if (this.board[row + 1][column]) {
                    return false;
                }
            }
        }

        //check ends
        if (row - 1 >= 0) {
            if (this.board[row - 1][column]) {
                return false;
            }
        }
        if (row + 1 <= 8) {
            if (this.board[row + 1][column]) {
                return false;
            }
        }
        if (column - 1 >= 0) {
            if (this.board[row][column - 1]) {
                return false;
            }
        }
        if (column + 1 <= 8) {
            if (this.board[row][column + 1]) {
                return false;
            }
        }
        return true;
    }

    receiveAttack(row, column) {
        if (this.board[row][column]) {
            let hitShip = this.getShip(this.board[row][column]);
            hitShip.hit();
            this.board[row][column] = 'hit';
        } else {
            this.board[row][column] = 'miss';
        }
    }

    getShip(shipname) {
        for (let ship of this.ships) {
            if (ship.name === shipname) {
                return ship;
            }
        }
    }

    getShipFromCoords(row, column) {
        let coords = `${row},${column}`;

        for (let ship of this.ships) {
            for (let i = 0; i < ship.coords.length; i++) {
                if (ship.coords[i] === coords) {
                    return ship;
                }
            }
        }
    }

    isGameOver() {
        for (let ship of this.ships) {
            if (!ship.isSunk()) {
                return false;
            }
        }
        return true;
    }
}

export default Gameboard;