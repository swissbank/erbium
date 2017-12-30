webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/apps.module": [
		"../../../../../src/app/apps/apps.module.ts",
		"common",
		"apps.module"
	],
	"./chartlib/chartlib.module": [
		"../../../../../src/app/chartlib/chartlib.module.ts",
		"common",
		"chartlib.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./dragndrop/dragndrop.module": [
		"../../../../../src/app/dragndrop/dragndrop.module.ts",
		"dragndrop.module"
	],
	"./forms/forms.module": [
		"../../../../../src/app/forms/forms.module.ts",
		"forms.module",
		"common"
	],
	"./management/management.module": [
		"../../../../../src/app/management/management.module.ts",
		"common",
		"management.module"
	],
	"./maps/maps.module": [
		"../../../../../src/app/maps/maps.module.ts",
		"common",
		"maps.module"
	],
	"./material/material.module": [
		"../../../../../src/app/material/material.module.ts",
		"common",
		"material.module"
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"common",
		"pages.module"
	],
	"./session/session.module": [
		"../../../../../src/app/session/session.module.ts",
		"common",
		"session.module"
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./widgets/widgets.module": [
		"../../../../../src/app/widgets/widgets.module.ts",
		"common",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signature_pad__ = __webpack_require__("../../../../angular2-signature-pad/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/material/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__apps_fullcalendar_fullcalendar_component__ = __webpack_require__("../../../../../src/app/apps/fullcalendar/fullcalendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__management_management_service__ = __webpack_require__("../../../../../src/app/management/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__apps_apps_service__ = __webpack_require__("../../../../../src/app/apps/apps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__authentication_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__apps_shared_service__ = __webpack_require__("../../../../../src/app/apps/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__search_pipe__ = __webpack_require__("../../../../../src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// Common Module










var config = { url: 'https://erbium-socket.herokuapp.com', options: {} };
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8_ng2_translate_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__material_dialog_dialog_component__["b" /* JazzDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__apps_fullcalendar_fullcalendar_component__["a" /* CalendarDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__search_pipe__["a" /* SearchPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_signature_pad__["a" /* SignaturePadModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_27_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_8_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_8_ng2_translate_ng2_translate__["a" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]]
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__["DateTimePickerModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11_angular2_logger_core__["Logger"],
            { provide: __WEBPACK_IMPORTED_MODULE_11_angular2_logger_core__["Options"], useValue: { level: __WEBPACK_IMPORTED_MODULE_11_angular2_logger_core__["Level"].LOG } },
            __WEBPACK_IMPORTED_MODULE_20__libs_localstorage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_19__config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_21__session_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_22__management_management_service__["a" /* ManagementService */],
            __WEBPACK_IMPORTED_MODULE_23__apps_apps_service__["a" /* AppsService */],
            __WEBPACK_IMPORTED_MODULE_24__authentication_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_25__apps_shared_service__["a" /* SharedService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__material_dialog_dialog_component__["b" /* JazzDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__apps_fullcalendar_fullcalendar_component__["a" /* CalendarDialogComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");


var AppRoutes = [{
        path: '',
        redirectTo: 'session',
        pathMatch: 'full',
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: 'home',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'apps',
                loadChildren: './apps/apps.module#AppsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'management',
                loadChildren: './management/management.module#ManagementComponentsModule'
            }, {
                path: 'material',
                loadChildren: './material/material.module#MaterialComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormModule'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'charts',
                loadChildren: './chartlib/chartlib.module#ChartlibModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapModule'
            }, {
                path: 'dragndrop',
                loadChildren: './dragndrop/dragndrop.module#DragndropModule'
            }, {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }]
    }, {
        path: '**',
        redirectTo: 'session/signin'
    }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/apps/apps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppsService = (function () {
    function AppsService(socket, _http, _localstorage, _config, _logger) {
        this.socket = socket;
        this._http = _http;
        this._localstorage = _localstorage;
        this._config = _config;
        this._logger = _logger;
        this.remoteUrl = "https://erbium.ch/backend/api/";
    }
    AppsService.prototype.getAllTransporters = function (page) {
        var url = this.remoteUrl + "transports?page=" + page + "&created_at=desc";
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.searchTransports = function (page, shipement) {
        var url = this.remoteUrl + "transports?page=" + page + "&created_at=desc&shipement=" + shipement;
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this
            ._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.getTransporter = function (formData) {
        var url = this.remoteUrl + "transports/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.addTransporter = function (formData) {
        var url = this.remoteUrl + "transports";
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        formData['user_id'] = user_token.user.id;
        return this
            ._http
            .post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.updateTransporter = function (formData) {
        var url = this.remoteUrl + "transports/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        formData['_method'] = "PUT";
        formData['user_id'] = user_token.user.id;
        return this
            ._http
            .put(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.pickAndstart = function (formData) {
        var url = this.remoteUrl + "transports/pick-start/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        formData['forklift_id'] = user_token.user['id'];
        return this
            ._http
            .post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.getRamps = function () {
        var url = this.remoteUrl + "rampe";
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this
            ._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.getForkLift = function () {
        var url = this.remoteUrl + "forklifts";
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this
            ._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.updateForklist = function (formData) {
        var _this = this;
        var url = this.remoteUrl + "forklifts/" + formData['newforklift'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        formData['_method'] = "PUT";
        return this
            ._http
            .put(url, formData, options)
            .map(function (res) {
            var response = res.json();
            _this.socket.emit('prozess', response);
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.uploadForkliftImage = function (formData, id) {
        var url = this.remoteUrl + "forklifts/images-update/" + id;
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': undefined, withCredentials: true }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        headers.delete('Content-Type');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this
            ._http
            .post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.uploadForkliftSignature = function (formData, id) {
        var user_token = this._localstorage.getObject('user_token');
        var url = this.remoteUrl + "forklifts/update/signature/" + id;
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': undefined, withCredentials: true }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        headers.delete('Content-Type');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this
            ._http
            .post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.getForkLiftId = function (id) {
        var url = this.remoteUrl + "forklifts/" + id;
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        return this
            ._http
            .get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.updateRampe = function (formData, transport_id) {
        var user_token = this._localstorage.getObject('user_token');
        var url = this.remoteUrl + "transports/rampe/" + transport_id;
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', withCredentials: true }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        formData['_method'] = "PUT";
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this
            ._http
            .put(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.sendEmail = function (formData, id) {
        var url = this.remoteUrl + "transports/send/report/" + id;
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': undefined, withCredentials: true }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        headers.delete('Content-Type');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this
            ._http
            .post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.deleteImage = function (formData, id) {
        var url = this.remoteUrl + 'forklift/del-images/' + id + '/' + formData.id;
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this
            ._http
            .delete(url, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    AppsService.prototype.deleteTransports = function (formData) {
        var url = this.remoteUrl + "transports/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        formData['_method'] = "DELETE";
        formData['user_id'] = user_token.user.id;
        return this
            ._http
            .delete(url, options)
            .map(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || {
            message: 'Server error'
        }); });
    };
    return AppsService;
}());
AppsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["Socket"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"]) === "function" && _e || Object])
], AppsService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=apps.service.js.map

/***/ }),

/***/ "../../../../../src/app/apps/fullcalendar/fullcalendar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span fxFlex fxHide=\"false\" fxHide.gt-xs>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</span>\n  <md-toolbar-row>   \n    <span fxFlex fxShow=\"false\" fxShow.gt-xs>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</span>\n\n    <div fxShow=\"false\" fxShow.gt-xs>\n      <button md-button (click)=\"view = 'month'\" [class.active]=\"view === 'month'\">Month</button>\n      <button md-button (click)=\"view = 'week'\" [class.active]=\"view === 'week'\">Week</button>\n      <button md-button (click)=\"view = 'day'\" [class.active]=\"view === 'day'\">Day</button>\n    </div>\n\n    <div fxHide=\"false\" fxHide.gt-xs>\n      <button md-icon-button (click)=\"view = 'month'\" [class.active]=\"view === 'month'\"><md-icon>view_module</md-icon></button>\n      <button md-icon-button (click)=\"view = 'week'\" [class.active]=\"view === 'week'\"><md-icon>view_week</md-icon></button>\n      <button md-icon-button (click)=\"view = 'day'\" [class.active]=\"view === 'day'\"><md-icon>view_day</md-icon></button>\n    </div>\n\n    <span fxFlex fxHide=\"false\" fxHide.gt-xs></span>\n\n    <button md-icon-button mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"><md-icon>chevron_left</md-icon></button>\n    <button md-icon-button mwlCalendarToday\n        [(viewDate)]=\"viewDate\"><md-icon>today</md-icon></button>\n    <button md-icon-button mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"><md-icon>chevron_right</md-icon></button>\n  </md-toolbar-row>\n</md-toolbar>\n\n<md-card>\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"'month'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"'week'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"'day'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-day-view>\n  </div>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/apps/fullcalendar/fullcalendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n:host /deep/ .cal-day-view .cal-hour-rows {\n  border-top: 0;\n  border-bottom: 0;\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-day-view .cal-hour:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n:host /deep/ .cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n:host /deep/ .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-day-view .cal-hour-segment:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n:host /deep/ .cal-month-view .cal-cell-row:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n:host /deep/ .cal-month-view .cal-cell-row .cal-cell:hover,\n:host /deep/ .cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n:host /deep/ .cal-month-view .cal-days {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-month-view .cal-day-cell:not(:last-child) {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-month-view .cal-days .cal-cell-row {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-month-view .cal-open-day-events {\n  box-shadow: none; }\n\n:host /deep/ .cal-week-view .cal-day-headers {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-color: rgba(0, 0, 0, 0.12); }\n\n:host /deep/ .cal-week-view .cal-day-headers .cal-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n:host /deep/ .cal-week-view .cal-event.cal-starts-within-week {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px; }\n\n:host /deep/ .cal-week-view .cal-event.cal-ends-within-week {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px; }\n\n:host /deep/ .cal-month-view .cal-days,\n:host /deep/ .cal-day-view .cal-hour-rows,\n:host /deep/ .cal-week-view .cal-day-headers {\n  border-left: 0;\n  border-right: 0; }\n\n:host /deep/ .editButton, :host /deep/ .deleteButton {\n  background-size: cover;\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  margin: 0 5px; }\n\n:host /deep/ .editButton {\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUyOC44OTkgNTI4Ljg5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTI4Ljg5OSA1MjguODk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMyOC44ODMsODkuMTI1bDEwNy41OSwxMDcuNTg5bC0yNzIuMzQsMjcyLjM0TDU2LjYwNCwzNjEuNDY1TDMyOC44ODMsODkuMTI1eiBNNTE4LjExMyw2My4xNzdsLTQ3Ljk4MS00Ny45ODEgICBjLTE4LjU0My0xOC41NDMtNDguNjUzLTE4LjU0My02Ny4yNTksMGwtNDUuOTYxLDQ1Ljk2MWwxMDcuNTksMTA3LjU5bDUzLjYxMS01My42MTEgICBDNTMyLjQ5NSwxMDAuNzUzLDUzMi40OTUsNzcuNTU5LDUxOC4xMTMsNjMuMTc3eiBNMC4zLDUxMi42OWMtMS45NTgsOC44MTIsNS45OTgsMTYuNzA4LDE0LjgxMSwxNC41NjVsMTE5Ljg5MS0yOS4wNjkgICBMMjcuNDczLDM5MC41OTdMMC4zLDUxMi42OXoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K); }\n\n:host /deep/ .deleteButton {\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzNTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2xlYXIiPgoJCTxwb2x5Z29uIHBvaW50cz0iMzU3LDM1LjcgMzIxLjMsMCAxNzguNSwxNDIuOCAzNS43LDAgMCwzNS43IDE0Mi44LDE3OC41IDAsMzIxLjMgMzUuNywzNTcgMTc4LjUsMjE0LjIgMzIxLjMsMzU3IDM1NywzMjEuMyAgICAgMjE0LjIsMTc4LjUgICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K); }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\nmd-card {\n  margin: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apps/fullcalendar/fullcalendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FullcalendarComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var FullcalendarComponent = (function () {
    function FullcalendarComponent(dialog, doc) {
        var _this = this;
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                action: '',
                event: []
            }
        };
        this.numTemplateOpens = 0;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="editButton"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="deleteButton"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.events = [{
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.activeDayIsOpen = true;
    }
    FullcalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    FullcalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    FullcalendarComponent.prototype.handleEvent = function (action, event) {
        var _this = this;
        this.config.data = { event: event, action: action };
        this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    FullcalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    return FullcalendarComponent;
}());
FullcalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fullcalendar',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__("../../../../../src/app/apps/fullcalendar/fullcalendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/apps/fullcalendar/fullcalendar.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _a || Object, Object])
], FullcalendarComponent);

var CalendarDialogComponent = (function () {
    function CalendarDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return CalendarDialogComponent;
}());
CalendarDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calendar-dialog',
        template: "\n  <h5 class=\"mt-0\">Event action occurred</h5>\n  <div>\n    Action:\n    <pre>{{ data?.action }}</pre>\n  </div>\n  <div>\n    Event:\n    <pre>{{ data?.event | json }}</pre>\n  </div>\n  <button md-button type=\"button\" (click)=\"dialogRef.close()\">Close dialog</button>"
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object, Object])
], CalendarDialogComponent);

