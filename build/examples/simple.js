webpackJsonp([0],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_align__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




function $id(id) {
  return document.getElementById(id);
}

function $val(sel) {
  sel = $id(sel);
  return sel.value;
}

function align() {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_align__["a" /* default */])($id('source'), $id('target'), {
    points: [$val('source_align_tb') + $val('source_align_lr'), $val('target_align_tb') + $val('target_align_lr')],
    offset: [$val('offset1'), $val('offset2')],
    targetOffset: [$val('targetOffset1'), $val('targetOffset2')],
    overflow: {
      adjustX: $id('adjustX').checked,
      adjustY: $id('adjustY').checked
    },
    useCssRight: $id('useCssRight').checked,
    useCssBottom: $id('useCssBottom').checked,
    useCssTransform: $id('useCssTransform').checked
  });
}

var div = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'dom-align'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'source:',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'select',
      { id: 'source_align_tb' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 't' },
        't'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'c' },
        'c'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'select',
      { id: 'source_align_lr' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'l' },
        'l'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'c' },
        'c'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'r' },
        'r'
      )
    ),
    '\xA0 target:',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'select',
      { id: 'target_align_tb' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 't' },
        't'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'c' },
        'c'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'select',
      { id: 'target_align_lr' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'l' },
        'l'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'c' },
        'c'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'option',
        { value: 'r' },
        'r'
      )
    ),
    '\xA0 offset: [',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'offset', id: 'offset1', defaultValue: '0', size: '3' }),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'offset', id: 'offset2', defaultValue: '0', size: '3' }),
    '] \xA0 targetOffset: [',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'offset', id: 'targetOffset1', defaultValue: '0', size: '3' }),
    ',',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'offset', id: 'targetOffset2', defaultValue: '0', size: '3' }),
    '] \xA0 overflow: \xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'adjustX:',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', id: 'adjustX' })
    ),
    '\xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'adjustY:',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', id: 'adjustY' })
    ),
    '\xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'useCssBottom:',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', id: 'useCssBottom' })
    ),
    '\xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'useCssRight:',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', id: 'useCssRight' })
    ),
    '\xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'useCssTransform:',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', id: 'useCssTransform', defaultChecked: !!window.TransitionEvent })
    ),
    '\xA0',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { id: 'align', onClick: align },
      'align'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        style: {
          width: 400,
          height: 400,
          overflow: 'auto',
          border: '1px solid green',
          position: 'relative'
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            background: 'yellow',
            width: 240,
            height: 240,
            margin: 50
          },
          id: 'target'
        },
        'target node'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 1000, height: 1000 } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            background: 'red',
            width: 50,
            height: 50,
            left: 0,
            top: 0,
            position: 'absolute',
            transition: 'all 0.5s'
          },
          id: 'source'
        },
        'source node'
      )
    )
  )
);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(div, $id('__react-content'));

/***/ })

},[196]);
//# sourceMappingURL=simple.js.map