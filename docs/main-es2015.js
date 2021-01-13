(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-events/artist-events.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artist-events/artist-events.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-d-flex back-to-results\" (click)=\"bandsInTownService.navigateToHome()\">\n  <div class=\"p-mr-1\"><i class=\"p-mr-2 pi pi-angle-left\"></i></div>\n  <div class=\"p-mr-1\">Back to results</div>\n</div>\n\n<app-search-result></app-search-result>\n<div class=\"events-container\">\n  <div class=\"p-grid p-fluid\">\n      <div *ngFor=\"let event of bandsInTownService.events\" class=\"p-col-3 event\">\n        <p-card subheader=\"EVENT DETAILS\">\n          <p-divider></p-divider>\n          <div class=\"p-grid p-fluid\">\n            <div class=\"p-col-6\">\n              <div class=\"p-d-flex p-flex-column\">\n                <div class=\"p-mb-2\"><strong>Country</strong></div>\n                <div class=\"p-mb-2\"  title=\"{{event.venue.country}}\">\n                  <label class=\"text-ellipsis\">{{event.venue.country}}</label>\n                </div>\n                <br>\n                <div><strong>Venue</strong></div>\n                <div class=\"text-ellipsis\" title=\"{{event.venue.name}}\">\n                  <label>{{event.venue.name}}</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-col-6\">\n              <div class=\"p-d-flex p-flex-column\">\n                <div class=\"p-mb-2\"><strong>City</strong></div>\n                <div class=\"p-mb-2\" title=\"{{event.venue.city}}\">\n                  <label class=\"text-ellipsis\">{{event.venue.city}}</label>\n                </div>\n                <br>\n                <div><strong>Date</strong></div>\n                <div>\n                  <label>{{event.datetime | date:'MMM d, y' }}</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </p-card>\n      </div>\n    <div *ngIf=\"bandsInTownService.events.length === 0\">\n      <strong>No results found. Please try with another artist.</strong>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-landing-page/search-landing-page.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-landing-page/search-landing-page.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"bandsInTownService.searchState !== 'eventSearched'\">\n  <div class=\"p-grid p-fluid search-bar-container p-jc-center\">\n    <div class=\"p-col-12 p-md-4\">\n      <form [formGroup]=\"searchForm\" (ngSubmit)=\"getSearchResults()\">\n        <div class=\"input-group {{bandsInTownService.searchState === 'idle' ? '' : 'input-on-top' }}\">\n          <input type=\"text\" pInputText placeholder=\"Search\" formControlName=\"searchQuery\"\n            (keyup.enter)=\"$event.stopPropagation();getSearchResults()\">\n          <i class=\"pi pi-search\" (click)=\"getSearchResults()\"></i>\n        </div>\n        <div class=\"enhanced-search\">\n          <label>\n            <p-checkbox p-checkbox id=\"checkbox\" formControlName=\"enhancedSearch\"></p-checkbox>\n            Enhanced search\n          </label>\n        </div>\n      </form>\n    </div>\n  </div>\n  <app-search-result></app-search-result>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"container\">\n  <div class=\"progress-bar\" *ngIf=\"bandsInTownService.searchState === 'eventSearching'\">\n    <p-progressBar mode=\"indeterminate\"></p-progressBar>\n  </div>\n  <div class=\"results-div\">\n    <div *ngIf=\"bandsInTownService.searchState === 'searching'\" class=\"p-grid p-fluid p-jc-center results-container\">\n      <ng-container *ngTemplateOutlet=\"skeleton\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"skeleton\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"skeleton\"></ng-container>\n    </div>\n  </div>\n\n  <ng-template #skeleton>\n    <div class=\"p-col-2 artist skeleton\">\n      <div class=\"image\">\n        <p-skeleton shape=\"circle\" size=\"50px\"></p-skeleton>\n      </div>\n      <div class=\"detail skeleton-detail\">\n        <p-skeleton height=\"10px\"></p-skeleton>\n        <br>\n        <p-skeleton height=\"10px\"></p-skeleton>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #searchResult let-artist=\"artist\">\n    <div class=\"image\">\n      <p-avatar image=\"{{artist.thumb_url ? artist.thumb_url : artist.imageSrc}}\" styleClass=\"p-overflow-hidden\"\n        shape=\"circle\" size=\"xlarge\"></p-avatar>\n    </div>\n    <div class=\"detail\">\n      <label class=\"title\">{{artist.name}}</label>\n      <br>\n      <a href=\"{{artist.facebook_page_url ? artist.facebook_page_url : ''}}\"\n        class=\"link\">{{artist.facebook_page_url ? artist.facebook_page_url : 'N/A'}}</a>\n    </div>\n  </ng-template>\n\n  <div *ngIf=\"bandsInTownService.searchState === 'searched' || bandsInTownService.selectedArtist !== null\" class=\"results-div\">\n    <span *ngIf=\"bandsInTownService.selectedArtist === null\">\n      <div class=\"results-count\">\n        <strong>{{bandsInTownService.searchResults.length}}\n          Result{{bandsInTownService.searchResults.length > 1 ? 's' : ''}}\n          found for \"{{bandsInTownService.query}}\"</strong>\n      </div>\n      <div class=\"p-grid p-fluid p-jc-center results-container\">\n          <div *ngFor=\"let artist of bandsInTownService.searchResults\" class=\"p-col-2 artist\"\n            (click)=\"bandsInTownService.getEvents(artist)\">\n            <ng-container *ngTemplateOutlet=\"searchResult;context: {artist: artist}\"></ng-container>\n          </div>\n      </div>\n    </span>\n    <div *ngIf=\"bandsInTownService.selectedArtist !== null\" class=\"p-grid p-fluid results-container selected-artist\">\n      <div  class=\"p-col-2 artist\">\n        <ng-container *ngTemplateOutlet=\"searchResult;context: {artist: bandsInTownService.selectedArtist}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</span>\n<router-outlet></router-outlet>\n");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_landing_page_search_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-landing-page/search-landing-page.component */ "./src/app/search-landing-page/search-landing-page.component.ts");
/* harmony import */ var _artist_events_artist_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist-events/artist-events.component */ "./src/app/artist-events/artist-events.component.ts");





