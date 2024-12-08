"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst signup = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('ad15@gmail.com');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0000');\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const onSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('http://localhost:4000/api/user/signup', {\n                email,\n                password\n            });\n            // console.log('response ', response.data);\n            localStorage.setItem('user-data', JSON.stringify(response.data));\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');\n        } catch (error) {\n            var _error_response;\n            setErrors((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Email Address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"text\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                Object.keys(errors).length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: errors === null || errors === void 0 ? void 0 : errors.message\n                    }, void 0, false, {\n                        fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdadilalam/Documents/learn-microservice/irctc/client/pages/auth/signup.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(signup, \"sSYcY9ojqMb9jjHugT35LxPIUI8=\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0E7QUFDUDtBQUV6QixNQUFNRyxTQUFTOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLENBQUM7SUFFdEMsTUFBTVUsV0FBVyxPQUFPQztRQUNwQkEsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNWCxrREFBVSxDQUFDLHlDQUF5QztnQkFDdkVFO2dCQUFPRTtZQUNYO1lBRUEsMkNBQTJDO1lBQzNDUyxhQUFhQyxPQUFPLENBQUMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDTCxTQUFTTSxJQUFJO1lBQzlEbEIsdURBQVcsQ0FBQztRQUNoQixFQUFFLE9BQU9vQixPQUFPO2dCQUNGQTtZQUFWWixXQUFVWSxrQkFBQUEsTUFBTVIsUUFBUSxjQUFkUSxzQ0FBQUEsZ0JBQWdCRixJQUFJO1FBQ2xDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0c7a0JBQ0csNEVBQUNDO1lBQUtiLFVBQVVBOzs4QkFDWiw4REFBQ2M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Y7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBTUYsV0FBVTs0QkFBZUcsTUFBSzs0QkFBT0MsT0FBT3pCOzRCQUFPMEIsVUFBVSxDQUFDQyxJQUFNMUIsU0FBUzBCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUV0Ryw4REFBQ1A7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBTUYsV0FBVTs0QkFBZUcsTUFBSzs0QkFBV0MsT0FBT3ZCOzRCQUFVd0IsVUFBVSxDQUFDQyxJQUFNeEIsWUFBWXdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2dCQUUvR0ksT0FBT0MsSUFBSSxDQUFDMUIsUUFBUTJCLE1BQU0sR0FBRyxtQkFDMUIsOERBQUNiO29CQUFJRyxXQUFVOzhCQUNYLDRFQUFDVztrQ0FDSTVCLG1CQUFBQSw2QkFBQUEsT0FBUTZCLE9BQU87Ozs7Ozs7Ozs7OzhCQUk1Qiw4REFBQ2Y7OEJBQ0csNEVBQUNnQjt3QkFBT2IsV0FBVTtrQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7R0E5Q010QjtBQWdETixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL21kYWRpbGFsYW0vRG9jdW1lbnRzL2xlYXJuLW1pY3Jvc2VydmljZS9pcmN0Yy9jbGllbnQvcGFnZXMvYXV0aC9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCdhZDE1QGdtYWlsLmNvbScpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnMDAwMCcpXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3VzZXIvc2lnbnVwJywge1xuICAgICAgICAgICAgICAgIGVtYWlsLCBwYXNzd29yZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSAnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyLWRhdGEnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2U/LmRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycz8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbnVwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJvdXRlciIsImF4aW9zIiwic2lnbnVwIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImg0IiwibWVzc2FnZSIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n"));

/***/ })

});