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

/***/ "./src/element/action/ButtonElement.ts":
/*!*********************************************!*\
  !*** ./src/element/action/ButtonElement.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass ButtonElement extends Element_1.default {\n    constructor(text, x = \"0px\", y = \"0px\") {\n        super(\"button\", x, y);\n        this.element.innerHTML = text;\n    }\n}\nexports[\"default\"] = ButtonElement;\n\n\n//# sourceURL=webpack://tes/./src/element/action/ButtonElement.ts?");

/***/ }),

/***/ "./src/element/base/Element.ts":
/*!*************************************!*\
  !*** ./src/element/base/Element.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Element {\n    constructor(type, x = \"0px\", y = \"0px\") {\n        this.node = null;\n        this.children = [];\n        this._x = 0;\n        this._y = 0;\n        this.name = \"\";\n        if (type != null) {\n            this.node = document.createElement(type);\n            this.element.style.position = \"absolute\";\n            this.x = x;\n            this.y = y;\n        }\n    }\n    createElement(type, inHtml, x = \"0px\", y = \"0px\") {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            const template = document.createElement('div');\n            const parant = this.element.parentElement;\n            if (parant != null)\n                parant.removeChild(this.element);\n            template.innerHTML = inHtml;\n            let svg = template.querySelector(type);\n            let style = ((_a = this.node) === null || _a === void 0 ? void 0 : _a.getAttribute(\"style\")) || String(\"\");\n            svg.setAttribute(\"style\", style);\n            this.node = svg;\n            template.children[0].remove();\n            if (parant != null)\n                parant.appendChild(this.element);\n        });\n    }\n    appendChild(...childs) {\n        childs.forEach((child) => {\n            this.children.push(child);\n            this.element.appendChild(child.element);\n        });\n    }\n    removeChild(...childs) {\n        childs.forEach((child) => {\n            this.children = this.children.filter((c) => c !== child);\n            this.element.removeChild(child.element);\n        });\n    }\n    getChildren() {\n        return this.children;\n    }\n    innerHTML() {\n        return this.element.innerHTML;\n    }\n    setStyle(style) {\n        this.element.setAttribute(\"style\", style);\n        this.element.style.top = (this._x.toString() + \"px\");\n        this.element.style.left = (this._y.toString() + \"px\");\n    }\n    addStyle(style) {\n        this.element.setAttribute(\"style\", this.element.getAttribute(\"style\") + style);\n    }\n    removeStyle(style) {\n        this.element.setAttribute(\"style\", String(this.element.getAttribute(\"style\")).replace(style, \"\"));\n    }\n    get element() {\n        return this.node;\n    }\n    set element(v) {\n        this.node = v;\n    }\n    get x() {\n        return this._x;\n    }\n    set x(v) {\n        if (v == typeof (Number)) {\n            this._x = Number(v);\n            this.node.style.left = (this._x.toString() + \"px\");\n        }\n        else {\n            this._x = parseInt(v.toString());\n            this.node.style.left = v;\n        }\n    }\n    get y() {\n        return this._y;\n    }\n    set y(v) {\n        if (v == typeof (Number)) {\n            this._y = Number(v);\n            this.node.style.top = (this._y.toString() + \"px\");\n        }\n        else {\n            this._y = parseInt(v.toString());\n            this.node.style.top = v;\n        }\n    }\n    setOnClick(a) {\n        this.element.onclick = a;\n    }\n    setOnMouseOver(a) {\n        this.element.onmouseover = a;\n    }\n    setOnMouseOut(a) {\n        this.element.onmouseout = a;\n    }\n    setOnMouseDown(a) {\n        this.element.onmousedown = a;\n    }\n    setOnMouseUp(a) {\n        this.element.onmouseup = a;\n    }\n    setOnMouseEnter(a) {\n        this.element.onmouseenter = a;\n    }\n}\nexports[\"default\"] = Element;\n\n\n//# sourceURL=webpack://tes/./src/element/base/Element.ts?");

/***/ }),

/***/ "./src/element/h/H1Element.ts":
/*!************************************!*\
  !*** ./src/element/h/H1Element.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass H1Element extends Element_1.default {\n    constructor(txt = \"\", x = \"0px\", y = \"0px\") {\n        super(\"h1\", x, y);\n        this.element.innerHTML = txt;\n    }\n}\nexports[\"default\"] = H1Element;\n\n\n//# sourceURL=webpack://tes/./src/element/h/H1Element.ts?");

/***/ }),