const routes = [
    { path: '', component: _search_landing_page_search_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchLandingPageComponent"] },
    { path: 'artist-events/:name', component: _artist_events_artist_events_component__WEBPACK_IMPORTED_MODULE_4__["ArtistEventsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-body {\n  width: 100vw;\n  height: 100vh;\n  background: #f7f7f7;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXFdvcmtcXFBlcnNvbmFsXFxLZWVwVHJ1Y2tpblxcV2ViIERldiBBc3NpZ25tZW50XFxQcm9qZWN0XFxiYW5kcy1pbi10b3duL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLm1haW4tYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_landing_page_search_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-landing-page/search-landing-page.component */ "./src/app/search-landing-page/search-landing-page.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _artist_events_artist_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist-events/artist-events.component */ "./src/app/artist-events/artist-events.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatar */ "./node_modules/primeng/fesm2015/primeng-avatar.js");
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatargroup */ "./node_modules/primeng/fesm2015/primeng-avatargroup.js");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ "./node_modules/primeng/fesm2015/primeng-skeleton.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/divider */ "./node_modules/primeng/fesm2015/primeng-divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _search_landing_page_search_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["SearchLandingPageComponent"],
            _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"],
            _artist_events_artist_events_component__WEBPACK_IMPORTED_MODULE_7__["ArtistEventsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
            primeng_avatar__WEBPACK_IMPORTED_MODULE_13__["AvatarModule"],
            primeng_avatargroup__WEBPACK_IMPORTED_MODULE_14__["AvatarGroupModule"],
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__["SkeletonModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_17__["DividerModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/artist-events/artist-events.component.scss":
/*!************************************************************!*\
  !*** ./src/app/artist-events/artist-events.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-device-width: 1200px) {\n  .back-to-results, .events-container {\n    margin: 0 100px;\n  }\n}\n@media screen and (max-device-width: 1199px) {\n  .back-to-results, .events-container {\n    margin: 0 30px;\n  }\n\n  .event {\n    width: 100%;\n  }\n}\n.back-to-results {\n  font-weight: 900;\n  cursor: pointer;\n  width: auto;\n  margin-top: 50px;\n}\n.events-container {\n  padding: 0 10px;\n  height: calc(100vh - 50px - 100px);\n}\n.events-container .p-card-header {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0LWV2ZW50cy9HOlxcV29ya1xcUGVyc29uYWxcXEtlZXBUcnVja2luXFxXZWIgRGV2IEFzc2lnbm1lbnRcXFByb2plY3RcXGJhbmRzLWluLXRvd24vc3JjXFxhcHBcXGFydGlzdC1ldmVudHNcXGFydGlzdC1ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGlzdC1ldmVudHMvYXJ0aXN0LWV2ZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsY0FBQTtFQ0NGOztFREVBO0lBQ0UsV0FBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7QUNBRjtBREVFO0VBQ0UsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXJ0aXN0LWV2ZW50cy9hcnRpc3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xyXG4gIC5iYWNrLXRvLXJlc3VsdHMsIC5ldmVudHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCAxMDBweDsgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDExOTlweCkge1xyXG4gIC5iYWNrLXRvLXJlc3VsdHMsIC5ldmVudHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2stdG8tcmVzdWx0cyB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmV2ZW50cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4IC0gMTAwcHgpO1xyXG5cclxuICAucC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSB7XG4gIC5iYWNrLXRvLXJlc3VsdHMsIC5ldmVudHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMTk5cHgpIHtcbiAgLmJhY2stdG8tcmVzdWx0cywgLmV2ZW50cy1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICB9XG5cbiAgLmV2ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmJhY2stdG8tcmVzdWx0cyB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5ldmVudHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4IC0gMTAwcHgpO1xufVxuLmV2ZW50cy1jb250YWluZXIgLnAtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/artist-events/artist-events.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/artist-events/artist-events.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtistEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistEventsComponent", function() { return ArtistEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/bands-in-town/bands-in-town.service */ "./src/app/services/bands-in-town/bands-in-town.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ArtistEventsComponent = class ArtistEventsComponent {
    constructor(bandsInTownService) {
        this.bandsInTownService = bandsInTownService;
    }
    ngOnInit() {
        const artist = localStorage.getItem('selectedArtist');
        if (artist && JSON.parse(artist)) {
            this.bandsInTownService.selectedArtist = JSON.parse(artist);
            if (this.bandsInTownService.events.length === 0) {
                this.bandsInTownService.getEvents(JSON.parse(artist));
            }
        }
    }
};
ArtistEventsComponent.ctorParameters = () => [
    { type: _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__["BandsInTownService"] }
];
ArtistEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-artist-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist-events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-events/artist-events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist-events.component.scss */ "./src/app/artist-events/artist-events.component.scss")).default]
    })
], ArtistEventsComponent);



