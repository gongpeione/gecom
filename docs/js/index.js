webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	
	__webpack_require__(13);
	
	__webpack_require__(15);
	
	__webpack_require__(28);
	
	__webpack_require__(30);
	
	__webpack_require__(32);
	
	console.log('src');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	__webpack_require__(11);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(12);

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(14);
	
	console.log('data');

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	__webpack_require__(23);
	
	__webpack_require__(26);
	
	console.log('form');

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(24);
	
	var _basic = __webpack_require__(25);
	
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
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	
	    create: function create() {
	        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
	        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        var node = document.createElement(tagName);
	        for (var key in attrs) {
	            node.setAttribute(key, attrs[key]);
	        }
	
	        return node;
	    },
	
	    attr: function attr(node, _attr) {
	        var newVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	        if (newVal) {
	            node.setAttribute(_attr, newVal);
	            return;
	        }
	
	        return node.getAttribute(_attr);
	    },
	
	    attrs: function attrs(node) {
	        var attrs = {};
	        Array.from(node.attributes).forEach(function (attr) {
	            var attrName = attr.nodeName;
	            attrs[attrName] = node.getAttribute(attrName);
	        });
	
	        return attrs;
	    },
	
	    class: function _class(node, className) {
	        var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        if (remove) {
	            node.classList.remove(className);
	            return;
	        }
	        if (Array.isArray(className)) {
	            var _node$classList;
	
	            (_node$classList = node.classList).add.apply(_node$classList, _toConsumableArray(className));
	            return;
	        }
	        node.classList.add(className);
	    },
	
	    css: function css(node, styles) {
	        node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles;
	    },
	
	    vdom: function () {
	        function VDOM() {
	            var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
	            var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	            _classCallCheck(this, VDOM);
	
	            this.tagName = tagName;
	            this.attrs = attrs;
	            this.children = Array.isArray(children) ? children : Array.from(children);
	
	            this.event = [];
	        }
	
	        _createClass(VDOM, [{
	            key: 'render',
	            value: function render() {
	                var node = document.createElement(this.tagName);
	                var attrs = this.attrs;
	
	                for (var attr in attrs) {
	                    node.setAttribute(attr, attrs[attr]);
	                }
	
	                console.log(this.event);
	                if (this.event.length) {
	                    this.event.forEach(function (eachEvent) {
	                        node.addEventListener(eachEvent.eventName, eachEvent.callback);
	                    });
	                }
	
	                var children = this.children;
	
	                Array.from(children).forEach(function (child) {
	                    var childEl = child instanceof VDOM ? child.render() : document.createTextNode(child);
	
	                    node.appendChild(childEl);
	                });
	
	                return node;
	            }
	        }, {
	            key: 'addEvent',
	            value: function addEvent(eventName, callback) {
	                this.event.push({
	                    eventName: eventName,
	                    callback: callback
	                });
	            }
	        }]);
	
	        return VDOM;
	    }(),
	
	    keyCode: {
	        'up': 38,
	        'down': 40
	    }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(27);
	
	var _basic = __webpack_require__(25);
	
	var _basic2 = _interopRequireDefault(_basic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var select = _basic2.default.$$('.g-select');
	var vdom = _basic2.default.vdom;
	
	select.forEach(function (item) {
	
	    var tmpFragment = document.createDocumentFragment();
	    var parentNode = item.parentNode;
	    var nodeAttrs = _basic2.default.attrs(item);
	    var options = [];
	    var optionsOriginal = _basic2.default.$$('option', item);
	    var selected = { value: '', text: '' };
	    var child = void 0;
	
	    optionsOriginal.forEach(function (child) {
	        var text = child.innerText;
	        var attrs = _basic2.default.attrs(child);
	
	        if ('selected' in attrs) {
	            selected.text = text;
	            selected.value = attrs['value'];
	        }
	
	        var listItem = new vdom('li', attrs, [text]);
	        listItem.addEvent('click', function (e) {
	            var li = e.target;
	            var ul = li.parentNode;
	            var parent = ul.parentNode;
	            var input = _basic2.default.$('input', parent);
	
	            parent.classList.remove('slideDown');
	            input.value = li.innerText;
	            input['data-value'] = _basic2.default.attr(li, 'value');
	
	            console.log(li, ul, parent, input);
	        });
	        options.push(listItem);
	    });
	    if (selected.value === '') {
	        selected.text = optionsOriginal[0].innerText;
	        selected.value = optionsOriginal[0].getAttribute('value');
	    }
	
	    var input = new vdom('input', {
	        type: 'text',
	        readonly: true,
	        value: selected.text,
	        'data-value': selected.value
	    });
	    input.addEvent('click', function (e) {
	        var parent = e.target.parentNode;
	
	        parent.classList.toggle('slideDown');
	    });
	    input.addEvent('blur', function (e) {
	        var parent = e.target.parentNode;
	
	        parent.classList.remove('slideDown');
	    });
	    var selectList = new vdom('ul', {}, options);
	
	    nodeAttrs['class'] = nodeAttrs['class'] ? nodeAttrs['class'] += ' g-selector' : 'g-selector';
	    var node = new vdom('div', nodeAttrs, [input, selectList]);
	    console.log(node);
	
	    parentNode.insertBefore(node.render(), item);
	
	    _basic2.default.class(item, 'hidden');
	    _basic2.default.css(item, 'display: none');
	
	    console.log(node);
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(29);
	
	console.log('navigation');

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(31);
	
	console.log('notice');

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(33);
	
	console.log('others');

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=index.js.map