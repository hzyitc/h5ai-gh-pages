

/* eslint-disable func-names,no-var */
(function (win) {
    if (!win || win.window !== win || !win.document) {
        throw new Error('no-window');
    }

    var no_browser = 'no-browser';
    var doc_el = win.document.documentElement;
    doc_el.className = '';

    function assert(msg, expr) {
        if (!expr) {
            doc_el.className = no_browser;
            throw new Error(no_browser + ': ' + msg);
        }
    }

    function is_fn(x) {
        return typeof x === 'function';
    }

    assert('console', win.console && is_fn(win.console.log));
    assert('assign', win.Object && is_fn(win.Object.assign));
    assert('promise', is_fn(win.Promise));
    // assert('xhr', is_fn(win.XMLHttpRequest)); // is object in safari
    assert('xhr', win.XMLHttpRequest);
}(this));
/* eslint-enable */;


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if (!global.window) {
  var JSDOM = __webpack_require__(2).JSDOM;

  global.window = new JSDOM('').window;
}

var _require = __webpack_require__(3),
    test = _require.test;

var _require2 = __webpack_require__(14),
    pin_html = _require2.pin_html;

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

pin_html();
test.cli({
  sync: true
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Test = __webpack_require__(4);

var Suite = __webpack_require__(6);

var reporter = __webpack_require__(7);

var cli = __webpack_require__(9);

var scar = function scar() {
  var tests = [];

  var test = function test() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    tests.push(_construct(Test, args));
  };

  test.skip = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return test.apply(void 0, args.concat([{
      skip: true
    }]));
  };

  test.sync = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return test.apply(void 0, args.concat([{
      sync: true
    }]));
  };

  test.run = function (options) {
    options = _objectSpread(_objectSpread({
      reporter: reporter
    }, options), {}, {
      tests: tests
    });
    return new Suite(options).run();
  };

  test.cli = function (options) {
    return cli(test.run, options);
  };

  return test;
};

module.exports = {
  scar: scar,
  test: scar(),
  assert: __webpack_require__(10),
  insp: __webpack_require__(11),
  spy: __webpack_require__(12),
  uniq: __webpack_require__(13)
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(5),
    is_str = _require.is_str,
    is_num = _require.is_num,
    is_fn = _require.is_fn,
    as_fn = _require.as_fn;

var timeout = function timeout(promise, millis) {
  if (!is_num(millis) || millis <= 0) {
    return promise;
  }

  return Promise.race([promise, new Promise(function (resolve, reject) {
    setTimeout(function () {
      return reject(new Error("Timeout (".concat(millis, "ms)")));
    }, millis);
  })]);
};

var Test = /*#__PURE__*/function () {
  function Test() {
    var _this = this;

    _classCallCheck(this, Test);

    this.desc = '[No Description]';
    this.fn = null;
    this.skip = false;
    this.sync = false;
    this.timeout = null;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (arg) {
      if (is_str(arg)) {
        _this.desc = arg;
      } else if (is_fn(arg)) {
        _this.fn = arg;
      } else {
        Object.assign(_this, arg);
      }
    });
    this.status = Test.WAITING;
    this.err = null;
    this.starttime = null;
    this.duration = null;
    this.promise = null;
  }

  _createClass(Test, [{
    key: "__TRACE_MARKER__",
    value: function __TRACE_MARKER__() {
      return as_fn(this.fn)();
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.promise = this.promise || Promise.resolve().then(function () {
        _this2.starttime = Date.now();
        _this2.status = Test.PENDING;

        if (_this2.skip) {
          return null;
        }

        var pr = Promise.resolve().then(function () {
          return _this2.__TRACE_MARKER__();
        });
        return timeout(pr, _this2.timeout);
      }).then(function () {
        _this2.status = _this2.skip ? Test.SKIPPED : Test.PASSED;
      })["catch"](function (err) {
        _this2.status = Test.FAILED;
        _this2.err = err;
      }).then(function () {
        _this2.duration = Date.now() - _this2.starttime;
      });
      return this.promise;
    }
  }]);

  return Test;
}();

Test.WAITING = 'WAITING';
Test.PENDING = 'PENDING';
Test.PASSED = 'PASSED';
Test.FAILED = 'FAILED';
Test.SKIPPED = 'SKIPPED';
module.exports = Test;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var is_bool = function is_bool(x) {
  return typeof x === 'boolean';
};

var is_num = function is_num(x) {
  return typeof x === 'number';
};

var is_str = function is_str(x) {
  return typeof x === 'string';
};

var is_arr = function is_arr(x) {
  return Array.isArray(x);
};

var is_fn = function is_fn(x) {
  return typeof x === 'function';
};

var as_fn = function as_fn(x) {
  return is_fn(x) ? x : function () {
    return x;
  };
};

var is_regexp = function is_regexp(x) {
  return x instanceof RegExp;
};

var is_plain_obj = function is_plain_obj(x) {
  return Reflect.apply(Object.prototype.toString, x, []) === '[object Object]';
};

var run_seq = function run_seq(fns) {
  return fns.reduce(function (p, fn) {
    return p.then(fn);
  }, Promise.resolve());
};

var run_conc = function run_conc(fns) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;

  if (max < 2) {
    return run_seq(fns);
  }

  return new Promise(function (resolve) {
    fns = Array.from(fns);
    var awaiting = fns.length;
    var pending = 0;

    var run_fn = function run_fn(fn) {
      return Promise.resolve().then(fn)["catch"](function () {}).then(function () {
        pending -= 1;
        awaiting -= 1;
      });
    };

    var check = function check() {
      while (fns.length && pending < max) {
        run_fn(fns.shift()).then(check);
        pending += 1;
      }

      if (!awaiting) {
        resolve();
      }
    };

    check();
  });
};

