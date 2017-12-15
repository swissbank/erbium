webpackJsonp(["tables.module"],{

/***/ "../../../../../src/app/tables/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material fullscreen\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"0\"\n  [rowHeight]=\"50\"\n  [scrollbarV]=\"true\"\n  [scrollbarH]=\"true\"\n  [rows]=\"rows\">\n  <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/data-table/data-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
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

var DataTableComponent = (function () {
    function DataTableComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    DataTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table',
        template: __webpack_require__("../../../../../src/app/tables/data-table/data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/data-table/data-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DataTableComponent);

//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-editing/table-editing.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  #mydatatable\n  class=\"material\"\n  [headerHeight]=\"50\"\n  [limit]=\"5\"\n  [columnMode]=\"'force'\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  [rows]=\"rows\">\n  <ngx-datatable-column name=\"Name\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n      <span\n        title=\"Double click to edit\"\n        (dblclick)=\"editing[row.$$index + '-name'] = true\"\n        *ngIf=\"!editing[row.$$index + '-name']\">\n        {{value}}\n      </span>\n      <input\n        autofocus\n        (blur)=\"updateValue($event, 'name', value, row)\"\n        *ngIf=\"editing[row.$$index + '-name']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\">\n    <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\n       <span\n        title=\"Double click to edit\"\n        (dblclick)=\"editing[row.$$index + '-gender'] = true\"\n        *ngIf=\"!editing[row.$$index + '-gender']\">\n        {{value}}\n      </span>\n      <select\n        *ngIf=\"editing[row.$$index + '-gender']\"\n        (change)=\"updateValue($event, 'gender', value, row)\"\n        [value]=\"value\">\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n      </select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\">\n      {{value}}\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-editing/table-editing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-editing/table-editing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditingComponent; });
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

var TableEditingComponent = (function () {
    function TableEditingComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditingComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    return TableEditingComponent;
}());
TableEditingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-editing',
        template: __webpack_require__("../../../../../src/app/tables/table-editing/table-editing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-editing/table-editing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableEditingComponent);

//# sourceMappingURL=table-editing.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-filter/table-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container style=\"width: 100%\" class=\"mb-1\">\n  <input mdInput placeholder=\"Type to filter the name column...\" required (keyup)='updateFilter($event)'>\n</md-input-container>\n<ngx-datatable\nclass='material'\n[columns]=\"columns\"\n[columnMode]=\"'force'\"\n[headerHeight]=\"50\"\n[footerHeight]=\"50\"\n[rowHeight]=\"'auto'\"\n[limit]=\"10\"\n[rows]='rows'>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-filter/table-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-filter/table-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFilterComponent; });
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

var TableFilterComponent = (function () {
    function TableFilterComponent() {
        var _this = this;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            // cache our list
            _this.temp = data.slice();
            // push our inital complete list
            _this.rows = data;
        });
    }
    TableFilterComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableFilterComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    return TableFilterComponent;
}());
TableFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-filter',
        template: __webpack_require__("../../../../../src/app/tables/table-filter/table-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-filter/table-filter.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableFilterComponent);

//# sourceMappingURL=table-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-paging/table-paging.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  [externalPaging]=\"true\"\n  [count]=\"count\"\n  [offset]=\"offset\"\n  [limit]=\"limit\"\n  (page)='onPage($event)'>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-paging/table-paging.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-paging/table-paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePagingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablePagingComponent = (function () {
    function TablePagingComponent() {
        this.rows = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
    }
    TablePagingComponent.prototype.ngOnInit = function () {
        this.page(this.offset, this.limit);
    };
    TablePagingComponent.prototype.page = function (offset, limit) {
        var _this = this;
        this.fetch(function (results) {
            _this.count = results.length;
            var start = offset * limit;
            var end = start + limit;
            var rows = _this.rows.slice();
            for (var i = start; i < end; i++) {
                rows[i] = results[i];
            }
            _this.rows = rows;
            console.log('Page Results', start, end, rows);
        });
    };
    TablePagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePagingComponent.prototype.onPage = function (event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    };
    return TablePagingComponent;
}());
TablePagingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-paging',
        template: __webpack_require__("../../../../../src/app/tables/table-paging/table-paging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-paging/table-paging.component.scss")]
    })
], TablePagingComponent);

//# sourceMappingURL=table-paging.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-pinning/table-pinning.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\nclass=\"material\"\n[columnMode]=\"'force'\"\n[headerHeight]=\"50\"\n[footerHeight]=\"50\"\n[rowHeight]=\"50\"\n[scrollbarV]=\"true\"\n[scrollbarH]=\"true\"\n[rows]=\"rows\">\n  <ngx-datatable-column\n    name=\"Name\"\n    [width]=\"300\"\n    [frozenLeft]=\"true\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"Gender\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"Age\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"City\"\n    [width]=\"150\"\n    prop=\"address.city\">\n  </ngx-datatable-column>\n  <ngx-datatable-column\n    name=\"State\"\n    [width]=\"300\"\n    prop=\"address.state\"\n    [frozenRight]=\"true\">\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-pinning/table-pinning.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-pinning/table-pinning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePinningComponent; });
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

