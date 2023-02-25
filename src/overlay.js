import { resetGame, removeFunctionality } from './Game';

function renderOverlay() {
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    overlay.classList.add('hidden');
    overlay.appendChild(createModal());

    return overlay;
}

function createModal() {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modal');

    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('id', 'result-div');
    modal.appendChild(resultDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'button-div');
    buttonDiv.appendChild(createResetButton());
    buttonDiv.appendChild(createCloseButton());
    modal.appendChild(buttonDiv);

    return modal;
}

function createResetButton() {
    const button = document.createElement('button');
    button.classList.add('modal-btn');
    button.textContent = 'Play again';
    button.addEventListener('click', resetGame);

    return button;
}

function createCloseButton() {
    const button = document.createElement('button');
    button.classList.add('modal-btn');
    button.textContent = 'Close';
    button.addEventListener('click', () => {
        button.parentElement.parentElement.parentElement.classList.add('hidden');
        document.body.classList.remove('blurred');
        removeFunctionality();
    });

    return button;
}

function openModal() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    document.body.classList.add('blurred');
}

function updateModalResult(result) {
    const resultDiv = document.getElementById('result-div');
    resultDiv.textContent = `${result} wins`;
}

export { renderOverlay, openModal, updateModalResult };