var _a, _b;
//# sourceMappingURL=fullcalendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/apps/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = (function () {
    function SharedService() {
        // Observable string sources
        this.caseNumber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.caseNumber$ = this.caseNumber.asObservable();
    }
    // Service message commands
    SharedService.prototype.publishData = function (data) {
        this.caseNumber.next(data);
    };
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(_localstorage, _sessionService, _router, _logger) {
        this._localstorage = _localstorage;
        this._sessionService = _sessionService;
        this._router = _router;
        this._logger = _logger;
        this._logger.log('AuthGuard#constructor');
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this._logger.log(route);
        this._logger.log(state);
        var url = state.url;
        this._logger.log(url);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var isUnProtected = false;
        // Array fo all un protected routes
        var unProtectedRoutes = [
            '/session/signin',
            '/session/forgot'
        ];
        this._logger.log(this._sessionService.isLoggedIn);
        this._logger.log(this._localstorage.getObject('user_token'));
        if (this._sessionService.isLoggedIn || Object.keys(this._localstorage.getObject('user_token')).length) {
            // already login, redirect to default page
            if (url == '/session/signin' || url == '/session/forgot') {
                this._router.navigate(['/home']); // r
                // window.location.href = 'index.html';
                return false;
            }
            return true;
        }
        // not login; check if url is unprotected
        unProtectedRoutes.forEach(function (current_value, index, initial_array) {
            if (current_value == url) {
                isUnProtected = true;
            }
        });
        if (isUnProtected) {
            return true;
        }
        else {
            // Store the attempted URL for redirecting
            this._sessionService.redirectUrl = url;
            this._router.navigate(['/session/signin']);
            // window.location.href = 'login.html';
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__libs_localstorage__["a" /* LocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Config = (function () {
    function Config(http) {
        this.http = http;
        this.config = null;
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    Config.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    Config.prototype.getEnv = function (key) {
        return this.env[key];
    };
    /**
     * This method:
     *   a) Loads "[env].json" to get all env's variables (e.g.: 'development.json')
     *   b) Load data in config object
     */
    Config.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ENV = 'development';
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
                ENV = "production";
            }
            var request = null;
            switch (ENV) {
                case 'production':
                    {
                        request = _this.http.get('src/app/config/' + ENV + '.json');
                    }
                    break;
                case 'development':
                    {
                        request = _this.http.get('src/app/config/' + ENV + '.json');
                    }
                    break;
                case 'default':
                    {
                        console.error('Environment file is not set or invalid');
                        resolve(true);
                    }
                    break;
            }
            if (request) {
                request
                    .map(function (res) { return res.json(); })
                    .catch(function (error) {
                    console.error('Error reading ' + ENV + ' configuration file');
                    resolve(error);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
                })
                    .subscribe(function (responseData) {
                    _this.config = responseData;
                    resolve(true);
                });
            }
            else {
                console.error('Env config file "env.json" is not valid');
                resolve(true);
            }
        });
    };
    return Config;
}());
Config = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Config);

