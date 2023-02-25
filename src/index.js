import './style.css';
import renderTitleDiv from './renderTitleDiv';
import { renderStartDiv } from './renderStartDiv';
import { makeGameDiv } from './renderGame';
import renderFooter from './renderFooter';
import { renderOverlay } from './overlay';

const body = document.body;
body.appendChild(renderTitleDiv());
const gameDiv = makeGameDiv();
const startDiv = renderStartDiv();
gameDiv.appendChild(startDiv);
body.appendChild(gameDiv);
body.appendChild(renderFooter());
body.appendChild(renderOverlay());