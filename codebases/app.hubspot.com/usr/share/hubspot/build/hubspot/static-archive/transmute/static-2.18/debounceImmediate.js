"use strict";
'use es6';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _curry = _interopRequireDefault(require("./curry"));

var _enforceFunction2 = _interopRequireDefault(require("./internal/_enforceFunction"));

var _enforceInterval2 = _interopRequireDefault(require("./internal/_enforceInterval"));

function debounceImmediate(interval, operation) {
  (0, _enforceInterval2.default)(interval);
  (0, _enforceFunction2.default)(operation);
  var timer = null;
  var lastArgs;
  var lastCall = 0;
  var lastResult;

  function cancel() {
    clearTimeout(timer);
    timer = null;
  }

  function runner() {
    cancel();
    lastCall = Date.now();
    lastResult = operation.apply(void 0, (0, _toConsumableArray2.default)(lastArgs));
    return lastResult;
  }

  function immediatelyDebounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (timer) {
      cancel();
    }

    if (Date.now() - lastCall >= interval) {
      runner();
    } else {
      timer = setTimeout(runner, interval);
    }

    return lastResult;
  }

  immediatelyDebounced.cancel = cancel;
  return immediatelyDebounced;
}
/**
 * `operation` is called immediately and then `interval` milliseconds after the most
 * recent call.
 *
 * @param  {number} interval of milliseconds
 * @param  {Function} operation
 * @return {any} the most recent result of `operation`
 */


var _default = (0, _curry.default)(debounceImmediate);

exports.default = _default;
module.exports = exports.default;