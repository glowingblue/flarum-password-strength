/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@zxcvbn-ts/core/dist/Feedback.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/Feedback.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Feedback)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");
/* harmony import */ var _matcher_bruteforce_feedback_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher/bruteforce/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/feedback.esm.js");
/* harmony import */ var _matcher_date_feedback_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matcher/date/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/feedback.esm.js");
/* harmony import */ var _matcher_dictionary_feedback_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher/dictionary/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/feedback.esm.js");
/* harmony import */ var _matcher_regex_feedback_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher/regex/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/feedback.esm.js");
/* harmony import */ var _matcher_repeat_feedback_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matcher/repeat/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/feedback.esm.js");
/* harmony import */ var _matcher_sequence_feedback_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matcher/sequence/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/feedback.esm.js");
/* harmony import */ var _matcher_spatial_feedback_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matcher/spatial/feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/feedback.esm.js");








var defaultFeedback = {
  warning: '',
  suggestions: []
};
/*
 * -------------------------------------------------------------------------------
 *  Generate feedback ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */

var Feedback = /*#__PURE__*/function () {
  function Feedback() {
    this.matchers = {
      bruteforce: _matcher_bruteforce_feedback_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      date: _matcher_date_feedback_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      dictionary: _matcher_dictionary_feedback_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      regex: _matcher_regex_feedback_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      repeat: _matcher_repeat_feedback_esm_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      sequence: _matcher_sequence_feedback_esm_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      spatial: _matcher_spatial_feedback_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
    this.defaultFeedback = {
      warning: '',
      suggestions: []
    };
    this.setDefaultSuggestions();
  }

  var _proto = Feedback.prototype;

  _proto.setDefaultSuggestions = function setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.useWords, _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.noNeed);
  };

  _proto.getFeedback = function getFeedback(score, sequence) {
    if (sequence.length === 0) {
      return this.defaultFeedback;
    }

    if (score > 2) {
      return defaultFeedback;
    }

    var extraFeedback = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.anotherWord;
    var longestMatch = this.getLongestMatch(sequence);
    var feedback = this.getMatchFeedback(longestMatch, sequence.length === 1);

    if (feedback !== null && feedback !== undefined) {
      feedback.suggestions.unshift(extraFeedback);

      if (feedback.warning == null) {
        feedback.warning = '';
      }
    } else {
      feedback = {
        warning: '',
        suggestions: [extraFeedback]
      };
    }

    return feedback;
  };

  _proto.getLongestMatch = function getLongestMatch(sequence) {
    var longestMatch = sequence[0];
    var slicedSequence = sequence.slice(1);
    slicedSequence.forEach(function (match) {
      if (match.token.length > longestMatch.token.length) {
        longestMatch = match;
      }
    });
    return longestMatch;
  };

  _proto.getMatchFeedback = function getMatchFeedback(match, isSoleMatch) {
    if (this.matchers[match.pattern]) {
      return this.matchers[match.pattern](match, isSoleMatch);
    }

    if (_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchers[match.pattern] && 'feedback' in _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchers[match.pattern]) {
      return _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchers[match.pattern].feedback(match, isSoleMatch);
    }

    return defaultFeedback;
  };

  return Feedback;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/Matching.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/Matching.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matching)
/* harmony export */ });
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");
/* harmony import */ var _matcher_date_matching_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher/date/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/matching.esm.js");
/* harmony import */ var _matcher_dictionary_matching_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matcher/dictionary/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/matching.esm.js");
/* harmony import */ var _matcher_regex_matching_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher/regex/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/matching.esm.js");
/* harmony import */ var _matcher_repeat_matching_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher/repeat/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/matching.esm.js");
/* harmony import */ var _matcher_sequence_matching_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matcher/sequence/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/matching.esm.js");
/* harmony import */ var _matcher_spatial_matching_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matcher/spatial/matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/matching.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");









var Matching = /*#__PURE__*/function () {
  function Matching() {
    this.matchers = {
      date: _matcher_date_matching_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      dictionary: _matcher_dictionary_matching_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      regex: _matcher_regex_matching_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      // @ts-ignore => TODO resolve this type issue. This is because it is possible to be async
      repeat: _matcher_repeat_matching_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      sequence: _matcher_sequence_matching_esm_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      spatial: _matcher_spatial_matching_esm_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
  }

  var _proto = Matching.prototype;

  _proto.match = function match(password) {
    var _this = this;

    var matches = [];
    var promises = [];
    var matchers = [].concat(Object.keys(this.matchers), Object.keys(_Options_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"].matchers));
    matchers.forEach(function (key) {
      if (!_this.matchers[key] && !_Options_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"].matchers[key]) {
        return;
      }

      var Matcher = _this.matchers[key] ? _this.matchers[key] : _Options_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"].matchers[key].Matching;
      var usedMatcher = new Matcher();
      var result = usedMatcher.match({
        password: password,
        omniMatch: _this
      });

      if (result instanceof Promise) {
        result.then(function (response) {
          (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.extend)(matches, response);
        });
        promises.push(result);
      } else {
        (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.extend)(matches, result);
      }
    });

    if (promises.length > 0) {
      return new Promise(function (resolve) {
        Promise.all(promises).then(function () {
          resolve((0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.sorted)(matches));
        });
      });
    }

    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.sorted)(matches);
  };

  return Matching;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/Options.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Options$1)
/* harmony export */ });
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");
/* harmony import */ var _data_l33tTable_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/l33tTable.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/l33tTable.esm.js");
/* harmony import */ var _data_translationKeys_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/translationKeys.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/translationKeys.esm.js");




var Options = /*#__PURE__*/function () {
  function Options() {
    this.matchers = {};
    this.l33tTable = _data_l33tTable_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.dictionary = {
      userInputs: []
    };
    this.rankedDictionaries = {};
    this.translations = _data_translationKeys_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.graphs = {};
    this.availableGraphs = [];
    this.setRankedDictionaries();
  }

  var _proto = Options.prototype;

  _proto.setOptions = function setOptions(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.l33tTable) {
      this.l33tTable = options.l33tTable;
    }

    if (options.dictionary) {
      this.dictionary = options.dictionary;
      this.setRankedDictionaries();
    }

    if (options.translations) {
      this.setTranslations(options.translations);
    }

    if (options.graphs) {
      this.graphs = options.graphs;
    }
  };

  _proto.setTranslations = function setTranslations(translations) {
    if (this.checkCustomTranslations(translations)) {
      this.translations = translations;
    } else {
      throw new Error('Invalid translations object fallback to keys');
    }
  };

  _proto.checkCustomTranslations = function checkCustomTranslations(translations) {
    var valid = true;
    Object.keys(_data_translationKeys_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach(function (type) {
      if (type in translations) {
        var translationType = type;
        Object.keys(_data_translationKeys_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"][translationType]).forEach(function (key) {
          if (!(key in translations[translationType])) {
            valid = false;
          }
        });
      } else {
        valid = false;
      }
    });
    return valid;
  };

  _proto.setRankedDictionaries = function setRankedDictionaries() {
    var _this = this;

    var rankedDictionaries = {};
    Object.keys(this.dictionary).forEach(function (name) {
      rankedDictionaries[name] = _this.getRankedDictionary(name);
    });
    this.rankedDictionaries = rankedDictionaries;
  };

  _proto.getRankedDictionary = function getRankedDictionary(name) {
    var list = this.dictionary[name];

    if (name === 'userInputs') {
      var sanitizedInputs = [];
      list.forEach(function (input) {
        var inputType = typeof input;

        if (inputType === 'string' || inputType === 'number' || inputType === 'boolean') {
          sanitizedInputs.push(input.toString().toLowerCase());
        }
      });
      return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.buildRankedDictionary)(sanitizedInputs);
    }

    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.buildRankedDictionary)(list);
  };

  _proto.extendUserInputsDictionary = function extendUserInputsDictionary(dictionary) {
    if (this.dictionary.userInputs) {
      this.dictionary.userInputs = [].concat(this.dictionary.userInputs, dictionary);
    } else {
      this.dictionary.userInputs = dictionary;
    }

    this.rankedDictionaries.userInputs = this.getRankedDictionary('userInputs');
  };

  _proto.addMatcher = function addMatcher(name, matcher) {
    if (this.matchers[name]) {
      console.info('Matcher already exists');
    } else {
      this.matchers[name] = matcher;
    }
  };

  return Options;
}();

var Options$1 = new Options();


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/TimeEstimates.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/TimeEstimates.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeEstimates)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");

var SECOND = 1;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var MONTH = DAY * 31;
var YEAR = MONTH * 12;
var CENTURY = YEAR * 100;
var times = {
  second: SECOND,
  minute: MINUTE,
  hour: HOUR,
  day: DAY,
  month: MONTH,
  year: YEAR,
  century: CENTURY
};
/*
 * -------------------------------------------------------------------------------
 *  Estimates time for an attacker ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */

