/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {showLinks, showBio} = __webpack_require__(/*! ./utils/my-functions */ \"./src/utils/my-functions.js\");\nconst {queries} = __webpack_require__(/*! ./stored-obj-and-arr */ \"./src/stored-obj-and-arr.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  queries.title.innerText = \"LINDO MATABANE\";\n  showLinks();\n  showBio();\n});\n\n\n//# sourceURL=webpack://portfolio/./src/home.js?");

/***/ }),

/***/ "./src/stored-obj-and-arr.js":
/*!***********************************!*\
  !*** ./src/stored-obj-and-arr.js ***!
  \***********************************/
/***/ ((module) => {

eval("const queries = {\n  header: document.querySelector(\".header\"),\n  title: document.querySelector(\".title\"),\n  links: document.querySelectorAll(\".link\"),\n  bioTitle: document.querySelector(\".bio-title\"),\n  bio: document.querySelector(\".bio\"),\n  cards: document.querySelector(\".cards-container\"),\n};\n\nconst str = {\n  nav: [\"HOME\", \"ABOUT\", \"CONTACT\"],\n  mainTitle: \"LINDO MATABANE\",\n  cardLinkIcon: \"➜\",\n  cardLinkTitle: \"View More\",\n  bio: {\n    title: \"WHO AM I?\",\n    text: \"I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer.\\n\\nAs someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project.\",\n  },\n};\n\nconst cardsContent = [\n  {\n    img: \"./assets/icons/py.png\",\n    title: \"PYTHON\",\n    link: \"https://www.sololearn.com/profile/25472119\",\n  },\n  {\n    img: \"./assets/icons/js.png\",\n    title: \"JAVASCRIPT\",\n    link: \"https://www.sololearn.com/profile/25472119\",\n  },\n  { img: \"./assets/icons/html.png\", title: \"HTML\" },\n  { img: \"./assets/icons/css.png\", title: \"CSS\" },\n  { img: \"./assets/icons/postgresql.jpg\", title: \"POSTGRESQL\" },\n  { img: \"./assets/icons/docker.png\", title: \"DOCKER\" },\n  { img: \"./assets/icons/jasmine.png\", title: \"JASMINE\" },\n  { img: \"./assets/icons/git.png\", title: \"GIT\" },\n  { img: \"./assets/icons/node.png\", title: \"NODE\" },\n  { img: \"./assets/icons/webpack.png\", title: \"WEBPACK\" },\n];\n\nmodule.exports = { cardsContent, str, queries };\n\n\n//# sourceURL=webpack://portfolio/./src/stored-obj-and-arr.js?");

/***/ }),

/***/ "./src/utils/my-functions.js":
/*!***********************************!*\
  !*** ./src/utils/my-functions.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {cardsContent, str, queries} = __webpack_require__(/*! ../stored-obj-and-arr */ \"./src/stored-obj-and-arr.js\");\n\nconst showLinks = () => {\n  for (let i = 0; i < str.nav.length; i++) {\n    queries.links[i].innerText = `${str.nav[i]}`;\n  }\n};\n\nconst showBio = () => {\n  queries.bioTitle.innerText = str.bio.title;\n  queries.bio.innerText = str.bio.text;\n};\n\nconst populateCards = () => {\n  let cards = \"\";\n  for (let i = 0; i < cardsContent.length; i++) {\n    cards += `<div class='card'><h4>${cardsContent[i].title}</h4>\n          <img src=${cardsContent[i].img} alt=\"javascript_abbreviation_image\" class=\"skill-img\" />\n          <a href=${cardsContent[i].link}>\n            <span>${str.cardLinkTitle} <span style=\"color:red; \">${str.cardLinkIcon}</span></span>\n          </a></div>`;\n  }\n  queries.cards.innerHTML = cards;\n};\n\nmodule.exports = { showLinks, populateCards, showBio };\n\n\n//# sourceURL=webpack://portfolio/./src/utils/my-functions.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;