var _a;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" #root=\"$implicit\" dir=\"ltr\" [ngClass]=\"{'app-dark': dark, 'boxed': boxed, 'collapsed-sidebar': collapseSidebar, 'compact-sidebar': compactSidebar}\">\n  <md-toolbar class=\"main-header\" color=\"primary\">\n    <button (click)=\"sidemenu.toggle()\" md-icon-button>\n      <md-icon>menu</md-icon>\n    </button>\n    <div class=\"branding\">\n      <div class=\"logo\"></div>\n    </div>\n    <div class=\"search-bar\" fxFlex>\n      <form class=\"search-form\" fxShow=\"false\" fxShow.gt-xs>\n        <md-icon>search</md-icon>\n        <input type=\"text\" placeholder=\"Search\" autofocus=\"true\" disabled />\n      </form>\n    </div>\n    <button appToggleFullscreen md-icon-button>\n      <md-icon>fullscreen</md-icon>\n    </button>\n    <button  md-icon-button class=\"ml-xs overflow-visible\">\n      <md-icon>notifications</md-icon>\n      <span class=\"notification-label\">{{newRecords}}</span>\n    </button>\n    <button [md-menu-trigger-for]=\"user\" md-icon-button class=\"ml-xs\">\n      <md-icon>person</md-icon>\n    </button>\n    <md-menu #user=\"mdMenu\" x-position=\"before\">\n      <!--<button md-menu-item>\n        <md-icon>settings</md-icon>\n        Settings\n      </button>\n      <button md-menu-item>\n        <md-icon>account_box</md-icon>\n        Profile\n      </button>\n      <button md-menu-item>\n        <md-icon>notifications_off</md-icon>\n        Disable notifications\n      </button>-->\n      <button md-menu-item (click)=\"signout()\">\n        <md-icon>exit_to_app</md-icon>\n        Abmelden\n      </button>\n    </md-menu>\n  </md-toolbar>\n\n  <md-sidenav-container class=\"app-inner\">\n    <md-sidenav #sidemenu class=\"sidebar-panel\" id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" (mouseover)=\"menuMouseOver()\" (mouseout)=\"menuMouseOut()\">\n      <md-nav-list appAccordion class=\"navigation\">\n        <md-list-item appAccordionLink *ngFor=\"let menuitem of myMenu\" group=\"{{menuitem.state}}\">\n          <a appAccordionToggle class=\"relative\"  md-ripple [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link' && menuitem.display\">\n            <md-icon>{{ menuitem.icon }}</md-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink' && menuitem.display\">\n            <md-icon>{{ menuitem.icon }}</md-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink' && menuitem.display\">\n            <md-icon>{{ menuitem.icon }}</md-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub' && menuitem.display\">\n            <md-icon>{{ menuitem.icon }}</md-icon>\n            <span>{{ menuitem.name | translate }}</span>\n            <span fxFlex></span>\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n            <md-icon class=\"menu-caret\">arrow_drop_down</md-icon>\n          </a>\n          <md-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub' && menuitem.display\">\n            <md-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n              <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\" md-ripple>{{ childitem.name | translate }}</a>\n            </md-list-item>\n          </md-nav-list>\n        </md-list-item>\n        <md-divider></md-divider>\n        <!-- <md-list-item>\n          <a (click)=\"addMenuItem()\">\n            <md-icon>add</md-icon>\n            <span>Add</span>\n          </a>\n        </md-list-item> -->\n      </md-nav-list>\n    </md-sidenav>\n    <md-sidenav #end align=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\n      <md-tab-group [selectedIndex]=\"1\" md-stretch-tabs>\n        <md-tab>\n          <ng-template md-tab-label>Today</ng-template>\n          <div class=\"scroll\">\n            <md-list class=\"pt-1 pb-1\">\n              <md-list-item>\n                <div fxLayout=\"column\">\n                  <h2 class=\"ma-0\">{{ today | date:'EEEE' }}</h2>\n                  <h6 class=\"mat-text-muted ma-0\"><span>{{ today | date:'dd' }}</span>&nbsp;<span>{{ today | date:'MMMM' }}</span></h6>\n                </div>\n              </md-list-item>\n            </md-list>\n            <md-nav-list>\n              <md-divider></md-divider>\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Stocks</h3>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">NASDAQ</a>\n                 <span class=\"mat-text-muted text-md mr-xs ml-xs\">4,492.87</span>\n                 <span>-0.29%</span>\n              </md-list-item>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">NYSE</a>\n                 <span class=\"mat-text-muted text-md mr-xs ml-xs\">10,692.07</span>\n                 <span>-0.53%</span>\n              </md-list-item>\n              <md-list-item>\n                 <a md-line href=javascript:;>DOW J</a>\n                 <span class=\"mat-text-muted text-md mr-xs ml-xs\">17,046.81</span>\n                 <span>-0.14%</span>\n              </md-list-item>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">APPL</a>\n                 <span class=\"mat-text-muted text-md mr-xs ml-xs\">100,89</span>\n                 <span>+0.75%</span>\n              </md-list-item>\n              <md-divider></md-divider>\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Weather</h3>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">{{ today | date:'shortTime' }}</a>\n                 <p md-line class=\"mat-text-muted\">London</p>\n                 <span class=\"h4 pe-is-w-blizzard mr-1\"></span>\n                 <span class=\"h4\">26°</span>\n              </md-list-item>\n              <md-divider></md-divider>\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Todo</h3>\n              <md-list-item>\n                <a md-line href=\"javascript:;\">Learn Angular 2.0</a>\n                <p md-line class=\"mat-text-muted text-md\">2:45PM</p>\n              </md-list-item>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">Learn Angular Material</a>\n                 <p md-line class=\"mat-text-muted text-md\">3:20PM</p>\n              </md-list-item>\n              <md-list-item>\n                 <a md-line href=\"javascript:;\">Write documentation</a>\n                 <p md-line class=\"mat-text-muted text-md\">6:00PM</p>\n              </md-list-item>\n              <md-divider class=\"mt-xs mb-xs\"></md-divider>\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Stats</h3>\n              <md-list-item>\n                <p class=\"text-md\" md-line>Local Storage (4023 / 10690)</p>\n                <md-progress-bar  md-line mode=\"determinate\" color=\"warn\" value=\"40\"></md-progress-bar>\n              </md-list-item>\n              <md-list-item>\n                <p class=\"text-md\" md-line>Cloud Storage (700 / 1030)</p>\n                <md-progress-bar  md-line mode=\"determinate\" color=\"accent\" value=\"70\"></md-progress-bar>\n              </md-list-item>\n              <md-list-item>\n                <p class=\"text-md\" md-line>Local Storage (20 / 100)</p>\n                <md-progress-bar  md-line mode=\"determinate\" value=\"20\"></md-progress-bar>\n              </md-list-item>\n            </md-nav-list>\n          </div>\n        </md-tab>\n        <md-tab>\n          <ng-template md-tab-label>Notifications</ng-template>\n          <div class=\"scroll\">\n            <md-nav-list>\n              <md-list-item>\n                <md-icon md-list-avatar class=\"mat-text-primary\">people</md-icon>\n                <h4 md-line>Social</h4>\n                <p md-line>Ligula Purus Adipiscing</p>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar class=\"mat-text-warn\">local_offer</md-icon>\n                <h4 md-line>Promotions</h4>\n                <p md-line>Etiam Ligula Dapibus</p>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar class=\"mat-text-accent\">info</md-icon>\n                <h4 md-line>Updates</h4>\n                <p md-line>Sollicitudin Euismod Fringilla</p>\n              </md-list-item>\n\n              <md-list-item>\n                <md-icon md-list-avatar class=\"mat-indigo\">delete_sweep</md-icon>\n                <h4 md-line>Removed 6 items from task list</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1427207139000 | date: 'fullDate' }}</span>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar>check_circle</md-icon>\n                <h4 md-line>Completed 2 projects</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1427412725000 | date: 'fullDate' }}</span>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar>notifications_paused</md-icon>\n                <h4 md-line>Muted notifications</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1427546580000 | date: 'fullDate' }}</span>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar>person_add</md-icon>\n                <h4 md-line>Added Joel to contact list</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1428275520000 | date: 'fullDate' }}</span>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar>phone_missed</md-icon>\n                <h4 md-line>Missed live call from Ellie</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1428830580000 | date: 'fullDate' }}</span>\n              </md-list-item>\n              <md-list-item>\n                <md-icon md-list-avatar>group_add</md-icon>\n                <h4 md-line>You've been added to HR group</h4>\n                <span class=\"text-md mat-text-muted\" md-line>{{ 1429363920000 | date: 'fullDate' }}</span>\n              </md-list-item>\n            </md-nav-list>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-sidenav>\n    <router-outlet></router-outlet>\n  </md-sidenav-container>\n\n  <!-- Demo Purposes Only -->\n  <button md-fab color=\"warn\" class=\"mat-fab-bottom-right\" *ngIf=\"showSettingsBtn\" (click)=\"showSettings = true\">\n    <md-icon class=\"md-24\">settings</md-icon>\n  </button>\n  <md-card class=\"settings-panel\" *ngIf=\"showSettingsBtn && showSettings\">\n    <md-toolbar color=\"warn\">\n      <span fxFlex>Options</span>\n      <button md-icon-button (click)=\"showSettings = false\">\n        <md-icon>close</md-icon>\n      </button>\n    </md-toolbar>\n    <md-card-content class=\"demo-checkbox\">\n      <div class=\"pb-1\">\n        <md-checkbox [(ngModel)]=\"collapseSidebar\" (change)=\"compactSidebar = false\" [align]=\"end\">Collapsed Sidebar</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox [(ngModel)]=\"compactSidebar\" (change)=\"collapseSidebar = false\" [align]=\"end\">Compact Sidebar</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox [(ngModel)]=\"boxed\" [align]=\"end\">Boxed Layout</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox [(ngModel)]=\"dark\" [align]=\"end\">Dark Mode</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox (change)=\"root.dir = (root.dir == 'rtl' ? 'ltr' : 'rtl')\" [align]=\"end\">RTL</md-checkbox>\n      </div>\n      <div class=\"pb-0\">\n        <md-select placeholder=\"Language\" class=\"mt-1\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\">\n          <md-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</md-option>\n        </md-select>\n     </div>\n    </md-card-content>\n  </md-card>\n  <!-- /Demo Purposes Only -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, menuItems, translate, _sessionService, _logger, _localstorage, socket) {
        this.router = router;
        this.menuItems = menuItems;
        this.translate = translate;
        this._sessionService = _sessionService;
        this._logger = _logger;
        this._localstorage = _localstorage;
        this.socket = socket;
        this.today = Date.now();
        this.showSettingsBtn = false;
        this.showSettings = false;
        this.currentLang = 'en';
        this.root = 'ltr';
        this.newRecords = 0;
        var self = this;
        this.socket.on('new-record', function (data) {
            if (data.from == 'all') {
                self.newRecords = data.count;
            }
        });
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ;
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Update sidebar menu based on user permission
        this.implementACl();
        var elemSidebar = document.querySelector('.app-inner > .sidebar-panel');
        var elemContent = document.querySelector('.app-inner > .mat-sidenav-content');
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac() && !this.compactSidebar) {
            __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["initialize"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
            __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["initialize"](elemContent, { wheelSpeed: 2, suppressScrollX: true });
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.url = event.url;
            if (_this.isOver()) {
                _this.sidemenu.close();
            }
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar) {
                __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["update"](elemContent);
            }
        });
    };
    AdminLayoutComponent.prototype.onClick = function (e) {
        var _this = this;
        var elemSidebar = document.querySelector('.app-inner > .sidebar-panel');
        setTimeout(function () {
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar) {
                __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["update"](elemSidebar);
            }
        }, 350);
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.implementACl = function () {
        var user_token = this._localstorage.getObject('user_token');
        var myMenu = this.menuItems.getAll();
        myMenu.forEach(function (value, index) {
            // set default display value to TRUE
            value['display'] = true;
            // Set display values for sub menu
            if (value['type'] == "sub") {
                value['children'].forEach(function (val, i) {
                    val['display'] = true;
                });
            }
            // State specific ACL
            if (value['state'] == "management") {
                // set TRUE or FALSE based on user type
                if (user_token.user.type > 2) {
                    value['display'] = false;
                    // Set display values for sub menu
                    if (value['type'] == "sub") {
                        value['children'].forEach(function (val, i) {
                            val['display'] = false;
                        });
                    }
                }
            }
        });
        this.myMenu = myMenu;
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
            return true;
        }
        else {
            return window.matchMedia("(max-width: 960px)").matches;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timelmenuine', name: 'MENU' }
            ]
        });
    };
    AdminLayoutComponent.prototype.signout = function () {
        this._logger.log("signout called");
        if (this._sessionService.signout()) {
            // Navigate to the signin page
            this.router.navigate(['/session/signin']);
        }
    };
    return AdminLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidemenu'),
    __metadata("design:type", Object)
], AdminLayoutComponent.prototype, "sidemenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminLayoutComponent.prototype, "onClick", null);
AdminLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__["a" /* MenuItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__["a" /* MenuItems */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__session_session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_logger_core__["Logger"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["Socket"]) === "function" && _g || Object])
], AdminLayoutComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <router-outlet></router-outlet>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        styles: [':host /deep/ .mat-sidenav-content {padding: 0;} .mat-sidenav-container {z-index: 1000}'],
        template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
    })
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/libs/localstorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
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

