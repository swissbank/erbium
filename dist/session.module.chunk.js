webpackJsonp(["session.module"],{

/***/ "../../../../../src/app/session/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\">\n  <div class=\"session-content text-xs-center\">\n    <div>\n      <div class=\"error-title\">500</div>\n      <div class=\"error-subtitle\">We have an internal server error!</div>\n      <p class=\"mat-text-muted\">Sorry, but the page you were trying to view does not exist. <a href=\"javascript:;\">Report this error?</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/session/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/error/error.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session mat-indigo\">\n  <div class=\"session-content\">\n    <div class=\"session-wrapper\">\n      <md-card>\n        <md-card-content>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"text-xs-center pb-1\">\n              <img src=\"assets/images/logo-dark.png\" alt=\"\"/>\n            </div>\n            <div  fxLayout=\"column\"  fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n              </div>\n              <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/session/signin']\">Access your account</a>&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n          </form>\n         </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/forgot/forgot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotComponent = (function () {
    function ForgotComponent(_fb, _router, _logger, _sessionService) {
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._sessionService = _sessionService;
        this._logger.log("Forgot Constructor!");
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])]
        });
    };
    ForgotComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log(this.form.value);
        if (this.form.valid) {
            this._sessionService.forgot(this.form.value).subscribe(function (res) {
                _this._logger.log("login response");
                _this._logger.log(res);
                if (res && res.success) {
                    // Navigate to the signin page
                    _this._router.navigate(['/session/signin']);
                }
                return false;
            }, function (err) {
                _this._logger.error("login error");
                _this._logger.error(err);
            });
        }
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/session/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/forgot/forgot.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]) === "function" && _d || Object])
], ForgotComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session mat-indigo\">\n  <div class=\"session-content\">\n    <div class=\"lockscreen-wrapper text-xs-center\">\n      <md-card>\n        <md-card-content>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"lockscreen-avatar\">\n              <img src=\"assets/images/avatar.jpg\" class=\"radius-round\" alt=\"user\" title=\"user\"/>\n            </div>\n            <p class=\"center-block mt-1\">David Miller</p>\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Username\" [formControl]=\"form.controls['uname']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\" class=\"mat-text-warn\">Username is required.</small>\n              </div>\n              <div> <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Unlock</button></div>\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>   \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockscreenComponent = (function () {
    function LockscreenComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    LockscreenComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    LockscreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/dashboard']);
    };
    return LockscreenComponent;
}());
LockscreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lockscreen',
        template: __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LockscreenComponent);

var _a, _b;
//# sourceMappingURL=lockscreen.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session\">\n  <div class=\"session-content text-xs-center\">\n    <div>\n      <div class=\"error-title\">404</div>\n      <div class=\"error-subtitle\">Page not found!</div>\n      <p class=\"mat-text-muted\">Sorry, but the page you were trying to view does not exist. <a href=\"javascript:;\">Report this error?</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/session/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/not-found/not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_routing__ = __webpack_require__("../../../../../src/app/session/session.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/session/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_error_component__ = __webpack_require__("../../../../../src/app/session/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/session/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__ = __webpack_require__("../../../../../src/app/session/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/session/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__session_routing__["a" /* SessionRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_10__lockscreen_lockscreen_component__["a" /* LockscreenComponent */],
            __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */]
        ]
    })
], SessionModule);

//# sourceMappingURL=session.module.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/session/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_error_component__ = __webpack_require__("../../../../../src/app/session/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/session/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__ = __webpack_require__("../../../../../src/app/session/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/session/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/auth-guard.service.ts");







var SessionRoutes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_auth_guard_service__["a" /* AuthGuard */]],
        redirectTo: 'signin'
    }, {
        path: '',
        children: [{
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_0__not_found_not_found_component__["a" /* NotFoundComponent */]
            }, {
                path: 'error',
                component: __WEBPACK_IMPORTED_MODULE_1__error_error_component__["a" /* ErrorComponent */]
            }, {
                path: 'forgot',
                component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */]
            }, {
                path: 'lockscreen',
                component: __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__["a" /* LockscreenComponent */]
            }, {
                path: 'signin',
                component: __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */]
            }, {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]
            }]
    }
];
//# sourceMappingURL=session.routing.js.map

/***/ }),

