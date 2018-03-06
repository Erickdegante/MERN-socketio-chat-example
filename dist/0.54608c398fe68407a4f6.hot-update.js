webpackHotUpdate(0,{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nvar _home = __webpack_require__(64);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _posts = __webpack_require__(67);\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nvar _profile = __webpack_require__(74);\n\nvar _profile2 = _interopRequireDefault(_profile);\n\nvar _list = __webpack_require__(84);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _login = __webpack_require__(89);\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _nav = __webpack_require__(93);\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Routing = function (_Component) {\n    _inherits(Routing, _Component);\n\n    function Routing(props) {\n        _classCallCheck(this, Routing);\n\n        return _possibleConstructorReturn(this, (Routing.__proto__ || Object.getPrototypeOf(Routing)).call(this, props));\n    }\n\n    _createClass(Routing, [{\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'container-full' },\n                        _react2.default.createElement(_nav2.default, { islogin: this.props.islogin })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'container' },\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/home', excat: true, component: _home2.default }),\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.state.authed, path: '/posts', component: _posts2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.state.authed, path: '/list', component: _list2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.state.authed, path: '/profile', component: _profile2.default })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Routing;\n}(_react.Component);\n\nexports.default = Routing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JvdXRlci9yb3V0ZXIuanM/MjliMiJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicHJvcHMiLCJpc2xvZ2luIiwic3RhdGUiLCJhdXRoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1JBLEtBRFE7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLDBCQUFLLFdBQVUsZ0JBQWY7QUFDTSx1RUFBUyxTQUFTLEtBQUtBLEtBQUwsQ0FBV0MsT0FBN0I7QUFETixxQkFERDtBQUlFO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDRywrRUFBTyxNQUFLLE9BQVosRUFBb0IsV0FBcEIsRUFBMEIseUJBQTFCLEdBREg7QUFFRywrRUFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBRkg7QUFHRyxzREFBQyxZQUFELElBQWMsUUFBUSxLQUFLQyxLQUFMLENBQVdDLE1BQWpDLEVBQTBDLE1BQUssUUFBL0MsRUFBd0QsMEJBQXhELEdBSEg7QUFJRyxzREFBQyxZQUFELElBQWMsUUFBUSxLQUFLRCxLQUFMLENBQVdDLE1BQWpDLEVBQXlDLE1BQUssT0FBOUMsRUFBc0QseUJBQXRELEdBSkg7QUFLRyxzREFBQyxZQUFELElBQWMsUUFBUSxLQUFLRCxLQUFMLENBQVdDLE1BQWpDLEVBQTBDLE1BQUssVUFBL0MsRUFBMEQsNEJBQTFEO0FBTEg7QUFKRjtBQURILGFBREo7QUFnQkg7Ozs7OztrQkF4QmdCSixPIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbiBcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vQ29udGFpbmVycy9ob21lJztcclxuaW1wb3J0IFBvc3RzIGZyb20gJy4uL0NvbnRhaW5lcnMvcG9zdHMnO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9Db250YWluZXJzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9Db250YWluZXJzL2xpc3QnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vQ29udGFpbmVycy9sb2dpbic7XHJcbmltcG9ydCBOYXZNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIgKHByb3BzKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um91dGVyPlxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgaXNsb2dpbj17dGhpcy5wcm9wcy5pc2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgZXhjYXQgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGF1dGhlZD17dGhpcy5zdGF0ZS5hdXRoZWR9ICBwYXRoPVwiL3Bvc3RzXCIgY29tcG9uZW50PXtQb3N0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGF1dGhlZD17dGhpcy5zdGF0ZS5hdXRoZWR9IHBhdGg9XCIvbGlzdFwiIGNvbXBvbmVudD17TGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGF1dGhlZD17dGhpcy5zdGF0ZS5hdXRoZWR9ICBwYXRoPVwiL3Byb2ZpbGVcIiBjb21wb25lbnQ9e1Byb2ZpbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JvdXRlci9yb3V0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ })

})