/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto/Roboto-Black.ttf */ "./src/Roboto/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto/Roboto-BlackItalic.ttf */ "./src/Roboto/Roboto-BlackItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  background-color: darkgray;\n}\n\n.site {\ndisplay: grid;\ngrid-template-columns: 200px minmax(85%, 900px) ;\ngrid-template-rows: 100px minmax(100%, 1050px);\n}\n\n.navbar {\n  height: 150px;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n.navbarList {\ndisplay: flex;\njustify-content: space-around;\nlist-style: none;\nwidth: 400px;\n}\n\n.navbarList li {\n  background-color: aliceblue;\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.navbarList li:hover {\n  cursor: pointer;\n}\n\n.sidebar{\nwidth: 140px;\ngrid-column-start: 1;\ngrid-column-end: 2;\ngrid-row-start: 2;\ngrid-row-end: 3;\n}\n\n.sidebarList {\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\nlist-style: none;\npadding-left: 0;\nmargin-left: 8px;\n}\n\n.sidebarList li {\n  background-color: aliceblue;\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.sidebarList li:hover {\n  cursor: pointer;\n}\n\n\n\n#projects {\n  padding: 0;\n}\n\n#projects li{\n  list-style: none;\n  background-color: rgb(195, 204, 211);\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.content {\n  font-family: 'Roboto';\n  background-color: gray;\n  border: 2px solid black;\n\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.addTask {\n  color: white;\n  background-color: green;\n  border: 2px solid white;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.addTask:hover {\n  cursor: pointer;\n}\n\n.divForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 150px;\n}\n\n#submitForm:hover {\n  cursor: pointer;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 150px 150px 150px 150px;\n  grid-template-rows: 25px 25px 25px;\n  gap: 5px;\n  padding: 15px;\n  width: 620px;\n  justify-content: space-between;\n  border: 2px solid black;\n  background-color: darkgray;\n\n}\n\n.tasks {\n  display: grid;\n  grid-template-columns: 190px 190px 190px 190px 190px;\n  justify-content: center;\nwidth: minmax(100%, 978px);\nborder-top: 2px black solid;\npadding: 10px;\n}\n\n.card {\n  background-color: darkgray;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 150px;\n  padding: 3px;\n  margin: 5px;\n  border: 2px white solid;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;yDACsD;EACtD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;AACA,aAAa;AACb,gDAAgD;AAChD,8CAA8C;AAC9C;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;AACA,aAAa;AACb,6BAA6B;AAC7B,gBAAgB;AAChB,YAAY;AACZ;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;AACA,YAAY;AACZ,oBAAoB;AACpB,kBAAkB;AAClB,iBAAiB;AACjB,eAAe;AACf;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,6BAA6B;AAC7B,gBAAgB;AAChB,eAAe;AACf,gBAAgB;AAChB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;;;AAIA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB;;EAEvB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,kCAAkC;EAClC,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,uBAAuB;EACvB,0BAA0B;;AAE5B;;AAEA;EACE,aAAa;EACb,oDAAoD;EACpD,uBAAuB;AACzB,0BAA0B;AAC1B,2BAA2B;AAC3B,aAAa;AACb;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto/Roboto-Black.ttf') format('ttf'),\n    url('./Roboto/Roboto-BlackItalic.ttf') format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  background-color: darkgray;\n}\n\n.site {\ndisplay: grid;\ngrid-template-columns: 200px minmax(85%, 900px) ;\ngrid-template-rows: 100px minmax(100%, 1050px);\n}\n\n.navbar {\n  height: 150px;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n.navbarList {\ndisplay: flex;\njustify-content: space-around;\nlist-style: none;\nwidth: 400px;\n}\n\n.navbarList li {\n  background-color: aliceblue;\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.navbarList li:hover {\n  cursor: pointer;\n}\n\n.sidebar{\nwidth: 140px;\ngrid-column-start: 1;\ngrid-column-end: 2;\ngrid-row-start: 2;\ngrid-row-end: 3;\n}\n\n.sidebarList {\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\nlist-style: none;\npadding-left: 0;\nmargin-left: 8px;\n}\n\n.sidebarList li {\n  background-color: aliceblue;\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.sidebarList li:hover {\n  cursor: pointer;\n}\n\n\n\n#projects {\n  padding: 0;\n}\n\n#projects li{\n  list-style: none;\n  background-color: rgb(195, 204, 211);\n  padding: 5px 15px 5px 15px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.content {\n  font-family: 'Roboto';\n  background-color: gray;\n  border: 2px solid black;\n\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.addTask {\n  color: white;\n  background-color: green;\n  border: 2px solid white;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.addTask:hover {\n  cursor: pointer;\n}\n\n.divForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 150px;\n}\n\n#submitForm:hover {\n  cursor: pointer;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 150px 150px 150px 150px;\n  grid-template-rows: 25px 25px 25px;\n  gap: 5px;\n  padding: 15px;\n  width: 620px;\n  justify-content: space-between;\n  border: 2px solid black;\n  background-color: darkgray;\n\n}\n\n.tasks {\n  display: grid;\n  grid-template-columns: 190px 190px 190px 190px 190px;\n  justify-content: center;\nwidth: minmax(100%, 978px);\nborder-top: 2px black solid;\npadding: 10px;\n}\n\n.card {\n  background-color: darkgray;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 150px;\n  padding: 3px;\n  margin: 5px;\n  border: 2px white solid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factory/projectFactory.js":
/*!***************************************!*\
  !*** ./src/factory/projectFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const projectFactory = (name, description) => {

    let project = [];

    return {name, description, project};
}



/***/ }),

/***/ "./src/factory/taskFactory.js":
/*!************************************!*\
  !*** ./src/factory/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
const taskFactory = (taskTitle, taskDescription, taskPriority, taskTimeDate) => {

    return { taskTitle, taskDescription, taskPriority, taskTimeDate };

};



/***/ }),

