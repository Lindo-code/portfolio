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
/***/ (() => {

eval("const query = {\n    year: document.querySelector(\".year\"),\n}\n  \nwindow.onscroll = function() {\n    scrollFunction();\n};\n    \nwindow.onload = function() {\n    copyright();\n};\n\nfunction scrollFunction() {\n    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = \"block\" : query.scrollBtn.style.display = \"none\";\n};\n    \nfunction copyright() {\n    const date = new Date();\n    const currYear = date.getFullYear();\n    const str = `${currYear}`;\n    query.year.innerText = str;\n};\n    \n// function delay(url) {\n//     setTimeout(function() {\n//         window.open(url, \"_blank\") = url;\n//     }, 1000);\n// };\n\n//# sourceURL=webpack://portfolio/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;