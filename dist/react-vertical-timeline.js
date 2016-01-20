(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-vertical-timeline"] = factory(require("react"));
	else
		root["react-vertical-timeline"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Timeline = __webpack_require__(1);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Bookmark = __webpack_require__(3);
	
	var _Bookmark2 = _interopRequireDefault(_Bookmark);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  'Timeline': _Timeline2.default,
	  'Bookmark': _Bookmark2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline() {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this));
	
	    _this.state = {
	      progress: 0
	    };
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.progress > 100) {
	        this.state.progress = 100;
	      } else if (nextProps.progress < 0) {
	        this.state.progress = 0;
	      } else {
	        this.state.progress = nextProps.progress;
	      }
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        height: this.props.height,
	        progress: this.state.progress
	      };
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight(element) {
	      var e = element;
	      while (e.className !== 'timeline-block' && e.parentElement) {
	        e = element.parentElement;
	      }
	      return e && e.offsetHeight;
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition(element) {
	      var xPosition = 0;
	      var yPosition = 0;
	
	      while (element) {
	        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
	        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
	        element = element.offsetParent;
	      }
	      return { x: xPosition, y: yPosition };
	    }
	  }, {
	    key: 'handleProgressClick',
	    value: function handleProgressClick(e) {
	      var parentPosition = this.getPosition(e.currentTarget);
	      var progress = (e.clientY - parentPosition.y) / this.getHeight(e.currentTarget) * 100;
	      this.props.onSelect(progress);
	      e.stopPropagation();
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var clickHandler = this.handleProgressClick.bind(this);
	      var progressStyle = {
	        height: this.state.progress + '%'
	      },
	          wrapperStyle = {
	        height: this.props.height + 'px'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'timeline-block', style: wrapperStyle },
	        _react2.default.createElement('div', { className: 'timeline-line',
	          onClick: clickHandler }),
	        _react2.default.createElement('div', { className: 'timeline-progress',
	          onClick: clickHandler,
	          style: progressStyle }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Timeline;
	}(_react2.default.Component);
	
	exports.default = Timeline;
	
	Timeline.propTypes = {
	  children: _react2.default.PropTypes.node,
	  height: _react2.default.PropTypes.number.isRequired,
	  onSelect: _react2.default.PropTypes.func,
	  progress: _react2.default.PropTypes.number
	};
	
	Timeline.defaultProps = {
	  height: 200,
	  onSelect: function onSelect() {},
	  progress: 0
	};
	
	Timeline.childContextTypes = {
	  height: _react2.default.PropTypes.number,
	  progress: _react2.default.PropTypes.number
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bookmark = function (_React$Component) {
	  _inherits(Bookmark, _React$Component);
	
	  function Bookmark() {
	    _classCallCheck(this, Bookmark);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bookmark).apply(this, arguments));
	  }
	
	  _createClass(Bookmark, [{
	    key: 'clickHandler',
	    value: function clickHandler() {
	      this.props.onSelect && this.props.onSelect(this.props.progress);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        top: this.context.height * (this.props.progress / 100) + 'px'
	      },
	          cls = ['timeline-bookmark', this.props.progress <= this.context.progress ? 'visited' : null].join(' ');
	
	      return _react2.default.createElement(
	        'div',
	        { className: cls, onClick: this.clickHandler.bind(this), style: style },
	        _react2.default.createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Bookmark;
	}(_react2.default.Component);
	
	exports.default = Bookmark;
	
	Bookmark.contextTypes = {
	  height: _react2.default.PropTypes.number.isRequired,
	  progress: _react2.default.PropTypes.number
	};
	
	Bookmark.propTypes = {
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),
	  onSelect: _react2.default.PropTypes.func,
	  progress: _react2.default.PropTypes.number.isRequired
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-vertical-timeline.js.map