/***/ "./src/element/h/H2Element.ts":
/*!************************************!*\
  !*** ./src/element/h/H2Element.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass H2Element extends Element_1.default {\n    constructor(txt = \"\", x = \"0px\", y = \"0px\") {\n        super(\"h2\", x, y);\n        this.element.innerHTML = txt;\n    }\n}\nexports[\"default\"] = H2Element;\n\n\n//# sourceURL=webpack://tes/./src/element/h/H2Element.ts?");

/***/ }),

/***/ "./src/element/h/H3Element.ts":
/*!************************************!*\
  !*** ./src/element/h/H3Element.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass H3Element extends Element_1.default {\n    constructor(txt = \"\", x = \"0px\", y = \"0px\") {\n        super(\"h3\", x, y);\n        this.element.innerHTML = txt;\n    }\n}\nexports[\"default\"] = H3Element;\n\n\n//# sourceURL=webpack://tes/./src/element/h/H3Element.ts?");

/***/ }),

/***/ "./src/element/image/SvgElement.ts":
/*!*****************************************!*\
  !*** ./src/element/image/SvgElement.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst __1 = __webpack_require__(/*! ../ */ \"./src/element/index.ts\");\nclass SvgElement extends __1.Element {\n    constructor(src) {\n        super(\"svg\", \"0px\", \"0px\");\n        this.load(src);\n    }\n    load(src) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield fetch(src).then((response) => {\n                return response.text();\n            }).then((data) => this.createElement(\"svg\", data)).catch((err) => this.element = document.createElement(\"svg\"));\n        });\n    }\n}\nexports[\"default\"] = SvgElement;\n\n\n//# sourceURL=webpack://tes/./src/element/image/SvgElement.ts?");

/***/ }),

/***/ "./src/element/index.ts":
/*!******************************!*\
  !*** ./src/element/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SvgElement = exports.Pane = exports.AnchorPane = exports.ButtonElement = exports.PageElement = exports.BodyElement = exports.DivElement = exports.H3Element = exports.H2Element = exports.H1Element = exports.Element = void 0;\nconst Element_1 = __importDefault(__webpack_require__(/*! ./base/Element */ \"./src/element/base/Element.ts\"));\nexports.Element = Element_1.default;\nconst H1Element_1 = __importDefault(__webpack_require__(/*! ./h/H1Element */ \"./src/element/h/H1Element.ts\"));\nexports.H1Element = H1Element_1.default;\nconst H2Element_1 = __importDefault(__webpack_require__(/*! ./h/H2Element */ \"./src/element/h/H2Element.ts\"));\nexports.H2Element = H2Element_1.default;\nconst H3Element_1 = __importDefault(__webpack_require__(/*! ./h/H3Element */ \"./src/element/h/H3Element.ts\"));\nexports.H3Element = H3Element_1.default;\nconst DivElement_1 = __importDefault(__webpack_require__(/*! ./layers/DivElement */ \"./src/element/layers/DivElement.ts\"));\nexports.DivElement = DivElement_1.default;\nconst BodyElement_1 = __importDefault(__webpack_require__(/*! ./layers/BodyElement */ \"./src/element/layers/BodyElement.ts\"));\nexports.BodyElement = BodyElement_1.default;\nconst PageElement_1 = __importDefault(__webpack_require__(/*! ./page/PageElement */ \"./src/element/page/PageElement.ts\"));\nexports.PageElement = PageElement_1.default;\nconst ButtonElement_1 = __importDefault(__webpack_require__(/*! ./action/ButtonElement */ \"./src/element/action/ButtonElement.ts\"));\nexports.ButtonElement = ButtonElement_1.default;\n// Layer Elements\nconst AnchorPane_1 = __importDefault(__webpack_require__(/*! ./layers/AnchorPane */ \"./src/element/layers/AnchorPane.ts\"));\nexports.AnchorPane = AnchorPane_1.default;\nconst Pane_1 = __importDefault(__webpack_require__(/*! ./layers/Pane */ \"./src/element/layers/Pane.ts\"));\nexports.Pane = Pane_1.default;\n// Image Elements\nconst SvgElement_1 = __importDefault(__webpack_require__(/*! ./image/SvgElement */ \"./src/element/image/SvgElement.ts\"));\nexports.SvgElement = SvgElement_1.default;\n\n\n//# sourceURL=webpack://tes/./src/element/index.ts?");

