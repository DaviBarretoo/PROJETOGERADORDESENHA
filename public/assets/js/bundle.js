/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dados.js":
/*!******************************!*\
  !*** ./src/modules/dados.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gera)
/* harmony export */ });
/* harmony import */ var _gerasenha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gerasenha.js */ "./src/modules/gerasenha.js");
/* harmony import */ var _formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formGeraSenha.js */ "./src/modules/formGeraSenha.js");



function gera() {
  var senha = (0,_gerasenha_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__.qtdCaracteres.value, _formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__.chkMaiusculas.checked, _formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__.chkMinusculas.checked, _formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__.chkNumeros.checked, _formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__.chkSimbolos.checked);
  return senha || "Nada Selecionado";
}
(0,_formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/formGeraSenha.js":
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chkMaiusculas: () => (/* binding */ chkMaiusculas),
/* harmony export */   chkMinusculas: () => (/* binding */ chkMinusculas),
/* harmony export */   chkNumeros: () => (/* binding */ chkNumeros),
/* harmony export */   chkSimbolos: () => (/* binding */ chkSimbolos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   qtdCaracteres: () => (/* binding */ qtdCaracteres),
/* harmony export */   senhaGerada: () => (/* binding */ senhaGerada)
/* harmony export */ });
/* harmony import */ var _gerasenha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gerasenha.js */ "./src/modules/gerasenha.js");
/* harmony import */ var _dados_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados.js */ "./src/modules/dados.js");


var senhaGerada = document.querySelector('.senha-gerada');
var qtdCaracteres = document.querySelector('.qtd-caracteres');
var chkMaiusculas = document.querySelector('.chk-maiusculas');
var chkMinusculas = document.querySelector('.chk-minusculas');
var chkNumeros = document.querySelector('.chk-numeros');
var chkSimbolos = document.querySelector('.chk-simbolos');
var gerarSenha = document.querySelector('.gera-senha-principal');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  gerarSenha.addEventListener('click', function () {
    senhaGerada.innerHTML = (0,_dados_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
});

(0,_gerasenha_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/modules/geradores.js":
/*!**********************************!*\
  !*** ./src/modules/geradores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   geraMaiuscula: () => (/* binding */ geraMaiuscula),
/* harmony export */   geraMinuscula: () => (/* binding */ geraMinuscula),
/* harmony export */   geraNumeros: () => (/* binding */ geraNumeros),
/* harmony export */   geraSimbolos: () => (/* binding */ geraSimbolos)
/* harmony export */ });
//Tabela ascii js

var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//Função para gerar número aleatorio

var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
};
var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 123));
};
var geraNumeros = function geraNumeros() {
  return String.fromCharCode(rand(48, 58));
};
var simbolos = '.@!,#$-';
var geraSimbolos = function geraSimbolos() {
  return simbolos[rand(0, simbolos.length)];
};


/***/ }),

/***/ "./src/modules/gerasenha.js":
/*!**********************************!*\
  !*** ./src/modules/gerasenha.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geraSenha)
/* harmony export */ });
/* harmony import */ var _geradores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradores.js */ "./src/modules/geradores.js");

function geraSenha(qtd, Maiusculas, minusculas, numeros, simbolos) {
  var senhaArray = [];
  qtd = Number(qtd);
  for (var i = 0; i < qtd; i++) {
    Maiusculas && senhaArray.push((0,_geradores_js__WEBPACK_IMPORTED_MODULE_0__.geraMaiuscula)());
    minusculas && senhaArray.push((0,_geradores_js__WEBPACK_IMPORTED_MODULE_0__.geraMinuscula)());
    numeros && senhaArray.push((0,_geradores_js__WEBPACK_IMPORTED_MODULE_0__.geraNumeros)());
    simbolos && senhaArray.push((0,_geradores_js__WEBPACK_IMPORTED_MODULE_0__.geraSimbolos)());
  }
  return senhaArray.join('').slice(0, qtd); // Aqui estamos usando .join para definir como um string vazia ou seja não vai ter espaços  e .slice para fatiar ela na quantidade requisitada
}

/***/ }),

/***/ "./src/modules/toggle-mode.js":
/*!************************************!*\
  !*** ./src/modules/toggle-mode.js ***!
  \************************************/