/***/ "../../../../../src/app/session/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session mat-indigo\">\n  <div class=\"session-content\">\n    <div class=\"session-wrapper\">\n      <md-card>\n        <md-card-content>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"text-xs-center pb-1\">\n              <img class=\"loginLogo\" src=\"assets/images/logo-dark.png\" alt=\"\"/>\n            </div>\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Username\" [formControl]=\"form.controls['email']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">Email is required.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput type=\"password\" placeholder=\"Password\" [formControl]=\"form.controls['password']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">Password is required.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-checkbox>Stay logged in</md-checkbox>\n              </div>\n              <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/session/forgot']\">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginLogo {\n  width: 209px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = (function () {
    function SigninComponent(_fb, _router, _logger, _sessionService, _localstorage) {
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._sessionService = _sessionService;
        this._localstorage = _localstorage;
        this._logger.log("Signin Constructor!");
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.user = this._localstorage.getObject('user_token');
        if (this.user.access_token) {
            if (this.user.user && typeof this.user.user == 'object') {
                var redirectUrl = this._sessionService.redirectUrl || '/apps/transport';
                this._router.navigate([redirectUrl]);
            }
        }
        this.form = this._fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log(this.form.value);
        if (this.form.valid) {
            this._sessionService.login(this.form.value).subscribe(function (res) {
                _this._logger.log("login response");
                _this._logger.log(res);
                _this._logger.log("this._sessionService.isLoggedIn: " + _this._sessionService.isLoggedIn);
                // Navigate to the Redirect URL if exist or to dashboard
                if (_this._sessionService.isLoggedIn) {
                    var redirectUrl = _this._sessionService.redirectUrl || '/apps/transport';
                    _this._router.navigate([redirectUrl]);
                }
                return false;
            }, function (err) {
                alert("Benutzername oder Passwort falsch.");
                _this._logger.error("login error");
                console.log(err);
            });
        }
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/session/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__libs_localstorage__["a" /* LocalStorage */]) === "function" && _e || Object])
], SigninComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session mat-indigo\">\n  <div class=\"session-content\">\n    <div class=\"session-wrapper\">\n      <md-card>\n        <md-card-content>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"text-xs-center pb-1\">\n              <img src=\"assets/images/logo-dark.png\" alt=\"\"/>\n              <p class=\"mat-text-muted\">Create an app id to continue.</p>\n            </div>\n            <div fxLayout=\"column\"  fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"First Name\" type=\"text\" [formControl]=\"form.controls['first_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['first_name'].hasError('required') && form.controls['first_name'].touched\" class=\"mat-text-warn\">You must include your first name.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Last Name\" type=\"text\" [formControl]=\"form.controls['last_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['last_name'].hasError('required') && form.controls['last_name'].touched\" class=\"mat-text-warn\">You must include your last name.</small>\n              </div>              \n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput type=\"password\" placeholder=\"Password\" [formControl]=\"form.controls['password']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">You must include password.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Confirm Password\" [formControl]=\"form.controls['confirmPassword']\" type=\"password\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"mat-text-warn\">You must include confirm password.</small>\n                <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"mat-text-warn\">Passwords do not math.</small>\n              </div>              \n              <div class=\"pb-1\">\n                <md-checkbox>I have read and agree to the terms of service.</md-checkbox>\n              </div>\n              <button md-raised-button color=\"primary\" class=\"btn-block\" type=\"submit\" [disabled]=\"!form.valid\">Create your account</button>\n            </div>\n            <div class=\"pt-1 pb-1 text-xs-center\">\n              <a [routerLink]=\"['/session/forgot']\">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;\n              <a [routerLink]=\"['/session/signin']\">Access your account.</a>\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(password));
var SignupComponent = (function () {
    function SignupComponent(_fb, _router, _logger, _sessionService) {
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._sessionService = _sessionService;
        this._logger.log("Signup Constructor!");
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            first_name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            last_name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            password: password,
            confirmPassword: confirmPassword,
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log(this.form.value);
        if (this.form.valid) {
            this.form.value['type'] = 1;
            this.form.value['language'] = 'EN';
            this.form.value['timezone'] = 'gmt+5';
            this.form.value['sbu'] = 'test';
            this.form.value['encryption'] = 'test';
            this.form.value['license'] = 'test';
            this.form.value['cdn'] = 'test';
            this._sessionService.register(this.form.value).subscribe(function (res) {
                _this._logger.log("register response");
                _this._logger.log(res);
                _this._logger.log("this._sessionService.isLoggedIn: " + _this._sessionService.isLoggedIn);
                // Navigate to the Redirect URL if exist or to dashboard
                if (_this._sessionService.isLoggedIn) {
                    var redirectUrl = _this._sessionService.redirectUrl || '/home';
                    _this._router.navigate([redirectUrl]);
                }
                return false;
            }, function (err) {
                _this._logger.error("login error");
                _this._logger.error(err);
            });
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/session/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ })

});
//# sourceMappingURL=session.module.chunk.js.map