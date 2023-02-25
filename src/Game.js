import Player from './Classes/Player';
import shipImg from './images/viking-ship.png';
import skullImg from './images/skull.png';
import { openModal, updateModalResult } from './overlay';
import { renderStartDiv } from './renderStartDiv';
import { playerBoard, computerBoard } from './renderGame';

let player, computer;


function startGame() {
    player = new Player(computerBoard);
    computer = new Player(playerBoard);
}

function makeMove(e) {
    let row = e.target.id.split('-')[1];
    let column = e.target.id.split('-')[2];

    if (!e.target.classList.contains('hidden-cell')) {
        return;
    }

    player.attack(row, column);
    evaluatePlayerMove(row, column);

    if (computerBoard.isGameOver()) {
        gameOver('Player');
        return;
    }

    const computerMoves = computer.randomAttack();
    computer.attack(computerMoves[0], computerMoves[1]);
    evaluateComputerMove(computerMoves[0], computerMoves[1]);

    if (playerBoard.isGameOver()) {
        gameOver('Computer');
        return;
    }
}

function evaluatePlayerMove(row, column) {
    let computerBoardCell = document.getElementById(`c-${row}-${column}`);
    computerBoardCell.classList.remove('hidden-cell');

    if (computerBoard.board[row][column] === 'hit') {
        const img = new Image();
        img.src = shipImg;
        computerBoardCell.appendChild(img);
        computerBoardCell.classList.add('hit-cell');

        let ship = computerBoard.getShipFromCoords(row, column);
        if (ship.isSunk()) {
            changeComputerShipCells(ship);
        }
    } else {
        computerBoardCell.classList.add('miss-cell');
    }
}

function evaluateComputerMove(row, column) {
    let playerBoardCell = document.getElementById(`p-${row}-${column}`);
    playerBoardCell.classList.remove('hidden-cell');
    if (playerBoard.board[row][column] === 'hit') {
        computer.smartAttempts = 0;
        computer.lastHitRow = row;
        computer.lastHitColumn = column;
        playerBoardCell.classList.add('hit-cell');

        let ship = playerBoard.getShipFromCoords(row, column);
        if (ship.isSunk()) {
            computer.smartAttempts = -1;
            changePlayerShipCells(ship);
        }
    } else {
        playerBoardCell.classList.add('miss-cell');
        computer.smartAttempts = computer.smartAttempts === -1 ? -1 : computer.smartAttempts++;
    }
}

function changeComputerShipCells(ship) {
    const coords = ship.coords;
    for (let i = 0; i < coords.length; i++) {
        let x = coords[i].split(',')[0];
        let y = coords[i].split(',')[1];

        let cell = document.getElementById(`c-${x}-${y}`);
        cell.textContent = '';
        let img = new Image();
        img.src = skullImg;
        cell.appendChild(img);
    }
}

function changePlayerShipCells(ship) {
    const coords = ship.coords;
    for (let i = 0; i < coords.length; i++) {
        let x = coords[i].split(',')[0].trim();
        let y = coords[i].split(',')[1].trim();

        let cell = document.getElementById(`p-${x}-${y}`);
        cell.textContent = '';
        let img = new Image();
        img.src = skullImg;
        cell.appendChild(img);
    }
}

function gameOver(result) {
    updateModalResult(result);
    openModal();
}

function resetGame() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');

    const gameDiv = document.getElementById('game-div');
    gameDiv.textContent = '';
    const newStartDiv = renderStartDiv();
    gameDiv.appendChild(newStartDiv);

    document.body.classList.remove('blurred');
}

function removeFunctionality() {
    const cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(cell => 
        cell.removeEventListener('click', makeMove));
}

export { startGame, makeMove, resetGame, removeFunctionality };