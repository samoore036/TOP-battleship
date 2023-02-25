import Gameboard from './Classes/Gameboard';
import Ship from './Classes/Ship';
import shipImg from './images/small-ship.png';
import { renderGameDiv } from './renderGame';

let playerBoard,currShip,shipLength,vertical, selectedCells;

function renderStartDiv() {
    playerBoard = new Gameboard();
    currShip = 0;
    shipLength = 5;
    vertical = false;
    selectedCells = [];

    const startDiv = document.createElement('div');
    startDiv.setAttribute('id', 'start-div');

    startDiv.appendChild(makeDirectionsDiv());
    startDiv.appendChild(makeRotateButton());
    startDiv.appendChild(makeBoardDiv());

    return startDiv;
}

function makeDirectionsDiv() {
    const directionsDiv = document.createElement('div');
    directionsDiv.setAttribute('id', 'directions-div');
    directionsDiv.textContent = `Place your Carrier`;

    return directionsDiv;
}

function makeRotateButton() {
    const button = document.createElement('button');
    button.setAttribute('id', 'rotate-btn');
    button.textContent = 'Rotate';
    button.addEventListener('click', changeOrientation);

    return button;
}

function makeBoardDiv() {
    const boardDiv = document.createElement('div');
    const startBoard = renderStartBoard(playerBoard);
    boardDiv.appendChild(startBoard);

    return boardDiv;
}

function renderStartBoard(gameboard) {
    const board = document.createElement('div');
    board.classList.add('gameboard');
    for (let i = 0; i < gameboard.board.length; i++) {
        for (let j = 0; j < gameboard.board[i].length; j++) {
            let cell = makeCell();
            cell.setAttribute('id', `s-${i}-${j}`);
            board.appendChild(cell);
        }
    }

    return board;
}

function makeCell() {
    const cell = document.createElement('div');
    cell.classList.add('start-cell');
    cell.addEventListener('mouseover', hover);
    cell.addEventListener('mouseout', clearSelected);

    return cell;
}

function hover(e) {
    clearSelected();

    let startCell = e.target;
    let row = parseInt(e.target.id.split('-')[1]);
    let column = parseInt(e.target.id.split('-')[2]);

    if (!vertical) {
        for (let i = 0; i < shipLength; i++) {
            if (document.getElementById(`s-${row}-${column + i}`)) {
                let cell = document.getElementById(`s-${row}-${column + i}`);
                selectedCells.push(cell);
            }
        }
    } else {
        for (let i = 0; i < shipLength; i++) {
            if (document.getElementById(`s-${row + i}-${column}`)) {
                let cell = document.getElementById(`s-${row + i}-${column}`);
                selectedCells.push(cell);
            }
        }
    }
    
    selectedCells.forEach(cell => cell.classList.add('selected-cell'));

    if (validCells(selectedCells) && selectedCells.length === shipLength) {
        startCell.style.cursor = 'pointer';
        startCell.addEventListener('click', registerShip);
    } else {
        startCell.style.cursor = 'not-allowed';
        startCell.removeEventListener('click', registerShip);
    }
}

function validCells(cells) {
    for (let cell of cells) {
        let row = parseInt(cell.id.split('-')[1]);
        let column = parseInt(cell.id.split('-')[2]);
        if (!playerBoard.validPlacement(row, column, vertical)) {
            return false;
        }
    }
    return true;
}

function registerShip() {
    let ship = '';
    switch(currShip) {
        case 0: ship = new Ship('Carrier', 5);
            break;
        case 1: ship = new Ship('Battleship', 4);
            break;
        case 2: ship = new Ship('Destroyer', 3);
            break;
        case 3: ship = new Ship('Submarine', 3);
            break;
        case 4: ship = new Ship('Patrol Boat', 2);
    }

    const rows = [];
    const columns = [];
    for (let i = 0; i < selectedCells.length; i++) {
        const img = new Image();
        img.src = shipImg;
        selectedCells[i].appendChild(img);
        selectedCells[i].classList.add('ship-cell');

        let row = selectedCells[i].id.split('-')[1];
        rows.push(row);
        let column = selectedCells[i].id.split('-')[2];
        columns.push(column);
        playerBoard.board[row][column] = ship.name;
    }

    playerBoard.placeShip(ship, rows, columns);
    changeShipState();
}

function clearSelected() {
    const startCells = Array.from(document.getElementsByClassName('start-cell'))
        .forEach(cell => cell.classList.remove('selected-cell'));
    selectedCells = [];
}

function changeOrientation() {
    vertical = vertical === true ? false : true;
}

function changeShipState() {
    currShip++;
    let newShip = '';
    switch (currShip) {
        case 1: newShip = 'Battleship';
                shipLength = 4;
            break;
        case 2: newShip = 'Destroyer';
                shipLength = 3;
            break;
        case 3: newShip = 'Submarine';
                shipLength = 3;
            break;
        case 4: newShip = 'Patrol Boat';
                shipLength = 2;
                break;
        case 5: endStartDiv();
            return;
    }
    const directionsDiv = document.getElementById('directions-div');
    directionsDiv.textContent = `Place your ${newShip}`;
}

function endStartDiv() {
    const startDiv = document.getElementById('start-div');
    startDiv.classList.add('hidden');

    renderGameDiv();
}

export { renderStartDiv, playerBoard };