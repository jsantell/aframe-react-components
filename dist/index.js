'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Videosphere = exports.Curvedimage = exports.VideoSphere = exports.Video = exports.Torus = exports.TorusKnot = exports.Tetrahedron = exports.Sphere = exports.Sound = exports.Sky = exports.Ring = exports.Plane = exports.Octahedron = exports.ObjModel = exports.Light = exports.Image = exports.Dodecahedron = exports.Cylinder = exports.CurvedImage = exports.Cursor = exports.Cone = exports.ColladaModel = exports.Circle = exports.Camera = exports.Box = exports.Animation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aframeReact = require('aframe-react');

var _utils = require('./utils');

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OMIT_PROPS = ['primitive'];

var renderEntityWithPrimitive = function renderEntityWithPrimitive(name) {
  return function (props) {
    return _react2.default.createElement(_aframeReact.Entity, _extends({ primitive: name }, (0, _utils.omit)(props, OMIT_PROPS)));
  };
};

var Components = Object.keys(_components2.default).reduce(function (result, compName) {
  var compData = _components2.default[compName];

  // Assign render function with primitive to Component[componentName]
  result[compName] = renderEntityWithPrimitive(compData.primitive);

  return result;
}, {});

// :[
var Animation = exports.Animation = Components.Animation;
var Box = exports.Box = Components.Box;
var Camera = exports.Camera = Components.Camera;
var Circle = exports.Circle = Components.Circle;
var ColladaModel = exports.ColladaModel = Components.ColladaModel;
var Cone = exports.Cone = Components.Cone;
var Cursor = exports.Cursor = Components.Cursor;
var CurvedImage = exports.CurvedImage = Components.CurvedImage;
var Cylinder = exports.Cylinder = Components.Cylinder;
var Dodecahedron = exports.Dodecahedron = Components.Dodecahedron;
var Image = exports.Image = Components.Image;
var Light = exports.Light = Components.Light;
var ObjModel = exports.ObjModel = Components.ObjModel;
var Octahedron = exports.Octahedron = Components.Octahedron;
var Plane = exports.Plane = Components.Plane;
var Ring = exports.Ring = Components.Ring;
var Sky = exports.Sky = Components.Sky;
var Sound = exports.Sound = Components.Sound;
var Sphere = exports.Sphere = Components.Sphere;
var Tetrahedron = exports.Tetrahedron = Components.Tetrahedron;
var TorusKnot = exports.TorusKnot = Components.TorusKnot;
var Torus = exports.Torus = Components.Torus;
var Video = exports.Video = Components.Video;
var VideoSphere = exports.VideoSphere = Components.VideoSphere;

// Some aliases to match casing on aframe primitives
var Curvedimage = exports.Curvedimage = Components.CurvedImage;
var Videosphere = exports.Videosphere = Components.VideoSphere;