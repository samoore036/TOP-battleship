import { startGame, makeMove, resetGame } from "./Game";
import shipImg from '../images/viking-ship.png';
import { playerBoard } from './Start Div';
import makeComputerBoard from './Computer Board';

let computerBoard;

function renderComputerDiv() {
    const computerDiv = document.createElement('div');
    computerDiv.classList.add('gameboard');
    for (let i = 0; i < computerBoard.board.length; i++) {
        for (let j = 0; j < computerBoard.board[i].length; j++) {
            let cell = makeCell();
            cell.setAttribute('id', `c-${i}-${j}`);
            cell.classList.add('hidden-cell');
            cell.addEventListener('click', makeMove);
            computerDiv.appendChild(cell);
        }
    }

    return computerDiv;
}

function renderPlayerDiv(gameboard) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('gameboard');
    for (let i = 0; i < gameboard.board.length; i++) {
        for (let j = 0; j < gameboard.board[i].length; j++) {
            let cell = makeCell();
            cell.setAttribute('id', `p-${i}-${j}`);
            cell.classList.add('hidden-cell');
            if (gameboard.board[i][j]) {
                const img = new Image();
                img.src = shipImg;
                cell.appendChild(img);
            }
            playerDiv.appendChild(cell);
        }
    }

    return playerDiv;
}

function makeCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    return cell;
}

function makeResetButton() {
    const button = document.createElement('button');
    button.setAttribute('id', 'game-reset-btn');
    button.textContent = 'Reset';
    button.addEventListener('click', resetGame);

    return button;
}

function makeBoardDiv() {
    const boardDiv = document.createElement('div');
    boardDiv.setAttribute('id', 'board-div');

    const playerDiv = renderPlayerDiv(playerBoard);
    computerBoard = makeComputerBoard();
    const computerDiv = renderComputerDiv();
    boardDiv.appendChild(playerDiv);
    boardDiv.appendChild(computerDiv);

    return boardDiv;
}

function makeButtonDiv() {
    const buttonDiv = document.createElement('div');
    buttonDiv.appendChild(makeResetButton());

    return buttonDiv;
}

function makeGameDiv() {
    const gameDiv = document.createElement('div');
    gameDiv.setAttribute('id', 'game-div');

    return gameDiv;
}

function renderGameDiv() {
    const gameDiv = document.getElementById('game-div');
    //added to align with reset functionality
    gameDiv.textContent = '';
    gameDiv.appendChild(makeBoardDiv());
    gameDiv.appendChild(makeButtonDiv());

    startGame();
}

export { playerBoard, computerBoard, makeGameDiv, renderGameDiv,  };