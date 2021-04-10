/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproducts"] = self["webpackChunkproducts"] || []).push([["src_index_js"],{

/***/ "./src/faker.js":
/*!**********************!*\
  !*** ./src/faker.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sameFuncAsDefault [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sameFuncAsDefault\": () => /* binding */ sameFuncAsDefault,\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst nameList = [\n  'Javascript',\n  'Golang',\n  'Python',\n  'Rust',\n  'Elexir',\n  'Clojure',\n  'Java',\n  'C++',\n  'Haskel',\n  'Typescript',\n];\n\nconst sameFuncAsDefault = () => {\n  return nameList[Math.floor(Math.random() * 10)];\n};\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return nameList[Math.floor(Math.random() * 10)];\n}\n\n\n//# sourceURL=webpack://products/./src/faker.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faker */ \"./src/faker.js\");\n\n\nlet products = '';\n\nfor (let i = 0; i < 5; i++) {\n  const name = (0,_faker__WEBPACK_IMPORTED_MODULE_0__.default)();\n  products += `<div>${name}</div>`;\n}\n\ndocument.querySelector('#dev-products').innerHTML = products;\n\n\n//# sourceURL=webpack://products/./src/index.js?");

/***/ })

}]);