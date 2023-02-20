"use strict";
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _apphasBoundary; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__(1388);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/nav.js





const HelloWorld = dynamic_default()(()=>__webpack_require__.e(/* import() */ 383).then(__webpack_require__.bind(__webpack_require__, 383)).then((mod)=>{
        return {
            default: mod.HelloWorld
        };
    }), {
    loadableGenerated: {
        modules: [
            "../components/nav.js -> " + "./helloWorld"
        ]
    },
    suspense: true
});
const links = [
    {
        href: "https://zeit.co/now",
        label: "ZEIT"
    },
    {
        href: "https://github.com/zeit/next.js",
        label: "GitHub"
    }, 
].map((link)=>{
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});
const Nav = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-c0633394590b9319",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(HelloWorld, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "jsx-c0633394590b9319",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "jsx-c0633394590b9319",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-c0633394590b9319",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/shop",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-c0633394590b9319",
                                    children: "Shop"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/checkout",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "jsx-c0633394590b9319",
                                    children: "Checkout"
                                })
                            })
                        ]
                    }),
                    links.map(({ key , href , label  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "jsx-c0633394590b9319",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: href,
                                className: "jsx-c0633394590b9319",
                                children: label
                            })
                        }, key))
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "c0633394590b9319",
                children: "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif}nav.jsx-c0633394590b9319{text-align:center}ul.jsx-c0633394590b9319{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}nav.jsx-c0633394590b9319>ul.jsx-c0633394590b9319{padding:4px 16px}li.jsx-c0633394590b9319{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:6px 8px}a.jsx-c0633394590b9319{color:#067df7;text-decoration:none;font-size:13px;padding-right:10px}"
            })
        ]
    });
/* harmony default export */ var nav = (Nav);

;// CONCATENATED MODULE: ./pages/_app.js?hasBoundary

__webpack_require__(903);


function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
MyApp.getInitialProps = async (ctx)=>{
    const appProps = await app["default"].getInitialProps(ctx);
    return appProps;
};
/* harmony default export */ var _apphasBoundary = (MyApp);


/***/ })

};
;