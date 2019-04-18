module.exports =
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
/******/ ({

/***/ "./assets/chocolates.jpg":
/*!*******************************!*\
  !*** ./assets/chocolates.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/ac09fbcde82d5e439c19279aaae9dcb9.jpg";

/***/ }),

/***/ "./assets/ferrero.jpg":
/*!****************************!*\
  !*** ./assets/ferrero.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/ea5802ee18b911919bc4f891bb4e2574.jpg";

/***/ }),

/***/ "./assets/hams.jpg":
/*!*************************!*\
  !*** ./assets/hams.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/f8eafe0c26349419875855e5f42fbc7a.jpg";

/***/ }),

/***/ "./assets/hotCrossBuns.jpg":
/*!*********************************!*\
  !*** ./assets/hotCrossBuns.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/431b297115f6639825f5769acca7f12a.jpg";

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _universal_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../universal/app */ "./src/universal/app.js");





var PORT = 3000;
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('dist', {
  maxAge: '1d'
}));
app.use(function (req, res) {
  var html = "<!DOCTYPE html>\n                    <html>\n                      <head>\n                        <meta charset=\"utf-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                        <title>ShopX - The Fast Food People</title>\n                      </head>\n                      <body>\n                        <div id=\"reactDiv\"/>\n                        <script type=\"application/javascript\" src=\"http://localhost:3002/dist/bundle.js\"></script>\n                      </body>\n                    </html>";
  res.end(html);
});
/* harmony default export */ __webpack_exports__["default"] = (app.listen(PORT, function () {
  console.log("Example app listening at ".concat(PORT, "..."));
}));

/***/ }),

/***/ "./src/universal/app.js":
/*!******************************!*\
  !*** ./src/universal/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ldclient-react */ "ldclient-react");
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ldclient_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/universal/home.js");





var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  })))));
}; // Set clientSideID to your own Client-side ID. You can find this in
// your ld portal under Account settings / Projects


/* harmony default export */ __webpack_exports__["default"] = (Object(ldclient_react__WEBPACK_IMPORTED_MODULE_2__["withLDProvider"])({
  clientSideID: '59b2b2596d1a250b1c78baa4'
})(App));

/***/ }),

/***/ "./src/universal/context.js":
/*!**********************************!*\
  !*** ./src/universal/context.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  cart: [],
  updateCart: function updateCart() {},
  user: {}
});
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./src/universal/home.js":
/*!*******************************!*\
  !*** ./src/universal/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ldclient-react */ "ldclient-react");
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ldclient_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pluralize */ "pluralize");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products */ "./src/universal/products.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context */ "./src/universal/context.js");
function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n                font-size: 17px;\n                border-radius: 36px;\n                background: #25861e;\n                border-color: #25861e;\n                color: white;\n                width: 120px;\n                height: 40px;\n              "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home__Root",
  componentId: "r6vokn-0"
})(["color:#001b44;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "home__Heading",
  componentId: "r6vokn-1"
})(["color:#00449e;"]);
var user = {
  key: 'yus',
  firstName: 'Yus',
  custom: {
    location: 'sydney',
    totalCartValue: 0
  }
};

var Home = function Home(_ref) {
  var flags = _ref.flags,
      ldClient = _ref.ldClient;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('unknown'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      cart = _useState4[0],
      setCart = _useState4[1];

  var login = function login() {
    setLocation('sydney');
    ldClient.identify(user);
  };

  var onChangeLocation = function onChangeLocation(_ref2) {
    var value = _ref2.target.value;
    user.custom.location = value;
    setLocation(user.custom.location);
    ldClient.identify(user);
  };

  var totalCartValue = 0;
  cart.forEach(function (c) {
    return totalCartValue += c.price;
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: {
      cart: cart,
      updateCart: setCart,
      user: user
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Root, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Heading, null, "Welcome ", location !== 'unknown' ? user.firstName : 'to ShopX'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, location !== 'unknown' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "You are in:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    defaultValue: location,
    t: "",
    placeholder: "change location",
    onChange: onChangeLocation
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "brisbane"
  }, "Brisbane"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "melbourne"
  }, "Melbourne"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "perth"
  }, "Perth"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "sydney"
  }, "Sydney"))), cart.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "You have ", cart.length, " ", pluralize__WEBPACK_IMPORTED_MODULE_6___default()('items', cart.length), " worth $", totalCartValue, " in your cart.") : null, flags.easterITunesSpecial ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", null, "Yay! You get a free $10 itunes voucher!") : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_products__WEBPACK_IMPORTED_MODULE_7__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StyledButton, {
    onClick: login
  }, "Login"))));
};