var TablePinningComponent = (function () {
    function TablePinningComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TablePinningComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    return TablePinningComponent;
}());
TablePinningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-pinning',
        template: __webpack_require__("../../../../../src/app/tables/table-pinning/table-pinning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-pinning/table-pinning.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TablePinningComponent);

//# sourceMappingURL=table-pinning.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-selection/table-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material selection-cell\"\n  [rows]=\"rows\"\n  [columnMode]=\"'force'\"\n  [columns]=\"columns\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"50\"\n  [selected]=\"selected\"\n  [selectionType]=\"'cell'\"\n  (select)=\"onSelect($event)\"\n  (activate)=\"onActivate($event)\">\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-selection/table-selection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-selection/table-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSelectionComponent; });
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

var TableSelectionComponent = (function () {
    function TableSelectionComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSelectionComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableSelectionComponent.prototype.onSelect = function (event) {
        console.log('Event: select', event, this.selected);
    };
    TableSelectionComponent.prototype.onActivate = function (event) {
        console.log('Event: activate', event);
    };
    return TableSelectionComponent;
}());
TableSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-selection',
        template: __webpack_require__("../../../../../src/app/tables/table-selection/table-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-selection/table-selection.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableSelectionComponent);

//# sourceMappingURL=table-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/table-sorting/table-sorting.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [sortType]=\"'multi'\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"50\">\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/tables/table-sorting/table-sorting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/table-sorting/table-sorting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSortingComponent; });
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

var TableSortingComponent = (function () {
    function TableSortingComponent() {
        var _this = this;
        this.rows = [];
        this.columns = [
            { name: 'Company' },
            { name: 'Name' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSortingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    return TableSortingComponent;
}());
TableSortingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-sorting',
        template: __webpack_require__("../../../../../src/app/tables/table-sorting/table-sorting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables/table-sorting/table-sorting.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableSortingComponent);

//# sourceMappingURL=table-sorting.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_routing__ = __webpack_require__("../../../../../src/app/tables/tables.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_table_data_table_component__ = __webpack_require__("../../../../../src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_editing_table_editing_component__ = __webpack_require__("../../../../../src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_filter_table_filter_component__ = __webpack_require__("../../../../../src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table_paging_table_paging_component__ = __webpack_require__("../../../../../src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_pinning_table_pinning_component__ = __webpack_require__("../../../../../src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_selection_table_selection_component__ = __webpack_require__("../../../../../src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__table_sorting_table_sorting_component__ = __webpack_require__("../../../../../src/app/tables/table-sorting/table-sorting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tables_routing__["a" /* TablesRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__data_table_data_table_component__["a" /* DataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__table_editing_table_editing_component__["a" /* TableEditingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__table_filter_table_filter_component__["a" /* TableFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__table_paging_table_paging_component__["a" /* TablePagingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__table_pinning_table_pinning_component__["a" /* TablePinningComponent */],
            __WEBPACK_IMPORTED_MODULE_11__table_selection_table_selection_component__["a" /* TableSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__table_sorting_table_sorting_component__["a" /* TableSortingComponent */]
        ]
    })
], TablesModule);

//# sourceMappingURL=tables.module.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table_data_table_component__ = __webpack_require__("../../../../../src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_editing_table_editing_component__ = __webpack_require__("../../../../../src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_filter_table_filter_component__ = __webpack_require__("../../../../../src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_paging_table_paging_component__ = __webpack_require__("../../../../../src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_pinning_table_pinning_component__ = __webpack_require__("../../../../../src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_selection_table_selection_component__ = __webpack_require__("../../../../../src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_sorting_table_sorting_component__ = __webpack_require__("../../../../../src/app/tables/table-sorting/table-sorting.component.ts");







var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: __WEBPACK_IMPORTED_MODULE_0__data_table_data_table_component__["a" /* DataTableComponent */]
            }, {
                path: 'editing',
                component: __WEBPACK_IMPORTED_MODULE_1__table_editing_table_editing_component__["a" /* TableEditingComponent */]
            }, {
                path: 'filter',
                component: __WEBPACK_IMPORTED_MODULE_2__table_filter_table_filter_component__["a" /* TableFilterComponent */]
            }, {
                path: 'paging',
                component: __WEBPACK_IMPORTED_MODULE_3__table_paging_table_paging_component__["a" /* TablePagingComponent */]
            }, {
                path: 'pinning',
                component: __WEBPACK_IMPORTED_MODULE_4__table_pinning_table_pinning_component__["a" /* TablePinningComponent */]
            }, {
                path: 'selection',
                component: __WEBPACK_IMPORTED_MODULE_5__table_selection_table_selection_component__["a" /* TableSelectionComponent */]
            }, {
                path: 'sorting',
                component: __WEBPACK_IMPORTED_MODULE_6__table_sorting_table_sorting_component__["a" /* TableSortingComponent */]
            }]
    }
];
//# sourceMappingURL=tables.routing.js.map

/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map