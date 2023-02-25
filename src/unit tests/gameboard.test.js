import Gameboard from '../Gameboard';
import Ship from '../Ship';

let gameboard;
let ship;
let battleship;

beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship('Carrier', 5);
    battleship = new Ship('Battleship', 4);
})

test('gameboard is 10 rows', () => {
    expect(gameboard.board.length).toBe(10);
})

test('gameboard rows each have 10 columns', () => {
    for (let i = 0; i < gameboard.board.length; i++) {
        expect(gameboard.board[i].length).toBe(10);
    }
})

test('gameboard cells are initialized as null', () => {
    for (let i = 0; i < gameboard.board.length; i++) {
        for (let j = 0; j < gameboard.board[i].length; j++) {
            expect(gameboard.board[i][j]).toBe(null);
        }
    }
})

test('test a specific cell to be null on intialization', () => {
    expect(gameboard.board[2][7]).toBe(null);
})

test('misses are null on initialization', () => {
    for (let i = 0; i < gameboard.misses.length; i++) {
        for (let j = 0; j < gameboard.misses[i].length; j++) {
            expect(gameboard.misses[i][j]).toBe(null);
        }
    }
})

test('place ship vertically', () => {
    gameboard.placeShip(ship, 1, 1, true);
    expect(gameboard.board[1][1]).toBe('Carrier');
    expect(gameboard.board[2][1]).toBe('Carrier');
    expect(gameboard.board[3][1]).toBe('Carrier');
    expect(gameboard.board[4][1]).toBe('Carrier');
    expect(gameboard.board[5][1]).toBe('Carrier');
    expect(gameboard.board[6][1]).toBe(null);
})

test('place ship horizontally', () => {
    gameboard.placeShip(ship, 0, 0, false);
    expect(gameboard.board[0][0]).toBe('Carrier');
    expect(gameboard.board[0][1]).toBe('Carrier');
    expect(gameboard.board[0][2]).toBe('Carrier');
    expect(gameboard.board[0][3]).toBe('Carrier');
    expect(gameboard.board[0][4]).toBe('Carrier');
    expect(gameboard.board[0][5]).toBe(null);
})

test('out of bounds x-axis placement', () => {
    expect(gameboard.validPlacement(ship, -1, 0, true)).toBe(false);
})

test('out of bounds y-axis placement', () => {
    expect(gameboard.validPlacement(ship, 5, 10, false)).toBe(false);
})

test('too long horizontally', () => {
    expect(gameboard.validPlacement(ship, 6, 4, false)).toBe(true);
    expect(gameboard.validPlacement(ship, 6, 5, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 6, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 7, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 8, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 9, false)).toBe(false);
})

test('too long vertically', () => {
    expect(gameboard.validPlacement(ship, 4, 1, true)).toBe(true);
    expect(gameboard.validPlacement(ship, 5, 1, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 1, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 7, 1, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 8, 1, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 9, 1, true)).toBe(false);
})

test('next to adjacent ship placed horizontally', () => {
    gameboard.placeShip(battleship, 0, 0, false);
    expect(gameboard.board[0][0]).toBe('Battleship');
    expect(gameboard.board[0][1]).toBe('Battleship');
    expect(gameboard.board[0][2]).toBe('Battleship');
    expect(gameboard.board[0][3]).toBe('Battleship');
    expect(gameboard.board[0][4]).toBe(null);
    expect(gameboard.validPlacement(ship, 1, 0, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 1, 1, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 1, 2, false)).toBe(false);
    expect(gameboard.validPlacement(ship, 1, 3, false)).toBe(false);
})

test('next to adjacent ship placed vertically', () => {
    let battleship = new Ship('Battleship', 4);
    gameboard.placeShip(battleship, 6, 9, true);
    expect(gameboard.validPlacement(ship, 5, 9, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 6, 9, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 7, 9, true)).toBe(false);
    expect(gameboard.validPlacement(ship, 8, 9, true)).toBe(false);
})

// test('hit registered', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.receiveAttack(0, 0);
//     expect(gameboard.board[0][0]).toBe('hit');
// })

// test('miss registered', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.receiveAttack(0, 1);
//     expect(gameboard.board[0][1]).toBe('miss');
// })

// test('hit does not register twice', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 0);
//     expect(ship.hits).toBe(1);
// })

// test('ship has one hit remaining', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(1, 0);
//     gameboard.receiveAttack(2, 0);
//     gameboard.receiveAttack(4, 0);
//     gameboard.receiveAttack(5, 0);
//     expect(ship.hits).toBe(4);
// })

// test('ship sunk', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(1, 0);
//     gameboard.receiveAttack(2, 0);
//     gameboard.receiveAttack(3, 0);
//     gameboard.receiveAttack(4, 0);
//     gameboard.receiveAttack(5, 0);
//     expect(ship.hits).toBe(5);
//     expect(ship.isSunk()).toBe(true);
// })

// test('hit one ship, other ship still has full life', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.placeShip(battleship, 9, 0, false);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(4, 0);
//     expect(ship.hits).toBe(2);
//     expect(battleship.hits).toBe(0);
// })

// test('sink one ship and hits on another', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.placeShip(battleship, 9, 0, false);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(1, 0);
//     gameboard.receiveAttack(2, 0);
//     gameboard.receiveAttack(3, 0);
//     gameboard.receiveAttack(4, 0);
//     gameboard.receiveAttack(5, 0);
//     gameboard.receiveAttack(9, 0);
//     gameboard.receiveAttack(9, 3);
//     expect(ship.isSunk()).toBe(true);
//     expect(battleship.hits).toBe(2);
// })

// test('game over', () => {
//     gameboard.placeShip(ship, 0, 0, true);
//     gameboard.placeShip(battleship, 9, 0, false);
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(1, 0);
//     gameboard.receiveAttack(2, 0);
//     gameboard.receiveAttack(3, 0);
//     gameboard.receiveAttack(4, 0);
//     gameboard.receiveAttack(5, 0);
//     gameboard.receiveAttack(9, 0);
//     gameboard.receiveAttack(9, 1);
//     gameboard.receiveAttack(9, 2);
//     gameboard.receiveAttack(9, 3);
//     expect(ship.isSunk()).toBe(true);
//     expect(battleship.isSunk()).toBe(true);
//     expect(gameboard.isGameOver()).toBe(true);
// })