webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Banner/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Banner/styles.ts ***!
  \*****************************************/
/*! exports provided: Container, Content, ContentAnswers, ContentAnswersTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAnswers", function() { return ContentAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAnswersTitle", function() { return ContentAnswersTitle; });
/* harmony import */ var C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");


function _templateObject5() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 0.5rem;\n\n    p {\n      font-size: 0.75rem;\n    }\n\n    h1 {\n      font-size: 1rem;\n      line-height: 0.5;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    padding: 1rem;\n\n    p {\n      font-size: 0.5rem;\n\n      strong {\n        font-size: 0.75rem;\n        padding-left: 0.25rem;\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 65%;\n\n    p {\n      font-size: 1rem;\n    }\n\n    h1 {\n      font-size: 1.25rem;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        img {\n          width: 0;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-height: 100px;\n    border-radius: 12px;\n\n    img {\n      right: 0.5rem;\n      width: 120px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1oru0br-0"
})(["display:flex;position:relative;background:", ";width:100%;min-height:200px;border-radius:15px;img{width:165px;height:auto;position:relative;bottom:0;right:2em;}img:hover{border-radius:15px;border:2px solid black;}", " ", " box-shadow:0 20px 44px 0 rgba(27,36,72,0.26);"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject()), function (props) {
  return props.disabledImageMobile && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ""], styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject2()));
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1oru0br-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:70%;p{font-size:3rem;line-height:1;color:", ";}h1{line-height:1;font-size:4rem;font-weight:800;color:", ";}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.pink;
}, styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject3()));
var ContentAnswers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ContentAnswers",
  componentId: "sc-1oru0br-2"
})(["display:flex;flex-direction:column;align-items:stretch;padding:2em 0 2em 2em;width:70%;p{font-size:1rem;color:", ";strong{font-size:1.25rem;padding-left:0.5rem;color:", ";}}", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.yellow;
}, styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject4()));
var ContentAnswersTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ContentAnswersTitle",
  componentId: "sc-1oru0br-3"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:150px;margin-bottom:1rem;p{font-size:1.5rem;color:", ";}h1{font-size:2rem;line-height:0.8;font-weight:800;color:", ";}", ""], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.pink;
}, styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject5()));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFubmVyL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJtZWRpYSIsImxlc3NUaGFuIiwicHJvcHMiLCJkaXNhYmxlZEltYWdlTW9iaWxlIiwiY3NzIiwiQ29udGVudCIsImRpdiIsIndoaXRlIiwicGluayIsIkNvbnRlbnRBbnN3ZXJzIiwieWVsbG93IiwiQ29udGVudEFuc3dlcnNUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEscVJBSU47QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBNUI7QUFBQSxDQUpNLEVBdUJsQkMsMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0F2QmtCLHFCQWlDbEIsVUFBQUMsS0FBSztBQUFBLFNBQ0xBLEtBQUssQ0FBQ0MsbUJBQU4sSUFDQUMsNkRBREEsV0FFSUosMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0FGSixxQkFESztBQUFBLENBakNhLENBQWY7QUE4Q0EsSUFBTUksT0FBTyxHQUFHVix5REFBTSxDQUFDVyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJNQVdQO0FBQUEsTUFBR1QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFTLEtBQTVCO0FBQUEsQ0FYTyxFQWtCUDtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhVSxJQUE1QjtBQUFBLENBbEJPLEVBcUJoQlIsMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0FyQmdCLHFCQUFiO0FBa0NBLElBQU1RLGNBQWMsR0FBR2QseURBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSwwTEFTZDtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhUyxLQUE1QjtBQUFBLENBVGMsRUFjWjtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhWSxNQUE1QjtBQUFBLENBZFksRUFrQnZCViwwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQWxCdUIscUJBQXBCO0FBaUNBLElBQU1VLG1CQUFtQixHQUFHaEIseURBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSw0TkFVbkI7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVMsS0FBNUI7QUFBQSxDQVZtQixFQWlCbkI7QUFBQSxNQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVUsSUFBNUI7QUFBQSxDQWpCbUIsRUFvQjVCUiwwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQXBCNEIscUJBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlMzU3YjBjZWI4NGI5NDdlMzkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IG1lZGlhIGZyb20gJ3N0eWxlZC1tZWRpYS1xdWVyeSdcblxuaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHtcbiAgZGlzYWJsZWRJbWFnZU1vYmlsZTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcjxDb250YWluZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMmVtO1xuICB9XG4gIGltZzpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG5cbiAgICBpbWcge1xuICAgICAgcmlnaHQ6IDAuNXJlbTtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIGB9XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmRpc2FibGVkSW1hZ2VNb2JpbGUgJiZcbiAgICBjc3NgXG4gICAgICAke21lZGlhLmxlc3NUaGFuKCdtZWRpdW0nKWBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICBgfVxuXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0NHB4IDAgcmdiYSgyNywgMzYsIDcyLCAwLjI2KTtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB3aWR0aDogNzAlO1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICB9XG5cbiAgaDEge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5waW5rfTtcbiAgfVxuXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIHdpZHRoOiA2NSU7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudEFuc3dlcnMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgcGFkZGluZzogMmVtIDAgMmVtIDJlbTtcbiAgd2lkdGg6IDcwJTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcblxuICAgIHN0cm9uZyB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy55ZWxsb3d9O1xuICAgIH1cbiAgfVxuXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50QW5zd2Vyc1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMC44O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnBpbmt9O1xuICB9XG5cbiAgJHttZWRpYS5sZXNzVGhhbignbWVkaXVtJylgXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICB9XG4gIGB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9