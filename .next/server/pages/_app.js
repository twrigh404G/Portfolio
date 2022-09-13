"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/createEmotionCache.ts


const createEmotionCache = () => {
  return cache_default()({
    key: 'css'
  });
};

/* harmony default export */ const lib_createEmotionCache = (createEmotionCache);

/***/ }),

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(35);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(381);
// EXTERNAL MODULE: ./styles/theme.ts + 1 modules
var theme = __webpack_require__(869);
// EXTERNAL MODULE: ./src/lib/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





 // Client-side cache, shared for the whole session of the user in the browser.



const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();

const App = props => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.CacheProvider, {
    value: emotionCache,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "My page"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(styles_.ThemeProvider, {
      theme: theme/* default */.Z,
      children: /*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {})
    })]
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ styles_theme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(35);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./styles/theme.ts

 // Create a theme instance.

const theme = (0,styles_.createTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: colors_namespaceObject.red.A400
    }
  }
});
/* harmony default export */ const styles_theme = (theme);

/***/ }),

/***/ 381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 35:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(358));
module.exports = __webpack_exports__;

})();