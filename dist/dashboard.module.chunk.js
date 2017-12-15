webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-teal\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>local_offer</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>103</h5>\n          <p>Campaigns</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-purple\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>phone</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>230</h5>\n          <p>Customers</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-red\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>notifications</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>323</h5>\n          <p>Queries</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <md-card class=\"card-widget mat-indigo\">\n      <div md-card-widget>\n        <div md-card-float-icon>\n          <md-icon>email</md-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h5 md-card-widget-title>870</h5>\n          <p>Opens</p>\n        </div>\n      </div>\n    </md-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\n\t\t<md-card>\n      <md-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        Revenue &nbsp; <span class=\"font-weight-bold mat-text-primary\">+458,90</span>\n        <span fxFlex></span>\n        <button md-icon-button md-button-sm [md-menu-trigger-for]=\"card1\" aria-label=\"Open card menu\">\n          <md-icon>more_vert</md-icon>\n        </button>\n      </md-card-subtitle>\n      <md-menu #card1=\"mdMenu\" x-position=\"before\">\n        <button md-menu-item>\n          <md-icon>settings</md-icon>\n          Settings\n        </button>\n        <button md-menu-item>\n          <md-icon>more</md-icon>\n          View More\n        </button>\n        <button md-menu-item>\n          <md-icon>notifications_off</md-icon>\n          Disable notifications\n        </button>\n        <button md-menu-item>\n          <md-icon>exit_to_app</md-icon>\n          Remove Panel\n        </button>\n      </md-menu>\n\t\t\t<md-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartOptions\"\n          [colors]=\"chartColors\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\"></canvas>\n      </md-card-content>\n\t\t</md-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n\t\t<md-card>\n      <md-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        Yearly Sales &nbsp; <span class=\"font-weight-bold mat-text-warn\">-46,68</span>\n        <span fxFlex></span>\n        <button md-icon-button md-button-sm [md-menu-trigger-for]=\"card2\" aria-label=\"Open card menu\">\n          <md-icon>more_vert</md-icon>\n        </button>\n      </md-card-subtitle>\n      <md-menu #card2=\"mdMenu\" x-position=\"before\">\n        <button md-menu-item>\n          <md-icon>settings</md-icon>\n          Settings\n        </button>\n        <button md-menu-item>\n          <md-icon>more</md-icon>\n          View More\n        </button>\n        <button md-menu-item>\n          <md-icon>notifications_off</md-icon>\n          Disable notifications\n        </button>\n        <button md-menu-item>\n          <md-icon>exit_to_app</md-icon>\n          Remove Panel\n        </button>\n      </md-menu>\n\t\t\t<md-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"ComboChartData\"\n          [labels]=\"comboChartLabels\"\n          [options]=\"ComboChartOptions\"\n          [colors]=\"chartColors\"\n          [legend]=\"comboChartLegend\"\n          [chartType]=\"barChartType\"></canvas>\n      </md-card-content>\n\t\t</md-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n\t\t<md-card>\n      <md-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        Sales Report &nbsp; <span class=\"font-weight-bold mat-text-accent\">+2,50%</span>\n        <span fxFlex></span>\n        <button md-icon-button md-button-sm [md-menu-trigger-for]=\"card3\" aria-label=\"Open card menu\">\n          <md-icon>more_vert</md-icon>\n        </button>\n      </md-card-subtitle>\n      <md-menu #card3=\"mdMenu\" x-position=\"before\">\n        <button md-menu-item>\n          <md-icon>settings</md-icon>\n          Settings\n        </button>\n        <button md-menu-item>\n          <md-icon>more</md-icon>\n          View More\n        </button>\n        <button md-menu-item>\n          <md-icon>notifications_off</md-icon>\n          Disable notifications\n        </button>\n        <button md-menu-item>\n          <md-icon>exit_to_app</md-icon>\n          Remove Panel\n        </button>\n      </md-menu>\n\t\t\t<md-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"bubbleChartData\"\n          [labels]=\"comboChartLabels\"\n          [options]=\"ComboChartOptions\"\n          [legend]=\"comboChartLegend\"\n          [chartType]=\"bubbleChartType\"></canvas>\n      </md-card-content>\n\t\t</md-card>\n\t</div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-sm=\"66.66%\" fxFlex=\"100\">\n    <ngx-datatable\n      class=\"material\"\n      [rows]=\"rows\"\n      [columnMode]=\"'force'\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"0\"\n      [rowHeight]=\"'auto'\">\n      <ngx-datatable-column name=\"Project\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n          {{row['project']}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Due Date\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n          {{row['date'] | date: 'MMMM dd'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Progress\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n          <md-progress-bar mode=\"determinate\" value=\"{{row['progress']}}\" color=\"primary\"></md-progress-bar>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </div>\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\n    <md-card>\n      <md-card-title>Newsfeed</md-card-title>\n      <md-card-subtitle>Stories posted today</md-card-subtitle>\n      <hr>\n      <md-list>\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n          <md-list-item>\n            <img md-list-avatar src=\"{{item.photo}}\" alt=\"\">\n            <h3 md-line> {{item.from}} </h3>\n            <p md-line> {{item.subject}} - {{item.message}} </p>\n          </md-list-item>\n        </ng-template>\n      </md-list>\n    </md-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex.gt-md=\"50\" fxFlex=\"100\">\n    <md-card>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mr-1\">\n        <md-card-header class=\"mt-0\">\n          <img md-card-avatar src=\"assets/images/avatar.jpg\">\n          <md-card-subtitle>Revenue &nbsp; <span class=\"font-weight-bold mat-text-primary\">+458,90</span></md-card-subtitle>\n          <md-card-title>Gerald Morris</md-card-title>\n        </md-card-header>\n        <span fxFlex></span>\n        <button md-icon-button md-button-sm [md-menu-trigger-for]=\"card1\" aria-label=\"Open card menu\">\n          <md-icon>more_vert</md-icon>\n        </button>\n      </div>\n      <div class=\"card-image-header\" style=\"background-image: url(assets/images/unsplash/2.jpg); height: 240px;\"></div>\n      <md-card-content>\n        <button md-fab md-fab-card-float class=\"mr-1\" color=\"warn\"><md-icon>share</md-icon></button>\n        <p class=\"ma-0\">Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp.</p>\n      </md-card-content>\n      <hr>\n      <md-card-actions>\n        <div fxLayout=\"row\">\n          <button md-icon-button>\n            <md-icon>share</md-icon>\n          </button>\n          <button md-icon-button>\n            <md-icon>favorite</md-icon>\n          </button>\n          <span fxFlex></span>\n          <button md-button>More info</button>\n          <button md-button>Download</button>\n        </div>\n      </md-card-actions>\n    </md-card>\n  </div>\n  <div fxFlex.gt-md=\"50\" fxFlex=\"100\">\n    <md-card>\n      <md-card-content class=\"pb-0\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n          <div fxFlex>\n            <h3 class=\"mt-0 mb-0\">London, UK</h3>\n            <h6 class=\"mt-0 mb-0\">Saturday 2:00 AM</h6>\n            <p class=\"mat-text-muted mt-0 mb-0\">Mostly Sunny</p>\n          </div>\n          <span fxFlex></span>\n          <div fxFlex class=\"text-xs-right\">\n            <h1 class=\"text-xxl mt-0 mb-0\">\n              <span class=\"pe-is-w-moon-sea mat-text-accent\"></span>\n              <span>6<sup></sup></span>\n            </h1>\n          </div>\n        </div>\n        <div fxLayout=\"row\" layout-align=\"center\" class=\"mb-2 text-md\">\n          <div class=\"pr-1\" fxFlex>\n            <div fxLayout=\"row\">          \n              <span>Pressure</span>\n              <span fxFlex></span>\n              <span>30.09</span>\n              <span>hPa</span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Visibility</span>\n              <span fxFlex></span>\n              <span>11.27</span>\n              <span>km</span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Light</span>\n              <span fxFlex></span>\n              <span>0.00</span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Light</span>\n              <span fxFlex></span>\n              <span>16</span>\n              <span>C</span>\n            </div>\n          </div>\n          <div class=\"pl-1\" fxFlex>\n            <div fxLayout=\"row\">          \n              <span>Humidity</span>\n              <span fxFlex></span>\n              <span>94</span>\n              <span>%</span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Precp.</span>\n              <span fxFlex></span>\n              <span></span>\n              <span>mm</span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Snow Depth</span>\n              <span fxFlex></span>\n              <span></span>\n            </div>\n\n            <div fxLayout=\"row\">          \n              <span>Wind Gust</span>\n              <span fxFlex></span>\n              <span></span>\n            </div>\n          </div>\n        </div>\n      </md-card-content>\n      <md-card-content class=\"mat-indigo\">\n        <div fxLayout=\"row\" class=\"text-xs-center\">\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n            <div class=\"text-md\">MON</div>\n            <h3 class=\"block pe-is-w-blizzard mt-0 mb-0 pb-xs\"></h3>\n            <strong class=\"degree-value\">10</strong>\n          </div>\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n            <div class=\"text-md\">TUE</div>\n            <h2 class=\"block pe-is-w-eclipse-1 mt-0 mb-0 pb-xs\"></h2>\n            <strong class=\"degree-value\">8</strong>\n          </div>\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>call_made</md-icon></div>\n            <div class=\"text-md\">WED</div>\n            <h2 class=\"block pe-is-w-fog-3 mt-0 mb-0 pb-xs\"></h2>\n            <strong class=\"degree-value\">6</strong>\n          </div>\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>arrow_upward</md-icon></div>\n            <div class=\"text-md\">THU</div>\n            <h2 class=\"block pe-is-w-hail-day-2 mt-0 mb-0 pb-xs\"></h2>\n            <strong class=\"degree-value\">6</strong>\n          </div>\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>call_received</md-icon></div>\n            <div class=\"text-md\">FRI</div>\n            <h2 class=\"block pe-is-w-mix-rainfall-1 mt-0 mb-0 pb-xs\"></h2>\n            <strong class=\"degree-value\">9</strong>\n          </div>\n          <div fxFlex>\n            <div class=\"text-md\">6 km/h</div>\n            <div class=\"text-md pb-xs\"><md-icon>arrow_forward</md-icon></div>\n            <div class=\"text-md\">SAT</div>\n            <h2 class=\"block pe-is-w-moon-sea mt-0 mb-0 pb-xs\"></h2>\n            <strong class=\"degree-value\">8</strong>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
        var _this = this;
        this.rows = [];
        // Shared chart options
        this.globalChartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        // Bar
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            defaultFontColor: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            defaultFontColor: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.globalChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        // combo chart
        this.comboChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.chartColors = [{
                backgroundColor: '#7986cb',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.comboChartLegend = true;
        this.ComboChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.ComboChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        // newsfeed
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
            },];
        this.fetch(function (data) { _this.rows = data; });
    }
    // project table
    DashboardComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/projects.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__dashboard_routing__["a" /* DashboardRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/auth-guard.service.ts");


var DashboardRoutes = [{
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__authentication_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map