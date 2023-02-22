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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { copyright, scrollFunction, addAddress } = __webpack_require__(/*! ./utils/my-functions */ \"./src/utils/my-functions.js\");\n\nwindow.onscroll = function () {\n  scrollFunction();\n};\n\nwindow.onload = function () {\n  copyright();\n  addAddress();\n};\n\nform.addEventListener(\"submit\", handleSubmit);\n\n\n//# sourceURL=webpack://portfolio/./src/main.js?");

/***/ }),

/***/ "./src/stored-obj-and-arr.js":
/*!***********************************!*\
  !*** ./src/stored-obj-and-arr.js ***!
  \***********************************/
/***/ ((module) => {

eval("const queries = {\n  header: document.querySelector(\".header\"),\n  title: document.querySelector(\".title\"),\n  links: document.querySelectorAll(\".link\"),\n  bioTitle: document.querySelector(\".bio-title\"),\n  bio: document.querySelector(\".bio\"),\n  cards: document.querySelector(\".cards-container\"),\n  form: document.querySelector(\".my-form\"),\n  status: document.querySelector(\".my-form-status\"),\n  year: document.querySelector(\".year\"),\n  address: document.querySelector(\".my-address\"),\n};\n\nconst str = {\n  nav: [\"HOME\", \"ABOUT\", \"CONTACT\"],\n  mainTitle: \"LINDO MATABANE\",\n  cardLinkIcon: \"➜\",\n  cardLinkTitle: \"View More\",\n  bio: {\n    title: \"WHO AM I?\",\n    text: \"I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer.\\n\\nAs someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project.\",\n  },\n  address: \"10238 Seleteng, Ga-Maleka\\nMphahlele\\nPolokwane\\n0736\"\n};\n\nconst cardsContent = [\n  {\n    img: \"./assets/icons/py.png\",\n    title: \"PYTHON\",\n    link: \"https://www.sololearn.com/profile/25472119\",\n  },\n  {\n    img: \"./assets/icons/js.png\",\n    title: \"JAVASCRIPT\",\n    link: \"https://www.sololearn.com/profile/25472119\",\n  },\n  { img: \"./assets/icons/html.png\", title: \"HTML\" },\n  { img: \"./assets/icons/css.png\", title: \"CSS\" },\n  { img: \"./assets/icons/postgresql.jpg\", title: \"POSTGRESQL\" },\n  { img: \"./assets/icons/docker.png\", title: \"DOCKER\" },\n  { img: \"./assets/icons/jasmine.png\", title: \"JASMINE\" },\n  { img: \"./assets/icons/git.png\", title: \"GIT\" },\n  { img: \"./assets/icons/node.png\", title: \"NODE\" },\n  { img: \"./assets/icons/webpack.png\", title: \"WEBPACK\" },\n];\n\nmodule.exports = { cardsContent, str, queries };\n\n\n//# sourceURL=webpack://portfolio/./src/stored-obj-and-arr.js?");

/***/ }),

/***/ "./src/utils/my-functions.js":
/*!***********************************!*\
  !*** ./src/utils/my-functions.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { cardsContent, str, queries } = __webpack_require__(/*! ../stored-obj-and-arr */ \"./src/stored-obj-and-arr.js\");\n\nconst copyright = () => {\n  const date = new Date();\n  const currYear = date.getFullYear();\n  const str = `${currYear}`;\n  queries.year.innerText = str;\n};\n\nconst showLinks = () => {\n  for (let i = 0; i < str.nav.length; i++) {\n    queries.links[i].innerText = `${str.nav[i]}`;\n  }\n};\n\nconst showBio = () => {\n  queries.bioTitle.innerText = str.bio.title;\n  queries.bio.innerText = str.bio.text;\n};\n\nconst populateCards = () => {\n  let cards = \"\";\n  for (let i = 0; i < cardsContent.length; i++) {\n    cards += `<div class='card'><h4>${cardsContent[i].title}</h4>\n          <img src=${cardsContent[i].img} alt=\"javascript_abbreviation_image\" class=\"skill-img\" />\n          <a href=${cardsContent[i].link}>\n            <span>${str.cardLinkTitle} <span style=\"color:red; \">${str.cardLinkIcon}</span></span>\n          </a></div>`;\n  }\n  queries.cards.innerHTML = cards;\n};\n\nconst addAddress = () => {\n  queries.address.innerText = str.address;\n}\n\nconst scrollFunction = () => {\n  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = \"block\" : query.scrollBtn.style.display = \"none\";\n};\n\nconst handleSubmit = (event) => {\n  event.preventDefault();\n  const data = new FormData(event.target);\n  fetch(event.target.action, {\n    method: queries.form.method,\n    body: data,\n    headers: { Accept: \"application/json\" },\n  })\n    .then((response) => {\n      if (response.ok) {\n        queries.status.innerHTML = \"Thanks for your submission!\";\n        queries.form.reset();\n      } else {\n        response.json().then((data) => {\n          if (Object.hasOwn(data, \"errors\")) {\n            queries.status.innerHTML = data[\"errors\"]\n              .map((error) => error[\"message\"])\n              .join(\", \");\n          } else {\n            queries.status.innerHTML =\n              \"Oops! There was a problem submitting your form\";\n          }\n        });\n      }\n    })\n    .catch((error) => {\n      queries.status.innerHTML =\n        \"Oops! There was a problem submitting your form\";\n    });\n};\n\nmodule.exports = { showLinks, populateCards, showBio, handleSubmit, copyright, scrollFunction, addAddress };\n\n\n//# sourceURL=webpack://portfolio/./src/utils/my-functions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;