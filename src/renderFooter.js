import gitIcon from './images/git.png';

function renderFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const git = new Image();
    git.src = gitIcon;

    const gitLink = document.createElement('a');
    gitLink.href = 'https://github.com/samoore036';
    gitLink.appendChild(git);

    footer.textContent = 'Copyright © 2022 Shaheen Moore';
    footer.appendChild(gitLink);
    
    return footer;
}

export default renderFooter;