var TimeEstimates = /*#__PURE__*/function () {
  function TimeEstimates() {}

  var _proto = TimeEstimates.prototype;

  _proto.translate = function translate(displayStr, value) {
    var key = displayStr;

    if (value !== undefined && value !== 1) {
      key += 's';
    }

    var timeEstimation = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.timeEstimation;
    return timeEstimation[key].replace('{base}', "" + value);
  };

  _proto.estimateAttackTimes = function estimateAttackTimes(guesses) {
    var _this = this;

    var crackTimesSeconds = {
      onlineThrottling100PerHour: guesses / (100 / 3600),
      onlineNoThrottling10PerSecond: guesses / 10,
      offlineSlowHashing1e4PerSecond: guesses / 1e4,
      offlineFastHashing1e10PerSecond: guesses / 1e10
    };
    var crackTimesDisplay = {
      onlineThrottling100PerHour: '',
      onlineNoThrottling10PerSecond: '',
      offlineSlowHashing1e4PerSecond: '',
      offlineFastHashing1e10PerSecond: ''
    };
    Object.keys(crackTimesSeconds).forEach(function (scenario) {
      var seconds = crackTimesSeconds[scenario];
      crackTimesDisplay[scenario] = _this.displayTime(seconds);
    });
    return {
      crackTimesSeconds: crackTimesSeconds,
      crackTimesDisplay: crackTimesDisplay,
      score: this.guessesToScore(guesses)
    };
  };

  _proto.guessesToScore = function guessesToScore(guesses) {
    var DELTA = 5;

    if (guesses < 1e3 + DELTA) {
      // risky password: "too guessable"
      return 0;
    }

    if (guesses < 1e6 + DELTA) {
      // modest protection from throttled online attacks: "very guessable"
      return 1;
    }

    if (guesses < 1e8 + DELTA) {
      // modest protection from unthrottled online attacks: "somewhat guessable"
      return 2;
    }

    if (guesses < 1e10 + DELTA) {
      // modest protection from offline attacks: "safely unguessable"
      // assuming a salted, slow hash function like bcrypt, scrypt, PBKDF2, argon, etc
      return 3;
    } // strong protection from offline attacks under same scenario: "very unguessable"


    return 4;
  };

  _proto.displayTime = function displayTime(seconds) {
    var displayStr = 'centuries';
    var base;
    var timeKeys = Object.keys(times);
    var foundIndex = timeKeys.findIndex(function (time) {
      return seconds < times[time];
    });

    if (foundIndex > -1) {
      displayStr = timeKeys[foundIndex - 1];

      if (foundIndex !== 0) {
        base = Math.round(seconds / times[displayStr]);
      } else {
        displayStr = 'ltSecond';
      }
    }

    return this.translate(displayStr, base);
  };

  return TimeEstimates;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_DIGIT": () => (/* binding */ ALL_DIGIT),
/* harmony export */   "ALL_LOWER": () => (/* binding */ ALL_LOWER),
/* harmony export */   "ALL_LOWER_INVERTED": () => (/* binding */ ALL_LOWER_INVERTED),
/* harmony export */   "ALL_UPPER": () => (/* binding */ ALL_UPPER),
/* harmony export */   "ALL_UPPER_INVERTED": () => (/* binding */ ALL_UPPER_INVERTED),
/* harmony export */   "ALPHA_INVERTED": () => (/* binding */ ALPHA_INVERTED),
/* harmony export */   "BRUTEFORCE_CARDINALITY": () => (/* binding */ BRUTEFORCE_CARDINALITY),
/* harmony export */   "DATE_MAX_YEAR": () => (/* binding */ DATE_MAX_YEAR),
/* harmony export */   "DATE_MIN_YEAR": () => (/* binding */ DATE_MIN_YEAR),
/* harmony export */   "DATE_SPLITS": () => (/* binding */ DATE_SPLITS),
/* harmony export */   "END_UPPER": () => (/* binding */ END_UPPER),
/* harmony export */   "MIN_GUESSES_BEFORE_GROWING_SEQUENCE": () => (/* binding */ MIN_GUESSES_BEFORE_GROWING_SEQUENCE),
/* harmony export */   "MIN_SUBMATCH_GUESSES_MULTI_CHAR": () => (/* binding */ MIN_SUBMATCH_GUESSES_MULTI_CHAR),
/* harmony export */   "MIN_SUBMATCH_GUESSES_SINGLE_CHAR": () => (/* binding */ MIN_SUBMATCH_GUESSES_SINGLE_CHAR),
/* harmony export */   "MIN_YEAR_SPACE": () => (/* binding */ MIN_YEAR_SPACE),
/* harmony export */   "ONE_LOWER": () => (/* binding */ ONE_LOWER),
/* harmony export */   "ONE_UPPER": () => (/* binding */ ONE_UPPER),
/* harmony export */   "REFERENCE_YEAR": () => (/* binding */ REFERENCE_YEAR),
/* harmony export */   "REGEXEN": () => (/* binding */ REGEXEN),
/* harmony export */   "START_UPPER": () => (/* binding */ START_UPPER)
/* harmony export */ });
/* harmony import */ var _dateSplits_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateSplits.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/dateSplits.esm.js");

var DATE_MAX_YEAR = 2050;
var DATE_MIN_YEAR = 1000;
var DATE_SPLITS = _dateSplits_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"];
var BRUTEFORCE_CARDINALITY = 10;
var MIN_GUESSES_BEFORE_GROWING_SEQUENCE = 10000;
var MIN_SUBMATCH_GUESSES_SINGLE_CHAR = 10;
var MIN_SUBMATCH_GUESSES_MULTI_CHAR = 50;
var MIN_YEAR_SPACE = 20; // \xbf-\xdf is a range for almost all special uppercase letter like Ä and so on

var START_UPPER = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/;
var END_UPPER = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/; // \xdf-\xff is a range for almost all special lowercase letter like ä and so on

var ALL_UPPER = /^[A-Z\xbf-\xdf]+$/;
var ALL_UPPER_INVERTED = /^[^a-z\xdf-\xff]+$/;
var ALL_LOWER = /^[a-z\xdf-\xff]+$/;
var ALL_LOWER_INVERTED = /^[^A-Z\xbf-\xdf]+$/;
var ONE_UPPER = /[a-z\xdf-\xff]/;
var ONE_LOWER = /[A-Z\xbf-\xdf]/;
var ALPHA_INVERTED = /[^A-Za-z\xbf-\xdf]/gi;
var ALL_DIGIT = /^\d+$/;
var REFERENCE_YEAR = new Date().getFullYear();
var REGEXEN = {
  recentYear: /19\d\d|200\d|201\d|202\d/g
};


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/data/dateSplits.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/data/dateSplits.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateSplits)
/* harmony export */ });
var dateSplits = {
  4: [[1, 2], [2, 3]],
  5: [[1, 3], [2, 3]],
  6: [[1, 2], [2, 4], [4, 5]],
  7: [[1, 3], [2, 3], [4, 5], [4, 6]],
  8: [[2, 4], [4, 6]]
};


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/data/l33tTable.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/data/l33tTable.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l33tTable)
/* harmony export */ });
var l33tTable = {
  a: ['4', '@'],
  b: ['8'],
  c: ['(', '{', '[', '<'],
  e: ['3'],
  g: ['6', '9'],
  i: ['1', '!', '|'],
  l: ['1', '|', '7'],
  o: ['0'],
  s: ['$', '5'],
  t: ['+', '7'],
  x: ['%'],
  z: ['2']
};


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/data/translationKeys.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/data/translationKeys.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translationKeys)
/* harmony export */ });
var translationKeys = {
  warnings: {
    straightRow: 'straightRow',
    keyPattern: 'keyPattern',
    simpleRepeat: 'simpleRepeat',
    extendedRepeat: 'extendedRepeat',
    sequences: 'sequences',
    recentYears: 'recentYears',
    dates: 'dates',
    topTen: 'topTen',
    topHundred: 'topHundred',
    common: 'common',
    similarToCommon: 'similarToCommon',
    wordByItself: 'wordByItself',
    namesByThemselves: 'namesByThemselves',
    commonNames: 'commonNames',
    userInputs: 'userInputs'
  },
  suggestions: {
    l33t: 'l33t',
    reverseWords: 'reverseWords',
    allUppercase: 'allUppercase',
    capitalization: 'capitalization',
    dates: 'dates',
    recentYears: 'recentYears',
    associatedYears: 'associatedYears',
    sequences: 'sequences',
    repeated: 'repeated',
    longerKeyboardPattern: 'longerKeyboardPattern',
    anotherWord: 'anotherWord',
    useWords: 'useWords',
    noNeed: 'noNeed'
  },
  timeEstimation: {
    ltSecond: 'ltSecond',
    second: 'second',
    seconds: 'seconds',
    minute: 'minute',
    minutes: 'minutes',
    hour: 'hour',
    hours: 'hours',
    day: 'day',
    days: 'days',
    month: 'month',
    months: 'months',
    year: 'year',
    years: 'years',
    centuries: 'centuries'
  }
};


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/helper.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildRankedDictionary": () => (/* binding */ buildRankedDictionary),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "sorted": () => (/* binding */ sorted),
/* harmony export */   "translate": () => (/* binding */ translate)
/* harmony export */ });
var empty = function empty(obj) {
  return Object.keys(obj).length === 0;
};

var extend = function extend(listToExtend, list) {
  return (// eslint-disable-next-line prefer-spread
    listToExtend.push.apply(listToExtend, list)
  );
};

var translate = function translate(string, chrMap) {
  var tempArray = string.split('');
  return tempArray.map(function (_char) {
    return chrMap[_char] || _char;
  }).join('');
}; // mod implementation that works for negative numbers


var sorted = function sorted(matches) {
  return matches.sort(function (m1, m2) {
    return m1.i - m2.i || m1.j - m2.j;
  });
};

var buildRankedDictionary = function buildRankedDictionary(orderedList) {
  var result = {};
  var counter = 1; // rank starts at 1, not 0

  orderedList.forEach(function (word) {
    result[word] = counter;
    counter += 1;
  });
  return result;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZxcvbnOptions": () => (/* reexport safe */ _Options_esm_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "zxcvbn": () => (/* binding */ zxcvbn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _Matching_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matching.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Matching.esm.js");
/* harmony import */ var _scoring_index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scoring/index.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/index.esm.js");
/* harmony import */ var _TimeEstimates_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeEstimates.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/TimeEstimates.esm.js");
/* harmony import */ var _Feedback_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feedback.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Feedback.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");








var time = function time() {
  return new Date().getTime();
};

var createReturnValue = function createReturnValue(resolvedMatches, password, start) {
  var feedback = new _Feedback_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var timeEstimates = new _TimeEstimates_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var matchSequence = _scoring_index_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"].mostGuessableMatchSequence(password, resolvedMatches);
  var calcTime = time() - start;
  var attackTimes = timeEstimates.estimateAttackTimes(matchSequence.guesses);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    calcTime: calcTime
  }, matchSequence, attackTimes, {
    feedback: feedback.getFeedback(attackTimes.score, matchSequence.sequence)
  });
};

var zxcvbn = function zxcvbn(password, userInputs) {
  if (userInputs) {
    _Options_esm_js__WEBPACK_IMPORTED_MODULE_5__["default"].extendUserInputsDictionary(userInputs);
  }

  var matching = new _Matching_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var start = time();
  var matches = matching.match(password);

  if (matches instanceof Promise) {
    return matches.then(function (resolvedMatches) {
      return createReturnValue(resolvedMatches, password, start);
    });
  }

  return createReturnValue(matches, password, start);
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/feedback.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/feedback.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bruteforceMatcher)
/* harmony export */ });
var bruteforceMatcher = function bruteforceMatcher() {
  return null;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/scoring.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/scoring.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bruteforceMatcher)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");


