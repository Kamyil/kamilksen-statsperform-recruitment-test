/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: AUTH_KEY, default */
/***/ (function(module) {

module.exports = {"AUTH_KEY":"9392bcdf1d172a983d5f55f1634ba27df76e95de"};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./resources/typescript/Components/ReposForm.ts":
/*!******************************************************!*\
  !*** ./resources/typescript/Components/ReposForm.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_tjum8aqcl=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposForm.ts",hash="6b2b424e5b1cd1266696144ebda35904f142086c",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposForm.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:20},end:{line:7,column:43}},"2":{start:{line:9,column:19},end:{line:9,column:40}},"3":{start:{line:11,column:21},end:{line:11,column:44}},"4":{start:{line:15,column:4},end:{line:15,column:46}},"5":{start:{line:16,column:4},end:{line:16,column:52}},"6":{start:{line:18,column:4},end:{line:31,column:6}},"7":{start:{line:19,column:26},end:{line:19,column:67}},"8":{start:{line:20,column:30},end:{line:20,column:73}},"9":{start:{line:22,column:6},end:{line:30,column:7}},"10":{start:{line:23,column:8},end:{line:26,column:11}},"11":{start:{line:27,column:8},end:{line:27,column:173}},"12":{start:{line:29,column:8},end:{line:29,column:15}},"13":{start:{line:33,column:4},end:{line:35,column:6}},"14":{start:{line:34,column:6},end:{line:34,column:35}},"15":{start:{line:39,column:4},end:{line:39,column:101}},"16":{start:{line:40,column:4},end:{line:40,column:118}},"17":{start:{line:44,column:4},end:{line:47,column:6}},"18":{start:{line:51,column:4},end:{line:56,column:5}},"19":{start:{line:52,column:6},end:{line:52,column:107}},"20":{start:{line:53,column:6},end:{line:53,column:19}},"21":{start:{line:55,column:6},end:{line:55,column:18}},"22":{start:{line:60,column:4},end:{line:65,column:5}},"23":{start:{line:61,column:6},end:{line:61,column:18}},"24":{start:{line:63,column:6},end:{line:63,column:41}},"25":{start:{line:64,column:6},end:{line:64,column:19}},"26":{start:{line:70,column:0},end:{line:70,column:30}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:14,column:16},end:{line:36,column:3}},line:14},"1":{name:"(anonymous_1)",decl:{start:{line:18,column:18},end:{line:18,column:19}},loc:{start:{line:18,column:24},end:{line:31,column:5}},line:18},"2":{name:"(anonymous_2)",decl:{start:{line:33,column:22},end:{line:33,column:23}},loc:{start:{line:33,column:28},end:{line:35,column:5}},line:33},"3":{name:"(anonymous_3)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:9},end:{line:41,column:3}},line:38},"4":{name:"(anonymous_4)",decl:{start:{line:43,column:2},end:{line:43,column:3}},loc:{start:{line:43,column:15},end:{line:48,column:3}},line:43},"5":{name:"(anonymous_5)",decl:{start:{line:50,column:2},end:{line:50,column:3}},loc:{start:{line:50,column:21},end:{line:57,column:3}},line:50},"6":{name:"(anonymous_6)",decl:{start:{line:59,column:2},end:{line:59,column:3}},loc:{start:{line:59,column:25},end:{line:66,column:3}},line:59}},branchMap:{"0":{loc:{start:{line:22,column:6},end:{line:30,column:7}},type:"if",locations:[{start:{line:22,column:6},end:{line:30,column:7}},{start:{line:22,column:6},end:{line:30,column:7}}],line:22},"1":{loc:{start:{line:22,column:10},end:{line:22,column:40}},type:"binary-expr",locations:[{start:{line:22,column:10},end:{line:22,column:21}},{start:{line:22,column:25},end:{line:22,column:40}}],line:22},"2":{loc:{start:{line:51,column:4},end:{line:56,column:5}},type:"if",locations:[{start:{line:51,column:4},end:{line:56,column:5}},{start:{line:51,column:4},end:{line:56,column:5}}],line:51},"3":{loc:{start:{line:60,column:4},end:{line:65,column:5}},type:"if",locations:[{start:{line:60,column:4},end:{line:65,column:5}},{start:{line:60,column:4},end:{line:65,column:5}}],line:60}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},inputSourceMap:{version:3,sources:["resources/typescript/Components/ReposForm.ts"],names:[],mappings:";;;;;;AAAA,MAAA,WAAA,GAAA,OAAA,CAAA,cAAA,CAAA;;AACA,MAAA,UAAA,GAAA,OAAA,CAAA,YAAA,CAAA;;AACA,MAAA,YAAA,GAAA,OAAA,CAAA,cAAA,CAAA;;AAUA,MAAa,SAAb,CAAsB;AAAtB,EAAA,WAAA,GAAA;AAEI,SAAA,QAAA,GAAW,IAAI,UAAA,CAAA,QAAJ,EAAX;AACA,SAAA,UAAA,GAAa,IAAI,YAAA,CAAA,UAAJ,EAAb;;AAmDO,SAAA,MAAA,GAAS,MAAW;AAEvB,YAAM,WAAW,GAAG,KAAK,YAAL,CAAkB,KAAK,MAAL,CAAY,UAA9B,CAApB;AACA,YAAM,eAAe,GAAG,KAAK,gBAAL,CAAsB,KAAK,MAAL,CAAY,QAAlC,CAAxB;;AAEA,UAAI,WAAW,IAAI,eAAnB,EAAoC;AAEhC,aAAK,QAAL,CAAc,GAAd,CAAkB;AACd,UAAA,QAAQ,EAAE,KAAK,MAAL,CAAY,QADR;AAEd,UAAA,UAAU,EAAE,KAAK,MAAL,CAAY;AAFV,SAAlB;AAIA,QAAA,KAAK,CAAC,6JAAD,CAAL;AACH,OAPD,MAOO;AAEH;AACH;AACJ,KAhBM;;AAsBA,SAAA,UAAA,GAAa,MAAW;AAC3B,WAAK,UAAL,CAAgB,UAAhB;AACH,KAFM;AAGV;;AAvEU,EAAA,IAAI,GAAA;AAEP,IAAA,QAAQ,CACH,aADL,CACmB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,OADjC,EAEK,gBAFL,CAEsB,OAFtB,EAE+B,KAAK,MAFpC;AAIA,IAAA,QAAQ,CACH,aADL,CACmB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,oBADjC,EAEK,gBAFL,CAEsB,OAFtB,EAE+B,KAAK,UAFpC;AAGH;;AAKD,MAAW,MAAX,GAAiB;AACb,WAAO;AACH,MAAA,QAAQ,EACH,QAAQ,CAAC,aAAT,CAAuB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,eAArC,EAA2E,KAF7E;AAGH,MAAA,UAAU,EACL,QAAQ,CAAC,aAAT,CAAuB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,iBAArC,EAA6E;AAJ/E,KAAP;AAMH;;AAEM,EAAA,YAAY,CAAC,IAAD,EAAa;AAC5B,QAAI,MAAM,CAAC,IAAI,IAAJ,CAAS,IAAT,CAAD,CAAN,KAA2B,cAA/B,EAA+C;AAC3C,MAAA,KAAK,CAAC,6FAAD,CAAL;AACA,aAAO,KAAP;AACH,KAHD,MAGO;AACH,aAAO,IAAP;AACH;AACJ;;AAEO,EAAA,gBAAgB,CAAC,IAAD,EAAK;AACzB,QAAI,IAAI,KAAK,EAAb,EAAiB;AACb,aAAO,IAAP;AACH,KAFD,MAEO;AACH,MAAA,KAAK,CAAC,2BAAD,CAAL;AACA,aAAO,KAAP;AACH;AACJ;;AA/CiB;;AAAtB,OAAA,CAAA,SAAA,GAAA,SAAA",sourcesContent:["import { Selector } from '../Selectors';\nimport { ReposTag } from './ReposTag';\nimport { ReposTable } from './ReposTable';\n\ninterface IReposForm {\n    dataUser: string,\n    dataUpdate: string\n}\n\n/**\n * Handles <repo data-user data-update> form on upper side of the screen.\n */\nexport class ReposForm {\n    // Inject other components\n    ReposTag = new ReposTag();\n    ReposTable = new ReposTable();\n\n    /**\n     * Initialises form by adding event listeners to form buttons\n     */\n    public init(): void {\n        // Register listeners on buttons\n        document\n            .querySelector(Selector.REPO.ADD_BTN)\n            .addEventListener('click', this.submit);\n\n        document\n            .querySelector(Selector.REPO.REPLACE_ALL_TAGS_BTN)\n            .addEventListener('click', this.replaceAll);\n    }\n\n    /**\n     * Returns `data-user` and `data-update` values, provided by user in UI\n     */\n    public get values(): IReposForm {\n        return {\n            dataUser: \n                (document.querySelector(Selector.REPO.DATA_USER_INPUT) as HTMLInputElement).value,\n            dataUpdate: \n                (document.querySelector(Selector.REPO.DATA_UPDATE_INPUT) as HTMLInputElement).value\n        }\n    }\n\n    public validateDate(date: string): boolean {\n        if (String(new Date(date)) === 'Invalid Date') {\n            alert('Invalid date format. Please provide date in following format: YEAR-MONTH-DAY ex. 2020-12-17');\n            return false;\n        } else {\n            return true;\n        }\n    }\n\n    private validateUsername(name): boolean {\n        if (name !== '') {\n            return true;\n        } else {\n            alert('data-user field is empty.')\n            return false;\n        }\n    }\n\n\n\n    /**\n     * Handles adding new <repos> tag after inputs validation\n     */\n    public submit = (): void => {\n        // Validate date format before submitting\n        const isDateValid = this.validateDate(this.values.dataUpdate);\n        const isUsernameValid = this.validateUsername(this.values.dataUser);\n\n        if (isDateValid && isUsernameValid) {\n            // if date is valid, then pass\n            this.ReposTag.add({\n                username: this.values.dataUser,\n                updateDate: this.values.dataUpdate\n            });\n            alert('Repos tag added successfully! Now you can replace it with content by hitting Replace All btn or check it in Browser Inspector in .repos__tags-container div');\n        } else {\n            // Alerts will be shown. Then shut the process down   \n            return;\n        }\n    }\n\n    /**\n     * Calls all <repos> tags to be replaced with content\n     * that can be visible by user\n     */\n    public replaceAll = (): void => {\n        this.ReposTable.replaceAll();\n    }\n}"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposForm.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_tjum8aqcl.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const Selectors_1=(cov_tjum8aqcl.s[1]++,__webpack_require__(/*! ../Selectors */ "./resources/typescript/Selectors.ts"));const ReposTag_1=(cov_tjum8aqcl.s[2]++,__webpack_require__(/*! ./ReposTag */ "./resources/typescript/Components/ReposTag.ts"));const ReposTable_1=(cov_tjum8aqcl.s[3]++,__webpack_require__(/*! ./ReposTable */ "./resources/typescript/Components/ReposTable.ts"));class ReposForm{constructor(){cov_tjum8aqcl.f[0]++;cov_tjum8aqcl.s[4]++;this.ReposTag=new ReposTag_1.ReposTag();cov_tjum8aqcl.s[5]++;this.ReposTable=new ReposTable_1.ReposTable();cov_tjum8aqcl.s[6]++;this.submit=()=>{cov_tjum8aqcl.f[1]++;const isDateValid=(cov_tjum8aqcl.s[7]++,this.validateDate(this.values.dataUpdate));const isUsernameValid=(cov_tjum8aqcl.s[8]++,this.validateUsername(this.values.dataUser));cov_tjum8aqcl.s[9]++;if((cov_tjum8aqcl.b[1][0]++,isDateValid)&&(cov_tjum8aqcl.b[1][1]++,isUsernameValid)){cov_tjum8aqcl.b[0][0]++;cov_tjum8aqcl.s[10]++;this.ReposTag.add({username:this.values.dataUser,updateDate:this.values.dataUpdate});cov_tjum8aqcl.s[11]++;alert('Repos tag added successfully! Now you can replace it with content by hitting Replace All btn or check it in Browser Inspector in .repos__tags-container div');}else{cov_tjum8aqcl.b[0][1]++;cov_tjum8aqcl.s[12]++;return;}};cov_tjum8aqcl.s[13]++;this.replaceAll=()=>{cov_tjum8aqcl.f[2]++;cov_tjum8aqcl.s[14]++;this.ReposTable.replaceAll();};}init(){cov_tjum8aqcl.f[3]++;cov_tjum8aqcl.s[15]++;document.querySelector(Selectors_1.Selector.REPO.ADD_BTN).addEventListener('click',this.submit);cov_tjum8aqcl.s[16]++;document.querySelector(Selectors_1.Selector.REPO.REPLACE_ALL_TAGS_BTN).addEventListener('click',this.replaceAll);}get values(){cov_tjum8aqcl.f[4]++;cov_tjum8aqcl.s[17]++;return{dataUser:document.querySelector(Selectors_1.Selector.REPO.DATA_USER_INPUT).value,dataUpdate:document.querySelector(Selectors_1.Selector.REPO.DATA_UPDATE_INPUT).value};}validateDate(date){cov_tjum8aqcl.f[5]++;cov_tjum8aqcl.s[18]++;if(String(new Date(date))==='Invalid Date'){cov_tjum8aqcl.b[2][0]++;cov_tjum8aqcl.s[19]++;alert('Invalid date format. Please provide date in following format: YEAR-MONTH-DAY ex. 2020-12-17');cov_tjum8aqcl.s[20]++;return false;}else{cov_tjum8aqcl.b[2][1]++;cov_tjum8aqcl.s[21]++;return true;}}validateUsername(name){cov_tjum8aqcl.f[6]++;cov_tjum8aqcl.s[22]++;if(name!==''){cov_tjum8aqcl.b[3][0]++;cov_tjum8aqcl.s[23]++;return true;}else{cov_tjum8aqcl.b[3][1]++;cov_tjum8aqcl.s[24]++;alert('data-user field is empty.');cov_tjum8aqcl.s[25]++;return false;}}}cov_tjum8aqcl.s[26]++;exports.ReposForm=ReposForm;

/***/ }),

/***/ "./resources/typescript/Components/ReposTable.ts":
/*!*******************************************************!*\
  !*** ./resources/typescript/Components/ReposTable.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_lh7qty500=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTable.ts",hash="2a2fb2b152d1d7ab347ea216d431d0ac229e34a3",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTable.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:16},end:{line:7,column:32}},"2":{start:{line:9,column:20},end:{line:9,column:43}},"3":{start:{line:11,column:23},end:{line:11,column:58}},"4":{start:{line:13,column:19},end:{line:13,column:40}},"5":{start:{line:17,column:4},end:{line:17,column:58}},"6":{start:{line:18,column:4},end:{line:18,column:46}},"7":{start:{line:22,column:19},end:{line:22,column:48}},"8":{start:{line:23,column:4},end:{line:23,column:37}},"9":{start:{line:24,column:4},end:{line:39,column:10}},"10":{start:{line:40,column:4},end:{line:40,column:74}},"11":{start:{line:44,column:21},end:{line:44,column:77}},"12":{start:{line:45,column:4},end:{line:54,column:8}},"13":{start:{line:45,column:28},end:{line:54,column:6}},"14":{start:{line:49,column:10},end:{line:49,column:21}},"15":{start:{line:50,column:20},end:{line:50,column:82}},"16":{start:{line:51,column:6},end:{line:51,column:28}},"17":{start:{line:52,column:6},end:{line:52,column:32}},"18":{start:{line:53,column:6},end:{line:53,column:78}},"19":{start:{line:58,column:21},end:{line:58,column:23}},"20":{start:{line:60,column:4},end:{line:76,column:5}},"21":{start:{line:61,column:6},end:{line:75,column:10}},"22":{start:{line:78,column:4},end:{line:78,column:22}},"23":{start:{line:82,column:4},end:{line:82,column:75}},"24":{start:{line:87,column:0},end:{line:87,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:16},end:{line:19,column:3}},line:16},"1":{name:"(anonymous_1)",decl:{start:{line:21,column:2},end:{line:21,column:3}},loc:{start:{line:21,column:23},end:{line:41,column:3}},line:21},"2":{name:"(anonymous_2)",decl:{start:{line:43,column:2},end:{line:43,column:3}},loc:{start:{line:43,column:15},end:{line:55,column:3}},line:43},"3":{name:"(anonymous_3)",decl:{start:{line:45,column:21},end:{line:45,column:22}},loc:{start:{line:45,column:28},end:{line:54,column:6}},line:45},"4":{name:"(anonymous_4)",decl:{start:{line:45,column:68},end:{line:45,column:69}},loc:{start:{line:45,column:81},end:{line:54,column:5}},line:45},"5":{name:"(anonymous_5)",decl:{start:{line:57,column:2},end:{line:57,column:3}},loc:{start:{line:57,column:41},end:{line:79,column:3}},line:57},"6":{name:"(anonymous_6)",decl:{start:{line:81,column:2},end:{line:81,column:3}},loc:{start:{line:81,column:42},end:{line:83,column:3}},line:81}},branchMap:{"0":{loc:{start:{line:64,column:22},end:{line:64,column:76}},type:"cond-expr",locations:[{start:{line:64,column:50},end:{line:64,column:57}},{start:{line:64,column:60},end:{line:64,column:76}}],line:64}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0]},inputSourceMap:{version:3,sources:["resources/typescript/Components/ReposTable.ts"],names:[],mappings:";;;;;;;;AAAA,MAAA,WAAA,GAAA,OAAA,CAAA,cAAA,CAAA;;AACA,MAAA,cAAA,GAAA,OAAA,CAAA,0BAAA,CAAA;;AAEA,MAAA,UAAA,GAAA,OAAA,CAAA,YAAA,CAAA;;AAMA,MAAa,UAAb,CAAuB;AAAvB,EAAA,WAAA,GAAA;AAGI,SAAA,YAAA,GAAe,IAAI,cAAA,CAAA,YAAJ,EAAf;AACA,SAAA,QAAA,GAAW,IAAI,UAAA,CAAA,QAAJ,EAAX;AAyFH;;AAjFU,EAAA,GAAG,CAAC,QAAD,EAAmB,KAAnB,EAAiC;AACvC,UAAM,MAAM,GAAG,QAAQ,CAAC,aAAT,CAAuB,KAAvB,CAAf;AACA,IAAA,MAAM,CAAC,SAAP,GAAmB,aAAnB;AACA,IAAA,MAAM,CAAC,SAAP,GAAmB;;8CAEmB,QAAQ;;;;;;;;;0BAS5B,KAAK,qBAAL,CAA2B,QAA3B,EAAqC,KAArC,CAA2C;;;;SAX7D;AAiBA,IAAA,QAAQ,CAAC,aAAT,CAAuB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,IAArC,EAA2C,MAA3C,CAAkD,MAAlD;AACH;;AAMM,EAAA,UAAU,GAAA;AACb,UAAM,QAAQ,GAA4B,QAAQ,CAAC,gBAAT,CAA0B,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,GAAxC,CAA1C;AAEA,IAAA,QAAQ,CAAC,OAAT,CAAwB,GAAP,IAAc,OAAA,CAAA,SAAA,CAAA,IAAA,EAAA,KAAA,CAAA,EAAA,KAAA,CAAA,EAAA,aAAA;AAC3B,YAAM;AAAE,QAAA,IAAF;AAAQ,QAAA;AAAR,UAAmB,GAAG,CAAC,OAA7B;AACA,YAAM,KAAK,GAAY,MAAM,KAAK,YAAL,CAAkB,wBAAlB,CAA2C,IAA3C,EAAiD,MAAjD,CAA7B;AAGA,WAAK,GAAL,CAAS,IAAT,EAAe,KAAf;AAEA,WAAK,QAAL,CAAc,SAAd;AAEA,MAAA,OAAO,CAAC,GAAR,CAAY,0DAAZ;AACH,KAV8B,CAA/B;AAWH;;AAQM,EAAA,qBAAqB,CAAC,QAAD,EAAmB,KAAnB,EAAiC;AACzD,QAAI,UAAU,GAAW,EAAzB;;AAEA,SAAK,MAAM,IAAX,IAAmB,KAAnB,EAA0B;AACtB,MAAA,UAAU,IAAI;;sBAEJ,IAAI,CAAC,IAAI;sBACT,IAAI,CAAC,WAAL,KAAqB,IAArB,GAA4B,OAA5B,GAAsC,IAAI,CAAC,WAAW;sBACtD,IAAI,CAAC,UAAU;;+BAEN,KAAK,mBAAL,CAAyB,QAAzB,EAAmC,IAAI,CAAC,IAAxC,CAA6C;;;;;;;;SANhE;AAeH;;AAED,WAAO,UAAP;AACH;;AAOM,EAAA,mBAAmB,CAAC,QAAD,EAAW,QAAX,EAA2B;AACjD,WAAO,sBAAsB,QAAQ,IAAI,QAAQ,qBAAjD;AACH;;AA5FkB;;AAAvB,OAAA,CAAA,UAAA,GAAA,UAAA",sourcesContent:["import { Selector } from '../Selectors';\nimport { ReposService } from '../Services/ReposService';\nimport { IRepo } from '../types';\nimport { ReposTag } from './ReposTag';\n\n\n/**\n * Table Component, responsible for displaying replaced tags with fetched data\n */\nexport class ReposTable {\n\n    // Inject dependencies\n    ReposService = new ReposService();\n    ReposTag = new ReposTag();\n\n    /**\n     * Injects prepared HTML to Table UI\n     * \n     * @param userName\n     * @param repos\n     */\n    public add(userName: string, repos: IRepo[]): void {\n        const newRow = document.createElement('div');\n        newRow.className = 'repos__user';\n        newRow.innerHTML = `\n        <!-- USER WITH REPOS START -->\n                <h1 class=\"repos__username\">${userName}</h1>\n                <table class=\"repos__table\">\n                    <thead>\n                        <th>Name</th>\n                        <th>Description</th>\n                        <th>Updated at</th>\n                        <th>Download</th>\n                    </thead>\n                    <tbody>\n                        ${this.parseReposToTableRows(userName, repos)}\n                    </tbody>\n                </table>\n        <!-- USER WITH REPOS END -->\n        `;\n\n        document.querySelector(Selector.REPO.LIST).append(newRow);\n    }\n\n    /**\n     * Replaces all ReposTag with new table row\n     * containing all repo informations from specific user\n     */\n    public replaceAll(): void {\n        const repoTags: NodeListOf<HTMLElement> = document.querySelectorAll(Selector.REPO.TAG);\n\n        repoTags.forEach(async (tag) => {\n            const { user, update } = tag.dataset;\n            const repos: IRepo[] = await this.ReposService.getReposFromSpecificDate(user, update);\n\n            // Add content from tag\n            this.add(user, repos);\n            // Remove tags\n            this.ReposTag.removeAll();\n            // Tell user what happened\n            console.log('Content downloaded succesfully. <repos> tags are cleared');\n        });\n    }\n\n    /**\n     * Prepares user's repository data into ready to show Table Row\n     * \n     * @param userName \n     * @param repos \n     */\n    public parseReposToTableRows(userName: string, repos: IRepo[]): string {\n        let resultHtml: string = '';\n\n        for (const repo of repos) {\n            resultHtml += `\n            <tr>\n                <td>${repo.name}</td>\n                <td>${repo.description === null ? 'Empty' : repo.description}</td>\n                <td>${repo.updated_at}</td>\n                <td>\n                    <a href=\"${this.prepareDownloadLink(userName, repo.name)}\"> \n                        <button class=\"btn--primary\">\n                            Download as ZIP\n                        </button>\n                    </a>\n\n                </td>\n            </tr>\n        `;\n        }\n\n        return resultHtml;\n    }\n\n    /**\n     * Prepares repository download link (as ZIP) from GitHub\n     * @param userName \n     * @param repoName \n     */\n    public prepareDownloadLink(userName, repoName: string): string {\n        return `https://github.com/${userName}/${repoName}/archive/master.zip`;\n    }\n}"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTable.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_lh7qty500.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const tslib_1=(cov_lh7qty500.s[1]++,__webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"));const Selectors_1=(cov_lh7qty500.s[2]++,__webpack_require__(/*! ../Selectors */ "./resources/typescript/Selectors.ts"));const ReposService_1=(cov_lh7qty500.s[3]++,__webpack_require__(/*! ../Services/ReposService */ "./resources/typescript/Services/ReposService.ts"));const ReposTag_1=(cov_lh7qty500.s[4]++,__webpack_require__(/*! ./ReposTag */ "./resources/typescript/Components/ReposTag.ts"));class ReposTable{constructor(){cov_lh7qty500.f[0]++;cov_lh7qty500.s[5]++;this.ReposService=new ReposService_1.ReposService();cov_lh7qty500.s[6]++;this.ReposTag=new ReposTag_1.ReposTag();}add(userName,repos){cov_lh7qty500.f[1]++;const newRow=(cov_lh7qty500.s[7]++,document.createElement('div'));cov_lh7qty500.s[8]++;newRow.className='repos__user';cov_lh7qty500.s[9]++;newRow.innerHTML=`
        <!-- USER WITH REPOS START -->
                <h1 class="repos__username">${userName}</h1>
                <table class="repos__table">
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Updated at</th>
                        <th>Download</th>
                    </thead>
                    <tbody>
                        ${this.parseReposToTableRows(userName,repos)}
                    </tbody>
                </table>
        <!-- USER WITH REPOS END -->
        `;cov_lh7qty500.s[10]++;document.querySelector(Selectors_1.Selector.REPO.LIST).append(newRow);}replaceAll(){cov_lh7qty500.f[2]++;const repoTags=(cov_lh7qty500.s[11]++,document.querySelectorAll(Selectors_1.Selector.REPO.TAG));cov_lh7qty500.s[12]++;repoTags.forEach(tag=>{cov_lh7qty500.f[3]++;cov_lh7qty500.s[13]++;return tslib_1.__awaiter(this,void 0,void 0,function*(){cov_lh7qty500.f[4]++;const{user,update}=(cov_lh7qty500.s[14]++,tag.dataset);const repos=(cov_lh7qty500.s[15]++,yield this.ReposService.getReposFromSpecificDate(user,update));cov_lh7qty500.s[16]++;this.add(user,repos);cov_lh7qty500.s[17]++;this.ReposTag.removeAll();cov_lh7qty500.s[18]++;console.log('Content downloaded succesfully. <repos> tags are cleared');});});}parseReposToTableRows(userName,repos){cov_lh7qty500.f[5]++;let resultHtml=(cov_lh7qty500.s[19]++,'');cov_lh7qty500.s[20]++;for(const repo of repos){cov_lh7qty500.s[21]++;resultHtml+=`
            <tr>
                <td>${repo.name}</td>
                <td>${repo.description===null?(cov_lh7qty500.b[0][0]++,'Empty'):(cov_lh7qty500.b[0][1]++,repo.description)}</td>
                <td>${repo.updated_at}</td>
                <td>
                    <a href="${this.prepareDownloadLink(userName,repo.name)}"> 
                        <button class="btn--primary">
                            Download as ZIP
                        </button>
                    </a>

                </td>
            </tr>
        `;}cov_lh7qty500.s[22]++;return resultHtml;}prepareDownloadLink(userName,repoName){cov_lh7qty500.f[6]++;cov_lh7qty500.s[23]++;return`https://github.com/${userName}/${repoName}/archive/master.zip`;}}cov_lh7qty500.s[24]++;exports.ReposTable=ReposTable;

/***/ }),