Home.propTypes = {
  flags: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(ldclient_react__WEBPACK_IMPORTED_MODULE_5__["withLDConsumer"])()(Home));

var _StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("button")(_templateObject());

/***/ }),

/***/ "./src/universal/productTile.js":
/*!**************************************!*\
  !*** ./src/universal/productTile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ldclient-react */ "ldclient-react");
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ldclient_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/universal/context.js");




var ProductTileRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "productTile__ProductTileRoot",
  componentId: "q8gvjg-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;margin:20px 50px;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "productTile__Heading",
  componentId: "q8gvjg-1"
})(["color:#ffdd03;"]);
var AddToCartButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "productTile__AddToCartButton",
  componentId: "q8gvjg-2"
})(["font-size:14px;border-radius:36px;background:#25861e;border-color:#25861e;color:white;width:40%;height:40px;"]);

var ProductTile = function ProductTile(_ref) {
  var ldClient = _ref.ldClient,
      heading = _ref.heading,
      image = _ref.image,
      productName = _ref.productName,
      productId = _ref.productId,
      price = _ref.price;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      cart = _useContext.cart,
      updateCart = _useContext.updateCart,
      user = _useContext.user;

  var addToCart = function addToCart() {
    var totalCartValue = price;
    cart.forEach(function (c) {
      return totalCartValue += c.price;
    });
    user.custom.totalCartValue = totalCartValue;
    ldClient.identify(user);
    updateCart(cart.concat([{
      productId: productId,
      productName: productName,
      price: price
    }]));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductTileRoot, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, null, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, productName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "$", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddToCartButton, {
    onClick: addToCart
  }, "Add to cart"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(ldclient_react__WEBPACK_IMPORTED_MODULE_2__["withLDConsumer"])()(ProductTile));

/***/ }),

/***/ "./src/universal/products.js":
/*!***********************************!*\
  !*** ./src/universal/products.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ldclient-react */ "ldclient-react");
/* harmony import */ var ldclient_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ldclient_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productTile */ "./src/universal/productTile.js");
/* harmony import */ var _assets_ferrero_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/ferrero.jpg */ "./assets/ferrero.jpg");
/* harmony import */ var _assets_ferrero_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_ferrero_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_hotCrossBuns_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/hotCrossBuns.jpg */ "./assets/hotCrossBuns.jpg");
/* harmony import */ var _assets_hotCrossBuns_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_hotCrossBuns_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_hams_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/hams.jpg */ "./assets/hams.jpg");
/* harmony import */ var _assets_hams_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_hams_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_chocolates_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/chocolates.jpg */ "./assets/chocolates.jpg");
/* harmony import */ var _assets_chocolates_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_chocolates_jpg__WEBPACK_IMPORTED_MODULE_7__);








var ProductsRoot = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "products__ProductsRoot",
  componentId: "lar1cv-0"
})(["display:flex;"]);
var Specials = Object(ldclient_react__WEBPACK_IMPORTED_MODULE_1__["withLDConsumer"])()(function (_ref) {
  var flags = _ref.flags;
  var props = {
    heading: 'Easter Special'
  };

  switch (flags.easterSpecials) {
    case 'easter chocolates':
      props.image = _assets_chocolates_jpg__WEBPACK_IMPORTED_MODULE_7___default.a;
      props.productId = 'easter special chocolates';
      props.productName = 'Cadbury Party Pack';
      props.price = 5;
      break;

    case 'easter ham':
      props.image = _assets_hams_jpg__WEBPACK_IMPORTED_MODULE_6___default.a;
      props.productId = 'easter special hams';
      props.productName = 'Yummy Ham';
      props.price = 35;
      break;

    case 'easter hot cross buns':
      props.image = _assets_hotCrossBuns_jpg__WEBPACK_IMPORTED_MODULE_5___default.a;
      props.productId = 'easter special buns';
      props.productName = "Wendy's Hot X Buns";
      props.price = 6;
      break;

    default:
      props.heading = 'No specials';
      break;
  }

  if (props.heading === 'No specials') return '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_productTile__WEBPACK_IMPORTED_MODULE_3__["default"], props);
});

var Products = function Products() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductsRoot, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_productTile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: _assets_ferrero_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    productName: "Ferrero Rocher Chocolates",
    price: 19
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Specials, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi @babel/polyfill ./src/server/server.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "ldclient-react":
/*!*********************************!*\
  !*** external "ldclient-react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ldclient-react");

/***/ }),

/***/ "pluralize":
/*!****************************!*\
  !*** external "pluralize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pluralize");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=serverBundle.js.map