/***/ "./src/htmlGenerator.js":
/*!******************************!*\
  !*** ./src/htmlGenerator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendProjects": () => (/* binding */ appendProjects),
/* harmony export */   "appendTask": () => (/* binding */ appendTask),
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const newProjectBtn = document.querySelector('#newProjectBtn');
const divForm = document.querySelector('.divForm');


//@todo fix multiplying form
function createForm() {
    divForm.innerHTML = addProjectFormOptions();

    content.insertBefore(divForm, content.firstChild);

    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        (0,___WEBPACK_IMPORTED_MODULE_0__.createTask)(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value,
            ___WEBPACK_IMPORTED_MODULE_0__.projects[document.querySelector('#project').value].project
        )

    }
}

function appendTask(project) {

    project.sort(___WEBPACK_IMPORTED_MODULE_0__.compareTasks);

    let child = tasks.lastElementChild;
    while (child) {
        tasks.removeChild(child);
        child = tasks.lastElementChild;
    }

    project.forEach(function (value, i) {

        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + i;

        let title = document.createElement('div');
        title.innerHTML = `Title: ${value.taskTitle}`;
        title.className = 'cardTitle';
        card.appendChild(title);

        let description = document.createElement('div');
        description.innerHTML = `Description: ${value.taskDescription}`;
        description.className = 'cardDescription';
        card.appendChild(description);

        let priority = document.createElement('div');
        priority.innerHTML = `Priority: ${value.taskPriority}`;
        priority.className = 'cardPriority';
        card.appendChild(priority);

        let dateTime = document.createElement('div');
        dateTime.innerHTML = `Time and Date: ${value.taskTimeDate}`;
        dateTime.className = 'cardDateTime';
        card.appendChild(dateTime);

        tasks.appendChild(card);

        let btn = document.createElement('button');
        btn.className = 'rmTaskBtn';
        btn.textContent = 'Remove Task';
        btn.id = 'rmbtn' + i;
        card.appendChild(btn);

        btn.addEventListener('click', () => {
            
            project.splice(i, 1);
            tasks.removeChild(card);
            (0,___WEBPACK_IMPORTED_MODULE_0__.updateProjects)();
        });

    });
}


