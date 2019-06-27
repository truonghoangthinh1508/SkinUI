webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page1_page1__["a" /* Page1Page */]);
    };
    LoginPage.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page4_page4__["a" /* Page4Page */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page5_page5__["a" /* Page5Page */]);
    };
    LoginPage.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page6_page6__["a" /* Page6Page */]);
    };
    LoginPage.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page7_page7__["a" /* Page7Page */]);
    };
    LoginPage.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    LoginPage.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/login/login.html"*/'<ion-content padding id="page2">\n  <div class="spacer" style="height:100px;" id="login-spacer2"></div>\n  <form id="login-form1">\n    <ion-list id="login-list1">\n      <ion-item id="login-input1">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="stable" block on-click="goToPage1()">\n      Log in\n    </button>\n  </form>\n  <button id="login-button5" ion-button color="positive" block on-click="goToPage1()">\n    Facebook\n  </button>\n  <button id="login-button6" ion-button color="assertive" block on-click="goToPage1()">\n    Google\n  </button>\n  <button id="login-button4" ion-button color="balanced" block on-click="goToSignup()">\n    Create an account\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1, _a;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page1Page = /** @class */ (function () {
    function Page1Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page1Page_1 = Page1Page;
    Page1Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page4_page4__["a" /* Page4Page */]);
    };
    Page1Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    Page1Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page1Page_1);
    };
    Page1Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page5_page5__["a" /* Page5Page */]);
    };
    Page1Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page6_page6__["a" /* Page6Page */]);
    };
    Page1Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page7_page7__["a" /* Page7Page */]);
    };
    Page1Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    Page1Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page1Page = Page1Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page1/page1.html"*/'<ion-content padding id="page1">\n  <div class="spacer" style="height:100px;" id="page1-spacer3"></div>\n  <ion-list id="page1-list3">\n    <ion-item color="none" id="page1-list-item1">\n      <ion-avatar item-left>\n        <img src="assets/img/nXg63OUqR3y7PZtH1ncE_tr5.jpg" />\n      </ion-avatar>\n      <h2>\n        Ulady\n      </h2>\n    </ion-item>\n  </ion-list>\n  <button id="page1-button8" ion-button color="positive" block on-click="goToPage4()">\n    Open weather\n  </button>\n  <button id="page1-button9" ion-button color="balanced" block on-click="goToPage5()">\n    Face++\n  </button>\n  <button id="page1-button10" ion-button color="assertive" block on-click="goToPage6()">\n    Vlog\n  </button>\n  <button id="page1-button11" ion-button color="calm" block on-click="goToPage7()">\n    Spa\n  </button>\n  <button id="page1-button12" ion-button color="energized" block on-click="goToPage8()">\n    Skin care\n  </button>\n  <button id="page1-button13" ion-button color="royal" block on-click="goToPage9()">\n    Mail\n  </button>\n  <button id="page1-button7" ion-button color="dark" block on-click="goToLogin()">\n    Exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page1/page1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page1Page);
    return Page1Page;
    var Page1Page_1;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page9_page9__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_page1_page1__["a" /* Page1Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_page4_page4__["a" /* Page4Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page5_page5__["a" /* Page5Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page6_page6__["a" /* Page6Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page7_page7__["a" /* Page7Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page8_page8__["a" /* Page8Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page9_page9__["a" /* Page9Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_page1_page1__["a" /* Page1Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_page4_page4__["a" /* Page4Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page5_page5__["a" /* Page5Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page6_page6__["a" /* Page6Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page7_page7__["a" /* Page7Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page8_page8__["a" /* Page8Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page9_page9__["a" /* Page9Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page4Page = /** @class */ (function () {
    function Page4Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page4Page_1 = Page4Page;
    Page4Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page4Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page4Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page4Page_1);
    };
    Page4Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page5_page5__["a" /* Page5Page */]);
    };
    Page4Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page6_page6__["a" /* Page6Page */]);
    };
    Page4Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page7_page7__["a" /* Page7Page */]);
    };
    Page4Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    Page4Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page4Page = Page4Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page4',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page4/page4.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 4\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <button id="page4-button14" ion-button color="positive" block on-click="goToLogin()">\n    exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page4/page4.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page4Page);
    return Page4Page;
    var Page4Page_1;
}());

