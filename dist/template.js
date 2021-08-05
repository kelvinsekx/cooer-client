/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/template.js":
/*!****************************!*\
  !*** ./public/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TEMPLATE = function ({markup, styles, context, where}) {\r\n    return `\r\n    <!DOCTYPE html>\r\n    <html lang=\"en\">\r\n    <head>\r\n        <meta http-equiv=\"Content-Security-Policy\" content=\"default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' \">\r\n\r\n        <meta charset=\"UTF-8\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <title>ONstreet</title>\r\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n<link href=\"https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap\" rel=\"stylesheet\">\r\n        <style>body,*{\r\n            margin:0;padding:0;box-sizing: border-box;font-family: 'Raleway', sans-serif;\r\n        }\r\n        </style>\r\n        ${styles}\r\n    </head>\r\n    <body>\r\n        <div id=\"___root\">${markup}</div>\r\n        <script>\r\n            window.APP = {\r\n                ${where}: ${context}\r\n            }\r\n        </script>\r\n        <script\r\n            type=\"text/javascript\"\r\n            src=\"/dist/bundle.js\"\r\n        >\r\n        </script>\r\n    </body>\r\n    </html>\r\n    `\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TEMPLATE);\n\n//# sourceURL=webpack://client/./public/template.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/template.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;