/***/ (() => {

var darkMode = true;
var buttonToggle = document.getElementById('toggle-mode');
buttonToggle.addEventListener('click', function (event) {
  document.documentElement.classList.toggle('light');

  //accessibility

  var mode = darkMode ? 'Light' : 'dark';
  event.currentTarget.querySelector('span').textContent = "".concat(mode, " mode ativado");
  darkMode = !darkMode;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/darkmode.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/darkmode.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/main-bg2.svg */ "./src/assets/img/main-bg2.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/main-bg.svg */ "./src/assets/img/main-bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --Darkmode: #2b2a2a;
    --colorprincipal:#e0edfc;
    --textcolor:#EBF0F2;
    --textcolorsun: #252525;
}



html.light{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover; 
    background-position: center center; 
   color: var(--textcolorsun)
}

html.light  .ph-sun,
html:not(.light) .ph-moon  {
    display:none;
    
}

html.light .ph-moon{
color: rgb(3, 163, 255);
}

html:not(.light) .ph-sun{
    color: rgb(184, 3, 255);
    }
    

html:not(.light) .container{
    background-color: #020000 ;
    box-shadow: 0px 0px 30px 20px rgba(177, 54, 248, 0.308); 
}

#toggle-mode{
  
    margin-top: 0.2rem;
    font-size: 2.2rem;
    line-height: none;
    background-color: transparent;
    border-radius: 999rem;
    border: 0;
    cursor: pointer;
    color: var(--textcolor);

}

html{ 
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover; 
    background-position: center center; 
    color: var(--textcolor);
    
}


.sr-only{
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
    
    margin: -1px;
    padding: 0;
    border: 0;
    appearance: none;
}

`, "",{"version":3,"sources":["webpack://./src/assets/css/darkmode.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;AAC3B;;;;AAIA;IACI,yDAA4C;IAC5C,sBAAsB;IACtB,kCAAkC;GACnC;AACH;;AAEA;;IAEI,YAAY;;AAEhB;;AAEA;AACA,uBAAuB;AACvB;;AAEA;IACI,uBAAuB;IACvB;;;AAGJ;IACI,0BAA0B;IAC1B,uDAAuD;AAC3D;;AAEA;;IAEI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,6BAA6B;IAC7B,qBAAqB;IACrB,SAAS;IACT,eAAe;IACf,uBAAuB;;AAE3B;;AAEA;IACI,yDAA2C;IAC3C,sBAAsB;IACtB,kCAAkC;IAClC,uBAAuB;;AAE3B;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,gBAAgB;;IAEhB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB","sourcesContent":[":root{\r\n    --Darkmode: #2b2a2a;\r\n    --colorprincipal:#e0edfc;\r\n    --textcolor:#EBF0F2;\r\n    --textcolorsun: #252525;\r\n}\r\n\r\n\r\n\r\nhtml.light{\r\n    background-image: url('../img/main-bg2.svg');\r\n    background-size: cover; \r\n    background-position: center center; \r\n   color: var(--textcolorsun)\r\n}\r\n\r\nhtml.light  .ph-sun,\r\nhtml:not(.light) .ph-moon  {\r\n    display:none;\r\n    \r\n}\r\n\r\nhtml.light .ph-moon{\r\ncolor: rgb(3, 163, 255);\r\n}\r\n\r\nhtml:not(.light) .ph-sun{\r\n    color: rgb(184, 3, 255);\r\n    }\r\n    \r\n\r\nhtml:not(.light) .container{\r\n    background-color: #020000 ;\r\n    box-shadow: 0px 0px 30px 20px rgba(177, 54, 248, 0.308); \r\n}\r\n\r\n#toggle-mode{\r\n  \r\n    margin-top: 0.2rem;\r\n    font-size: 2.2rem;\r\n    line-height: none;\r\n    background-color: transparent;\r\n    border-radius: 999rem;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: var(--textcolor);\r\n\r\n}\r\n\r\nhtml{ \r\n    background-image: url('../img/main-bg.svg');\r\n    background-size: cover; \r\n    background-position: center center; \r\n    color: var(--textcolor);\r\n    \r\n}\r\n\r\n\r\n.sr-only{\r\n    width: 1px;\r\n    height: 1px;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    \r\n    margin: -1px;\r\n    padding: 0;\r\n    border: 0;\r\n    appearance: none;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box; /* Para fazer o calculo de forma exata*/
}



html{
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: auto;
    border-radius: 2rem;
    gap: 1rem;
    word-break: break-all;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px 20px rgba(54, 219, 248, 0.308); 
    
}



.senha-gerada {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: rgba(5, 187, 5, 0.699);
    font-size: 2rem;
    background-color: #EBF0F2;
    border-radius: 2rem;
    width: auto;
    height: auto;
    text-align: center;
}
.principal{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    align-items: center;
    
}

.gera-senha-principal {
  margin: 2rem;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.gera-senha-sombra {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.gera-senha-borda {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(244, 100%, 16%) 0%,
    hsl(216, 86%, 77%) 8%,
    hsl(219, 83%, 68%) 92%,
    hsl(246, 100%, 59%) 100%
  );
}

.gera-senha-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(251, 100%, 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.gera-senha-principal:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.gera-senha-principal:hover .gera-senha-front {
  transform: translateY(-6px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.gera-senha-principal:active .gera-senha-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}







html.light .gera-senha{
    color: rgb(0, 0, 0);
}
html:not(light) .gera-senha{
    color: rgb(255, 255, 255);
    
}







/* Color Theme Swatches in RGBA */
.Design-gráfico-1-rgba { color: rgba(189, 190, 191, 1); }
.Design-gráfico-2-rgba { color: rgba(234, 240, 242, 1); }
.Design-gráfico-3-rgba { color: rgba(140, 140, 140, 1); }
.Design-gráfico-4-rgba { color: rgba(63, 63, 63, 1); }
.Design-gráfico-5-rgba { color: rgba(12, 12, 12, 1); }

/* Color Theme Swatches in HSLA */
.Design-gráfico-1-hsla { color: hsla(213, 1, 74, 1); }
.Design-gráfico-2-hsla { color: hsla(196, 22, 93, 1); }
.Design-gráfico-3-hsla { color: hsla(0, 0, 55, 1); }
.Design-gráfico-4-hsla { color: hsla(0, 0, 25, 1); }
.Design-gráfico-5-hsla { color: hsla(0, 0, 5, 1); }

`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB,EAAE,uCAAuC;AACnE;;;;AAIA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,qBAAqB;IACrB,oCAAoC;IACpC,uDAAuD;;AAE3D;;;;AAIA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,6BAA6B;IAC7B,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,oBAAoB;IACpB,oCAAoC;IACpC,gBAAgB;IAChB,mBAAmB;;AAEvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kCAAkC;EAClC,sBAAsB;EACtB,0BAA0B;EAC1B;;;+BAG6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB;;;;;;GAMC;AACH;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,2BAA2B;EAC3B;;;+BAG6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B;;;iCAG+B;AACjC;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;;;;;;;AAQA;IACI,mBAAmB;AACvB;AACA;IACI,yBAAyB;;AAE7B;;;;;;;;AAQA,iCAAiC;AACjC,yBAAyB,6BAA6B,EAAE;AACxD,yBAAyB,6BAA6B,EAAE;AACxD,yBAAyB,6BAA6B,EAAE;AACxD,yBAAyB,0BAA0B,EAAE;AACrD,yBAAyB,0BAA0B,EAAE;;AAErD,iCAAiC;AACjC,yBAAyB,0BAA0B,EAAE;AACrD,yBAAyB,2BAA2B,EAAE;AACtD,yBAAyB,wBAAwB,EAAE;AACnD,yBAAyB,wBAAwB,EAAE;AACnD,yBAAyB,uBAAuB,EAAE","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box; /* Para fazer o calculo de forma exata*/\r\n}\r\n\r\n\r\n\r\nhtml{\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-weight: 700;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30rem;\r\n    height: auto;\r\n    border-radius: 2rem;\r\n    gap: 1rem;\r\n    word-break: break-all;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0px 0px 30px 20px rgba(54, 219, 248, 0.308); \r\n    \r\n}\r\n\r\n\r\n\r\n.senha-gerada {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-weight: 700;\r\n    color: rgba(5, 187, 5, 0.699);\r\n    font-size: 2rem;\r\n    background-color: #EBF0F2;\r\n    border-radius: 2rem;\r\n    width: auto;\r\n    height: auto;\r\n    text-align: center;\r\n}\r\n.principal{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-weight: 400;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.gera-senha-principal {\r\n  margin: 2rem;\r\n  position: relative;\r\n  border: none;\r\n  background: transparent;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  outline-offset: 4px;\r\n  transition: filter 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.gera-senha-sombra {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  background: hsl(0deg 0% 0% / 0.25);\r\n  will-change: transform;\r\n  transform: translateY(2px);\r\n  transition:\r\n    transform\r\n    600ms\r\n    cubic-bezier(.3, .7, .4, 1);\r\n}\r\n\r\n.gera-senha-borda {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  background: linear-gradient(\r\n    to left,\r\n    hsl(244, 100%, 16%) 0%,\r\n    hsl(216, 86%, 77%) 8%,\r\n    hsl(219, 83%, 68%) 92%,\r\n    hsl(246, 100%, 59%) 100%\r\n  );\r\n}\r\n\r\n.gera-senha-front {\r\n  display: block;\r\n  position: relative;\r\n  padding: 12px 27px;\r\n  border-radius: 12px;\r\n  font-size: 1.1rem;\r\n  color: white;\r\n  background: hsl(251, 100%, 47%);\r\n  will-change: transform;\r\n  transform: translateY(-4px);\r\n  transition:\r\n    transform\r\n    600ms\r\n    cubic-bezier(.3, .7, .4, 1);\r\n}\r\n\r\n.gera-senha-principal:hover {\r\n  filter: brightness(110%);\r\n  -webkit-filter: brightness(110%);\r\n}\r\n\r\n.gera-senha-principal:hover .gera-senha-front {\r\n  transform: translateY(-6px);\r\n  transition:\r\n    transform\r\n    250ms\r\n    cubic-bezier(.3, .7, .4, 1.5);\r\n}\r\n\r\n.gera-senha-principal:active .gera-senha-front {\r\n  transform: translateY(-2px);\r\n  transition: transform 34ms;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nhtml.light .gera-senha{\r\n    color: rgb(0, 0, 0);\r\n}\r\nhtml:not(light) .gera-senha{\r\n    color: rgb(255, 255, 255);\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Color Theme Swatches in RGBA */\r\n.Design-gráfico-1-rgba { color: rgba(189, 190, 191, 1); }\r\n.Design-gráfico-2-rgba { color: rgba(234, 240, 242, 1); }\r\n.Design-gráfico-3-rgba { color: rgba(140, 140, 140, 1); }\r\n.Design-gráfico-4-rgba { color: rgba(63, 63, 63, 1); }\r\n.Design-gráfico-5-rgba { color: rgba(12, 12, 12, 1); }\r\n\r\n/* Color Theme Swatches in HSLA */\r\n.Design-gráfico-1-hsla { color: hsla(213, 1, 74, 1); }\r\n.Design-gráfico-2-hsla { color: hsla(196, 22, 93, 1); }\r\n.Design-gráfico-3-hsla { color: hsla(0, 0, 55, 1); }\r\n.Design-gráfico-4-hsla { color: hsla(0, 0, 25, 1); }\r\n.Design-gráfico-5-hsla { color: hsla(0, 0, 5, 1); }\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/darkmode.css":
/*!*************************************!*\
  !*** ./src/assets/css/darkmode.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./darkmode.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/darkmode.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/main-bg.svg":
/*!************************************!*\
  !*** ./src/assets/img/main-bg.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e96d396242da831ac076.svg";

/***/ }),

/***/ "./src/assets/img/main-bg2.svg":
/*!*************************************!*\
  !*** ./src/assets/img/main-bg2.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7b56f3bcd5a8d5896887.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_darkmode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/darkmode.css */ "./src/assets/css/darkmode.css");
/* harmony import */ var _modules_toggle_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggle-mode.js */ "./src/modules/toggle-mode.js");
/* harmony import */ var _modules_toggle_mode_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_toggle_mode_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_dados_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dados.js */ "./src/modules/dados.js");




(0,_modules_dados_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map