var bruteforceMatcher = function bruteforceMatcher(_ref) {
  var token = _ref.token;
  var guesses = Math.pow(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.BRUTEFORCE_CARDINALITY, token.length);

  if (guesses === Number.POSITIVE_INFINITY) {
    guesses = Number.MAX_VALUE;
  }

  var minGuesses; // small detail: make bruteforce matches at minimum one guess bigger than smallest allowed
  // submatch guesses, such that non-bruteforce submatches over the same [i..j] take precedence.

  if (token.length === 1) {
    minGuesses = _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.MIN_SUBMATCH_GUESSES_SINGLE_CHAR + 1;
  } else {
    minGuesses = _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.MIN_SUBMATCH_GUESSES_MULTI_CHAR + 1;
  }

  return Math.max(guesses, minGuesses);
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/feedback.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/date/feedback.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


var dateMatcher = function dateMatcher() {
  return {
    warning: _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.dates,
    suggestions: [_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.dates]
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/matching.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/date/matching.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchDate)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");


/*
 * -------------------------------------------------------------------------------
 *  date matching ----------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */

var MatchDate = /*#__PURE__*/function () {
  function MatchDate() {}

  var _proto = MatchDate.prototype;

  /*
   * a "date" is recognized as:
   *   any 3-tuple that starts or ends with a 2- or 4-digit year,
   *   with 2 or 0 separator chars (1.1.91 or 1191),
   *   maybe zero-padded (01-01-91 vs 1-1-91),
   *   a month between 1 and 12,
   *   a day between 1 and 31.
   *
   * note: this isn't true date parsing in that "feb 31st" is allowed,
   * this doesn't check for leap years, etc.
   *
   * recipe:
   * start with regex to find maybe-dates, then attempt to map the integers
   * onto month-day-year to filter the maybe-dates into dates.
   * finally, remove matches that are substrings of other matches to reduce noise.
   *
   * note: instead of using a lazy or greedy regex to find many dates over the full string,
   * this uses a ^...$ regex against every substring of the password -- less performant but leads
   * to every possible date match.
   */
  _proto.match = function match(_ref) {
    var password = _ref.password;
    var matches = [].concat(this.getMatchesWithoutSeparator(password), this.getMatchesWithSeparator(password));
    var filteredMatches = this.filterNoise(matches);
    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_1__.sorted)(filteredMatches);
  };

  _proto.getMatchesWithSeparator = function getMatchesWithSeparator(password) {
    var matches = [];
    var maybeDateWithSeparator = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/; // # dates with separators are between length 6 '1/1/91' and 10 '11/11/1991'

    for (var i = 0; i <= Math.abs(password.length - 6); i += 1) {
      for (var j = i + 5; j <= i + 9; j += 1) {
        if (j >= password.length) {
          break;
        }

        var token = password.slice(i, +j + 1 || 9e9);
        var regexMatch = maybeDateWithSeparator.exec(token);

        if (regexMatch != null) {
          var dmy = this.mapIntegersToDayMonthYear([parseInt(regexMatch[1], 10), parseInt(regexMatch[3], 10), parseInt(regexMatch[4], 10)]);

          if (dmy != null) {
            matches.push({
              pattern: 'date',
              token: token,
              i: i,
              j: j,
              separator: regexMatch[2],
              year: dmy.year,
              month: dmy.month,
              day: dmy.day
            });
          }
        }
      }
    }

    return matches;
  } // eslint-disable-next-line max-statements
  ;

  _proto.getMatchesWithoutSeparator = function getMatchesWithoutSeparator(password) {
    var _this = this;

    var matches = [];
    var maybeDateNoSeparator = /^\d{4,8}$/;

    var metric = function metric(candidate) {
      return Math.abs(candidate.year - _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.REFERENCE_YEAR);
    }; // # dates without separators are between length 4 '1191' and 8 '11111991'


    for (var i = 0; i <= Math.abs(password.length - 4); i += 1) {
      var _loop = function _loop(j) {
        if (j >= password.length) {
          return "break";
        }

        var token = password.slice(i, +j + 1 || 9e9);

        if (maybeDateNoSeparator.exec(token)) {
          var candidates = [];
          var index = token.length;
          var splittedDates = _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SPLITS[index];
          splittedDates.forEach(function (_ref2) {
            var k = _ref2[0],
                l = _ref2[1];

            var dmy = _this.mapIntegersToDayMonthYear([parseInt(token.slice(0, k), 10), parseInt(token.slice(k, l), 10), parseInt(token.slice(l), 10)]);

            if (dmy != null) {
              candidates.push(dmy);
            }
          });

          if (candidates.length > 0) {
            /*
             * at this point: different possible dmy mappings for the same i,j substring.
             * match the candidate date that likely takes the fewest guesses: a year closest
             * to 2000.
             * (scoring.REFERENCE_YEAR).
             *
             * ie, considering '111504', prefer 11-15-04 to 1-1-1504
             * (interpreting '04' as 2004)
             */
            var bestCandidate = candidates[0];
            var minDistance = metric(candidates[0]);
            candidates.slice(1).forEach(function (candidate) {
              var distance = metric(candidate);

              if (distance < minDistance) {
                bestCandidate = candidate;
                minDistance = distance;
              }
            });
            matches.push({
              pattern: 'date',
              token: token,
              i: i,
              j: j,
              separator: '',
              year: bestCandidate.year,
              month: bestCandidate.month,
              day: bestCandidate.day
            });
          }
        }
      };

      for (var j = i + 3; j <= i + 7; j += 1) {
        var _ret = _loop(j);

        if (_ret === "break") break;
      }
    }

    return matches;
  }
  /*
   * matches now contains all valid date strings in a way that is tricky to capture
   * with regexes only. while thorough, it will contain some unintuitive noise:
   *
   * '2015_06_04', in addition to matching 2015_06_04, will also contain
   * 5(!) other date matches: 15_06_04, 5_06_04, ..., even 2015 (matched as 5/1/2020)
   *
   * to reduce noise, remove date matches that are strict substrings of others
   */
  ;

  _proto.filterNoise = function filterNoise(matches) {
    return matches.filter(function (match) {
      var isSubmatch = false;
      var matchesLength = matches.length;

      for (var o = 0; o < matchesLength; o += 1) {
        var otherMatch = matches[o];

        if (match !== otherMatch) {
          if (otherMatch.i <= match.i && otherMatch.j >= match.j) {
            isSubmatch = true;
            break;
          }
        }
      }

      return !isSubmatch;
    });
  }
  /*
   * given a 3-tuple, discard if:
   *   middle int is over 31 (for all dmy formats, years are never allowed in the middle)
   *   middle int is zero
   *   any int is over the max allowable year
   *   any int is over two digits but under the min allowable year
   *   2 integers are over 31, the max allowable day
   *   2 integers are zero
   *   all integers are over 12, the max allowable month
   */
  // eslint-disable-next-line complexity, max-statements
  ;

  _proto.mapIntegersToDayMonthYear = function mapIntegersToDayMonthYear(integers) {
    if (integers[1] > 31 || integers[1] <= 0) {
      return null;
    }

    var over12 = 0;
    var over31 = 0;
    var under1 = 0;

    for (var o = 0, len1 = integers.length; o < len1; o += 1) {
      var _int = integers[o];

      if (_int > 99 && _int < _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MIN_YEAR || _int > _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MAX_YEAR) {
        return null;
      }

      if (_int > 31) {
        over31 += 1;
      }

      if (_int > 12) {
        over12 += 1;
      }

      if (_int <= 0) {
        under1 += 1;
      }
    }

    if (over31 >= 2 || over12 === 3 || under1 >= 2) {
      return null;
    }

    return this.getDayMonth(integers);
  } // eslint-disable-next-line max-statements
  ;

  _proto.getDayMonth = function getDayMonth(integers) {
    // first look for a four digit year: yyyy + daymonth or daymonth + yyyy
    var possibleYearSplits = [[integers[2], integers.slice(0, 2)], [integers[0], integers.slice(1, 3)] // year first
    ];
    var possibleYearSplitsLength = possibleYearSplits.length;

    for (var j = 0; j < possibleYearSplitsLength; j += 1) {
      var _possibleYearSplits$j = possibleYearSplits[j],
          y = _possibleYearSplits$j[0],
          rest = _possibleYearSplits$j[1];

      if (_data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MIN_YEAR <= y && y <= _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MAX_YEAR) {
        var dm = this.mapIntegersToDayMonth(rest);

        if (dm != null) {
          return {
            year: y,
            month: dm.month,
            day: dm.day
          };
        }
        /*
         * for a candidate that includes a four-digit year,
         * when the remaining integers don't match to a day and month,
         * it is not a date.
         */


        return null;
      }
    } // given no four-digit year, two digit years are the most flexible int to match, so
    // try to parse a day-month out of integers[0..1] or integers[1..0]


    for (var k = 0; k < possibleYearSplitsLength; k += 1) {
      var _possibleYearSplits$k = possibleYearSplits[k],
          _y = _possibleYearSplits$k[0],
          _rest = _possibleYearSplits$k[1];

      var _dm = this.mapIntegersToDayMonth(_rest);

      if (_dm != null) {
        return {
          year: this.twoToFourDigitYear(_y),
          month: _dm.month,
          day: _dm.day
        };
      }
    }

    return null;
  };

  _proto.mapIntegersToDayMonth = function mapIntegersToDayMonth(integers) {
    var temp = [integers, integers.slice().reverse()];

    for (var i = 0; i < temp.length; i += 1) {
      var data = temp[i];
      var day = data[0];
      var month = data[1];

      if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
        return {
          day: day,
          month: month
        };
      }
    }

    return null;
  };

  _proto.twoToFourDigitYear = function twoToFourDigitYear(year) {
    if (year > 99) {
      return year;
    }

    if (year > 50) {
      // 87 -> 1987
      return year + 1900;
    } // 15 -> 2015


    return year + 2000;
  };

  return MatchDate;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/scoring.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/date/scoring.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateMatcher)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");


var dateMatcher = function dateMatcher(_ref) {
  var year = _ref.year,
      separator = _ref.separator;
  // base guesses: (year distance from REFERENCE_YEAR) * num_days * num_years
  var yearSpace = Math.max(Math.abs(year - _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.REFERENCE_YEAR), _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.MIN_YEAR_SPACE);
  var guesses = yearSpace * 365; // add factor of 4 for separator selection (one of ~4 choices)

  if (separator) {
    guesses *= 4;
  }

  return guesses;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/feedback.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/feedback.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dictionaryMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");



var getDictionaryWarningPassword = function getDictionaryWarningPassword(match, isSoleMatch) {
  var warning = '';

  if (isSoleMatch && !match.l33t && !match.reversed) {
    if (match.rank <= 10) {
      warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.topTen;
    } else if (match.rank <= 100) {
      warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.topHundred;
    } else {
      warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.common;
    }
  } else if (match.guessesLog10 <= 4) {
    warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.similarToCommon;
  }

  return warning;
};

var getDictionaryWarningWikipedia = function getDictionaryWarningWikipedia(match, isSoleMatch) {
  var warning = '';

  if (isSoleMatch) {
    warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.wordByItself;
  }

  return warning;
};

var getDictionaryWarningNames = function getDictionaryWarningNames(match, isSoleMatch) {
  if (isSoleMatch) {
    return _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.namesByThemselves;
  }

  return _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.commonNames;
};

var getDictionaryWarning = function getDictionaryWarning(match, isSoleMatch) {
  var warning = '';
  var dictName = match.dictionaryName;
  var isAName = dictName === 'lastnames' || dictName.toLowerCase().includes('firstnames');

  if (dictName === 'passwords') {
    warning = getDictionaryWarningPassword(match, isSoleMatch);
  } else if (dictName.includes('wikipedia')) {
    warning = getDictionaryWarningWikipedia(match, isSoleMatch);
  } else if (isAName) {
    warning = getDictionaryWarningNames(match, isSoleMatch);
  } else if (dictName === 'userInputs') {
    warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.userInputs;
  }

  return warning;
};

var dictionaryMatcher = function dictionaryMatcher(match, isSoleMatch) {
  var warning = getDictionaryWarning(match, isSoleMatch);
  var suggestions = [];
  var word = match.token;

  if (word.match(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.START_UPPER)) {
    suggestions.push(_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.capitalization);
  } else if (word.match(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ALL_UPPER_INVERTED) && word.toLowerCase() !== word) {
    suggestions.push(_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.allUppercase);
  }

  if (match.reversed && match.token.length >= 4) {
    suggestions.push(_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.reverseWords);
  }

  if (match.l33t) {
    suggestions.push(_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.l33t);
  }

  return {
    warning: warning,
    suggestions: suggestions
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/matching.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/matching.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchDictionary)
/* harmony export */ });
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");
/* harmony import */ var _variants_matching_reverse_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variants/matching/reverse.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/reverse.esm.js");
/* harmony import */ var _variants_matching_l33t_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants/matching/l33t.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/l33t.esm.js");