//# sourceMappingURL=page4.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page5Page = /** @class */ (function () {
    function Page5Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page5Page_1 = Page5Page;
    Page5Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page5Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page5Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    Page5Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page5Page_1);
    };
    Page5Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page6_page6__["a" /* Page6Page */]);
    };
    Page5Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page7_page7__["a" /* Page7Page */]);
    };
    Page5Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    Page5Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page5Page = Page5Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page5',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page5/page5.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 5\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <button id="page5-button15" ion-button color="balanced" block on-click="goToLogin()">\n    exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page5/page5.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page5Page);
    return Page5Page;
    var Page5Page_1;
}());

//# sourceMappingURL=page5.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page6Page = /** @class */ (function () {
    function Page6Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page6Page_1 = Page6Page;
    Page6Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page6Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page6Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    Page6Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page5_page5__["a" /* Page5Page */]);
    };
    Page6Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page6Page_1);
    };
    Page6Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page7_page7__["a" /* Page7Page */]);
    };
    Page6Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    Page6Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page6Page = Page6Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page6',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page6/page6.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 6\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <button id="page6-button16" ion-button color="assertive" block on-click="goToLogin()">\n    exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page6/page6.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page6Page);
    return Page6Page;
    var Page6Page_1;
}());

//# sourceMappingURL=page6.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page7Page = /** @class */ (function () {
    function Page7Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page7Page_1 = Page7Page;
    Page7Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page7Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page7Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    Page7Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page5_page5__["a" /* Page5Page */]);
    };
    Page7Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page6_page6__["a" /* Page6Page */]);
    };
    Page7Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page7Page_1);
    };
    Page7Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page8_page8__["a" /* Page8Page */]);
    };
    Page7Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page7Page = Page7Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page7',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page7/page7.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 7\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <button id="page7-button17" ion-button color="calm" block on-click="goToLogin()">\n    exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page7/page7.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page7Page);
    return Page7Page;
    var Page7Page_1;
}());

//# sourceMappingURL=page7.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page8Page = /** @class */ (function () {
    function Page8Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page8Page_1 = Page8Page;
    Page8Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page8Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page8Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    Page8Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page5_page5__["a" /* Page5Page */]);
    };
    Page8Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page6_page6__["a" /* Page6Page */]);
    };
    Page8Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page7_page7__["a" /* Page7Page */]);
    };
    Page8Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page8Page_1);
    };
    Page8Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page9_page9__["a" /* Page9Page */]);
    };
    Page8Page = Page8Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page8',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page8/page8.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 8\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <button id="page8-button18" ion-button color="energized" block on-click="goToLogin()">\n    exit\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page8/page8.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page8Page);
    return Page8Page;
    var Page8Page_1;
}());

//# sourceMappingURL=page8.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page8_page8__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page9_page9__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    SignupPage.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    SignupPage.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page5_page5__["a" /* Page5Page */]);
    };
    SignupPage.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page6_page6__["a" /* Page6Page */]);
    };
    SignupPage.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page7_page7__["a" /* Page7Page */]);
    };
    SignupPage.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page8_page8__["a" /* Page8Page */]);
    };
    SignupPage.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__page9_page9__["a" /* Page9Page */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="signup-form2">\n    <ion-list id="signup-list2">\n      <ion-item id="signup-input3">\n        <ion-label>\n          Name\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="stable" block on-click="goToLogin()">\n      Sign up\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page4_page4__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page5_page5__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page6_page6__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page7_page7__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page8_page8__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Page9Page = /** @class */ (function () {
    function Page9Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page9Page_1 = Page9Page;
    Page9Page.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Page9Page.prototype.goToPage1 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    Page9Page.prototype.goToPage4 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page4_page4__["a" /* Page4Page */]);
    };
    Page9Page.prototype.goToPage5 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page5_page5__["a" /* Page5Page */]);
    };
    Page9Page.prototype.goToPage6 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page6_page6__["a" /* Page6Page */]);
    };
    Page9Page.prototype.goToPage7 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page7_page7__["a" /* Page7Page */]);
    };
    Page9Page.prototype.goToPage8 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page8_page8__["a" /* Page8Page */]);
    };
    Page9Page.prototype.goToPage9 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(Page9Page_1);
    };
    Page9Page = Page9Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page9',template:/*ion-inline-start:"/Users/mac/Desktop/ionic/myApp3/src/pages/page9/page9.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page 9\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <button id="page9-button19" ion-button color="royal" block on-click="goToLogin()">\n    Tap me!\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mac/Desktop/ionic/myApp3/src/pages/page9/page9.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Page9Page);
    return Page9Page;
    var Page9Page_1;
}());

//# sourceMappingURL=page9.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map