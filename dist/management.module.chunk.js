webpackJsonp(["management.module"],{

/***/ "../../../../../src/app/management/management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponentsModule", function() { return ManagementComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__management_routing__ = __webpack_require__("../../../../../src/app/management/management.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__useradd_useradd_component__ = __webpack_require__("../../../../../src/app/management/useradd/useradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__useredit_useredit_component__ = __webpack_require__("../../../../../src/app/management/useredit/useredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userlist_userlist_component__ = __webpack_require__("../../../../../src/app/management/userlist/userlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ManagementComponentsModule = (function () {
    function ManagementComponentsModule() {
    }
    return ManagementComponentsModule;
}());
ManagementComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__management_routing__["a" /* MaterialRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__useradd_useradd_component__["a" /* UserAddComponent */],
            __WEBPACK_IMPORTED_MODULE_11__useredit_useredit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userlist_userlist_component__["b" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userlist_userlist_component__["a" /* JazzDialogComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__userlist_userlist_component__["a" /* JazzDialogComponent */]]
    })
], ManagementComponentsModule);

//# sourceMappingURL=management.module.js.map

/***/ }),

/***/ "../../../../../src/app/management/management.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__useradd_useradd_component__ = __webpack_require__("../../../../../src/app/management/useradd/useradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useredit_useredit_component__ = __webpack_require__("../../../../../src/app/management/useredit/useredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userlist_userlist_component__ = __webpack_require__("../../../../../src/app/management/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/auth-guard.service.ts");




var MaterialRoutes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication_auth_guard_service__["a" /* AuthGuard */]],
        children: [{
                path: 'useradd',
                component: __WEBPACK_IMPORTED_MODULE_0__useradd_useradd_component__["a" /* UserAddComponent */]
            }, {
                path: 'useredit',
                component: __WEBPACK_IMPORTED_MODULE_1__useredit_useredit_component__["a" /* UserEditComponent */]
            }, {
                path: 'userlist',
                component: __WEBPACK_IMPORTED_MODULE_2__userlist_userlist_component__["b" /* UserListComponent */]
            }]
    }
];
//# sourceMappingURL=management.routing.js.map

/***/ }),

