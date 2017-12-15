webpackJsonp(["widgets.module"],{

/***/ "../../../../../src/app/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget\">\n      <div md-card-widget>\n        <button md-mini-fab color=\"primary\" md-card-icon class=\"shadow-none\">\n          <md-icon>local_offer</md-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h5 md-card-widget-title>103</h5>\n          <p class=\"mat-text-muted text-md\">Campaigns</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget\">\n      <div md-card-widget>\n        <button md-mini-fab disabled=\"\" md-card-icon class=\"shadow-none\">\n          <md-icon>phone</md-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h5 md-card-widget-title>230</h5>\n          <p class=\"mat-text-muted text-md\">Customers</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget\">\n      <div md-card-widget>\n        <button md-mini-fab color=\"warn\" md-card-icon class=\"shadow-none\">\n          <md-icon>notifications</md-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h5 md-card-widget-title>323</h5>\n          <p class=\"mat-text-muted text-md\">Queries</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget\">\n      <div md-card-widget>\n        <button md-mini-fab md-card-icon class=\"shadow-none\">\n          <md-icon>email</md-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h5 md-card-widget-title>870</h5>\n          <p class=\"mat-text-muted text-md\">Opens</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-teal\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>local_offer</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>103</h5>\n          <p>Campaigns</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-purple\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>phone</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>230</h5>\n          <p>Customers</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-red\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>notifications</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>323</h5>\n          <p>Queries</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-indigo\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>email</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>870</h5>\n          <p>Opens</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <md-card>\n      <md-card-title>Newsfeed</md-card-title>\n      <md-card-subtitle>Stories posted today</md-card-subtitle>\n      <hr>\n      <md-list>\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n          <md-list-item>\n            <img md-list-avatar src=\"{{item.photo}}\" alt=\"\">\n            <h3 md-line> {{item.from}} </h3>\n            <p md-line> {{item.subject}} - {{item.message}} </p>\n          </md-list-item>\n        </ng-template>\n      </md-list>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card>\n      <div class=\"card-image-header\" style=\"background-image: url(assets/images/unsplash/1.jpg); height: 225px;\"></div>\n      <md-card-content class=\"text-xs-center\">\n        <div fxLayout=\"row\"  fxLayoutWrap=\"wrap\" class=\"text-uppercase\">\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">24</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Comments</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">45</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Likes</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">984</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Shares</p>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card>\n      <md-card-content class=\"text-xs-center\">\n        <div fxLayout=\"row\"  fxLayoutAlign=\"center center\" class=\"mt-1\">\n          <div fxFlex>\n            <button md-icon-button>\n              <md-icon>email</md-icon>\n            </button>\n          </div>\n          <div fxFlex>\n            <img src=\"assets/images/face1.jpg\" class=\"radius-circle\">\n          </div>\n          <div fxFlex>\n            <button md-icon-button>\n              <md-icon>phone</md-icon>\n            </button>\n          </div>\n        </div>\n        <p class=\"mb-1\">\n          <a href=\"\" class=\"block text-lg\">Michael Obrien</a>\n          <span class=\"mat-text-muted\">London, UK</span>\n        </p>\n\n        <div fxLayout=\"row\"  fxLayoutWrap=\"wrap\" class=\"mt-1 text-uppercase\">\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">89</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Photos</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">354</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Followers</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h5 class=\"mt-0 mb-0\">945</h5>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Following</p>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <div  fxLayout=\"column\"  fxLayoutWrap=\"wrap\">\n      <div fxFlex>\n        <md-card>\n          <md-card-header>\n            <img md-card-avatar src=\"assets/images/avatar.jpg\">\n            <md-card-subtitle>24 Mins ago</md-card-subtitle>\n            <md-card-title>Gerald Morris</md-card-title>\n          </md-card-header>\n          <sebm-google-map md-card-image [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"></sebm-google-map>\n        </md-card>\n      </div>\n      <div fxFlex>\n        <md-card>\n          <md-card-content class=\"pb-0\">\n            <div fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mb-2\">\n              <div fxFlex>\n                <h3 class=\"mt-0 mb-0\">London, UK</h3>\n                <h6 class=\"mt-0 mb-0\">Saturday 2:00 AM</h6>\n                <p class=\"mat-text-muted mt-0 mb-0\">Mostly Sunny</p>\n              </div>\n              <span fxFlex></span>\n              <div fxFlex class=\"text-xs-right\">\n                <h1 class=\"text-xxl mt-0 mb-0\">\n                  <span class=\"pe-is-w-moon-sea mat-text-accent\"></span>\n                  <span>6<sup></sup></span>\n                </h1>\n              </div>\n            </div>\n            <div fxLayout=\"row\" layout-align=\"center\" class=\"mb-2 text-md\">\n              <div class=\"pr-1\" fxFlex>\n                <div fxLayout=\"row\">          \n                  <span>Pressure</span>\n                  <span fxFlex></span>\n                  <span>30.09</span>\n                  <span>hPa</span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Visibility</span>\n                  <span fxFlex></span>\n                  <span>11.27</span>\n                  <span>km</span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Light</span>\n                  <span fxFlex></span>\n                  <span>0.00</span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Light</span>\n                  <span fxFlex></span>\n                  <span>16</span>\n                  <span>C</span>\n                </div>\n              </div>\n              <div class=\"pl-1\" fxFlex>\n                <div fxLayout=\"row\">          \n                  <span>Humidity</span>\n                  <span fxFlex></span>\n                  <span>94</span>\n                  <span>%</span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Precp.</span>\n                  <span fxFlex></span>\n                  <span></span>\n                  <span>mm</span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Snow Depth</span>\n                  <span fxFlex></span>\n                  <span></span>\n                </div>\n\n                <div fxLayout=\"row\">          \n                  <span>Wind Gust</span>\n                  <span fxFlex></span>\n                  <span></span>\n                </div>\n              </div>\n            </div>\n          </md-card-content>\n          <md-card-content class=\"mat-indigo\">\n            <div fxLayout=\"row\" class=\"text-xs-center\">\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n                <div class=\"text-md\">MON</div>\n                <h3 class=\"block pe-is-w-blizzard mt-0 mb-0 pb-xs\"></h3>\n                <strong class=\"degree-value\">10</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n                <div class=\"text-md\">TUE</div>\n                <h2 class=\"block pe-is-w-eclipse-1 mt-0 mb-0 pb-xs\"></h2>\n                <strong class=\"degree-value\">8</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>call_made</md-icon></div>\n                <div class=\"text-md\">WED</div>\n                <h2 class=\"block pe-is-w-fog-3 mt-0 mb-0 pb-xs\"></h2>\n                <strong class=\"degree-value\">6</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>arrow_upward</md-icon></div>\n                <div class=\"text-md\">THU</div>\n                <h2 class=\"block pe-is-w-hail-day-2 mt-0 mb-0 pb-xs\"></h2>\n                <strong class=\"degree-value\">6</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n                <div class=\"text-md\">FRI</div>\n                <h2 class=\"block pe-is-w-mix-rainfall-1 mt-0 mb-0 pb-xs\"></h2>\n                <strong class=\"degree-value\">9</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><md-icon>arrow_forward</md-icon></div>\n                <div class=\"text-md\">SAT</div>\n                <h2 class=\"block pe-is-w-moon-sea mt-0 mb-0 pb-xs\"></h2>\n                <strong class=\"degree-value\">8</strong>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n    </div>\n  </div>\n  <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <div fxLayout=\"column\"  fxLayoutWrap=\"wrap\">\n      <div>\n        <md-card>\n          <md-card-header>\n            <img md-card-avatar src=\"assets/images/avatar.jpg\">\n            <md-card-subtitle>Yesterday</md-card-subtitle>\n            <md-card-title>Gerald Morris</md-card-title>\n          </md-card-header>\n          <img md-card-image src=\"assets/images/unsplash/22.jpg\">\n          <md-card-content>\n            <button md-fab md-fab-card-float class=\"mr-1\" color=\"warn\"><md-icon>share</md-icon></button>\n            <p class=\"ma-0\">Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp.</p>\n          </md-card-content>\n          <hr>\n          <md-card-actions>\n            <div fxLayout=\"row\">\n              <button md-icon-button>\n                <md-icon>share</md-icon>\n              </button>\n              <button md-icon-button>\n                <md-icon>favorite</md-icon>\n              </button>\n              <span fxFlex></span>\n              <button md-button>More info</button>\n              <button md-button>Download</button>\n            </div>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n          <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n            <md-card>\n              <md-card-title fxLayout=\"row\">\n                <span>Fashion</span>\n                <span fxFlex></span>\n                <span class=\"mat-text-primary\">$83.00</span>\n              </md-card-title>\n              <div class=\"card-image-header\" style=\"background-image: url(assets/images/unsplash/21.jpg); height: 265px;\"></div>\n              <md-card-actions>\n                <div fxLayout=\"row\">\n                  <button md-icon-button>\n                    <md-icon>share</md-icon>\n                  </button>\n                  <button md-icon-button>\n                    <md-icon>favorite</md-icon>\n                  </button>\n                  <span fxFlex></span>\n                  <button md-raised-button color=\"warn\">Add to cart</button>\n                </div>\n              </md-card-actions>\n            </md-card>\n          </div>\n          <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n            <md-card>\n              <md-card-title class=\"text-xs-center\">4.30TB</md-card-title>\n              <md-card-subtitle class=\"text-xs-center\">Storage Space</md-card-subtitle>\n              <md-card-content>\n                <canvas height=\"200\" baseChart\n                    [data]=\"pieChartData\"\n                    [options]=\"pieOptions\"\n                    [colors]=\"pieChartColors\"\n                   [labels]=\"pieChartLabels\"\n                   [chartType]=\"pieChartType\"></canvas>\n              </md-card-content>\n              <md-card-content>\n                <div fxLayout=\"row\">\n                  <div fxFlex class=\"pr-xs pl-xs text-xs-right\">\n                    <span class=\"text-sm block\">Used Space</span>\n                    <h6 class=\"mt-xs mb-xs\">1.92TB</h6>\n                    <span>30%</span>\n                  </div>\n                  <div fxFlex class=\"pl-xs pr-xs\">\n                    <span class=\"text-sm block\">Free Space</span>\n                    <h6 class=\"mt-xs mb-xs\">3.23TB</h6>\n                    <span>30%</span>\n                  </div>\n                </div>\n              </md-card-content>\n            </md-card>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .sebm-google-map-container {\n  width: 100%;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
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

var WidgetsComponent = (function () {
    function WidgetsComponent() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 11;
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
            }];
        // Doughnut
        this.pieChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.pieOptions = Object.assign({
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        });
        this.pieChartLabels = ['Used', 'Free'];
        this.pieChartData = [400, 500];
        this.pieChartType = 'pie';
    }
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widgets',
        template: __webpack_require__("../../../../../src/app/widgets/widgets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/widgets.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WidgetsComponent);

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_component__ = __webpack_require__("../../../../../src/app/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widgets_routing__ = __webpack_require__("../../../../../src/app/widgets/widgets.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__widgets_routing__["a" /* WidgetsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyB3HQ_Gk_XRt6KitPdiHQNGpVn0NDwQGMI' })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__widgets_component__["a" /* WidgetsComponent */]]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_component__ = __webpack_require__("../../../../../src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__widgets_component__["a" /* WidgetsComponent */]
    }];
//# sourceMappingURL=widgets.routing.js.map

/***/ })

});
//# sourceMappingURL=widgets.module.chunk.js.map