/***/ }),

/***/ "./src/app/search-landing-page/search-landing-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/search-landing-page/search-landing-page.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------- Desktop ----------- */\n@media screen and (min-device-width: 1200px) {\n  .search-bar-container .input-group {\n    margin-top: 200px;\n    transition: margin 700ms;\n  }\n  .search-bar-container .input-group.input-on-top {\n    margin-top: 100px;\n  }\n\n  .p-grid-4 {\n    width: 285px;\n  }\n}\n@media screen and (max-device-width: 1199px) {\n  .search-bar-container .input-group {\n    margin-top: 50px;\n  }\n\n  .p-grid-4 {\n    width: 100%;\n  }\n}\n.search-bar-container {\n  padding: 10px 10px;\n}\n.search-bar-container .input-group {\n  position: relative;\n}\n.search-bar-container .input-group input {\n  height: 45px;\n  width: 100%;\n  border: none;\n  border-radius: 2px;\n  padding-left: 5px;\n  padding-right: 45px;\n  box-shadow: 0px 1px 28px -13px rgba(0, 0, 0, 0.37);\n}\n.search-bar-container .input-group i {\n  opacity: 0.7;\n  position: absolute;\n  right: 0;\n  padding: 15px;\n  cursor: pointer;\n}\n.search-bar-container .enhanced-search {\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWxhbmRpbmctcGFnZS9HOlxcV29ya1xcUGVyc29uYWxcXEtlZXBUcnVja2luXFxXZWIgRGV2IEFzc2lnbm1lbnRcXFByb2plY3RcXGJhbmRzLWluLXRvd24vc3JjXFxhcHBcXHNlYXJjaC1sYW5kaW5nLXBhZ2VcXHNlYXJjaC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1sYW5kaW5nLXBhZ2Uvc2VhcmNoLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQUNBO0VBR007SUFDRSxpQkFBQTtJQUNBLHdCQUFBO0VDRE47RURHTTtJQUNFLGlCQUFBO0VDRFI7O0VETUU7SUFDRSxZQUFBO0VDSEo7QUFDRjtBRE1BO0VBR007SUFDRSxnQkFBQTtFQ05OOztFRFVFO0lBQ0UsV0FBQTtFQ1BKO0FBQ0Y7QURVQTtFQUNFLGtCQUFBO0FDUkY7QURVRTtFQUNFLGtCQUFBO0FDUko7QURVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FDUk47QURXSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ1ROO0FEYUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1sYW5kaW5nLXBhZ2Uvc2VhcmNoLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tIERlc2t0b3AgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuc2VhcmNoLWJhci1jb250YWluZXIge1xyXG4gICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbiA3MDBtcztcclxuXHJcbiAgICAgICAgJi5pbnB1dC1vbi10b3Age1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnAtZ3JpZC00IHtcclxuICAgICAgd2lkdGg6IDI4NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIC5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wLWdyaWQtNCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAyOHB4IC0xM3B4IHJnYmEoMCwwLDAsMC4zNyk7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVuaGFuY2VkLXNlYXJjaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLyogLS0tLS0tLS0tLS0gRGVza3RvcCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xuICAuc2VhcmNoLWJhci1jb250YWluZXIgLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gNzAwbXM7XG4gIH1cbiAgLnNlYXJjaC1iYXItY29udGFpbmVyIC5pbnB1dC1ncm91cC5pbnB1dC1vbi10b3Age1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG5cbiAgLnAtZ3JpZC00IHtcbiAgICB3aWR0aDogMjg1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMTk5cHgpIHtcbiAgLnNlYXJjaC1iYXItY29udGFpbmVyIC5pbnB1dC1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5wLWdyaWQtNCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5zZWFyY2gtYmFyLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoLWJhci1jb250YWluZXIgLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDI4cHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjM3KTtcbn1cbi5zZWFyY2gtYmFyLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAgaSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlYXJjaC1iYXItY29udGFpbmVyIC5lbmhhbmNlZC1zZWFyY2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/search-landing-page/search-landing-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/search-landing-page/search-landing-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLandingPageComponent", function() { return SearchLandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/bands-in-town/bands-in-town.service */ "./src/app/services/bands-in-town/bands-in-town.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SearchLandingPageComponent = class SearchLandingPageComponent {
    /**
     * Creates an instance of SearchLandingPageComponent.
     *
     * @param {BandsInTownService} bandsInTownService
     * @param {FormBuilder} formBuilder
     * @memberof SearchLandingPageComponent
     */
    constructor(bandsInTownService, formBuilder) {
        this.bandsInTownService = bandsInTownService;
        this.formBuilder = formBuilder;
    }
    /**
     * This is an angular hook called on initialization of component
     *
     * @memberof SearchLandingPageComponent
     */
    ngOnInit() {
        this.createForm();
        const oldQuery = localStorage.getItem('query');
        if (oldQuery) {
            this.setQuery(oldQuery);
        }
    }
    /**
     * This method initiates the form group
     *
     * @memberof SearchLandingPageComponent
     */
    createForm() {
        this.searchForm = this.formBuilder.group({
            searchQuery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            enhancedSearch: [[]]
        });
    }
    /**
     * This method checks for basic result (one result) or enhanced results (keyword matching list)
     *
     * @memberof SearchLandingPageComponent
     */
    getSearchResults() {
        const query = this.searchForm.get('searchQuery').value;
        if (query.length > 0) {
            this.bandsInTownService.query = query;
            localStorage.setItem('enhanced', this.searchForm.get('enhancedSearch').value.length > 0 ? 'enhanced' : '');
            if (this.searchForm.get('enhancedSearch').value.length > 0) {
                this.bandsInTownService.getArtists('originApi/searchSuggestions', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('searchTerm', query).set('cameFromCode', '257'), true);
            }
            else {
                this.bandsInTownService.getArtists('api/artists/' + query, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('app_id', 'something'), false);
            }
        }
    }
    setQuery(query) {
        this.searchForm.get('searchQuery').patchValue(query);
        const enhancedValue = localStorage.getItem('enhanced');
        this.searchForm.get('enhancedSearch').setValue(enhancedValue === 'enhanced' ? [undefined] : '');
        this.getSearchResults();
    }
};
SearchLandingPageComponent.ctorParameters = () => [
    { type: _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__["BandsInTownService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SearchLandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-landing-page/search-landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-landing-page.component.scss */ "./src/app/search-landing-page/search-landing-page.component.scss")).default]
    })
], SearchLandingPageComponent);



