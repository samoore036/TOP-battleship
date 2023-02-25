class Player {
    lastHitRow;
    lastHitColumn;
    smartAttempts = -1;

    constructor(gameboard) {
        this.gameboard = gameboard;
    }

    attack(row, column) {
        if (this.gameboard.board[row][column] === 'hit' || this.gameboard.board[row][column === 'miss']) {
            return;
        }

        this.gameboard.receiveAttack(row, column);
    }

    randomAttack() {
        if (this.smartAttempts > -1 && this.smartAttempts < 3) {
            return this.intelligentAttack();
        }

        let randomRow = Math.floor(Math.random() * 9);
        let randomColumn = Math.floor(Math.random() * 9);

        while (this.gameboard.board[randomRow][randomColumn] === 'hit' || this.gameboard.board[randomRow][randomColumn] === 'miss') {
            randomRow = Math.floor(Math.random() * 9);
            randomColumn = Math.floor(Math.random() * 9);
        }

        return [randomRow, randomColumn];
    }

    /*
    takes last successful hit and makes up to 4 attempts to hit the next one
    tries left, then right, then up, then down
    */
    intelligentAttack() {
        let left = this.lastHitColumn - 1;
        let right = this.lastHitColumn + 1;
        let up = this.lastHitRow - 1;
        let down = this.lastHitRow + 1;
        if (left >= 0 && this.isValid(this.lastHitRow, left)) {
            return [this.lastHitRow, left];
        } 

        if (right <= 8 && this.isValid(this.lastHitRow, right)) {
            return [this.lastHitRow, right];
        }

        if (up >= 0 && this.isValid(up, this.lastHitColumn)) {
            return [up, this.lastHitColumn];
        } 
        
        if (down <= 8 && this.isValid(down, this.lastHitColumn)) {
            return [down, this.lastHitColumn];
        }

        let randomRow = Math.floor(Math.random() * 9);
        let randomColumn = Math.floor(Math.random() * 9);

        while (this.gameboard.board[randomRow][randomColumn] === 'hit' || this.gameboard.board[randomRow][randomColumn] === 'miss') {
            randomRow = Math.floor(Math.random() * 9);
            randomColumn = Math.floor(Math.random() * 9);
        }

        return [randomRow, randomColumn];
    }

    isValid(row, column) {
        if (this.gameboard.board[row][column] !== 'hit' && this.gameboard.board[row][column] !== 'miss') {
            return true;
        }

        return false;
    }
}

export default Player;