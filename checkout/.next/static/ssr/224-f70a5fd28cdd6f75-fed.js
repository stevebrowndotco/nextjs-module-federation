"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(839);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__(903);




const Checkout = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-71951eac013e1c14",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: "jsx-71951eac013e1c14",
                        children: "checkout"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/nextjs-ssr/checkout/public/favicon.ico",
                        className: "jsx-71951eac013e1c14"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-71951eac013e1c14" + " " + "hero",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "jsx-71951eac013e1c14",
                        children: "checkout page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "jsx-71951eac013e1c14" + " " + "title",
                        children: "This is a federated page owned by localhost:3000"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "jsx-71951eac013e1c14",
                        children: [
                            " ",
                            "Data from federated ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: "jsx-71951eac013e1c14",
                                children: "getInitalProps"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                        className: "jsx-71951eac013e1c14"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "jsx-71951eac013e1c14",
                        children: JSON.stringify(props, null, 2)
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "71951eac013e1c14",
                children: ".hero.jsx-71951eac013e1c14{width:100%;color:#333}.title.jsx-71951eac013e1c14{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:20px}.title.jsx-71951eac013e1c14,.description.jsx-71951eac013e1c14{text-align:center}"
            })
        ]
    });
Checkout.getInitialProps = async ()=>{
    const swapi = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>res.json());
    console.log(swapi);
    console.log("swapi");
    return swapi;
};
/* harmony default export */ __webpack_exports__["default"] = (Checkout);


/***/ }),

/***/ 656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


module.exports = __webpack_require__(882); //# sourceMappingURL=styled-jsx.js.map


/***/ }),

/***/ 903:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// this is needed to ensure webpack does not attempt to tree shake unused modules. Since these should always come from host
__webpack_require__(497);
__webpack_require__(137);
__webpack_require__(868);
__webpack_require__(453);
__webpack_require__(839);
__webpack_require__(108);
__webpack_require__(479);
__webpack_require__(590);
__webpack_require__(882);
if (false) {}
module.exports = {};
//# sourceMappingURL=include-defaults.js.map

/***/ })

};
;