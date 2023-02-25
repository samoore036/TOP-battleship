(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>h});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),d=n.n(s),l=new URL(n(955),n.b),c=new URL(n(827),n.b),u=a()(o()),m=d()(l),p=d()(c);u.push([t.id,"@font-face {\r\n    font-family: 'Caesar';\r\n    src: url("+m+");\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 4rem;\r\n    font: 16px;\r\n    background-image: url("+p+");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nbutton {\r\n    padding: 0.5rem;\r\n}\r\n\r\n/* title div stylings */\r\n#title-div {\r\n    display: flex;\r\n    font-family: 'Caesar';\r\n    font-size: 6rem;\r\n    padding-top: 2rem;\r\n    color: ivory;\r\n}\r\n\r\n/* start div stylings */\r\n#start-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: ivory;\r\n}\r\n\r\n#directions-div {\r\n    font-size: 2.3rem;\r\n}\r\n\r\n#rotate-btn {\r\n    border: none;\r\n    background: none;\r\n    color: ivory;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#rotate-btn:hover {\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.start-cell {\r\n    background-color: #2563EB;\r\n    border: 1px solid #DBEAFE;\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.selected-cell {\r\n    background-color: #27272A;\r\n}\r\n\r\n/* board stylings */\r\n#game-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#board-div {\r\n    display: flex;\r\n    gap: 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.gameboard {\r\n    border: 1px solid ivory;\r\n    display: grid;\r\n    grid-template-rows: repeat(9, 1fr);\r\n    grid-template-columns: repeat(9, 1fr);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #DBEAFE;\r\n    width: 3.3rem;\r\n    height: 3.3rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cell:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.hidden-cell {\r\n    background-color: #2b65ec;\r\n}\r\n\r\n.hidden-img {\r\n    opacity: 0;\r\n}\r\n\r\n.hit-cell {\r\n    background-color: red;\r\n}\r\n\r\n.miss-cell {\r\n    background-color: #27272A;\r\n}\r\n\r\n#game-reset-btn {\r\n    border: none;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    color: ivory;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n#game-reset-btn:hover {\r\n    cursor: pointer;\r\n    background: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n/* footer stylings */\r\n#footer {\r\n    margin-top: auto;\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    color: ivory;\r\n}\r\n\r\n#footer img {\r\n    vertical-align: middle;\r\n    margin-left: 0.3rem;\r\n}\r\n\r\na {\r\n    color: rgb(14, 14, 176);\r\n    text-decoration: underline;\r\n}\r\n\r\na:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* overlay stylings */\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n#overlay {\r\n    display: block;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1100;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    font-size: 3rem;\r\n    color: ivory;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    padding: 2rem;\r\n}\r\n\r\n.modal-btn {\r\n    border: none;\r\n    background: none;\r\n    color: ivory;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.modal-btn:hover {\r\n    cursor: pointer;\r\n    background: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n/* blurs everything except the overlay */\r\n.blurred> *:not(#overlay) {\r\n    filter: blur(2px);\r\n}",""]);const h=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var d=t[s],l=r.base?d[0]+r.base:d[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var d=r(t,o),l=0;l<i.length;l++){var c=n(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},955:(t,e,n)=>{t.exports=n.p+"64f78ba033b0990543a9.ttf"},827:(t,e,n)=>{t.exports=n.p+"068102bc789b5ccc3461.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),d=n.n(s),l=n(216),c=n.n(l),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=class{constructor(){this.board=[],this.ships=[],this.initialize()}initialize(){for(let t=0;t<9;t++){this.board[t]=[];for(let e=0;e<9;e++)this.board[t][e]=null}}placeShip(t,e,n){for(let r=0;r<e.length;r++){let o=e[r],i=n[r];this.board[o][i]=t.name,t.addCoords(o,i)}this.ships.push(t)}validPlacement(t,e,n){if(t<0||t>8||e<0||e>8)return!1;if(n){if(e-1>=0&&this.board[t][e-1])return!1;if(e+1<=8&&this.board[t][e+1])return!1}else{if(t-1>=0&&this.board[t-1][e])return!1;if(t+1<=8&&this.board[t+1][e])return!1}return!(t-1>=0&&this.board[t-1][e]||t+1<=8&&this.board[t+1][e]||e-1>=0&&this.board[t][e-1]||e+1<=8&&this.board[t][e+1])}receiveAttack(t,e){this.board[t][e]?(this.getShip(this.board[t][e]).hit(),this.board[t][e]="hit"):this.board[t][e]="miss"}getShip(t){for(let e of this.ships)if(e.name===t)return e}getShipFromCoords(t,e){let n=`${t},${e}`;for(let t of this.ships)for(let e=0;e<t.coords.length;e++)if(t.coords[e]===n)return t}isGameOver(){for(let t of this.ships)if(!t.isSunk())return!1;return!0}},b=class{hits=0;coords=[];constructor(t,e){this.name=t,this.length=e}hit(){this.hits++}isSunk(){return this.hits===this.length}addCoords(t,e){this.coords.push(`${t},${e}`)}},g=n.p+"60d79289e165a8affe18.png",v=class{lastHitRow;lastHitColumn;smartAttempts=-1;constructor(t){this.gameboard=t}attack(t,e){"hit"===this.gameboard.board[t][e]||this.gameboard.board[t]["miss"===e]||this.gameboard.receiveAttack(t,e)}randomAttack(){if(this.smartAttempts>-1&&this.smartAttempts<3)return this.intelligentAttack();let t=Math.floor(9*Math.random()),e=Math.floor(9*Math.random());for(;"hit"===this.gameboard.board[t][e]||"miss"===this.gameboard.board[t][e];)t=Math.floor(9*Math.random()),e=Math.floor(9*Math.random());return[t,e]}intelligentAttack(){let t=this.lastHitColumn-1,e=this.lastHitColumn+1,n=this.lastHitRow-1,r=this.lastHitRow+1;if(t>=0&&this.isValid(this.lastHitRow,t))return[this.lastHitRow,t];if(e<=8&&this.isValid(this.lastHitRow,e))return[this.lastHitRow,e];if(n>=0&&this.isValid(n,this.lastHitColumn))return[n,this.lastHitColumn];if(r<=8&&this.isValid(r,this.lastHitColumn))return[r,this.lastHitColumn];let o=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());for(;"hit"===this.gameboard.board[o][i]||"miss"===this.gameboard.board[o][i];)o=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());return[o,i]}isValid(t,e){return"hit"!==this.gameboard.board[t][e]&&"miss"!==this.gameboard.board[t][e]}},y=n.p+"5818dc434a42e130b052.png",C=n.p+"70fff358b59682b2dfa5.png";let E,x;function w(t){let e=t.target.id.split("-")[1],n=t.target.id.split("-")[2];if(!t.target.classList.contains("hidden-cell"))return;if(E.attack(e,n),function(t,e){let n=document.getElementById(`c-${t}-${e}`);if(n.classList.remove("hidden-cell"),"hit"===M.board[t][e]){const r=new Image;r.src=y,n.appendChild(r),n.classList.add("hit-cell");let o=M.getShipFromCoords(t,e);o.isSunk()&&function(t){const e=t.coords;for(let t=0;t<e.length;t++){let n=e[t].split(",")[0],r=e[t].split(",")[1],o=document.getElementById(`c-${n}-${r}`);o.textContent="";let i=new Image;i.src=C,o.appendChild(i)}}(o)}else n.classList.add("miss-cell")}(e,n),M.isGameOver())return void k("Player");const r=x.randomAttack();x.attack(r[0],r[1]),function(t,e){let n=document.getElementById(`p-${t}-${e}`);if(n.classList.remove("hidden-cell"),"hit"===I.board[t][e]){x.smartAttempts=0,x.lastHitRow=t,x.lastHitColumn=e,n.classList.add("hit-cell");let r=I.getShipFromCoords(t,e);r.isSunk()&&(x.smartAttempts=-1,function(t){const e=t.coords;for(let t=0;t<e.length;t++){let n=e[t].split(",")[0].trim(),r=e[t].split(",")[1].trim(),o=document.getElementById(`p-${n}-${r}`);o.textContent="";let i=new Image;i.src=C,o.appendChild(i)}}(r))}else n.classList.add("miss-cell"),x.smartAttempts=-1===x.smartAttempts?-1:x.smartAttempts++}(r[0],r[1]),I.isGameOver()&&k("Computer")}function k(t){!function(t){document.getElementById("result-div").textContent=`${t} wins`}(t),document.getElementById("overlay").classList.remove("hidden"),document.body.classList.add("blurred")}function L(){document.getElementById("overlay").classList.add("hidden");const t=document.getElementById("game-div");t.textContent="";const e=T();t.appendChild(e),document.body.classList.remove("blurred")}const A=function(){let t=new f;function e(n){let r=1===Math.floor(2*Math.random()),o=Math.floor(9*Math.random()),i=Math.floor(9*Math.random()),a=[],s=[];if(r){for(;o+n.length>8;)o=Math.floor(9*Math.random());for(let e=0;e<n.length;e++)t.board[o+e][i]||(a.push(o+e),s.push(i))}else{for(;i+n.length>8;)i=Math.floor(9*Math.random());for(let e=0;e<n.length;e++)t.board[o][i+e]||(a.push(o),s.push(i+e))}!function(e,n,r){for(let o=0;o<e.length;o++){let i=e[o],a=n[o];if(!t.validPlacement(i,a,r))return!1}return!0}(a,s,r)?e(n):t.placeShip(n,a,s)}return[new b("Carrier",5),new b("Battleship",4),new b("Destroyer",3),new b("Submarine",3),new b("Patrol Boat",2)].forEach((t=>e(t))),t};let M,I,$,B,S,H;function P(){const t=document.createElement("div");return t.classList.add("cell"),t}function R(){const t=document.getElementById("game-div");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","board-div");const e=function(t){const e=document.createElement("div");e.classList.add("gameboard");for(let n=0;n<t.board.length;n++)for(let r=0;r<t.board[n].length;r++){let o=P();if(o.setAttribute("id",`p-${n}-${r}`),o.classList.add("hidden-cell"),t.board[n][r]){const t=new Image;t.src=y,o.appendChild(t)}e.appendChild(o)}return e}(I);M=A();const n=function(){const t=document.createElement("div");t.classList.add("gameboard");for(let e=0;e<M.board.length;e++)for(let n=0;n<M.board[e].length;n++){let r=P();r.setAttribute("id",`c-${e}-${n}`),r.classList.add("hidden-cell"),r.addEventListener("click",w),t.appendChild(r)}return t}();return t.appendChild(e),t.appendChild(n),t}()),t.appendChild(function(){const t=document.createElement("div");return t.appendChild(function(){const t=document.createElement("button");return t.setAttribute("id","game-reset-btn"),t.textContent="Reset",t.addEventListener("click",L),t}()),t}()),E=new v(M),x=new v(I)}function T(){I=new f,$=0,B=5,S=!1,H=[];const t=document.createElement("div");return t.setAttribute("id","start-div"),t.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","directions-div"),t.textContent="Place your Carrier",t}()),t.appendChild(function(){const t=document.createElement("button");return t.setAttribute("id","rotate-btn"),t.textContent="Rotate",t.addEventListener("click",O),t}()),t.appendChild(function(){const t=document.createElement("div"),e=function(t){const e=document.createElement("div");e.classList.add("gameboard");for(let n=0;n<t.board.length;n++)for(let r=0;r<t.board[n].length;r++){let t=z();t.setAttribute("id",`s-${n}-${r}`),e.appendChild(t)}return e}(I);return t.appendChild(e),t}()),t}function z(){const t=document.createElement("div");return t.classList.add("start-cell"),t.addEventListener("mouseover",j),t.addEventListener("mouseout",N),t}function j(t){N();let e=t.target,n=parseInt(t.target.id.split("-")[1]),r=parseInt(t.target.id.split("-")[2]);if(S){for(let t=0;t<B;t++)if(document.getElementById(`s-${n+t}-${r}`)){let e=document.getElementById(`s-${n+t}-${r}`);H.push(e)}}else for(let t=0;t<B;t++)if(document.getElementById(`s-${n}-${r+t}`)){let e=document.getElementById(`s-${n}-${r+t}`);H.push(e)}H.forEach((t=>t.classList.add("selected-cell"))),function(t){for(let e of t){let t=parseInt(e.id.split("-")[1]),n=parseInt(e.id.split("-")[2]);if(!I.validPlacement(t,n,S))return!1}return!0}(H)&&H.length===B?(e.style.cursor="pointer",e.addEventListener("click",F)):(e.style.cursor="not-allowed",e.removeEventListener("click",F))}function F(){let t="";switch($){case 0:t=new b("Carrier",5);break;case 1:t=new b("Battleship",4);break;case 2:t=new b("Destroyer",3);break;case 3:t=new b("Submarine",3);break;case 4:t=new b("Patrol Boat",2)}const e=[],n=[];for(let r=0;r<H.length;r++){const o=new Image;o.src=g,H[r].appendChild(o),H[r].classList.add("ship-cell");let i=H[r].id.split("-")[1];e.push(i);let a=H[r].id.split("-")[2];n.push(a),I.board[i][a]=t.name}I.placeShip(t,e,n),function(){$++;let t="";switch($){case 1:t="Battleship",B=4;break;case 2:t="Destroyer",B=3;break;case 3:t="Submarine",B=3;break;case 4:t="Patrol Boat",B=2;break;case 5:return document.getElementById("start-div").classList.add("hidden"),void R()}document.getElementById("directions-div").textContent=`Place your ${t}`}()}function N(){Array.from(document.getElementsByClassName("start-cell")).forEach((t=>t.classList.remove("selected-cell"))),H=[]}function O(){S=!0!==S}const D=n.p+"0c3d2e8f9f29774334a5.png",U=document.body;U.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","title-div"),t.textContent="BATTLESHIP",t}());const V=function(){const t=document.createElement("div");return t.setAttribute("id","game-div"),t}(),Z=T();V.appendChild(Z),U.appendChild(V),U.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","footer");const e=new Image;e.src=D;const n=document.createElement("a");return n.href="https://github.com/samoore036",n.appendChild(e),t.textContent="Copyright © 2022 Shaheen Moore",t.appendChild(n),t}()),U.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","overlay"),t.classList.add("hidden"),t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","modal");const e=document.createElement("div");e.setAttribute("id","result-div"),t.appendChild(e);const n=document.createElement("div");return n.setAttribute("id","button-div"),n.appendChild(function(){const t=document.createElement("button");return t.classList.add("modal-btn"),t.textContent="Play again",t.addEventListener("click",L),t}()),n.appendChild(function(){const t=document.createElement("button");return t.classList.add("modal-btn"),t.textContent="Close",t.addEventListener("click",(()=>{t.parentElement.parentElement.parentElement.classList.add("hidden"),document.body.classList.remove("blurred"),Array.from(document.getElementsByClassName("cell")).forEach((t=>t.removeEventListener("click",w)))})),t}()),t.appendChild(n),t}()),t}())})()})();