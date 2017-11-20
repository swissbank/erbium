webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blank works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
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

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blank',
        template: __webpack_require__("../../../../../src/app/pages/blank/blank.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/blank/blank.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-toolbar-row>   \n  </md-toolbar-row>\n</md-toolbar>\n\n<div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\"  fxLayoutAlign=\"center start\">\n  <div fxFlex.gt-sm=\"55\" fxFlex=\"100\">\n    <md-card class=\"mat-card-top\">\n      <md-tab-group>\n        <md-tab>\n          <ng-template md-tab-label>General</ng-template>\n          <md-card-content>\n            <form  fxLayout=\"column\">\n              \n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"First name\">\n              </md-input-container>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Last name\">\n              </md-input-container>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Company\">\n              </md-input-container>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Email address\">\n              </md-input-container>\n\n              <md-select placeholder=\"Timezone\" class=\"mb-1\">\n                <md-option value=\"Hawaii\">(GMT-10:00) Hawaii</md-option>\n                <md-option value=\"Alaska\">(GMT-09:00) Alaska</md-option>\n                <md-option value=\"Pacific Time (US & Canada)\">(GMT-08:00) Pacific Time (US & Canada)</md-option>\n                <md-option value=\"Arizona\">(GMT-07:00) Arizona</md-option>\n                <md-option value=\"Mountain Time (US & Canada)\">(GMT-07:00) Mountain Time (US & Canada)</md-option>\n                <md-option value=\"Central Time (US & Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US & Canada)</md-option>\n                <md-option value=\"Eastern Time (US & Canada)\">(GMT-05:00) Eastern Time (US & Canada)</md-option>\n                <md-option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</md-option>\n              </md-select>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Username\">\n              </md-input-container>\n\n            </form>\n          </md-card-content>\n        </md-tab>\n        <md-tab>\n          <ng-template md-tab-label>Security</ng-template>\n          <md-card-content>\n            <form fxLayout=\"column\">\n      \n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Old password\" type=\"password\">\n              </md-input-container>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"New password\" type=\"password\">\n              </md-input-container>\n\n              <md-input-container class=\"mb-1\">\n                <input mdInput placeholder=\"Confirm new password\" type=\"password\">\n              </md-input-container>\n\n            </form>\n          </md-card-content>\n        </md-tab>\n        <md-tab>\n          <ng-template md-tab-label>Preferances</ng-template>\n          <md-card-content>\n            <md-list>\n              <md-list-item *ngFor=\"let system of systems\">\n                <span fxFlex>{{system.name}}</span>\n                <md-slide-toggle [(ngModel)]=\"system.on\"></md-slide-toggle>\n              </md-list-item>\n            </md-list>\n          </md-card-content>\n        </md-tab>\n      </md-tab-group>\n      <hr>\n      <md-card-actions>\n        <button md-raised-button class=\"shadow-none\">Save</button>\n        <button md-raised-button color=\"primary\">Cancel</button>\n      </md-card-actions>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n.mat-card-top {\n  margin-top: -64px; }\n\n@media (max-width: 600px) and (orientation: portrait) {\n  .mat-card-top {\n    margin-top: -56px; } }\n\n@media (max-width: 960px) and (orientation: landscape) {\n  .mat-card-top {\n    margin-top: -48px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
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

var EditComponent = (function () {
    function EditComponent() {
        this.systems = [{
                name: 'Lights',
                on: false,
            }, {
                name: 'Surround Sound',
                on: true,
            }, {
                name: 'T.V.',
                on: true,
            }, {
                name: 'Entertainment System',
                on: true,
            },];
    }
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/pages/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/edit/edit.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditComponent);

//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <div class=\"mb-1\">\n      <h1 class=\"mt-0\"><strong>INVOICE</strong></h1>\n      <a href=\"javascript:;\">company@address.com</a>\n    </div>\n\n    <div fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <h4>Client</h4>\n        <div  fxLayout=\"column\">\n          <span>Invoice No: #0001</span>\n          <span>Date issued: 01 Jun 2017</span>\n          <span>Due date: 31 May 2017</span>\n        </div>\n      </div>\n      <div fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"text-sm-right text-xs-left\">\n        <h6 class=\"my-0\">Company LLC</h6>\n        <div  fxLayout=\"column\">\n        <span>company@address.com</span>\n        <span>1234 Main</span>\n        <span>Apt. 4B</span>\n        <span>Springfield, ST 54321</span>\n      </div>\n      </div>\n    </div>\n  </md-card-content>\n\n  <md-card-content class=\"pl-0 pr-0\">\n    <ngx-datatable\n      class=\"material\"\n      [rows]=\"invoiceItems\"\n      [columnMode]=\"'flex'\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"0\"\n      [rowHeight]=\"'auto'\">\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"4\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.title}}</strong><br/><span class=\"mat-text-muted\">{{row.subtitle}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Unit Price\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.price | currency:'USD':true:'1.2-2'}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.quantity}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Amount\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{ (row.price * row.quantity) | currency:'USD':true:'1.2-2'}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </md-card-content>\n\n  <hr>\n  <md-card-content>\n    <div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"mt-1 mb-1\">\n        <h6 class=\"text-uppercase text-md ma-0 text-bold\">Subtotal</h6>\n        <h3 class=\"ma-0\">{{getSubTotal() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"mt-1 mb-1 text-sm-right text-md-left\">\n        <h6 class=\"text-uppercase text-md ma-0 text-bold\">Tax (15%)</h6>\n        <h3 class=\"ma-0\">{{getCalculatedTax() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"mt-1 mb-1\">\n        <h6 class=\"text-uppercase text-md ma-0 text-bold\">Discount</h6>\n        <h3 class=\"ma-0\">$0.00</h3>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" class=\"mt-1 mb-1 text-xs-left text-sm-right\">\n        <h6 class=\"text-uppercase text-sm ma-0 text-bold\">Total</h6>\n        <h3 class=\"ma-0 mat-text-accent\">{{ getTotal() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n    </div>\n  </md-card-content>\n  <hr>\n\n  <md-card-content>\n    <p class=\"text-md\">\n      <strong>\n        PAYMENT TERMS AND POLICIES\n      </strong>\n      All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed\n      quoted fee noted above. If the Invoice remails unpaid. our dept recovery agency, Urban, may charge you a fee of 25% of the unpaid portion of the\n      invoice amount and other legal and collection costs not covered by the fee.\n    </p>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
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

var InvoiceComponent = (function () {
    function InvoiceComponent() {
        this.invoiceItems = [{
                'title': 'Maintanance',
                'subtitle': 'Monthly web updates for http://www.themeforest.net',
                'price': 250.00,
                'quantity': 1
            }, {
                'title': 'Recurring Bill (Hosting)',
                'subtitle': 'Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)',
                'price': 652.87,
                'quantity': 3
            }, {
                'title': 'Recurring Bill (Domain)',
                'subtitle': '2 year domain name purchase',
                'price': 239.00,
                'quantity': 3
            }, {
                'title': 'Web design',
                'subtitle': 'PSD to HTML Conversion (3 pages)',
                'price': 958.00,
                'quantity': 1
            }];
        this.invoiceTotals = [{
                'subtotal': this.getSubTotal(),
                'tax': this.getCalculatedTax(),
                'discount': 0.00,
                'total': 0
            }];
    }
    InvoiceComponent.prototype.getSubTotal = function () {
        var total = 0.00;
        for (var i = 1; i < this.invoiceItems.length; i++) {
            total += (this.invoiceItems[i].price * this.invoiceItems[i].quantity);
        }
        return total;
    };
    InvoiceComponent.prototype.getCalculatedTax = function () {
        return ((15 * this.getSubTotal()) / 100);
    };
    InvoiceComponent.prototype.getTotal = function () {
        return (this.getSubTotal() + this.getCalculatedTax());
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/invoice.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InvoiceComponent);

//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_invoice_component__ = __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/pages/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__ = __webpack_require__("../../../../../src/app/pages/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__pages_routing__["a" /* PagesRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__blank_blank_component__["a" /* BlankComponent */],
            __WEBPACK_IMPORTED_MODULE_9__invoice_invoice_component__["a" /* InvoiceComponent */],
            __WEBPACK_IMPORTED_MODULE_10__timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__["a" /* PricingComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_component__ = __webpack_require__("../../../../../src/app/pages/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/pages/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__ = __webpack_require__("../../../../../src/app/pages/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");





var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'blank',
                component: __WEBPACK_IMPORTED_MODULE_0__blank_blank_component__["a" /* BlankComponent */]
            }, {
                path: 'invoice',
                component: __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_component__["a" /* InvoiceComponent */]
            }, {
                path: 'timeline',
                component: __WEBPACK_IMPORTED_MODULE_2__timeline_timeline_component__["a" /* TimelineComponent */]
            }, {
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__["a" /* PricingComponent */]
            }]
    }
];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-toolbar-row> \n    <md-slide-toggle class=\"switch-center\">Pay annual save upto 25%</md-slide-toggle> \n  </md-toolbar-row>\n  <md-toolbar-row></md-toolbar-row>\n</md-toolbar>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"center start\" class=\"mat-card-top\">\n  <div fxFlex.gt-sm=\"80\" fxFlex=\"100\">\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <md-card class=\"pricing-plan\">\n          <md-card-title>Developer</md-card-title>\n          <md-card-subtitle class=\"mat-text-primary\">For testing purposes</md-card-subtitle>\n          <md-card-content>\n            <h1><strong class=\"plan-price\">FREE</strong></h1>\n            <md-list dense>\n              <md-list-item>Secure storage</md-list-item>\n              <md-list-item>Limited to 1 user</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Data analytics</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Full search access</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Automatic backups</md-list-item>\n            </md-list>\n          </md-card-content>\n          <md-card-actions class=\"pb-1\">\n            <button md-raised-button color=\"accent\">Choose Plan</button>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <md-card class=\"pricing-plan\">\n          <md-card-title>Basic</md-card-title>\n          <md-card-subtitle>For freelancers</md-card-subtitle>\n          <md-card-content>\n            <h1>\n              <strong class=\"plan-price\">\n                <span class=\"plan-price-symbol\">$</span>\n                <span>10</span>\n                <span class=\"plan-price-period\">/ month</span>\n              </strong>\n            </h1>\n            <md-list dense>\n              <md-list-item>Secure storage</md-list-item>\n              <md-list-item>5 concurrent users</md-list-item>\n              <md-list-item>Data analytics</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Full search access</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Automatic backups</md-list-item>\n            </md-list>\n          </md-card-content>\n          <md-card-actions class=\"pb-1\">\n            <button md-raised-button color=\"accent\">Choose Plan</button>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <md-card class=\"pricing-plan\">\n          <md-card-title>Managed</md-card-title>\n          <md-card-subtitle>For small businesses</md-card-subtitle>\n          <md-card-content>\n            <h1>\n              <strong class=\"plan-price\">\n                <span class=\"plan-price-symbol\">$</span>\n                <span>49</span>\n                <span class=\"plan-price-period\">/ month</span>\n              </strong>\n            </h1>\n            <md-list dense>\n              <md-list-item>Secure storage</md-list-item>\n              <md-list-item>Unlimited users</md-list-item>\n              <md-list-item>Data analytics</md-list-item>\n              <md-list-item>Full search access</md-list-item>\n              <md-list-item class=\"plan-feature-inactive mat-text-muted\">Automatic backups</md-list-item>\n            </md-list>\n          </md-card-content>\n          <md-card-actions class=\"pb-1\">\n            <button md-raised-button color=\"accent\">Choose Plan</button>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n        <md-card class=\"pricing-plan\">  \n          <md-card-title>Enterprise</md-card-title>\n          <md-card-subtitle>For large companies</md-card-subtitle>\n          <md-card-content>\n            <h1>\n              <strong class=\"plan-price\">\n                <span class=\"plan-price-symbol\">$</span>\n                <span>99</span>\n                <span class=\"plan-price-period\">/ month</span>\n              </strong>\n            </h1>\n            <md-list dense>\n              <md-list-item>Secure storage</md-list-item>\n              <md-list-item>Unlimited users</md-list-item>\n              <md-list-item>Data analytics</md-list-item>\n              <md-list-item>Full search access</md-list-item>\n              <md-list-item>Automatic backups</md-list-item>\n            </md-list>\n          </md-card-content>\n          <md-card-actions class=\"pb-1\">\n            <button md-raised-button color=\"accent\">Choose Plan</button>\n          </md-card-actions>\n        </md-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n:host /deep/ .pricing-plan {\n  text-align: center;\n  cursor: default;\n  margin-bottom: 22px; }\n  :host /deep/ .pricing-plan .mat-list[dense] .mat-list-item .mat-list-item-content, :host /deep/ .pricing-plan .mat-nav-list[dense] .mat-list-item .mat-list-item-content {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n\n:host /deep/ .plan-price {\n  font-size: 2.5rem;\n  font-weight: 900;\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n:host /deep/ .plan-price-symbol {\n  font-size: 1rem;\n  vertical-align: super; }\n\n:host /deep/ .plan-price-period {\n  font-size: 0.8125rem;\n  display: inline-block;\n  padding: 0;\n  opacity: .7; }\n\n:host /deep/ .plan-title {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n  letter-spacing: .01rem;\n  text-transform: uppercase;\n  text-overflow: ellipsis; }\n\n:host /deep/ .plan-features {\n  line-height: 2.5;\n  margin: 0;\n  padding: 1rem;\n  list-style: none; }\n  :host /deep/ .plan-features li {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n:host /deep/ .switch-center {\n  margin: 0 auto; }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n.mat-card-top {\n  margin-top: -64px; }\n\n@media (max-width: 600px) and (orientation: portrait) {\n  .mat-card-top {\n    margin-top: -56px; } }\n\n@media (max-width: 960px) and (orientation: landscape) {\n  .mat-card-top {\n    margin-top: -48px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
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

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    return PricingComponent;
}());
PricingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pricing',
        template: __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pricing/pricing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PricingComponent);