var MatchDictionary = /*#__PURE__*/function () {
  function MatchDictionary() {
    this.l33t = new _variants_matching_l33t_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.defaultMatch);
    this.reverse = new _variants_matching_reverse_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.defaultMatch);
  }

  var _proto = MatchDictionary.prototype;

  _proto.match = function match(_ref) {
    var password = _ref.password;
    var matches = [].concat(this.defaultMatch({
      password: password
    }), this.reverse.match({
      password: password
    }), this.l33t.match({
      password: password
    }));
    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.sorted)(matches);
  };

  _proto.defaultMatch = function defaultMatch(_ref2) {
    var password = _ref2.password;
    // rankedDictionaries variable is for unit testing purposes
    var matches = [];
    var passwordLength = password.length;
    var passwordLower = password.toLowerCase();
    Object.keys(_Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].rankedDictionaries).forEach(function (dictionaryName) {
      var rankedDict = _Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].rankedDictionaries[dictionaryName];

      for (var i = 0; i < passwordLength; i += 1) {
        for (var j = i; j < passwordLength; j += 1) {
          if (passwordLower.slice(i, +j + 1 || 9e9) in rankedDict) {
            var word = passwordLower.slice(i, +j + 1 || 9e9);
            var rank = rankedDict[word];
            matches.push({
              pattern: 'dictionary',
              i: i,
              j: j,
              token: password.slice(i, +j + 1 || 9e9),
              matchedWord: word,
              rank: rank,
              dictionaryName: dictionaryName,
              reversed: false,
              l33t: false
            });
          }
        }
      }
    });
    return matches;
  };

  return MatchDictionary;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/scoring.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/scoring.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dictionaryMatcher)
/* harmony export */ });
/* harmony import */ var _variants_scoring_uppercase_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants/scoring/uppercase.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/uppercase.esm.js");
/* harmony import */ var _variants_scoring_l33t_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants/scoring/l33t.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/l33t.esm.js");



var dictionaryMatcher = function dictionaryMatcher(_ref) {
  var rank = _ref.rank,
      reversed = _ref.reversed,
      l33t = _ref.l33t,
      sub = _ref.sub,
      token = _ref.token;
  var baseGuesses = rank; // keep these as properties for display purposes

  var uppercaseVariations = (0,_variants_scoring_uppercase_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
  var l33tVariations = (0,_variants_scoring_l33t_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    l33t: l33t,
    sub: sub,
    token: token
  });
  var reversedVariations = reversed && 2 || 1;
  var calculation = baseGuesses * uppercaseVariations * l33tVariations * reversedVariations;
  return {
    baseGuesses: baseGuesses,
    uppercaseVariations: uppercaseVariations,
    l33tVariations: l33tVariations,
    calculation: calculation
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/l33t.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/l33t.esm.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchL33t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");



/*
 * -------------------------------------------------------------------------------
 *  Dictionary l33t matching -----------------------------------------------------
 * -------------------------------------------------------------------------------
 */

var MatchL33t = /*#__PURE__*/function () {
  function MatchL33t(defaultMatch) {
    this.defaultMatch = defaultMatch;
  }

  var _proto = MatchL33t.prototype;

  _proto.match = function match(_ref) {
    var _this = this;

    var password = _ref.password;
    var matches = [];
    var enumeratedSubs = this.enumerateL33tSubs(this.relevantL33tSubtable(password, _Options_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"].l33tTable));

    var _loop = function _loop(i) {
      var sub = enumeratedSubs[i]; // corner case: password has no relevant subs.

      if ((0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_1__.empty)(sub)) {
        return "break";
      }

      var subbedPassword = (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_1__.translate)(password, sub);

      var matchedDictionary = _this.defaultMatch({
        password: subbedPassword
      });

      matchedDictionary.forEach(function (match) {
        var token = password.slice(match.i, +match.j + 1 || 9e9); // only return the matches that contain an actual substitution

        if (token.toLowerCase() !== match.matchedWord) {
          // subset of mappings in sub that are in use for this match
          var matchSub = {};
          Object.keys(sub).forEach(function (subbedChr) {
            var chr = sub[subbedChr];

            if (token.indexOf(subbedChr) !== -1) {
              matchSub[subbedChr] = chr;
            }
          });
          var subDisplay = Object.keys(matchSub).map(function (k) {
            return k + " -> " + matchSub[k];
          }).join(', ');
          matches.push((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, match, {
            l33t: true,
            token: token,
            sub: matchSub,
            subDisplay: subDisplay
          }));
        }
      });
    };

    for (var i = 0; i < enumeratedSubs.length; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    } // filter single-character l33t matches to reduce noise.
    // otherwise '1' matches 'i', '4' matches 'a', both very common English words
    // with low dictionary rank.


    return matches.filter(function (match) {
      return match.token.length > 1;
    });
  } // makes a pruned copy of l33t_table that only includes password's possible substitutions
  ;

  _proto.relevantL33tSubtable = function relevantL33tSubtable(password, table) {
    var passwordChars = {};
    var subTable = {};
    password.split('').forEach(function (_char) {
      passwordChars[_char] = true;
    });
    Object.keys(table).forEach(function (letter) {
      var subs = table[letter];
      var relevantSubs = subs.filter(function (sub) {
        return sub in passwordChars;
      });

      if (relevantSubs.length > 0) {
        subTable[letter] = relevantSubs;
      }
    });
    return subTable;
  } // returns the list of possible 1337 replacement dictionaries for a given password
  ;

  _proto.enumerateL33tSubs = function enumerateL33tSubs(table) {
    var tableKeys = Object.keys(table);
    var subs = this.getSubs(tableKeys, [[]], table); // convert from assoc lists to dicts

    return subs.map(function (sub) {
      var subDict = {};
      sub.forEach(function (_ref2) {
        var l33tChr = _ref2[0],
            chr = _ref2[1];
        subDict[l33tChr] = chr;
      });
      return subDict;
    });
  };

  _proto.getSubs = function getSubs(keys, subs, table) {
    if (!keys.length) {
      return subs;
    }

    var firstKey = keys[0];
    var restKeys = keys.slice(1);
    var nextSubs = [];
    table[firstKey].forEach(function (l33tChr) {
      subs.forEach(function (sub) {
        var dupL33tIndex = -1;

        for (var i = 0; i < sub.length; i += 1) {
          if (sub[i][0] === l33tChr) {
            dupL33tIndex = i;
            break;
          }
        }

        if (dupL33tIndex === -1) {
          var subExtension = sub.concat([[l33tChr, firstKey]]);
          nextSubs.push(subExtension);
        } else {
          var subAlternative = sub.slice(0);
          subAlternative.splice(dupL33tIndex, 1);
          subAlternative.push([l33tChr, firstKey]);
          nextSubs.push(sub);
          nextSubs.push(subAlternative);
        }
      });
    });
    var newSubs = this.dedup(nextSubs);

    if (restKeys.length) {
      return this.getSubs(restKeys, newSubs, table);
    }

    return newSubs;
  };

  _proto.dedup = function dedup(subs) {
    var deduped = [];
    var members = {};
    subs.forEach(function (sub) {
      var assoc = sub.map(function (k, index) {
        return [k, index];
      });
      assoc.sort();
      var label = assoc.map(function (_ref3) {
        var k = _ref3[0],
            v = _ref3[1];
        return k + "," + v;
      }).join('-');

      if (!(label in members)) {
        members[label] = true;
        deduped.push(sub);
      }
    });
    return deduped;
  };

  return MatchL33t;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/reverse.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/matching/reverse.esm.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchL33t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


/*
 * -------------------------------------------------------------------------------
 *  Dictionary reverse matching --------------------------------------------------
 * -------------------------------------------------------------------------------
 */
var MatchL33t = /*#__PURE__*/function () {
  function MatchL33t(defaultMatch) {
    this.defaultMatch = defaultMatch;
  }

  var _proto = MatchL33t.prototype;

  _proto.match = function match(_ref) {
    var password = _ref.password;
    var passwordReversed = password.split('').reverse().join('');
    return this.defaultMatch({
      password: passwordReversed
    }).map(function (match) {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, match, {
        token: match.token.split('').reverse().join(''),
        reversed: true,
        // map coordinates back to original string
        i: password.length - 1 - match.j,
        j: password.length - 1 - match.i
      });
    });
  };

  return MatchL33t;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/l33t.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/l33t.esm.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l33tVariant)
/* harmony export */ });
/* harmony import */ var _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../scoring/utils.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js");


var getCounts = function getCounts(_ref) {
  var subs = _ref.subs,
      subbed = _ref.subbed,
      token = _ref.token;
  var unsubbed = subs[subbed]; // lower-case match.token before calculating: capitalization shouldn't affect l33t calc.

  var chrs = token.toLowerCase().split(''); // num of subbed chars

  var subbedCount = chrs.filter(function (_char) {
    return _char === subbed;
  }).length; // num of unsubbed chars

  var unsubbedCount = chrs.filter(function (_char2) {
    return _char2 === unsubbed;
  }).length;
  return {
    subbedCount: subbedCount,
    unsubbedCount: unsubbedCount
  };
};

var l33tVariant = function l33tVariant(_ref2) {
  var l33t = _ref2.l33t,
      sub = _ref2.sub,
      token = _ref2.token;

  if (!l33t) {
    return 1;
  }

  var variations = 1;
  var subs = sub;
  Object.keys(subs).forEach(function (subbed) {
    var _getCounts = getCounts({
      subs: subs,
      subbed: subbed,
      token: token
    }),
        subbedCount = _getCounts.subbedCount,
        unsubbedCount = _getCounts.unsubbedCount;

    if (subbedCount === 0 || unsubbedCount === 0) {
      // for this sub, password is either fully subbed (444) or fully unsubbed (aaa)
      // treat that as doubling the space (attacker needs to try fully subbed chars in addition to
      // unsubbed.)
      variations *= 2;
    } else {
      // this case is similar to capitalization:
      // with aa44a, U = 3, S = 2, attacker needs to try unsubbed + one sub + two subs
      var p = Math.min(unsubbedCount, subbedCount);
      var possibilities = 0;

      for (var i = 1; i <= p; i += 1) {
        possibilities += _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].nCk(unsubbedCount + subbedCount, i);
      }

      variations *= possibilities;
    }
  });
  return variations;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/uppercase.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/variants/scoring/uppercase.esm.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uppercaseVariant)
/* harmony export */ });
/* harmony import */ var _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../scoring/utils.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js");
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");