/***/ "./resources/typescript/Components/ReposTag.ts":
/*!*****************************************************!*\
  !*** ./resources/typescript/Components/ReposTag.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_jp69nttq3=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTag.ts",hash="0173cb5c31ca2456d28717b07554243705afebb8",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTag.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:20},end:{line:7,column:43}},"2":{start:{line:14,column:19},end:{line:14,column:72}},"3":{start:{line:15,column:4},end:{line:15,column:48}},"4":{start:{line:16,column:4},end:{line:16,column:35}},"5":{start:{line:17,column:4},end:{line:17,column:39}},"6":{start:{line:18,column:4},end:{line:18,column:89}},"7":{start:{line:22,column:4},end:{line:24,column:7}},"8":{start:{line:23,column:6},end:{line:23,column:19}},"9":{start:{line:28,column:4},end:{line:28,column:75}},"10":{start:{line:33,column:0},end:{line:33,column:28}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:10,column:2},end:{line:10,column:3}},loc:{start:{line:13,column:5},end:{line:19,column:3}},line:13},"1":{name:"(anonymous_1)",decl:{start:{line:21,column:2},end:{line:21,column:3}},loc:{start:{line:21,column:14},end:{line:25,column:3}},line:21},"2":{name:"(anonymous_2)",decl:{start:{line:22,column:69},end:{line:22,column:70}},loc:{start:{line:22,column:76},end:{line:24,column:5}},line:22},"3":{name:"(anonymous_3)",decl:{start:{line:27,column:2},end:{line:27,column:3}},loc:{start:{line:27,column:15},end:{line:29,column:3}},line:27}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0,"1":0,"2":0,"3":0},b:{},inputSourceMap:{version:3,sources:["resources/typescript/Components/ReposTag.ts"],names:[],mappings:";;;;;;AACA,MAAA,WAAA,GAAA,OAAA,CAAA,cAAA,CAAA;;AAKA,MAAa,QAAb,CAAqB;AAOV,EAAA,GAAG,CAAC;AAAE,IAAA,QAAF;AAAY,IAAA;AAAZ,GAAD,EAAiD;AACvD,UAAM,MAAM,GAAG,QAAQ,CAAC,aAAT,CAAuB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,GAArC,CAAf;AAEA,IAAA,MAAM,CAAC,OAAP,CAAe,EAAf,GAAoB,MAAM,CAAC,KAAK,MAAL,GAAc,CAAf,CAA1B;AACA,IAAA,MAAM,CAAC,OAAP,CAAe,IAAf,GAAsB,QAAtB;AACA,IAAA,MAAM,CAAC,OAAP,CAAe,MAAf,GAAwB,UAAxB;AAEA,IAAA,QAAQ,CAAC,aAAT,CAAuB,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,cAArC,EAAqD,WAArD,CAAiE,MAAjE;AACH;;AAKM,EAAA,SAAS,GAAA;AACZ,IAAA,QAAQ,CAAC,gBAAT,CAA0B,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,GAAxC,EACK,OADL,CACc,GAAD,IAAQ;AACb,MAAA,GAAG,CAAC,MAAJ;AACH,KAHL;AAIH;;AAKD,MAAY,MAAZ,GAAkB;AACd,WAAO,QAAQ,CAAC,gBAAT,CAA0B,WAAA,CAAA,QAAA,CAAS,IAAT,CAAc,GAAxC,EAA6C,MAApD;AACH;;AAhCgB;;AAArB,OAAA,CAAA,QAAA,GAAA,QAAA",sourcesContent:["import { IRepoTagDataAttributes } from '../types';\nimport { Selector } from '../Selectors';\n\n/**\n * Simple <repos> Tag manager\n */\nexport class ReposTag {\n\n    /**\n     * Adds new `<repo>` tag to the DOM with specified data attributes:\n     * @param username - Username\n     * @param updateDate - Update Date \n     */\n    public add({ username, updateDate }: IRepoTagDataAttributes): void {\n        const newTag = document.createElement(Selector.REPO.TAG);\n        \n        newTag.dataset.id = String(this.amount + 1);\n        newTag.dataset.user = username;\n        newTag.dataset.update = updateDate;\n\n        document.querySelector(Selector.REPO.TAGS_CONTAINER).appendChild(newTag);\n    }\n\n    /**\n     * Removes all <repos> tags\n     */\n    public removeAll(): void {\n        document.querySelectorAll(Selector.REPO.TAG)\n            .forEach((tag) => {\n                tag.remove();\n            });\n    }\n\n    /**\n     * Gets the current amount of <repos> tags\n     */\n    private get amount(): number {\n        return document.querySelectorAll(Selector.REPO.TAG).length;\n    }\n}"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Components/ReposTag.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_jp69nttq3.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const Selectors_1=(cov_jp69nttq3.s[1]++,__webpack_require__(/*! ../Selectors */ "./resources/typescript/Selectors.ts"));class ReposTag{add({username,updateDate}){cov_jp69nttq3.f[0]++;const newTag=(cov_jp69nttq3.s[2]++,document.createElement(Selectors_1.Selector.REPO.TAG));cov_jp69nttq3.s[3]++;newTag.dataset.id=String(this.amount+1);cov_jp69nttq3.s[4]++;newTag.dataset.user=username;cov_jp69nttq3.s[5]++;newTag.dataset.update=updateDate;cov_jp69nttq3.s[6]++;document.querySelector(Selectors_1.Selector.REPO.TAGS_CONTAINER).appendChild(newTag);}removeAll(){cov_jp69nttq3.f[1]++;cov_jp69nttq3.s[7]++;document.querySelectorAll(Selectors_1.Selector.REPO.TAG).forEach(tag=>{cov_jp69nttq3.f[2]++;cov_jp69nttq3.s[8]++;tag.remove();});}get amount(){cov_jp69nttq3.f[3]++;cov_jp69nttq3.s[9]++;return document.querySelectorAll(Selectors_1.Selector.REPO.TAG).length;}}cov_jp69nttq3.s[10]++;exports.ReposTag=ReposTag;