/***/ }),

/***/ "./src/app/search-result/search-result.component.scss":
/*!************************************************************!*\
  !*** ./src/app/search-result/search-result.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-device-width: 1200px) {\n  .results-div .results-count {\n    left: 15vw;\n  }\n  .results-div .results-container.selected-artist {\n    height: auto;\n    padding-left: 100px !important;\n  }\n  .results-div .results-container .artist {\n    height: 100px;\n  }\n  .results-div .results-container .artist .image {\n    top: 20px;\n  }\n  .results-div .results-container .artist .detail {\n    left: 80px;\n    top: 35px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 64%;\n  }\n  .results-div .results-container .artist .detail.skeleton-detail {\n    width: 72%;\n  }\n}\n@media screen and (max-device-width: 1199px) {\n  .results-div {\n    padding: 0 9px;\n  }\n  .results-div .results-count {\n    left: 3vw;\n  }\n  .results-div .results-container.selected-artist {\n    height: auto;\n    padding: 10px 40px !important;\n    margin-left: -25px;\n    margin-top: 0 !important;\n  }\n  .results-div .results-container .artist {\n    width: 100%;\n    height: 150px;\n  }\n  .results-div .results-container .artist .image {\n    left: 44%;\n  }\n  .results-div .results-container .artist .detail {\n    top: 80px;\n    text-align: center;\n    width: 100%;\n  }\n}\n.container {\n  position: relative;\n}\n.container .progress-bar {\n  height: 15px;\n  position: absolute;\n  width: 100vw;\n  top: -25px;\n}\n.container .results-div {\n  position: relative;\n}\n.container .results-div .results-count {\n  position: absolute;\n  top: -20px;\n}\n.container .results-div .results-container {\n  margin-top: 15px;\n  overflow-y: auto;\n  height: calc(100vh - 200px);\n  padding: 10px 22px;\n  padding: 10px;\n}\n.container .results-div .results-container.selected-artist {\n  height: auto;\n}\n.container .results-div .results-container .artist {\n  position: relative;\n  background: white;\n  margin: 10px;\n  cursor: pointer;\n}\n.container .results-div .results-container .artist.skeleton {\n  background: none;\n  cursor: default;\n}\n.container .results-div .results-container .artist .image {\n  position: absolute;\n}\n.container .results-div .results-container .artist .detail {\n  position: absolute;\n}\n.container .results-div .results-container .artist .detail .title,\n.container .results-div .results-container .artist .detail .link {\n  font-weight: bold;\n}\n.container .results-div .results-container .artist .detail .link {\n  font-size: 12px;\n  color: #039dfc;\n}\n.container .results-div .results-container .artist .detail .link:hover {\n  color: #0352fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9HOlxcV29ya1xcUGVyc29uYWxcXEtlZXBUcnVja2luXFxXZWIgRGV2IEFzc2lnbm1lbnRcXFByb2plY3RcXGJhbmRzLWluLXRvd24vc3JjXFxhcHBcXHNlYXJjaC1yZXN1bHRcXHNlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0UsVUFBQTtFQ0FKO0VES0k7SUFDRSxZQUFBO0lBQ0EsOEJBQUE7RUNITjtFRE1JO0lBQ0UsYUFBQTtFQ0pOO0VETU07SUFDRSxTQUFBO0VDSlI7RURPTTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQ0xSO0VET1E7SUFDRSxVQUFBO0VDTFY7QUFDRjtBRGFBO0VBQ0U7SUFDRSxjQUFBO0VDWEY7RURhRTtJQUNFLFNBQUE7RUNYSjtFRGdCSTtJQUNFLFlBQUE7SUFDQSw2QkFBQTtJQUNBLGtCQUFBO0lBQ0Esd0JBQUE7RUNkTjtFRGlCSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDZk47RURpQk07SUFDRSxTQUFBO0VDZlI7RURrQk07SUFDRSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDaEJSO0FBQ0Y7QURzQkE7RUFDRSxrQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDcEJKO0FEdUJFO0VBQ0Usa0JBQUE7QUNyQko7QUR1Qkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNyQk47QUR3Qkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN0Qk47QUR3Qk07RUFDRSxZQUFBO0FDdEJSO0FEeUJNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDdkJSO0FEeUJRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDdkJWO0FEMEJRO0VBQ0Usa0JBQUE7QUN4QlY7QUQyQlE7RUFDRSxrQkFBQTtBQ3pCVjtBRDJCVTs7RUFFRSxpQkFBQTtBQ3pCWjtBRDRCVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDMUJaO0FENEJZO0VBQ0UsY0FBQTtBQzFCZCIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcclxuICAucmVzdWx0cy1kaXYge1xyXG4gICAgLnJlc3VsdHMtY291bnQge1xyXG4gICAgICBsZWZ0OiAxNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcblxyXG4gICAgICAmLnNlbGVjdGVkLWFydGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFydGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgbGVmdDogODBweDtcclxuICAgICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aWR0aDogNjQlO1xyXG5cclxuICAgICAgICAgICYuc2tlbGV0b24tZGV0YWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTE5OXB4KSB7XHJcbiAgLnJlc3VsdHMtZGl2IHtcclxuICAgIHBhZGRpbmc6IDAgOXB4O1xyXG5cclxuICAgIC5yZXN1bHRzLWNvdW50IHtcclxuICAgICAgbGVmdDogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcblxyXG4gICAgICAmLnNlbGVjdGVkLWFydGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnRpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcblxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICBsZWZ0OiA0NCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgIHRvcDogODBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cy1kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5yZXN1bHRzLWNvdW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxuICAgICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgJi5zZWxlY3RlZC1hcnRpc3Qge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFydGlzdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICYuc2tlbGV0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAzOWRmYztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDM1MmZjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnJlc3VsdHMtZGl2IC5yZXN1bHRzLWNvdW50IHtcbiAgICBsZWZ0OiAxNXZ3O1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIuc2VsZWN0ZWQtYXJ0aXN0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAucmVzdWx0cy1kaXYgLnJlc3VsdHMtY29udGFpbmVyIC5hcnRpc3QgLmltYWdlIHtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbiAgLnJlc3VsdHMtZGl2IC5yZXN1bHRzLWNvbnRhaW5lciAuYXJ0aXN0IC5kZXRhaWwge1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgdG9wOiAzNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNjQlO1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuZGV0YWlsLnNrZWxldG9uLWRldGFpbCB7XG4gICAgd2lkdGg6IDcyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDExOTlweCkge1xuICAucmVzdWx0cy1kaXYge1xuICAgIHBhZGRpbmc6IDAgOXB4O1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb3VudCB7XG4gICAgbGVmdDogM3Z3O1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIuc2VsZWN0ZWQtYXJ0aXN0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucmVzdWx0cy1kaXYgLnJlc3VsdHMtY29udGFpbmVyIC5hcnRpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLnJlc3VsdHMtZGl2IC5yZXN1bHRzLWNvbnRhaW5lciAuYXJ0aXN0IC5pbWFnZSB7XG4gICAgbGVmdDogNDQlO1xuICB9XG4gIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuZGV0YWlsIHtcbiAgICB0b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAtMjVweDtcbn1cbi5jb250YWluZXIgLnJlc3VsdHMtZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAucmVzdWx0cy1kaXYgLnJlc3VsdHMtY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG59XG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLnJlc3VsdHMtZGl2IC5yZXN1bHRzLWNvbnRhaW5lci5zZWxlY3RlZC1hcnRpc3Qge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAucmVzdWx0cy1kaXYgLnJlc3VsdHMtY29udGFpbmVyIC5hcnRpc3Quc2tlbGV0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuZGV0YWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhaW5lciAucmVzdWx0cy1kaXYgLnJlc3VsdHMtY29udGFpbmVyIC5hcnRpc3QgLmRldGFpbCAudGl0bGUsXG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuZGV0YWlsIC5saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5yZXN1bHRzLWRpdiAucmVzdWx0cy1jb250YWluZXIgLmFydGlzdCAuZGV0YWlsIC5saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAzOWRmYztcbn1cbi5jb250YWluZXIgLnJlc3VsdHMtZGl2IC5yZXN1bHRzLWNvbnRhaW5lciAuYXJ0aXN0IC5kZXRhaWwgLmxpbms6aG92ZXIge1xuICBjb2xvcjogIzAzNTJmYztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/bands-in-town/bands-in-town.service */ "./src/app/services/bands-in-town/bands-in-town.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchResultComponent = class SearchResultComponent {
    constructor(bandsInTownService) {
        this.bandsInTownService = bandsInTownService;
        this.artist = null;
    }
    ngOnInit() {
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: _services_bands_in_town_bands_in_town_service__WEBPACK_IMPORTED_MODULE_1__["BandsInTownService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SearchResultComponent.prototype, "artist", void 0);
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.component.scss */ "./src/app/search-result/search-result.component.scss")).default]
    })
], SearchResultComponent);



