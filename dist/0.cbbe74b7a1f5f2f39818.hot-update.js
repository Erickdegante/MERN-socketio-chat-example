webpackHotUpdate(0,{

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authenticate = __webpack_require__(94);\n\nvar _authenticate2 = _interopRequireDefault(_authenticate);\n\nvar _index = __webpack_require__(65);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.state = {\n      renderActual: false\n    };\n    _this.mountedorNot = _this.mountedorNot.bind(_this);\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'mountedorNot',\n    value: function mountedorNot() {\n      this.setState({ renderActual: true });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'homePage' },\n        _react2.default.createElement(_index2.default, null)\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\n;\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvaG9tZS5qcz8zNzg3Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwicmVuZGVyQWN0dWFsIiwibW91bnRlZG9yTm90IiwiYmluZCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEk7OztBQUVKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYztBQURILEtBQWI7QUFHQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBTGlCO0FBTWxCOzs7O21DQUNjO0FBQ2IsV0FBS0MsUUFBTCxDQUFlLEVBQUNILGNBQWMsSUFBZixFQUFmO0FBQ0Q7Ozs2QkFFVTs7QUFFVCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBREYsT0FERjtBQU1EOzs7O0VBckJnQixnQkFBTUksUzs7QUF1QnpCOztrQkFFZVAsSSIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0aGVudGljYXRpb24gZnJvbSAnLi9hdXRoZW50aWNhdGUnO1xuaW1wb3J0IEluZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9pbmRleCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVuZGVyQWN0dWFsOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5tb3VudGVkb3JOb3QgPSB0aGlzLm1vdW50ZWRvck5vdC5iaW5kICh0aGlzKTtcbiAgfVxuICBtb3VudGVkb3JOb3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe3JlbmRlckFjdHVhbDogdHJ1ZX0pO1xuICB9XG4gIDtcbiAgICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lUGFnZVwiPlxuICAgICAgICA8SW5kZXgvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gIH1cbn1cbjtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQ29udGFpbmVycy9ob21lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ })

})