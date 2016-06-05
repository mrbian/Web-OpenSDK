/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by oureda on 5/30/16.
	 */
	__webpack_require__(1);

	__webpack_require__(11);

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by oureda on 5/30/16.
	 */
	(function (root) {
	    var navbar = window.document.querySelector('ul.list.collapse');
	    var trigger = window.document.querySelector('button.navbar-toggle');
	    trigger.addEventListener('click', function () {}, false);
	})(undefined);

	function getClass(elem) {
	    return elem.getAttribute && elem.getAttribute('class') || "";
	}

	function addClass(value) {
	    var classes,
	        curValue,
	        cur,
	        whitespace = /\S+/g,
	        schar = /[\t]/g,
	        elem = this;
	    if (typeof value === "string" && value) {
	        classes = value.match(whitespace) || [];
	        curValue = getClass(elem);
	        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(schar, " ");
	    }
	}

/***/ }

/******/ });