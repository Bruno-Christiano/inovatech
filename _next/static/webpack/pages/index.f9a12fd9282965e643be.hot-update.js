webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Questions/Question/styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/Questions/Question/styles.ts ***!
  \*****************************************************/
/*! exports provided: Container, Content, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");


function _templateObject3() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 1.125rem;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n\n    margin-top: 2em;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Bruno_Santos_Downloads_fila_da_vacina_master_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    p {\n      font-size: 1.25rem;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var visibleContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:translateX(500px);opacity:0;}to{transform:translateX(0px);opacity:1;}"]);
var hiddenContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:translateX(0px);opacity:1;}to{display:none;visibility:hidden;transform:translateX(-500px);opacity:0;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1p5nvax-0"
})(["display:flex;flex-direction:column;align-items:stretch;width:900px;margin:auto;p{text-align:center;font-weight:500;font-size:2.5rem;}", " ", " animation-fill-mode:forwards;"], styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject()), function (props) {
  return props.active ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["animation:", " 0.3s ease-in-out;"], visibleContainer) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["animation:", " 0.3s ease-in-out;"], hiddenContainer);
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1p5nvax-1"
})(["justify-content:center;display:grid;grid-template-columns:25% 25%;gap:1.5em 2em;margin-top:4em;align-items:center;margin-top:4em;", ""], styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject2()));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1p5nvax-2"
})(["font-size:1.5rem;font-weight:500;letter-spacing:-0.03em;padding:0.5em 0;background:", ";box-shadow:1px 1px 4px 1px rgba(0,0,0,0.05);border-radius:8px;border:2px solid transparent;transition:transform 1s;", " outline-color:", ";&:hover{cursor:pointer;color:", ";border:2px solid ", ";transform:scale(1.2);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject3()), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.pink;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9uL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ2aXNpYmxlQ29udGFpbmVyIiwia2V5ZnJhbWVzIiwiaGlkZGVuQ29udGFpbmVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsIm1lZGlhIiwibGVzc1RoYW4iLCJwcm9wcyIsImFjdGl2ZSIsImNzcyIsIkNvbnRlbnQiLCJkaXYiLCJCdXR0b24iLCJidXR0b24iLCJ0aGVtZSIsImNvbG9ycyIsIndoaXRlIiwicGluayIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLG1FQUFILDBGQUF0QjtBQWNBLElBQU1DLGVBQWUsR0FBR0QsbUVBQUgsMEhBQXJCO0FBY08sSUFBTUUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHFMQWVsQkMsMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0Fma0IscUJBc0JsQixVQUFBQyxLQUFLO0FBQUEsU0FDTEEsS0FBSyxDQUFDQyxNQUFOLEdBQ0lDLDZEQURKLHVDQUVtQlYsZ0JBRm5CLElBSUlVLDZEQUpKLHVDQUttQlIsZUFMbkIsQ0FESztBQUFBLENBdEJhLENBQWY7QUFrQ0EsSUFBTVMsT0FBTyxHQUFHUCx5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLDhJQVVoQk4sMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0FWZ0IscUJBQWI7QUFrQkEsSUFBTU0sTUFBTSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWO0FBQUE7QUFBQTtBQUFBLDBUQU1IO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FORyxFQWFmWCwwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQWJlLHNCQWlCQTtBQUFBLE1BQUdRLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxJQUE1QjtBQUFBLENBakJBLEVBc0JOO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFHLE9BQTVCO0FBQUEsQ0F0Qk0sRUF1Qks7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsT0FBNUI7QUFBQSxDQXZCTCxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5YTEyZmQ5MjgyOTY1ZTY0M2JlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgbWVkaWEgZnJvbSAnc3R5bGVkLW1lZGlhLXF1ZXJ5J1xuXG5jb25zdCB2aXNpYmxlQ29udGFpbmVyID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuXG4gIH1cbmBcblxuY29uc3QgaGlkZGVuQ29udGFpbmVyID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uPHsgYWN0aXZlOiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgYH1cblxuICAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7dmlzaWJsZUNvbnRhaW5lcn0gMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYFxuICAgICAgOiBjc3NgXG4gICAgICAgICAgYW5pbWF0aW9uOiAke2hpZGRlbkNvbnRhaW5lcn0gMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYH1cblxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlO1xuICBnYXA6IDEuNWVtIDJlbTtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbi10b3A6IDRlbTtcblxuICAke21lZGlhLmxlc3NUaGFuKCdtZWRpdW0nKWBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEuMjVyZW07XG5cbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG5cbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cbiAgJHttZWRpYS5sZXNzVGhhbignbWVkaXVtJylgXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgYH1cblxuICBvdXRsaW5lLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5waW5rfTtcbiAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==