var getVariations = function getVariations(cleanedWord) {
  var wordArray = cleanedWord.split('');
  var upperCaseCount = wordArray.filter(function (_char) {
    return _char.match(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ONE_UPPER);
  }).length;
  var lowerCaseCount = wordArray.filter(function (_char2) {
    return _char2.match(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ONE_LOWER);
  }).length;
  var variations = 0;
  var variationLength = Math.min(upperCaseCount, lowerCaseCount);

  for (var i = 1; i <= variationLength; i += 1) {
    variations += _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].nCk(upperCaseCount + lowerCaseCount, i);
  }

  return variations;
};

var uppercaseVariant = function uppercaseVariant(word) {
  // clean words of non alpha characters to remove the reward effekt to capitalize the first letter https://github.com/dropbox/zxcvbn/issues/232
  var cleanedWord = word.replace(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ALPHA_INVERTED, '');

  if (cleanedWord.match(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ALL_LOWER_INVERTED) || cleanedWord.toLowerCase() === cleanedWord) {
    return 1;
  } // a capitalized word is the most common capitalization scheme,
  // so it only doubles the search space (uncapitalized + capitalized).
  // all caps and end-capitalized are common enough too, underestimate as 2x factor to be safe.


  var commonCases = [_data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.START_UPPER, _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.END_UPPER, _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.ALL_UPPER_INVERTED];
  var commonCasesLength = commonCases.length;

  for (var i = 0; i < commonCasesLength; i += 1) {
    var regex = commonCases[i];

    if (cleanedWord.match(regex)) {
      return 2;
    }
  } // otherwise calculate the number of ways to capitalize U+L uppercase+lowercase letters
  // with U uppercase letters or less. or, if there's more uppercase than lower (for eg. PASSwORD),
  // the number of ways to lowercase U+L letters with L lowercase letters or less.


  return getVariations(cleanedWord);
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/feedback.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/regex/feedback.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ regexMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


var regexMatcher = function regexMatcher(match) {
  if (match.regexName === 'recentYear') {
    return {
      warning: _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.recentYears,
      suggestions: [_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.recentYears, _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.associatedYears]
    };
  }

  return {
    warning: '',
    suggestions: []
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/matching.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/regex/matching.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchRegex)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");


/*
 * -------------------------------------------------------------------------------
 *  regex matching ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */

var MatchRegex = /*#__PURE__*/function () {
  function MatchRegex() {}

  var _proto = MatchRegex.prototype;

  _proto.match = function match(_ref) {
    var password = _ref.password,
        _ref$regexes = _ref.regexes,
        regexes = _ref$regexes === void 0 ? _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.REGEXEN : _ref$regexes;
    var matches = [];
    Object.keys(regexes).forEach(function (name) {
      var regex = regexes[name];
      regex.lastIndex = 0; // keeps regexMatch stateless

      var regexMatch = regex.exec(password);

      if (regexMatch) {
        var token = regexMatch[0];
        matches.push({
          pattern: 'regex',
          token: token,
          i: regexMatch.index,
          j: regexMatch.index + regexMatch[0].length - 1,
          regexName: name,
          regexMatch: regexMatch
        });
      }
    });
    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_1__.sorted)(matches);
  };

  return MatchRegex;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/scoring.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/regex/scoring.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ regexMatcher)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");


var regexMatcher = function regexMatcher(_ref) {
  var regexName = _ref.regexName,
      regexMatch = _ref.regexMatch,
      token = _ref.token;
  var charClassBases = {
    alphaLower: 26,
    alphaUpper: 26,
    alpha: 52,
    alphanumeric: 62,
    digits: 10,
    symbols: 33
  };

  if (regexName in charClassBases) {
    return Math.pow(charClassBases[regexName], token.length);
  } // TODO add more regex types for example special dates like 09.11
  // eslint-disable-next-line default-case


  switch (regexName) {
    case 'recentYear':
      // conservative estimate of year space: num years from REFERENCE_YEAR.
      // if year is close to REFERENCE_YEAR, estimate a year space of MIN_YEAR_SPACE.
      return Math.max(Math.abs(parseInt(regexMatch[0], 10) - _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.REFERENCE_YEAR), _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.MIN_YEAR_SPACE);
  }

  return 0;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/feedback.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/feedback.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ repeatMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


var repeatMatcher = function repeatMatcher(match) {
  var warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.extendedRepeat;

  if (match.baseToken.length === 1) {
    warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.simpleRepeat;
  }

  return {
    warning: warning,
    suggestions: [_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.repeated]
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/matching.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/matching.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchRepeat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _scoring_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scoring/index.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/index.esm.js");


/*
 *-------------------------------------------------------------------------------
 * repeats (aaa, abcabcabc) ------------------------------
 *-------------------------------------------------------------------------------
 */

var MatchRepeat = /*#__PURE__*/function () {
  function MatchRepeat() {}

  var _proto = MatchRepeat.prototype;

  // eslint-disable-next-line max-statements
  _proto.match = function match(_ref) {
    var password = _ref.password,
        omniMatch = _ref.omniMatch;
    var matches = [];
    var lastIndex = 0;

    while (lastIndex < password.length) {
      var greedyMatch = this.getGreedyMatch(password, lastIndex);
      var lazyMatch = this.getLazyMatch(password, lastIndex);

      if (greedyMatch == null) {
        break;
      }

      var _this$setMatchToken = this.setMatchToken(greedyMatch, lazyMatch),
          match = _this$setMatchToken.match,
          baseToken = _this$setMatchToken.baseToken;

      if (match) {
        var j = match.index + match[0].length - 1;
        var baseGuesses = this.getBaseGuesses(baseToken, omniMatch);
        matches.push(this.normalizeMatch(baseToken, j, match, baseGuesses));
        lastIndex = j + 1;
      }
    }

    var hasPromises = matches.some(function (match) {
      return match instanceof Promise;
    });

    if (hasPromises) {
      return Promise.all(matches);
    }

    return matches;
  } // eslint-disable-next-line max-params
  ;

  _proto.normalizeMatch = function normalizeMatch(baseToken, j, match, baseGuesses) {
    var baseMatch = {
      pattern: 'repeat',
      i: match.index,
      j: j,
      token: match[0],
      baseToken: baseToken,
      baseGuesses: 0,
      repeatCount: match[0].length / baseToken.length
    };

    if (baseGuesses instanceof Promise) {
      return baseGuesses.then(function (resolvedBaseGuesses) {
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseMatch, {
          baseGuesses: resolvedBaseGuesses
        });
      });
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseMatch, {
      baseGuesses: baseGuesses
    });
  };

  _proto.getGreedyMatch = function getGreedyMatch(password, lastIndex) {
    var greedy = /(.+)\1+/g;
    greedy.lastIndex = lastIndex;
    return greedy.exec(password);
  };

  _proto.getLazyMatch = function getLazyMatch(password, lastIndex) {
    var lazy = /(.+?)\1+/g;
    lazy.lastIndex = lastIndex;
    return lazy.exec(password);
  };

  _proto.setMatchToken = function setMatchToken(greedyMatch, lazyMatch) {
    var lazyAnchored = /^(.+?)\1+$/;
    var match;
    var baseToken = '';

    if (lazyMatch && greedyMatch[0].length > lazyMatch[0].length) {
      // greedy beats lazy for 'aabaab'
      // greedy: [aabaab, aab]
      // lazy:   [aa,     a]
      match = greedyMatch; // greedy's repeated string might itself be repeated, eg.
      // aabaab in aabaabaabaab.
      // run an anchored lazy match on greedy's repeated string
      // to find the shortest repeated string

      var temp = lazyAnchored.exec(match[0]);

      if (temp) {
        baseToken = temp[1];
      }
    } else {
      // lazy beats greedy for 'aaaaa'
      // greedy: [aaaa,  aa]
      // lazy:   [aaaaa, a]
      match = lazyMatch;

      if (match) {
        baseToken = match[1];
      }
    }

    return {
      match: match,
      baseToken: baseToken
    };
  };

  _proto.getBaseGuesses = function getBaseGuesses(baseToken, omniMatch) {
    var matches = omniMatch.match(baseToken);

    if (matches instanceof Promise) {
      return matches.then(function (resolvedMatches) {
        var baseAnalysis = _scoring_index_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].mostGuessableMatchSequence(baseToken, resolvedMatches);
        return baseAnalysis.guesses;
      });
    }

    var baseAnalysis = _scoring_index_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].mostGuessableMatchSequence(baseToken, matches);
    return baseAnalysis.guesses;
  };

  return MatchRepeat;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/scoring.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/scoring.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ repeatMatcher)
/* harmony export */ });
var repeatMatcher = function repeatMatcher(_ref) {
  var baseGuesses = _ref.baseGuesses,
      repeatCount = _ref.repeatCount;
  return baseGuesses * repeatCount;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/feedback.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/feedback.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sequenceMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


var sequenceMatcher = function sequenceMatcher() {
  return {
    warning: _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.sequences,
    suggestions: [_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.sequences]
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/matching.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/matching.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchSequence)
/* harmony export */ });
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");

/*
 *-------------------------------------------------------------------------------
 * sequences (abcdef) ------------------------------
 *-------------------------------------------------------------------------------
 */

