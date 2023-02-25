import './style.css';
import renderTitleDiv from './Modules/Title Div';
import { renderStartDiv } from './Modules/Start Div';
import { makeGameDiv } from './Modules/Game Render';
import renderFooter from './Modules/Footer';
import { renderOverlay } from './Modules/Overlay';

const body = document.body;
body.appendChild(renderTitleDiv());
const gameDiv = makeGameDiv();
const startDiv = renderStartDiv();
gameDiv.appendChild(startDiv);
body.appendChild(gameDiv);
body.appendChild(renderFooter());
body.appendChild(renderOverlay());