var KEY_PREFIX = "erbium";
var LocalStorage = (function () {
    function LocalStorage() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    LocalStorage.prototype.generateStorageKey = function (key) {
        return KEY_PREFIX + "_" + key;
    };
    LocalStorage.prototype.set = function (key, value) {
        var storageKey = this.generateStorageKey(key);
        this.localStorage[storageKey] = value;
    };
    LocalStorage.prototype.get = function (key) {
        var storageKey = this.generateStorageKey(key);
        return this.localStorage[storageKey] || false;
    };
    LocalStorage.prototype.setObject = function (key, value) {
        var storageKey = this.generateStorageKey(key);
        this.localStorage[storageKey] = JSON.stringify(value);
    };
    LocalStorage.prototype.getObject = function (key) {
        var storageKey = this.generateStorageKey(key);
        return JSON.parse(this.localStorage[storageKey] || '{}');
    };
    LocalStorage.prototype.remove = function (key) {
        var storageKey = this.generateStorageKey(key);
        this.localStorage.removeItem(storageKey);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorage);

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ "../../../../../src/app/management/management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ManagementService = (function () {
    function ManagementService(_http, _localstorage, _config, _logger) {
        this._http = _http;
        this._localstorage = _localstorage;
        this._config = _config;
        this._logger = _logger;
        this._user = null;
        this._logger.log("ManegementService constructor called");
    }
    ManagementService.prototype.setUser = function (data) {
        this._logger.log("setUser data");
        this._logger.log(data);
        return this._user = data;
    };
    ManagementService.prototype.getUser = function () {
        return this._user;
    };
    ManagementService.prototype.getUsers = function () {
        var _this = this;
        this._logger.log("getUsers called.");
        var url = "https://erbium.ch/backend/api/users";
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        //let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this._http.get(url, { headers: headers })
            .map(function (res) {
            var response = res.json();
            _this._logger.log(response);
            if (response && response.success) {
            }
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ManagementService.prototype.updateUser = function (formData) {
        var _this = this;
        this._logger.log("updateUser called.");
        var url = "https://erbium.ch/backend/api/user/update/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.put(url, formData, options)
            .map(function (res) {
            var response = res.json();
            _this._logger.log(response);
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ManagementService.prototype.activeUser = function (formData) {
        var _this = this;
        this._logger.log("updateUser called.");
        var url = "https://erbium.ch/backend/api/user/active/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.post(url, formData, options)
            .map(function (res) {
            var response = res.json();
            _this._logger.log(response);
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ManagementService.prototype.deleteUser = function (formData) {
        var _this = this;
        this._logger.log("updateUser called.");
        var url = "https://erbium.ch/backend/api/user/" + formData['id'];
        var user_token = this._localstorage.getObject('user_token');
        var token = user_token.access_token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.delete(url, options)
            .map(function (res) {
            var response = res.json();
            _this._logger.log(response);
            return response;
        });
    };
    return ManagementService;
}());
ManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"]) === "function" && _d || Object])
], ManagementService);

var _a, _b, _c, _d;
//# sourceMappingURL=management.service.js.map

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"demo-dialog-card\">\n  <md-card-title>Dialog</md-card-title>\n  <md-card-subtitle>MdDialog is a service, which opens dialogs components in the view.</md-card-subtitle>\n  <md-card-content>\n    <button md-raised-button color=\"primary\" (click)=\"open()\" [disabled]=\"dialogRef\">Open dialog</button>\n\n    <p>Dialog dimensions</p>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.width\" placeholder=\"Width\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.height\" placeholder=\"Height\">\n    </md-input-container>\n    \n    <p>Dialog position</p>\n\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.top\" (change)=\"config.position.bottom = ''\" placeholder=\"Top\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.bottom\" (change)=\"config.position.top = ''\" placeholder=\"Bottom\">\n    </md-input-container>\n\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.left\" (change)=\"config.position.right = ''\" placeholder=\"Left\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.right\" (change)=\"config.position.left = ''\" placeholder=\"Right\">\n    </md-input-container>\n\n    <p>Other options</p>\n    <md-checkbox [(ngModel)]=\"config.disableClose\">Disable close</md-checkbox>\n\n    <p>Last close result: {{lastCloseResult}}</p>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JazzDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
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
    }
    DialogComponent.prototype.open = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/material/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/dialog/dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object])
], DialogComponent);

var JazzDialogComponent = (function () {
    function JazzDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.jazzMessage = 'Jazzy jazz jazz';
    }
    return JazzDialogComponent;
}());
JazzDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jazz-dialog',
        template: "\n  <h5 class=\"mt-0\">Maecenas faucibus mollis interdum.</h5>\n  <md-input-container>\n    <input mdInput placeholder=\"How much?\" #howMuch type=\"number\" style=\"width: 100%;\">\n  </md-input-container>\n  <p> {{ jazzMessage }} </p>\n  <button md-button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object])
], JazzDialogComponent);