/***/ }),

/***/ "./src/element/layers/AnchorPane.ts":
/*!******************************************!*\
  !*** ./src/element/layers/AnchorPane.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst __1 = __webpack_require__(/*! ../ */ \"./src/element/index.ts\");\nclass AnchorPane extends __1.Element {\n    constructor() {\n        super(\"div\", 0, 0);\n        this.setStyle(\"background-color: transparent; width: 100%; height: 100%; position: fixed; inset: 0px;\");\n    }\n    static setTopAnchor(child, value) {\n        child.element.style.top = value.toString() + \"px\";\n    }\n    static setBottomAnchor(child, value) {\n        child.element.style.bottom = value.toString() + \"px\";\n    }\n    static setLeftAnchor(child, value) {\n        child.element.style.left = value.toString() + \"px\";\n    }\n    static setRightAnchor(child, value) {\n        child.element.style.right = value.toString() + \"px\";\n    }\n}\nexports[\"default\"] = AnchorPane;\n\n\n//# sourceURL=webpack://tes/./src/element/layers/AnchorPane.ts?");

/***/ }),

/***/ "./src/element/layers/BodyElement.ts":
/*!*******************************************!*\
  !*** ./src/element/layers/BodyElement.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass BodyElement extends Element_1.default {\n    constructor(x = \"0px\", y = \"0px\") {\n        super(\"body\", x, y);\n        document.body = this.element;\n    }\n}\nexports[\"default\"] = BodyElement;\n\n\n//# sourceURL=webpack://tes/./src/element/layers/BodyElement.ts?");

/***/ }),

/***/ "./src/element/layers/DivElement.ts":
/*!******************************************!*\
  !*** ./src/element/layers/DivElement.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass DivElement extends Element_1.default {\n    constructor(x = \"0px\", y = \"0px\") {\n        super(\"div\", x, y);\n    }\n}\nexports[\"default\"] = DivElement;\n\n\n//# sourceURL=webpack://tes/./src/element/layers/DivElement.ts?");

/***/ }),

/***/ "./src/element/layers/Pane.ts":
/*!************************************!*\
  !*** ./src/element/layers/Pane.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst __1 = __webpack_require__(/*! ../ */ \"./src/element/index.ts\");\nclass Pane extends __1.Element {\n    constructor() {\n        super(\"div\", 0, 0);\n    }\n}\nexports[\"default\"] = Pane;\n\n\n//# sourceURL=webpack://tes/./src/element/layers/Pane.ts?");

/***/ }),

/***/ "./src/element/page/PageElement.ts":
/*!*****************************************!*\
  !*** ./src/element/page/PageElement.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Element_1 = __importDefault(__webpack_require__(/*! ../base/Element */ \"./src/element/base/Element.ts\"));\nclass PageElement extends Element_1.default {\n    constructor(page) {\n        super(\"body\", 0, 0);\n        this.page = page;\n    }\n    init() {\n        document.body = this.element;\n        this.page(this);\n    }\n}\nexports[\"default\"] = PageElement;\n\n\n//# sourceURL=webpack://tes/./src/element/page/PageElement.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Page3_1 = __webpack_require__(/*! ./page/Page3 */ \"./src/page/Page3.ts\");\nPage3_1.page3.init();\n// page2.init();\n\n\n//# sourceURL=webpack://tes/./src/index.ts?");

/***/ }),

/***/ "./src/page/Page3.ts":
/*!***************************!*\
  !*** ./src/page/Page3.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.page3 = void 0;\nconst element_1 = __webpack_require__(/*! ../element */ \"./src/element/index.ts\");\nexports.page3 = new element_1.PageElement((body) => {\n    const pane = new element_1.AnchorPane();\n    const button = new element_1.ButtonElement(\"Click me\");\n    const svg = new element_1.SvgElement(\"assets/vector/length.svg\");\n    function load() {\n        return __awaiter(this, void 0, void 0, function* () {\n            pane.addStyle(\"background-color: red;\");\n            pane.appendChild(button, svg);\n            button.setOnClick(() => {\n                console.log(\"Clicked\");\n            });\n            element_1.AnchorPane.setTopAnchor(svg, 100);\n            element_1.AnchorPane.setLeftAnchor(svg, 200);\n        });\n    }\n    load();\n    body.appendChild(pane);\n});\n\n\n//# sourceURL=webpack://tes/./src/page/Page3.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;