//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-1\" [ngClass]=\"{'text-xs-center': !stacked}\">\n  <button md-raised-button color=\"warn\" [ngClass]=\"{'active': !stacked}\" (click)=\"stacked = !stacked\">Toggle Stacked</button>\n</div>\n<div class=\"timeline\" [ngClass]=\"{'stacked': stacked}\">\n\t<div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-teal\"></div>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-grey\"></div>\n    <section class=\"timeline-content\">\n      <md-card>\n        <md-card-content>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.</p>\n        </md-card-content>\n      </md-card>\n      <div class=\"timeline-date\">13:12 am</div>\n    </section>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-purple\"></div>\n    <section class=\"timeline-content\">\n      <md-card>\n        <md-card-content>\n          <p>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>\n        </md-card-content>\n      </md-card>\n      <div class=\"timeline-date\">Yesterday</div>\n    </section>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-green\"></div>\n    <section class=\"timeline-content\">\n      <md-card>\n        <md-card-content>\n          <p class=\"m-a-0\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </md-card-content>\n      </md-card>\n      <div class=\"timeline-date\">6 Days Ago</div>\n    </section>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-lime\"></div>\n    <section class=\"timeline-content\">\n      <md-card>\n        <md-card-content>\n          <p>3 more people joined your campaign.</p>\n        </md-card-content>\n      </md-card>\n      <div class=\"timeline-date\">2 Months Ago</div>\n    </section>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-brown\"></div>\n    <section class=\"timeline-content\">\n      <md-card>\n        <md-card-content>\n          <p>Six new friend requests</p>\n        </md-card-content>\n      </md-card>\n      <div class=\"timeline-date\">23 September 2013</div>\n    </section>\n  </div>\n  <div class=\"timeline-card\">\n    <div class=\"timeline-icon mat-yellow\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.timeline {\n  position: relative;\n  margin: 0.33333333rem; }\n  .timeline::before {\n    position: absolute;\n    top: 6px;\n    width: 4px;\n    height: 100%;\n    content: '';\n    background: white;\n    left: 4px; }\n  .timeline .timeline-icon {\n    position: absolute;\n    top: 15px;\n    width: 12px;\n    height: 12px;\n    text-align: center;\n    left: 0;\n    border-radius: 50%; }\n    .timeline .timeline-icon::after {\n      content: '';\n      position: absolute;\n      top: 2px;\n      left: 2px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: white; }\n  .timeline .timeline-card {\n    position: relative;\n    margin: 40px 0; }\n    .timeline .timeline-card::after {\n      content: \"\";\n      display: table;\n      clear: both; }\n    .timeline .timeline-card:first-child .timeline-icon {\n      top: 0; }\n    .timeline .timeline-card:last-child .timeline-icon {\n      top: 0; }\n  .timeline .timeline-card:first-child {\n    margin-top: 0; }\n  .timeline .timeline-content {\n    position: relative;\n    margin-left: 30px; }\n    .timeline .timeline-content::after {\n      content: \"\";\n      display: table;\n      clear: both; }\n    .timeline .timeline-content > .mat-card {\n      float: left ;\n      display: inline-block;\n      margin: 0; }\n  .timeline .timeline-content .timeline-date {\n    display: inline-block;\n    padding: 4px 0 10px; }\n  .timeline .timeline-content > .mat-card::before {\n    position: absolute;\n    top: 11px;\n    width: 0;\n    height: 0;\n    content: ' ';\n    pointer-events: none;\n    border-width: 10px;\n    border-style: solid;\n    right: 100%;\n    border-color: transparent rgba(150, 150, 150, 0.2) transparent transparent; }\n  .timeline .timeline-content > .mat-card::after {\n    position: absolute;\n    top: 12px;\n    width: 0;\n    height: 0;\n    content: ' ';\n    pointer-events: none;\n    border-width: 9px;\n    border-style: solid;\n    right: 100%;\n    border-color: transparent white transparent transparent; }\n\n@media (min-width: 1280px) {\n  .timeline:not(.stacked)::before {\n    left: 50%;\n    margin-left: -2px; }\n  .timeline:not(.stacked) .timeline-card:nth-child(odd) .timeline-content {\n    float: right ; }\n  .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content {\n    float: left ; }\n  .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .mat-card {\n    float: right ; }\n  .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .mat-card::before {\n    position: absolute;\n    right: auto;\n    left: 100%;\n    border-color: transparent transparent transparent rgba(150, 150, 150, 0.2); }\n  .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .mat-card::after {\n    position: absolute;\n    right: auto;\n    left: 100%;\n    border-color: transparent transparent transparent white; }\n  .timeline:not(.stacked) .timeline-card:nth-child(odd) .timeline-content .timeline-date {\n    right: 112%;\n    left: auto;\n    text-align: right; }\n  .timeline:not(.stacked) .timeline-card:first-child {\n    margin-top: 0; }\n  .timeline:not(.stacked) .timeline-icon {\n    left: 50%;\n    margin-left: -6px; }\n  .timeline:not(.stacked) .timeline-content {\n    width: 47%;\n    margin-left: 0; }\n  .timeline .timeline-date {\n    position: absolute;\n    top: 7px;\n    width: 100%;\n    left: 112%; }\n  .timeline.stacked .timeline-content > .mat-card {\n    margin-bottom: 0; }\n  .timeline.stacked .timeline-date {\n    position: relative;\n    top: 0;\n    width: 100%;\n    left: auto; } }\n\n@media (max-width: 1279px) {\n  .timeline .timeline-content {\n    margin-left: 30px; }\n  .timeline .timeline-content > .mat-card {\n    float: left ; }\n  .timeline .timeline-content > .mat-card {\n    margin-bottom: 0; }\n  .timeline .timeline-date {\n    position: relative;\n    top: 0;\n    width: 100%;\n    left: auto; } }\n\n[dir=\"rtl\"] :host /deep/ .timeline::before {\n  left: auto;\n  right: 4px; }\n\n[dir=\"rtl\"] :host /deep/ .timeline .timeline-icon {\n  left: auto;\n  right: 0; }\n\n[dir=\"rtl\"] :host /deep/ .timeline .timeline-content > .mat-card {\n  float: right !important; }\n\n[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content {\n  margin-left: 0;\n  margin-right: 30px; }\n\n[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content .timeline-date {\n  text-align: right; }\n\n[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content > .mat-card::before {\n  right: auto;\n  left: 100%;\n  border-color: transparent transparent transparent rgba(150, 150, 150, 0.2); }\n\n[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content > .mat-card::after {\n  right: auto;\n  left: 100%;\n  border-color: transparent transparent transparent white; }\n\n@media (min-width: 1280px) {\n  [dir=\"rtl\"] :host /deep/ .timeline:not(.stacked)::before {\n    left: auto;\n    right: 50%;\n    margin-left: 0;\n    margin-right: -2px; }\n  [dir=\"rtl\"] :host /deep/ .timeline:not(.stacked) .timeline-icon {\n    left: auto;\n    right: 50%;\n    margin-left: 0;\n    margin-right: -6px; }\n  [dir=\"rtl\"] :host /deep/ .timeline .timeline-date {\n    text-align: left; }\n  [dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-date {\n    position: relative;\n    top: 0;\n    width: 100%;\n    left: auto;\n    text-align: right; } }\n\n@media (max-width: 1279px) {\n  [dir=\"rtl\"] :host /deep/ .timeline .timeline-content {\n    margin-left: 0;\n    margin-right: 30px; }\n  [dir=\"rtl\"] :host /deep/ .timeline .timeline-content .timeline-date {\n    text-align: right; }\n  [dir=\"rtl\"] :host /deep/ .timeline .timeline-content > .mat-card::before {\n    right: auto !important;\n    left: 100% !important;\n    border-color: transparent transparent transparent rgba(150, 150, 150, 0.2) !important; }\n  [dir=\"rtl\"] :host /deep/ .timeline .timeline-content > .mat-card::after {\n    right: auto !important;\n    left: 100% !important;\n    border-color: transparent transparent transparent white !important; } }\n\n.app-dark :host /deep/ .timeline::before {\n  background: #424242; }\n\n.app-dark :host /deep/ .timeline .timeline-icon::after {\n  background: #424242; }\n\n.app-dark :host /deep/ .timeline .timeline-content > .mat-card::before {\n  border-color: transparent #424242 transparent transparent !important; }\n\n.app-dark :host /deep/ .timeline .timeline-content > .mat-card::after {\n  border-color: transparent #424242 transparent transparent !important; }\n\n@media (min-width: 1280px) {\n  .app-dark :host /deep/ .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .mat-card::before {\n    border-color: transparent transparent transparent #424242 !important; }\n  .app-dark :host /deep/ .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .mat-card::after {\n    border-color: transparent transparent transparent #424242 !important; } }\n\n.app-dark[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content > .mat-card::before {\n  border-color: transparent transparent transparent rgba(150, 150, 150, 0.2) !important; }\n\n.app-dark[dir=\"rtl\"] :host /deep/ .timeline.stacked .timeline-content > .mat-card::after {\n  border-color: transparent transparent transparent #424242 !important; }\n\n@media (max-width: 1279px) {\n  .app-dark[dir=\"rtl\"] :host /deep/ .timeline .timeline-content > .mat-card::before {\n    border-color: transparent transparent transparent rgba(150, 150, 150, 0.2) !important; }\n  .app-dark[dir=\"rtl\"] :host /deep/ .timeline .timeline-content > .mat-card::after {\n    border-color: transparent transparent transparent #424242 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
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

var TimelineComponent = (function () {
    function TimelineComponent() {
        this.stacked = false;
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/pages/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/timeline/timeline.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map