module.exports = {
  is_bool: is_bool,
  is_num: is_num,
  is_str: is_str,
  is_arr: is_arr,
  is_fn: is_fn,
  is_regexp: is_regexp,
  is_plain_obj: is_plain_obj,
  as_fn: as_fn,
  run_seq: run_seq,
  run_conc: run_conc
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(5),
    as_fn = _require.as_fn,
    run_seq = _require.run_seq,
    run_conc = _require.run_conc;

var Test = __webpack_require__(4);

var Suite = /*#__PURE__*/function () {
  function Suite(options) {
    _classCallCheck(this, Suite);

    this.sync = false;
    this.reporter = null;
    this.filter = null;
    this.max_conc = 64;
    this.tests = [];
    Object.assign(this, options);
    this.status = Test.WAITING;
    this.starttime = null;
    this.duration = null;
    this.promise = null;
  }

  _createClass(Suite, [{
    key: "run_test",
    value: function run_test(test) {
      var _this = this;

      return Promise.resolve().then(function () {
        return as_fn(_this.reporter)('before_test', _this, test);
      }).then(function () {
        _this.run_count += 1;
        test.run_idx = _this.run_count;
      }).then(function () {
        return test.run();
      }).then(function () {
        _this.settled_count += 1;
        test.settled_idx = _this.settled_count;

        if (test.status === Test.PASSED) {
          _this.passed_count += 1;
          test.passed_idx = _this.passed_count;
        } else if (test.status === Test.SKIPPED) {
          _this.skipped_count += 1;
          test.skipped_idx = _this.skipped_count;
        } else {
          _this.failed_count += 1;
          test.failed_idx = _this.failed_count;
        }
      }).then(function () {
        return as_fn(_this.reporter)('after_test', _this, test);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.promise = this.promise || Promise.resolve().then(function () {
        _this2.tests.forEach(function (test, idx) {
          test.def_idx = idx + 1;
        });

        _this2.total = _this2.tests.length;
        _this2.filtered_tests = _this2.tests.filter(as_fn(_this2.filter || true));
        _this2.filtered_total = _this2.filtered_tests.length;
        _this2.run_count = 0;
        _this2.settled_count = 0;
        _this2.passed_count = 0;
        _this2.failed_count = 0;
        _this2.skipped_count = 0;
      }).then(function () {
        return as_fn(_this2.reporter)('before_all', _this2);
      }).then(function () {
        _this2.starttime = Date.now();
        _this2.status = Test.PENDING;

        var test_to_fn = function test_to_fn(test) {
          return function () {
            return _this2.run_test(test);
          };
        };

        var tests = _this2.filtered_tests;
        var sync_tests = _this2.sync ? tests : tests.filter(function (t) {
          return !!t.sync;
        });
        var async_tests = _this2.sync ? [] : tests.filter(function (t) {
          return !t.sync;
        });
        var sync_fns = sync_tests.map(test_to_fn);
        var async_fns = async_tests.map(test_to_fn);
        return run_seq(sync_fns).then(function () {
          return run_conc(async_fns, _this2.max_conc);
        });
      }).then(function () {
        _this2.status = _this2.failed_count ? Test.FAILED : Test.PASSED;
        _this2.duration = Date.now() - _this2.starttime;
      }).then(function () {
        return as_fn(_this2.reporter)('after_all', _this2);
      }).then(function () {
        return _this2;
      });
      return this.promise;
    }
  }]);

  return Suite;
}();

module.exports = Suite;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var format_err = __webpack_require__(8);

var Test = __webpack_require__(4);

var DOC = global.window && global.window.document;
var ICON_TPL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wsZER*AAAAAElFTkSuQmCC';
var ICON_RED = ICON_TPL.replace('*', 'Y0VbWlewAAAB1JREFUOMtj/OJs9p+BAsDEQCEYNWDUgFEDBosBABZOAow9yV0y');
var ICON_GREEN = ICON_TPL.replace('*', 'kM+i8BKgAAAB1JREFUOMtj9Fkf8J+BAsDEQCEYNWDUgFEDBosBAIuhAmqCXURi');
var ICON_GREY = ICON_TPL.replace('*', 'kjUf48cwAAAB1JREFUOMtjDA0N/c9AAWBioBCMGjBqwKgBg8UAAFduAh79mcom');

var log = function log(x) {
  return console.log(x);
};

var set_title = !DOC ? function () {
  return null;
} : function () {
  var head = DOC.querySelector('head');
  var rel = 'shortcut icon';
  return function (title, href) {
    DOC.title = title;
    var el = head.querySelector("link[rel=\"".concat(rel, "\"]"));

    if (el) {
      head.removeChild(el);
    }

    head.appendChild(Object.assign(DOC.createElement('link'), {
      rel: rel,
      href: href
    }));
  };
}();

module.exports = function (type, suite, test) {
  if (type === 'before_all') {
    var str = 'running ';

    if (suite.filtered_total !== suite.total) {
      str += "".concat(suite.filtered_total, " of ");
    }

    str += "".concat(suite.total, " tests\n ");
    log(str);
    set_title("running ".concat(suite.filtered_total, " tests..."), ICON_GREY); // take time to update icon

    return new Promise(function (resolve) {
      return setTimeout(function () {
        return resolve();
      }, 30);
    });
  }

  if (type === 'after_test') {
    var status = test.status === Test.PASSED ? ' ok ' : test.status === Test.SKIPPED ? 'skip' : 'FAIL';
    log(" ".concat(status, " ").concat(test.desc));
  }

  if (type === 'after_all') {
    suite.tests.filter(function (t) {
      return t.status === Test.FAILED;
    }).forEach(function (t) {
      var str = format_err(t.err, '  ');
      log("\n[".concat(t.failed_idx, "] ").concat(t.desc, "\n").concat(str));
    });
    var resume = '\n';

    if (suite.failed_count) {
      resume += "".concat(suite.failed_count, " failed, ");
    }

    if (suite.skipped_count) {
      resume += "".concat(suite.skipped_count, " skipped, ");
    }

    resume += "".concat(suite.passed_count, " passed (").concat(suite.duration, "ms)");
    log(resume);
    set_title(resume, suite.failed_count ? ICON_RED : ICON_GREEN);
  }

  return null;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LINE_PATTERNS = [// v8: ' at <method> (<url>:<line>:<col>)'
{
  re: /^\s*at\s+(.*?)\s+\((.*?)(?::(\d+))?(?::(\d+))?\)\s*$/,
  method: 1,
  url: 2,
  line: 3,
  column: 4
}, // v8 no method: ' at <url>:<line>:<col>'
{
  re: /^\s*at\s+(.*?)(?::(\d+))?(?::(\d+))?\s*$/,
  method: null,
  url: 1,
  line: 2,
  column: 3
}, // spidermonkey: '<method>@<url>:<line>:<col>'
{
  re: /^(.*?)@(.*?)(?::(\d+))?(?::(\d+))?\s*$/,
  method: 1,
  url: 2,
  line: 3,
  column: 4
}];
var RE_MARKER = /\b__TRACE_MARKER__\b|^process\._tickCallback$/;

var parse_frame = function parse_frame(line) {
  var _iterator = _createForOfIteratorHelper(LINE_PATTERNS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pattern = _step.value;
      var match = pattern.re.exec(line);

      if (match) {
        return {
          method: match[pattern.method] || '',
          url: match[pattern.url],
          basename: match[pattern.url].replace(/^.*\//, ''),
          line: parseInt(match[pattern.line], 10),
          column: parseInt(match[pattern.column], 10),
          drop: false
        };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

var parse_frames = function parse_frames(sequence, drop) {
  drop = Number(drop) || 0;
  var lines = sequence.split('\n');
  var frames = lines.map(function (line) {
    return parse_frame(line);
  }).filter(function (x) {
    return x;
  });
  var drop_frames = false;
  frames.forEach(function (frame, idx) {
    drop_frames = drop_frames || RE_MARKER.test(frame.method);
    frame.drop = idx < drop || drop_frames;
  });
  return frames;
};

var format_frames = function format_frames(frames, _short, full_stack) {
  frames = frames.filter(function (frame) {
    return full_stack || !frame.drop;
  });
  return frames.map(function (frame) {
    var str = frame.drop ? '      ' : '  ->  ';
    str += [_short ? frame.basename : frame.url, frame.line, frame.column].filter(function (x) {
      return x;
    }).join('  ');

    if (frame.method) {
      str += "  (".concat(frame.method, ")");
    }

    return str;
  }).join('\n');
};

var format_err = function format_err(err) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _short2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var full_stack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var frames = parse_frames(err.stack, err.drop);
  var str = "".concat(err.name, ": ").concat(err.message, "\n") + format_frames(frames, _short2, full_stack);
  return prefix + str.replace(/\n/g, '\n' + prefix);
};

module.exports = format_err;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PROC = global.process;
var WIN = global.window;
var HELP = "scar - a test runner for node and the browser\n\nUsage:\n  node tests.js [opt...] [arg...]\n  tests.html?opt&...&arg&...\n\nOptions:\n  -h: show this help message\n\nArguments:\n  all arguments are used as test filters\n";
var log = console.log.bind(console);

var create_filter_fn = function create_filter_fn(strs) {
  return function (test) {
    return strs.every(function (s) {
      return test.desc.includes(s);
    });
  };
};

var parse_args = function parse_args() {
  var args = [];

  if (PROC) {
    args = PROC.argv.slice(2);
  } else if (WIN) {
    args = WIN.location.href.split(/[\?&]+/).slice(1);
  }

  return {
    show_help: args.includes('-h'),
    filters: args.filter(function (arg) {
      return arg.length && arg[0] !== '-';
    })
  };
};

var cli = function cli(run, options) {
  return Promise.resolve().then(function () {
    return !WIN ? null : new Promise(function (resolve) {
      WIN.addEventListener('load', function () {
        return resolve();
      });
    });
  }).then(function () {
    var cli_opts = parse_args();

    if (cli_opts.show_help) {
      log(HELP);
      return null;
    }

    options = _objectSpread(_objectSpread({}, options), {}, {
      filter: create_filter_fn(cli_opts.filters)
    });
    return run(options).then(function (suite) {
      if (PROC && suite.failed_count) {
        PROC.exit(1);
      }
    })["catch"](function (err) {
      log("\n".concat(err.stack, "\n"));

      if (PROC) {
        PROC.exit(2);
      }
    });
  });
};

module.exports = cli;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(5),
    is_fn = _require.is_fn,
    is_regexp = _require.is_regexp;

var insp = __webpack_require__(11);

var get_type = function get_type(x) {
  return Reflect.apply(Object.prototype.toString, x, []);
};

var deep_equal = function deep_equal(a, b) {
  if (a === b || Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  var type = _typeof(a);

  if (type !== 'object' && type === _typeof(b)) {
    return a === b;
  }

  type = get_type(a);

  if (type !== get_type(b)) {
    return false;
  }

  if (type === '[object Array]') {
    return a.length === b.length && a.every(function (_, idx) {
      return deep_equal(a[idx], b[idx]);
    });
  }

  if (type === '[object Object]') {
    var keys = Object.keys(a);
    return deep_equal(keys.sort(), Object.keys(b).sort()) && keys.every(function (key) {
      return deep_equal(a[key], b[key]);
    });
  }

  return false;
};

var asrt = function asrt(expr, msg) {
  var drop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  if (!expr) {
    throw Object.assign(new Error(msg), {
      name: 'AssertionError',
      drop: drop
    });
  }
};

var asrt_err = function asrt_err(err, exp, msg) {
  if (is_regexp(exp)) {
    err = String(err);
    asrt(exp.test(err), msg || "expected error ".concat(insp(err), " to be matched by ").concat(insp(exp)), 3);
  } else if (is_fn(exp)) {
    exp(err);
  } else if (exp !== undefined) {
    asrt(err === exp, msg || "expected error ".concat(insp(err), " to be ").concat(insp(exp)), 3);
  }
};

var assert = function assert(expr, msg) {
  asrt(expr, msg);
};

assert.fail = function (msg) {
  asrt(false, msg);
};

assert.ok = function (act, msg) {
  asrt(!!act, msg || "expected ".concat(insp(act), " to be truthy"));
};

assert.not_ok = function (act, msg) {
  asrt(!act, msg || "expected ".concat(insp(act), " to be falsy"));
};

assert.equal = function (act, exp, msg) {
  asrt(act === exp, msg || "expected ".concat(insp(act), " to equal ").concat(insp(exp)));
};

assert.not_equal = function (act, ref, msg) {
  asrt(act !== ref, msg || "expected ".concat(insp(act), " not to equal ").concat(insp(ref)));
};

assert.deep_equal = function (act, exp, msg) {
  asrt(deep_equal(act, exp), msg || "expected ".concat(insp(act), " to deeply equal ").concat(insp(exp)));
};

assert.not_deep_equal = function (act, ref, msg) {
  asrt(!deep_equal(act, ref), msg || "expected ".concat(insp(act), " not to deeply equal ").concat(insp(ref)));
};

assert["throws"] = function (fn, exp, msg) {
  asrt(is_fn(fn), "expected ".concat(insp(fn), " to be a function"));
  var none = {};
  var val = none;

  try {
    val = fn();
  } catch (err) {
    asrt_err(err, exp, msg);
  }

  asrt(val === none, msg || "expected fn to throw but returned ".concat(val));
};

assert.rejects = function (promise, exp, msg) {
  return Promise.resolve(promise).then(function (val) {
    return asrt(false, msg || "expected rejection but resolved to ".concat(val));
  }, function (err) {
    return asrt_err(err, exp, msg);
  });
};

module.exports = assert; // deprecated

assert.notOk = assert.not_ok;
assert.notEqual = assert.not_equal;
assert.deepEqual = assert.deep_equal;
assert.notDeepEqual = assert.not_deep_equal;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(5),
    is_str = _require.is_str,
    is_fn = _require.is_fn,
    is_arr = _require.is_arr,
    is_plain_obj = _require.is_plain_obj;

var insp = function insp(x) {
  var visited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (visited.includes(x)) {
    return '[circular]';
  }

  visited.push(x);

  if (is_str(x)) {
    return "'".concat(x, "'");
  }

  if (is_fn(x)) {
    return String(x).split(')')[0] + ')';
  }

  if (is_arr(x)) {
    return '[' + Array.from(x, function (el) {
      return insp(el, visited);
    }).join(', ') + ']';
  }

  if (is_plain_obj(x)) {
    return '{' + Object.keys(x).map(function (key) {
      return "".concat(key, ": ").concat(insp(x[key], visited));
    }).join(', ') + '}';
  }

  return String(x);
};

module.exports = insp;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(5),
    as_fn = _require.as_fn;

var spy = function spy(fn) {
  var calls = [];

  function wrapper() {
    'use strict'; // eslint-disable-line strict

    var call = {
      idx: calls.length,
      time: Date.now(),
      ctx: this,
      // eslint-disable-line no-invalid-this
      args: Array.from(arguments)
    };
    calls.push(call);
    call.ret = as_fn(fn)(call, calls);
    call.done = Date.now();
    return call.ret;
  }

  wrapper.calls = calls;
  return wrapper;
};

module.exports = spy;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var PREFIX = 'UNIQ-';
var SUFFIX = '-ID';
var LENGTH = 4;
var ZEROPAD = '0000';
var RE_ID = new RegExp("^".concat(PREFIX, "\\d{").concat(LENGTH, "}").concat(SUFFIX, "$"));
var counter = 0;

var id = function id() {
  counter += 1;
  return PREFIX + (ZEROPAD + counter).substr(-LENGTH) + SUFFIX;
};

var is_id = function is_id(sequence) {
  return RE_ID.test(sequence);
};

var obj = function obj() {
  return {
    _uniq_id: id()
  };
};

var path = function path() {
  var ext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return '_uniq_path/' + id() + ext;
};

module.exports = {
  id: id,
  is_id: is_id,
  isId: is_id,
  // deprecated
  obj: obj,
  path: path
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var win = global.window;
var doc = win.document;
var pinned = {};

var attr = function attr(el, name, value) {
  if (typeof el === 'string') {
    el = doc.querySelector(el);
  }

  if (value === undefined) {
    return el.getAttribute(name);
  }

  if (value === null) {
    return el.removeAttribute(name);
  }

  return el.setAttribute(name, value);
};

var root_children = function root_children() {
  return [].concat(_toConsumableArray(doc.querySelector('head').childNodes), _toConsumableArray(doc.querySelector('body').childNodes));
};

var pin_html = function pin_html() {
  pinned.title = doc.title;
  pinned.htmlId = attr('html', 'id');
  pinned.htmlClasses = attr('html', 'class');
  pinned.bodyId = attr('body', 'id');
  pinned.bodyClasses = attr('body', 'class');
  pinned.els = root_children(); // console.log('pinned', pinned);
};

var restore_html = function restore_html() {
  doc.title = pinned.title;
  attr('html', 'id', pinned.htmlId);
  attr('html', 'class', pinned.htmlClasses);
  attr('body', 'id', pinned.bodyId);
  attr('body', 'class', pinned.bodyClasses);
  root_children().forEach(function (el) {
    if (pinned.els.indexOf(el) < 0) {
      el.remove();
    }
  }); // win.localStorage.clear();
};

module.exports = {
  pin_html: pin_html,
  restore_html: restore_html
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(3),
    test = _require.test,
    assert = _require.assert;

test('window is global object', function () {
  assert.ok(global.window);
  assert.equal(global.window, global.window.window);
  assert.ok(global.window.document);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(3),
    test = _require.test,
    assert = _require.assert;

var reqlib = __webpack_require__(17);

var event = reqlib('core/event');
test('core.event', function () {
  assert.equal(_typeof(event), 'object', 'is object');
  assert.deepEqual(Object.keys(event).sort(), ['sub', 'pub'].sort());
  assert.equal(_typeof(event.sub), 'function');
  assert.equal(_typeof(event.pub), 'function');
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var reqlib = function reqlib(x) {
  return __webpack_require__(18)("./".concat(x));
};

module.exports = reqlib;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./config": 19,
	"./config.js": 19,
	"./core/event": 26,
	"./core/event.js": 26,
	"./core/format": 27,
	"./core/format.js": 27,
	"./core/langs": 28,
	"./core/langs.js": 28,
	"./core/location": 29,
	"./core/location.js": 29,
	"./core/resource": 46,
	"./core/resource.js": 46,
	"./core/settings": 30,
	"./core/settings.js": 30,
	"./core/store": 47,
	"./core/store.js": 47,
	"./core/types": 45,
	"./core/types.js": 45,
	"./ext/autorefresh": 48,
	"./ext/autorefresh.js": 48,
	"./ext/contextmenu": 49,
	"./ext/contextmenu.js": 49,
	"./ext/crumb": 50,
	"./ext/crumb.js": 50,
	"./ext/custom": 51,
	"./ext/custom.js": 51,
	"./ext/download": 53,
	"./ext/download.js": 53,
	"./ext/filter": 54,
	"./ext/filter.js": 54,
	"./ext/google-analytics": 56,
	"./ext/google-analytics.js": 56,
	"./ext/info": 57,
	"./ext/info.js": 57,
	"./ext/l10n": 60,
	"./ext/l10n.js": 60,
	"./ext/piwik-analytics": 61,
	"./ext/piwik-analytics.js": 61,
	"./ext/preview": 62,
	"./ext/preview/": 62,
	"./ext/preview/index": 62,
	"./ext/preview/index.js": 62,
	"./ext/preview/preview": 63,
	"./ext/preview/preview-aud": 64,
	"./ext/preview/preview-aud.js": 64,
	"./ext/preview/preview-img": 65,
	"./ext/preview/preview-img.js": 65,
	"./ext/preview/preview-txt": 66,
	"./ext/preview/preview-txt.js": 66,
	"./ext/preview/preview-vid": 68,
	"./ext/preview/preview-vid.js": 68,
	"./ext/preview/preview.js": 63,
	"./ext/search": 69,
	"./ext/search.js": 69,
	"./ext/select": 70,
	"./ext/select.js": 70,
	"./ext/sort": 71,
	"./ext/sort.js": 71,
	"./ext/thumbnails": 72,
	"./ext/thumbnails.js": 72,
	"./ext/title": 73,
	"./ext/title.js": 73,
	"./ext/tree": 74,
	"./ext/tree.js": 74,
	"./init": 75,
	"./init.js": 75,
	"./main": 77,
	"./main/": 77,
	"./main/index": 77,
	"./main/index.js": 77,
	"./main/info": 80,
	"./main/info.js": 80,
	"./model/item": 33,
	"./model/item.js": 33,
	"./server": 20,
	"./server.js": 20,
	"./util": 21,
	"./util/": 21,
	"./util/dom": 23,
	"./util/dom.js": 23,
	"./util/index": 21,
	"./util/index.js": 21,
	"./util/lo": 22,
	"./util/lo.js": 22,
	"./util/misc": 25,
	"./util/misc.js": 25,
	"./util/natural_cmp": 24,
	"./util/natural_cmp.js": 24,
	"./view/base": 32,
	"./view/base.js": 32,
	"./view/notification": 31,
	"./view/notification.js": 31,
	"./view/sidebar": 79,
	"./view/sidebar.js": 79,
	"./view/view": 55,
	"./view/view.js": 55,
	"./view/viewmode": 78,
	"./view/viewmode.js": 78
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(20),
    request = _require.request;
/* eslint-disable quote-props */


var config = module.exports = {
  _update: function _update(query) {
    return request(query).then(function (resp) {
      return Object.assign(config, resp);
    });
  },
  repo: {
    owner: 'hzyitc',
    repo: 'h5ai-gh-pages',
    branch: 'gh-pages'
  },
  'langs': {
    'af': 'afrikaans',
    'bg': 'български',
    'cs': 'čeština',
    'da': 'dansk',
    'de': 'deutsch',
    'el': 'ελληνικά',
    'en': 'english',
    'es': 'español',
    'et': 'estonian',
    'fi': 'finnish',
    'fr': 'français',
    'he': 'עברית',
    'hi': 'हिंदी',
    'hr': 'hrvatski',
    'hu': 'magyar',
    'id': 'Bahasa Indonesia',
    'it': 'italiano',
    'ja': '日本語',
    'ko': '한국어',
    'lv': 'latviešu',
    'nb': 'norwegian',
    'nl': 'nederlands',
    'pl': 'polski',
    'pt-br': 'português do Brasil',
    'pt-pt': 'português de Portugal',
    'ro': 'română',
    'ru': 'русский',
    'sk': 'slovenčina',
    'sl': 'slovenščina',
    'sr': 'srpski',
    'sv': 'svenska',
    'tr': 'türkçe',
    'uk': 'українська',
    'zh-cn': '简体中文',
    'zh-tw': '正體中文'
  },
  'options': {
    'resources': {
      'scripts': [],
      'styles': ['//fonts.googleapis.com/css?family=Ubuntu:300,400,700%7CUbuntu+Mono:400,700']
    },
    'view': {
      'binaryPrefix': false,
      'disableSidebar': false,
      'fallbackMode': false,
      'fastBrowsing': true,
      'fonts': ['Ubuntu', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'fontsMono': ['Ubuntu Mono', 'Monaco', 'Lucida Sans Typewriter', 'monospace'],
      'hidden': ['^\\.', '^_h5ai'],
      'hideFolders': false,
      'hideIf403': true,
      'hideParentFolder': false,
      'maxIconSize': 40,
      'modes': ['details', 'grid', 'icons'],
      'modeToggle': false,
      'setParentFolderLabels': true,
      'sizes': [20, 40, 60, 80, 100, 140, 180, 220, 260, 300],
      'theme': 'comity',
      'unmanaged': ['index.html', 'index.htm', 'index.php'],
      'unmanagedInNewWindow': false
    },
    'autorefresh': {
      'enabled': false,
      'interval': 5000
    },
    'crumb': {
      'enabled': true
    },
    'custom': {
      'enabled': true,
      'stopSearchingAtRoot': true
    },
    'download': {
      'enabled': true,
      'type': 'php-tar',
      'packageName': null,
      'alwaysVisible': false
    },
    'filter': {
      'enabled': false,
      'advanced': true,
      'debounceTime': 100,
      'ignorecase': true
    },
    'foldersize': {
      'enabled': true,
      'type': 'shell-du'
    },
    'google-analytics-ua': {
      'enabled': false,
      'id': 'UA-000000-0'
    },
    'info': {
      'enabled': true,
      'show': false,
      'qrcode': true,
      'qrFill': '#999',
      'qrBack': '#fff'
    },
    'l10n': {
      'enabled': true,
      'lang': 'en',
      'useBrowserLang': true
    },
    'piwik-analytics': {
      'enabled': false,
      'baseURL': 'some/url',
      'idSite': 1
    },
    'preview-aud': {
      'enabled': true,
      'autoplay': true,
      'types': ['aud']
    },
    'preview-img': {
      'enabled': true,
      'size': false,
      'types': ['img', 'img-bmp', 'img-gif', 'img-ico', 'img-jpg', 'img-png', 'img-raw', 'img-svg']
    },
    'preview-txt': {
      'enabled': true,
      'styles': {
        'txt': 1,
        'txt-authors': 1,
        'txt-c': 3,
        'txt-cpp': 3,
        'txt-css': 3,
        'txt-diff': 1,
        'txt-go': 3,
        'txt-h': 3,
        'txt-hpp': 3,
        'txt-install': 1,
        'txt-js': 3,
        'txt-json': 3,
        'txt-less': 3,
        'txt-license': 1,
        'txt-log': 1,
        'txt-makefile': 1,
        'txt-md': 2,
        'txt-py': 3,
        'txt-rb': 3,
        'txt-readme': 1,
        'txt-rtf': 1,
        'txt-rust': 3,
        'txt-script': 3,
        'txt-xml': 1
      }
    },
    'preview-vid': {
      'enabled': true,
      'autoplay': true,
      'types': ['vid-avi', 'vid-flv', 'vid-mkv', 'vid-mov', 'vid-mp4', 'vid-mpg', 'vid-webm']
    },
    'search': {
      'enabled': true,
      'advanced': true,
      'debounceTime': 300,
      'ignorecase': true
    },
    'select': {
      'enabled': true,
      'clickndrag': true,
      'checkboxes': true
    },
    'sort': {
      'enabled': true,
      'column': 0,
      'reverse': false,
      'ignorecase': true,
      'natural': true,
      'folders': 0
    },
    'thumbnails': {
      'enabled': true,
      'img': ['img-bmp', 'img-gif', 'img-ico', 'img-jpg', 'img-png'],
      'mov': ['vid-avi', 'vid-flv', 'vid-mkv', 'vid-mov', 'vid-mp4', 'vid-mpg', 'vid-webm'],
      'doc': ['x-pdf', 'x-ps'],
      'delay': 1,
      'size': 240,
      'exif': false,
      'chunksize': 20
    },
    'title': {
      'enabled': true
    },
    'tree': {
      'enabled': true,
      'show': true,
      'maxSubfolders': 50,
      'naturalSort': true,
      'ignorecase': true
    },
    'hasCustomPasshash': true
  },
  'types': {
    'ar': ['*.tar.bz2', '*.crx'],
    'ar-apk': ['*.apk'],
    'ar-deb': ['*.deb'],
    'ar-gz': ['*.gz', '*.tar.gz', '*.tgz'],
    'ar-rar': ['*.rar'],
    'ar-rpm': ['*.rpm'],
    'ar-tar': ['*.tar'],
    'ar-zip': ['*.7z', '*.bz2', '*.jar', '*.lzma', '*.war', '*.z', '*.Z', '*.zip'],
    'aud': ['*.aif', '*.aiff', '*.flac', '*.m4a', '*.mid', '*.mp3', '*.mpa', '*.ra', '*.ogg', '*.wav', '*.wma'],
    'aud-pls': ['*.m3u', '*.m3u8', '*.pls'],
    'bin': ['*.class', '*.o', '*.so'],
    'bin-exe': ['*.bat', '*.cmd', '*.exe'],
    'img': ['*.xpm'],
    'img-bmp': ['*.bmp'],
    'img-gif': ['*.gif'],
    'img-ico': ['*.ico'],
    'img-jpg': ['*.jpg', '*.jpeg'],
    'img-png': ['*.png'],
    'img-raw': ['*.cr2', '*.nef'],
    'img-svg': ['*.svg'],
    'img-tiff': ['*.tiff'],
    'txt': ['*.text', '*.txt'],
    'txt-build': ['*.pom', 'build.xml', 'pom.xml'],
    'txt-c': ['*.c'],
    'txt-cpp': ['*.cpp'],
    'txt-css': ['*.css'],
    'txt-diff': ['*.diff', '*.patch'],
    'txt-go': ['*.go'],
    'txt-h': ['*.h'],
    'txt-html': ['*.htm', '*.html', '*.shtml', '*.xhtml'],
    'txt-hpp': ['*.hpp'],
    'txt-java': ['*.java'],
    'txt-scala': ['*.scala'],
    'txt-js': ['*.js'],
    'txt-json': ['*.json'],
    'txt-less': ['*.less'],
    'txt-log': ['*.log', 'changelog*'],
    'txt-md': ['*.markdown', '*.md'],
    'txt-php': ['*.php'],
    'txt-py': ['*.py'],
    'txt-rb': ['*.rb'],
    'txt-rss': ['*.rss'],
    'txt-rtf': ['*.rtf'],
    'txt-rust': ['*.rs', '*.rlib'],
    'txt-script': ['*.conf', '*.bsh', '*.csh', '*.ini', '*.ksh', '*.sh', '*.shar', '*.tcl', '*.zsh'],
    'txt-source': [],
    'txt-tex': ['*.tex'],
    'txt-vcal': ['*.vcal'],
    'txt-xml': ['*.xml'],
    'vid': [],
    'vid-avi': ['*.avi'],
    'vid-flv': ['*.flv'],
    'vid-mkv': ['*.mkv'],
    'vid-mov': ['*.mov'],
    'vid-mp4': ['*.mp4', '*.m4v'],
    'vid-mpg': ['*.mpg'],
    'vid-rm': ['*.rm'],
    'vid-swf': ['*.swf'],
    'vid-ts': ['*.ts'],
    'vid-vob': ['*.vob'],
    'vid-webm': ['*.webm'],
    'vid-wmv': ['*.wmv'],
    'x': [],
    'x-bak': ['*.bak', '*~'],
    'x-calc': ['*.ods', '*.ots', '*.xlr', '*.xls', '*.xlsx'],
    'x-disc': ['*.cue', '*.iso'],
    'x-doc': ['*.doc', '*.docx', '*.odm', '*.odt', '*.ott'],
    'x-draw': ['*.drw'],
    'x-eps': ['*.eps'],
    'x-pdf': ['*.pdf'],
    'x-pres': ['*.odp', '*.otp', '*.pps', '*.ppt', '*.pptx'],
    'x-ps': ['*.ps'],
    'x-psd': ['*.psd']
  },
  'setup': {
    'AS_ADMIN': null,
    'PUBLIC_HREF': '/h5ai-gh-pages/_h5ai/public/',
    'ROOT_HREF': '/h5ai-gh-pages/'
  },
  'theme': {
    'ar-apk': 'comity/ar-apk.svg',
    'ar-deb': 'comity/ar-deb.svg',
    'ar-rpm': 'comity/ar-rpm.svg',
    'txt-css': 'comity/txt-css.svg',
    'txt-go': 'comity/txt-go.svg',
    'txt-html': 'comity/txt-html.svg',
    'txt-js': 'comity/txt-js.svg',
    'txt-less': 'comity/txt-less.svg',
    'txt-md': 'comity/txt-md.svg',
    'txt-php': 'comity/txt-php.svg',
    'txt-py': 'comity/txt-py.svg',
    'txt-rb': 'comity/txt-rb.svg',
    'txt-rust': 'comity/txt-rust.svg',
    'txt-script': 'comity/txt-script.svg',
    'x-pdf': 'comity/x-pdf.svg'
  }
};
/* eslint-enable */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var XHR = global.window.XMLHttpRequest;

var request = function request(data) {
  return new Promise(function (resolve) {
    var xhr = new XHR();

    var on_ready_state_change = function on_ready_state_change() {
      if (xhr.readyState === XHR.DONE) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (err) {
          resolve({
            err: err,
            txt: xhr.responseText
          });
        }
      }
    };

    xhr.open('POST', '?', true);
    xhr.onreadystatechange = on_ready_state_change;
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.send(JSON.stringify(data));
  });
};

var formRequest = function formRequest(data) {
  var $form = dom('<form method="post" action="?" style="display:none;"/>');
  each(data, function (val, key) {
    dom('<input type="hidden"/>').attr('name', key).attr('value', val).appTo($form);
  });
  $form.appTo('body');
  $form[0].submit();
  $form.rm();
};

module.exports = {
  request: request,
  formRequest: formRequest
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Object.assign({}, __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var is = function is(x) {
  return x !== undefined && x !== null;
};

var tof = function tof(x, str) {
  return _typeof(x) === str;
};

var isStr = function isStr(x) {
  return tof(x, 'string');
};

var isFn = function isFn(x) {
  return tof(x, 'function');
};

var isNum = function isNum(x) {
  return tof(x, 'number');
};

var hasLength = function hasLength(x) {
  return x && x.hasOwnProperty('length');
};

var keys = function keys(obj) {
  if (!obj || isStr(obj)) {
    return [];
  }

  if (hasLength(obj)) {
    obj = Array.from(obj);
  }

  return Object.keys(obj);
};

var values = function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
};

var each = function each(obj, fn) {
  return keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
};

var filter = function filter(obj, fn) {
  return values(obj).filter(fn);
};

var map = function map(obj, fn) {
  return values(obj).map(fn);
};

var includes = function includes(obj, x) {
  return values(obj).indexOf(x) >= 0;
};

var compact = function compact(obj) {
  return filter(obj, function (x) {
    return !!x;
  });
};

var isInstanceOf = function isInstanceOf(x, constructor) {
  return x ? x instanceof constructor : false;
};

var toArray = function toArray(x) {
  return Array.from(x);
};

var difference = function difference(obj1, obj2) {
  obj2 = values(obj2);
  return filter(obj1, function (x) {
    return obj2.indexOf(x) < 0;
  });
};

var intersection = function intersection(obj1, obj2) {
  obj2 = values(obj2);
  return filter(obj1, function (x) {
    return obj2.indexOf(x) >= 0;
  });
};

var cmp = function cmp(x, y) {
  return x < y ? -1 : x > y ? 1 : 0;
};

var sortBy = function sortBy(obj, sel) {
  var selFn = isFn(sel) ? sel : function (x) {
    return x[sel];
  };

  var cmpFn = function cmpFn(x, y) {
    return cmp(selFn(x), selFn(y));
  };

  return values(obj).sort(cmpFn);
};

var debounce = function debounce(fn, delay) {
  var id = null;
  return function () {
    clearTimeout(id);
    id = setTimeout(fn, delay);
  };
};

module.exports = {
  is: is,
  isStr: isStr,
  isFn: isFn,
  isNum: isNum,
  hasLength: hasLength,
  keys: keys,
  values: values,
  each: each,
  filter: filter,
  map: map,
  includes: includes,
  compact: compact,
  isInstanceOf: isInstanceOf,
  toArray: toArray,
  difference: difference,
  intersection: intersection,
  cmp: cmp,
  sortBy: sortBy,
  debounce: debounce
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(22),
    _each = _require.each,
    filter = _require.filter,
    hasLength = _require.hasLength,
    is = _require.is,
    isStr = _require.isStr,
    _map = _require.map,
    isInstanceOf = _require.isInstanceOf,
    toArray = _require.toArray;

var win = global.window;
var doc = win.document;

var parse_html = function () {
  var create = function create(name) {
    return doc.createElement(name);
  };

  var rules = [[/^<t(head|body|foot)|^<c(ap|olg)/i, create('table')], [/^<col/i, create('colgroup')], [/^<tr/i, create('tbody')], [/^<t[dh]/i, create('tr')]];
  var div = create('div');

  var findContainer = function findContainer(str) {
    var _iterator = _createForOfIteratorHelper(rules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            re = _step$value[0],
            el = _step$value[1];

        if (re.test(str)) {
          return el;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return div;
  };

  return function (str) {
    var container = findContainer(str);
    container.innerHTML = str;
    var res = toArray(container.childNodes);

    _each(res, function (el) {
      return container.removeChild(el);
    });

    container.innerHTML = '';
    return res;
  };
}();

var query_all = function query_all(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;

  try {
    return toArray(context.querySelectorAll(selector));
  } catch (err) {
    return [];
  }
};

var is_el = function is_el(x) {
  return isInstanceOf(x, win.Element);
};

var is_doc = function is_doc(x) {
  return isInstanceOf(x, win.Document);
};

var is_win = function is_win(x) {
  return is(x) && x.window === x && is_doc(x.document);
};

var is_el_doc_win = function is_el_doc_win(x) {
  return is_el(x) || is_doc(x) || is_win(x);
};

var add_listener = function add_listener(el, type, fn) {
  return el.addEventListener(type, fn);
};

var remove_listener = function remove_listener(el, type, fn) {
  return el.removeEventListener(type, fn);
};

var ready_promise = new Promise(function (resolve) {
  if (/^(i|c|loade)/.test(doc.readyState)) {
    resolve();
  } else {
    add_listener(doc, 'DOMContentLoaded', function () {
      return resolve();
    });
  }
});

var await_ready = function await_ready() {
  return ready_promise;
};

var load_promise = new Promise(function (resolve) {
  add_listener(win, 'load', function () {
    return resolve();
  });
});

var await_load = function await_load() {
  return load_promise;
};

var dom = function dom(arg) {
  if (isInstanceOf(arg, dom)) {
    return arg;
  }

  var els;

  if (isStr(arg)) {
    arg = arg.trim();
    els = arg[0] === '<' ? parse_html(arg) : query_all(arg);
  } else if (is_el_doc_win(arg)) {
    els = [arg];
  } else {
    els = hasLength(arg) ? arg : [arg];
  }

  els = filter(els, is_el_doc_win);
  return Object.assign(Object.create(dom.prototype), els, {
    length: els.length
  });
};

dom.prototype = {
  constructor: dom,
  each: function each(fn) {
    _each(this, fn);

    return this;
  },
  map: function map(fn) {
    return _map(this, fn);
  },
  find: function find(selector) {
    var _ref;

    return dom((_ref = []).concat.apply(_ref, _toConsumableArray(this.map(function (el) {
      return query_all(selector, el);
    }))));
  },
  on: function on(type, fn) {
    return this.each(function (el) {
      return add_listener(el, type, fn);
    });
  },
  off: function off(type, fn) {
    return this.each(function (el) {
      return remove_listener(el, type, fn);
    });
  },
  attr: function attr(key, value) {
    if (value === undefined) {
      return this.length ? this[0].getAttribute(key) : undefined;
    }

    return this.each(function (el) {
      return el.setAttribute(key, value);
    });
  },
  rmAttr: function rmAttr(key) {
    return this.each(function (el) {
      return el.removeAttribute(key);
    });
  },
  prop: function prop(key, value) {
    if (value === undefined) {
      return this.length ? this[0][key] : undefined;
    }

    return this.each(function (el) {
      el[key] = value;
    });
  },
  rmProp: function rmProp(key) {
    return this.each(function (el) {
      return delete el[key];
    });
  },
  val: function val(value) {
    if (value === undefined) {
      return this.length ? this[0].value : undefined;
    }

    return this.each(function (el) {
      el.value = value;
    });
  },
  html: function html(str) {
    if (str === undefined) {
      return this.map(function (el) {
        return el.innerHTML;
      }).join('');
    }

    return this.each(function (el) {
      el.innerHTML = str;
    });
  },
  text: function text(str) {
    if (str === undefined) {
      return this.map(function (el) {
        return el.textContent;
      }).join('');
    }

    return this.each(function (el) {
      el.textContent = str;
    });
  },
  clr: function clr() {
    return this.html('');
  },
  rm: function rm() {
    return this.each(function (el) {
      var parent = el.parentNode;

      if (parent) {
        parent.removeChild(el);
      }
    });
  },
  rpl: function rpl(arg) {
    return this.each(function (el) {
      var parent = el.parentNode;

      if (parent) {
        parent.replaceChild(dom(arg)[0], el);
      }
    });
  },
  app: function app(arg) {
    return this.each(function (el) {
      dom(arg).each(function (child) {
        return el.appendChild(child);
      });
    });
  },
  appTo: function appTo(arg) {
    dom(arg).app(this);
    return this;
  },
  pre: function pre(arg) {
    return this.each(function (el) {
      dom(arg).each(function (child) {
        var firstChild = el.firstChild;

        if (!firstChild) {
          el.appendChild(child);
        } else {
          el.insertBefore(child, firstChild);
        }
      });
    });
  },
  preTo: function preTo(arg) {
    dom(arg).pre(this);
    return this;
  },
  cls: function cls() {
    if (!arguments.length) {
      return this.length ? toArray(this[0].classList) : [];
    }

    this.each(function (el) {
      el.className = '';
    });
    return this.addCls.apply(this, arguments);
  },
  hasCls: function hasCls(name) {
    return toArray(this).every(function (el) {
      return el.classList.contains(name);
    });
  },
  addCls: function addCls() {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }

    return this.each(function (el) {
      var _iterator2 = _createForOfIteratorHelper(names),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          el.classList.add(name);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  },
  rmCls: function rmCls() {
    for (var _len2 = arguments.length, names = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      names[_key2] = arguments[_key2];
    }

    return this.each(function (el) {
      var _iterator3 = _createForOfIteratorHelper(names),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var name = _step3.value;
          el.classList.remove(name);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });
  },
  tglCls: function tglCls() {
    for (var _len3 = arguments.length, names = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      names[_key3] = arguments[_key3];
    }

    return this.each(function (el) {
      var _iterator4 = _createForOfIteratorHelper(names),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var name = _step4.value;

          if (el.classList.contains(name)) {
            el.classList.remove(name);
          } else {
            el.classList.add(name);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    });
  },
  parent: function parent() {
    return dom(this.map(function (el) {
      return el.parentNode;
    }));
  },
  children: function children() {
    var _ref2;

    return dom((_ref2 = []).concat.apply(_ref2, _toConsumableArray(this.map(function (el) {
      return toArray(el.children);
    }))));
  },
  hide: function hide() {
    return this.addCls('hidden');
  },
  show: function show() {
    return this.rmCls('hidden');
  },
  isHidden: function isHidden() {
    return this.hasCls('hidden');
  },
  css: function css(styles) {
    return this.each(function (el) {
      return Object.assign(el.style, styles);
    });
  }
};
module.exports = {
  awaitReady: await_ready,
  awaitLoad: await_load,
  dom: dom
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
// Author: Jim Palmer (based on chunking idea from Dave Koelle)
// Modified to make it work with h5ai
var RE_TOKEN = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi;
var RE_DATE = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;
var RE_HEX = /^0x[0-9a-f]+$/i;
var RE_LEADING_ZERO = /^0/;
/* eslint-disable complexity */

var natural_cmp = function natural_cmp(a, b) {
  // convert all to strings strip whitespace
  var x = String(a).trim();
  var y = String(b).trim(); // chunk/tokenize

  var x_toks = x.replace(RE_TOKEN, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
  var y_toks = y.replace(RE_TOKEN, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'); // first try and sort Hex codes or Dates

  var x_date = parseInt(x.match(RE_HEX), 16) || x_toks.length !== 1 && x.match(RE_DATE) && Date.parse(x);
  var y_date = parseInt(y.match(RE_HEX), 16) || x_date && y.match(RE_DATE) && Date.parse(y) || null;

  if (y_date) {
    if (x_date < y_date) {
      return -1;
    }

    if (x_date > y_date) {
      return 1;
    }
  } // natural sorting through split numeric strings and default strings


  for (var idx = 0, len = Math.max(x_toks.length, y_toks.length); idx < len; idx += 1) {
    // find floats not starting with '0', string or 0 if not defined (Clint Priest)
    var x_tok = !(x_toks[idx] || '').match(RE_LEADING_ZERO) && parseFloat(x_toks[idx]) || x_toks[idx] || 0;
    var y_tok = !(y_toks[idx] || '').match(RE_LEADING_ZERO) && parseFloat(y_toks[idx]) || y_toks[idx] || 0; // handle numeric vs string comparison - number < string - (Kyle Adams)

    if (isNaN(x_tok) !== isNaN(y_tok)) {
      return isNaN(x_tok) ? 1 : -1;
    } // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'


    if (_typeof(x_tok) !== _typeof(y_tok)) {
      x_tok = String(x_tok);
      y_tok = String(y_tok);
    }

    if (x_tok < y_tok) {
      return -1;
    }

    if (x_tok > y_tok) {
      return 1;
    }
  }

  return 0;
};
/* eslint-enable */


module.exports = {
  naturalCmp: natural_cmp
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var esc_pattern = function esc_pattern(sequence) {
  return sequence.replace(/[\-\[\]{}()*+?.,\\$\^|#\s]/g, '\\$&');
};

var parse_pattern = function parse_pattern(sequence, advanced) {
  if (!advanced) {
    return esc_pattern(sequence);
  }

  if (sequence.substr(0, 3) === 're:') {
    return sequence.substr(3);
  }

  return sequence.trim().split(/\s+/).map(function (part) {
    return part.split('').map(function (_char) {
      return esc_pattern(_char);
    }).join('.*?');
  }).join('|');
};

module.exports = {
  parsePattern: parse_pattern
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    isStr = _require.isStr,
    isFn = _require.isFn,
    dom = _require.dom;

var subscriptions = {};

var sub = function sub(topic, listener) {
  if (isStr(topic) && isFn(listener)) {
    if (!subscriptions[topic]) {
      subscriptions[topic] = [];
    }

    subscriptions[topic].push(listener);
  }
};

var pub = function pub(topic) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // console.log(topic, args);
  if (isStr(topic) && subscriptions[topic]) {
    subscriptions[topic].forEach(function (listener) {
      listener.apply(topic, args);
    });
  }
};

dom(global.window).on('resize', function () {
  return pub('resize');
});
module.exports = {
  sub: sub,
  pub: pub
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    isNum = _require.isNum;

var decimalMetric = {
  t: 1000.0,
  k: 1000.0,
  u: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
};
var binaryMetric = {
  t: 1024.0,
  k: 1024.0,
  u: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
};
var defaultMetric = decimalMetric;
var datePatterns = [[/YYYY/, 'Y', 4], [/YY/, 'Y', 2], [/Y/, 'Y', 0], [/MM/, 'M', 2], [/M/, 'M', 0], [/DD/, 'D', 2], [/D/, 'D', 0], [/HH/, 'H', 2], [/H/, 'H', 0], [/mm/, 'm', 2], [/m/, 'm', 0], [/ss/, 's', 2], [/s/, 's', 0]];
var defaultDateFormat = 'YYYY-MM-DD HH:mm';

var setDefaultMetric = function setDefaultMetric(useBinaryMetric) {
  defaultMetric = useBinaryMetric ? binaryMetric : decimalMetric;
};

var formatSize = function formatSize(size, metric) {
  metric = metric || defaultMetric;

  if (!isNum(size) || size < 0) {
    return '';
  }

  var i = 0;
  var maxI = metric.u.length - 1;

  while (size >= metric.t && i < maxI) {
    size /= metric.k;
    i += 1;
  }

  return (i <= 1 ? Math.round(size) : size.toFixed(1)).toString() + ' ' + metric.u[i];
};

var setDefaultDateFormat = function setDefaultDateFormat(dateFormat) {
  defaultDateFormat = dateFormat;
};

var formatNumber = function formatNumber(number, padding) {
  var str = String(number);

  if (padding) {
    str = ('000' + str).substr(-padding);
  }

  return str;
};

var formatDate = function formatDate(millis, format) {
  if (!millis || !isNum(millis)) {
    return '';
  }

  format = format || defaultDateFormat;
  var date = new Date(millis);
  var d = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  };
  datePatterns.forEach(function (pattern) {
    format = format.replace(pattern[0], formatNumber(d[pattern[1]], pattern[2]));
  });
  return format;
};

module.exports = {
  setDefaultMetric: setDefaultMetric,
  formatSize: formatSize,
  setDefaultDateFormat: setDefaultDateFormat,
  formatDate: formatDate
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(19),
    langs = _require.langs;

module.exports = Object.assign({}, langs);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    values = _require.values,
    difference = _require.difference;

var allsettings = __webpack_require__(30);

var event = __webpack_require__(26);

var notification = __webpack_require__(31);

var win = global.window;
var doc = win.document;
var settings = Object.assign({
  fastBrowsing: true,
  unmanagedInNewWindow: true
}, allsettings.view);
var history = settings.fastBrowsing ? win.history : null;
var reForceEncoding = [[/\/+/g, '/'], [/ /g, '%20'], [/!/g, '%21'], [/#/g, '%23'], [/\$/g, '%24'], [/&/g, '%26'], [/'/g, '%27'], [/\(/g, '%28'], [/\)/g, '%29'], [/\*/g, '%2A'], [/\+/g, '%2B'], [/\,/g, '%2C'], [/:/g, '%3A'], [/;/g, '%3B'], [/\=/g, '%3D'], [/\?/g, '%3F'], [/@/g, '%40'], [/\[/g, '%5B'], [/\]/g, '%5D']];
var absHref = null;

var forceEncoding = function forceEncoding(href) {
  return reForceEncoding.reduce(function (nuHref, data) {
    return nuHref.replace(data[0], data[1]);
  }, href);
};

var uriToPath = function uriToPath(uri) {
  return uri.replace(/^.*:\/\/[^\/]*/, '');
};

var getDir = function getDir(uri) {
  return uri.replace(/[^\/]*$/, '');
};

var hrefsAreDecoded = function () {
  var testpathname = '/a b';
  var a = doc.createElement('a');
  a.href = testpathname;
  return uriToPath(a.href) === testpathname;
}();

var encodedHref = function encodedHref(href) {
  var a = doc.createElement('a');
  var location;
  a.href = href;
  location = uriToPath(a.href);

  if (hrefsAreDecoded) {
    location = encodeURIComponent(location).replace(/%2F/ig, '/');
  }

  return forceEncoding(location);
};

var getDomain = function getDomain() {
  return doc.domain;
};

var getAbsHref = function getAbsHref() {
  return absHref;
};

var getItem = function getItem() {
  return __webpack_require__(33).get(absHref);
};

var load = function load() {
  return getItem().fetchContent();
};

var refresh = function refresh() {
  var item = getItem();
  var oldItems = values(item.content);
  event.pub('location.beforeRefresh');
  load().then(function () {
    var newItems = values(item.content);
    var added = difference(newItems, oldItems);
    var removed = difference(oldItems, newItems);
    event.pub('location.refreshed', item, added, removed);
  });
};

var setLocation = function setLocation(newAbsHref, keepBrowserUrl) {
  event.pub('location.beforeChange');
  newAbsHref = getDir(encodedHref(newAbsHref));

  if (absHref !== newAbsHref) {
    absHref = newAbsHref;

    if (history) {
      if (keepBrowserUrl) {
        history.replaceState({
          absHref: absHref
        }, '', absHref);
      } else {
        history.pushState({
          absHref: absHref
        }, '', absHref);
      }
    }
  }

  var item = getItem();

  if (item.isLoaded) {
    event.pub('location.changed', item);
    refresh();
  } else {
    notification.set('loading...');
    load().then(function () {
      item.isLoaded = true;
      notification.set();
      event.pub('location.changed', item);
    });
  }
};

var setLink = function setLink($el, item) {
  $el.attr('href', item.absHref);

  if (history && item.isFolder() && item.isManaged()) {
    $el.on('click', function (ev) {
      setLocation(item.absHref);
      ev.preventDefault();
      return false;
    });
  }

  if (settings.unmanagedInNewWindow && !item.isManaged()) {
    $el.attr('target', '_blank');
  }
};

var onPopState = function onPopState(ev) {
  if (ev.state && ev.state.absHref) {
    setLocation(ev.state.absHref, true);
  }
};

win.onpopstate = history ? onPopState : null;
module.exports = {
  encodedHref: encodedHref,
  getDomain: getDomain,
  getAbsHref: getAbsHref,
  getItem: getItem,
  setLocation: setLocation,
  refresh: refresh,
  setLink: setLink
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(19);

module.exports = Object.assign({}, config.options, {
  publicHref: config.setup.PUBLIC_HREF,
  rootHref: config.setup.ROOT_HREF
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var base = __webpack_require__(32);

var init = function init() {
  var $el = dom('<div id="notification"></div>').hide().appTo(base.$root);

  var set = function set(content) {
    if (content) {
      $el.html(content).show();
    } else {
      $el.hide();
    }
  };

  return {
    set: set
  };
};

module.exports = init();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var SEL_ROOT = 'body';
var TPL_TOPBAR = "<div id=\"topbar\">\n            <div id=\"toolbar\"></div>\n            <div id=\"flowbar\"></div>\n            <a id=\"backlink\" href=\"https://larsjung.de/h5ai/\" title=\"powered by h5ai - https://larsjung.de/h5ai/\">\n                <div>powered</div>\n                <div>by h5ai</div>\n            </a>\n        </div>";
var TPL_MAINROW = "<div id=\"mainrow\">\n            <div id=\"content\"></div>\n        </div>";

var init = function init() {
  var $root = dom(SEL_ROOT).attr('id', 'root').clr().app(TPL_TOPBAR).app(TPL_MAINROW);
  return {
    $root: $root,
    $topbar: $root.find('#topbar'),
    $toolbar: $root.find('#toolbar'),
    $flowbar: $root.find('#flowbar'),
    $mainrow: $root.find('#mainrow'),
    $content: $root.find('#content')
  };
};

module.exports = init();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    keys = _require.keys,
    each = _require.each,
    filter = _require.filter,
    map = _require.map,
    sortBy = _require.sortBy,
    isStr = _require.isStr,
    isNum = _require.isNum;

var _require2 = __webpack_require__(34),
    request = _require2.request;

var config = __webpack_require__(19);

var location = __webpack_require__(29);

var settings = __webpack_require__(30);

var types = __webpack_require__(45);

var reEndsWithSlash = /\/$/;
var reSplitPath = /^(.*\/)([^\/]+\/?)$/;
var cache = {};

var startsWith = function startsWith(sequence, part) {
  return isStr(sequence) && sequence.startsWith(part);
};

var trimEndSlash = function trimEndSlash(sequence) {
  return sequence.replace(reEndsWithSlash, '');
};

var createLabel = function createLabel(sequence) {
  sequence = trimEndSlash(sequence);

  try {
    sequence = decodeURIComponent(sequence);
  } catch (e) {
    /* skip */
  }

  return sequence;
};

var splitPath = function splitPath(sequence) {
  if (sequence === '/') {
    return {
      parent: null,
      name: '/'
    };
  }

  var match = reSplitPath.exec(sequence);

  if (!match) {
    return null;
  }

  var split = {
    parent: match[1],
    name: match[2]
  };

  if (split.parent && !startsWith(split.parent, settings.rootHref)) {
    split.parent = null;
  }

  return split;
};

var getItem = function getItem(options) {
  if (isStr(options)) {
    options = {
      href: options
    };
  } else if (!options || !isStr(options.href)) {
    return null;
  }

  var href = location.encodedHref(options.href);

  if (!startsWith(href, settings.rootHref)) {
    return null;
  }

  var item = cache[href] || Item(href); // eslint-disable-line no-use-before-define

  if (isNum(options.time)) {
    item.time = options.time;
  }

  if (isNum(options.size)) {
    item.size = options.size;
  }

  if (options.fetched) {
    item.isContentFetched = true;
  }

  return item;
};

var removeItem = function removeItem(absHref) {
  absHref = location.encodedHref(absHref);
  var item = cache[absHref];

  if (item) {
    delete cache[absHref];

    if (item.parent) {
      delete item.parent.content[item.absHref];
    }

    each(item.content, function (child) {
      removeItem(child.absHref);
    });
  }
};

var _fetchContent = function fetchContent(absHref) {
  return new Promise(function (resolve) {
    var item = getItem(absHref);

    if (item.isContentFetched) {
      resolve(item);
    } else {
      var path = trimEndSlash(item.getRelPathToRoot()); // `path` has been encoded, so use in `url` directly
      // use in `obj` will cause nested encoding

      request("GET /repos/{owner}/{repo}/contents/".concat(path), {
        owner: config.repo.owner,
        repo: config.repo.repo,
        ref: config.repo.branch
      }).then(function (response) {
        if (response.status === 200) {
          var found = {};
          each(response.data, function (i) {
            var e = getItem({
              href: settings.rootHref + i.path + (i.type === 'dir' ? '/' : ''),
              size: i.type !== 'dir' ? i.size : null
            });
            found[e.absHref] = true;
          });
          each(item.content, function (e) {
            if (!found[e.absHref]) {
              removeItem(e.absHref);
            }
          });
          item.isContentFetched = true;
        }

        resolve(item);
      });
    }
  });
};

var Item = function Item(absHref) {
  var split = splitPath(absHref);
  var inst = Object.assign(Object.create(Item.prototype), {
    absHref: absHref,
    type: types.getType(absHref),
    label: createLabel(absHref === '/' ? location.getDomain() : split.name),
    time: null,
    size: null,
    parent: null,
    content: {}
  });
  cache[absHref] = inst;

  if (split.parent) {
    inst.parent = getItem(split.parent);
    inst.parent.content[inst.absHref] = inst;

    if (keys(inst.parent.content).length > 1) {
      inst.parent.isContentFetched = true;
    }
  }

  return inst;
};

Item.prototype = {
  constructor: Item,
  isFolder: function isFolder() {
    return reEndsWithSlash.test(this.absHref);
  },
  isCurrentFolder: function isCurrentFolder() {
    return this.absHref === location.getAbsHref();
  },
  isInCurrentFolder: function isInCurrentFolder() {
    return !!this.parent && this.parent.isCurrentFolder();
  },
  isCurrentParentFolder: function isCurrentParentFolder() {
    var item = getItem(location.getAbsHref());
    return !!item && this === item.parent;
  },
  isDomain: function isDomain() {
    return this.absHref === '/';
  },
  isRoot: function isRoot() {
    return this.absHref === settings.rootHref;
  },
  isEmpty: function isEmpty() {
    return keys(this.content).length === 0;
  },
  isManaged: function isManaged() {
    if (!this.isFolder()) {
      return false;
    }

    var result = true;
    each(this.content, function (item) {
      if (config.options.view.unmanaged.indexOf(item.label) !== -1) {
        result = false;
      }
    });
    return result;
  },
  fetchContent: function fetchContent() {
    return _fetchContent(this.absHref).then(function (item) {
      return Promise.all(map(item.getSubfolders(), function (i) {
        return _fetchContent(i.absHref);
      }));
    });
  },
  getRelPathTo: function getRelPathTo(parent) {
    if (!parent.endsWith('/') || !this.absHref.startsWith(parent)) {
      return null;
    }

    return this.absHref.slice(parent.length);
  },
  getRelPathToRoot: function getRelPathToRoot() {
    return this.getRelPathTo(settings.rootHref);
  },
  getCrumb: function getCrumb() {
    var item = this; // eslint-disable-line consistent-this

    var crumb = [item];

    while (item.parent) {
      item = item.parent;
      crumb.unshift(item);
    }

    return crumb;
  },
  getSubfolders: function getSubfolders() {
    return sortBy(filter(this.content, function (item) {
      return item.isFolder();
    }), function (item) {
      return item.label.toLowerCase();
    });
  },
  getStats: function getStats() {
    var folders = 0;
    var files = 0;
    each(this.content, function (item) {
      if (item.isFolder()) {
        folders += 1;
      } else {
        files += 1;
      }
    });
    var depth = 0;
    var item = this; // eslint-disable-line consistent-this

    while (item.parent) {
      depth += 1;
      item = item.parent;
    }

    return {
      folders: folders,
      files: files,
      depth: depth
    };
  }
};
module.exports = {
  get: getItem,
  remove: removeItem
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var _octokit_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var VERSION = "5.6.3";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  var log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;

  if (Object(is_plain_object__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  var headers = {};
  var status;
  var url;
  var fetch = requestOptions.request && requestOptions.request.fetch || node_fetch__WEBPACK_IMPORTED_MODULE_3___default.a;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
      var _iterator, _step, keyAndValue, matches, deprecationLink, data, error;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = response.url;
              status = response.status;
              _iterator = _createForOfIteratorHelper(response.headers);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  keyAndValue = _step.value;
                  headers[keyAndValue[0]] = keyAndValue[1];
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if ("deprecation" in headers) {
                matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
                deprecationLink = matches && matches.pop();
                log.warn("[@octokit/request] \"".concat(requestOptions.method, " ").concat(requestOptions.url, "\" is deprecated. It is scheduled to be removed on ").concat(headers.sunset).concat(deprecationLink ? ". See ".concat(deprecationLink) : ""));
              }

              if (!(status === 204 || status === 205)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              if (!(requestOptions.method === "HEAD")) {
                _context.next = 11;
                break;
              }

              if (!(status < 400)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](response.statusText, status, {
                response: {
                  url: url,
                  status: status,
                  headers: headers,
                  data: undefined
                },
                request: requestOptions
              });

            case 11:
              if (!(status === 304)) {
                _context.next = 24;
                break;
              }

              _context.t0 = _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"];
              _context.t1 = status;
              _context.t2 = url;
              _context.t3 = status;
              _context.t4 = headers;
              _context.next = 19;
              return getResponseData(response);

            case 19:
              _context.t5 = _context.sent;
              _context.t6 = {
                url: _context.t2,
                status: _context.t3,
                headers: _context.t4,
                data: _context.t5
              };
              _context.t7 = requestOptions;
              _context.t8 = {
                response: _context.t6,
                request: _context.t7
              };
              throw new _context.t0("Not modified", _context.t1, _context.t8);

            case 24:
              if (!(status >= 400)) {
                _context.next = 30;
                break;
              }

              _context.next = 27;
              return getResponseData(response);

            case 27:
              data = _context.sent;
              error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](toErrorMessage(data), status, {
                response: {
                  url: url,
                  status: status,
                  headers: headers,
                  data: data
                },
                request: requestOptions
              });
              throw error;

            case 30:
              return _context.abrupt("return", getResponseData(response));

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(function (data) {
    return {
      status: status,
      url: url,
      headers: headers,
      data: data
    };
  })["catch"](function (error) {
    if (error instanceof _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"]) throw error;
    throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](error.message, 500, {
      request: requestOptions
    });
  });
}

function getResponseData(_x2) {
  return _getResponseData.apply(this, arguments);
}

function _getResponseData() {
  _getResponseData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response) {
    var contentType;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            contentType = response.headers.get("content-type");

            if (!/application\/json/.test(contentType)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 3:
            if (!(!contentType || /^text\/|charset=utf-8$/.test(contentType))) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", response.text());

          case 5:
            return _context2.abrupt("return", getBufferResponse(response));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getResponseData.apply(this, arguments);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data; // istanbul ignore else - just in case

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return "".concat(data.message, ": ").concat(data.errors.map(JSON.stringify).join(", "));
    }

    return data.message;
  } // istanbul ignore next - just in case


  return "Unknown error: ".concat(JSON.stringify(data));
}

function withDefaults(oldEndpoint, newDefaults) {
  var endpoint = oldEndpoint.defaults(newDefaults);

  var newApi = function newApi(route, parameters) {
    var endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    var request = function request(route, parameters) {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint: endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint: endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

var request = withDefaults(_octokit_endpoint__WEBPACK_IMPORTED_MODULE_0__["endpoint"], {
  headers: {
    "user-agent": "octokit-request.js/".concat(VERSION, " ").concat(Object(universal_user_agent__WEBPACK_IMPORTED_MODULE_1__["getUserAgent"])())
  }
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce(function (newObj, key) {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  var result = Object.assign({}, defaults);
  Object.keys(options).forEach(function (key) {
    if (Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(options[key])) {
      if (!(key in defaults)) Object.assign(result, _defineProperty({}, key, options[key]));else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, _defineProperty({}, key, options[key]));
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (var key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    var _route$split = route.split(" "),
        _route$split2 = _slicedToArray(_route$split, 2),
        method = _route$split2[0],
        url = _route$split2[1];

    options = Object.assign(url ? {
      method: method,
      url: url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  var mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(function (preview) {
      return !mergedOptions.mediaType.previews.includes(preview);
    }).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(function (preview) {
    return preview.replace(/-preview/, "");
  });
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  var separator = /\?/.test(url) ? "&" : "?";
  var names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(function (name) {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return "".concat(name, "=").concat(encodeURIComponent(parameters[name]));
  }).join("&");
}

var urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  var matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(function (option) {
    return !keysToOmit.includes(option);
  }).reduce(function (obj, key) {
    obj[key] = object[key];
    return obj;
  }, {});
} // Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */


function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        var tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      var operator = "";
      var values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  var method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  var url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  var headers = Object.assign({}, options.headers);
  var body;
  var parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  var urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  var omittedParameters = Object.keys(options).filter(function (option) {
    return urlVariableNames.includes(option);
  }).concat("baseUrl");
  var remainingParameters = omit(parameters, omittedParameters);
  var isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(function (preview) {
        return preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2.".concat(options.mediaType.format));
      }).join(",");
    }

    if (options.mediaType.previews.length) {
      var previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(function (preview) {
        var format = options.mediaType.format ? ".".concat(options.mediaType.format) : "+json";
        return "application/vnd.github.".concat(preview, "-preview").concat(format);
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method: method,
    url: url,
    headers: headers
  }, typeof body !== "undefined" ? {
    body: body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  var DEFAULTS = merge(oldDefaults, newDefaults);
  var endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS: DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse: parse
  });
}

var VERSION = "6.0.12";
var userAgent = "octokit-endpoint.js/".concat(VERSION, " ").concat(Object(universal_user_agent__WEBPACK_IMPORTED_MODULE_1__["getUserAgent"])()); // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
var endpoint = withDefaults(null, DEFAULTS);


/***/ }),
/* 36 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getUserAgent() {
  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && "version" in process) {
    return "Node.js/".concat(process.version.substr(1), " (").concat(process.platform, "; ").concat(process.arch, ")");
  }

  return "<environment undetectable>";
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 39 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ref: https://github.com/tc39/proposal-global

var getGlobal = function getGlobal() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

if (global.fetch) {
  exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestError", function() { return RequestError; });
/* harmony import */ var deprecation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var logOnceCode = once__WEBPACK_IMPORTED_MODULE_1___default()(function (deprecation) {
  return console.warn(deprecation);
});
var logOnceHeaders = once__WEBPACK_IMPORTED_MODULE_1___default()(function (deprecation) {
  return console.warn(deprecation);
});
/**
 * Error with extra properties to help with debugging
 */

var RequestError = /*#__PURE__*/function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(message, statusCode, options) {
    var _this;

    _classCallCheck(this, RequestError);

    _this = _super.call(this, message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    }

    _this.name = "HttpError";
    _this.status = statusCode;
    var headers;

    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }

    if ("response" in options) {
      _this.response = options.response;
      headers = options.response.headers;
    } // redact request credentials without mutating original request options


    var requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    _this.request = requestCopy; // deprecations

    Object.defineProperty(_assertThisInitialized(_this), "code", {
      get: function get() {
        logOnceCode(new deprecation__WEBPACK_IMPORTED_MODULE_0__["Deprecation"]("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      get: function get() {
        logOnceHeaders(new deprecation__WEBPACK_IMPORTED_MODULE_0__["Deprecation"]("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }
    });
    return _this;
  }

  return RequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deprecation", function() { return Deprecation; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Deprecation = /*#__PURE__*/function (_Error) {
  _inherits(Deprecation, _Error);

  var _super = _createSuper(Deprecation);

  function Deprecation(message) {
    var _this;

    _classCallCheck(this, Deprecation);

    _this = _super.call(this, message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    }

    _this.name = 'Deprecation';
    return _this;
  }

  return Deprecation;
}( /*#__PURE__*/_wrapNativeSuper(Error));



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(44);

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function value() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function value() {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function f() {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function f() {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    map = _require.map;

var config = __webpack_require__(19);

var reEndsWithSlash = /\/$/;
var regexps = {};

var escapeRegExp = function escapeRegExp(sequence) {
  return sequence.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$]/g, '\\$&'); // return sequence.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

var parse = function parse(types) {
  each(types, function (patterns, type) {
    var pattern = '^(' + map(patterns, function (p) {
      return '(' + escapeRegExp(p).replace(/\*/g, '.*') + ')';
    }).join('|') + ')$';
    regexps[type] = new RegExp(pattern, 'i');
  });
};

var getType = function getType(sequence) {
  if (reEndsWithSlash.test(sequence)) {
    return 'folder';
  }

  var slashidx = sequence.lastIndexOf('/');
  var name = slashidx >= 0 ? sequence.substr(slashidx + 1) : sequence;
  var result;
  each(regexps, function (regexp, type) {
    if (regexps[type].test(name)) {
      result = type;
    }
  });
  return result ? result : 'file';
};

parse(Object.assign({}, config.types));
module.exports = {
  getType: getType
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    includes = _require.includes;

var config = __webpack_require__(19);

var settings = __webpack_require__(30);

var imagesHref = settings.publicHref + 'images/';
var uiHref = imagesHref + 'ui/';
var themesHref = imagesHref + 'themes/';
var defaultThemeHref = themesHref + 'default/';
var defaultIcons = ['file', 'folder', 'folder-page', 'folder-parent', 'ar', 'aud', 'bin', 'img', 'txt', 'vid', 'x'];

var image = function image(id) {
  return uiHref + id + '.svg';
};

var icon = function icon(id) {
  var baseId = (id || '').split('-')[0];
  var href = config.theme[id] || config.theme[baseId];

  if (href) {
    return themesHref + href;
  }

  if (includes(defaultIcons, id)) {
    return defaultThemeHref + id + '.svg';
  }

  if (includes(defaultIcons, baseId)) {
    return defaultThemeHref + baseId + '.svg';
  }

  return defaultThemeHref + 'file.svg';
};

module.exports = {
  image: image,
  icon: icon
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var store = global.window.localStorage;
var storekey = '_h5ai';

var load = function load() {
  try {
    return JSON.parse(store[storekey]);
  } catch (e) {
    /* skip */
  }

  return {};
};

var save = function save(obj) {
  store[storekey] = JSON.stringify(obj);
};

var put = function put(key, value) {
  var obj = load();
  obj[key] = value;
  save(obj);
};

var get = function get(key) {
  return load()[key];
};

module.exports = {
  put: put,
  get: get
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var event = __webpack_require__(26);

var location = __webpack_require__(29);

var allsettings = __webpack_require__(30);

var win = global.window;
var settings = Object.assign({
  enabled: false,
  interval: 5000
}, allsettings.autorefresh);
var timeoutId = null;

var heartbeat = function heartbeat() {
  location.refresh();
};

var before = function before() {
  win.clearTimeout(timeoutId);
};

var after = function after() {
  win.clearTimeout(timeoutId);
  timeoutId = win.setTimeout(heartbeat, settings.interval);
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  settings.interval = Math.max(1000, settings.interval);
  event.sub('location.beforeChange', before);
  event.sub('location.beforeRefresh', before);
  event.sub('location.changed', after);
  event.sub('location.refreshed', after);
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var settings = Object.assign({
  enabled: false
}, allsettings.contextmenu);
var overlayTpl = '<div id="cm-overlay"></div>';
var panelTpl = '<div class="cm-panel"><ul></ul></div>';
var sepTpl = '<li class="cm-sep"></li>';
var entryTpl = '<li class="cm-entry"><span class="cm-icon"><img/></span><span class="cm-text"></span></li>';
var labelTpl = '<li class="cm-label"><span class="cm-text"></span></li>';

var closestId = function closestId(el) {
  while (!el._cmId && el.parentNode) {
    el = el.parentNode;
  }

  return el._cmId;
};

var createOverlay = function createOverlay(callback) {
  var $overlay = dom(overlayTpl);

  var handle = function handle(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var cmId = closestId(ev.target);

    if (ev.target === $overlay[0] || cmId !== undefined) {
      $overlay.rm();
      callback(cmId);
    }
  };

  return $overlay.on('contextmenu', handle).on('click', handle);
};

var createPanel = function createPanel(menu) {
  var $panel = dom(panelTpl);
  var $ul = $panel.find('ul');
  var $li;
  each(menu, function (entry) {
    if (entry.type === '-') {
      dom(sepTpl).appTo($ul);
    } else if (entry.type === 'l') {
      dom(labelTpl).appTo($ul).find('.cm-text').text(entry.text);
    } else if (entry.type === 'e') {
      $li = dom(entryTpl).appTo($ul);
      $li[0]._cmId = entry.id;
      $li.find('.cm-text').text(entry.text);

      if (entry.icon) {
        $li.find('.cm-icon img').attr('src', resource.icon(entry.icon));
      } else {
        $li.find('.cm-icon').addCls('no-icon');
      }
    }
  });
  return $panel;
};

var positionPanel = function positionPanel($overlay, $panel, x, y) {
  var margin = 4;
  $panel.css({
    left: 0,
    top: 0,
    opacity: 0
  });
  $overlay.show();
  var or = $overlay[0].getBoundingClientRect();
  var pr = $panel[0].getBoundingClientRect();
  var overlayLeft = or.left;
  var overlayTop = or.top;
  var overlayWidth = or.width;
  var overlayHeight = or.height;
  var panelWidth = pr.width;
  var panelHeight = pr.height;
  var posLeft = x;
  var posTop = y;

  if (panelWidth > overlayWidth - 2 * margin) {
    posLeft = margin;
    panelWidth = overlayWidth - 2 * margin;
  }

  if (panelHeight > overlayHeight - 2 * margin) {
    posTop = margin;
    panelHeight = overlayHeight - 2 * margin;
  }

  if (posLeft < overlayLeft + margin) {
    posLeft = overlayLeft + margin;
  }

  if (posLeft + panelWidth > overlayLeft + overlayWidth - margin) {
    posLeft = overlayLeft + overlayWidth - margin - panelWidth;
  }

  if (posTop < overlayTop + margin) {
    posTop = overlayTop + margin;
  }

  if (posTop + panelHeight > overlayTop + overlayHeight - margin) {
    posTop = overlayTop + overlayHeight - margin - panelHeight;
  }

  $panel.css({
    left: posLeft + 'px',
    top: posTop + 'px',
    width: panelWidth + 'px',
    height: panelHeight + 'px',
    opacity: 1
  });
};

var showMenuAt = function showMenuAt(x, y, menu, callback) {
  var $overlay = createOverlay(callback);
  var $panel = createPanel(menu);
  $overlay.hide().app($panel).appTo('body');
  positionPanel($overlay, $panel, x, y);
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  var menu = [{
    type: 'e',
    id: 'e1',
    text: 'testing context menus'
  }, {
    type: 'e',
    id: 'e2',
    text: 'another entry'
  }, {
    type: 'e',
    id: 'e3',
    text: 'one with icon',
    icon: 'folder'
  }, {
    type: '-'
  }, {
    type: 'e',
    id: 'e4',
    text: 'one with icon',
    icon: 'x'
  }, {
    type: 'e',
    id: 'e5',
    text: 'one with icon',
    icon: 'img'
  }];
  dom('#view').on('contextmenu', function (ev) {
    ev.preventDefault(); // showMenuAt(ev.pageX, ev.pageY, menu, res => console.log('>> CB-RESULT >> ' + res));

    showMenuAt(ev.pageX, ev.pageY, menu);
  });
};

init();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var event = __webpack_require__(26);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var base = __webpack_require__(32);

var settings = Object.assign({
  enabled: false
}, allsettings.crumb);
var crumbbarTpl = '<div id="crumbbar"></div>';
var crumbTpl = "<a class=\"crumb\">\n            <img class=\"sep\" src=\"".concat(resource.image('crumb'), "\" alt=\">\"/>\n            <span class=\"label\"></span>\n        </a>");
var pageHintTpl = "<img class=\"hint\" src=\"".concat(resource.icon('folder-page'), "\" alt=\"has index page\"/>");

var createHtml = function createHtml(item) {
  var $html = dom(crumbTpl);
  location.setLink($html, item);
  $html.find('.label').text(item.label);

  if (item.isCurrentFolder()) {
    $html.addCls('active');
  }

  if (!item.isManaged()) {
    $html.app(dom(pageHintTpl));
  }

  item._$crumb = $html;
  $html[0]._item = item;
  return $html;
};

var onLocationChanged = function onLocationChanged(item) {
  var $crumb = item._$crumb;
  var $crumbbar = dom('#crumbbar');

  if ($crumb && $crumb.parent()[0] === $crumbbar[0]) {
    $crumbbar.children().rmCls('active');
    $crumb.addCls('active');
  } else {
    $crumbbar.clr();
    each(item.getCrumb(), function (crumbItem) {
      $crumbbar.app(createHtml(crumbItem));
    });
  }
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  dom(crumbbarTpl).appTo(base.$flowbar);
  event.sub('location.changed', onLocationChanged);
};

init();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var marked = __webpack_require__(52);

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var server = __webpack_require__(20);

var event = __webpack_require__(26);

var allsettings = __webpack_require__(30);

var settings = Object.assign({
  enabled: false
}, allsettings.custom);

var update = function update(data, key) {
  var $el = dom("#content-".concat(key));

  if (data && data[key].content) {
    var content = data[key].content;

    if (data[key].type === 'md') {
      content = marked(content);
    }

    $el.html(content).show();
  } else {
    $el.hide();
  }
};

var onLocationChanged = function onLocationChanged(item) {
  server.request({
    action: 'get',
    custom: item.absHref
  }).then(function (response) {
    var data = response && response.custom;
    each(['header', 'footer'], function (key) {
      return update(data, key);
    });
  });
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  dom('<div id="content-header"></div>').hide().preTo('#content');
  dom('<div id="content-footer"></div>').hide().appTo('#content');
  event.sub('location.changed', onLocationChanged);
};

init();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      };
    }

    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }

    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });
  var defaults_1 = defaults.defaults;
  var defaults_2 = defaults.getDefaults;
  var defaults_3 = defaults.changeDefaults;
  /**
   * Helpers
   */

  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest = {
    exec: function noopTest() {}
  };

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777


  function repeatString(pattern, count) {
    if (count < 1) {
      return '';
    }

    var result = '';

    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }

      count >>= 1;
      pattern += pattern;
    }

    return result + pattern;
  }

  var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation,
    repeatString: repeatString
  };
  var defaults$1 = defaults.defaults;
  var rtrim$1 = helpers.rtrim,
      splitCells$1 = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket$1 = helpers.findClosingBracket;

  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$1;
    }

    var _proto = Tokenizer.prototype;

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    };

    _proto.code = function code(src, tokens) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && lastToken.type === 'paragraph') {
          return {
            raw: cap[0],
            text: cap[0].trimRight()
          };
        }

        var text = cap[0].replace(/^ {4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim$1(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim$1(text, '#');

          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }

        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text
        };
      }
    };

    _proto.nptable = function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };

        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i], item.header.length);
          }

          return item;
        }
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
            item,
            space,
            bcurr,
            bnext,
            addBack,
            loose,
            istask,
            ischecked;
        var l = itemMatch.length;
        bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);

        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item; // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.

          if (i !== l - 1) {
            bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);

            if (bnext[1].length > bcurr[0].length || bnext[1].length > 3) {
              // nested list
              itemMatch.splice(i, 2, itemMatch[i] + '\n' + itemMatch[i + 1]);
              i--;
              l--;
              continue;
            } else {
              if ( // different bullet style
              !this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
                addBack = itemMatch.slice(i + 1).join('\n');
                list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                i = l - 1;
              }
            }

            bcurr = bnext;
          } // Remove the list item's bullet
          // so it is seen as the next token.


          space = item.length;
          item = item.replace(/^ *([*+-]|\d+[.)]) ?/, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            list.loose = true;
          } // Check for task list items


          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;

            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    };

    _proto.text = function text(src, tokens) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          return {
            raw: cap[0],
            text: cap[0]
          };
        }

        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    };

    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }

        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var trimmedUrl = cap[2].trim();

        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped


          var rtrimSlash = rtrim$1(trimmedUrl.slice(0, -1), '\\');

          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket$1(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim();

        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }

        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        return outputLink(cap, link, cap[0]);
      }
    };

    _proto.strong = function strong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.strong.start.exec(src);

      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '**' ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
        endReg.lastIndex = 0;
        var cap;

        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.strong.middle.exec(maskedSrc.slice(0, match.index + 3));

          if (cap) {
            return {
              type: 'strong',
              raw: src.slice(0, cap[0].length),
              text: src.slice(2, cap[0].length - 2)
            };
          }
        }
      }
    };

    _proto.em = function em(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.em.start.exec(src);

      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '*' ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
        endReg.lastIndex = 0;
        var cap;

        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.em.middle.exec(maskedSrc.slice(0, match.index + 2));

          if (cap) {
            return {
              type: 'em',
              raw: src.slice(0, cap[0].length),
              text: src.slice(1, cap[0].length - 1)
            };
          }
        }
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2]
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  var noopTest$1 = helpers.noopTest,
      edit$1 = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
  block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.listItemStart = edit$1(/^( *)(bull)/).replace('bull', block.bullet).getRegex();
  block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge$1({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' {0,3}([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' {0,3}\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest$1,
    // fences not supported
    paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    strong: {
      start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
      // (1) returns if starts w/ punctuation
      middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
      endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

    },
    em: {
      start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
      // (1) returns if starts w/ punctuation
      middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
      endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\s*punctuation])/
  }; // list of punctuation marks from common mark spec
  // without * and _ to workaround cases with double emphasis

  inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline.punctuation = edit$1(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>';
  inline._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*';
  inline._comment = edit$1(block._comment).replace('(?:-->|$)', '-->').getRegex();
  inline.em.start = edit$1(inline.em.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.middle = edit$1(inline.em.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
  inline.em.endAst = edit$1(inline.em.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.endUnd = edit$1(inline.em.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.start = edit$1(inline.strong.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.middle = edit$1(inline.strong.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
  inline.strong.endAst = edit$1(inline.strong.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.endUnd = edit$1(inline.strong.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = edit$1(inline._blockSkip, 'g').getRegex();
  inline.overlapSkip = edit$1(inline._overlapSkip, 'g').getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit$1(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
  inline.reflinkSearch = edit$1(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge$1({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge$1({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block,
    inline: inline
  };
  var defaults$2 = defaults.defaults;
  var block$1 = rules.block,
      inline$1 = rules.inline;
  var repeatString$1 = helpers.repeatString;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$2;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block$1.normal,
        inline: inline$1.normal
      };

      if (this.options.pedantic) {
        rules.block = block$1.pedantic;
        rules.inline = inline$1.pedantic;
      } else if (this.options.gfm) {
        rules.block = block$1.gfm;

        if (this.options.breaks) {
          rules.inline = inline$1.breaks;
        } else {
          rules.inline = inline$1.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */

    /**
     * Static Lex Method
     */


    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    ;

    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens, top) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (top === void 0) {
        top = true;
      }

      src = src.replace(/^ +$/gm, '');
      var token, i, l, lastToken;

      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)


        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;

          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }

          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);

          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph


        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.text(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _proto.inline = function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }

          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells


              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];

                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }

              break;
            }

          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }

          case 'list':
            {
              l2 = token.items.length;

              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }

              break;
            }
        }
      }

      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (inLink === void 0) {
        inLink = false;
      }

      if (inRawBlock === void 0) {
        inRawBlock = false;
      }

      var token; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }

      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }

        keepPrevChar = false; // escape

        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          tokens.push(token);
          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // strong


        if (token = this.tokenizer.strong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // em


        if (token = this.tokenizer.em(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);
          prevChar = token.raw.slice(-1);
          keepPrevChar = true;
          tokens.push(token);
          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block$1,
          inline: inline$1
        };
      }
    }]);

    return Lexer;
  }();

  var defaults$3 = defaults.defaults;
  var cleanUrl$1 = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$3;
    }

    var _proto = Renderer.prototype;

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape$1(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    };

    _proto.image = function image(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();
  /**
   * TextRenderer
   * returns only the textual part of the token
   */


  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype; // no need for block level renderers

    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();
  /**
   * Slugger generates header id
   */


  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }

    var _proto = Slugger.prototype;

    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     */
    ;

    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;

      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];

        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }

      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }

      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    ;

    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }

      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };

    return Slugger;
  }();

  var defaults$4 = defaults.defaults;
  var unescape$1 = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$4;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer_1();
      this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    ;

    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  var merge$2 = helpers.merge,
      checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
      escape$2 = helpers.escape;
  var getDefaults = defaults.getDefaults,
      changeDefaults = defaults.changeDefaults,
      defaults$5 = defaults.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer_1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer_1.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser_1.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge$2(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults$5;
  /**
   * Use Extension
   */

  marked.use = function (extension) {
    var opts = merge$2({}, extension);

    if (extension.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer_1();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop];

          renderer[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var ret = extension.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (extension.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop];

          tokenizer[prop] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var ret = extension.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    }

    if (extension.walkTokens) {
      var walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        extension.walkTokens(token);

        if (walkTokens) {
          walkTokens(token);
        }
      };
    }

    marked.setOptions(opts);
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      callback(token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    }
  };
  /**
   * Parse Inline
   */


  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);

    try {
      var tokens = Lexer_1.lexInline(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }

      return Parser_1.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.Tokenizer = Tokenizer_1;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;
  return marked_1;
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var server = __webpack_require__(20);

var event = __webpack_require__(26);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var settings = Object.assign({
  enabled: false,
  type: 'php-tar',
  packageName: 'package',
  alwaysVisible: false
}, allsettings.download);
var tpl = "<div id=\"download\" class=\"tool\">\n            <img src=\"".concat(resource.image('download'), "\" alt=\"download\"/>\n        </div>");
var selectedItems = [];
var $download;

var onSelection = function onSelection(items) {
  selectedItems = items.slice(0);

  if (selectedItems.length) {
    $download.show();
  } else if (!settings.alwaysVisible) {
    $download.hide();
  }
};

var onClick = function onClick() {
  var type = settings.type;
  var name = settings.packageName;
  var extension = type === 'shell-zip' ? 'zip' : 'tar';

  if (!name) {
    if (selectedItems.length === 1) {
      name = selectedItems[0].label;
    } else {
      name = location.getItem().label;
    }
  }

  var query = {
    action: 'download',
    as: name + '.' + extension,
    type: type,
    baseHref: location.getAbsHref(),
    hrefs: ''
  };
  each(selectedItems, function (item, idx) {
    query["hrefs[".concat(idx, "]")] = item.absHref;
  });
  server.formRequest(query);
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  $download = dom(tpl).hide().appTo('#toolbar').on('click', onClick);

  if (settings.alwaysVisible) {
    $download.show();
  }

  event.sub('selection', onSelection);
};

init();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    filter = _require.filter,
    debounce = _require.debounce,
    parsePattern = _require.parsePattern,
    dom = _require.dom;

var event = __webpack_require__(26);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var view = __webpack_require__(55);

var settings = Object.assign({
  enabled: false,
  advanced: false,
  debounceTime: 100,
  ignorecase: true
}, allsettings.filter);
var tpl = "<div id=\"filter\" class=\"tool\">\n            <img src=\"".concat(resource.image('filter'), "\" alt=\"filter\"/>\n            <input class=\"l10n_ph-filter\" type=\"text\" value=\"\"/>\n        </div>");
var inputIsVisible = false;
var prevPattern = '';
var $filter;
var $input;

var filterItems = function filterItems() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (pattern === prevPattern) {
    return;
  }

  prevPattern = pattern;

  if (!pattern) {
    view.setLocation();
    return;
  }

  $filter.addCls('pending');
  var re = new RegExp(pattern, settings.ignorecase ? 'i' : '');
  var items = filter(location.getItem().content, function (item) {
    return re.test(item.label);
  });
  $filter.rmCls('pending');
  view.setHint('noMatch');
  view.setItems(items);
};

var update = function update() {
  if (inputIsVisible) {
    $filter.addCls('active');
    $input[0].focus();
    filterItems(parsePattern($input.val(), settings.advanced));
  } else {
    filterItems();
    $filter.rmCls('active');
  }
};

var toggle = function toggle() {
  inputIsVisible = !inputIsVisible;
  update();
};

var reset = function reset() {
  inputIsVisible = false;
  $input.val('');
  update();
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  $filter = dom(tpl).appTo('#toolbar');
  $input = $filter.find('input');
  $filter.find('img').on('click', toggle);
  $input.on('keyup', debounce(update, settings.debounceTime));
  event.sub('location.changed', reset);
};

init();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    map = _require.map,
    includes = _require.includes,
    intersection = _require.intersection,
    dom = _require.dom;

var event = __webpack_require__(26);

var format = __webpack_require__(27);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var store = __webpack_require__(47);

var allsettings = __webpack_require__(30);

var base = __webpack_require__(32);

var modes = ['details', 'grid', 'icons'];
var sizes = [20, 40, 60, 80, 100, 150, 200, 250, 300, 350, 400];
var settings = Object.assign({
  binaryPrefix: false,
  hideFolders: false,
  hideParentFolder: false,
  maxIconSize: 40,
  modes: modes,
  setParentFolderLabels: false,
  sizes: sizes
}, allsettings.view);
var sortedSizes = settings.sizes.sort(function (a, b) {
  return a - b;
});
var checkedModes = intersection(settings.modes, modes);
var storekey = 'view';
var viewTpl = "<div id=\"view\">\n            <ul id=\"items\" class=\"clearfix\">\n                <li class=\"header\">\n                    <a class=\"icon\"></a>\n                    <a class=\"label\" href=\"#\"><span class=\"l10n-name\"/></a>\n                    <a class=\"date\" href=\"#\"><span class=\"l10n-lastModified\"/></a>\n                    <a class=\"size\" href=\"#\"><span class=\"l10n-size\"/></a>\n                </li>\n            </ul>\n            <div id=\"view-hint\"></div>\n        </div>";
var itemTpl = "<li class=\"item\">\n            <a>\n                <span class=\"icon square\"><img/></span>\n                <span class=\"icon landscape\"><img/></span>\n                <span class=\"label\"></span>\n                <span class=\"date\"></span>\n                <span class=\"size\"></span>\n            </a>\n        </li>";
var $view = dom(viewTpl);
var $items = $view.find('#items');
var $hint = $view.find('#view-hint');

var cropSize = function cropSize(size, min, max) {
  return Math.min(max, Math.max(min, size));
};

var createStyles = function createStyles(size) {
  var dsize = cropSize(size, 20, 80);
  var gsize = cropSize(size, 40, 160);
  var isize = cropSize(size, 80, 1000);
  var ilsize = Math.round(isize * 4 / 3);
  var important = '!important;';
  var detailsPrefix = "#view.view-details.view-size-".concat(size);
  var gridPrefix = "#view.view-grid.view-size-".concat(size);
  var iconsPrefix = "#view.view-icons.view-size-".concat(size);
  var rules = ["".concat(detailsPrefix, " .item .label {line-height: ").concat(dsize + 14, "px ").concat(important, "}"), "".concat(detailsPrefix, " .item .date {line-height: ").concat(dsize + 14, "px ").concat(important, "}"), "".concat(detailsPrefix, " .item .size {line-height: ").concat(dsize + 14, "px ").concat(important, "}"), "".concat(detailsPrefix, " .square {width: ").concat(dsize, "px ").concat(important, " height: ").concat(dsize, "px ").concat(important, "}"), "".concat(detailsPrefix, " .square img {width: ").concat(dsize, "px ").concat(important, " height: ").concat(dsize, "px ").concat(important, "}"), "".concat(detailsPrefix, " .label {margin-left: ").concat(dsize + 32, "px ").concat(important, "}"), "".concat(gridPrefix, " .item .label {line-height: ").concat(gsize, "px ").concat(important, "}"), "".concat(gridPrefix, " .square {width: ").concat(gsize, "px ").concat(important, " height: ").concat(gsize, "px ").concat(important, "}"), "".concat(gridPrefix, " .square img {width: ").concat(gsize, "px ").concat(important, " height: ").concat(gsize, "px ").concat(important, "}"), "".concat(iconsPrefix, " .item {width: ").concat(ilsize, "px ").concat(important, "}"), "".concat(iconsPrefix, " .landscape {width: ").concat(ilsize, "px ").concat(important, " height: ").concat(isize, "px ").concat(important, "}"), "".concat(iconsPrefix, " .landscape img {width: ").concat(isize, "px ").concat(important, " height: ").concat(isize, "px ").concat(important, "}"), "".concat(iconsPrefix, " .landscape .thumb {width: ").concat(ilsize, "px ").concat(important, "}")];
  return rules.join('\n');
};

var addCssStyles = function addCssStyles() {
  var styles = map(sortedSizes, function (size) {
    return createStyles(size);
  });
  styles.push("#view .icon img {max-width: ".concat(settings.maxIconSize, "px; max-height: ").concat(settings.maxIconSize, "px;}"));
  dom('<style></style>').text(styles.join('\n')).appTo('head');
};

var set = function set(mode, size) {
  var stored = store.get(storekey);
  mode = mode || stored && stored.mode;
  size = size || stored && stored.size;
  mode = includes(settings.modes, mode) ? mode : settings.modes[0];
  size = includes(settings.sizes, size) ? size : settings.sizes[0];
  store.put(storekey, {
    mode: mode,
    size: size
  });
  each(checkedModes, function (m) {
    if (m === mode) {
      $view.addCls('view-' + m);
    } else {
      $view.rmCls('view-' + m);
    }
  });
  each(sortedSizes, function (s) {
    if (s === size) {
      $view.addCls('view-size-' + s);
    } else {
      $view.rmCls('view-size-' + s);
    }
  });
  event.pub('view.mode.changed', mode, size);
};

var getModes = function getModes() {
  return checkedModes;
};

var getMode = function getMode() {
  return store.get(storekey).mode;
};

var setMode = function setMode(mode) {
  return set(mode, null);
};

var getSizes = function getSizes() {
  return sortedSizes;
};

var getSize = function getSize() {
  return store.get(storekey).size;
};

var setSize = function setSize(size) {
  return set(null, size);
};

var onMouseenter = function onMouseenter(ev) {
  var item = ev.target._item;
  event.pub('item.mouseenter', item);
};

var onMouseleave = function onMouseleave(ev) {
  var item = ev.target._item;
  event.pub('item.mouseleave', item);
};

var createHtml = function createHtml(item) {
  var $html = dom(itemTpl);
  var $a = $html.find('a');
  var $iconImg = $html.find('.icon img');
  var $label = $html.find('.label');
  var $date = $html.find('.date');
  var $size = $html.find('.size');
  $html.addCls(item.isFolder() ? 'folder' : 'file').on('mouseenter', onMouseenter).on('mouseleave', onMouseleave);
  location.setLink($a, item);
  $label.text(item.label).attr('title', item.label);
  $date.attr('data-time', item.time).text(format.formatDate(item.time));
  $size.attr('data-bytes', item.size).text(format.formatSize(item.size));
  item.icon = resource.icon(item.type);

  if (item.isFolder() && !item.isManaged()) {
    $html.addCls('page');
    item.icon = resource.icon('folder-page');
  }

  if (item.isCurrentParentFolder()) {
    item.icon = resource.icon('folder-parent');

    if (!settings.setParentFolderLabels) {
      $label.addCls('l10n-parentDirectory');
    }

    $html.addCls('folder-parent');
  }

  $iconImg.attr('src', item.icon).attr('alt', item.type);
  item.$view = $html;
  $html[0]._item = item;
  return $html;
};

var checkHint = function checkHint() {
  var hasNoItems = $items.find('.item').length === $items.find('.folder-parent').length;

  if (hasNoItems) {
    $hint.show();
  } else {
    $hint.hide();
  }
};

var setItems = function setItems(items) {
  var removed = map($items.find('.item'), function (el) {
    return el._item;
  });
  $items.find('.item').rm();
  each(items, function (item) {
    return $items.app(createHtml(item));
  });
  base.$content[0].scrollLeft = 0;
  base.$content[0].scrollTop = 0;
  checkHint();
  event.pub('view.changed', items, removed);
};

var changeItems = function changeItems(add, remove) {
  each(add, function (item) {
    createHtml(item).hide().appTo($items).show();
  });
  each(remove, function (item) {
    item.$view.hide().rm();
  });
  checkHint();
  event.pub('view.changed', add, remove);
};

var setHint = function setHint(l10nKey) {
  $hint.rmCls().addCls('l10n-' + l10nKey);
  checkHint();
};

var onLocationChanged = function onLocationChanged(item) {
  if (!item) {
    item = location.getItem();
  }

  var items = [];

  if (item.parent && !settings.hideParentFolder) {
    items.push(item.parent);
  }

  each(item.content, function (child) {
    if (!(child.isFolder() && settings.hideFolders)) {
      items.push(child);
    }
  });
  setHint('empty');
  setItems(items);
};

var onLocationRefreshed = function onLocationRefreshed(item, added, removed) {
  var add = [];
  each(added, function (child) {
    if (!(child.isFolder() && settings.hideFolders)) {
      add.push(child);
    }
  });
  setHint('empty');
  changeItems(add, removed);
};

var onResize = function onResize() {
  var width = $view[0].offsetWidth;
  $view.rmCls('width-0').rmCls('width-1');

  if (width < 320) {
    $view.addCls('width-0');
  } else if (width < 480) {
    $view.addCls('width-1');
  }
};

var init = function init() {
  addCssStyles();
  set();
  $view.appTo(base.$content);
  $hint.hide();
  format.setDefaultMetric(settings.binaryPrefix);
  event.sub('location.changed', onLocationChanged);
  event.sub('location.refreshed', onLocationRefreshed);
  event.sub('resize', onResize);
  onResize();
};

init();
module.exports = {
  $el: $view,
  setItems: setItems,
  changeItems: changeItems,
  setLocation: onLocationChanged,
  setHint: setHint,
  getModes: getModes,
  getMode: getMode,
  setMode: setMode,
  getSizes: getSizes,
  getSize: getSize,
  setSize: setSize
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    map = _require.map;

var event = __webpack_require__(26);

var allsettings = __webpack_require__(30);

var win = global.window;
var settings = Object.assign({
  enabled: false,
  id: 'UA-000000-0'
}, allsettings['google-analytics-ua']);

var snippet = function snippet() {
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  /* eslint-enable */

};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  snippet();
  win.ga('create', settings.id, 'auto');
  event.sub('location.changed', function (item) {
    var loc = win.location;
    win.ga('send', 'pageview', {
      location: loc.protocol + '//' + loc.host + item.absHref,
      title: map(item.getCrumb(), function (i) {
        return i.label;
      }).join(' > ')
    });
  });
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var kjua = __webpack_require__(58);

var _require = __webpack_require__(21),
    isNum = _require.isNum,
    dom = _require.dom;

var event = __webpack_require__(26);

var format = __webpack_require__(27);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var settings = Object.assign({
  enabled: false,
  show: false,
  qrcode: true,
  qrColor: '#999'
}, allsettings.info);
var tpl = "<div id=\"info\">\n            <div class=\"icon\"><img/></div>\n            <div class=\"block\">\n                <div class=\"label\"></div>\n                <div class=\"time\"></div>\n                <div class=\"size\"></div>\n                <div class=\"content\">\n                    <span class=\"folders\"></span> <span class=\"l10n-folders\"></span>,\n                    <span class=\"files\"></span> <span class=\"l10n-files\"></span>\n                </div>\n            </div>\n            <div class=\"qrcode\"/>\n        </div>";
var settingsTpl = "<div class=\"block\">\n            <h1 class=\"l10n-info\">Info</h1>\n            <div id=\"view-info\" class=\"button view\">\n                <img src=\"".concat(resource.image('info-toggle'), "\" alt=\"view-info\"/>\n            </div>\n        </div>");
var storekey = 'ext/info';
var $img;
var $label;
var $time;
var $size;
var $content;
var $folders;
var $files;
var $qrcode;
var currentFolder;

var updateSettings = function updateSettings() {
  if (store.get(storekey)) {
    dom('#view-info').addCls('active');
    dom('#info').show();
  } else {
    dom('#view-info').rmCls('active');
    dom('#info').hide();
  }
};

var update = function update(item) {
  var src = item.thumbRational || item.icon;
  var isThumb = !!item.thumbRational;

  if (item.isCurrentFolder() || !src) {
    src = resource.icon('folder');
  }

  $img.attr('src', src);

  if (isThumb) {
    $img.addCls('thumb');
  } else {
    $img.rmCls('thumb');
  }

  $label.text(item.label);

  if (isNum(item.time)) {
    $time.text(format.formatDate(item.time));
  } else {
    $time.text('.');
  }

  if (isNum(item.size)) {
    $size.text(format.formatSize(item.size));
    $size.show();
  } else {
    $size.hide();
  }

  if (item.isContentFetched) {
    var stats = item.getStats();
    $folders.text(stats.folders);
    $files.text(stats.files);
    $content.show();
  } else {
    $content.hide();
  }

  if (settings.qrcode) {
    var loc = global.window.location;
    $qrcode.clr().app(kjua({
      render: 'image',
      size: 200,
      fill: settings.qrFill,
      back: settings.qrBack,
      text: loc.protocol + '//' + loc.host + item.absHref,
      crisp: true,
      quiet: 1
    }));
  }
};

var onMouseenter = function onMouseenter(item) {
  update(item);
};

var onMouseleave = function onMouseleave() {
  update(currentFolder);
};

var onLocationChanged = function onLocationChanged(item) {
  currentFolder = item;
  update(currentFolder);
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  var $info = dom(tpl).hide().appTo('#mainrow');
  $img = $info.find('.icon img');
  $label = $info.find('.label');
  $time = $info.find('.time');
  $size = $info.find('.size');
  $content = $info.find('.content');
  $folders = $info.find('.folders');
  $files = $info.find('.files');
  $qrcode = $info.find('.qrcode');

  if (!settings.qrcode) {
    $qrcode.rm();
  }

  dom(settingsTpl).appTo('#sidebar').find('#view-info').on('click', function (ev) {
    store.put(storekey, !store.get(storekey));
    updateSettings();
    event.pub('resize');
    ev.preventDefault();
  }); // ensure stored value is boolean, otherwise set default

  if (typeof store.get(storekey) !== 'boolean') {
    store.put(storekey, settings.show);
  }

  updateSettings();
  event.sub('location.changed', onLocationChanged);
  event.sub('item.mouseenter', onMouseenter);
  event.sub('item.mouseleave', onMouseleave);
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! kjua v0.9.0 - https://larsjung.de/kjua/ */
!function (t, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return n = {}, o.m = e = [function (t, r, e) {
    function n(t) {
      var r = Object.assign({}, o, t),
          e = i(r.text, r.ecLevel, r.minVersion, r.quiet);
      return "svg" === r.render ? u(e, r) : a(e, r, "image" === r.render);
    }

    var o = e(1),
        i = e(2),
        a = e(4),
        u = e(8);
    t.exports = n;

    try {
      jQuery.fn.kjua = function (e) {
        return this.each(function (t, r) {
          return r.appendChild(n(e));
        });
      };
    } catch (t) {}
  }, function (t, r) {
    t.exports = {
      render: "image",
      crisp: !0,
      minVersion: 1,
      ecLevel: "L",
      size: 200,
      ratio: null,
      fill: "#333",
      back: "#fff",
      text: "no text",
      rounded: 0,
      quiet: 0,
      mode: "plain",
      mSize: 30,
      mPosX: 50,
      mPosY: 50,
      label: "no label",
      fontname: "sans",
      fontcolor: "#333",
      image: null
    };
  }, function (t, r, e) {
    function u(t) {
      return (u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var f = /code length overflow/i,
        c = e(3);
    c.stringToBytes = c.stringToBytesFuncs["UTF-8"];

    t.exports = function (t, r, e, n) {
      var o,
          i = 3 < arguments.length && void 0 !== n ? n : 0,
          a = function (t, r, e) {
        for (var n = 2 < arguments.length && void 0 !== e ? e : 1, o = n = Math.max(1, n); o <= 40; o += 1) {
          try {
            var i = function () {
              var e = c(o, r);
              e.addData(t), e.make();
              var n = e.getModuleCount();
              return {
                v: {
                  text: t,
                  level: r,
                  version: o,
                  module_count: n,
                  is_dark: function is_dark(t, r) {
                    return 0 <= t && t < n && 0 <= r && r < n && e.isDark(t, r);
                  }
                }
              };
            }();

            if ("object" === u(i)) return i.v;
          } catch (t) {
            if (!(o < 40 && f.test(t))) throw new Error(t);
          }
        }

        return null;
      }(0 < arguments.length && void 0 !== t ? t : "", 1 < arguments.length && void 0 !== r ? r : "L", 2 < arguments.length && void 0 !== e ? e : 1);

      return a && (o = a.is_dark, a.module_count += 2 * i, a.is_dark = function (t, r) {
        return o(t - i, r - i);
      }), a;
    };
  }, function (t, r, e) {
    var n,
        o,
        i,
        a = function () {
      function i(t, r) {
        function a(t, r) {
          l = function (t) {
            for (var r = new Array(t), e = 0; e < t; e += 1) {
              r[e] = new Array(t);

              for (var n = 0; n < t; n += 1) {
                r[e][n] = null;
              }
            }

            return r;
          }(s = 4 * u + 17), e(0, 0), e(s - 7, 0), e(0, s - 7), i(), o(), d(t, r), 7 <= u && g(t), null == n && (n = p(u, f, c)), v(n, r);
        }

        var u = t,
            f = w[r],
            l = null,
            s = 0,
            n = null,
            c = [],
            h = {},
            e = function e(t, r) {
          for (var e = -1; e <= 7; e += 1) {
            if (!(t + e <= -1 || s <= t + e)) for (var n = -1; n <= 7; n += 1) {
              r + n <= -1 || s <= r + n || (l[t + e][r + n] = 0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4);
            }
          }
        },
            o = function o() {
          for (var t = 8; t < s - 8; t += 1) {
            null == l[t][6] && (l[t][6] = t % 2 == 0);
          }

          for (var r = 8; r < s - 8; r += 1) {
            null == l[6][r] && (l[6][r] = r % 2 == 0);
          }
        },
            i = function i() {
          for (var t = m.getPatternPosition(u), r = 0; r < t.length; r += 1) {
            for (var e = 0; e < t.length; e += 1) {
              var n = t[r],
                  o = t[e];
              if (null == l[n][o]) for (var i = -2; i <= 2; i += 1) {
                for (var a = -2; a <= 2; a += 1) {
                  l[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
                }
              }
            }
          }
        },
            g = function g(t) {
          for (var r = m.getBCHTypeNumber(u), e = 0; e < 18; e += 1) {
            var n = !t && 1 == (r >> e & 1);
            l[Math.floor(e / 3)][e % 3 + s - 8 - 3] = n;
          }

          for (e = 0; e < 18; e += 1) {
            n = !t && 1 == (r >> e & 1);
            l[e % 3 + s - 8 - 3][Math.floor(e / 3)] = n;
          }
        },
            d = function d(t, r) {
          for (var e = f << 3 | r, n = m.getBCHTypeInfo(e), o = 0; o < 15; o += 1) {
            var i = !t && 1 == (n >> o & 1);
            o < 6 ? l[o][8] = i : o < 8 ? l[o + 1][8] = i : l[s - 15 + o][8] = i;
          }

          for (o = 0; o < 15; o += 1) {
            i = !t && 1 == (n >> o & 1);
            o < 8 ? l[8][s - o - 1] = i : o < 9 ? l[8][15 - o - 1 + 1] = i : l[8][15 - o - 1] = i;
          }

          l[s - 8][8] = !t;
        },
            v = function v(t, r) {
          for (var e = -1, n = s - 1, o = 7, i = 0, a = m.getMaskFunction(r), u = s - 1; 0 < u; u -= 2) {
            for (6 == u && --u;;) {
              for (var f, c = 0; c < 2; c += 1) {
                null == l[n][u - c] && (f = !1, i < t.length && (f = 1 == (t[i] >>> o & 1)), a(n, u - c) && (f = !f), l[n][u - c] = f, -1 == --o && (i += 1, o = 7));
              }

              if ((n += e) < 0 || s <= n) {
                n -= e, e = -e;
                break;
              }
            }
          }
        },
            p = function p(t, r, e) {
          for (var n = S.getRSBlocks(t, r), o = M(), i = 0; i < e.length; i += 1) {
            var a = e[i];
            o.put(a.getMode(), 4), o.put(a.getLength(), m.getLengthInBits(a.getMode(), t)), a.write(o);
          }

          for (var u = 0, i = 0; i < n.length; i += 1) {
            u += n[i].dataCount;
          }

          if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")";

          for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) {
            o.putBit(!1);
          }

          for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u));) {
            o.put(17, 8);
          }

          return function (t, r) {
            for (var e = 0, n = 0, o = 0, i = new Array(r.length), a = new Array(r.length), u = 0; u < r.length; u += 1) {
              var f = r[u].dataCount,
                  c = r[u].totalCount - f,
                  n = Math.max(n, f),
                  o = Math.max(o, c);
              i[u] = new Array(f);

              for (var l = 0; l < i[u].length; l += 1) {
                i[u][l] = 255 & t.getBuffer()[l + e];
              }

              e += f;
              var s = m.getErrorCorrectPolynomial(c),
                  g = b(i[u], s.getLength() - 1).mod(s);
              a[u] = new Array(s.getLength() - 1);

              for (l = 0; l < a[u].length; l += 1) {
                var h = l + g.getLength() - a[u].length;
                a[u][l] = 0 <= h ? g.getAt(h) : 0;
              }
            }

            for (var d = 0, l = 0; l < r.length; l += 1) {
              d += r[l].totalCount;
            }

            for (var v = new Array(d), p = 0, l = 0; l < n; l += 1) {
              for (u = 0; u < r.length; u += 1) {
                l < i[u].length && (v[p] = i[u][l], p += 1);
              }
            }

            for (l = 0; l < o; l += 1) {
              for (u = 0; u < r.length; u += 1) {
                l < a[u].length && (v[p] = a[u][l], p += 1);
              }
            }

            return v;
          }(o, n);
        };

        h.addData = function (t, r) {
          var e = null;

          switch (r = r || "Byte") {
            case "Numeric":
              e = A(t);
              break;

            case "Alphanumeric":
              e = L(t);
              break;

            case "Byte":
              e = D(t);
              break;

            case "Kanji":
              e = _(t);
              break;

            default:
              throw "mode:" + r;
          }

          c.push(e), n = null;
        }, h.isDark = function (t, r) {
          if (t < 0 || s <= t || r < 0 || s <= r) throw t + "," + r;
          return l[t][r];
        }, h.getModuleCount = function () {
          return s;
        }, h.make = function () {
          if (u < 1) {
            for (var t = 1; t < 40; t++) {
              for (var r = S.getRSBlocks(t, f), e = M(), n = 0; n < c.length; n++) {
                var o = c[n];
                e.put(o.getMode(), 4), e.put(o.getLength(), m.getLengthInBits(o.getMode(), t)), o.write(e);
              }

              for (var i = 0, n = 0; n < r.length; n++) {
                i += r[n].dataCount;
              }

              if (e.getLengthInBits() <= 8 * i) break;
            }

            u = t;
          }

          a(!1, function () {
            for (var t = 0, r = 0, e = 0; e < 8; e += 1) {
              a(!0, e);
              var n = m.getLostPoint(h);
              (0 == e || n < t) && (t = n, r = e);
            }

            return r;
          }());
        }, h.createTableTag = function (t, r) {
          t = t || 2;
          var e = "";
          e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + (r = void 0 === r ? 4 * t : r) + "px;", e += '">', e += "<tbody>";

          for (var n = 0; n < h.getModuleCount(); n += 1) {
            e += "<tr>";

            for (var o = 0; o < h.getModuleCount(); o += 1) {
              e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + t + "px;", e += " height: " + t + "px;", e += " background-color: ", e += h.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
            }

            e += "</tr>";
          }

          return e += "</tbody>", e += "</table>";
        }, h.createSvgTag = function (t, r, e, n) {
          var o = {};
          "object" == _typeof(arguments[0]) && (t = (o = arguments[0]).cellSize, r = o.margin, e = o.alt, n = o.title), t = t || 2, r = void 0 === r ? 4 * t : r, (e = "string" == typeof e ? {
            text: e
          } : e || {}).text = e.text || null, e.id = e.text ? e.id || "qrcode-description" : null, (n = "string" == typeof n ? {
            text: n
          } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
          var i,
              a,
              u,
              f = h.getModuleCount() * t + 2 * r,
              c = "",
              l = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ";

          for (c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += o.scalable ? "" : ' width="' + f + 'px" height="' + f + 'px"', c += ' viewBox="0 0 ' + f + " " + f + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += n.text || e.text ? ' role="img" aria-labelledby="' + y([n.id, e.id].join(" ").trim()) + '"' : "", c += ">", c += n.text ? '<title id="' + y(n.id) + '">' + y(n.text) + "</title>" : "", c += e.text ? '<description id="' + y(e.id) + '">' + y(e.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < h.getModuleCount(); a += 1) {
            for (u = a * t + r, i = 0; i < h.getModuleCount(); i += 1) {
              h.isDark(a, i) && (c += "M" + (i * t + r) + "," + u + l);
            }
          }

          return c += '" stroke="transparent" fill="black"/>', c += "</svg>";
        }, h.createDataURL = function (o, t) {
          o = o || 2, t = void 0 === t ? 4 * o : t;
          var r = h.getModuleCount() * o + 2 * t,
              i = t,
              a = r - t;
          return P(r, r, function (t, r) {
            if (i <= t && t < a && i <= r && r < a) {
              var e = Math.floor((t - i) / o),
                  n = Math.floor((r - i) / o);
              return h.isDark(n, e) ? 0 : 1;
            }

            return 1;
          });
        }, h.createImgTag = function (t, r, e) {
          t = t || 2, r = void 0 === r ? 4 * t : r;
          var n = h.getModuleCount() * t + 2 * r,
              o = "";
          return o += "<img", o += ' src="', o += h.createDataURL(t, r), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', e && (o += ' alt="', o += y(e), o += '"'), o += "/>";
        };

        var y = function y(t) {
          for (var r = "", e = 0; e < t.length; e += 1) {
            var n = t.charAt(e);

            switch (n) {
              case "<":
                r += "&lt;";
                break;

              case ">":
                r += "&gt;";
                break;

              case "&":
                r += "&amp;";
                break;

              case '"':
                r += "&quot;";
                break;

              default:
                r += n;
            }
          }

          return r;
        };

        return h.createASCII = function (t, r) {
          if ((t = t || 1) < 2) return function (t) {
            t = void 0 === t ? 2 : t;

            for (var r, e, n, o, i = +h.getModuleCount() + 2 * t, a = t, u = i - t, f = {
              "██": "█",
              "█ ": "▀",
              " █": "▄",
              "  ": " "
            }, c = {
              "██": "▀",
              "█ ": "▀",
              " █": " ",
              "  ": " "
            }, l = "", s = 0; s < i; s += 2) {
              for (e = Math.floor(s - a), n = Math.floor(s + 1 - a), r = 0; r < i; r += 1) {
                o = "█", a <= r && r < u && a <= s && s < u && h.isDark(e, Math.floor(r - a)) && (o = " "), a <= r && r < u && a <= s + 1 && s + 1 < u && h.isDark(n, Math.floor(r - a)) ? o += " " : o += "█", l += t < 1 && u <= s + 1 ? c[o] : f[o];
              }

              l += "\n";
            }

            return i % 2 && 0 < t ? l.substring(0, l.length - i - 1) + Array(1 + i).join("▀") : l.substring(0, l.length - 1);
          }(r);
          --t, r = void 0 === r ? 2 * t : r;

          for (var e, n, o, i = h.getModuleCount() * t + 2 * r, a = r, u = i - r, f = Array(t + 1).join("██"), c = Array(t + 1).join("  "), l = "", s = "", g = 0; g < i; g += 1) {
            for (n = Math.floor((g - a) / t), s = "", e = 0; e < i; e += 1) {
              o = 1, a <= e && e < u && a <= g && g < u && h.isDark(n, Math.floor((e - a) / t)) && (o = 0), s += o ? f : c;
            }

            for (n = 0; n < t; n += 1) {
              l += s + "\n";
            }
          }

          return l.substring(0, l.length - 1);
        }, h.renderTo2dContext = function (t, r) {
          r = r || 2;

          for (var e = h.getModuleCount(), n = 0; n < e; n++) {
            for (var o = 0; o < e; o++) {
              t.fillStyle = h.isDark(n, o) ? "black" : "white", t.fillRect(n * r, o * r, r, r);
            }
          }
        }, h;
      }

      i.stringToBytes = (i.stringToBytesFuncs = {
        "default": function _default(t) {
          for (var r = [], e = 0; e < t.length; e += 1) {
            var n = t.charCodeAt(e);
            r.push(255 & n);
          }

          return r;
        }
      })["default"], i.createStringToBytes = function (u, f) {
        var i = function () {
          function t() {
            var t = r.read();
            if (-1 == t) throw "eof";
            return t;
          }

          for (var r = z(u), e = 0, n = {};;) {
            var o = r.read();
            if (-1 == o) break;
            var i = t(),
                a = t() << 8 | t();
            n[String.fromCharCode(o << 8 | i)] = a, e += 1;
          }

          if (e != f) throw e + " != " + f;
          return n;
        }(),
            a = "?".charCodeAt(0);

        return function (t) {
          for (var r = [], e = 0; e < t.length; e += 1) {
            var n,
                o = t.charCodeAt(e);
            o < 128 ? r.push(o) : "number" == typeof (n = i[t.charAt(e)]) ? (255 & n) == n ? r.push(n) : (r.push(n >>> 8), r.push(255 & n)) : r.push(a);
          }

          return r;
        };
      };
      var r,
          t,
          a = 1,
          u = 2,
          o = 4,
          f = 8,
          w = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      },
          e = 0,
          n = 1,
          c = 2,
          l = 3,
          s = 4,
          g = 5,
          h = 6,
          d = 7,
          m = (r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], (t = {}).getBCHTypeInfo = function (t) {
        for (var r = t << 10; 0 <= v(r) - v(1335);) {
          r ^= 1335 << v(r) - v(1335);
        }

        return 21522 ^ (t << 10 | r);
      }, t.getBCHTypeNumber = function (t) {
        for (var r = t << 12; 0 <= v(r) - v(7973);) {
          r ^= 7973 << v(r) - v(7973);
        }

        return t << 12 | r;
      }, t.getPatternPosition = function (t) {
        return r[t - 1];
      }, t.getMaskFunction = function (t) {
        switch (t) {
          case e:
            return function (t, r) {
              return (t + r) % 2 == 0;
            };

          case n:
            return function (t, r) {
              return t % 2 == 0;
            };

          case c:
            return function (t, r) {
              return r % 3 == 0;
            };

          case l:
            return function (t, r) {
              return (t + r) % 3 == 0;
            };

          case s:
            return function (t, r) {
              return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
            };

          case g:
            return function (t, r) {
              return t * r % 2 + t * r % 3 == 0;
            };

          case h:
            return function (t, r) {
              return (t * r % 2 + t * r % 3) % 2 == 0;
            };

          case d:
            return function (t, r) {
              return (t * r % 3 + (t + r) % 2) % 2 == 0;
            };

          default:
            throw "bad maskPattern:" + t;
        }
      }, t.getErrorCorrectPolynomial = function (t) {
        for (var r = b([1], 0), e = 0; e < t; e += 1) {
          r = r.multiply(b([1, p.gexp(e)], 0));
        }

        return r;
      }, t.getLengthInBits = function (t, r) {
        if (1 <= r && r < 10) switch (t) {
          case a:
            return 10;

          case u:
            return 9;

          case o:
          case f:
            return 8;

          default:
            throw "mode:" + t;
        } else if (r < 27) switch (t) {
          case a:
            return 12;

          case u:
            return 11;

          case o:
            return 16;

          case f:
            return 10;

          default:
            throw "mode:" + t;
        } else {
          if (!(r < 41)) throw "type:" + r;

          switch (t) {
            case a:
              return 14;

            case u:
              return 13;

            case o:
              return 16;

            case f:
              return 12;

            default:
              throw "mode:" + t;
          }
        }
      }, t.getLostPoint = function (t) {
        for (var r = t.getModuleCount(), e = 0, n = 0; n < r; n += 1) {
          for (var o = 0; o < r; o += 1) {
            for (var i = 0, a = t.isDark(n, o), u = -1; u <= 1; u += 1) {
              if (!(n + u < 0 || r <= n + u)) for (var f = -1; f <= 1; f += 1) {
                o + f < 0 || r <= o + f || 0 == u && 0 == f || a == t.isDark(n + u, o + f) && (i += 1);
              }
            }

            5 < i && (e += 3 + i - 5);
          }
        }

        for (n = 0; n < r - 1; n += 1) {
          for (o = 0; o < r - 1; o += 1) {
            var c = 0;
            t.isDark(n, o) && (c += 1), t.isDark(n + 1, o) && (c += 1), t.isDark(n, o + 1) && (c += 1), t.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3);
          }
        }

        for (n = 0; n < r; n += 1) {
          for (o = 0; o < r - 6; o += 1) {
            t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (e += 40);
          }
        }

        for (o = 0; o < r; o += 1) {
          for (n = 0; n < r - 6; n += 1) {
            t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (e += 40);
          }
        }

        for (var l = 0, o = 0; o < r; o += 1) {
          for (n = 0; n < r; n += 1) {
            t.isDark(n, o) && (l += 1);
          }
        }

        return e += Math.abs(100 * l / r / r - 50) / 5 * 10;
      }, t);

      function v(t) {
        for (var r = 0; 0 != t;) {
          r += 1, t >>>= 1;
        }

        return r;
      }

      var p = function () {
        for (var r = new Array(256), e = new Array(256), t = 0; t < 8; t += 1) {
          r[t] = 1 << t;
        }

        for (t = 8; t < 256; t += 1) {
          r[t] = r[t - 4] ^ r[t - 5] ^ r[t - 6] ^ r[t - 8];
        }

        for (t = 0; t < 255; t += 1) {
          e[r[t]] = t;
        }

        var n = {
          glog: function glog(t) {
            if (t < 1) throw "glog(" + t + ")";
            return e[t];
          },
          gexp: function gexp(t) {
            for (; t < 0;) {
              t += 255;
            }

            for (; 256 <= t;) {
              t -= 255;
            }

            return r[t];
          }
        };
        return n;
      }();

      function b(n, o) {
        if (void 0 === n.length) throw n.length + "/" + o;

        var r = function () {
          for (var t = 0; t < n.length && 0 == n[t];) {
            t += 1;
          }

          for (var r = new Array(n.length - t + o), e = 0; e < n.length - t; e += 1) {
            r[e] = n[e + t];
          }

          return r;
        }(),
            i = {
          getAt: function getAt(t) {
            return r[t];
          },
          getLength: function getLength() {
            return r.length;
          },
          multiply: function multiply(t) {
            for (var r = new Array(i.getLength() + t.getLength() - 1), e = 0; e < i.getLength(); e += 1) {
              for (var n = 0; n < t.getLength(); n += 1) {
                r[e + n] ^= p.gexp(p.glog(i.getAt(e)) + p.glog(t.getAt(n)));
              }
            }

            return b(r, 0);
          },
          mod: function mod(t) {
            if (i.getLength() - t.getLength() < 0) return i;

            for (var r = p.glog(i.getAt(0)) - p.glog(t.getAt(0)), e = new Array(i.getLength()), n = 0; n < i.getLength(); n += 1) {
              e[n] = i.getAt(n);
            }

            for (n = 0; n < t.getLength(); n += 1) {
              e[n] ^= p.gexp(p.glog(t.getAt(n)) + r);
            }

            return b(e, 0).mod(t);
          }
        };

        return i;
      }

      function y() {
        var e = [],
            o = {
          writeByte: function writeByte(t) {
            e.push(255 & t);
          },
          writeShort: function writeShort(t) {
            o.writeByte(t), o.writeByte(t >>> 8);
          },
          writeBytes: function writeBytes(t, r, e) {
            r = r || 0, e = e || t.length;

            for (var n = 0; n < e; n += 1) {
              o.writeByte(t[n + r]);
            }
          },
          writeString: function writeString(t) {
            for (var r = 0; r < t.length; r += 1) {
              o.writeByte(t.charCodeAt(r));
            }
          },
          toByteArray: function toByteArray() {
            return e;
          },
          toString: function toString() {
            var t = "";
            t += "[";

            for (var r = 0; r < e.length; r += 1) {
              0 < r && (t += ","), t += e[r];
            }

            return t += "]";
          }
        };
        return o;
      }

      function x() {
        function e(t) {
          a += String.fromCharCode(r(63 & t));
        }

        var n = 0,
            o = 0,
            i = 0,
            a = "",
            t = {},
            r = function r(t) {
          if (!(t < 0)) {
            if (t < 26) return 65 + t;
            if (t < 52) return t - 26 + 97;
            if (t < 62) return t - 52 + 48;
            if (62 == t) return 43;
            if (63 == t) return 47;
          }

          throw "n:" + t;
        };

        return t.writeByte = function (t) {
          for (n = n << 8 | 255 & t, o += 8, i += 1; 6 <= o;) {
            e(n >>> o - 6), o -= 6;
          }
        }, t.flush = function () {
          if (0 < o && (e(n << 6 - o), o = n = 0), i % 3 != 0) for (var t = 3 - i % 3, r = 0; r < t; r += 1) {
            a += "=";
          }
        }, t.toString = function () {
          return a;
        }, t;
      }

      function k(t, r) {
        var n = t,
            o = r,
            d = new Array(t * r),
            e = {
          setPixel: function setPixel(t, r, e) {
            d[r * n + t] = e;
          },
          write: function write(t) {
            t.writeString("GIF87a"), t.writeShort(n), t.writeShort(o), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(o), t.writeByte(0);
            var r = i(2);
            t.writeByte(2);

            for (var e = 0; 255 < r.length - e;) {
              t.writeByte(255), t.writeBytes(r, e, 255), e += 255;
            }

            t.writeByte(r.length - e), t.writeBytes(r, e, r.length - e), t.writeByte(0), t.writeString(";");
          }
        },
            i = function i(t) {
          for (var r = 1 << t, e = 1 + (1 << t), n = t + 1, o = v(), i = 0; i < r; i += 1) {
            o.add(String.fromCharCode(i));
          }

          o.add(String.fromCharCode(r)), o.add(String.fromCharCode(e));
          var a,
              u,
              f,
              c = y(),
              l = (a = c, f = u = 0, {
            write: function write(t, r) {
              if (t >>> r != 0) throw "length over";

              for (; 8 <= u + r;) {
                a.writeByte(255 & (t << u | f)), r -= 8 - u, t >>>= 8 - u, u = f = 0;
              }

              f |= t << u, u += r;
            },
            flush: function flush() {
              0 < u && a.writeByte(f);
            }
          });
          l.write(r, n);
          var s = 0,
              g = String.fromCharCode(d[s]);

          for (s += 1; s < d.length;) {
            var h = String.fromCharCode(d[s]);
            s += 1, o.contains(g + h) ? g += h : (l.write(o.indexOf(g), n), o.size() < 4095 && (o.size() == 1 << n && (n += 1), o.add(g + h)), g = h);
          }

          return l.write(o.indexOf(g), n), l.write(e, n), l.flush(), c.toByteArray();
        },
            v = function v() {
          var r = {},
              e = 0,
              n = {
            add: function add(t) {
              if (n.contains(t)) throw "dup key:" + t;
              r[t] = e, e += 1;
            },
            size: function size() {
              return e;
            },
            indexOf: function indexOf(t) {
              return r[t];
            },
            contains: function contains(t) {
              return void 0 !== r[t];
            }
          };
          return n;
        };

        return e;
      }

      var B,
          C,
          S = (B = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], (C = {}).getRSBlocks = function (t, r) {
        var e = function (t, r) {
          switch (r) {
            case w.L:
              return B[4 * (t - 1) + 0];

            case w.M:
              return B[4 * (t - 1) + 1];

            case w.Q:
              return B[4 * (t - 1) + 2];

            case w.H:
              return B[4 * (t - 1) + 3];

            default:
              return;
          }
        }(t, r);

        if (void 0 === e) throw "bad rs block @ typeNumber:" + t + "/errorCorrectionLevel:" + r;

        for (var n, o, i = e.length / 3, a = [], u = 0; u < i; u += 1) {
          for (var f = e[3 * u + 0], c = e[3 * u + 1], l = e[3 * u + 2], s = 0; s < f; s += 1) {
            a.push((n = l, o = void 0, (o = {}).totalCount = c, o.dataCount = n, o));
          }
        }

        return a;
      }, C),
          M = function M() {
        var e = [],
            n = 0,
            o = {
          getBuffer: function getBuffer() {
            return e;
          },
          getAt: function getAt(t) {
            var r = Math.floor(t / 8);
            return 1 == (e[r] >>> 7 - t % 8 & 1);
          },
          put: function put(t, r) {
            for (var e = 0; e < r; e += 1) {
              o.putBit(1 == (t >>> r - e - 1 & 1));
            }
          },
          getLengthInBits: function getLengthInBits() {
            return n;
          },
          putBit: function putBit(t) {
            var r = Math.floor(n / 8);
            e.length <= r && e.push(0), t && (e[r] |= 128 >>> n % 8), n += 1;
          }
        };
        return o;
      },
          A = function A(t) {
        var r = a,
            n = t,
            e = {
          getMode: function getMode() {
            return r;
          },
          getLength: function getLength(t) {
            return n.length;
          },
          write: function write(t) {
            for (var r = n, e = 0; e + 2 < r.length;) {
              t.put(o(r.substring(e, e + 3)), 10), e += 3;
            }

            e < r.length && (r.length - e == 1 ? t.put(o(r.substring(e, e + 1)), 4) : r.length - e == 2 && t.put(o(r.substring(e, e + 2)), 7));
          }
        },
            o = function o(t) {
          for (var r = 0, e = 0; e < t.length; e += 1) {
            r = 10 * r + i(t.charAt(e));
          }

          return r;
        },
            i = function i(t) {
          if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
          throw "illegal char :" + t;
        };

        return e;
      },
          L = function L(t) {
        var r = u,
            n = t,
            e = {
          getMode: function getMode() {
            return r;
          },
          getLength: function getLength(t) {
            return n.length;
          },
          write: function write(t) {
            for (var r = n, e = 0; e + 1 < r.length;) {
              t.put(45 * o(r.charAt(e)) + o(r.charAt(e + 1)), 11), e += 2;
            }

            e < r.length && t.put(o(r.charAt(e)), 6);
          }
        },
            o = function o(t) {
          if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
          if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;

          switch (t) {
            case " ":
              return 36;

            case "$":
              return 37;

            case "%":
              return 38;

            case "*":
              return 39;

            case "+":
              return 40;

            case "-":
              return 41;

            case ".":
              return 42;

            case "/":
              return 43;

            case ":":
              return 44;

            default:
              throw "illegal char :" + t;
          }
        };

        return e;
      },
          D = function D(t) {
        var r = o,
            e = i.stringToBytes(t),
            n = {
          getMode: function getMode() {
            return r;
          },
          getLength: function getLength(t) {
            return e.length;
          },
          write: function write(t) {
            for (var r = 0; r < e.length; r += 1) {
              t.put(e[r], 8);
            }
          }
        };
        return n;
      },
          _ = function _(t) {
        var r = f,
            e = i.stringToBytesFuncs.SJIS;
        if (!e) throw "sjis not supported.";
        !function () {
          var t = e("友");
          if (2 != t.length || 38726 != (t[0] << 8 | t[1])) throw "sjis not supported.";
        }();
        var o = e(t),
            n = {
          getMode: function getMode() {
            return r;
          },
          getLength: function getLength(t) {
            return ~~(o.length / 2);
          },
          write: function write(t) {
            for (var r = o, e = 0; e + 1 < r.length;) {
              var n = (255 & r[e]) << 8 | 255 & r[e + 1];
              if (33088 <= n && n <= 40956) n -= 33088;else {
                if (!(57408 <= n && n <= 60351)) throw "illegal char at " + (e + 1) + "/" + n;
                n -= 49472;
              }
              n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13), e += 2;
            }

            if (e < r.length) throw "illegal char at " + (e + 1);
          }
        };
        return n;
      },
          z = function z(t) {
        var e = t,
            n = 0,
            o = 0,
            i = 0,
            r = {
          read: function read() {
            for (; i < 8;) {
              if (n >= e.length) {
                if (0 == i) return -1;
                throw "unexpected end of file./" + i;
              }

              var t = e.charAt(n);
              if (n += 1, "=" == t) return i = 0, -1;
              t.match(/^\s$/) || (o = o << 6 | a(t.charCodeAt(0)), i += 6);
            }

            var r = o >>> i - 8 & 255;
            return i -= 8, r;
          }
        },
            a = function a(t) {
          if (65 <= t && t <= 90) return t - 65;
          if (97 <= t && t <= 122) return t - 97 + 26;
          if (48 <= t && t <= 57) return t - 48 + 52;
          if (43 == t) return 62;
          if (47 == t) return 63;
          throw "c:" + t;
        };

        return r;
      },
          P = function P(t, r, e) {
        for (var n = k(t, r), o = 0; o < r; o += 1) {
          for (var i = 0; i < t; i += 1) {
            n.setPixel(i, o, e(i, o));
          }
        }

        var a = y();
        n.write(a);

        for (var u = x(), f = a.toByteArray(), c = 0; c < f.length; c += 1) {
          u.writeByte(f[c]);
        }

        return u.flush(), "data:image/gif;base64," + u;
      };

      return i;
    }();

    a.stringToBytesFuncs["UTF-8"] = function (t) {
      return function (t) {
        for (var r = [], e = 0; e < t.length; e++) {
          var n = t.charCodeAt(e);
          n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || 57344 <= n ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(e)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
        }

        return r;
      }(t);
    }, o = [], void 0 === (i = "function" == typeof (n = function n() {
      return a;
    }) ? n.apply(r, o) : n) || (t.exports = i);
  }, function (t, r, e) {
    function c(t, r, e, n, o, i) {
      t.is_dark(o, i) && r.rect(i * n, o * n, n, n);
    }

    function a(t, r, e) {
      var n, o;
      n = r, (o = e).back && (n.fillStyle = o.back, n.fillRect(0, 0, o.size, o.size)), function (t, r, e) {
        if (t) {
          var n = 0 < e.rounded && e.rounded <= 100 ? l : c,
              o = t.module_count,
              i = e.size / o,
              a = 0;
          e.crisp && (i = Math.floor(i), a = Math.floor((e.size - i * o) / 2)), r.translate(a, a), r.beginPath();

          for (var u = 0; u < o; u += 1) {
            for (var f = 0; f < o; f += 1) {
              n(t, r, e, i, u, f);
            }
          }

          r.fillStyle = e.fill, r.fill(), r.translate(-a, -a);
        }
      }(t, r, e), i(r, e);
    }

    var u = e(5),
        l = e(6),
        i = e(7);

    t.exports = function (t, r, e) {
      var n = r.ratio || u.dpr,
          o = u.create_canvas(r.size, n),
          i = o.getContext("2d");
      return i.scale(n, n), a(t, i, r), e ? u.canvas_to_img(o) : o;
    };
  }, function (t, r) {
    function e(t, r) {
      return t.getAttribute(r);
    }

    function n(r, e) {
      return Object.keys(e || {}).forEach(function (t) {
        r.setAttribute(t, e[t]);
      }), r;
    }

    function o(t, r) {
      return n(a.createElement(t), r);
    }

    var i = window,
        a = i.document,
        u = i.devicePixelRatio || 1,
        f = "http://www.w3.org/2000/svg";
    t.exports = {
      dpr: u,
      SVG_NS: f,
      get_attr: e,
      create_el: o,
      create_svg_el: function create_svg_el(t, r) {
        return n(a.createElementNS(f, t), r);
      },
      create_canvas: function create_canvas(t, r) {
        var e = o("canvas", {
          width: t * r,
          height: t * r
        });
        return e.style.width = "".concat(t, "px"), e.style.height = "".concat(t, "px"), e;
      },
      canvas_to_img: function canvas_to_img(t) {
        var r = o("img", {
          crossOrigin: "anonymous",
          src: t.toDataURL("image/png"),
          width: e(t, "width"),
          height: e(t, "height")
        });
        return r.style.width = t.style.width, r.style.height = t.style.height, r;
      }
    };
  }, function (t, r) {
    t.exports = function (t, r, e, n, o, i) {
      var _a,
          u,
          f,
          c,
          l,
          s,
          g,
          h,
          d,
          v,
          p,
          y,
          w,
          m,
          b,
          x,
          k,
          B,
          C,
          S,
          M = i * n,
          A = o * n,
          L = M + n,
          D = A + n,
          _ = .005 * e.rounded * n,
          z = t.is_dark,
          P = o - 1,
          T = o + 1,
          j = i - 1,
          I = i + 1,
          O = z(o, i),
          R = z(P, j),
          F = z(P, i),
          H = z(P, I),
          N = z(o, I),
          E = z(T, I),
          Y = z(T, i),
          q = z(T, j),
          U = z(o, j),
          W = (_a = r, {
        m: function m(t, r) {
          return _a.moveTo(t, r), this;
        },
        l: function l(t, r) {
          return _a.lineTo(t, r), this;
        },
        a: function a() {
          return _a.arcTo.apply(_a, arguments), this;
        }
      });

      O ? (p = W, y = M, w = A, m = L, b = D, x = _, B = !F && !N, C = !Y && !N, S = !Y && !U, (k = !F && !U) ? p.m(y + x, w) : p.m(y, w), B ? p.l(m - x, w).a(m, w, m, b, x) : p.l(m, w), C ? p.l(m, b - x).a(m, b, y, b, x) : p.l(m, b), S ? p.l(y + x, b).a(y, b, y, w, x) : p.l(y, b), k ? p.l(y, w + x).a(y, w, m, w, x) : p.l(y, w)) : (u = W, f = M, c = A, l = L, s = D, g = _, h = F && N && H, d = Y && N && E, v = Y && U && q, F && U && R && u.m(f + g, c).l(f, c).l(f, c + g).a(f, c, f + g, c, g), h && u.m(l - g, c).l(l, c).l(l, c + g).a(l, c, l - g, c, g), d && u.m(l - g, s).l(l, s).l(l, s - g).a(l, s, l - g, s, g), v && u.m(f + g, s).l(f, s).l(f, s - g).a(f, s, f + g, s, g));
    };
  }, function (t, r) {
    t.exports = function (t, r) {
      var e,
          n,
          o,
          i,
          a,
          u,
          f,
          c,
          l,
          s,
          g,
          h = r.mode;
      "label" === h ? function (t, r) {
        var e = r.size,
            n = "bold " + .01 * r.mSize * e + "px " + r.fontname;
        t.strokeStyle = r.back, t.lineWidth = .01 * r.mSize * e * .1, t.fillStyle = r.fontcolor, t.font = n;
        var o = t.measureText(r.label).width,
            i = .01 * r.mSize,
            a = (1 - o / e) * r.mPosX * .01 * e,
            u = (1 - i) * r.mPosY * .01 * e + .75 * r.mSize * .01 * e;
        t.strokeText(r.label, a, u), t.fillText(r.label, a, u);
      }(t, r) : "image" === h && (e = t, o = (n = r).size, i = n.image.naturalWidth || 1, a = n.image.naturalHeight || 1, u = .01 * n.mSize, c = (1 - (f = u * i / a)) * n.mPosX * .01 * o, l = (1 - u) * n.mPosY * .01 * o, s = f * o, g = u * o, e.drawImage(n.image, c, l, s, g));
    };
  }, function (t, r, y) {
    function J(n) {
      function o(t) {
        return Math.round(10 * t) / 10;
      }

      function i(t) {
        return Math.round(10 * t) / 10 + n.o;
      }

      return {
        m: function m(t, r) {
          return n.p += "M ".concat(i(t), " ").concat(i(r), " "), this;
        },
        l: function l(t, r) {
          return n.p += "L ".concat(i(t), " ").concat(i(r), " "), this;
        },
        a: function a(t, r, e) {
          return n.p += "A ".concat(o(e), " ").concat(o(e), " 0 0 1 ").concat(i(t), " ").concat(i(r), " "), this;
        }
      };
    }

    var e = y(5),
        w = e.SVG_NS,
        m = e.get_attr,
        b = e.create_svg_el;

    t.exports = function (t, r) {
      var e,
          n,
          o,
          i,
          a,
          u,
          f,
          c,
          l,
          s,
          g,
          h,
          d = r.size,
          v = r.mode,
          p = b("svg", {
        xmlns: w,
        width: d,
        height: d,
        viewBox: "0 0 ".concat(d, " ").concat(d)
      });
      return p.style.width = "".concat(d, "px"), p.style.height = "".concat(d, "px"), r.back && p.appendChild(b("rect", {
        x: 0,
        y: 0,
        width: d,
        height: d,
        fill: r.back
      })), p.appendChild(b("path", {
        d: function (t, r) {
          if (!t) return "";
          var e = {
            p: "",
            o: 0
          },
              n = t.module_count,
              o = r.size / n;
          r.crisp && (o = Math.floor(o), e.o = Math.floor((r.size - o * n) / 2));

          for (var i, a, u, f, c, l, s, g, h, d, v, p, y, w, m, b, x, k, B, C, S, M, A, L, D, _, z, P, T, j, I, O, R, F, H, N, E, Y, q, U, W, X, V, G = J(e), Q = 0; Q < n; Q += 1) {
            for (var $ = 0; $ < n; $ += 1) {
              i = t, a = G, V = X = W = U = q = Y = E = N = H = F = R = O = I = j = T = P = z = _ = D = L = A = M = S = C = B = k = x = b = m = w = y = p = v = d = h = g = s = l = void 0, z = (D = (c = $) * (u = o)) + u, P = (_ = (f = Q) * u) + u, T = .005 * r.rounded * u, j = i.is_dark, I = f - 1, O = f + 1, R = c - 1, F = c + 1, H = j(f, c), N = j(I, R), E = j(I, c), Y = j(I, F), q = j(f, F), U = j(O, F), W = j(O, c), X = j(O, R), V = j(f, R), H ? (m = a, b = D, x = _, k = z, B = P, C = T, M = !E && !q, A = !W && !q, L = !W && !V, (S = !E && !V) ? m.m(b + C, x) : m.m(b, x), M ? m.l(k - C, x).a(k, x + C, C) : m.l(k, x), A ? m.l(k, B - C).a(k - C, B, C) : m.l(k, B), L ? m.l(b + C, B).a(b, B - C, C) : m.l(b, B), S ? m.l(b, x + C).a(b + C, x, C) : m.l(b, x)) : (l = a, s = D, g = _, h = z, d = P, v = T, p = E && q && Y, y = W && q && U, w = W && V && X, E && V && N && l.m(s + v, g).l(s, g).l(s, g + v).a(s + v, g, v), p && l.m(h, g + v).l(h, g).l(h - v, g).a(h, g + v, v), y && l.m(h - v, d).l(h, d).l(h, d - v).a(h - v, d, v), w && l.m(s, d - v).l(s, d).l(s + v, d).a(s, d - v, v));
            }
          }

          return e.p;
        }(t, r),
        fill: r.fill
      })), "label" === v ? function (t, r) {
        var e = r.size,
            n = "bold " + .01 * r.mSize * e + "px " + r.fontname,
            o = y(5),
            i = r.ratio || o.dpr,
            a = o.create_canvas(e, i).getContext("2d");
        a.strokeStyle = r.back, a.lineWidth = .01 * r.mSize * e * .1, a.fillStyle = r.fontcolor, a.font = n;
        var u = a.measureText(r.label).width,
            f = .01 * r.mSize,
            c = (1 - u / e) * r.mPosX * .01 * e,
            l = (1 - f) * r.mPosY * .01 * e + .75 * r.mSize * .01 * e,
            s = b("text", {
          x: c,
          y: l
        });
        Object.assign(s.style, {
          font: n,
          fill: r.fontcolor,
          "paint-order": "stroke",
          stroke: r.back,
          "stroke-width": a.lineWidth
        }), s.textContent = r.label, t.appendChild(s);
      }(p, r) : "image" === v && (e = p, o = (n = r).size, i = n.image.naturalWidth || 1, a = n.image.naturalHeight || 1, u = .01 * n.mSize, c = (1 - (f = u * i / a)) * n.mPosX * .01 * o, l = (1 - u) * n.mPosY * .01 * o, s = f * o, g = u * o, h = b("image", {
        href: m(n.image, "src"),
        x: c,
        y: l,
        width: s,
        height: g
      }), e.appendChild(h)), p;
    };
  }], o.c = n, o.d = function (t, r, e) {
    o.o(t, r) || Object.defineProperty(t, r, {
      enumerable: !0,
      get: e
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (r, t) {
    if (1 & t && (r = o(r)), 8 & t) return r;
    if (4 & t && "object" == _typeof(r) && r && r.__esModule) return r;
    var e = Object.create(null);
    if (o.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: r
    }), 2 & t && "string" != typeof r) for (var n in r) {
      o.d(e, n, function (t) {
        return r[t];
      }.bind(null, n));
    }
    return e;
  }, o.n = function (t) {
    var r = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(r, "a", r), r;
  }, o.o = function (t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }, o.p = "", o(o.s = 0);

  function o(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }

  var e, n;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    each = _require.each,
    isStr = _require.isStr,
    dom = _require.dom;

var server = __webpack_require__(20);

var event = __webpack_require__(26);

var format = __webpack_require__(27);

var langs = __webpack_require__(28);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var win = global.window;
var settings = Object.assign({
  enabled: false,
  lang: 'en',
  useBrowserLang: true
}, allsettings.l10n);
var defaultTranslations = {
  isoCode: 'en',
  lang: 'english',
  dateFormat: 'YYYY-MM-DD HH:mm',
  details: 'details',
  download: 'download',
  empty: 'empty',
  files: 'files',
  filter: 'filter',
  folders: 'folders',
  grid: 'grid',
  icons: 'icons',
  language: 'Language',
  lastModified: 'Last modified',
  name: 'Name',
  noMatch: 'no match',
  parentDirectory: 'Parent Directory',
  search: 'search',
  size: 'Size',
  tree: 'Tree',
  view: 'View'
};
var blockTpl = "<div class=\"block\">\n            <h1 class=\"l10n-language\">Language</h1>\n            <div class=\"select\">\n                <select id=\"langs\"/>\n            </div>\n        </div>";
var optionTpl = '<option/>';
var storekey = 'ext/l10n';
var loaded = {
  en: Object.assign({}, defaultTranslations)
};
var currentLang = loaded.en;

var update = function update(lang) {
  if (lang) {
    currentLang = lang;
  }

  var sel = 'selected';
  dom('#langs option').rmAttr(sel).rmProp(sel);
  dom('#langs .' + currentLang.isoCode).attr(sel, '').prop(sel, true);
  each(currentLang, function (value, key) {
    dom('.l10n-' + key).text(value);
    dom('.l10n_ph-' + key).attr('placeholder', value);
  });
  format.setDefaultDateFormat(currentLang.dateFormat);
  dom('#items .item').each(function (el) {
    dom(el).find('.date').text(format.formatDate(el._item.time));
  });
};

var loadLanguage = function loadLanguage(isoCode) {
  if (loaded[isoCode]) {
    return Promise.resolve(loaded[isoCode]);
  }

  return server.request({
    action: 'get',
    l10n: [isoCode]
  }).then(function (response) {
    loaded[isoCode] = Object.assign({}, defaultTranslations, response.l10n && response.l10n[isoCode], {
      isoCode: isoCode
    });
    return loaded[isoCode];
  });
};

var localize = function localize(languages, isoCode, useBrowserLang) {
  var storedIsoCode = store.get(storekey);

  if (languages[storedIsoCode]) {
    isoCode = storedIsoCode;
  } else if (useBrowserLang) {
    var browserLang = win.navigator.language || win.navigator.browserLanguage;

    if (browserLang) {
      if (languages[browserLang]) {
        isoCode = browserLang;
      } else if (browserLang.length > 2 && languages[browserLang.substr(0, 2)]) {
        isoCode = browserLang.substr(0, 2);
      }
    }
  }

  if (!languages[isoCode]) {
    isoCode = 'en';
  }

  loadLanguage(isoCode).then(update);
};

var initLangSelector = function initLangSelector(languages) {
  var $block = dom(blockTpl);
  var $select = $block.find('select').on('change', function (ev) {
    var isoCode = ev.target.value;
    store.put(storekey, isoCode);
    localize(languages, isoCode, false);
  });
  each(languages, function (language, isoCode) {
    dom(optionTpl).attr('value', isoCode).addCls(isoCode).text(isoCode + ' - ' + (isStr(language) ? language : language.lang)).appTo($select);
  });
  $block.appTo('#sidebar');
};

var init = function init() {
  if (settings.enabled) {
    initLangSelector(langs);
  }

  event.sub('view.changed', function () {
    localize(langs, settings.lang, settings.useBrowserLang);
  });
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    dom = _require.dom,
    awaitLoad = _require.awaitLoad;

var event = __webpack_require__(26);

var allsettings = __webpack_require__(30);

var win = global.window;
var settings = Object.assign({
  enabled: false,
  baseURL: 'not-set',
  idSite: 0
}, allsettings['piwik-analytics']);

var init = function init() {
  if (!settings.enabled) {
    return;
  } // reference: http://piwik.org/docs/javascript-tracking/


  var pkBaseURL = (win.location.protocol === 'https:' ? 'https://' : 'http://') + settings.baseURL + '/';
  var queue = [];
  var piwikTracker = null;
  dom('<script></script>').attr('src', pkBaseURL + 'piwik.js').appTo('body');
  awaitLoad().then(function () {
    piwikTracker = win.Piwik && win.Piwik.getTracker(pkBaseURL + 'piwik.php', settings.idSite);

    if (piwikTracker) {
      piwikTracker.enableLinkTracking();

      while (queue.length) {
        piwikTracker.trackPageView(queue.shift());
      }
    }
  });
  event.sub('location.changed', function (item) {
    var title = item.getCrumb().map(function (i) {
      return i.label;
    }).join(' > ');

    if (piwikTracker) {
      piwikTracker.trackPageView(title);
    } else {
      queue.push(title);
    }
  });
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(68);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    each = _require.each,
    isFn = _require.isFn,
    dom = _require.dom,
    includes = _require.includes,
    compact = _require.compact;

var event = __webpack_require__(26);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var win = global.window;
var settings = Object.assign({
  enabled: true
}, allsettings.preview);
var overlayTpl = "<div id=\"pv-overlay\">\n            <div id=\"pv-container\"></div>\n            <div id=\"pv-spinner\"><img class=\"back\"/><img class=\"spinner\" src=\"".concat(resource.image('spinner'), "\"/></div>\n            <div id=\"pv-prev-area\" class=\"hof\"><img src=\"").concat(resource.image('preview-prev'), "\"/></div>\n            <div id=\"pv-next-area\" class=\"hof\"><img src=\"").concat(resource.image('preview-next'), "\"/></div>\n            <div id=\"pv-bottombar\" class=\"clearfix hof\">\n                <ul id=\"pv-buttons\">\n                    <li id=\"pv-bar-close\" class=\"bar-right bar-button\"><img src=\"").concat(resource.image('preview-close'), "\"/></li>\n                    <li id=\"pv-bar-raw\" class=\"bar-right\"><a class=\"bar-button\" target=\"_blank\"><img src=\"").concat(resource.image('preview-raw'), "\"/></a></li>\n                    <li id=\"pv-bar-fullscreen\" class=\"bar-right bar-button\"><img src=\"").concat(resource.image('preview-fullscreen'), "\"/></li>\n                    <li id=\"pv-bar-next\" class=\"bar-right bar-button\"><img src=\"").concat(resource.image('preview-next'), "\"/></li>\n                    <li id=\"pv-bar-idx\" class=\"bar-right bar-label\"></li>\n                    <li id=\"pv-bar-prev\" class=\"bar-right bar-button\"><img src=\"").concat(resource.image('preview-prev'), "\"/></li>\n                </ul>\n            </div>\n        </div>");
var storekey = 'ext/preview';
var isFullscreen = store.get(storekey) || false;
var userAliveTimeoutId = null;
var spinnerIsVisible = false;
var spinnerTimeoutId = null;
var session = null;

var centerContent = function centerContent() {
  var $container = dom('#pv-container');
  var container = $container[0];
  var content = $container.children()[0];

  if (!container || !content) {
    return;
  }

  var containerW = container.offsetWidth;
  var containerH = container.offsetHeight;
  var contentW = content.offsetWidth;
  var contentH = content.offsetHeight;
  dom(content).css({
    left: (containerW - contentW) * 0.5 + 'px',
    top: (containerH - contentH) * 0.5 + 'px'
  });
};

var updateGui = function updateGui() {
  var docEl = win.document.documentElement;
  var winWidth = docEl.clientWidth;
  var winHeight = docEl.clientHeight;
  var margin = isFullscreen ? 0 : 20;
  var barHeight = isFullscreen ? 0 : 48;
  dom('#pv-container').css({
    width: winWidth - 2 * margin + 'px',
    height: winHeight - 2 * margin - barHeight + 'px',
    left: margin + 'px',
    top: margin + 'px'
  });
  dom('#pv-spinner').css({
    left: winWidth * 0.5 + 'px',
    top: winHeight * 0.5 + 'px'
  });

  if (isFullscreen) {
    dom('#pv-overlay').addCls('fullscreen');
    dom('#pv-bar-fullscreen').find('img').attr('src', resource.image('preview-no-fullscreen'));
  } else {
    dom('#pv-overlay').rmCls('fullscreen');
    dom('#pv-bar-fullscreen').find('img').attr('src', resource.image('preview-fullscreen'));
  }

  centerContent();

  if (isFn(session && session.adjust)) {
    session.adjust();
  }
};

var setIndex = function setIndex(idx, total) {
  dom('#pv-bar-idx').text("".concat(idx, "/").concat(total)).show();
};

var setRawLink = function setRawLink(href) {
  dom('#pv-bar-raw').show().find('a').attr('href', href);
};

var setLabels = function setLabels(labels) {
  dom('#pv-buttons .bar-left').rm();
  each(labels, function (label) {
    dom('<li></li>').addCls('bar-left').addCls('bar-label').text(label).appTo('#pv-buttons');
  });
};

var userAlive = function userAlive() {
  var $hof = dom('#pv-overlay .hof');
  win.clearTimeout(userAliveTimeoutId);
  $hof.show();

  if (isFullscreen) {
    userAliveTimeoutId = win.setTimeout(function () {
      return $hof.hide();
    }, 2000);
  }
};

var next = function next() {
  return session && session.moveIdx(1);
};

var prev = function prev() {
  return session && session.moveIdx(-1);
};

var toggleFullscreen = function toggleFullscreen() {
  isFullscreen = !isFullscreen;
  store.put(storekey, isFullscreen);
  userAlive();
  updateGui();
};

var dropEvent = function dropEvent(ev) {
  ev.stopPropagation();
  ev.preventDefault();
};

var onKeydown = function onKeydown(ev) {
  var key = ev.keyCode;

  if (key === 27) {
    // esc
    dropEvent(ev);
    exit(); // eslint-disable-line no-use-before-define
  } else if (key === 8 || key === 37) {
    // backspace, left
    dropEvent(ev);
    prev();
  } else if (key === 13 || key === 32 || key === 39) {
    // enter, space, right
    dropEvent(ev);
    next();
  } else if (key === 70) {
    // f
    dropEvent(ev);
    toggleFullscreen();
  }
};

var enter = function enter() {
  setLabels([]);
  dom('#pv-container').clr();
  dom('#pv-overlay').show();
  dom(win).on('keydown', onKeydown);
  updateGui();
};

var exit = function exit() {
  setLabels([]);
  dom('#pv-container').clr();
  dom('#pv-overlay').hide();
  dom(win).off('keydown', onKeydown);
};

var showSpinner = function showSpinner(show, src, delay) {
  win.clearTimeout(spinnerTimeoutId);
  var $spinner = dom('#pv-spinner');

  if (!show) {
    spinnerIsVisible = false;
    $spinner.hide();
    return;
  }

  if (!spinnerIsVisible && delay) {
    spinnerTimeoutId = win.setTimeout(function () {
      return showSpinner(true, src);
    }, delay);
    return;
  }

  var $back = $spinner.find('.back');

  if (src) {
    $back.attr('src', src).show();
  } else {
    $back.hide();
  }

  spinnerIsVisible = true;
  $spinner.show();
};

var Session = function Session(items, idx, load, adjust) {
  var inst = Object.assign(Object.create(Session.prototype), {
    items: items,
    load: load,
    adjust: adjust
  });
  inst.setIdx(idx);
  return inst;
};

Session.prototype = {
  setIdx: function setIdx(idx) {
    var _this = this;

    this.idx = (idx + this.items.length) % this.items.length;
    this.item = this.items[this.idx];
    setIndex(this.idx + 1, this.items.length);
    setRawLink(this.item.absHref);
    setLabels([this.item.label]);
    var item = this.item;
    Promise.resolve().then(function () {
      each(dom('#pv-container *'), function (el) {
        if (typeof el.unload === 'function') {
          el.unload();
        }
      });
      dom('#pv-container').hide().clr();
      showSpinner(true, item.thumbSquare || item.icon, 200);
    }).then(function () {
      return _this.load(item);
    }) // delay for testing
    // .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
    .then(function ($content) {
      if (item === _this.item) {
        dom('#pv-container').clr().app($content).show();
        showSpinner(false);
        updateGui();
      }
    });
  },
  moveIdx: function moveIdx(delta) {
    this.setIdx(this.idx + delta);
  }
};

var register = function register(types, load, adjust) {
  var initItem = function initItem(item) {
    if (item.$view && includes(types, item.type)) {
      item.$view.find('a').on('click', function (ev) {
        ev.preventDefault();
        var matchedItems = compact(dom('#items .item').map(function (el) {
          var matchedItem = el._item;
          return includes(types, matchedItem.type) ? matchedItem : null;
        }));
        session = Session(matchedItems, matchedItems.indexOf(item), load, adjust);
        enter();
      });
    }
  };

  event.sub('view.changed', function (added) {
    return each(added, initItem);
  });
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  dom(overlayTpl).hide().appTo('body').on('keydown', onKeydown).on('mousemove', userAlive).on('mousedown', userAlive).on('click', function (ev) {
    if (ev.target.id === 'pv-overlay' || ev.target.id === 'pv-container') {
      exit();
    }
  }).on('mousedown', dropEvent).on('mousemove', dropEvent).on('keydown', dropEvent).on('keypress', dropEvent);
  dom('#pv-spinner').hide();
  dom('#pv-bar-prev, #pv-prev-area').on('click', prev);
  dom('#pv-bar-next, #pv-next-area').on('click', next);
  dom('#pv-bar-close').on('click', exit);
  dom('#pv-bar-fullscreen').on('click', toggleFullscreen);
  dom(win).on('resize', updateGui).on('load', updateGui);
};

module.exports = {
  setLabels: setLabels,
  register: register,

  get item() {
    return session && session.item;
  }

};
init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var format = __webpack_require__(27);

var allsettings = __webpack_require__(30);

var preview = __webpack_require__(63);

var settings = Object.assign({
  enabled: false,
  autoplay: true,
  types: []
}, allsettings['preview-aud']);
var tpl = '<audio id="pv-content-aud"/>';

var updateGui = function updateGui() {
  var el = dom('#pv-content-aud')[0];

  if (!el) {
    return;
  }

  preview.setLabels([preview.item.label, format.formatDate(el.duration * 1000, 'm:ss')]);
};

var addUnloadFn = function addUnloadFn(el) {
  el.unload = function () {
    el.pause();
    el.src = '';
    el.load();
  };
};

var load = function load(item) {
  return new Promise(function (resolve) {
    var $el = dom(tpl).on('loadedmetadata', function () {
      return resolve($el);
    }).attr('controls', 'controls');

    if (settings.autoplay) {
      $el.attr('autoplay', 'autoplay');
    }

    addUnloadFn($el[0]);
    $el.attr('src', item.absHref);
  });
};

var init = function init() {
  if (settings.enabled) {
    preview.register(settings.types, load, updateGui);
  }
};

init();

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var server = __webpack_require__(20);

var allsettings = __webpack_require__(30);

var preview = __webpack_require__(63);

var settings = Object.assign({
  enabled: false,
  size: null,
  types: []
}, allsettings['preview-img']);
var tpl = '<img id="pv-content-img"/>';

var updateGui = function updateGui() {
  var el = dom('#pv-content-img')[0];

  if (!el) {
    return;
  }

  var elW = el.offsetWidth;
  var labels = [preview.item.label];

  if (!settings.size) {
    var elNW = el.naturalWidth;
    var elNH = el.naturalHeight;
    labels.push(String(elNW) + 'x' + String(elNH));
    labels.push(String((100 * elW / elNW).toFixed(0)) + '%');
  }

  preview.setLabels(labels);
};

var requestSample = function requestSample(href) {
  return server.request({
    action: 'get',
    thumbs: [{
      type: 'img',
      href: href,
      width: settings.size,
      height: 0
    }]
  }).then(function (json) {
    return json && json.thumbs && json.thumbs[0] ? json.thumbs[0] : null;
  });
};

var load = function load(item) {
  return Promise.resolve(item.absHref).then(function (href) {
    return settings.size ? requestSample(href) : href;
  }).then(function (href) {
    return new Promise(function (resolve) {
      var $el = dom(tpl).on('load', function () {
        return resolve($el);
      }).attr('src', href);
    });
  });
};

var init = function init() {
  if (settings.enabled) {
    preview.register(settings.types, load, updateGui);
  }
};

init();

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var lolight = __webpack_require__(67);

var marked = __webpack_require__(52);

var _require = __webpack_require__(21),
    keys = _require.keys,
    dom = _require.dom;

var allsettings = __webpack_require__(30);

var preview = __webpack_require__(63);

var win = global.window;
var XHR = win.XMLHttpRequest;
var settings = Object.assign({
  enabled: false,
  styles: {}
}, allsettings['preview-txt']);
var preTpl = '<pre id="pv-content-txt"></pre>';
var divTpl = '<div id="pv-content-txt"></div>';

var updateGui = function updateGui() {
  var el = dom('#pv-content-txt')[0];

  if (!el) {
    return;
  }

  var container = dom('#pv-container')[0];
  el.style.height = container.offsetHeight + 'px';
  preview.setLabels([preview.item.label, preview.item.size + ' bytes']);
};

var requestTextContent = function requestTextContent(href) {
  return new Promise(function (resolve, reject) {
    var xhr = new XHR();

    var callback = function callback() {
      if (xhr.readyState === XHR.DONE) {
        try {
          resolve(xhr.responseText || '');
        } catch (err) {
          reject(String(err));
        }
      }
    };

    xhr.open('GET', href, true);
    xhr.onreadystatechange = callback;
    xhr.send();
  });
};

var load = function load(item) {
  return requestTextContent(item.absHref)["catch"](function (err) {
    return '[request failed] ' + err;
  }).then(function (content) {
    var style = settings.styles[item.type];

    if (style === 1) {
      return dom(preTpl).text(content);
    } else if (style === 2) {
      return dom(divTpl).html(marked(content));
    } else if (style === 3) {
      var $code = dom('<code></code>').text(content);
      win.setTimeout(function () {
        lolight.el($code[0]);
      }, content.length < 20000 ? 0 : 500);
      return dom(preTpl).app($code);
    }

    return dom(divTpl).text(content);
  });
};

var init = function init() {
  if (settings.enabled) {
    preview.register(keys(settings.styles), load, updateGui);
  }
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lolight v1.4.0 - https://larsjung.de/lolight/ */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  function t(e) {
    if ("string" != typeof e) throw new Error("tok: no string");

    for (var t = [], n = u.length, o = !1; e;) {
      for (var r = 0; r < n; r += 1) {
        var i = u[r][1].exec(e);

        if (i && 0 === i.index) {
          var a = u[r][0];

          if ("rex" !== a || !o) {
            var l = i[0];
            a === s && c.test(l) && (a = "key"), "spc" === a ? 0 <= l.indexOf("\n") && (o = !1) : o = a === f || a === s, e = e.slice(l.length), t.push([a, l]);
            break;
          }
        }
      }
    }

    return t;
  }

  function e(e, t) {
    if ("undefined" != typeof document) t(document);else if (e) throw new Error("no doc");
  }

  function n(o) {
    e(!0, function (n) {
      var e = t(o.textContent);
      o.innerHTML = "", e.forEach(function (e) {
        var t = n.createElement("span");
        t.className = "ll-" + e[0], t.textContent = e[1], o.appendChild(t);
      });
    });
  }

  function o(t) {
    e(!0, function (e) {
      [].forEach.call(e.querySelectorAll(t || ".lolight"), function (e) {
        n(e);
      });
    });
  }

  var r = "_nam#2196f3}_num#ec407a}_str#43a047}_rex#ef6c00}_pct#666}_key#555;font-weight:bold}_com#aaa;font-style:italic}".replace(/_/g, ".ll-").replace(/#/g, "{color:#"),
      c = /^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/,
      i = "com",
      s = "nam",
      f = "num",
      u = [[f, /#([0-9a-f]{6}|[0-9a-f]{3})\b/], [i, /(\/\/|#).*?(?=\n|$)/], [i, /\/\*[\s\S]*?\*\//], [i, /<!--[\s\S]*?-->/], ["rex", /\/(\\\/|[^\n])*?\//], ["str", /(['"`])(\\\1|[\s\S])*?\1/], [f, /[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?/], ["pct", /[\\.,:;+\-*\/=<>()[\]{}|?!&@~]/], ["spc", /\s+/], [s, /[\w$]+/], ["unk", /./]];
  return e(!1, function (e) {
    var t = e.querySelector("head"),
        n = e.createElement("style");
    n.textContent = r, t.insertBefore(n, t.firstChild), /^(i|c|loade)/.test(e.readyState) ? o() : e.addEventListener("DOMContentLoaded", function () {
      o();
    });
  }), o.tok = t, o.el = n, o;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var allsettings = __webpack_require__(30);

var preview = __webpack_require__(63);

var settings = Object.assign({
  enabled: false,
  autoplay: true,
  types: []
}, allsettings['preview-vid']);
var tpl = '<video id="pv-content-vid"/>';

var updateGui = function updateGui() {
  var el = dom('#pv-content-vid')[0];

  if (!el) {
    return;
  }

  var elW = el.offsetWidth;
  var elVW = el.videoWidth;
  var elVH = el.videoHeight;
  preview.setLabels([preview.item.label, String(elVW) + 'x' + String(elVH), String((100 * elW / elVW).toFixed(0)) + '%']);
};

var addUnloadFn = function addUnloadFn(el) {
  el.unload = function () {
    el.pause();
    el.src = '';
    el.load();
  };
};

var load = function load(item) {
  return new Promise(function (resolve) {
    var $el = dom(tpl).on('loadedmetadata', function () {
      return resolve($el);
    }).attr('controls', 'controls');

    if (settings.autoplay) {
      $el.attr('autoplay', 'autoplay');
    }

    addUnloadFn($el[0]);
    $el.attr('src', item.absHref);
  });
};

var init = function init() {
  if (settings.enabled) {
    preview.register(settings.types, load, updateGui);
  }
};

init();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    map = _require.map,
    debounce = _require.debounce,
    parsePattern = _require.parsePattern,
    dom = _require.dom;

var server = __webpack_require__(20);

var event = __webpack_require__(26);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var Item = __webpack_require__(33);

var view = __webpack_require__(55);

var settings = Object.assign({
  enabled: false,
  advanced: false,
  debounceTime: 300,
  ignorecase: true
}, allsettings.search);
var tpl = "<div id=\"search\" class=\"tool\">\n            <img src=\"".concat(resource.image('search'), "\" alt=\"search\"/>\n            <input class=\"l10n_ph-search\" type=\"text\" value=\"\"/>\n        </div>");
var inputIsVisible = false;
var prevPattern = '';
var $search;
var $input;

var search = function search() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (pattern === prevPattern) {
    return;
  }

  prevPattern = pattern;

  if (!pattern) {
    view.setLocation();
    return;
  }

  $search.addCls('pending');
  server.request({
    action: 'get',
    search: {
      href: location.getAbsHref(),
      pattern: pattern,
      ignorecase: settings.ignorecase
    }
  }).then(function (response) {
    $search.rmCls('pending');
    view.setHint('noMatch');
    view.setItems(map(response.search, function (item) {
      return Item.get(item);
    }));
  });
};

var update = function update() {
  if (inputIsVisible) {
    $search.addCls('active');
    $input[0].focus();
    search(parsePattern($input.val(), settings.advanced));
  } else {
    search();
    $search.rmCls('active');
  }
};

var toggle = function toggle() {
  inputIsVisible = !inputIsVisible;
  update();
};

var reset = function reset() {
  inputIsVisible = false;
  $input.val('');
  update();
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  $search = dom(tpl).appTo('#toolbar');
  $input = $search.find('input');
  $search.find('img').on('click', toggle);
  $input.on('keyup', debounce(update, settings.debounceTime));
  event.sub('location.changed', reset);
};

init();

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var event = __webpack_require__(26);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var doc = global.window.document;
var settings = Object.assign({
  enabled: false,
  clickndrag: false,
  checkboxes: false
}, allsettings.select);
var selectorTpl = "<span class=\"selector\">\n            <img src=\"".concat(resource.image('selected'), "\" alt=\"selected\"/>\n        </span>");
var $document = dom(doc);
var $html = dom('html');
var $selectionRect = dom('<div id="selection-rect"></div>');
var mmax = Math.max;
var mmin = Math.min;
var mabs = Math.abs;
var dragStartX = 0;
var dragStartY = 0;

var publish = function publish() {
  var items = dom('#items .item.selected').map(function (el) {
    return el._item;
  });
  event.pub('selection', items);
};

var elRect = function elRect(el) {
  var $el = dom(el);

  if (!$el.length || $el.isHidden()) {
    return null;
  }

  var rect = $el[0].getBoundingClientRect();
  return {
    l: rect.left,
    t: rect.top,
    r: rect.right,
    b: rect.bottom
  };
};

var rectsAreEqual = function rectsAreEqual(r1, r2) {
  return !!r1 && !!r2 && r1.l === r2.l && r1.t === r2.t && r1.r === r2.r && r1.b === r2.b;
};

var updateRects = function updateRects($items) {
  var el0 = $items[0];

  if (!rectsAreEqual(elRect(el0), el0 && el0._rect)) {
    $items.each(function (el) {
      el._rect = elRect(el);
    });
  }
};

var rectsDoOverlap = function rectsDoOverlap(rect1, rect2) {
  if (!rect1 || !rect2) {
    return false;
  }

  var maxLeft = mmax(rect1.l, rect2.l);
  var minRight = mmin(rect1.r, rect2.r);
  var maxTop = mmax(rect1.t, rect2.t);
  var minBottom = mmin(rect1.b, rect2.b);
  return maxLeft <= minRight && maxTop <= minBottom;
};

var getPointer = function getPointer(ev) {
  var content = dom('#content')[0];
  var r = elRect(content);
  var x = ev.pageX - r.l + content.scrollLeft;
  var y = ev.pageY - r.t + content.scrollTop;
  return {
    x: x,
    y: y
  };
};

var selectionUpdate = function selectionUpdate(ev) {
  var _getPointer = getPointer(ev),
      x = _getPointer.x,
      y = _getPointer.y;

  var left = mmin(dragStartX, x);
  var top = mmin(dragStartY, y);
  var width = mabs(dragStartX - x);
  var height = mabs(dragStartY - y);
  var isCtrlPressed = ev.ctrlKey || ev.metaKey;

  if (!isCtrlPressed && width < 4 && height < 4) {
    return;
  }

  if (!isCtrlPressed) {
    dom('#items .item').rmCls('selected');
  }

  $html.addCls('drag-select');
  $selectionRect.show().css({
    left: left + 'px',
    top: top + 'px',
    width: width + 'px',
    height: height + 'px'
  });
  var selRect = elRect($selectionRect);
  var $items = dom('#items .item:not(.folder-parent)');
  updateRects($items);
  $items.rmCls('selecting').each(function (el) {
    if (rectsDoOverlap(selRect, el._rect)) {
      dom(el).addCls('selecting');
    }
  });
};

var selectionEnd = function selectionEnd(ev) {
  $document.off('mousemove', selectionUpdate).off('mouseup', selectionEnd);
  selectionUpdate(ev);
  dom('#items .item.selecting.selected').rmCls('selecting').rmCls('selected');
  dom('#items .item.selecting').rmCls('selecting').addCls('selected');
  publish();
  $html.rmCls('drag-select');
  $selectionRect.hide();
  ev.stopPropagation();
  ev.preventDefault();
};

var selectionStart = function selectionStart(ev) {
  // only start on left button, don't block scrollbar
  if (ev.button !== 0 || ev.offsetX >= dom('#content')[0].offsetWidth - 16) {
    return;
  }

  var _getPointer2 = getPointer(ev),
      x = _getPointer2.x,
      y = _getPointer2.y;

  dragStartX = x;
  dragStartY = y;
  $document.on('mousemove', selectionUpdate).on('mouseup', selectionEnd);
  selectionUpdate(ev);
  ev.preventDefault();
};

var closestItem = function closestItem(el) {
  while (!el._item && el.parentNode) {
    el = el.parentNode;
  }

  return el._item;
};

var onSelectorClick = function onSelectorClick(ev) {
  closestItem(ev.target).$view.tglCls('selected');
  publish();
  ev.stopPropagation();
  ev.preventDefault();
};

var addCheckbox = function addCheckbox(item) {
  if (item.$view && !item.isCurrentParentFolder()) {
    dom(selectorTpl).on('click', onSelectorClick).appTo(item.$view.find('a'));
  }
};

var onViewChanged = function onViewChanged(added, removed) {
  if (settings.checkboxes) {
    each(added, addCheckbox);
  }

  each(removed, function (item) {
    if (item.$view) {
      item.$view.rmCls('selected');
    }
  });
  publish();
};

var init = function init() {
  if (!settings.enabled || !settings.clickndrag && !settings.checkboxes) {
    return;
  }

  event.sub('view.changed', onViewChanged);

  if (settings.clickndrag) {
    $selectionRect.hide().appTo('#content');
    dom('#content').on('mousedown', selectionStart).on('drag', function (ev) {
      return ev.preventDefault();
    }).on('dragstart', function (ev) {
      return ev.preventDefault();
    });
  }
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    toArray = _require.toArray,
    dom = _require.dom,
    cmp = _require.cmp,
    naturalCmp = _require.naturalCmp;

var event = __webpack_require__(26);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var settings = Object.assign({
  enabled: false,
  column: 0,
  reverse: false,
  ignorecase: true,
  natural: false,
  folders: 0
}, allsettings.sort);
var storekey = 'ext/sort';
var tpl = "<img src=\"".concat(resource.image('sort'), "\" class=\"sort\" alt=\"sort order\"/>");

var getTypeOrder = function getTypeOrder(item) {
  return item.isFolder() ? settings.folders : 1;
};

var columnProps = {
  0: 'label',
  1: 'time',
  2: 'size'
};
var columnClasses = {
  0: 'label',
  1: 'date',
  2: 'size'
};

var cmpFn = function cmpFn(prop, reverse, ignorecase, natural) {
  return function (el1, el2) {
    var item1 = el1._item;
    var item2 = el2._item;
    var res = getTypeOrder(item1) - getTypeOrder(item2);

    if (res !== 0) {
      return res;
    }

    var val1 = item1[prop];
    var val2 = item2[prop];

    if (isNaN(val1) || isNaN(val2)) {
      val1 = String(val1);
      val2 = String(val2);

      if (ignorecase) {
        val1 = val1.toLowerCase();
        val2 = val2.toLowerCase();
      }
    }

    res = natural ? naturalCmp(val1, val2) : cmp(val1, val2);
    return reverse ? -res : res;
  };
};

var sortItems = function sortItems(column, reverse) {
  var $headers = dom('#items li.header a');
  var $header = dom('#items li.header a.' + columnClasses[column]);
  var fn = cmpFn(columnProps[column], reverse, settings.ignorecase, settings.natural);
  store.put(storekey, {
    column: column,
    reverse: reverse
  });
  $headers.rmCls('ascending').rmCls('descending');
  $header.addCls(reverse ? 'descending' : 'ascending');
  dom(toArray(dom('#items .item:not(.folder-parent)')).sort(fn)).appTo('#items');
};

var onContentChanged = function onContentChanged() {
  var order = store.get(storekey);
  var column = order && order.column || settings.column;
  var reverse = order && order.reverse || settings.reverse;
  sortItems(column, reverse);
};

var addToggles = function addToggles() {
  var $header = dom('#items li.header');
  each(columnClasses, function (cls, idx) {
    var pos = idx === '0' ? 'app' : 'pre';
    $header.find('a.' + cls)[pos](tpl).on('click', function (ev) {
      sortItems(idx, dom(ev.currentTarget).hasCls('ascending'));
      ev.preventDefault();
    });
  });
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  addToggles();
  event.sub('view.changed', onContentChanged);
};

init();

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    map = _require.map,
    includes = _require.includes;

var server = __webpack_require__(20);

var event = __webpack_require__(26);

var allsettings = __webpack_require__(30);

var settings = Object.assign({
  enabled: false,
  img: ['img-bmp', 'img-gif', 'img-ico', 'img-jpg', 'img-png'],
  mov: ['vid-avi', 'vid-flv', 'vid-mkv', 'vid-mov', 'vid-mp4', 'vid-mpg', 'vid-webm'],
  doc: ['x-pdf', 'x-ps'],
  delay: 1,
  size: 100,
  exif: false,
  chunksize: 20
}, allsettings.thumbnails);
var landscapeRatio = 4 / 3;

var queueItem = function queueItem(queue, item) {
  var type = null;

  if (includes(settings.img, item.type)) {
    type = 'img';
  } else if (includes(settings.mov, item.type)) {
    type = 'mov';
  } else if (includes(settings.doc, item.type)) {
    type = 'doc';
  } else {
    return;
  }

  if (item.thumbSquare) {
    item.$view.find('.icon.square img').addCls('thumb').attr('src', item.thumbSquare);
  } else {
    queue.push({
      type: type,
      href: item.absHref,
      ratio: 1,
      callback: function callback(src) {
        if (src && item.$view) {
          item.thumbSquare = src;
          item.$view.find('.icon.square img').addCls('thumb').attr('src', src);
        }
      }
    });
  }

  if (item.thumbRational) {
    item.$view.find('.icon.landscape img').addCls('thumb').attr('src', item.thumbRational);
  } else {
    queue.push({
      type: type,
      href: item.absHref,
      ratio: landscapeRatio,
      callback: function callback(src) {
        if (src && item.$view) {
          item.thumbRational = src;
          item.$view.find('.icon.landscape img').addCls('thumb').attr('src', src);
        }
      }
    });
  }
};

var requestQueue = function requestQueue(queue) {
  var thumbs = map(queue, function (req) {
    return {
      type: req.type,
      href: req.href,
      width: Math.round(settings.size * req.ratio),
      height: settings.size
    };
  });
  return server.request({
    action: 'get',
    thumbs: thumbs
  }).then(function (json) {
    each(queue, function (req, idx) {
      req.callback(json && json.thumbs ? json.thumbs[idx] : null);
    });
  });
};

var breakAndRequestQueue = function breakAndRequestQueue(queue) {
  var len = queue.length;
  var chunksize = settings.chunksize;
  var p = Promise.resolve();

  var _loop = function _loop(i) {
    p = p.then(function () {
      return requestQueue(queue.slice(i, i + chunksize));
    });
  };

  for (var i = 0; i < len; i += chunksize) {
    _loop(i);
  }
};

var handleItems = function handleItems(items) {
  var queue = [];
  each(items, function (item) {
    return queueItem(queue, item);
  });
  breakAndRequestQueue(queue);
};

var onViewChanged = function onViewChanged(added) {
  setTimeout(function () {
    return handleItems(added);
  }, settings.delay);
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  event.sub('view.changed', onViewChanged);
};

init();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var event = __webpack_require__(26);

var allsettings = __webpack_require__(30);

var doc = global.window.document;
var settings = Object.assign({
  enabled: false
}, allsettings.title);

var onLocationChanged = function onLocationChanged(item) {
  var labels = item.getCrumb().map(function (i) {
    return i.label;
  });
  var title = labels.join(' > ');

  if (labels.length > 1) {
    title = labels[labels.length - 1] + ' - ' + title;
  }

  doc.title = title;
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  event.sub('location.changed', onLocationChanged);
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom,
    cmp = _require.cmp,
    naturalCmp = _require.naturalCmp;

var event = __webpack_require__(26);

var location = __webpack_require__(29);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var settings = Object.assign({
  enabled: false,
  show: true,
  maxSubfolders: 50,
  naturalSort: false,
  ignorecase: true
}, allsettings.tree);
var itemTpl = "<div class=\"item folder\">\n            <span class=\"indicator\">\n                <img src=\"".concat(resource.image('tree-indicator'), "\"/>\n            </span>\n            <a>\n                <span class=\"icon\"><img src=\"").concat(resource.icon('folder'), "\"/></span>\n                <span class=\"label\"></span>\n            </a>\n        </span>");
var settingsTpl = "<div class=\"block\">\n            <h1 class=\"l10n-tree\">Tree</h1>\n            <div id=\"view-tree\" class=\"button view\">\n                <img src=\"".concat(resource.image('tree-toggle'), "\" alt=\"view-tree\"/>\n            </div>\n        </div>");
var storekey = 'ext/tree';

var closestItem = function closestItem(el) {
  while (!el._item && el.parentNode) {
    el = el.parentNode;
  }

  return el._item;
};

var onIndicatorClick = function onIndicatorClick(ev) {
  var item = closestItem(ev.target);

  if (item._treeState === 'unknown') {
    item.fetchContent().then(function () {
      item._treeState = 'open';
      update(item); // eslint-disable-line no-use-before-define
    });
  } else if (item._treeState === 'open') {
    item._treeState = 'closed';

    item._$tree.rmCls('open').addCls('closed');
  } else if (item._treeState === 'closed') {
    item._treeState = 'open';

    item._$tree.rmCls('closed').addCls('open');
  }
};

var cmpItems = function cmpItems(item1, item2) {
  var val1 = item1.label;
  var val2 = item2.label;

  if (settings.ignorecase) {
    val1 = val1.toLowerCase();
    val2 = val2.toLowerCase();
  }

  return settings.naturalSort ? naturalCmp(val1, val2) : cmp(val1, val2);
};

var update = function update(item) {
  var subfolders = item.getSubfolders();
  var subLen = subfolders.length;
  var subMax = settings.maxSubfolders;
  var $html = dom(itemTpl);
  $html.find('.indicator').on('click', onIndicatorClick);
  $html.find('.label').text(item.label);
  location.setLink($html.find('a'), item);

  if (item.isCurrentFolder()) {
    $html.addCls('active');
  }

  if (!item.isManaged()) {
    $html.find('.icon img').attr('src', resource.icon('folder-page'));
  } // indicator


  item._treeState = item._treeState || 'unknown';

  if (!item.isManaged()) {
    item._treeState = 'none';
  } else if (item.isContentFetched && subLen === 0) {
    item._treeState = 'none';
  }

  $html.addCls(item._treeState); // subfolders

  if (subLen) {
    var $ul = dom('<div class="content"></div>').appTo($html);
    subfolders.sort(cmpItems);
    each(subfolders.slice(0, subMax), function (e) {
      return $ul.app(update(e));
    });

    if (subLen > subMax) {
      $ul.app("<div class=\"summary\">\u2026 ".concat(subLen - subMax, " more subfolders</div>"));
    }
  }

  if (item._$tree) {
    item._$tree.rpl($html);
  }

  item._$tree = $html;
  $html[0]._item = item;
  return $html;
};

var fetchTree = function fetchTree(item) {
  item._treeState = 'open';
  return item.fetchContent().then(function () {
    if (item.parent) {
      return fetchTree(item.parent);
    }

    return item;
  });
};

var updateSettings = function updateSettings() {
  if (store.get(storekey)) {
    dom('#view-tree').addCls('active');
    dom('#tree').show();
  } else {
    dom('#view-tree').rmCls('active');
    dom('#tree').hide();
  }
};

var onLocationChanged = function onLocationChanged(item) {
  fetchTree(item).then(function (root) {
    dom('#tree').clr().app(update(root));
    updateSettings();
  });
};

var init = function init() {
  if (!settings.enabled) {
    return;
  }

  dom('<div id="tree"></div>').hide().appTo('#mainrow');
  dom(settingsTpl).appTo('#sidebar').find('#view-tree').on('click', function (ev) {
    store.put(storekey, !store.get(storekey));
    updateSettings();
    event.pub('resize');
    ev.preventDefault();
  }); // ensure stored value is boolean, otherwise set default

  if (typeof store.get(storekey) !== 'boolean') {
    store.put(storekey, settings.show);
  }

  updateSettings();
  event.sub('location.changed', onLocationChanged);
};

init();

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom,
    awaitReady = _require.awaitReady;

var name = dom('script[data-module]').attr('data-module');
var query = {
  action: 'get',
  setup: true,
  options: true,
  types: true
};

if (name === 'index') {
  query.theme = true;
  query.langs = true;
} else if (name === 'info') {
  query.refresh = true;
} else {
  throw new Error("no-main-module: '".concat(name, "'"));
}

awaitReady().then(function () {
  return __webpack_require__(76)("./".concat(name));
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 77,
	"./index": 77,
	"./index.js": 77,
	"./info": 80,
	"./info.js": 80
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 76;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(78);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(69);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(74);

var href = global.window.document.location.href;

__webpack_require__(29).setLocation(href, true);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    each = _require.each,
    dom = _require.dom;

var event = __webpack_require__(26);

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var sidebar = __webpack_require__(79);

var base = __webpack_require__(32);

var view = __webpack_require__(55);

var settings = Object.assign({
  modeToggle: false
}, allsettings.view);
var settingsTpl = '<div id="viewmode-settings" class="block"><h1 class="l10n-view">View</h1></div>';
var modeTpl = "<div id=\"viewmode-[MODE]\" class=\"button mode\">\n            <img src=\"".concat(resource.image('view-[MODE]'), "\" alt=\"viewmode-[MODE]\"/>\n        </div>");
var sizeTpl = '<input id="viewmode-size" type="range" min="0" max="0" value="0">';
var toggleTpl = "<div id=\"viewmode-toggle\" class=\"tool\">\n            <img alt=\"viewmode\"/>\n        </div>";
var modes;
var sizes;

var onChanged = function onChanged(mode, size) {
  dom('#viewmode-settings .mode').rmCls('active');
  dom('#viewmode-' + mode).addCls('active');
  dom('#viewmode-size').val(sizes.indexOf(size));

  if (settings.modeToggle === 'next') {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
  }

  dom('#viewmode-toggle img').attr('src', resource.image('view-' + mode));
};

var addSettings = function addSettings() {
  if (modes.length < 2 && sizes.length < 2) {
    return;
  }

  var $viewBlock = dom(settingsTpl);

  if (modes.length > 1) {
    each(modes, function (mode) {
      dom(modeTpl.replace(/\[MODE\]/g, mode)).on('click', function () {
        view.setMode(mode);
      }).appTo($viewBlock);
    });
  }

  if (sizes.length > 1) {
    var max = sizes.length - 1;
    dom(sizeTpl).attr('max', max).on('input', function (ev) {
      return view.setSize(sizes[ev.target.valueAsNumber]);
    }).on('change', function (ev) {
      return view.setSize(sizes[ev.target.valueAsNumber]);
    }).appTo($viewBlock);
  }

  $viewBlock.appTo(sidebar.$el);
};

var onToggle = function onToggle() {
  var mode = view.getMode();
  var nextIdx = (modes.indexOf(mode) + 1) % modes.length;
  var nextMode = modes[nextIdx];
  view.setMode(nextMode);
};

var addToggle = function addToggle() {
  if (settings.modeToggle && modes.length > 1) {
    dom(toggleTpl).on('click', onToggle).appTo(base.$toolbar);
  }
};

var init = function init() {
  modes = view.getModes();
  sizes = view.getSizes();
  addSettings();
  addToggle();
  onChanged(view.getMode(), view.getSize());
  event.sub('view.mode.changed', onChanged);
};

init();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(21),
    dom = _require.dom;

var resource = __webpack_require__(46);

var allsettings = __webpack_require__(30);

var store = __webpack_require__(47);

var base = __webpack_require__(32);

var settings = Object.assign({
  disableSidebar: false
}, allsettings.view);
var storekey = 'sidebarIsVisible';
var sidebarTpl = '<div id="sidebar"></div>';
var toggleTpl = "<div id=\"sidebar-toggle\" class=\"tool\">\n            <img alt=\"sidebar\"/>\n        </div>";

var init = function init() {
  var $sidebar = dom(sidebarTpl).hide();
  var $toggle = dom(toggleTpl);
  var $img = $toggle.find('img');

  var update = function update(toggle) {
    var isVisible = store.get(storekey);

    if (toggle) {
      isVisible = !isVisible;
      store.put(storekey, isVisible);
    }

    if (isVisible) {
      $toggle.addCls('active');
      $img.attr('src', resource.image('back'));
      $sidebar.show();
    } else {
      $toggle.rmCls('active');
      $img.attr('src', resource.image('sidebar'));
      $sidebar.hide();
    }
  };

  if (!settings.disableSidebar) {
    $sidebar.appTo(base.$mainrow);
    $toggle.appTo(base.$toolbar).on('click', function () {
      return update(true);
    });
    update();
  }

  return {
    $el: $sidebar
  };
};

module.exports = init();

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _require = __webpack_require__(21),
    dom = _require.dom;

var config = __webpack_require__(19);

var server = __webpack_require__(20);

var resource = __webpack_require__(46);

var testsTpl = '<ul id="tests"></ul>';
var testTpl = "<li class=\"test\">\n            <span class=\"label\"></span>\n            <span class=\"result\"></span>\n            <div class=\"info\"></div>\n        </li>";
var loginTpl = "<div id=\"login-wrapper\">\n            <input id=\"pass\" type=\"password\" placeholder=\"password\"/>\n            <span id=\"login\">login</span>\n            <span id=\"logout\">logout</span>\n            <div id=\"hint\">\n                The preset password is the empty string, just click login.\n                Change it in '_h5ai/private/conf/options.json'.\n            </div>\n        </div>";
var supportTpl = "<div id=\"support\">\n            Show your support with a donation!\n            <div class=\"paypal\">\n                <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_blank\">\n                    <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\"/>\n                    <input type=\"hidden\" name=\"hosted_button_id\" value=\"8WSPKWT7YBTSQ\"/>\n                    <input type=\"image\" src=\"".concat(resource.image('paypal'), "\" name=\"submit\" alt=\"PayPal\"/>\n                </form>\n            </div>\n        </div>");
var setup = config.setup;

var addTest = function addTest(label, info, passed, result) {
  var $test = dom(testTpl).appTo('#tests');
  $test.find('.label').text(label);
  $test.find('.result').addCls(passed ? 'passed' : 'failed').text(result ? result : passed ? 'yes' : 'no');
  $test.find('.info').html(info);
};

var addTests = function addTests() {
  if (!setup.AS_ADMIN) {
    return;
  }

  dom(testsTpl).appTo('#content');
  addTest('h5ai version', 'Only green if this is an official h5ai release', /^\d+\.\d+\.\d+$/.test(setup.VERSION), setup.VERSION);
  addTest('Index file found', 'Add <code>' + setup.INDEX_HREF + '</code> to your index file list', setup.INDEX_HREF);
  addTest('Options parsable', 'File <code>options.json</code> is readable and syntax is correct', config.options !== null);
  addTest('Types parsable', 'File <code>types.json</code> is readable and syntax is correct', config.types !== null);
  addTest('Server software', 'Server is one of apache, lighttpd, nginx or cherokee', setup.HAS_SERVER, setup.SERVER_NAME + ' ' + setup.SERVER_VERSION);
  addTest('PHP version', 'PHP version &gt;= ' + setup.MIN_PHP_VERSION, true, setup.PHP_VERSION);
  addTest('PHP arch', '64-bit required to correctly display file/folder sizes &gt; ~2GB', setup.PHP_ARCH === '64-bit', setup.PHP_ARCH);
  addTest('Public Cache directory', 'Web server has write access', setup.HAS_WRITABLE_CACHE_PUB);
  addTest('Private Cache directory', 'Web server has write access', setup.HAS_WRITABLE_CACHE_PRV);
  addTest('Image thumbs', 'PHP GD extension with JPEG support available', setup.HAS_PHP_JPEG);
  addTest('Use EXIF thumbs', 'PHP EXIF extension available', setup.HAS_PHP_EXIF);
  addTest('Movie thumbs', 'Command line program <code>avconv</code> or <code>ffmpeg</code> available', setup.HAS_CMD_AVCONV || setup.HAS_CMD_FFMPEG);
  addTest('PDF thumbs', 'Command line program <code>convert</code> or <code>gm</code> available', setup.HAS_CMD_CONVERT || setup.HAS_CMD_GM);
  addTest('Shell tar', 'Command line program <code>tar</code> available', setup.HAS_CMD_TAR);
  addTest('Shell zip', 'Command line program <code>zip</code> available', setup.HAS_CMD_ZIP);
  addTest('Shell du', 'Command line program <code>du</code> available', setup.HAS_CMD_DU);
};

var reload = function reload() {
  global.window.location.reload();
};

var onLogin = function onLogin() {
  server.request({
    action: 'login',
    pass: dom('#pass').val()
  }).then(reload);
};

var onLogout = function onLogout() {
  server.request({
    action: 'logout'
  }).then(reload);
};

var onKeydown = function onKeydown(ev) {
  if (ev.which === 13) {
    onLogin();
  }
};

var addSupport = function addSupport() {
  dom(supportTpl).appTo('#content');
};

var addLogin = function addLogin() {
  dom(loginTpl).appTo('#content');

  if (setup.AS_ADMIN) {
    dom('#pass').rm();
    dom('#login').rm();
    dom('#logout').on('click', onLogout);
  } else {
    dom('#pass').on('keydown', onKeydown)[0].focus();
    dom('#login').on('click', onLogin);
    dom('#logout').rm();
  }

  if (config.options.hasCustomPasshash) {
    dom('#hint').rm();
  }
};

var init = function init() {
  addSupport();
  addLogin();
  addTests();
};

init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(3),
    test = _require.test,
    assert = _require.assert;

var reqlib = __webpack_require__(17);

var format = reqlib('core/format');
test('core.format', function () {
  assert.equal(_typeof(format), 'object');
  assert.deepEqual(Object.keys(format).sort(), ['setDefaultMetric', 'formatSize', 'setDefaultDateFormat', 'formatDate'].sort());
  assert.equal(_typeof(format.setDefaultMetric), 'function');
  assert.equal(_typeof(format.formatSize), 'function');
  assert.equal(_typeof(format.setDefaultDateFormat), 'function');
  assert.equal(_typeof(format.formatDate), 'function');
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(3),
    test = _require.test,
    assert = _require.assert,
    insp = _require.insp;

var reqlib = __webpack_require__(17);

var _reqlib = reqlib('util'),
    naturalCmp = _reqlib.naturalCmp;

test('util.naturalCmp()', function () {
  assert.equal(_typeof(naturalCmp), 'function', 'is function');
  ['-1', '0', '00', '000', '001', '01', '02', '1', '3', 'a0', 'a00', 'a1', 'a2', 'a 0', 'a 00', 'a 000', 'a 01', 'a 1', 'a 2', 'a 3', 'a.1', 'a.1.0', 'a.1.1', 'a.1.1.0', 'a.1.10', 'z'].forEach(function (b, idx, arr) {
    if (idx === 0) {
      return;
    }

    var a = arr[idx - 1];
    assert.equal(naturalCmp(a, b), -1, "fix#".concat(idx, " - ").concat(insp(a), " < ").concat(insp(b)));
  });
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(3),
    test = _require.test,
    assert = _require.assert,
    insp = _require.insp;

var reqlib = __webpack_require__(17);

var _reqlib = reqlib('util'),
    parsePattern = _reqlib.parsePattern;

test('util.parsePattern()', function () {
  assert.equal(_typeof(parsePattern), 'function', 'is function');
  [['', false, ''], [' ', false, '\\ '], ['a', false, 'a'], ['ä', false, 'ä'], ['á', false, 'á'], ['*', false, '\\*'], ['ab', false, 'ab'], ['rea', false, 'rea'], ['re:', false, 're:'], ['re:a', false, 're:a'], ['a b', false, 'a\\ b'], ['ab c', false, 'ab\\ c'], [' a ', false, '\\ a\\ '], ['', true, ''], [' ', true, ''], ['a', true, 'a'], ['ä', true, 'ä'], ['á', true, 'á'], ['*', true, '\\*'], ['ab', true, 'a.*?b'], ['rea', true, 'r.*?e.*?a'], [' re:', true, 'r.*?e.*?:'], ['are:', true, 'a.*?r.*?e.*?:'], ['re:', true, ''], ['re:a', true, 'a'], ['a b', true, 'a|b'], ['ab c', true, 'a.*?b|c'], [' a ', true, 'a']].forEach(function (_ref, idx) {
    var _ref2 = _slicedToArray(_ref, 3),
        pattern = _ref2[0],
        advanced = _ref2[1],
        exp = _ref2[2];

    assert.equal(parsePattern(pattern, advanced), exp, "fix#".concat(idx, " - (").concat(insp(pattern), ", ").concat(insp(advanced), ") -> ").concat(insp(exp)));
  });
});

/***/ })
/******/ ]);