/***/ "../../../../../src/app/management/useradd/useradd.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-toolbar-row>   \n  </md-toolbar-row>\n</md-toolbar>\n\n<div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\"  fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <md-card class=\"mat-card-top\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <md-tab-group>\n          <md-tab>\n            <ng-template md-tab-label>General</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Vorname\" type=\"text\" [formControl]=\"form.controls['first_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['first_name'].hasError('required') && form.controls['first_name'].touched\" class=\"mat-text-warn\">Bitte Vorname eingeben.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Nachname\" type=\"text\" [formControl]=\"form.controls['last_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['last_name'].hasError('required') && form.controls['last_name'].touched\" class=\"mat-text-warn\">Bitte geben Sie ihren Nachname ein.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">Bitte geben Sie ihre E-Mail-Adresse ein Sie.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">Bitte geben Sie ihre E-Mail-Adresse ein Sie.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"SBU\" type=\"text\" [formControl]=\"form.controls['sbu']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['sbu'].hasError('required') && form.controls['sbu'].touched\" class=\"mat-text-warn\">Bitte SBU eintragen.</small>                     \n\n                <md-select placeholder=\"Timezone\" class=\"mb-1\" [formControl]=\"form.controls['timezone']\">\n                  <md-option value=\"-12.0\">(GMT -12:00) Eniwetok, Kwajalein</md-option>\n                  <md-option value=\"-11.0\">(GMT -11:00) Midway Island, Samoa</md-option>\n                  <md-option value=\"-10.0\">(GMT -10:00) Hawaii</md-option>\n                  <md-option value=\"-9.0\">(GMT -9:00) Alaska</md-option>\n                  <md-option value=\"-8.0\">(GMT -8:00) Pacific Time (US &amp; Canada)</md-option>\n                  <md-option value=\"-7.0\">(GMT -7:00) Mountain Time (US &amp; Canada)</md-option>\n                  <md-option value=\"-6.0\">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</md-option>\n                  <md-option value=\"-5.0\">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</md-option>\n                  <md-option value=\"-4.0\">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</md-option>\n                  <md-option value=\"-3.5\">(GMT -3:30) Newfoundland</md-option>\n                  <md-option value=\"-3.0\">(GMT -3:00) Brazil, Buenos Aires, Georgetown</md-option>\n                  <md-option value=\"-2.0\">(GMT -2:00) Mid-Atlantic</md-option>\n                  <md-option value=\"-1.0\">(GMT -1:00 hour) Azores, Cape Verde Islands</md-option>\n                  <md-option value=\"0.0\">(GMT) Western Europe Time, London, Lisbon, Casablanca</md-option>\n                  <md-option value=\"1.0\">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</md-option>\n                  <md-option value=\"2.0\">(GMT +2:00) Kaliningrad, South Africa</md-option>\n                  <md-option value=\"3.0\">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</md-option>\n                  <md-option value=\"3.5\">(GMT +3:30) Tehran</md-option>\n                  <md-option value=\"4.0\">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</md-option>\n                  <md-option value=\"4.5\">(GMT +4:30) Kabul</md-option>\n                  <md-option value=\"5.0\">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</md-option>\n                  <md-option value=\"5.5\">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</md-option>\n                  <md-option value=\"5.75\">(GMT +5:45) Kathmandu</md-option>\n                  <md-option value=\"6.0\">(GMT +6:00) Almaty, Dhaka, Colombo</md-option>\n                  <md-option value=\"7.0\">(GMT +7:00) Bangkok, Hanoi, Jakarta</md-option>\n                  <md-option value=\"8.0\">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</md-option>\n                  <md-option value=\"9.0\">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</md-option>\n                  <md-option value=\"9.5\">(GMT +9:30) Adelaide, Darwin</md-option>\n                  <md-option value=\"10.0\">(GMT +10:00) Eastern Australia, Guam, Vladivostok</md-option>\n                  <md-option value=\"11.0\">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</md-option>\n                  <md-option value=\"12.0\">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</md-option>\n                </md-select>                \n\n              </div>\n            </md-card-content>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>User Rights Assignment</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n                <md-select placeholder=\"Role\" class=\"mb-1\" [formControl]=\"form.controls['type']\">\n                  <md-option value=\"2\">Administrator</md-option>\n                  <md-option value=\"3\">Transport Officer</md-option>\n                  <md-option value=\"4\">Forklift Driver</md-option>\n                </md-select>\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"CDN\" type=\"text\" [formControl]=\"form.controls['cdn']\">\n                </md-input-container>\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Passwort\" type=\"password\" [formControl]=\"form.controls['password']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">Bitte Passwort eingeben.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Bestätige das Passwort\" type=\"password\" [formControl]=\"form.controls['confirmPassword']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"mat-text-warn\">Bitte Passwort eingeben.</small>\n                <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"mat-text-warn\">Passwörter nicht math.</small>\n\n              </div>\n            </md-card-content>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>Settings</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n                <md-select placeholder=\"Language\" class=\"mb-1\" [formControl]=\"form.controls['language']\">\n                  <md-option value=\"du\">Deutsch</md-option>\n                  <md-option value=\"fr\">Français</md-option>\n                  <md-option value=\"it\">Italiano</md-option>\n                  <md-option value=\"es\">Español</md-option>\n                  <md-option value=\"py\">Русский</md-option>\n                </md-select>\n\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Encryption\" type=\"text\" [formControl]=\"form.controls['encryption']\">\n                </md-input-container>\n\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"License\" type=\"text\" [formControl]=\"form.controls['license']\">\n                </md-input-container>\n              </div>\n            </md-card-content>\n          </md-tab>\n        </md-tab-group>\n        <hr>\n        <md-card-actions>\n          <button md-raised-button class=\"shadow-none\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n          <button md-raised-button color=\"primary\">Cancel</button>\n        </md-card-actions>\n      </form>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/management/useradd/useradd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n.mat-card-top {\n  margin-top: -64px; }\n\n@media (max-width: 600px) and (orientation: portrait) {\n  .mat-card-top {\n    margin-top: -56px; } }\n\n@media (max-width: 960px) and (orientation: landscape) {\n  .mat-card-top {\n    margin-top: -48px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/management/useradd/useradd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
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
var UserAddComponent = (function () {
    function UserAddComponent(_fb, _router, _logger, _sessionService) {
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._sessionService = _sessionService;
        this._logger.log("UserAddComponent Constructor!");
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            first_name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            last_name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            sbu: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: password,
            confirmPassword: confirmPassword,
            type: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            timezone: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            language: [null],
            encryption: [null],
            license: [null],
            cdn: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    };
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log("onSubmit");
        this._logger.log(this.form.value);
        if (this.form.valid) {
            /*this.form.value['license'] = 'test';
            this.form.value['cdn'] = 'test';*/
            this._sessionService.register(this.form.value).subscribe(function (res) {
                _this._logger.log("register response");
                _this._logger.log(res);
                _this._logger.log("this._sessionService.isLoggedIn: " + _this._sessionService.isLoggedIn);
                _this.form.reset();
                if (_this._sessionService.isLoggedIn) {
                    var redirectUrl = _this._sessionService.redirectUrl || '/management/userlist';
                    _this._router.navigate([redirectUrl]);
                }
                return false;
            }, function (err) {
                _this._logger.error("login error");
                _this._logger.error(err);
            });
        }
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-add',
        template: __webpack_require__("../../../../../src/app/management/useradd/useradd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/management/useradd/useradd.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__session_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], UserAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=useradd.component.js.map

/***/ }),

/***/ "../../../../../src/app/management/useredit/useredit.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-toolbar-row>   \n  </md-toolbar-row>\n</md-toolbar>\n\n<div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\"  fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <md-card class=\"mat-card-top\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <md-tab-group>\n          <md-tab>\n            <ng-template md-tab-label>General</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"First name\" type=\"text\" [formControl]=\"form.controls['first_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['first_name'].hasError('required') && form.controls['first_name'].touched\" class=\"mat-text-warn\">You must include your first name.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Last name\" type=\"text\" [formControl]=\"form.controls['last_name']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['last_name'].hasError('required') && form.controls['last_name'].touched\" class=\"mat-text-warn\">You must include your last name.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Email address\" type=\"email\" [formControl]=\"form.controls['email']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"mat-text-warn\">You must include an email address.</small>\n                <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"mat-text-warn\">You must include a valid email address.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"SBU\" type=\"text\" [formControl]=\"form.controls['sbu']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['sbu'].hasError('required') && form.controls['sbu'].touched\" class=\"mat-text-warn\">You must include your SBU.</small>                     \n\n                <md-select placeholder=\"Timezone\" class=\"mb-1\" [formControl]=\"form.controls['timezone']\">\n                  <md-option value=\"-12.0\">(GMT -12:00) Eniwetok, Kwajalein</md-option>\n                  <md-option value=\"-11.0\">(GMT -11:00) Midway Island, Samoa</md-option>\n                  <md-option value=\"-10.0\">(GMT -10:00) Hawaii</md-option>\n                  <md-option value=\"-9.0\">(GMT -9:00) Alaska</md-option>\n                  <md-option value=\"-8.0\">(GMT -8:00) Pacific Time (US &amp; Canada)</md-option>\n                  <md-option value=\"-7.0\">(GMT -7:00) Mountain Time (US &amp; Canada)</md-option>\n                  <md-option value=\"-6.0\">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</md-option>\n                  <md-option value=\"-5.0\">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</md-option>\n                  <md-option value=\"-4.0\">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</md-option>\n                  <md-option value=\"-3.5\">(GMT -3:30) Newfoundland</md-option>\n                  <md-option value=\"-3.0\">(GMT -3:00) Brazil, Buenos Aires, Georgetown</md-option>\n                  <md-option value=\"-2.0\">(GMT -2:00) Mid-Atlantic</md-option>\n                  <md-option value=\"-1.0\">(GMT -1:00 hour) Azores, Cape Verde Islands</md-option>\n                  <md-option value=\"0.0\">(GMT) Western Europe Time, London, Lisbon, Casablanca</md-option>\n                  <md-option value=\"1.0\">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</md-option>\n                  <md-option value=\"2.0\">(GMT +2:00) Kaliningrad, South Africa</md-option>\n                  <md-option value=\"3.0\">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</md-option>\n                  <md-option value=\"3.5\">(GMT +3:30) Tehran</md-option>\n                  <md-option value=\"4.0\">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</md-option>\n                  <md-option value=\"4.5\">(GMT +4:30) Kabul</md-option>\n                  <md-option value=\"5.0\">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</md-option>\n                  <md-option value=\"5.5\">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</md-option>\n                  <md-option value=\"5.75\">(GMT +5:45) Kathmandu</md-option>\n                  <md-option value=\"6.0\">(GMT +6:00) Almaty, Dhaka, Colombo</md-option>\n                  <md-option value=\"7.0\">(GMT +7:00) Bangkok, Hanoi, Jakarta</md-option>\n                  <md-option value=\"8.0\">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</md-option>\n                  <md-option value=\"9.0\">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</md-option>\n                  <md-option value=\"9.5\">(GMT +9:30) Adelaide, Darwin</md-option>\n                  <md-option value=\"10.0\">(GMT +10:00) Eastern Australia, Guam, Vladivostok</md-option>\n                  <md-option value=\"11.0\">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</md-option>\n                  <md-option value=\"12.0\">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</md-option>\n                </md-select>                \n\n              </div>\n            </md-card-content>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>User Rights Assignment</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n                <md-select placeholder=\"Role\" class=\"mb-1\" [formControl]=\"form.controls['type']\">\n                  <md-option value=\"2\">Administrator</md-option>\n                  <md-option value=\"3\">Transport Officer</md-option>\n                  <md-option value=\"4\">Forklift Driver</md-option>\n                </md-select>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Password\" type=\"password\" [formControl]=\"form.controls['password']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">You must include password.</small>\n\n                <md-input-container class=\"mb-1\">\n                  <input mdInput placeholder=\"Confirm password\" type=\"password\" [formControl]=\"form.controls['confirmPassword']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"mat-text-warn\">You must include confirm password.</small>\n                <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"mat-text-warn\">Passwords do not math.</small>\n\n              </div>\n            </md-card-content>\n          </md-tab>\n          <md-tab>\n            <ng-template md-tab-label>Settings</ng-template>\n            <md-card-content>\n              <div fxLayout=\"column\">\n                <md-select placeholder=\"Language\" class=\"mb-1\" [formControl]=\"form.controls['language']\">\n                  <md-option value=\"du\">Deutsch</md-option>\n                  <md-option value=\"fr\">Français</md-option>\n                  <md-option value=\"it\">Italiano</md-option>\n                  <md-option value=\"es\">Español</md-option>\n                  <md-option value=\"py\">Русский</md-option>\n\n                </md-select>\n\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Encryption\" type=\"text\" [formControl]=\"form.controls['encryption']\">\n                </md-input-container>\n\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"License\" type=\"text\" [formControl]=\"form.controls['license']\">\n                </md-input-container>\n\n                <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"CDN\" type=\"text\" [formControl]=\"form.controls['cdn']\">\n                </md-input-container>\n\n                <!-- <md-list>\n                  <md-list-item *ngFor=\"let system of systems\">\n                    <span fxFlex>{{system.name}}</span>\n                    <md-slide-toggle [(ngModel)]=\"system.on\"></md-slide-toggle>\n                  </md-list-item>\n                </md-list> -->\n              </div>\n            </md-card-content>\n          </md-tab>\n        </md-tab-group>\n        <hr>\n        <md-card-actions>\n          <button md-raised-button class=\"shadow-none\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n          <button md-raised-button color=\"primary\">Cancel</button>\n        </md-card-actions>\n      </form>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/management/useredit/useredit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n.mat-card-top {\n  margin-top: -64px; }\n\n@media (max-width: 600px) and (orientation: portrait) {\n  .mat-card-top {\n    margin-top: -56px; } }\n\n@media (max-width: 960px) and (orientation: landscape) {\n  .mat-card-top {\n    margin-top: -48px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/management/useredit/useredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__management_service__ = __webpack_require__("../../../../../src/app/management/management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(password));
var UserEditComponent = (function () {
    function UserEditComponent(_fb, _router, _logger, _managementService) {
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._managementService = _managementService;
        this._logger.log("UserEditComponent Constructor!");
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.user = this._managementService.getUser();
        this.form = this._fb.group({
            first_name: [this.user['first_name'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            last_name: [this.user['last_name'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: [this.user['email'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            sbu: [this.user['sbu'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: password,
            confirmPassword: confirmPassword,
            type: [this.user['type'].toString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            timezone: [this.user['timezone'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            language: [this.user['language'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            encryption: [this.user['encryption']],
            license: [this.user['license']],
            cdn: [this.user['cdn']],
        });
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log("onSubmit");
        this._logger.log(this.form.value);
        if (this.form.valid) {
            this.form.value['_method'] = 'PUT';
            this.form.value['id'] = this.user['id'];
            this._managementService.updateUser(this.form.value).subscribe(function (res) {
                _this._logger.log("updateUser response");
                _this._logger.log(res);
                if (res.success) {
                    _this._router.navigate(['/management/userlist']);
                }
                return false;
            }, function (err) {
                _this._logger.error("updateUser error");
                _this._logger.error(err);
            });
        }
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/management/useredit/useredit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/management/useredit/useredit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__management_service__["a" /* ManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__management_service__["a" /* ManagementService */]) === "function" && _d || Object])
], UserEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=useredit.component.js.map

/***/ }),

/***/ "../../../../../src/app/management/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  [externalPaging]=\"true\"\n  [count]=\"count\"\n  [offset]=\"offset\"\n  [limit]=\"limit\"\n  (page)='onPage($event)'>\n  <ngx-datatable-column name=\"Last Name\" prop=\"last_name\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"First Name\" prop=\"first_name\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"SBU\" prop=\"sbu\"></ngx-datatable-column>\n   <ngx-datatable-column name=\"Status\" prop=\"active\">\n     <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n         <div class=\"form-group\">\n          <select class=\"form-control ml-xs mr-xs\" name=\"status\" [(ngModel)]=\"row.active\" (change)=\"onActiveUser(row.id,$event)\">\n            <option  [value]=\"1\" [selected]=\"row.active ==1\">Aktiv</option>\n            <option  [value]=\"0\" [selected]=\"row.active ==0\">Inaktiv</option>\n          </select>\n        </div>\n     </ng-template>     \n   </ngx-datatable-column>\n  <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n        Actions\n    </ng-template>\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <button md-raised-button md-button-sm color=\"primary\" class=\"mr-1\" (click)=\"onDetail(row)\">Bearbeiten</button>\n        <button md-raised-button md-button-sm  class=\"mr-1\" (click)=\"open(row)\">Löschen</button>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/management/userlist/userlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\n  border: 1px solid #111;\n  background: transparent;\n  padding: 5px 20px 5px 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n/* CAUTION: IE hackery ahead */\nselect::-ms-expand {\n  display: none;\n  /* remove default arrow in IE 10 and 11 */ }\n\n/* target Internet Explorer 9 to undo the custom arrow */\n@media screen and (min-width: 0\\0) {\n  select {\n    background: none\\9;\n    padding: 5px\\9; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/management/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JazzDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__management_service__ = __webpack_require__("../../../../../src/app/management/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(_router, _logger, _managementService, dialog) {
        this._router = _router;
        this._logger = _logger;
        this._managementService = _managementService;
        this.dialog = dialog;
        this.rows = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
        this._logger.log("UserListComponent Constructor!");
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.page(this.offset, this.limit);
    };
    UserListComponent.prototype.open = function (row) {
        var _this = this;
        this.currentUserToDelete = row;
        this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'yes') {
                _this.onDelete(_this.currentUserToDelete);
            }
            else {
                _this.currentUserToDelete = null;
            }
            _this.lastCloseResult = result;
            console.log("Closed Dailog Box", _this.lastCloseResult);
            _this.dialogRef = null;
        });
    };
    UserListComponent.prototype.page = function (offset, limit) {
        var _this = this;
        this._logger.log("offset, limit", offset, limit);
        this.fetch(function (results) {
            _this.count = results.length;
            var start = offset * limit;
            var end = start + limit;
            var rows = _this.rows.slice();
            for (var i = start; i < end; i++) {
                rows[i] = results[i];
            }
            _this.rows = rows;
            _this._logger.log('Page Results', start, end, rows);
        });
    };
    UserListComponent.prototype.fetch = function (cb) {
        var _this = this;
        this._managementService.getUsers().subscribe(function (res) {
            _this._logger.log("getUsers response");
            _this._logger.log(res);
            cb(res.data.data);
        }, function (err) {
            _this._logger.error("login error");
            _this._logger.error(err);
        });
    };
    UserListComponent.prototype.onPage = function (event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    };
    UserListComponent.prototype.onDetail = function (row) {
        this._logger.log(row);
        this._managementService.setUser(row);
        this._router.navigate(['/management/useredit']);
    };
    UserListComponent.prototype.onDelete = function (row) {
        var _this = this;
        this._managementService.deleteUser(row)
            .subscribe(function (res) {
            _this._logger.log("onDelete response");
            _this._logger.log(res);
            _this.currentUserToDelete = null;
            _this.ngOnInit();
        }, function (err) {
            _this._logger.error("onDelete error");
            _this._logger.error(err);
        });
        this._logger.log(row);
    };
    UserListComponent.prototype.onActiveUser = function (id, active) {
        var _this = this;
        console.log(active);
        var obj = {
            id: id,
            status: active.target.value
        };
        this._managementService.activeUser(obj)
            .subscribe(function (res) {
            _this._logger.log("onActiveUser response");
            _this._logger.log(res);
        }, function (err) {
            _this._logger.error("onActiveUser error");
            _this._logger.error(err);
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userlist',
        template: __webpack_require__("../../../../../src/app/management/userlist/userlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/management/userlist/userlist.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__["Logger"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__management_service__["a" /* ManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__management_service__["a" /* ManagementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _d || Object])
], UserListComponent);

var JazzDialogComponent = (function () {
    function JazzDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return JazzDialogComponent;
}());
JazzDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jazz-dialog',
        template: "\n  <h5 class=\"mt-0\">Sind Sie sicher, dass Sie diesen Benutzer l\u00F6schen wollen?</h5>\n  <p style=\"text-align:right;margin-top:15px\">\n    <button md-raised-button md-raised-button color=\"warning\" (click)=\"dialogRef.close('no')\">Nein</button>\n    <button  md-raised-button md-raised-button color=\"primary\" type=\"button\" (click)=\"dialogRef.close('yes')\">Ja</button>\n  </p>"
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDialogRef */]) === "function" && _e || Object])
], JazzDialogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=userlist.component.js.map

/***/ })

});
//# sourceMappingURL=management.module.chunk.js.map