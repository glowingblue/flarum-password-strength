/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/common/index.js");
/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


 // Make translation calls shorter

var t = flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans.bind((flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().translator));
var prfx = _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".admin.settings";
flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add(_common__WEBPACK_IMPORTED_MODULE_2__.slug, function () {
  flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"](_common__WEBPACK_IMPORTED_MODULE_2__.slug).registerSetting(function () {
    return m("div", {
      className: "Form-group"
    }, m("label", {
      className: "psHeading"
    }, t(prfx + ".colorOptions")), m("div", {
      className: "helpText psHelpText"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default()('fas fa-exclamation-circle'), m("span", null, t(prfx + ".colorHelp"))));
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".weakColor",
    type: 'text',
    label: t(prfx + ".weakColor")
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".mediumColor",
    type: 'text',
    label: t(prfx + ".mediumColor")
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".strongColor",
    type: 'text',
    label: t(prfx + ".strongColor")
  }).registerSetting(function () {
    return m("div", {
      className: "Form-group"
    }, m("label", {
      className: "psHeading"
    }, t(prfx + ".otherOptions")));
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".enableInputColor",
    type: 'boolean',
    label: t(prfx + ".enableInputColor")
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".enableInputBorderColor",
    type: 'boolean',
    label: t(prfx + ".enableInputBorderColor")
  }).registerSetting({
    setting: _common__WEBPACK_IMPORTED_MODULE_2__.slug + ".enablePasswordToggle",
    type: 'boolean',
    label: t(prfx + ".enablePasswordToggle")
  });
});

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slug": () => (/* binding */ slug)
/* harmony export */ });
/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
var slug = 'glowingblue-password-strength';

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map