var MatchSequence = /*#__PURE__*/function () {
  function MatchSequence() {
    this.MAX_DELTA = 5;
  } // eslint-disable-next-line max-statements


  var _proto = MatchSequence.prototype;

  _proto.match = function match(_ref) {
    var password = _ref.password;

    /*
     * Identifies sequences by looking for repeated differences in unicode codepoint.
     * this allows skipping, such as 9753, and also matches some extended unicode sequences
     * such as Greek and Cyrillic alphabets.
     *
     * for example, consider the input 'abcdb975zy'
     *
     * password: a   b   c   d   b    9   7   5   z   y
     * index:    0   1   2   3   4    5   6   7   8   9
     * delta:      1   1   1  -2  -41  -2  -2  69   1
     *
     * expected result:
     * [(i, j, delta), ...] = [(0, 3, 1), (5, 7, -2), (8, 9, 1)]
     */
    var result = [];

    if (password.length === 1) {
      return [];
    }

    var i = 0;
    var lastDelta = null;
    var passwordLength = password.length;

    for (var k = 1; k < passwordLength; k += 1) {
      var delta = password.charCodeAt(k) - password.charCodeAt(k - 1);

      if (lastDelta == null) {
        lastDelta = delta;
      }

      if (delta !== lastDelta) {
        var j = k - 1;
        this.update({
          i: i,
          j: j,
          delta: lastDelta,
          password: password,
          result: result
        });
        i = j;
        lastDelta = delta;
      }
    }

    this.update({
      i: i,
      j: passwordLength - 1,
      delta: lastDelta,
      password: password,
      result: result
    });
    return result;
  };

  _proto.update = function update(_ref2) {
    var i = _ref2.i,
        j = _ref2.j,
        delta = _ref2.delta,
        password = _ref2.password,
        result = _ref2.result;

    if (j - i > 1 || Math.abs(delta) === 1) {
      var absoluteDelta = Math.abs(delta);

      if (absoluteDelta > 0 && absoluteDelta <= this.MAX_DELTA) {
        var token = password.slice(i, +j + 1 || 9e9);

        var _this$getSequence = this.getSequence(token),
            sequenceName = _this$getSequence.sequenceName,
            sequenceSpace = _this$getSequence.sequenceSpace;

        return result.push({
          pattern: 'sequence',
          i: i,
          j: j,
          token: password.slice(i, +j + 1 || 9e9),
          sequenceName: sequenceName,
          sequenceSpace: sequenceSpace,
          ascending: delta > 0
        });
      }
    }

    return null;
  };

  _proto.getSequence = function getSequence(token) {
    // TODO conservatively stick with roman alphabet size.
    //  (this could be improved)
    var sequenceName = 'unicode';
    var sequenceSpace = 26;

    if (_data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.ALL_LOWER.test(token)) {
      sequenceName = 'lower';
      sequenceSpace = 26;
    } else if (_data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.ALL_UPPER.test(token)) {
      sequenceName = 'upper';
      sequenceSpace = 26;
    } else if (_data_const_esm_js__WEBPACK_IMPORTED_MODULE_0__.ALL_DIGIT.test(token)) {
      sequenceName = 'digits';
      sequenceSpace = 10;
    }

    return {
      sequenceName: sequenceName,
      sequenceSpace: sequenceSpace
    };
  };

  return MatchSequence;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/scoring.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/scoring.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sequenceMatcher)
/* harmony export */ });
var sequenceMatcher = function sequenceMatcher(_ref) {
  var token = _ref.token,
      ascending = _ref.ascending;
  var firstChr = token.charAt(0);
  var baseGuesses = 0;
  var startingPoints = ['a', 'A', 'z', 'Z', '0', '1', '9']; // lower guesses for obvious starting points

  if (startingPoints.includes(firstChr)) {
    baseGuesses = 4;
  } else if (firstChr.match(/\d/)) {
    baseGuesses = 10; // digits
  } else {
    // could give a higher base for uppercase,
    // assigning 26 to both upper and lower sequences is more conservative.
    baseGuesses = 26;
  } // need to try a descending sequence in addition to every ascending sequence ->
  // 2x guesses


  if (!ascending) {
    baseGuesses *= 2;
  }

  return baseGuesses * token.length;
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/feedback.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/feedback.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spatialMatcher)
/* harmony export */ });
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


var spatialMatcher = function spatialMatcher(match) {
  var warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.keyPattern;

  if (match.turns === 1) {
    warning = _Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.warnings.straightRow;
  }

  return {
    warning: warning,
    suggestions: [_Options_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].translations.suggestions.longerKeyboardPattern]
  };
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/matching.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/matching.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatchSpatial)
/* harmony export */ });
/* harmony import */ var _helper_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/helper.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");


/*
 * ------------------------------------------------------------------------------
 * spatial match (qwerty/dvorak/keypad and so on) -----------------------------------------
 * ------------------------------------------------------------------------------
 */

var MatchSpatial = /*#__PURE__*/function () {
  function MatchSpatial() {
    this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
  }

  var _proto = MatchSpatial.prototype;

  _proto.match = function match(_ref) {
    var _this = this;

    var password = _ref.password;
    var matches = [];
    Object.keys(_Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].graphs).forEach(function (graphName) {
      var graph = _Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].graphs[graphName];
      (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.extend)(matches, _this.helper(password, graph, graphName));
    });
    return (0,_helper_esm_js__WEBPACK_IMPORTED_MODULE_0__.sorted)(matches);
  };

  _proto.checkIfShifted = function checkIfShifted(graphName, password, index) {
    if (!graphName.includes('keypad') && // initial character is shifted
    this.SHIFTED_RX.test(password.charAt(index))) {
      return 1;
    }

    return 0;
  } // eslint-disable-next-line complexity, max-statements
  ;

  _proto.helper = function helper(password, graph, graphName) {
    var shiftedCount;
    var matches = [];
    var i = 0;
    var passwordLength = password.length;

    while (i < passwordLength - 1) {
      var j = i + 1;
      var lastDirection = 0;
      var turns = 0;
      shiftedCount = this.checkIfShifted(graphName, password, i); // eslint-disable-next-line no-constant-condition

      while (true) {
        var prevChar = password.charAt(j - 1);
        var adjacents = graph[prevChar] || [];
        var found = false;
        var foundDirection = -1;
        var curDirection = -1; // consider growing pattern by one character if j hasn't gone over the edge.

        if (j < passwordLength) {
          var curChar = password.charAt(j);
          var adjacentsLength = adjacents.length;

          for (var k = 0; k < adjacentsLength; k += 1) {
            var adjacent = adjacents[k];
            curDirection += 1; // eslint-disable-next-line max-depth

            if (adjacent) {
              var adjacentIndex = adjacent.indexOf(curChar); // eslint-disable-next-line max-depth

              if (adjacentIndex !== -1) {
                found = true;
                foundDirection = curDirection; // eslint-disable-next-line max-depth

                if (adjacentIndex === 1) {
                  // # index 1 in the adjacency means the key is shifted,
                  // # 0 means unshifted: A vs a, % vs 5, etc.
                  // # for example, 'q' is adjacent to the entry '2@'.
                  // # @ is shifted w/ index 1, 2 is unshifted.
                  shiftedCount += 1;
                } // eslint-disable-next-line max-depth


                if (lastDirection !== foundDirection) {
                  // # adding a turn is correct even in the initial
                  // case when last_direction is null:
                  // # every spatial pattern starts with a turn.
                  turns += 1;
                  lastDirection = foundDirection;
                }

                break;
              }
            }
          }
        } // if the current pattern continued, extend j and try to grow again


        if (found) {
          j += 1; // otherwise push the pattern discovered so far, if any...
        } else {
          // don't consider length 1 or 2 chains.
          if (j - i > 2) {
            matches.push({
              pattern: 'spatial',
              i: i,
              j: j - 1,
              token: password.slice(i, j),
              graph: graphName,
              turns: turns,
              shiftedCount: shiftedCount
            });
          } // ...and then start a new search for the rest of the password.


          i = j;
          break;
        }
      }
    }

    return matches;
  };

  return MatchSpatial;
}();



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/scoring.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/scoring.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spatialMatcher)
/* harmony export */ });
/* harmony import */ var _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scoring/utils.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");



var calcAverageDegree = function calcAverageDegree(graph) {
  var average = 0;
  Object.keys(graph).forEach(function (key) {
    var neighbors = graph[key];
    average += neighbors.filter(function (entry) {
      return !!entry;
    }).length;
  });
  average /= Object.entries(graph).length;
  return average;
};

var estimatePossiblePatterns = function estimatePossiblePatterns(_ref) {
  var token = _ref.token,
      graph = _ref.graph,
      turns = _ref.turns;
  var startingPosition = Object.keys(_Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].graphs[graph]).length;
  var averageDegree = calcAverageDegree(_Options_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].graphs[graph]);
  var guesses = 0;
  var tokenLength = token.length; // # estimate the number of possible patterns w/ tokenLength or less with turns or less.

  for (var i = 2; i <= tokenLength; i += 1) {
    var possibleTurns = Math.min(turns, i - 1);

    for (var j = 1; j <= possibleTurns; j += 1) {
      guesses += _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].nCk(i - 1, j - 1) * startingPosition * Math.pow(averageDegree, j);
    }
  }

  return guesses;
};

var spatialMatcher = function spatialMatcher(_ref2) {
  var graph = _ref2.graph,
      token = _ref2.token,
      shiftedCount = _ref2.shiftedCount,
      turns = _ref2.turns;
  var guesses = estimatePossiblePatterns({
    token: token,
    graph: graph,
    turns: turns
  }); // add extra guesses for shifted keys. (% instead of 5, A instead of a.)
  // math is similar to extra guesses of l33t substitutions in dictionary matches.

  if (shiftedCount) {
    var unShiftedCount = token.length - shiftedCount;

    if (shiftedCount === 0 || unShiftedCount === 0) {
      guesses *= 2;
    } else {
      var shiftedVariations = 0;

      for (var i = 1; i <= Math.min(shiftedCount, unShiftedCount); i += 1) {
        shiftedVariations += _scoring_utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].nCk(shiftedCount + unShiftedCount, i);
      }

      guesses *= shiftedVariations;
    }
  }

  return Math.round(guesses);
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/scoring/estimate.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/scoring/estimate.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ estimateGuesses)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");
/* harmony import */ var _utils_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js");
/* harmony import */ var _Options_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Options.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/Options.esm.js");
/* harmony import */ var _matcher_bruteforce_scoring_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../matcher/bruteforce/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/bruteforce/scoring.esm.js");
/* harmony import */ var _matcher_date_scoring_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../matcher/date/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/date/scoring.esm.js");
/* harmony import */ var _matcher_dictionary_scoring_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../matcher/dictionary/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/dictionary/scoring.esm.js");
/* harmony import */ var _matcher_regex_scoring_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../matcher/regex/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/regex/scoring.esm.js");
/* harmony import */ var _matcher_repeat_scoring_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../matcher/repeat/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/repeat/scoring.esm.js");
/* harmony import */ var _matcher_sequence_scoring_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../matcher/sequence/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/sequence/scoring.esm.js");
/* harmony import */ var _matcher_spatial_scoring_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../matcher/spatial/scoring.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/matcher/spatial/scoring.esm.js");