var _a, _b;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SessionService = (function () {
    function SessionService(_http, _localstorage, _config, _logger) {
        this._http = _http;
        this._localstorage = _localstorage;
        this._config = _config;
        this._logger = _logger;
        this.isLoggedIn = false;
        // store the URL so we can redirect after logging in
        this.redirectUrl = "/apps/transport";
        this._logger.log("SessionService constructor called");
    }
    SessionService.prototype.login = function (formData) {
        var _this = this;
        this._logger.log("login called.");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers }); // Create a request option
        //let url = this._config.getConfig('apiUrl')+"";
        var url = "https://erbium.ch/backend/api/user/login";
        // Extra params
        // formData['grant_type'] = "password";
        // formData['client_id'] = "2";
        // formData['client_secret'] = "m3KtgNAKxq6Cm1WC6cDAXwR0nj3uPMxoRn3Ifr8L";
        return this._http.post(url, formData, options) // ...using post request
            .map(function (res) {
            var response = res.json(); // ...and calling .json() on the response to return data
            _this._logger.log(response);
            if (response && response.success) {
                _this.isLoggedIn = true;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this._localstorage.setObject('user_token', response.data);
            }
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json() || { message: 'Server error' }); });
    };
    SessionService.prototype.register = function (formData) {
        var _this = this;
        this._logger.log("register called.");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers }); // Create a request option
        //let url = this._config.getConfig('apiUrl')+"";
        var url = "https://erbium.ch/backend/api/user/signup";
        // Extra params
        //formData['type'] = "2";
        //formData['api_token'] = "$2y$10$WIHlyATgZScBaSJK.r0OQOtlZK.fypMQd/S1LDUYPNfdMMNqaQnGesse";
        return this._http.post(url, formData, options) // ...using post request
            .map(function (res) {
            var response = res.json(); // ...and calling .json() on the response to return data
            _this._logger.log(response);
            if (response) {
                _this.isLoggedIn = true;
                // store user details and token in local storage to keep user logged in between page refreshes
                _this._localstorage.setObject('user', response);
            }
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SessionService.prototype.forgot = function (formData) {
        var _this = this;
        this._logger.log("forgot called.");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers }); // Create a request option
        //let url = this._config.getConfig('apiUrl')+"";
        var url = "https://erbium.ch/backend/api/user/forgot";
        return this._http.post(url, formData, options) // ...using post request
            .map(function (res) {
            var response = res.json(); // ...and calling .json() on the response to return data
            _this._logger.log(response);
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SessionService.prototype.signout = function () {
        // delete user token and object
        this._localstorage.remove('user_token');
        this._localstorage.remove('user');
        return true;
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__libs_localstorage__["a" /* LocalStorage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_logger_core__["Logger"]) === "function" && _d || Object])
], SessionService);

var _a, _b, _c, _d;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    return AccordionDirective;
}());
AccordionDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordion]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AccordionDirective);

var _a;
//# sourceMappingURL=accordion.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    return AccordionAnchorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === "function" && _a || Object])
], AccordionAnchorDirective);

var _a;
//# sourceMappingURL=accordionanchor.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    return AccordionLinkDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === "function" && _a || Object])
], AccordionLinkDirective);

var _a;
//# sourceMappingURL=accordionlink.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    return ToggleFullscreenDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleFullscreenDirective.prototype, "onClick", null);
ToggleFullscreenDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appToggleFullscreen]'
    })
], ToggleFullscreenDirective);

//# sourceMappingURL=toggle-fullscreen.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: 'apps/transport',
        name: 'Dashboard',
        type: 'link',
        icon: 'explore'
    },
    {
        state: 'apps',
        name: 'APPS',
        type: 'sub',
        icon: 'apps',
        /*badge: [
          {type: 'red', value: '5'}
        ],*/
        children: [
            { state: 'transport', name: 'CTC/ADR' }
        ]
    },
    /*{
      state: 'material',
      name: 'Management',
      type: 'sub',
      icon: 'face',
      badge: [
        {type: 'purple', value: '10'}
      ],
      children: [
        {state: 'cards', name: 'New Entity'},
        {state: 'select', name: 'Manage roles'},
        {state: 'autocomplete', name: 'New Role'},
        // {state: 'button', name: 'Manage entities'},
        // {state: 'cards', name: 'New Entity'},
        // {state: 'select', name: 'Manage roles'},
        // {state: 'autocomplete', name: 'New Role'},
        // {state: 'radio', name: 'Report Metrics'}
      ]
    },*/
    {
        state: 'management',
        name: 'Management',
        type: 'sub',
        icon: 'face',
        /*badge: [
          {type: 'purple', value: '10'}
        ],*/
        children: [
            /*{state: 'button', name: 'Manage entities'},
            {state: 'cards', name: 'New Entity'},
            {state: 'select', name: 'Manage roles'},
            {state: 'autocomplete', name: 'New Role'},*/
            { state: 'userlist', name: 'Manage users' },
            { state: 'useradd', name: 'New User' }
        ]
    }
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    return MenuItems;
}());
MenuItems = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuItems);

//# sourceMappingURL=menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("../../../../../src/app/shared/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__ = __webpack_require__("../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionDirective */],
            __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionDirective */],
            __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__["a" /* MenuItems */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map