import Player from '../Classes/Player';
import Gameboard from '../Classes/Gameboard';
import Ship from '../Classes/Ship';

let player;
let computer;
let gameboard1;
let gameboard2;
let playerShip;
let computerShip;

beforeEach(() => {
    gameboard1 = new Gameboard();
    gameboard2 = new Gameboard();
    player = new Player(true, gameboard2);
    computer = new Player(false, gameboard1);
    playerShip = new Ship('Destroyer', 3);
    computerShip = new Ship('Destroyer', 3);
    gameboard1.placeShip(playerShip, 0, 0, false);
    gameboard2.placeShip(computerShip, 0, 0, false);
})

test('gameboard works', () => {
    expect(gameboard2.board[0][0]).toBe('Destroyer');
})

test('player gets a hit', () => {
    expect(gameboard2.board[0][0]).toBe('Destroyer');
    player.attack(0, 0);
    expect(gameboard2.board[0][0]).toBe('hit');
})

test('player sinks enemy ship for gameover', () => {
    player.attack(0, 0);
    player.attack(0, 1);
    player.attack(0, 2);
    expect(gameboard2.isGameOver()).toBe(true);
})