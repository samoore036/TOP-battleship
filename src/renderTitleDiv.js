function renderTitleDiv() {
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('id', 'title-div');

    titleDiv.textContent = 'BATTLESHIP';

    return titleDiv;
}

export default renderTitleDiv;