var getMinGuesses = function getMinGuesses(match, password) {
  var minGuesses = 1;

  if (match.token.length < password.length) {
    if (match.token.length === 1) {
      minGuesses = _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.MIN_SUBMATCH_GUESSES_SINGLE_CHAR;
    } else {
      minGuesses = _data_const_esm_js__WEBPACK_IMPORTED_MODULE_1__.MIN_SUBMATCH_GUESSES_MULTI_CHAR;
    }
  }

  return minGuesses;
};

var matchers = {
  bruteforce: _matcher_bruteforce_scoring_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  date: _matcher_date_scoring_esm_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  dictionary: _matcher_dictionary_scoring_esm_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  regex: _matcher_regex_scoring_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  repeat: _matcher_repeat_scoring_esm_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  sequence: _matcher_sequence_scoring_esm_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  spatial: _matcher_spatial_scoring_esm_js__WEBPACK_IMPORTED_MODULE_10__["default"]
};

var getScoring = function getScoring(name, match) {
  if (matchers[name]) {
    return matchers[name](match);
  }

  if (_Options_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"].matchers[name] && 'scoring' in _Options_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"].matchers[name]) {
    return _Options_esm_js__WEBPACK_IMPORTED_MODULE_3__["default"].matchers[name].scoring(match);
  }

  return 0;
}; // ------------------------------------------------------------------------------
// guess estimation -- one function per match pattern ---------------------------
// ------------------------------------------------------------------------------


var estimateGuesses = function estimateGuesses(match, password) {
  var extraData = {}; // a match's guess estimate doesn't change. cache it.

  if ('guesses' in match && match.guesses != null) {
    return match;
  }

  var minGuesses = getMinGuesses(match, password);
  var estimationResult = getScoring(match.pattern, match);
  var guesses = 0;

  if (typeof estimationResult === 'number') {
    guesses = estimationResult;
  } else if (match.pattern === 'dictionary') {
    guesses = estimationResult.calculation;
    extraData.baseGuesses = estimationResult.baseGuesses;
    extraData.uppercaseVariations = estimationResult.uppercaseVariations;
    extraData.l33tVariations = estimationResult.l33tVariations;
  }

  var matchGuesses = Math.max(guesses, minGuesses);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, match, extraData, {
    guesses: matchGuesses,
    guessesLog10: _utils_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"].log10(matchGuesses)
  });
};



/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/scoring/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/scoring/index.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scoring)
/* harmony export */ });
/* harmony import */ var _utils_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js");
/* harmony import */ var _estimate_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimate.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/scoring/estimate.esm.js");
/* harmony import */ var _data_const_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/const.esm.js */ "./node_modules/@zxcvbn-ts/core/dist/data/const.esm.js");



var scoringHelper = {
  password: '',
  optimal: {},
  excludeAdditive: false,
  fillArray: function fillArray(size, valueType) {
    var result = [];

    for (var i = 0; i < size; i += 1) {
      var value = [];

      if (valueType === 'object') {
        value = {};
      }

      result.push(value);
    }

    return result;
  },
  // helper: make bruteforce match objects spanning i to j, inclusive.
  makeBruteforceMatch: function makeBruteforceMatch(i, j) {
    return {
      pattern: 'bruteforce',
      token: this.password.slice(i, +j + 1 || 9e9),
      i: i,
      j: j
    };
  },
  // helper: considers whether a length-sequenceLength
  // sequence ending at match m is better (fewer guesses)
  // than previously encountered sequences, updating state if so.
  update: function update(match, sequenceLength) {
    var _this = this;

    var k = match.j;
    var estimatedMatch = (0,_estimate_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(match, this.password);
    var pi = estimatedMatch.guesses;

    if (sequenceLength > 1) {
      // we're considering a length-sequenceLength sequence ending with match m:
      // obtain the product term in the minimization function by multiplying m's guesses
      // by the product of the length-(sequenceLength-1)
      // sequence ending just before m, at m.i - 1.
      pi *= this.optimal.pi[estimatedMatch.i - 1][sequenceLength - 1];
    } // calculate the minimization func


    var g = _utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].factorial(sequenceLength) * pi;

    if (!this.excludeAdditive) {
      g += Math.pow(_data_const_esm_js__WEBPACK_IMPORTED_MODULE_2__.MIN_GUESSES_BEFORE_GROWING_SEQUENCE, sequenceLength - 1);
    } // update state if new best.
    // first see if any competing sequences covering this prefix,
    // with sequenceLength or fewer matches,
    // fare better than this sequence. if so, skip it and return.


    var shouldSkip = false;
    Object.keys(this.optimal.g[k]).forEach(function (competingPatternLength) {
      var competingMetricMatch = _this.optimal.g[k][competingPatternLength];

      if (parseInt(competingPatternLength, 10) <= sequenceLength) {
        if (competingMetricMatch <= g) {
          shouldSkip = true;
        }
      }
    });

    if (!shouldSkip) {
      // this sequence might be part of the final optimal sequence.
      this.optimal.g[k][sequenceLength] = g;
      this.optimal.m[k][sequenceLength] = estimatedMatch;
      this.optimal.pi[k][sequenceLength] = pi;
    }
  },
  // helper: evaluate bruteforce matches ending at passwordCharIndex.
  bruteforceUpdate: function bruteforceUpdate(passwordCharIndex) {
    var _this2 = this;

    // see if a single bruteforce match spanning the passwordCharIndex-prefix is optimal.
    var match = this.makeBruteforceMatch(0, passwordCharIndex);
    this.update(match, 1);

    var _loop = function _loop(i) {
      // generate passwordCharIndex bruteforce matches, spanning from (i=1, j=passwordCharIndex) up to (i=passwordCharIndex, j=passwordCharIndex).
      // see if adding these new matches to any of the sequences in optimal[i-1]
      // leads to new bests.
      match = _this2.makeBruteforceMatch(i, passwordCharIndex);
      var tmp = _this2.optimal.m[i - 1]; // eslint-disable-next-line no-loop-func

      Object.keys(tmp).forEach(function (sequenceLength) {
        var lastMatch = tmp[sequenceLength]; // corner: an optimal sequence will never have two adjacent bruteforce matches.
        // it is strictly better to have a single bruteforce match spanning the same region:
        // same contribution to the guess product with a lower length.
        // --> safe to skip those cases.

        if (lastMatch.pattern !== 'bruteforce') {
          // try adding m to this length-sequenceLength sequence.
          _this2.update(match, parseInt(sequenceLength, 10) + 1);
        }
      });
    };

    for (var i = 1; i <= passwordCharIndex; i += 1) {
      _loop(i);
    }
  },
  // helper: step backwards through optimal.m starting at the end,
  // constructing the final optimal match sequence.
  unwind: function unwind(passwordLength) {
    var optimalMatchSequence = [];
    var k = passwordLength - 1; // find the final best sequence length and score

    var sequenceLength = 0; // eslint-disable-next-line no-loss-of-precision

    var g = 2e308;
    var temp = this.optimal.g[k]; // safety check for empty passwords

    if (temp) {
      Object.keys(temp).forEach(function (candidateSequenceLength) {
        var candidateMetricMatch = temp[candidateSequenceLength];

        if (candidateMetricMatch < g) {
          sequenceLength = parseInt(candidateSequenceLength, 10);
          g = candidateMetricMatch;
        }
      });
    }

    while (k >= 0) {
      var match = this.optimal.m[k][sequenceLength];
      optimalMatchSequence.unshift(match);
      k = match.i - 1;
      sequenceLength -= 1;
    }

    return optimalMatchSequence;
  }
};
var scoring = {
  // ------------------------------------------------------------------------------
  // search --- most guessable match sequence -------------------------------------
  // ------------------------------------------------------------------------------
  //
  // takes a sequence of overlapping matches, returns the non-overlapping sequence with
  // minimum guesses. the following is a O(l_max * (n + m)) dynamic programming algorithm
  // for a length-n password with m candidate matches. l_max is the maximum optimal
  // sequence length spanning each prefix of the password. In practice it rarely exceeds 5 and the
  // search terminates rapidly.
  //
  // the optimal "minimum guesses" sequence is here defined to be the sequence that
  // minimizes the following function:
  //
  //    g = sequenceLength! * Product(m.guesses for m in sequence) + D^(sequenceLength - 1)
  //
  // where sequenceLength is the length of the sequence.
  //
  // the factorial term is the number of ways to order sequenceLength patterns.
  //
  // the D^(sequenceLength-1) term is another length penalty, roughly capturing the idea that an
  // attacker will try lower-length sequences first before trying length-sequenceLength sequences.
  //
  // for example, consider a sequence that is date-repeat-dictionary.
  //  - an attacker would need to try other date-repeat-dictionary combinations,
  //    hence the product term.
  //  - an attacker would need to try repeat-date-dictionary, dictionary-repeat-date,
  //    ..., hence the factorial term.
  //  - an attacker would also likely try length-1 (dictionary) and length-2 (dictionary-date)
  //    sequences before length-3. assuming at minimum D guesses per pattern type,
  //    D^(sequenceLength-1) approximates Sum(D^i for i in [1..sequenceLength-1]
  //
  // ------------------------------------------------------------------------------
  mostGuessableMatchSequence: function mostGuessableMatchSequence(password, matches, excludeAdditive) {
    if (excludeAdditive === void 0) {
      excludeAdditive = false;
    }

    scoringHelper.password = password;
    scoringHelper.excludeAdditive = excludeAdditive;
    var passwordLength = password.length; // partition matches into sublists according to ending index j

    var matchesByCoordinateJ = scoringHelper.fillArray(passwordLength, 'array');
    matches.forEach(function (match) {
      matchesByCoordinateJ[match.j].push(match);
    }); // small detail: for deterministic output, sort each sublist by i.

    matchesByCoordinateJ = matchesByCoordinateJ.map(function (match) {
      return match.sort(function (m1, m2) {
        return m1.i - m2.i;
      });
    });
    scoringHelper.optimal = {
      // optimal.m[k][sequenceLength] holds final match in the best length-sequenceLength
      // match sequence covering the
      // password prefix up to k, inclusive.
      // if there is no length-sequenceLength sequence that scores better (fewer guesses) than
      // a shorter match sequence spanning the same prefix,
      // optimal.m[k][sequenceLength] is undefined.
      m: scoringHelper.fillArray(passwordLength, 'object'),
      // same structure as optimal.m -- holds the product term Prod(m.guesses for m in sequence).
      // optimal.pi allows for fast (non-looping) updates to the minimization function.
      pi: scoringHelper.fillArray(passwordLength, 'object'),
      // same structure as optimal.m -- holds the overall metric.
      g: scoringHelper.fillArray(passwordLength, 'object')
    };

    for (var k = 0; k < passwordLength; k += 1) {
      matchesByCoordinateJ[k].forEach(function (match) {
        if (match.i > 0) {
          Object.keys(scoringHelper.optimal.m[match.i - 1]).forEach(function (sequenceLength) {
            scoringHelper.update(match, parseInt(sequenceLength, 10) + 1);
          });
        } else {
          scoringHelper.update(match, 1);
        }
      });
      scoringHelper.bruteforceUpdate(k);
    }

    var optimalMatchSequence = scoringHelper.unwind(passwordLength);
    var optimalSequenceLength = optimalMatchSequence.length;
    var guesses = this.getGuesses(password, optimalSequenceLength);
    return {
      password: password,
      guesses: guesses,
      guessesLog10: _utils_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].log10(guesses),
      sequence: optimalMatchSequence
    };
  },
  getGuesses: function getGuesses(password, optimalSequenceLength) {
    var passwordLength = password.length;
    var guesses = 0;

    if (password.length === 0) {
      guesses = 1;
    } else {
      guesses = scoringHelper.optimal.g[passwordLength - 1][optimalSequenceLength];
    }

    return guesses;
  }
};


