"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omit = omit;
function omit(obj) {
  var omitAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var result = {};
  var keys = Object.keys(obj);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (omitAttrs.indexOf(key) === -1) {
        result[key] = obj[key];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};