function appendProjects(project) {

    const projectList = document.querySelector('#projects');

    let child = projectList.lastElementChild;
    while (child) {
        projectList.removeChild(child);
        child = projectList.lastElementChild;
    }

    for (let i = project.length - 1; i >= 0; i--) {


        let projectListElement = document.createElement('li');
        projectListElement.textContent = `${project[i].name}`;
        projectListElement.className = 'projectListElement';
        projectList.appendChild(projectListElement);


        projectListElement.addEventListener('click', () => {
            appendTask(project[i].project);

            let projectContainer = document.createElement('div');
            let projectDisplayedName = document.createElement('div');
            let projectDisplayedDescr = document.createElement('p');

            projectContainer.className = 'projectContainer';
            divForm.innerHTML = '';


            projectDisplayedName.textContent = project[i].name;
            projectDisplayedDescr.textContent = project[i].description;

            projectContainer.appendChild(projectDisplayedName);
            projectContainer.appendChild(projectDisplayedDescr);
            divForm.appendChild(projectContainer);

        });
    }
}

newProjectBtn.addEventListener('click', () => {
    divForm.innerHTML = projectForm;

    document.querySelector('#projectForm').onsubmit = function (e) {
        e.preventDefault();

        (0,___WEBPACK_IMPORTED_MODULE_0__.createProject)(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
        )
        appendProjects(___WEBPACK_IMPORTED_MODULE_0__.projects);
    }
});

document.querySelector('#projectsBtn').addEventListener('click', function (e) {

    if (e.target !== this)
        return;

    toggleHideProjects();

});



function toggleHideProjects() {
    let projectsList = document.querySelector('#projects');

    if (projectsList.style.display != 'none') {
        projectsList.style.display = 'none';
    }
    else {
        projectsList.style.display = 'block';
    }

}


function addProjectFormOptions() {
    let formOptions = ``;

    ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach((element, i) => {
        formOptions += `<option value="${i}">${element.name}</option>`;
    })

    let taskForm = `<form id ="taskForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" required>

<label for="description">Description:</label>
<input type="text" id="description" name="description">


<label for="priority">Priority:</label>
<select id="priority" name="priority" value="1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

<label for="dateTime">Time and Date:</label>
<input type="datetime-local" id="dateTime" name="dateTime" value="" >



<label for="project"></label>
<select id="project" name="project">
    ${formOptions}
</select>

<input type="submit" value="Submit" id="submitForm">
</form>`;

    return taskForm;
}





const projectForm = `<form id ="projectForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" required>

<label for="description">Description:</label>
<input type="text" id="description" name="description">
<input type="submit" value="Submit" id="submitForm">
</form>`;





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareTasks": () => (/* binding */ compareTasks),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factory_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory/taskFactory.js */ "./src/factory/taskFactory.js");
/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlGenerator */ "./src/htmlGenerator.js");
/* harmony import */ var _factory_projectFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/projectFactory */ "./src/factory/projectFactory.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






/* const defaultProject = []; */



let projects = [];




function createProject(projectName, projectDescription) {
    let newProject = (0,_factory_projectFactory__WEBPACK_IMPORTED_MODULE_3__.projectFactory)(projectName, projectDescription);

    projects.push(newProject);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(projects);

}


function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = (0,_factory_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(taskTitle, taskDescription, taskPriority, taskTimeDate);
    if (project == undefined) {
        project = projects[0].project;
    }
    project.push(newTask);
    (0,_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__.appendTask)(project);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(projects);
}


document.querySelector('.addTask').addEventListener('click', () => {

    (0,_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__.createForm)();
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(projects);

});

function updateProjects() {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(projects);
}

function compareTasks(taskA, taskB) {
    if (taskA.taskTimeDate < taskB.taskTimeDate) {
        return -1;
    }
    if (taskA.taskTimeDate < taskB.taskTimeDate) {
        return 1;
    }
    return 0;
}


