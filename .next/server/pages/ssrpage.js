"use strict";
(() => {
var exports = {};
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ssrpage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/components/StyledEmotionButton.tsx


const Button = (styled_default()).button`
  padding: 32px;
  background-color: ${props => props.backgroundColor};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const StyledEmotionButton = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Button, {
    backgroundColor: "green",
    children: "This my button component."
  });
};

/* harmony default export */ const components_StyledEmotionButton = (StyledEmotionButton);
;// CONCATENATED MODULE: ./src/pages/ssrpage.tsx






const SSRPage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Typography, {
      variant: "h4",
      children: "Welcome to the server!"
    }), /*#__PURE__*/jsx_runtime_.jsx(material_namespaceObject.Button, {
      type: "button",
      variant: "contained",
      color: "primary",
      children: "Server Rendered Button"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_StyledEmotionButton, {})]
  });
};

const getServerSideProps = ctx => {
  return {
    props: {}
  };
};
/* harmony default export */ const ssrpage = (SSRPage);

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
var __webpack_exports__ = (__webpack_exec__(280));
module.exports = __webpack_exports__;

})();