/***/ }),

/***/ "./resources/typescript/Selectors.ts":
/*!*******************************************!*\
  !*** ./resources/typescript/Selectors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1u8rd61twz=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Selectors.ts",hash="8d6afb8879c20ebfb9ce5b2094104d39468e1e57",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Selectors.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:6,column:0},end:{line:17,column:2}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},inputSourceMap:{version:3,sources:["resources/typescript/Selectors.ts"],names:[],mappings:";;;;;AAAa,OAAA,CAAA,QAAA,GAAW;AACpB,EAAA,IAAI,EAAE;AACF,IAAA,cAAc,EAAE,wBADd;AAEF,IAAA,GAAG,EAAE,OAFH;AAGF,IAAA,KAAK,EAAE,eAHL;AAIF,IAAA,IAAI,EAAE,kBAJJ;AAKF,IAAA,OAAO,EAAE,gBALP;AAMF,IAAA,eAAe,EAAE,yBANf;AAOF,IAAA,iBAAiB,EAAE,2BAPjB;AAQF,IAAA,oBAAoB,EAAE;AARpB;AADc,CAAX",sourcesContent:["export const Selector = {\n    REPO: {\n        TAGS_CONTAINER: '.repos__tags-container',\n        TAG: 'repos',\n        TABLE: '.repos__table',\n        LIST: '.repos__userlist',\n        ADD_BTN: '.repos__addBtn',\n        DATA_USER_INPUT: '.repos__input--dataUser',\n        DATA_UPDATE_INPUT: '.repos__input--dataUpdate',\n        REPLACE_ALL_TAGS_BTN: '.repos__replaceAllTagsBtn'\n    },\n}"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Selectors.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1u8rd61twz.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_1u8rd61twz.s[1]++;exports.Selector={REPO:{TAGS_CONTAINER:'.repos__tags-container',TAG:'repos',TABLE:'.repos__table',LIST:'.repos__userlist',ADD_BTN:'.repos__addBtn',DATA_USER_INPUT:'.repos__input--dataUser',DATA_UPDATE_INPUT:'.repos__input--dataUpdate',REPLACE_ALL_TAGS_BTN:'.repos__replaceAllTagsBtn'}};

/***/ }),