/***/ }),

/***/ "./src/app/services/bands-in-town/bands-in-town.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/bands-in-town/bands-in-town.service.ts ***!
  \*****************************************************************/
/*! exports provided: BandsInTownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandsInTownService", function() { return BandsInTownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let BandsInTownService = class BandsInTownService {
    /**
     * Creates an instance of BandsInTownService.
     * @param {HttpService} http
     * @memberof BandsInTownService
     */
    constructor(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        /**
         * List that contains all artists for a search
         *
         * @type {Artist[]}
         * @memberof BandsInTownService
         */
        this.searchResults = [];
        this.searchState = 'idle';
        this.query = '';
        this.events = [];
        this.selectedArtist = null;
    }
    /**
     * Method for fetching search results
     *
     * @memberof BandsInTownService
     */
    getArtists(path, params, isEnhanced) {
        localStorage.setItem('query', this.query);
        this.selectedArtist = null;
        this.searchState = 'searching';
        this.http.get(path, params).subscribe(response => {
            this.searchResults = isEnhanced ? response.artists : [response];
            this.searchState = 'searched';
            localStorage.setItem('artist', JSON.stringify(this.searchResults));
        }, error => {
            console.log(error);
        });
    }
    getEvents(artist) {
        this.selectedArtist = artist;
        localStorage.setItem('selectedArtist', JSON.stringify(this.selectedArtist));
        this.searchState = 'eventSearching';
        this.http.get(`api/artists/${artist.name}/events`, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('app_id', 'something')).subscribe(response => {
            this.events = response;
            this.router.navigate(['/artist-events/', artist.name]);
            this.searchState = 'eventSearched';
        }, error => {
            console.log(error);
        });
    }
    navigateToHome() {
        this.searchState = 'searched';
        this.selectedArtist = null;
        this.location.back();
    }
};
BandsInTownService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
BandsInTownService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], BandsInTownService);



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    /**
     * Creates an instance of HttpService.
     * @param {HttpClient} http
     * @memberof HttpService
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Takes an api route as an input and returns the response
     *
     * @param {string} path
     * @param {HttpParams} params
     * @return {*}  {Observable<any>}
     * @memberof HttpService
     */
    get(path, params) {
        return this.http.get(path, { params: params });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiBaseUrl: 'rest.bandsintown.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Work\Personal\KeepTruckin\Web Dev Assignment\Project\bands-in-town\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map