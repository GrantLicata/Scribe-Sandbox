"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ \"(app-client)/./node_modules/slate/dist/index.es.js\");\n/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ \"(app-client)/./node_modules/slate-react/dist/index.es.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Import React dependencies.\n\n// Import the Slate editor factory.\n\n// Import the Slate components and React plugin.\n\n//Import styles\n\n// Define our own custom set of helpers.\nconst CustomEditor = {\n    isBoldMarkActive (editor) {\n        const marks = slate__WEBPACK_IMPORTED_MODULE_2__.Editor.marks(editor);\n        return marks ? marks.bold === true : false;\n    },\n    isCodeBlockActive (editor) {\n        const [match] = slate__WEBPACK_IMPORTED_MODULE_2__.Editor.nodes(editor, {\n            match: (n)=>n.type === \"code\"\n        });\n        return !!match;\n    },\n    toggleBoldMark (editor) {\n        const isActive = CustomEditor.isBoldMarkActive(editor);\n        if (isActive) {\n            slate__WEBPACK_IMPORTED_MODULE_2__.Editor.removeMark(editor, \"bold\");\n        } else {\n            slate__WEBPACK_IMPORTED_MODULE_2__.Editor.addMark(editor, \"bold\", true);\n        }\n    },\n    toggleCodeBlock (editor) {\n        const isActive = CustomEditor.isCodeBlockActive(editor);\n        slate__WEBPACK_IMPORTED_MODULE_2__.Transforms.setNodes(editor, {\n            type: isActive ? null : \"code\"\n        }, {\n            match: (n)=>slate__WEBPACK_IMPORTED_MODULE_2__.Editor.isBlock(editor, n)\n        });\n    }\n};\nfunction Home() {\n    _s();\n    const [editor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,slate_react__WEBPACK_IMPORTED_MODULE_3__.withReact)((0,slate__WEBPACK_IMPORTED_MODULE_2__.createEditor)()));\n    // Set the initial value presented within the editor.\n    const initialValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>JSON.parse(localStorage.getItem(\"content\")) || [\n            {\n                type: \"paragraph\",\n                children: [\n                    {\n                        text: \"A line of text in a paragraph.\"\n                    }\n                ]\n            }\n        ], []);\n    const renderElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>{\n        switch(props.element.type){\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CodeElement, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DefaultElement, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 16\n                }, this);\n        }\n    }, []);\n    const renderLeaf = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Leaf, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n            lineNumber: 71,\n            columnNumber: 12\n        }, this);\n    }, []);\n    // Database call for all data\n    async function getData() {\n        const res = await fetch(\"http://localhost:3000/api/notes\", {\n            cache: \"no-store\"\n        });\n        console.log(\"This is the response\", res);\n        // Respond with error message if no response from the server\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        return res.json();\n    }\n    getData();\n    return(// Add a toolbar with buttons that call the same methods.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Scribe Editor Concept\"\n            }, void 0, false, {\n                fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(slate_react__WEBPACK_IMPORTED_MODULE_3__.Slate, {\n                editor: editor,\n                initialValue: initialValue,\n                onChange: (value)=>{\n                    const isAstChange = editor.operations.some((op)=>\"set_selection\" !== op.type);\n                    if (isAstChange) {\n                        // Save the value to Local Storage.\n                        const content = JSON.stringify(value);\n                        localStorage.setItem(\"content\", content);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().toolButton),\n                                onMouseDown: (event)=>{\n                                    event.preventDefault();\n                                    CustomEditor.toggleBoldMark(editor);\n                                },\n                                children: \"Bold\"\n                            }, void 0, false, {\n                                fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().toolButton),\n                                onMouseDown: (event)=>{\n                                    event.preventDefault();\n                                    CustomEditor.toggleCodeBlock(editor);\n                                },\n                                children: \"Code Block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(slate_react__WEBPACK_IMPORTED_MODULE_3__.Editable, {\n                        editor: editor,\n                        renderElement: renderElement,\n                        renderLeaf: renderLeaf,\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().editorWindow),\n                        onKeyDown: (event)=>{\n                            if (!event.ctrlKey) {\n                                return;\n                            }\n                            switch(event.key){\n                                case \"`\":\n                                    {\n                                        event.preventDefault();\n                                        CustomEditor.toggleCodeBlock(editor);\n                                        break;\n                                    }\n                                case \"b\":\n                                    {\n                                        event.preventDefault();\n                                        CustomEditor.toggleBoldMark(editor);\n                                        break;\n                                    }\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"qOBXaw0q+PDhu5+fhBiBdanpQCk=\");\n_c = Home;\n// The default element type for the editor (paragraph)\nconst DefaultElement = (props)=>{\n    console.log(props.attributes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        ...props.attributes,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n        lineNumber: 162,\n        columnNumber: 10\n    }, undefined);\n};\n_c1 = DefaultElement;\n// Turns blocks within the editor into code elements.\nconst CodeElement = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        ...props.attributes,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n            lineNumber: 169,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n        lineNumber: 168,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = CodeElement;\n// Define a React component to render leaves with bold text.\nconst Leaf = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ...props.attributes,\n        style: {\n            fontWeight: props.leaf.bold ? \"bold\" : \"normal\"\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/grantlicata/Code/projects/Scribe/src/app/page.jsx\",\n        lineNumber: 177,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = Leaf;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"DefaultElement\");\n$RefreshReg$(_c2, \"CodeElement\");\n$RefreshReg$(_c3, \"Leaf\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDtJQUNaLHFCQUNFLDhEQUFDMEM7UUFDRSxHQUFHMUMsTUFBTXVDLFVBQVU7UUFDcEJsRSxPQUFPO1lBQUVzRSxZQUFZM0MsTUFBTTRDLEtBQUtsRSxPQUFPLFNBQVM7UUFBUztrQkFFeERzQixNQUFNSDs7Ozs7O0FBR2I7TUFUTVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBJbXBvcnQgUmVhY3QgZGVwZW5kZW5jaWVzLlxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gSW1wb3J0IHRoZSBTbGF0ZSBlZGl0b3IgZmFjdG9yeS5cbmltcG9ydCB7IGNyZWF0ZUVkaXRvciwgRWRpdG9yLCBUcmFuc2Zvcm1zLCBFbGVtZW50IH0gZnJvbSBcInNsYXRlXCI7XG4vLyBJbXBvcnQgdGhlIFNsYXRlIGNvbXBvbmVudHMgYW5kIFJlYWN0IHBsdWdpbi5cbmltcG9ydCB7IFNsYXRlLCBFZGl0YWJsZSwgd2l0aFJlYWN0IH0gZnJvbSBcInNsYXRlLXJlYWN0XCI7XG4vL0ltcG9ydCBzdHlsZXNcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuLy8gRGVmaW5lIG91ciBvd24gY3VzdG9tIHNldCBvZiBoZWxwZXJzLlxuY29uc3QgQ3VzdG9tRWRpdG9yID0ge1xuICBpc0JvbGRNYXJrQWN0aXZlKGVkaXRvcikge1xuICAgIGNvbnN0IG1hcmtzID0gRWRpdG9yLm1hcmtzKGVkaXRvcik7XG4gICAgcmV0dXJuIG1hcmtzID8gbWFya3MuYm9sZCA9PT0gdHJ1ZSA6IGZhbHNlO1xuICB9LFxuXG4gIGlzQ29kZUJsb2NrQWN0aXZlKGVkaXRvcikge1xuICAgIGNvbnN0IFttYXRjaF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBtYXRjaDogKG4pID0+IG4udHlwZSA9PT0gXCJjb2RlXCIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gISFtYXRjaDtcbiAgfSxcblxuICB0b2dnbGVCb2xkTWFyayhlZGl0b3IpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IEN1c3RvbUVkaXRvci5pc0JvbGRNYXJrQWN0aXZlKGVkaXRvcik7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBFZGl0b3IucmVtb3ZlTWFyayhlZGl0b3IsIFwiYm9sZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRWRpdG9yLmFkZE1hcmsoZWRpdG9yLCBcImJvbGRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9LFxuXG4gIHRvZ2dsZUNvZGVCbG9jayhlZGl0b3IpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IEN1c3RvbUVkaXRvci5pc0NvZGVCbG9ja0FjdGl2ZShlZGl0b3IpO1xuICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoXG4gICAgICBlZGl0b3IsXG4gICAgICB7IHR5cGU6IGlzQWN0aXZlID8gbnVsbCA6IFwiY29kZVwiIH0sXG4gICAgICB7IG1hdGNoOiAobikgPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSB9XG4gICAgKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlU3RhdGUoKCkgPT4gd2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpKSk7XG5cbiAgLy8gU2V0IHRoZSBpbml0aWFsIHZhbHVlIHByZXNlbnRlZCB3aXRoaW4gdGhlIGVkaXRvci5cbiAgY29uc3QgaW5pdGlhbFZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbnRlbnRcIikpIHx8IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFt7IHRleHQ6IFwiQSBsaW5lIG9mIHRleHQgaW4gYSBwYXJhZ3JhcGguXCIgfV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyRWxlbWVudCA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgIHN3aXRjaCAocHJvcHMuZWxlbWVudC50eXBlKSB7XG4gICAgICBjYXNlIFwiY29kZVwiOlxuICAgICAgICByZXR1cm4gPENvZGVFbGVtZW50IHsuLi5wcm9wc30gLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPERlZmF1bHRFbGVtZW50IHsuLi5wcm9wc30gLz47XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyTGVhZiA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8TGVhZiB7Li4ucHJvcHN9IC8+O1xuICB9LCBbXSk7XG5cbiAgLy8gRGF0YWJhc2UgY2FsbCBmb3IgYWxsIGRhdGFcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZXNcIiwge1xuICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHJlc3BvbnNlXCIsIHJlcyk7XG4gICAgLy8gUmVzcG9uZCB3aXRoIGVycm9yIG1lc3NhZ2UgaWYgbm8gcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxuXG4gIGdldERhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIC8vIEFkZCBhIHRvb2xiYXIgd2l0aCBidXR0b25zIHRoYXQgY2FsbCB0aGUgc2FtZSBtZXRob2RzLlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PlNjcmliZSBFZGl0b3IgQ29uY2VwdDwvaDE+XG4gICAgICA8cD48L3A+XG4gICAgICA8U2xhdGVcbiAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgIGluaXRpYWxWYWx1ZT17aW5pdGlhbFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBc3RDaGFuZ2UgPSBlZGl0b3Iub3BlcmF0aW9ucy5zb21lKFxuICAgICAgICAgICAgKG9wKSA9PiBcInNldF9zZWxlY3Rpb25cIiAhPT0gb3AudHlwZVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGlzQXN0Q2hhbmdlKSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSB2YWx1ZSB0byBMb2NhbCBTdG9yYWdlLlxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29udGVudFwiLCBjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50b29sQnV0dG9ufVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBDdXN0b21FZGl0b3IudG9nZ2xlQm9sZE1hcmsoZWRpdG9yKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQm9sZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudG9vbEJ1dHRvbn1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgQ3VzdG9tRWRpdG9yLnRvZ2dsZUNvZGVCbG9jayhlZGl0b3IpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb2RlIEJsb2NrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxFZGl0YWJsZVxuICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxuICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XG4gICAgICAgICAgcmVuZGVyTGVhZj17cmVuZGVyTGVhZn1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmVkaXRvcldpbmRvd31cbiAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImBcIjoge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgQ3VzdG9tRWRpdG9yLnRvZ2dsZUNvZGVCbG9jayhlZGl0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2FzZSBcImJcIjoge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgQ3VzdG9tRWRpdG9yLnRvZ2dsZUJvbGRNYXJrKGVkaXRvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TbGF0ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZWxlbWVudCB0eXBlIGZvciB0aGUgZWRpdG9yIChwYXJhZ3JhcGgpXG5jb25zdCBEZWZhdWx0RWxlbWVudCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5hdHRyaWJ1dGVzKTtcbiAgcmV0dXJuIDxwIHsuLi5wcm9wcy5hdHRyaWJ1dGVzfT57cHJvcHMuY2hpbGRyZW59PC9wPjtcbn07XG5cbi8vIFR1cm5zIGJsb2NrcyB3aXRoaW4gdGhlIGVkaXRvciBpbnRvIGNvZGUgZWxlbWVudHMuXG5jb25zdCBDb2RlRWxlbWVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxwcmUgey4uLnByb3BzLmF0dHJpYnV0ZXN9PlxuICAgICAgPGNvZGU+e3Byb3BzLmNoaWxkcmVufTwvY29kZT5cbiAgICA8L3ByZT5cbiAgKTtcbn07XG5cbi8vIERlZmluZSBhIFJlYWN0IGNvbXBvbmVudCB0byByZW5kZXIgbGVhdmVzIHdpdGggYm9sZCB0ZXh0LlxuY29uc3QgTGVhZiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4ucHJvcHMuYXR0cmlidXRlc31cbiAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IHByb3BzLmxlYWYuYm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIiB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJjcmVhdGVFZGl0b3IiLCJFZGl0b3IiLCJUcmFuc2Zvcm1zIiwiRWxlbWVudCIsIlNsYXRlIiwiRWRpdGFibGUiLCJ3aXRoUmVhY3QiLCJzdHlsZSIsIkN1c3RvbUVkaXRvciIsImlzQm9sZE1hcmtBY3RpdmUiLCJlZGl0b3IiLCJtYXJrcyIsImJvbGQiLCJpc0NvZGVCbG9ja0FjdGl2ZSIsIm1hdGNoIiwibm9kZXMiLCJuIiwidHlwZSIsInRvZ2dsZUJvbGRNYXJrIiwiaXNBY3RpdmUiLCJyZW1vdmVNYXJrIiwiYWRkTWFyayIsInRvZ2dsZUNvZGVCbG9jayIsInNldE5vZGVzIiwiaXNCbG9jayIsIkhvbWUiLCJpbml0aWFsVmFsdWUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hpbGRyZW4iLCJ0ZXh0IiwicmVuZGVyRWxlbWVudCIsInByb3BzIiwiZWxlbWVudCIsIkNvZGVFbGVtZW50IiwiRGVmYXVsdEVsZW1lbnQiLCJyZW5kZXJMZWFmIiwiTGVhZiIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsInAiLCJvbkNoYW5nZSIsInZhbHVlIiwiaXNBc3RDaGFuZ2UiLCJvcGVyYXRpb25zIiwic29tZSIsIm9wIiwiY29udGVudCIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJidXR0b24iLCJ0b29sQnV0dG9uIiwib25Nb3VzZURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWRpdG9yV2luZG93Iiwib25LZXlEb3duIiwiY3RybEtleSIsImtleSIsImF0dHJpYnV0ZXMiLCJwcmUiLCJjb2RlIiwic3BhbiIsImZvbnRXZWlnaHQiLCJsZWFmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.jsx\n"));

/***/ })

});