/***/ }),

/***/ "./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@zxcvbn-ts/core/dist/scoring/utils.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ utils)
/* harmony export */ });
var utils = {
  // binomial coefficients
  // src: http://blog.plover.com/math/choose.html
  nCk: function nCk(n, k) {
    var count = n;

    if (k > count) {
      return 0;
    }

    if (k === 0) {
      return 1;
    }

    var coEff = 1;

    for (var i = 1; i <= k; i += 1) {
      coEff *= count;
      coEff /= i;
      count -= 1;
    }

    return coEff;
  },
  log10: function log10(n) {
    return Math.log(n) / Math.log(10); // IE doesn't support Math.log10 :(
  },
  log2: function log2(n) {
    return Math.log(n) / Math.log(2);
  },
  factorial: function factorial(num) {
    var rval = 1;

    for (var i = 2; i <= num; i += 1) {
      rval *= i;
    }

    return rval;
  }
};


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

/***/ "./src/forum/components/EyeButton.js":
/*!*******************************************!*\
  !*** ./src/forum/components/EyeButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EyeButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);


/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */



var EyeButton = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EyeButton, _Component);

  function EyeButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EyeButton.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var showing = this.attrs.showing;
    return m("span", {
      className: "EyeButton",
      onclick: function onclick() {
        return showing(!showing());
      }
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()("fas fa-eye" + (showing() ? '-slash' : '')));
  };

  return EyeButton;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/LogInPasswordField.js":
/*!****************************************************!*\
  !*** ./src/forum/components/LogInPasswordField.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInPasswordField)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EyeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EyeButton */ "./src/forum/components/EyeButton.js");


/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


 // Make translation calls shorter

var t = app.translator.trans.bind(app.translator);

var LogInPasswordField = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInPasswordField, _Component);

  function LogInPasswordField() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LogInPasswordField.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var _this$attrs = this.attrs,
        parent_this = _this$attrs.parent_this,
        showingPassword = _this$attrs.showingPassword;
    return (// This markup is copied from `flarum/components/LogInModal` and then
      // some things have been added.
      // !!! Please check for updates regularly !!!
      m("div", {
        className: "Form-group PasswordField"
      }, m("input", {
        className: "FormControl togglable",
        name: "password",
        type: showingPassword() ? 'text' : 'password',
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(t('core.forum.log_in.password_placeholder')),
        bidi: parent_this.password,
        disabled: parent_this.loading
      }), m(_EyeButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showing: showingPassword
      }))
    );
  };

  return LogInPasswordField;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/SignUpPasswordField.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/SignUpPasswordField.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpPasswordField)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxcvbn-ts/core */ "./node_modules/@zxcvbn-ts/core/dist/index.esm.js");
/* harmony import */ var _EyeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EyeButton */ "./src/forum/components/EyeButton.js");
/* harmony import */ var _StrengthIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StrengthIndicator */ "./src/forum/components/StrengthIndicator.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common */ "./src/common/index.js");


/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */






 // Make translation calls shorter

var t = app.translator.trans.bind(app.translator);
var prfx = _common__WEBPACK_IMPORTED_MODULE_7__.slug + ".forum.strengthLabels"; // Make settings accessible easier

var settings = function settings(key) {
  return app.forum.attribute(_common__WEBPACK_IMPORTED_MODULE_7__.slug + "." + key);
};

var SignUpPasswordField = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SignUpPasswordField, _Component);

  function SignUpPasswordField() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SignUpPasswordField.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.strengthLabel = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())('');
    this.passwordScore = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())(undefined);
    this.strengthColor = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())('');
  };

  _proto.view = function view() {
    var _this$attrs = this.attrs,
        parent_this = _this$attrs.parent_this,
        showingPassword = _this$attrs.showingPassword,
        hasConfirmFiled = _this$attrs.hasConfirmFiled,
        isConfirmFiled = _this$attrs.isConfirmFiled;
    return (// This markup is copied from `flarum/components/LogInModal` and then
      // some things have been added.
      // !!! Please check for updates regularly !!!
      m("div", {
        className: "Form-group PasswordField"
      }, m("input", {
        className: "FormControl " + (settings('enablePasswordToggle') ? 'togglable' : ''),
        name: isConfirmFiled ? 'confirmPassword' : 'password',
        type: showingPassword() ? 'text' : 'password',
        placeholder: isConfirmFiled ? t('nearata-signup-confirm-password.forum.field_placeholder') : flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(t('core.forum.sign_up.password_placeholder')),
        value: isConfirmFiled ? parent_this.confirmPassword() : parent_this.password(),
        disabled: parent_this.loading,
        oninput: this.inputHandler.bind(this),
        style: {
          color: settings('enableInputColor') && !showingPassword() && (!hasConfirmFiled || isConfirmFiled) ? this.strengthColor() : undefined,
          borderColor: settings('enableInputBorderColor') && (!hasConfirmFiled || isConfirmFiled) ? this.strengthColor() : undefined
        }
      }), settings('enablePasswordToggle') ? m(_EyeButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showing: showingPassword
      }) : null, !hasConfirmFiled || isConfirmFiled ? m(_StrengthIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], {
        score: this.passwordScore(),
        label: this.strengthLabel(),
        color: this.strengthColor()
      }) : null)
    );
  };

  _proto.inputHandler = function inputHandler(e) {
    var _this$attrs2 = this.attrs,
        parent_this = _this$attrs2.parent_this,
        isConfirmFiled = _this$attrs2.isConfirmFiled;
    var password = e.target.value;

    if (isConfirmFiled) {
      parent_this.confirmPassword(password);
    } else {
      parent_this.password(password);
    }

    if (password) {
      // Get the score of the password strength
      var _zxcvbn = (0,_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_4__.zxcvbn)(password),
          score = _zxcvbn.score;

      this.passwordScore(score); // Define strength color & label

      switch (score) {
        case 0:
        case 1:
          this.strengthLabel(t(prfx + ".weak"));
          this.strengthColor("rgb(" + settings('weakColor') + ")");
          break;

        case 2:
        case 3:
          this.strengthLabel(t(prfx + ".medium"));
          this.strengthColor("rgb(" + settings('mediumColor') + ")");
          break;

        case 4:
          this.strengthLabel(t(prfx + ".strong"));
          this.strengthColor("rgb(" + settings('strongColor') + ")");
          break;
      }
    } else {
      this.passwordScore(undefined);
      this.strengthLabel('');
      this.strengthColor(undefined);
    }
  };

  return SignUpPasswordField;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/StrengthIndicator.js":
/*!***************************************************!*\
  !*** ./src/forum/components/StrengthIndicator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrengthIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


var StrengthIndicator = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StrengthIndicator, _Component);

  function StrengthIndicator() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = StrengthIndicator.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var _this = this;

    var _this$attrs = this.attrs,
        label = _this$attrs.label,
        color = _this$attrs.color;
    return m("div", {
      className: "StrengthIndicator " + (label ? 'active' : '')
    }, m("div", {
      className: "StrengthIndicator-container"
    }, m("div", {
      className: "StrengthIndicator-pills"
    }, ['weak', 'medium', 'strong'].map(function (key) {
      return m(StrengthPill, {
        color: color,
        active: _this.isPillActive(key)
      });
    })), m("div", {
      className: "StrengthIndicator-label"
    }, m("span", null, label))));
  };

  _proto.isPillActive = function isPillActive(key) {
    var score = this.attrs.score;

    switch (key) {
      case 'weak':
        if (Number.isInteger(score)) {
          return true;
        }

      case 'medium':
        if (score >= 2) {
          return true;
        }

      case 'strong':
        if (score >= 4) {
          return true;
        }

      default:
        return false;
    }
  };

  return StrengthIndicator;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



var StrengthPill = /*#__PURE__*/function (_Component2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StrengthPill, _Component2);

  function StrengthPill() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = StrengthPill.prototype;

  _proto2.view = function view() {
    var _this$attrs2 = this.attrs,
        color = _this$attrs2.color,
        active = _this$attrs2.active;
    var backgroundColor = active ? color : undefined;
    return m("div", {
      className: "StrengthPill",
      style: {
        backgroundColor: backgroundColor
      }
    });
  };

  return StrengthPill;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/common/index.js");
/* harmony import */ var _components_LogInPasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LogInPasswordField */ "./src/forum/components/LogInPasswordField.js");
/* harmony import */ var _components_SignUpPasswordField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SignUpPasswordField */ "./src/forum/components/SignUpPasswordField.js");
/*
 * This file is part of glowingblue/password-strength.
 *
 * Copyright (c) 2024 Glowing Blue AG.
 * Authors: Davide Iadeluca, Ian Morland, hasan-ozbey, iPurpl3x, the-turk.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */








flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add(_common__WEBPACK_IMPORTED_MODULE_5__.slug, function () {
  function extendOninit() {
    this.showingPassword = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default())(false);
  }

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', extendOninit);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'oninit', extendOninit);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'fields', function (items) {
    if (flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute(_common__WEBPACK_IMPORTED_MODULE_5__.slug + ".enablePasswordToggle") && items.has('password')) {
      items.setContent('password', m(_components_LogInPasswordField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        parent_this: this,
        showingPassword: this.showingPassword.bind(this)
      }));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'fields', function (items) {
    if (!this.attrs.token) {
      var hasConfirmFiled = items.has('nearataConfirmPassword') && this.confirmPassword !== undefined;
      items.setContent('password', m(_components_SignUpPasswordField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        parent_this: this,
        showingPassword: this.showingPassword.bind(this),
        hasConfirmFiled: hasConfirmFiled
      }));

      if (hasConfirmFiled) {
        items.setContent('nearataConfirmPassword', m(_components_SignUpPasswordField__WEBPACK_IMPORTED_MODULE_7__["default"], {
          parent_this: this,
          showingPassword: this.showingPassword.bind(this),
          hasConfirmFiled: hasConfirmFiled,
          isConfirmFiled: true
        }));
      }
    }
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map