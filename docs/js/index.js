webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(6);
	
	__webpack_require__(16);
	
	__webpack_require__(18);
	
	__webpack_require__(20);
	
	console.log('src');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    $: function $(selector) {
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	
	        if (context instanceof NodeList) {
	            return Array.from(context, function (node) {
	                return node.querySelector(selector);
	            });
	        }
	        return context.querySelector(selector);
	    },
	    $$: function $$(selector) {
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	
	        if (context instanceof NodeList) {
	            return Array.from(context, function (node) {
	                return node.querySelectorAll(selector);
	            });
	        }
	        return context.querySelectorAll(selector);
	    },
	
	    keyCode: {
	        'up': 38,
	        'down': 40
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	
	console.log('data');

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(10);
	
	__webpack_require__(12);
	
	__webpack_require__(14);
	
	console.log('form');

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(11);

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(15);
	
	var _basic = __webpack_require__(3);
	
	var _basic2 = _interopRequireDefault(_basic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var $ = _basic2.default.$;
	var $$ = _basic2.default.$$;
	
	var inputNum = $$('.g-input--num');
	var input = $('input', inputNum);
	var min = $('.min', inputNum);
	var plus = $('.plus', inputNum);
	
	input.forEach(function (item) {
	    item.dataset.counter = item.value = 0;
	    item.addEventListener('input', function () {
	        var oldVal = item.value;
	        item.value = parseInt(oldVal.replace(/[^\d]/g, ''), 10) || 0;
	    });
	    item.addEventListener('keyup', function (e) {
	        var keyCode = e.keyCode;
	        if (keyCode != _basic2.default.keyCode.up && keyCode != _basic2.default.keyCode.down) {
	            return;
	        }
	
	        var curCounter = parseInt(item.dataset.counter, 10);
	        var maxValue = item.dataset.max || 0;
	        var max = parseInt(maxValue, 10);
	        var stepValue = item.dataset.step || 1;
	        var step = parseInt(stepValue, 10);
	
	        if (keyCode == _basic2.default.keyCode.up) {
	
	            if (max > 0 && curCounter >= max) {
	                return;
	            }
	
	            var newVal = curCounter + step;
	            if (max > 0 && newVal > max) {
	                newVal = max;
	            }
	            item.dataset.counter = item.value = newVal;
	        } else if (keyCode == _basic2.default.keyCode.down) {
	            if (curCounter !== 0) {
	                var _newVal = curCounter - step;
	                if (_newVal < 0) {
	                    _newVal = 0;
	                }
	                item.dataset.counter = item.value = _newVal;
	            }
	        }
	    });
	});
	min.forEach(function (item) {
	    var parent = item.parentNode;
	    var input = $('input', parent);
	
	    item.addEventListener('click', function () {
	        var curCounter = parseInt(input.dataset.counter, 10);
	        var stepValue = input.dataset.step || 1;
	        var step = parseInt(stepValue, 10);
	        if (curCounter !== 0) {
	            var newVal = curCounter - step;
	            if (newVal < 0) {
	                newVal = 0;
	            }
	            input.dataset.counter = input.value = newVal;
	        }
	    });
	});
	plus.forEach(function (item) {
	    var parent = item.parentNode;
	    var input = $('input', parent);
	
	    item.addEventListener('click', function () {
	        var curCounter = parseInt(input.dataset.counter, 10);
	        var maxValue = input.dataset.max || 0;
	        var max = parseInt(maxValue, 10);
	        var stepValue = input.dataset.step || 1;
	        var step = parseInt(stepValue, 10);
	
	        if (max > 0 && curCounter >= max) {
	            return;
	        }
	
	        var newVal = curCounter + step;
	        if (max > 0 && newVal > max) {
	            newVal = max;
	        }
	        input.dataset.counter = input.value = newVal;
	    });
	});
	
	console.log(inputNum, input, min, plus);

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(17);
	
	console.log('navigation');

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(19);
	
	console.log('notice');

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(21);
	
	console.log('others');

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=index.js.map