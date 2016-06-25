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

	__webpack_require__(12);

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by oureda on 5/30/16.
	 */
	(function (root) {
	    Object.prototype.setStyle = setStyle;
	    Object.prototype.getClass = getClass;
	    Object.prototype.addClass = addClass;
	    Object.prototype.removeClass = removeClass;

	    var navbar = window.document.querySelector('ul.list.collapse');
	    var trigger = window.document.querySelector('button.navbar-toggle');
	    trigger.addEventListener('click', function () {}, false);

	    function SliderInit() {
	        var ad_list = document.getElementById('li_cr');
	        var lists = ad_list.childNodes;
	        for (var idx in lists) {
	            if (lists[idx].nodeType === 1) {
	                lists[idx].setStyle('z-index', 0);
	                lists[idx].setStyle('opacity', 0);
	            }
	        }
	    }

	    function SliderCtrlInit() {
	        var ctrls = document.getElementsByClassName('ctrl');
	        for (var idx in ctrls) {
	            var ele = ctrls[idx];
	            if (ele.nodeType !== 1) return;
	        }
	    }

	    function SliderToIdx() {}

	    SliderInit();
	    SliderCtrlInit();
	})(undefined);

	function getClass() {
	    var elem = this;
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
	        curValue = elem.getClass();
	        if (curValue.indexOf(value) !== -1) return;
	        curValue = curValue + ' ' + value;
	        elem.setAttribute('class', curValue);
	    }
	}

	function removeClass(value) {
	    var elem = this;
	    var whitespace = /\S+/g,
	        classes = elem.getClass();
	    if (typeof value === "string" && value) {
	        if (classes.indexOf(value) === -1) return;
	        classes = classes.replace(value, '');
	        classes.trim();
	        elem.setAttribute('class', classes);
	    }
	}

	function setStyle(property, value) {
	    var elem = this;
	    elem.style[property] = value;
	}

/***/ }

/******/ });