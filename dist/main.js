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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage)\n\n\n\n//# sourceURL=webpack://libraryapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/modules/book.js\");\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.js */ \"./src/modules/library.js\");\n\n\nconst library = new _library_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet content = document.querySelector(\"#content\")\nclass UI{\n\n    static loadHomepage(){\n        \n        let header = UI.createHeader()\n        let inputDiv = UI.createBookInput()\n\n        content.appendChild(header)\n        content.appendChild(inputDiv)\n        \n\n        //let button = document.querySelector(\"#inputButton\")\n        //button.addEventListener(\"click\", UI.getUserInput)\n\n        //let viewBooksButton = document.querySelector(\"#viewBooks\")\n        //viewBooksButton.addEventListener(\"click\", UI.bookDisplay)\n\n    }\n\n    static getUserInput() {\n        console.log(\"adding\")\n        let bookName = document.getElementById(\"bookInput\").value\n        \n        let author = document.getElementById(\"authorInput\").value\n        let pages = document.getElementById(\"pagesInput\").value\n        let checkbox = document.querySelector(\".ckbx\").checked\n        UI.clearInputs()\n        let bk = new _book_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bookName, author, pages, checkbox)\n\n        library.addBook(bk)\n    }\n\n    static clearInputs(){\n        let bookName = document.getElementById(\"bookInput\")\n        let author = document.getElementById(\"authorInput\")\n        let pages = document.getElementById(\"pagesInput\")\n        let checkbox = document.querySelector(\".ckbx\")\n\n        bookName.value = \"\"\n        author.value = \"\"\n        pages.value = \"\"\n        checkbox.checked = false\n    }\n\n    static createHeader(){\n        let header = document.createElement(\"h1\")\n        header.setAttribute(\"id\", \"websiteHeading\")\n        header.innerText = \"Welcome to the Library!\"\n        return header\n    }\n\n    \n    static createBookDisplay(bk){\n\n        let bkdiv = document.createElement(\"div\")\n        bkdiv.classList.add(\"bkdiv\")\n\n        let book = document.createElement(\"h4\")\n        bkdiv.setAttribute(\"id\",\"book\")\n        book.innerText = bk.title\n\n        let author = document.createElement(\"p\")\n        author.setAttribute(\"id\", \"author\")\n        author.innerText = `By ${bk.author}`\n\n        let pages = document.createElement(\"p\")\n        pages.setAttribute(\"id\", \"pages\")\n        pages.innerText = `Pages: ${bk.pages}`\n\n        let read = document.createElement(\"p\")\n        if (bk.read == false){\n            read.innerText = \"Not Read\"\n        } else {\n            read.innerText = \"Read\"\n        }\n\n        let checkbox = document.createElement(\"button\")\n        checkbox.setAttribute(\"id\", \"ckButton\")\n        if (bk.read){\n            checkbox.innerText = \"Not Read\"\n        } else {\n            checkbox.innerText = \"Read\"\n        }\n        \n        \n        checkbox.addEventListener(\"click\", (e) => {\n            if (bk.read == false){\n                bk.read = true\n                read.innerText = \"Read\"\n                checkbox.innerText = \"Not Read\"\n            } else {\n                bk.read = false\n                read.innerText = \"Not Read\"\n                checkbox.innerText = \" Read\"\n            }\n        } )\n\n        bkdiv.appendChild(book)\n        bkdiv.appendChild(author)\n        bkdiv.appendChild(pages)\n        bkdiv.appendChild(read)\n        bkdiv.appendChild(checkbox)\n        return bkdiv\n\n\n    }\n\n    static clearDisplay(){\n        let bookDiv = document.querySelector(\".bkContainer\")\n        while(bookDiv.firstChild){\n            bookDiv.removeChild(bookDiv.firstChild)\n        }\n    }\n    static bookDisplay()\n    {\n        \n        let bookDiv = document.createElement(\"div\")\n        bookDiv.classList.add(\"bkContainer\")\n        \n        console.log(content.contains(bookDiv))\n        if(document.querySelector(\".bkContainer\")){\n            let temp = document.querySelector(\".bkContainer\")\n            temp.remove()\n        }\n\n        \n        let collection = library.displayBooks()\n\n        collection.forEach(element => {\n            let bk = UI.createBookDisplay(element)\n            bookDiv.appendChild(bk)\n        })\n        console.log(bookDiv.firstChild)\n\n        content.appendChild(bookDiv)\n\n    }\n\n\n\n\n\n    static createBookInput(){\n        //book\n        let book = document.createElement(\"input\")\n        book.type = 'text'\n        book.placeholder = \"Book\"\n        book.setAttribute(\"id\", \"bookInput\")\n        book.classList.add(\"bkInput\")\n     \n        //author\n        let author = document.createElement(\"input\")\n        author.type = 'text'\n        author.placeholder = \"Author\"\n        author.setAttribute(\"id\", \"authorInput\")\n        author.classList.add(\"bkInput\")\n\n        //pages\n        let pages = document.createElement(\"input\")\n        pages.type = 'text'\n        pages.placeholder = \"pages\"\n        pages.setAttribute(\"id\", \"pagesInput\")\n        pages.classList.add(\"bkInput\")\n\n        //Checkbox div\n        let checkbox = document.createElement(\"div\")\n        checkbox.setAttribute(\"id\", \"checkboxDiv\")\n        let checkboxText = document.createElement(\"p\")\n        checkboxText.classList.add(\"ckbxElement\")\n        checkboxText.innerText = \"Read?\"\n\n        let read = document.createElement(\"input\")\n        read.classList.add(\"ckbxElement\")\n        read.setAttribute(\"class\", \"ckbx\")\n        read.type = \"checkbox\"\n        read.classList.add(\"bkInput\")\n        checkbox.appendChild(checkboxText)\n        checkbox.appendChild(read)\n\n        // input button\n        let button = document.createElement(\"button\")\n        button.setAttribute(\"id\", \"inputButton\")\n        button.innerText = \"Add\"\n        button.addEventListener(\"click\", UI.getUserInput)\n\n        let inputDiv = document.createElement(\"div\")\n        inputDiv.classList.add(\"inputDiv\")\n\n        let viewBooksButton = document.createElement(\"button\")\n        viewBooksButton.setAttribute(\"id\", \"viewBooks\")\n        viewBooksButton.innerText = \"View Books\"\n        viewBooksButton.addEventListener(\"click\", UI.bookDisplay)\n        \n        inputDiv.appendChild(book)\n        inputDiv.appendChild(author)\n        inputDiv.appendChild(pages)\n        inputDiv.appendChild(checkbox)\n        inputDiv.appendChild(button)\n        inputDiv.appendChild(viewBooksButton)\n        return inputDiv\n    }\n\n    \n\n}\n\n//# sourceURL=webpack://libraryapp/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/book.js":
/*!*****************************!*\
  !*** ./src/modules/book.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book{\n    constructor(title = \"unknown\",author = \"unknown\", pages=\"unknown\", read=false){\n        this.title = title\n        this.author = author\n        this.pages = pages\n        this.read = read\n    }\n}\n\n//# sourceURL=webpack://libraryapp/./src/modules/book.js?");

/***/ }),

/***/ "./src/modules/library.js":
/*!********************************!*\
  !*** ./src/modules/library.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Library)\n/* harmony export */ });\nclass Library {\n\n    constructor(){\n        this.Library = []\n        //Library.push(bk1)\n    }\n\n    addBook(book){\n        this.Library.push(book)\n    }\n\n    displayBooks(){\n        return this.Library\n    }\n\n}\n\n//# sourceURL=webpack://libraryapp/./src/modules/library.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;