/***/ "./resources/typescript/Services/ReposService.ts":
/*!*******************************************************!*\
  !*** ./resources/typescript/Services/ReposService.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2ovz5fotfy=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Services/ReposService.ts",hash="d4da76fd88209e84c4ce32214df8021f3e3d6181",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Services/ReposService.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:16},end:{line:7,column:32}},"2":{start:{line:9,column:15},end:{line:9,column:46}},"3":{start:{line:13,column:4},end:{line:28,column:7}},"4":{start:{line:16,column:6},end:{line:27,column:7}},"5":{start:{line:17,column:8},end:{line:22,column:54}},"6":{start:{line:22,column:28},end:{line:22,column:52}},"7":{start:{line:24,column:8},end:{line:24,column:72}},"8":{start:{line:26,column:8},end:{line:26,column:22}},"9":{start:{line:32,column:4},end:{line:32,column:57}},"10":{start:{line:32,column:32},end:{line:32,column:55}},"11":{start:{line:36,column:4},end:{line:40,column:7}},"12":{start:{line:37,column:20},end:{line:37,column:46}},"13":{start:{line:38,column:28},end:{line:38,column:57}},"14":{start:{line:39,column:6},end:{line:39,column:27}},"15":{start:{line:45,column:0},end:{line:45,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:12,column:2},end:{line:12,column:3}},loc:{start:{line:12,column:18},end:{line:29,column:3}},line:12},"1":{name:"(anonymous_1)",decl:{start:{line:13,column:51},end:{line:13,column:52}},loc:{start:{line:13,column:64},end:{line:28,column:5}},line:13},"2":{name:"(anonymous_2)",decl:{start:{line:22,column:16},end:{line:22,column:17}},loc:{start:{line:22,column:28},end:{line:22,column:52}},line:22},"3":{name:"(anonymous_3)",decl:{start:{line:31,column:2},end:{line:31,column:3}},loc:{start:{line:31,column:20},end:{line:33,column:3}},line:31},"4":{name:"(anonymous_4)",decl:{start:{line:32,column:24},end:{line:32,column:25}},loc:{start:{line:32,column:32},end:{line:32,column:55}},line:32},"5":{name:"(anonymous_5)",decl:{start:{line:35,column:2},end:{line:35,column:3}},loc:{start:{line:35,column:50},end:{line:41,column:3}},line:35},"6":{name:"(anonymous_6)",decl:{start:{line:36,column:51},end:{line:36,column:52}},loc:{start:{line:36,column:64},end:{line:40,column:5}},line:36}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{},inputSourceMap:{version:3,sources:["resources/typescript/Services/ReposService.ts"],names:[],mappings:";;;;;;;;AACA,MAAA,MAAA,GAAA,OAAA,CAAA,sBAAA,CAAA;;AAEA,MAAa,YAAb,CAAyB;AAIV,EAAA,KAAK,CAAC,QAAD,EAAiB;;AACjC,UAAI,MAAJ;;AACA,UAAI;AACF,cAAM,KAAK,CAAC,gCAAgC,QAAQ,qBAAzC,EAAgE;AACzE,UAAA,OAAO,EAAE;AACP,4BAAgB,kBADT;AAEP,6BAAiB,MAAM,CAAC;AAFjB;AADgE,SAAhE,CAAL,CAKH,IALG,CAKG,QAAD,IAAc,MAAM,GAAG,QAAQ,CAAC,IAAT,EALzB,CAAN;AAMD,OAPD,CAOE,OAAO,GAAP,EAAY;AACZ,QAAA,OAAO,CAAC,KAAR,CAAc,mCAAd,EAAmD,GAAG,CAAC,OAAvD;AACD,OATD,SASU;AACR,eAAO,MAAP;AACD;AACF,K;AAAA;;AAMM,EAAA,IAAI,CAAC,KAAD,EAAiB,IAAjB,EAAqB;AAC9B,WAAO,KAAK,CAAC,MAAN,CAAa,IAAI,IAAI,IAAI,CAAC,UAAL,IAAmB,IAAxC,CAAP;AACD;;AAMY,EAAA,wBAAwB,CAAC,QAAD,EAAW,WAAX,EAAsB;;AACzD,YAAM,KAAK,GAAY,MAAM,KAAK,KAAL,CAAW,QAAX,CAA7B;AACA,YAAM,aAAa,GAAG,KAAK,IAAL,CAAU,KAAV,EAAiB,WAAjB,CAAtB;AAEA,aAAO,aAAP;AACD,K;AAAA;;AArCsB;;AAAzB,OAAA,CAAA,YAAA,GAAA,YAAA",sourcesContent:["import { IRepoUser, IRepo } from 'types';\nimport * as CONFIG from '../../../config.json';\n\nexport class ReposService {\n  /**\n   * Fetches and returns `ALL (!)` user repositories from Github\n   */\n  public async fetch(username: string): Promise<IRepo[]> {\n    let result;\n    try {\n      await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {\n        headers: {\n          'Content-Type': 'application/json',\n          'Authorization': CONFIG.AUTH_KEY\n        },\n      }).then((response) => result = response.json());\n    } catch (err) {\n      console.error(`Could not fetch user repositories`, err.message);\n    } finally {\n      return result;\n    }\n  }\n\n  /**\n   * Filters and returns all repositories last updated from specified date\n   * @param repos \n   */\n  public sort(repos: IRepo[], date): IRepo[] {\n    return repos.filter(repo => repo.updated_at >= date);\n  }\n\n  /**\n   * Fetches all user repositories and returns filtered ones\n   * by specified last update date\n   */\n  public async getReposFromSpecificDate(userName, updatedDate): Promise<IRepo[]> {\n    const repos: IRepo[] = await this.fetch(userName);\n    const filteredRepos = this.sort(repos, updatedDate);\n\n    return filteredRepos;\n  }\n}"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/Services/ReposService.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2ovz5fotfy.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const tslib_1=(cov_2ovz5fotfy.s[1]++,__webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"));const CONFIG=(cov_2ovz5fotfy.s[2]++,__webpack_require__(/*! ../../../config.json */ "./config.json"));class ReposService{fetch(username){cov_2ovz5fotfy.f[0]++;cov_2ovz5fotfy.s[3]++;return tslib_1.__awaiter(this,void 0,void 0,function*(){cov_2ovz5fotfy.f[1]++;let result;cov_2ovz5fotfy.s[4]++;try{cov_2ovz5fotfy.s[5]++;yield fetch(`https://api.github.com/users/${username}/repos?sort=updated`,{headers:{'Content-Type':'application/json','Authorization':CONFIG.AUTH_KEY}}).then(response=>{cov_2ovz5fotfy.f[2]++;cov_2ovz5fotfy.s[6]++;return result=response.json();});}catch(err){cov_2ovz5fotfy.s[7]++;console.error(`Could not fetch user repositories`,err.message);}finally{cov_2ovz5fotfy.s[8]++;return result;}});}sort(repos,date){cov_2ovz5fotfy.f[3]++;cov_2ovz5fotfy.s[9]++;return repos.filter(repo=>{cov_2ovz5fotfy.f[4]++;cov_2ovz5fotfy.s[10]++;return repo.updated_at>=date;});}getReposFromSpecificDate(userName,updatedDate){cov_2ovz5fotfy.f[5]++;cov_2ovz5fotfy.s[11]++;return tslib_1.__awaiter(this,void 0,void 0,function*(){cov_2ovz5fotfy.f[6]++;const repos=(cov_2ovz5fotfy.s[12]++,yield this.fetch(userName));const filteredRepos=(cov_2ovz5fotfy.s[13]++,this.sort(repos,updatedDate));cov_2ovz5fotfy.s[14]++;return filteredRepos;});}}cov_2ovz5fotfy.s[15]++;exports.ReposService=ReposService;