function init() {
    if (!localStorage.getItem('projects')) {
        createProject('Default Project', 'The default project');
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(projects);
      } else {
        projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.loadProjects)();
      }
    (0,_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__.appendProjects)(projects);

}

init();




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


function saveProjects(project) {

    localStorage.setItem('projects', JSON.stringify(project));
}


function loadProjects() {
    const currentProject = JSON.parse(localStorage.getItem('projects'));
    return currentProject;
}



/***/ }),

/***/ "./src/Roboto/Roboto-Black.ttf":
/*!*************************************!*\
  !*** ./src/Roboto/Roboto-Black.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf56c1b149d0a5e8d7c6.ttf";

/***/ }),

/***/ "./src/Roboto/Roboto-BlackItalic.ttf":
/*!*******************************************!*\
  !*** ./src/Roboto/Roboto-BlackItalic.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd62a10743bd89a3d97c.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5L3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5L3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9odG1sR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uc2l0ZSB7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IG1pbm1heCg4NSUsIDkwMHB4KSA7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBtaW5tYXgoMTAwJSwgMTA1MHB4KTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG59XFxuXFxuLm5hdmJhckxpc3Qge1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxubGlzdC1zdHlsZTogbm9uZTtcXG53aWR0aDogNDAwcHg7XFxufVxcblxcbi5uYXZiYXJMaXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXZiYXJMaXN0IGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXJ7XFxud2lkdGg6IDE0MHB4O1xcbmdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbmdyaWQtY29sdW1uLWVuZDogMjtcXG5ncmlkLXJvdy1zdGFydDogMjtcXG5ncmlkLXJvdy1lbmQ6IDM7XFxufVxcblxcbi5zaWRlYmFyTGlzdCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxucGFkZGluZy1sZWZ0OiAwO1xcbm1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5zaWRlYmFyTGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3QgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4jcHJvamVjdHMge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI3Byb2plY3RzIGxpe1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDIwNCwgMjExKTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDM7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGl2Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuI3N1Ym1pdEZvcm06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDE1MHB4IDE1MHB4IDE1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDI1cHggMjVweDtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA2MjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuXFxufVxcblxcbi50YXNrcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOTBweCAxOTBweCAxOTBweCAxOTBweCAxOTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbndpZHRoOiBtaW5tYXgoMTAwJSwgOTc4cHgpO1xcbmJvcmRlci10b3A6IDJweCBibGFjayBzb2xpZDtcXG5wYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQjt5REFDc0Q7RUFDdEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYixnREFBZ0Q7QUFDaEQsOENBQThDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsa0NBQWtDO0VBQ2xDLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsdUJBQXVCO0FBQ3pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0dGYnKSxcXG4gICAgdXJsKCcuL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5zaXRlIHtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggbWlubWF4KDg1JSwgOTAwcHgpIDtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IG1pbm1heCgxMDAlLCAxMDUwcHgpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbn1cXG5cXG4ubmF2YmFyTGlzdCB7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5saXN0LXN0eWxlOiBub25lO1xcbndpZHRoOiA0MDBweDtcXG59XFxuXFxuLm5hdmJhckxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5hdmJhckxpc3QgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhcntcXG53aWR0aDogMTQwcHg7XFxuZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbmdyaWQtcm93LXN0YXJ0OiAyO1xcbmdyaWQtcm93LWVuZDogMztcXG59XFxuXFxuLnNpZGViYXJMaXN0IHtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxubGlzdC1zdHlsZTogbm9uZTtcXG5wYWRkaW5nLWxlZnQ6IDA7XFxubWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLnNpZGViYXJMaXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyTGlzdCBsaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbiNwcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jcHJvamVjdHMgbGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjA0LCAyMTEpO1xcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogMztcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXZGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4jc3VibWl0Rm9ybTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMTUwcHggMTUwcHggMTUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggMjVweCAyNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDYyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG5cXG59XFxuXFxuLnRhc2tzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5MHB4IDE5MHB4IDE5MHB4IDE5MHB4IDE5MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxud2lkdGg6IG1pbm1heCgxMDAlLCA5NzhweCk7XFxuYm9yZGVyLXRvcDogMnB4IGJsYWNrIHNvbGlkO1xcbnBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcblxuICAgIGxldCBwcm9qZWN0ID0gW107XG5cbiAgICByZXR1cm4ge25hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0fTtcbn1cblxuZXhwb3J0IHtwcm9qZWN0RmFjdG9yeX07IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSwgdGFza1RpbWVEYXRlKSA9PiB7XG5cbiAgICByZXR1cm4geyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5LCB0YXNrVGltZURhdGUgfTtcblxufTtcblxuZXhwb3J0IHt0YXNrRmFjdG9yeX07IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMsIHVwZGF0ZVByb2plY3RzLCBjb21wYXJlVGFza3MgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RCdG4nKTtcbmNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2Rm9ybScpO1xuXG5cbi8vQHRvZG8gZml4IG11bHRpcGx5aW5nIGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gICAgZGl2Rm9ybS5pbm5lckhUTUwgPSBhZGRQcm9qZWN0Rm9ybU9wdGlvbnMoKTtcblxuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGRpdkZvcm0sIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjcmVhdGVUYXNrKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGVUaW1lJykudmFsdWUsXG4gICAgICAgICAgICBwcm9qZWN0c1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlXS5wcm9qZWN0XG4gICAgICAgIClcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFzayhwcm9qZWN0KSB7XG5cbiAgICBwcm9qZWN0LnNvcnQoY29tcGFyZVRhc2tzKTtcblxuICAgIGxldCBjaGlsZCA9IHRhc2tzLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSB0YXNrcy5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cblxuICAgIHByb2plY3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICAgICAgY2FyZC5pZCA9ICdjYXJkJyArIGk7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaXRsZTogJHt2YWx1ZS50YXNrVGl0bGV9YDtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmRUaXRsZSc7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246ICR7dmFsdWUudGFza0Rlc2NyaXB0aW9ufWA7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkRGVzY3JpcHRpb24nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke3ZhbHVlLnRhc2tQcmlvcml0eX1gO1xuICAgICAgICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZFByaW9yaXR5JztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IGRhdGVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVUaW1lLmlubmVySFRNTCA9IGBUaW1lIGFuZCBEYXRlOiAke3ZhbHVlLnRhc2tUaW1lRGF0ZX1gO1xuICAgICAgICBkYXRlVGltZS5jbGFzc05hbWUgPSAnY2FyZERhdGVUaW1lJztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlVGltZSk7XG5cbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ3JtVGFza0J0bic7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XG4gICAgICAgIGJ0bi5pZCA9ICdybWJ0bicgKyBpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0cyhwcm9qZWN0KSB7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuXG4gICAgbGV0IGNoaWxkID0gcHJvamVjdExpc3QubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IHByb2plY3RMaXN0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHByb2plY3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblxuXG4gICAgICAgIGxldCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0W2ldLm5hbWV9YDtcbiAgICAgICAgcHJvamVjdExpc3RFbGVtZW50LmNsYXNzTmFtZSA9ICdwcm9qZWN0TGlzdEVsZW1lbnQnO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEVsZW1lbnQpO1xuXG5cbiAgICAgICAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXBwZW5kVGFzayhwcm9qZWN0W2ldLnByb2plY3QpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IHByb2plY3REaXNwbGF5ZWROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdERpc3BsYXllZERlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0Q29udGFpbmVyJztcbiAgICAgICAgICAgIGRpdkZvcm0uaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICAgICAgcHJvamVjdERpc3BsYXllZE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheWVkRGVzY3IudGV4dENvbnRlbnQgPSBwcm9qZWN0W2ldLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5ZWROYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXllZERlc2NyKTtcbiAgICAgICAgICAgIGRpdkZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpdkZvcm0uaW5uZXJIVE1MID0gcHJvamVjdEZvcm07XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICAgICAgKVxuICAgICAgICBhcHBlbmRQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdG9nZ2xlSGlkZVByb2plY3RzKCk7XG5cbn0pO1xuXG5cblxuZnVuY3Rpb24gdG9nZ2xlSGlkZVByb2plY3RzKCkge1xuICAgIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcblxuICAgIGlmIChwcm9qZWN0c0xpc3Quc3R5bGUuZGlzcGxheSAhPSAnbm9uZScpIHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0c0xpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1PcHRpb25zKCkge1xuICAgIGxldCBmb3JtT3B0aW9ucyA9IGBgO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICBmb3JtT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke2VsZW1lbnQubmFtZX08L29wdGlvbj5gO1xuICAgIH0pXG5cbiAgICBsZXQgdGFza0Zvcm0gPSBgPGZvcm0gaWQgPVwidGFza0Zvcm1cIj5cbjxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcmVxdWlyZWQ+XG5cbjxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cblxuPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbjxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiMVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxsYWJlbCBmb3I9XCJkYXRlVGltZVwiPlRpbWUgYW5kIERhdGU6PC9sYWJlbD5cbjxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBpZD1cImRhdGVUaW1lXCIgbmFtZT1cImRhdGVUaW1lXCIgdmFsdWU9XCJcIiA+XG5cblxuXG48bGFiZWwgZm9yPVwicHJvamVjdFwiPjwvbGFiZWw+XG48c2VsZWN0IGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCI+XG4gICAgJHtmb3JtT3B0aW9uc31cbjwvc2VsZWN0PlxuXG48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgaWQ9XCJzdWJtaXRGb3JtXCI+XG48L2Zvcm0+YDtcblxuICAgIHJldHVybiB0YXNrRm9ybTtcbn1cblxuXG5cblxuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGA8Zm9ybSBpZCA9XCJwcm9qZWN0Rm9ybVwiPlxuPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZD5cblxuPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cbjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBpZD1cInN1Ym1pdEZvcm1cIj5cbjwvZm9ybT5gO1xuXG5cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSwgYXBwZW5kVGFzaywgYXBwZW5kUHJvamVjdHMgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5L3Rhc2tGYWN0b3J5LmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvcm0sIGFwcGVuZFRhc2ssIGFwcGVuZFByb2plY3RzIH0gZnJvbSAnLi9odG1sR2VuZXJhdG9yJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5L3Byb2plY3RGYWN0b3J5JztcbmltcG9ydCB7IHNhdmVQcm9qZWN0cywgbG9hZFByb2plY3RzIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4vKiBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFtdOyAqL1xuXG5cblxubGV0IHByb2plY3RzID0gW107XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHksIHRhc2tUaW1lRGF0ZSwgcHJvamVjdCkge1xuXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5LCB0YXNrVGltZURhdGUpO1xuICAgIGlmIChwcm9qZWN0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0ID0gcHJvamVjdHNbMF0ucHJvamVjdDtcbiAgICB9XG4gICAgcHJvamVjdC5wdXNoKG5ld1Rhc2spO1xuICAgIGFwcGVuZFRhc2socHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RzKHByb2plY3RzKTtcbn1cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY3JlYXRlRm9ybSgpO1xuICAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0cygpIHtcbiAgICBzYXZlUHJvamVjdHMocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlVGFza3ModGFza0EsIHRhc2tCKSB7XG4gICAgaWYgKHRhc2tBLnRhc2tUaW1lRGF0ZSA8IHRhc2tCLnRhc2tUaW1lRGF0ZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0YXNrQS50YXNrVGltZURhdGUgPCB0YXNrQi50YXNrVGltZURhdGUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnLCAnVGhlIGRlZmF1bHQgcHJvamVjdCcpO1xuICAgICAgICBzYXZlUHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcbiAgICAgIH1cbiAgICBhcHBlbmRQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbn1cblxuaW5pdCgpO1xuXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QsIHByb2plY3RzLCB1cGRhdGVQcm9qZWN0cywgY29tcGFyZVRhc2tzIH07IiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzKHByb2plY3QpIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbn1cblxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIGxvYWRQcm9qZWN0cywgc2F2ZVByb2plY3RzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9