/***/ }),

/***/ "./resources/typescript/main.ts":
/*!**************************************!*\
  !*** ./resources/typescript/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_917u9504h=function(){var path="/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/main.ts",hash="d5abdd34a1a3061f5ffb6bb8a93f37e5f51c8ec3",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/main.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:20},end:{line:7,column:53}},"2":{start:{line:9,column:21},end:{line:9,column:55}},"3":{start:{line:11,column:19},end:{line:11,column:51}},"4":{start:{line:13,column:19},end:{line:13,column:48}},"5":{start:{line:14,column:0},end:{line:14,column:24}},"6":{start:{line:15,column:18},end:{line:15,column:45}},"7":{start:{line:16,column:0},end:{line:16,column:17}},"8":{start:{line:17,column:17},end:{line:17,column:42}},"9":{start:{line:18,column:0},end:{line:18,column:21}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{},b:{},inputSourceMap:{version:3,sources:["resources/typescript/main.ts"],names:[],mappings:";;;;;;AAAA,MAAA,WAAA,GAAA,OAAA,CAAA,wBAAA,CAAA;;AACA,MAAA,YAAA,GAAA,OAAA,CAAA,yBAAA,CAAA;;AACA,MAAA,UAAA,GAAA,OAAA,CAAA,uBAAA,CAAA;;AAGA,MAAM,UAAU,GAAG,IAAI,YAAA,CAAA,UAAJ,EAAnB;AACA,UAAU,CAAC,UAAX;AAGA,MAAM,SAAS,GAAG,IAAI,WAAA,CAAA,SAAJ,EAAlB;AACA,SAAS,CAAC,IAAV;AAEA,MAAM,QAAQ,GAAG,IAAI,UAAA,CAAA,QAAJ,EAAjB;AAEA,QAAQ,CAAC,SAAT",sourcesContent:["import { ReposForm } from './Components/ReposForm';\nimport { ReposTable } from \"./Components/ReposTable\";\nimport { ReposTag } from './Components/ReposTag';\n\n// Replace the example <repos> tag due to task description on App init\nconst reposTable = new ReposTable();\nreposTable.replaceAll();\n\n// and initialise form, connecting event listeners on buttons in the same time\nconst reposForm = new ReposForm();\nreposForm.init();\n\nconst reposTag = new ReposTag();\n// and cleanup all repos tags as well\nreposTag.removeAll();\n// Other tags can be added/removed/replaced to table rows later in UI \n"],sourceRoot:"/Users/kamyil/Desktop/statsperform-recruitment-test/",file:"/Users/kamyil/Desktop/statsperform-recruitment-test/resources/typescript/main.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_917u9504h.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const ReposForm_1=(cov_917u9504h.s[1]++,__webpack_require__(/*! ./Components/ReposForm */ "./resources/typescript/Components/ReposForm.ts"));const ReposTable_1=(cov_917u9504h.s[2]++,__webpack_require__(/*! ./Components/ReposTable */ "./resources/typescript/Components/ReposTable.ts"));const ReposTag_1=(cov_917u9504h.s[3]++,__webpack_require__(/*! ./Components/ReposTag */ "./resources/typescript/Components/ReposTag.ts"));const reposTable=(cov_917u9504h.s[4]++,new ReposTable_1.ReposTable());cov_917u9504h.s[5]++;reposTable.replaceAll();const reposForm=(cov_917u9504h.s[6]++,new ReposForm_1.ReposForm());cov_917u9504h.s[7]++;reposForm.init();const reposTag=(cov_917u9504h.s[8]++,new ReposTag_1.ReposTag());cov_917u9504h.s[9]++;reposTag.removeAll();

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./resources/typescript/main.ts ./resources/scss/main.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/typescript/main.ts */"./resources/typescript/main.ts");
module.exports = __webpack_require__(/*! ./resources/scss/main.scss */"./resources/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map