webpackJsonp(["apps.module"],{

/***/ "../../../../../src/app/apps/apps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_signature_pad__ = __webpack_require__("../../../../angular2-signature-pad/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_ngx_resize_watcher_directive__ = __webpack_require__("../../../../../src/app/ngx-resize-watcher.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__apps_routing__ = __webpack_require__("../../../../../src/app/apps/apps.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transport_transport_component__ = __webpack_require__("../../../../../src/app/apps/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__links_links_component__ = __webpack_require__("../../../../../src/app/apps/links/links.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdListModule, MdGridListModule,
  MdMenuModule,
  MdSidenavModule,
  MdProgressBarModule,
  MdTabsModule,
  MdDialogModule } from '@angular/material';*/












var AppsModule = (function () {
    function AppsModule() {
    }
    return AppsModule;
}());
AppsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__apps_routing__["a" /* AppsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_signature_pad__["a" /* SignaturePadModule */],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__["DateTimePickerModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__transport_transport_component__["a" /* TransportComponent */],
            __WEBPACK_IMPORTED_MODULE_14__links_links_component__["a" /* JazzDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__links_links_component__["c" /* PopDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_12__transport_transport_component__["b" /* confirmDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__links_links_component__["d" /* PopSignatureDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__links_links_component__["b" /* LinksComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_ngx_resize_watcher_directive__["a" /* NgxResizeWatcherDirective */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__links_links_component__["a" /* JazzDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__links_links_component__["c" /* PopDialogComponent */], __WEBPACK_IMPORTED_MODULE_12__transport_transport_component__["b" /* confirmDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__links_links_component__["d" /* PopSignatureDialogComponent */]]
    })
], AppsModule);

//# sourceMappingURL=apps.module.js.map

/***/ }),

/***/ "../../../../../src/app/apps/apps.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport_transport_component__ = __webpack_require__("../../../../../src/app/apps/transport/transport.component.ts");

// import { LinksComponent } from "./links/links.component";
/*import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MediaComponent } from './media/media.component';
import { MailComponent } from './mail/mail.component';
import { SocialComponent } from './social/social.component';
import { ChatComponent } from './chat/chat.component';*/
var AppsRoutes = [{
        path: '',
        children: [{
                path: 'transport',
                component: __WEBPACK_IMPORTED_MODULE_0__transport_transport_component__["a" /* TransportComponent */]
            }]
    }];
//# sourceMappingURL=apps.routing.js.map

/***/ }),

/***/ "../../../../../src/app/apps/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!opentabs\" style=\"height: 40px; margin-top: 15px;margin-left:20px\">\n  <md-input-container class=\"ml-xs mr-xs list-search__wrapper\" style=\"width: 50%;\">\n    <input mdInput type=\"text\" [(ngModel)]=\"search\" style=\"padding:2px;width:30%;\" placeholder='Suche nach Primary Shipment-ID'\n    />\n  </md-input-container>\n  <button md-raised-button md-raised-button color=\"primary\" (click)=\"searchTransports()\">Suche</button>\n  <md-select  *ngIf=\"user.user.type ==2 || user.user.type ==1\" [(ngModel)]=\"filterTransport\" (change)=\"changefilterTransport()\" class=\"ml-xs mr-xs\" style=\"width: 20%;margin-left: 150px !important;\" placeholder=\"Filter\">\n    <md-option value=\"1\">Bereit</md-option>\n    <md-option value=\"2\">In Bearbeitung</md-option>\n    <md-option value=\"3\">Beendet</md-option>\n    <md-option value=\"all\">Alle</md-option>\n  </md-select>\n</div>\n<ngx-datatable style=\"margin-top: 3%\" ngx-resize-watcher class=\"material\" *ngIf=\"!opentabs\" [rows]=\"customData.rows\" [columnMode]=\"'force'\"\n  [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"customData.count\" [offset]=\"customData.offset\"\n  [limit]=\"customData.limit\" (page)='onPage($event)'>\n  <ngx-datatable-column name=\"Primary S-ID\" prop=\"Primary SID\">\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n      <div *ngIf=\"row.shipment && row.shipment[0]\">\n        {{row.shipment[0].shipment_id}}\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Fahrer\" prop=\"fahrer\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"ADR\" prop=\"adr\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Luftfracht\" prop=\"luftfracht\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Zuweisung Rampe\" prop=\"rampe\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Prozess\">\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n      <div *ngIf=\"!row['forklift'] || row['forklift'] == null\" [ngClass]=\"'red'\">\n        Bereit\n      </div>\n      <div *ngIf=\"row['forklift']\">\n        <div *ngIf=\"row['forklift']['prozess']\" [ngClass]=\"{'lime': row['forklift']['prozess'] == 4, 'yellow': row['forklift']['prozess'] == 3, 'blue': row['forklift']['prozess'] == 2, 'orange': row['forklift']['prozess'] == 1, 'red': row['forklift']['prozess'] == 0, 'green': row['forklift']['prozess'] == 5}\">\n          <div *ngIf=\"row['forklift']['prozess'] == 5\" class=\"indigo\">\n                Beendet\n          </div>\n          <div *ngIf=\"row['forklift']['prozess'] != 5\">\n            {{row['forklift']['prozess']+1}} von 5\n          </div>\n        </div>\n        <div *ngIf=\"row['forklift']['prozess'] == 0\" [ngClass]=\"'red'\">\n          Bereit\n        </div>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Prüfung\" *ngIf=\"user.user.type != 2 && user.user.type !=1\">\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n      <div *ngIf=\"row['forklift']\">\n        <div *ngIf=\"row['forklift']['prozess'] == 5\" [ngClass]=\"'green'\">\n          <button md-raised-button md-raised-button color=\"warning\">Beendet</button>\n        </div>\n        <div *ngIf=\"row['forklift']['prozess'] != 5\">\n          <button md-raised-button color=\"primary\" *ngIf=\"(row.forklift_id == 0 || row.forklift_id == user.user.id || row.forklift_id > 0) && user.user.type == 3\"\n            (click)=\"sendData(row)\" style=\"width: 116px;\">Bearbeiten</button>\n          <button md-raised-button color=\"primary\" *ngIf=\"row.forklift_id == 0 && user.user.id && user.user.type == 4\" (click)=\"openTabs(row.id,'start',row.forklift_id, row)\">Starten</button>\n          <button md-raised-button *ngIf=\"row.forklift_id == user.user.id && user.user.type == 4\" color=\"primary\" (click)=\"openTabs(row.id,'edit',row.forklift_id,row)\">Bearbeiten</button>\n        </div>\n      </div>\n      <div *ngIf=\"!row['forklift']\">\n        <button md-raised-button color=\"primary\" *ngIf=\"(row.forklift_id == 0 || row.forklift_id == user.user.id || row.forklift_id > 0) && user.user.type == 3\"\n          (click)=\"sendData(row)\" style=\"width: 116px;\">Bearbeiten</button>\n        <button md-raised-button color=\"primary\" *ngIf=\"row.forklift_id == 0 && user.user.id && user.user.type == 4\" (click)=\"openTabs(row.id,'start',row.forklift_id, row)\">Starten</button>\n        <button md-raised-button *ngIf=\"row.forklift_id == user.user.id && user.user.type == 4\" color=\"primary\" (click)=\"openTabs(row.id,'edit',row.forklift_id,row)\">Bearbeiten</button>\n        \n      </div>\n      <!-- Bericht senden  -->\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Prüfung\" *ngIf=\"user.user.type ==2 || user.user.type ==1\" style=\"width:17%\">\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <button disabled *ngIf=\"!row['forklift'] || row['forklift'] == null\" style=\"text-align:center;height: 31px\"><a><md-icon>file_download</md-icon></a></button>\n      <button *ngIf=\"row['forklift']\" style=\"text-align:center;height: 31px\"><a href=\"https://erbium.ch/backend/api/transports/pdf/report/{{row.id}}\" download=\"transport{{row.id}}.pdf\"><md-icon>file_download</md-icon></a></button>\n      <button style=\"text-align:center;height: 31px\" (click)=\"open(row)\"> <md-icon>email</md-icon></button>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n<div *ngIf=\"opentabs && currentTransport.shipment\" style=\"margin-top: 3% ;margin-left:7%\">\n  <div *ngIf=\"currentTransport.shipment\">\n    <div *ngIf=\"currentTransport.shipment.length >0\" class=\"capitalizeLetters\">\n      <b style=\"font-size: 15px\">\n        <span> PRÜFUNG </span> <span *ngFor=\"let sid of currentTransport.shipment; let i = index\"> <span *ngIf=\"sid.shipment_id\"> | {{sid.shipment_id}} </span></span></b>\n    </div>\n  </div>\n  <div>\n  </div>\n</div>\n<md-tab-group *ngIf=\"opentabs\" style=\"margin-top: 1%; height: 100% !important\" [selectedIndex]=\"selectedIndex\" id=\"tabsGroups\" (selectChange)=\"changeTabPositon($event)\">\n  <md-tab label=\"1. Dokumente\" [disabled]=\"tab1\" class=\"tableWrapper\">\n    <ngx-datatable style=\"font-weight:bold\" ngx-resize-watcher #firstTable class=\"material  margin2Top\" [rows]=\"documentsQuestions.rows\" [columnMode]=\"'force'\"\n      [headerHeight]=\"0\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"documentsQuestions.count\"\n      [offset]=\"documentsQuestions.offset\" [limit]=\"documentsQuestions.limit\" (page)='onPage($event)'>\n      <ngx-datatable-column maxWidth=\"60\" name=\"Nr.\" prop=\"sr\" class=\"serial-number\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Dokumentenkontrolle\" prop=\"question\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n          <div style=\"width:100%\">\n            <div style=\"width: 65%;display: inline-block;\"> {{row.question}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <md-select *ngIf=\"row.sr==1.1\" placeholder=\"Zuweisung\" class=\"ml-xs mr-xs\" style=\"width:30%;\" [(ngModel)]=\"updateRamp\" (change)=\"OnchangeRamp()\">\n                <md-option *ngFor=\"let i of list\" [value]=\"i.id\">{{i.name}}</md-option>\n              </md-select>\n              <md-radio-group *ngIf=\"row.sr==1.2 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"fahrzeugausweis_21\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==1.2 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;\" [(ngModel)]=\"fahrzeugausweis_21\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <!-- <md-select *ngIf=\"row.sr==1.3 && adr\" [(ngModel)]=\"adr_schulungsbescheinigung_22\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.3 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"adr_schulungsbescheinigung_22\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n\n              <!-- <md-select *ngIf=\"row.sr==1.4  && adr\" [(ngModel)]=\"lichtbildausweis_23\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.4 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"lichtbildausweis_23\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==1.5\" [(ngModel)]=\"arbeitsbescheinigung_fahrer_24\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.5 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"arbeitsbescheinigung_fahrer_24\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==1.6 && adr\" [(ngModel)]=\"vertrauensabfertigung_25\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.6 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"vertrauensabfertigung_25\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==1.7 && adr\" [(ngModel)]=\"orangefarbene_warntafeln_26\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.7 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"orangefarbene_warntafeln_26\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr== 1.8 && adr\" [(ngModel)]=\"schriftliche_weisungen_27\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==1.8 && adr\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" [(ngModel)]=\"schriftliche_weisungen_27\">\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div *ngIf=\"row.question2 && adr\" style=\"display:inline-block\">\n            <md-input-container class=\"ml-xs mr-xs placeHolderBold\" style=\"width: 100%;\">\n              <input mdInput placeholder=\"Ausweis Nr.:\" type=\"text\" [(ngModel)]=\"adr_schulungsbescheinigung_22_answeis_nr\">\n            </md-input-container>\n          </div>\n          <div *ngIf=\"row.question3 && adr\" style=\"display:inline-block\">\n            <md-input-container class=\"ml-xs mr-xs placeHolderBold\" style=\"width: 100%;\">\n              <input mdInput placeholder=\"Gültig bis:\" type=\"text\" [(ngModel)]=\"adr_schulungsbescheinigung_22_gultig_bis\">\n            </md-input-container>\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <div class=\"row height50\">\n      <button md-raised-button md-raised-button color=\"warning\" (click)=\"closeTabs()\" style=\"margin-right: 10px\">Zurück</button>\n      <button md-raised-button md-raised-button color=\"primary\" (click)=\"updateForkliftTransport(1)\">Weiter</button>\n    </div>\n    <div style=\"height: 57px;margin-top: 8px !important;margin-left: 4px !important\">\n        <button md-raised-button md-raised-button color=\"accent\" (click)=\"resetTransport()\" >Diese Prüfung abbrechen</button>\n    </div>\n  </md-tab>\n\n  <md-tab label=\"2. Zustand\" [disabled]=\"tab2\" *ngIf=\"adr\">\n    <ngx-datatable style=\"font-weight:bold\" ngx-resize-watcher #secondTable class=\"material margin2Top\" [rows]=\"stateControl.rows\" [columnMode]=\"'force'\"\n      [headerHeight]=\"0\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"stateControl.count\" [offset]=\"stateControl.offset\"\n      [limit]=\"stateControl.limit\" (page)='onPage($event)'>\n      <ngx-datatable-column maxWidth=\"60\" name=\"Nr.\" prop=\"sr\" class=\"serial-number\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Conditions\" prop=\"question\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n          <div style=\"width:100%\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select *ngIf=\"row.sr==2.1\" [(ngModel)]=\"bewegungssicherung_31\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n\n              <md-radio-group *ngIf=\"row.sr==2.1 && adr\" [(ngModel)]=\"bewegungssicherung_31\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n\n              <!-- <md-select *ngIf=\"row.sr==2.2\" [(ngModel)]=\"visuelle_ueberpruefung_32\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n\n              <md-radio-group *ngIf=\"row.sr==2.2 && adr\" [(ngModel)]=\"visuelle_ueberpruefung_32\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==2.3\" [(ngModel)]=\"ladungsbruecke_besenrein_33\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==2.3\" [(ngModel)]=\"ladungsbruecke_besenrein_33\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n              <!-- <md-select *ngIf=\"row.sr==2.4\" [(ngModel)]=\"ladungssicherungsmittel_34\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group *ngIf=\"row.sr==2.4\" [(ngModel)]=\"ladungssicherungsmittel_34\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div *ngIf=\"row.question2\">\n            <div style=\"width:100%;margin-top:1%\">\n              <div style=\"width: 65%;display: inline-block;\">{{row.question2}}</div>\n              <div style=\"width: 34%;display: inline-block;text-align: right;\">\n                <!-- <md-select [(ngModel)]=\"ladungssicherungsmittel_34_gurte\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                  <md-option value=\"1\">Ja</md-option>\n                  <md-option value=\"2\">Nein</md-option>\n                  <md-option value=\"3\">N.A</md-option>\n                </md-select> -->\n                <md-radio-group  [(ngModel)]=\"ladungssicherungsmittel_34_gurte\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                  <md-radio-button value=\"1\">Ja</md-radio-button>\n                  <md-radio-button value=\"2\">Nein</md-radio-button>\n                </md-radio-group>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"row.question3\">\n            <div style=\"width:100%;margin-top:1%\">\n              <div style=\"width: 65%;display: inline-block;\">{{row.question3}}</div>\n              <div style=\"width: 34%;display: inline-block;text-align: right;\">\n\n                <!-- <md-select [(ngModel)]=\"ladungssicherungsmittel_34_spannstangen\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                  <md-option value=\"1\">Ja</md-option>\n                  <md-option value=\"2\">Nein</md-option>\n                  <md-option value=\"3\">N.A</md-option>\n                </md-select> -->\n\n                <md-radio-group  [(ngModel)]=\"ladungssicherungsmittel_34_spannstangen\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                  <md-radio-button value=\"1\">Ja</md-radio-button>\n                  <md-radio-button value=\"2\">Nein</md-radio-button>\n                </md-radio-group>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"row.question4\">\n            <div style=\"width:100%;margin-top:1%\">\n              <div style=\"width: 65%;display: inline-block;\">{{row.question4}}</div>\n              <div style=\"width: 34%;display: inline-block;text-align: right;\">\n\n                <!-- <md-select [(ngModel)]=\"ladungssicherungsmittel_34_antirutschmatten\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                  <md-option value=\"1\">Ja</md-option>\n                  <md-option value=\"2\">Nein</md-option>\n                  <md-option value=\"3\">N.A</md-option>\n                </md-select> -->\n\n                <md-radio-group  [(ngModel)]=\"ladungssicherungsmittel_34_antirutschmatten\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                  <md-radio-button value=\"1\">Ja</md-radio-button>\n                  <md-radio-button value=\"2\">Nein</md-radio-button>\n                </md-radio-group>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"row.question5\" style=\"width:100%;margin-top:1%\">\n            <div style=\"width:100%\">\n              <div style=\"width: 65%;display: inline-block;\">{{row.question5}}</div>\n              <div style=\"width: 34%;display: inline-block;text-align: right;\">\n                <!-- <md-select [(ngModel)]=\"ladungssicherungsmittel_34_leerpaletten\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                  <md-option value=\"1\">Ja</md-option>\n                  <md-option value=\"2\">Nein</md-option>\n                  <md-option value=\"3\">N.A</md-option>\n                </md-select> -->\n                <md-radio-group  [(ngModel)]=\"ladungssicherungsmittel_34_leerpaletten\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                  <md-radio-button value=\"1\">Ja</md-radio-button>\n                  <md-radio-button value=\"2\">Nein</md-radio-button>\n                </md-radio-group>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <div class=\"row height50 \">\n      <button md-raised-button md-raised-button color=\"warning\" (click)=\"changeTab('back')\" style=\"margin-right: 10px\">Zurück</button>\n      <button md-raised-button md-raised-button color=\"primary\" (click)=\"updateForkliftTransport(2)\">Weiter</button>\n    </div>\n  </md-tab>\n  <md-tab label=\"3. ADR\" [disabled]=\"tab3\">\n    <ngx-datatable class=\"material  margin2Top\" style=\"font-weight:bold\" ngx-resize-watcher [rows]=\"controlOfTransportUnit.rows\" [columnMode]=\"'force'\"\n      [headerHeight]=\"0\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"controlOfTransportUnit.count\"\n      [offset]=\"controlOfTransportUnit.offset\" [limit]=\"controlOfTransportUnit.limit\" (page)='onPage($event)'>\n      <ngx-datatable-column maxWidth=\"60\" name=\"Nr.\" prop=\"sr\" class=\"serial-number\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"ADR\" prop=\"question\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n          <div style=\"width:100%\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select *ngIf=\"row.sr == 3.1\" [(ngModel)]=\"werbefrei_fuer_tierfutter_41\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  *ngIf=\"row.sr == 3.1\" [(ngModel)]=\"werbefrei_fuer_tierfutter_41\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n\n              <!-- <md-select *ngIf=\"row.sr == 3.2\" [(ngModel)]=\"lebensmittel_futtermittel_42\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  *ngIf=\"row.sr == 3.2\" [(ngModel)]=\"lebensmittel_futtermittel_42\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div *ngIf=\"row.question2\">\n            {{row.question2}}\n            <md-input-container class=\"ml-xs mr-xs placeHolderBold\" style=\"width:300px;\">\n              <input mdInput placeholder=\"Plombennummer:\"  type=\"text\" [(ngModel)]=\"persoenliche_schutzausruestung_43_plomben_nr\">\n            </md-input-container>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question3  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question3}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43\" *ngIf=\"adr\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question4  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question4}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43_schutzbrille\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43_schutzbrille\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question5  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question5}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43_chem_handschuhe\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43_chem_handschuhe\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question6  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question6}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43_warnweste\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43_warnweste\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question7  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question7}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43_vollschutzmaske\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43_vollschutzmaske\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question8  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question8}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"persoenliche_schutzausruestung_43_augenspuelflasche\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\"\n                placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"persoenliche_schutzausruestung_43_augenspuelflasche\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question9  && adr\">\n            <div style=\"width: 65%;display: inline-block;font-weight:bold\">{{row.question9}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question10  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question10}}\n              <md-input-container class=\"ml-xs mr-xs placeHolderBold\" style=\"width:300px;\">\n                <input mdInput placeholder=\"Ausweis Nr.:\"  type=\"text\" [(ngModel)]=\"pulverloescher_plombiert_441\">\n              </md-input-container>\n            </div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"pulverloescher_plombiert_441_pruefung\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"pulverloescher_plombiert_441_pruefung\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question11  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question11}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question12  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question12}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"unterkeil_schaufel_442\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"unterkeil_schaufel_442\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question13  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question13}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"warnzeichen_warndreiecke_443\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"warnzeichen_warndreiecke_443\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question14  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question14}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"auffangbehaelter_444\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"auffangbehaelter_444\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question15  && adr\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question15}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"kanalisationsabdeckung_445\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"kanalisationsabdeckung_445\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <div class=\"row height50\">\n      <button md-raised-button md-raised-button color=\"warning\" (click)=\"changeTab('back')\" style=\"margin-right: 10px\">Zurück</button>\n      <button md-raised-button md-raised-button color=\"primary\" (click)=\"updateForkliftTransport(3)\">Weiter</button>\n    </div>\n  </md-tab>\n  <md-tab label=\"4. Verpackung\" [disabled]=\"tab4\" *ngIf=\"adr\">\n    <ngx-datatable class=\"material margin2Top\" style=\"font-weight:bold\" ngx-resize-watcher [rows]=\"protectionOfPublic.rows\" [columnMode]=\"'force'\" [headerHeight]=\"0\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"protectionOfPublic.count\" [offset]=\"protectionOfPublic.offset\"\n      [limit]=\"protectionOfPublic.limit\" (page)='onPage($event)'>\n      <ngx-datatable-column maxWidth=\"60\" name=\"Nr.\" prop=\"sr\" class=\"serial-number\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Packaging\" prop=\"question\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template style=\"text-align: right\">\n          <div style=\"width:100%\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question}}\n              <md-input-container class=\"ml-xs mr-xs placeHolderBold\" style=\"width: 50%;display:inline-block\">\n                <input mdInput placeholder=\"Datum\"  type=\"text\" [(ngModel)]=\"ibc_prueffrist_51_date\">\n              </md-input-container>\n            </div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"ibc_prueffrist_51\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"ibc_prueffrist_51\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div *ngIf=\"row.question2\" style=\"width:100%\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question2}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select [(ngModel)]=\"unbeschaedigte_verandstuecke_un_cod_52\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"unbeschaedigte_verandstuecke_un_cod_52\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question3\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question3}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n\n              <!-- <md-select [(ngModel)]=\"wirksame_ladungssicherung_53\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"wirksame_ladungssicherung_53\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n\n            </div>\n          </div>\n          <div style=\"width:100%;margin-top:1%\" *ngIf=\"row.question4\">\n            <div style=\"width: 65%;display: inline-block;\">{{row.question4}}</div>\n            <div style=\"width: 34%;display: inline-block;text-align: right;\">\n              <ng-template let-column=\"column\" ngx-datatable-header-template style=\"text-align: right\">\n                Prüfen\n              </ng-template>\n              <!-- <md-select [(ngModel)]=\"ladungssicherung_foto_54\" prop=\"ngModel\" class=\"ml-xs mr-xs\" style=\"width:30%;\" placeholder=\"Prüfen\">\n                <md-option value=\"1\">Ja</md-option>\n                <md-option value=\"2\">Nein</md-option>\n                <md-option value=\"3\">N.A</md-option>\n              </md-select> -->\n              <md-radio-group  [(ngModel)]=\"ladungssicherung_foto_54\" placeholder=\"Prüfen\" class=\"ml-xs mr-xs\" style=\"width:30%;color:#3f51b5\" >\n                <md-radio-button value=\"1\">Ja</md-radio-button>\n                <md-radio-button value=\"2\">Nein</md-radio-button>\n              </md-radio-group>\n            </div>\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <md-card>\n      <md-card-title>\n        <b>Bilder hinzufügen</b>\n      </md-card-title>\n      <md-card-content style=\"min-height:250px\">\n        <div class=\"row\" style=\"margin-bottom: 5%;\">\n          <div class=\"fileUpload\" style=\"text-align: center\">\n            <span>Bild hinzufügen</span>\n            <input type=\"file\" multiple class=\"upload\" (change)=\"changeListener($event)\" />\n          </div>\n        </div>\n        <div layout=\"row\" layout-margin>\n          <div *ngFor=\"let image of images; let i = index\" [attr.data-index]=\"i\" style=\"display:inline-block;padding-left:10%\">\n            <img src=\"https://erbium.ch/backend/{{image.image}}\" style=\"border-radius:5px;max-width:200px;max-height:200px;min-width:200px;min-height:200px;\"\n              alt=\"image caption\" />\n              <br/>\n            <button md-raised-button class=\"deleteButton\" (click)=\"deleteImage(image ,i)\">Lösche Bild</button>\n          </div>\n        </div>\n\n      </md-card-content>\n    </md-card>\n    <div class=\"row height50\">\n      <button md-raised-button md-raised-button color=\"warning\" (click)=\"changeTab('back')\" style=\"margin-right: 10px\">Zurück</button>\n      <button md-raised-button md-raised-button color=\"primary\" (click)=\"updateForkliftTransport(4)\">Weiter</button>\n    </div>\n  </md-tab>\n  <md-tab label=\"5. Bestätigung\" [disabled]=\"tab5\">\n    <md-card style=\"height:100%;\">\n      <md-card-title>\n        <b>Bestätigung</b>\n      </md-card-title>\n      <md-card-content style=\"height:100%;\">\n        <table>\n          <tr>\n            <td></td>\n            <td class=\"tdStyle\">\n              <p>\n                Der Fahrer bestätigt mit seiner Unterschrift, dass er in Besitz der vollständigen ADR Ausrüstung und des Beförderungsdokumentes\n                war, als er den Ladungsstandort verlassen hat. Er hat auch Kenntnis davon genommen, dass es sich um einen\n                Transport gefährlicher Güter gemäss den Vorschriften des ADR handelt.\n              </p>\n            </td>\n            <td></td>\n            <td></td>\n            <td class=\"tdStyle\">\n              <p>\n                The driver certifies by his signature that he was in possession of all ADR required equipment and transport document when\n                he left the site/warehouse. The driver confirms with his signature to take notice that the transport in question\n                is subject to ADR regulations and that the loading contains dangerous goods.\n              </p>\n            </td>\n          </tr>\n        </table>\n        <div style=\"margin-top: 5%;margin-bottom: 10px;text-align: center;\">\n          <button md-raised-button color=\"primary\" style=\"margin-top: 30px;\" (click)=\"openViewSig()\"> Signatur hnizufügen </button>\n        </div>\n      </md-card-content>\n    </md-card>\n    <div class=\"row height50\">\n      <button md-raised-button md-raised-button color=\"warning\" (click)=\"changeTab('back')\" style=\"margin-right: 10px\">Zurück</button>\n    </div>\n  </md-tab>\n\n</md-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/apps/links/links.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-group {\n  margin: 60px; }\n\n.md-tab-group .mat-tab-body[_ngcontent-c6] {\n  overflow: hidden !important; }\n\n.mat-radio-button {\n  padding: 4px 8px 2px 8px;\n  border-radius: 5px;\n  border-radius: 40px;\n  margin: 0px 3px;\n  background: none;\n  font-size: 15px; }\n  .mat-radio-button /deep/.mat-radio-label {\n    -webkit-box-align: normal;\n        -ms-flex-align: normal;\n            align-items: normal; }\n\n.green {\n  border: 2px solid green; }\n  .green /deep/.mat-radio-outer-circle {\n    border-color: green; }\n  .green /deep/.mat-radio-inner-circle {\n    background-color: darkgreen; }\n\n.red {\n  border: 2px solid #e74c3c; }\n  .red /deep/.mat-radio-outer-circle {\n    border-color: darkred; }\n  .red /deep/.mat-radio-inner-circle {\n    background-color: maroon; }\n\n.grey {\n  border: 2px solid grey; }\n  .grey /deep/.mat-radio-outer-circle {\n    border-color: darkgrey; }\n  .grey /deep/.mat-radio-inner-circle {\n    background-color: darkslategray; }\n\n.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: center; }\n\n.button-row {\n  margin-top: 40px;\n  text-align: center;\n  padding: 10px; }\n\n.button-row button {\n  width: 180px;\n  height: 40px;\n  font-size: 22px;\n  border: 1px solid black;\n  margin-left: 20px; }\n\n.fileUpload {\n  display: inline-block;\n  position: relative;\n  width: 137px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 7px;\n  font-size: 1.0em;\n  background-color: #3C9;\n  color: #FFF;\n  cursor: pointer; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.zuruck {\n  background: #ecf0f1; }\n\n.weiter {\n  background: #3498db; }\n\n.row {\n  margin-top: 20px;\n  text-align: center; }\n\nmd-card {\n  margin-top: 2% !important; }\n\n.margin2Top {\n  margin-top: 2% !important; }\n\n.margin2Bottem {\n  margin-bottom: 2% !important; }\n\n.mat-tab-body[_ngcontent-c6] {\n  overflow: hidden !important; }\n\n#md-tab-content-1-0 {\n  overflow: hidden !important; }\n\nmd-tab-group /deep/ .mat-tab-body {\n  height: 100%;\n  overflow: hidden !important; }\n\n.ngx-datatable.material .datatable-header .datatable-header-cell /deep/ .datatable-header-cell-label {\n  font-weight: bold !important; }\n\n.mat-tab-label.mat-tab-label-active {\n  background-color: #3f51b5;\n  font-weight: bold; }\n\n.datatable-header-cell-wrapper span.datatable-header-cell-label.draggable {\n  font-weight: bold !important; }\n\n.datatable-header-cell-label {\n  font-weight: bold !important; }\n\n.btn-previous {\n  background-color: #bdc3c7;\n  color: #fff;\n  margin-left: 6px;\n  height: 30px; }\n\n.btn-next {\n  background-color: #3498db;\n  color: #fff; }\n\n.textSpacing {\n  padding: 10px;\n  border: 1px solid;\n  word-spacing: 3px; }\n\n.tdStyle {\n  padding: 10px;\n  word-spacing: 3px;\n  margin-left: 37px !important; }\n\n#tabsGroups /deep/\n.ngx-datatable.material .datatable-footer {\n  display: none !important; }\n\n/deep/ .next-btn-last {\n  margin-left: 43% !important;\n  margin-right: 10px !important; }\n\n.height50 {\n  height: 50px !important;\n  margin-top: 35px !important; }\n\n.capitalizeLetters {\n  text-transform: uppercase; }\n\n.deleteButton {\n  width: 200px;\n  color: white;\n  display: inline-block;\n  background-color: red;\n  border-radius: 5px; }\n\n.serialNumber {\n  width: 80px;\n  text-align: center;\n  font-weight: bold; }\n\n.questions {\n  font-weight: bold;\n  padding-left: 2%; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/deep/ .m-signature-pad {\n  width: 100% !important; }\n  /deep/ .m-signature-pad .m-signature-pad--body {\n    width: calc(100% - 39px); }\n\n.list-search__wrapper /deep/.mat-input-wrapper .mat-input-underline {\n  margin-top: 9px !important; }\n\n.inputPlaceHolder::-webkit-input-placeholder {\n  font-weight: bold; }\n\n.inputPlaceHolder::-moz-placeholder {\n  font-weight: bold; }\n\n.inputPlaceHolder:-ms-input-placeholder {\n  font-weight: bold; }\n\n.inputPlaceHolder:-o-input-placeholder {\n  font-weight: bold; }\n\n.placeHolderBold {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apps/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JazzDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PopDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PopSignatureDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__management_management_service__ = __webpack_require__("../../../../../src/app/management/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apps_service__ = __webpack_require__("../../../../../src/app/apps/apps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service__ = __webpack_require__("../../../../../src/app/apps/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LinksComponent = (function () {
    function LinksComponent(sanitizer, socket, _router, _logger, _managementService, appServie, _localstorage, _sharedService, dialog) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.socket = socket;
        this._router = _router;
        this._logger = _logger;
        this._managementService = _managementService;
        this.appServie = appServie;
        this._localstorage = _localstorage;
        this._sharedService = _sharedService;
        this.dialog = dialog;
        this.rows = [];
        this.temp = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 20;
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
        this.list = [];
        this.currentTransport = {
            shipmint: [
                {
                    shipmint_id: 1
                }
            ],
            fahrers: '',
            fahrzeughalter: '',
            destination: ''
        };
        this.width = 600;
        this.height = 300;
        this.selectedIndex = 0;
        this.noFooter = false;
        this.label = 'Unterschrift Fahrer';
        this.opentabs = false;
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5 = true;
        this.newforklift = 0;
        this.images = [];
        this.selectedObject = {};
        this.outgoingData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user_id = 1;
        this.transport_id = 1;
        this.fahrzeugausweis_21 = null;
        this.adr_schulungsbescheinigung_22 = null;
        this.adr_schulungsbescheinigung_22_answeis_nr = "";
        this.adr_schulungsbescheinigung_22_gultig_bis = "";
        this.lichtbildausweis_23 = 1;
        this.arbeitsbescheinigung_fahrer_24 = null;
        this.vertrauensabfertigung_25 = null;
        this.orangefarbene_warntafeln_26 = null;
        this.schriftliche_weisungen_27 = null;
        this.bewegungssicherung_31 = null;
        this.visuelle_ueberpruefung_32 = null;
        this.ladungsbruecke_besenrein_33 = null;
        this.ladungssicherungsmittel_34 = null;
        this.ladungssicherungsmittel_34_gurte = null;
        this.ladungssicherungsmittel_34_spannstangen = null;
        this.ladungssicherungsmittel_34_antirutschmatten = null;
        this.ladungssicherungsmittel_34_leerpaletten = null;
        this.werbefrei_fuer_tierfutter_41 = null;
        this.lebensmittel_futtermittel_42 = null;
        this.persoenliche_schutzausruestung_43 = null;
        this.persoenliche_schutzausruestung_43_plomben_nr = null;
        this.persoenliche_schutzausruestung_43_schutzbrille = null;
        this.persoenliche_schutzausruestung_43_chem_handschuhe = null;
        this.persoenliche_schutzausruestung_43_warnweste = null;
        this.persoenliche_schutzausruestung_43_vollschutzmaske = null;
        this.persoenliche_schutzausruestung_43_augenspuelflasche = null;
        this.persoenliche_schutzausruestung_43_handlampe = null;
        this.pulverloescher_plombiert_441 = '';
        this.pulverloescher_plombiert_441_pruefung = null;
        this.unterkeil_schaufel_442 = null;
        this.warnzeichen_warndreiecke_443 = null;
        this.auffangbehaelter_444 = null;
        this.kanalisationsabdeckung_445 = null;
        this.ibc_prueffrist_51 = null;
        this.ibc_prueffrist_51_date = null;
        this.unbeschaedigte_verandstuecke_un_cod_52 = null;
        this.wirksame_ladungssicherung_53 = null;
        this.ladungssicherung_foto_54 = null;
        this.signature = false;
        this.adr = true;
        this.prozess = 2;
        this.filterTransport = "all";
        this.customData = {
            rows: [
                {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }
            ],
            count: 7,
            offset: 0,
            limit: 10
        };
        this.customDatas = {
            rows: [
                {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }, {
                    name: "Eintrag in Farhanzagfer 'Grafkdbsey Guter' fur in der Schwiz immaasadsadsdse Bef" +
                        "oradwfdiunxjadj"
                }
            ],
            count: 7,
            offset: 0,
            limit: 10
        };
        this.documentsQuestions = {
            rows: [
                {
                    sr: '1.1',
                    question: "An welcher Rampe wird die Prüfung vorgenommen?"
                }, {
                    sr: '1.2',
                    question: "Eintrag in Fahrzeugausweis “Gefährliche Güter” für in der Schweiz immatrikuliert" +
                        "en Beförderungseinheiten",
                    ngModel: 'fahrzeugausweis_21'
                }, {
                    sr: '1.3',
                    question: "ADR-Schulungsbescheinigung für die Beförderung gefährlicher Güter ungeachtet der" +
                        " höchstzulässigen Gesamtmenge sowie Beförderungseinheiten oder MEGS über 3m3 Fas" +
                        "sungsraum und Batterie-Fahrzeuge mit einem Fassungsraum über 1 m3?",
                    question2: 'Ausweis Nr.:',
                    question3: 'Gültig bis.:',
                    ngModel: 'adr_schulungsbescheinigung_22'
                }, {
                    sr: '1.4',
                    question: "Lichtbildausweis (Identitätskarte, Führerschein) von jedem Besatzungsmitglied vo" +
                        "rhanden und kontrolliert?",
                    ngModel: 'lichtbildausweis_23'
                }, {
                    sr: '1.5',
                    question: "Arbeitsbescheinigung des Fahrers: Personalausweis der Firma mit Foto und Firmenn" +
                        "amen",
                    ngModel: 'arbeitsbescheinigung_fahrer_24'
                }, {
                    sr: '1.6',
                    question: "Hat die Beförderungseinheit eine Vertrauensabfertigung? Die Vertrauensabfertigun" +
                        "g ist für 1 Jahr ab Erstcheck gültig.",
                    ngModel: 'vertrauensabfertigung_25'
                }, {
                    sr: '1.7',
                    question: "Orangefarbene Warntafeln an der Beförderungseinheit vorne und Hinten angebracht " +
                        "und sichtbar?",
                    ngModel: 'orangefarbene_warntafeln_26'
                }, {
                    sr: '1.8',
                    question: "Sind schriftliche Weisungen für die Fahrzeugbesatzung vorhanden? Die schriftlich" +
                        "en Weisungen müssen vom Transporteur zur Verfügung gestellt werden.",
                    ngModel: 'schriftliche_weisungen_27'
                }
            ],
            count: 8,
            offset: 0,
            limit: 10
        };
        this.documentsQuestions2 = {
            rows: [
                {
                    sr: '1.1',
                    question: "An welcher Rampe wird die Prüfung vorgenommen?"
                }, {
                    sr: '1.5',
                    question: "Arbeitsbescheinigung des Fahrers: Personalausweis der Firma mit Foto und Firmenn" +
                        "amen.?"
                }
            ],
            count: 2,
            offset: 0,
            limit: 10
        };
        this.stateControl = {
            rows: [
                {
                    sr: '2.1',
                    question: "Ist das Fahrzeug gegen Bewegung gesichert, mit Unterlegkeilen?"
                }, {
                    sr: '2.2',
                    question: "Ergibt die visuelle Überprüfung der Beförderungseinheit offensichtlich sichtbare" +
                        " Mängel? Insbesondere hinsichtlich Pneus, Chassis Seitenladen, Blache (Nieten, S" +
                        "chrauben, Risse). Sollten Mängel vorhanden sein mit Ja beantwortet = Rückweisung" +
                        " des Beförderungsmittels."
                }, {
                    sr: '2.3',
                    question: "Ladungsbrücke besenrein? (Keine Nägel, Löcher etc.)"
                }, {
                    sr: '2.4',
                    question: "Sind Ladungssicherungsmittel ausreichend vorhanden? ",
                    question2: " - Gurte 1 Stk. pro Lademeter",
                    question3: " - Spannstangen",
                    question4: " - Antirutschmatten",
                    question5: " - Leerpaletten"
                }
            ],
            count: 4,
            offset: 0,
            limit: 10
        };
        this.controlOfTransportUnit = {
            rows: [
                {
                    sr: '3.1',
                    question: "Ist die Beförderungseinheit frei von Werbeaufschriften für Lebensmittel/Tierfutt" +
                        "er? Gefahrgut darf nicht transportiert werden, wenn mit NEIN beantwortet wird!"
                }, {
                    sr: '3.2',
                    question: "Sind Lebensmittel geladen?  Es dürfen keine Lebensmittel oder Futtermittel zusam" +
                        "men mit Chemikalien transportiert werden.               Wenn mit Ja beantwortet," +
                        "  Zurückweisung des Transportmittels !! Ausnahme: die Lebensmittel werden auf se" +
                        "parate Transporteinheit verladen"
                }, {
                    sr: '3.3',
                    question: "Persönliche Schutzausrüstung pro Besatzungsmitglied. Entweder: Typengeprüftes, p" +
                        "lombiertes Notbesteck mit Inhaltsverzeichnis",
                    question2: "gleicher Inhalt wie unten",
                    question3: "1x geschlossene Schutzbrille",
                    question4: "1x Paar lange chemikalienbeständige Handschuhe EN374/EN388",
                    question5: "1x Warnweste (EN 471) ",
                    question6: "1x Vollschutzmaske (resp. Halbmaske) mit Mehrbereichsfilter wie ABEK (EN 141)",
                    question7: "1x Augenspülflasche mit reinem Wasser",
                    question8: "1x Handlampe Ex. sicher",
                    question9: "Pulverlöscher plombiert",
                    question10: 'Fälligkeit der nächsten Prüfung:',
                    question11: "'1x 2kg + 10kg (min. davon 1x 6kg) f\u00FCr alle Bef\u00F6rderungseinheiten  > 7.5 to\n                     1x 2kg + 1x 6kg f\u00FCr alle Bef\u00F6rderungseinheiten > 3.5 to bis  7.5 to\n                     2x 2kg f\u00FCr alle Bef\u00F6rderungseinheiten bis 3.5 to'",
                    question12: "1x Unterkeil pro Fahrzeug\n                    1x Schaufel",
                    question13: '2x selbststehende Warnzeichen (z.B. reflektierende Kegel oder Warndreiecke oder ' +
                        '2 orangefarbene Warnblinkleuchten, die von der elektrischen Ausrüstung des Fahrz' +
                        'euges unabhängig sind)',
                    question14: '1x Auffangbehälter',
                    question15: '1x Kanalisationsabdeckung'
                }
            ],
            count: 4,
            offset: 0,
            limit: 10
        };
        this.controlOfTransportUnit2 = {
            rows: [
                {
                    sr: '3.1',
                    question: "Ist die Beförderungseinheit frei von Werbeaufschriften für Lebensmittel/Tierfutt" +
                        "er? Gefahrgut darf nicht transportiert werden, wenn mit NEIN beantwortet wird!"
                }, {
                    sr: '3.2',
                    question: "Sind Lebensmittel geladen?  Es dürfen keine Lebensmittel oder Futtermittel zusam" +
                        "men mit Chemikalien transportiert werden.               Wenn mit Ja beantwortet," +
                        "  Zurückweisung des Transportmittels !! Ausnahme: die Lebensmittel werden auf se" +
                        "parate Transporteinheit verladen"
                }
            ],
            count: 2,
            offset: 0,
            limit: 10
        };
        this.protectionOfPublic = {
            rows: [
                {
                    sr: '4',
                    question: "Intermediate Bulk Container (IBC); Datum der letzten Pr\u00FCfung: (ADR 6.5.1)    Ist die Pr\u00FCffrist von  2.5 Jahren seit letzter Pr\u00FCfung eingehalten?  Wenn Nein, d\u00FCrfen die IBCs nicht verladen werden.",
                    question2: "\n        Wurden nur unbesch\u00E4digte einwandfreie Versandst\u00FCcke mit UN Codierung \u00FCbergeben? \n        ",
                    question3: "Wurde eine wirksame Ladungssicherung angebracht?  \n        (Antirutschmatten, keine Leerr\u00E4ume, Formschluss der Ladung, Verteilung des Gewichts auf die Achsen, Ware festgemacht und verzurrt)\n        ",
                    question4: "Wurde die Ladungssicherung mit Foto dokumentiert\n        ",
                    question5: "1 Auffangbehälter",
                    question6: "1 Kanalisationsabdeckung"
                }
            ],
            count: 10,
            offset: 0,
            limit: 10
        };
        this.packingAndClosingControl = {
            rows: [
                {
                    sr: '4.1',
                    question: "Intermediate Bulk Container (IBC); Datum der letzten Prüfung(ADR 6.4.1): Ist die" +
                        " Prüffrist von  2.5 Jahren seit letzter Prüfung eingehalten?  Wenn Nein, dürfen " +
                        "die IBCs nicht verladen werden."
                }, {
                    sr: '4.2',
                    question: "Wurden nur unbeschädigte einwandfreie Versandstücke mit UN Codierung übergeben? "
                }, {
                    sr: '4.3',
                    question: "Wurde eine wirksame Ladungssicherung angeracht? Antirutschmatten, keine Leerräum" +
                        "e, Formschluss der Ladung, Verteilung des Gewichts auf die Achsen, Ware festgema" +
                        "cht und verzurrt."
                }, {
                    sr: '4.4',
                    question: "Wurde die Ladungssicherung mit Foto dokumentiert?"
                }
            ],
            count: 4,
            offset: 0,
            limit: 10
        };
        this.transportDocuments = {
            rows: [
                {
                    sr: '5.1',
                    question: "Sind die eförderungspapiere mit den Ladedokumenten identisch? (Lieferschein, Bef" +
                        "örderungsinstruktionen, besondere Hinweise / Dokumente, usw.)"
                }
            ],
            count: 4,
            offset: 0,
            limit: 10
        };
        this.currentDate = this.getDate();
        this._sharedService.caseNumber$
            .subscribe(function (data) {
            if (data && data['from'] == 'links') {
                console.log("Same Componenets");
            }
            else if (data && data['from'] == 'edit') {
                _this.ngOnInit();
            }
            else if (data && data['from'] == 'popup') {
                _this.closeWizards();
            }
            else {
                _this.ngOnInit();
            }
        });
        var self = this;
        this.socket.on('new-record', function (data) {
            if (data.from == 'add') {
                self.fun(data);
            }
            else {
                console.log("Its from list");
            }
        });
        this.socket.on('prozess', function (data) {
            self.fun(data);
        });
        this.socket.on('forklift-started', function (data) {
            self.fun(data);
        });
        this.socket.on('transport-updated', function (data) {
            for (var i = 0; i < self.customData['rows'].length; i++) {
                if (data['data']['id'] == self.customData['rows'][i]['id']) {
                    self.customData['rows'][i] = data['data'];
                }
            }
            self.customData['rows'] = self.customData['rows'].slice();
        });
        this.socket.on('transport-started', function (data) {
            for (var i = 0; i < self.customData['rows'].length; i++) {
                if (data['data']['id'] == self.customData['rows'][i]['id']) {
                    self.customData['rows'][i] = data['data'];
                }
            }
            self.customData['rows'] = self.customData['rows'].slice();
        });
        this.socket.on('transport-deleted', function (data) {
            for (var i = 0; i < self.customData['rows'].length; i++) {
                if (data['data'] == self.customData['rows'][i]['id']) {
                    self.customData['rows'].splice(i, 1);
                    self.customData.count = self.customData.count - 1;
                }
            }
            self.customData['rows'] = self.customData['rows'].slice();
        });
        this.socket.on('transport-reset', function (data) {
            for (var i = 0; i < self.customData['rows'].length; i++) {
                if (data['data']['id'] == self.customData['rows'][i]['id']) {
                    self.customData['rows'][i] = data['data'];
                }
            }
            self.customData['rows'] = self.customData['rows'].slice();
        });
    }
    LinksComponent.prototype.sendData = function (data) {
        data.from = 'links';
        this._sharedService.publishData(data);
    };
    LinksComponent.prototype.fun = function (data) {
        this.ngOnInit();
    };
    LinksComponent.prototype.searchTransports = function () {
        var self = this;
        this.appServie
            .searchTransports("1", this.search)
            .subscribe(function (data) {
            self.customData['rows'] = data.data.data;
            self.customData.count = data.data.total;
            self.customData.offset = 0;
            self.customData.limit = 20;
        }, function (err) {
            console.log(err);
        });
    };
    LinksComponent.prototype.changefilterTransport = function () {
        if (this.filterTransport == 'all') {
            this.ngOnInit();
        }
        else {
            this.fetchDataFilter(1, this.filterTransport);
        }
    };
    LinksComponent.prototype.open = function (row) {
        var _this = this;
        this.currentUserEmail = this.user.user.email;
        var obj = {
            data: {
                currentUserEmail: this.currentUserEmail
            }
        };
        this.dialogRef = this
            .dialog
            .open(JazzDialogComponent, obj);
        this
            .dialogRef
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this.sendEmail({ email: result, id: row.id });
            }
            else { }
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    LinksComponent.prototype.openView = function (row) {
        var _this = this;
        var obj = {
            data: {
                row: row
            }
        };
        console.log(this.newforklift);
        this.dailogRef = this
            .dialog
            .open(PopDialogComponent, obj);
        this.dailogRef.afterClosed()
            .subscribe(function (result) {
            if (result) {
                console.log(result);
            }
            _this.dailogRef = null;
        });
    };
    LinksComponent.prototype.openViewSig = function () {
        var _this = this;
        var obj = {
            data: {
                row: this.forklift
            }
        };
        if (this.currentTransport.forklift) {
            this.newforklift = this.currentTransport.forklift;
        }
        this.dailogRef = this
            .dialog
            .open(PopSignatureDialogComponent, obj);
        this.dailogRef.afterClosed()
            .subscribe(function (result) {
            if (result) {
                console.log(result);
            }
            _this.dailogRef = null;
        });
    };
    ;
    LinksComponent.prototype.deleteTransports = function (row) {
        var self = this;
        this
            .appServie
            .deleteTransports(row)
            .subscribe(function (res) {
            self.ngOnInit();
            alert("Transport erfolgreich gelöscht.");
        }, function (err) {
            alert("Fehler: Transport nicht gelöscht.");
            console.log(err);
        });
    };
    LinksComponent.prototype.OnchangeRamp = function () {
        var obj = {
            rampe: this.updateRamp
        };
        this
            .appServie
            .updateRampe(obj, this.currentTransport.id)
            .subscribe(function (res) {
            console.log("Update Rampe", res);
        }, function (err) {
            console.log("Error Update Rampe", err);
        });
    };
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .appServie
            .getRamps()
            .subscribe(function (res) {
            for (var key in res) {
                _this
                    .list
                    .push({ id: key, name: res[key] });
            }
        }, function (err) {
        });
        this.user = this
            ._localstorage
            .getObject('user_token');
        this.currentId = 0;
        this.current_forklift_id = 0;
        var self = this;
        this.currentUserEmail = self.user.user.email;
        this.fetchData(function (data) {
            self.customData['rows'] = data.data.data;
            self.customData.count = self.totalCount;
            self.customData.offset = 0;
            self.customData.limit = 20;
        }, 1);
    };
    LinksComponent.prototype.dataURLtoFiles = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    LinksComponent.prototype.page = function (offset, limit) {
        var start = offset * limit;
        var end = start + limit;
        this.user = this
            ._localstorage
            .getObject('user_token');
        this.currentId = 0;
        this.current_forklift_id = 0;
        var self = this;
        this.fetchData(function (data) {
            self.customData['rows'] = [];
            self.customData['rows'] = data.data.data;
            self.customData.count = self.totalCount;
            self.customData.offset = 0;
            self.customData.limit = 20;
        }, offset + 1);
    };
    LinksComponent.prototype.onPage = function (event) {
        this.page(event.offset, event.limit);
    };
    LinksComponent.prototype.fetchData = function (cb, page) {
        var _this = this;
        var self = this;
        this
            .appServie
            .getAllTransporters(page)
            .subscribe(function (res) {
            self.next_page_url = res.data.next_page_url;
            self.last_page_url = res.data.last_page;
            self.current_page = res.data.current_page;
            self.totalCount = res.data.total;
            cb(res);
        }, function (err) {
            _this
                ._logger
                .error(err);
        });
    };
    LinksComponent.prototype.fetchDataFilter = function (page, filter) {
        var self = this;
        this
            .appServie
            .getAllTransportersFilter(page, filter)
            .subscribe(function (res) {
            self.next_page_url = res.data.next_page_url;
            self.last_page_url = res.data.last_page;
            self.current_page = res.data.current_page;
            self.totalCount = res.data.total;
            self.customData['rows'] = res.data.data;
            self.customData.count = self.totalCount;
        }, function (err) {
        });
    };
    LinksComponent.prototype.sendEmail = function (row) {
        this
            .appServie
            .sendEmail(row, row.id)
            .subscribe(function (res) {
            alert("Bericht erfolgreich gesendet.");
        }, function (err) {
            alert("Fehler: Der Bericht wurde nicht gesendet.");
            console.log(err);
        });
        console.log(row);
    };
    LinksComponent.prototype.openTabs = function (id, event, forklift_id, row) {
        var _this = this;
        if (row) {
            if (row['forklift'] && typeof row['forklift'] == 'object') {
                this.forklift = row['forklift'];
            }
            if (row.adr == 'Ja') { }
            if (row.adr == 'Nein') {
                this.adr = false;
                this.documentsQuestions = this.documentsQuestions2;
                this.controlOfTransportUnit = this.controlOfTransportUnit2;
            }
            this.currentTransport = row;
            if (!this.currentTransport['shipment'] || !this.currentTransport['shipment'] == null) {
                this.currentTransport['shipment'] = [
                    {
                        shipmint_id: ''
                    }
                ];
            }
            row.from = 'links';
            this
                ._sharedService
                .publishData(row);
            this.updateRamp = row['rampe'];
            if (row['forklift'] && typeof row['forklift'] == "object") {
                for (var key in row.forklift) {
                    if ((this[key] || this[key] == null || this[key] == "" || !this[key]) && key != 'id') {
                        this[key] = row.forklift[key] + "";
                    }
                }
            }
        }
        if (event == 'edit') {
            if (!this.currentTransport['shipment'] || !this.currentTransport['shipment'] == null) {
                this.currentTransport['shipment'] = [
                    {
                        shipmint_id: ''
                    }
                ];
            }
            this.opentabs = true;
            this.currentId = id;
            if (typeof row.forklift == 'object' && row.forklift != null) {
                this.newforklift = row['forklift']['id'];
                this.current_forklift_id = this.newforklift;
                this.currentTransport = row;
                if (row['forklift']['image']) {
                    this.images = row['forklift']['image'];
                }
                for (var key in row.forklift) {
                    if ((this[key] || this[key] == null || this[key] == "" || !this[key]) && key != 'id') {
                        this[key] = row.forklift[key] + "";
                    }
                }
                if (row['forklift']['prozess']) {
                    for (var i_1 = 1; i_1 <= row['forklift']['prozess']; i_1++) {
                        this['tab' + i_1] = false;
                    }
                    this.selectedIndex = row['forklift']['prozess'] - 1;
                }
            }
            else {
                this.currentId = id;
                if ((typeof this.currentTransport['forklift']) == 'object' && this.currentTransport['forklift'] != null) {
                    this.current_forklift_id = this.currentTransport['forklift']['id']
                        ? this.currentTransport['forklift']['id']
                        : forklift_id;
                    this.newforklift = this.current_forklift_id;
                }
                else {
                    this.current_forklift_id = forklift_id;
                    this.newforklift = this.current_forklift_id;
                }
            }
            for (var i = 0; i < this.customData['rows'].length; i++) {
                if (id == this.customData['rows'][i]['id']) {
                    this.customData['rows'][i]['forklift'] = this.user.user.id;
                }
            }
            if (row['forklift'] && typeof row['forklift'] == 'object') {
                this.forklift = row['forklift'];
            }
            return;
        }
        var obj = {
            id: id
        };
        this.currentId = id;
        this.current_forklift_id = forklift_id;
        this
            .appServie
            .pickAndstart(obj)
            .subscribe(function (res) {
            console.log(res);
            _this.currentTransport = res.data;
            if (!_this.currentTransport['shipment'] || !_this.currentTransport['shipment'] == null) {
                _this.currentTransport['shipment'] = [
                    {
                        shipmint_id: ''
                    }
                ];
            }
            if ((typeof res.data['forklift']) == 'object' && res.data['forklift'] != null) {
                _this.forklift = res.data['forklift'];
                _this.newforklift = res.data['forklift']['id'];
            }
            _this.opentabs = true;
            console.log(res);
        }, function (err) {
            if (err.message == "Transport already start please chose any other transport.") {
                alert("Der Transport hat bereits begonnen, bitte wählen Sie einen anderen Transport aus" +
                    ".");
                _this.ngOnInit();
                console.log(err);
            }
            else {
                alert(err.message);
                console.log(err);
            }
        });
    };
    LinksComponent.prototype.closeTabs = function () {
        this.opentabs = false;
        this.adr = true;
        this.ngOnInit();
    };
    LinksComponent.prototype.editTransport = function (obj) { };
    LinksComponent.prototype.onClearHandler = function () {
        console.log('onclear clicked...');
        // this.opentabs = false;
    };
    LinksComponent.prototype.onSaveHandler = function (data, row) {
        var image = this.dataURLtoFiles(data, 'signature.png');
        this.postSignatue(image, row);
    };
    LinksComponent.prototype.onSaveHandler2 = function (data, row) {
        var image = this.dataURLtoFiles(data, 'signature.png');
        this.postSignatue2(image, row);
    };
    LinksComponent.prototype.changeTab = function (event) {
        if (event == 'back' && this.selectedIndex > 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
        if (event == 'next' && (this.selectedIndex == 0 || this.selectedIndex > 0)) {
            console.log(this.selectedObject);
            this.selectedIndex = this.selectedIndex + 1;
        }
        var ele4 = document.getElementsByClassName('mat-sidenav-content');
        ele4[0].scrollTop = 0;
        this.currentDate = this.getDate();
    };
    LinksComponent.prototype.changeListener = function ($event, row) {
        this.postFile($event.target);
    };
    LinksComponent.prototype.postFile = function (inputValue) {
        var _this = this;
        var formData = new FormData();
        for (var i = 0; i < inputValue.files.length; i++) {
            formData.append("picture[]", inputValue.files[i]);
        }
        if (this.images.length >= 5) {
            alert("Du hast bereits Bilder hochgeladen");
            return false;
        }
        this
            .appServie
            .uploadForkliftImage(formData, this.newforklift)
            .subscribe(function (res) {
            console.log(res);
            _this.images = res['data']['image'];
            _this.opentabs = true;
        }, function (err) {
            _this
                ._logger
                .error(err);
        });
    };
    LinksComponent.prototype.postSignatue = function (inputValue, row) {
        var _this = this;
        var formData = new FormData();
        formData.append("signature", inputValue);
        this
            .appServie
            .uploadForkliftSignature(formData, this.newforklift)
            .subscribe(function (res) {
            _this.signature = true;
            alert("Signatur hochgeladen");
        }, function (err) {
            _this
                ._logger
                .error(err);
        });
    };
    LinksComponent.prototype.postSignatue2 = function (inputValue, row) {
        var _this = this;
        var formData = new FormData();
        formData.append("signature", inputValue);
        this
            .appServie
            .uploadForkliftSignature(formData, row.id)
            .subscribe(function (res) {
            _this.signature = true;
            alert("Signatur hochgeladen");
        }, function (err) {
            _this
                ._logger
                .error(err);
        });
    };
    LinksComponent.prototype.restoreVars = function () {
        this.fahrzeugausweis_21 = null;
        this.adr_schulungsbescheinigung_22 = null;
        this.adr_schulungsbescheinigung_22_answeis_nr = "";
        this.adr_schulungsbescheinigung_22_gultig_bis = "";
        this.lichtbildausweis_23 = 1;
        this.arbeitsbescheinigung_fahrer_24 = null;
        this.vertrauensabfertigung_25 = null;
        this.orangefarbene_warntafeln_26 = null;
        this.schriftliche_weisungen_27 = null;
        this.bewegungssicherung_31 = null;
        this.visuelle_ueberpruefung_32 = null;
        this.ladungsbruecke_besenrein_33 = null;
        this.ladungssicherungsmittel_34 = null;
        this.ladungssicherungsmittel_34_gurte = null;
        this.ladungssicherungsmittel_34_spannstangen = null;
        this.ladungssicherungsmittel_34_antirutschmatten = null;
        this.ladungssicherungsmittel_34_leerpaletten = null;
        this.werbefrei_fuer_tierfutter_41 = null;
        this.lebensmittel_futtermittel_42 = null;
        this.persoenliche_schutzausruestung_43 = null;
        this.persoenliche_schutzausruestung_43_plomben_nr = null;
        this.persoenliche_schutzausruestung_43_schutzbrille = null;
        this.persoenliche_schutzausruestung_43_chem_handschuhe = null;
        this.persoenliche_schutzausruestung_43_warnweste = null;
        this.persoenliche_schutzausruestung_43_vollschutzmaske = null;
        this.persoenliche_schutzausruestung_43_augenspuelflasche = null;
        this.persoenliche_schutzausruestung_43_handlampe = null;
        this.pulverloescher_plombiert_441 = '';
        this.pulverloescher_plombiert_441_pruefung = null;
        this.unterkeil_schaufel_442 = null;
        this.warnzeichen_warndreiecke_443 = null;
        this.auffangbehaelter_444 = null;
        this.kanalisationsabdeckung_445 = null;
        this.ibc_prueffrist_51 = null;
        this.ibc_prueffrist_51_date = null;
        this.unbeschaedigte_verandstuecke_un_cod_52 = null;
        this.wirksame_ladungssicherung_53 = null;
        this.ladungssicherung_foto_54 = null;
        this.signature = false;
        this.adr = true;
        this.prozess = 2;
    };
    LinksComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    LinksComponent.prototype.getDate = function () {
        var date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1).toString(), formatedMonth = (month.length === 1)
            ? ("0" + month)
            : month, day = date
            .getDate()
            .toString(), formatedDay = (day.length === 1)
            ? ("0" + day)
            : day, hour = date
            .getHours()
            .toString(), formatedHour = (hour.length === 1)
            ? ("0" + hour)
            : hour, minute = date
            .getMinutes()
            .toString(), formatedMinute = (minute.length === 1)
            ? ("0" + minute)
            : minute, second = date
            .getSeconds()
            .toString(), formatedSecond = (second.length === 1)
            ? ("0" + second)
            : second;
        return formatedDay + "." + formatedMonth + "." + year + " | " + formatedHour + ':' + formatedMinute + " Uhr";
    };
    LinksComponent.prototype.deleteImage = function (row, index) {
        var _this = this;
        console.log(index);
        var id = this.current_forklift_id;
        this
            .appServie
            .deleteImage(row, id)
            .subscribe(function (res) {
            console.log(res);
            _this
                .images
                .splice(index, 1);
        }, function (err) {
            console.log(err);
        });
        console.log(row);
    };
    LinksComponent.prototype.updateForkliftTransport = function (process) {
        var _this = this;
        this.user = this
            ._localstorage
            .getObject('user_token');
        if (process == 1) {
            var obj = {
                transport_id: this.currentTransport.id,
                user_id: this.user.user.id
            };
            var requirements = [
                'fahrzeugausweis_21',
                'adr_schulungsbescheinigung_22',
                'adr_schulungsbescheinigung_22_answeis_nr',
                'adr_schulungsbescheinigung_22_gultig_bis',
                'lichtbildausweis_23',
                'arbeitsbescheinigung_fahrer_24',
                'vertrauensabfertigung_25',
                'orangefarbene_warntafeln_26',
                'schriftliche_weisungen_27'
            ];
            if (this.adr == false) {
                var requirements = ['arbeitsbescheinigung_fahrer_24'];
            }
            for (var i = 0; i < requirements.length; i++) {
                if (this[requirements[i]] == null || this[requirements[i]] == '') {
                    alert("Bitte prüfen Sie die Punkte vollständig.");
                    return false;
                }
                obj[requirements[i]] = this[requirements[i]];
            }
            obj['prozess'] = 1;
            obj['newforklift'] = this.newforklift;
            this
                .appServie
                .updateForklist(obj)
                .subscribe(function (res) {
                console.log(res);
                var id = '';
                if (res['data']) {
                    if (res['data']['id']) {
                        _this.current_forklift_id = res['data']['id'];
                        _this.forklift = res['data'];
                    }
                    else {
                        if (_this.currentTransport['forklift']) {
                            id = _this.currentTransport['forklift']['id'];
                            _this.current_forklift_id = _this.currentTransport['forklift']['id'];
                        }
                        else {
                            if (_this.currentTransport['forklift_id']) {
                                id = _this.currentTransport['forklift_id'];
                                _this.current_forklift_id = id;
                            }
                            else {
                                if (!_this.current_forklift_id) {
                                    _this.current_forklift_id = res['data']['id'];
                                }
                            }
                        }
                    }
                }
                _this.tab2 = false;
                _this.changeTab('next');
            }, function (err) {
                _this
                    ._logger
                    .error("updateForkliftTransport Error");
                _this
                    ._logger
                    .error(err);
            });
        }
        else if (process == 2) {
            var obj = {
                transport_id: this.currentTransport.id,
                user_id: this.user.user.id
            };
            var requirements = [
                'bewegungssicherung_31',
                'visuelle_ueberpruefung_32',
                'ladungsbruecke_besenrein_33',
                'ladungssicherungsmittel_34',
                'ladungssicherungsmittel_34_gurte',
                'ladungssicherungsmittel_34_spannstangen',
                'ladungssicherungsmittel_34_leerpaletten',
                'ladungssicherungsmittel_34_antirutschmatten'
            ];
            for (var i = 0; i < requirements.length; i++) {
                obj[requirements[i]] = this[requirements[i]];
            }
            obj['prozess'] = 2;
            obj['newforklift'] = this.newforklift;
            this
                .appServie
                .updateForklist(obj)
                .subscribe(function (res) {
                _this
                    ._logger
                    .log("updateForkliftTransport Transports");
                _this
                    ._logger
                    .log(res);
                console.log(res);
                var id = '';
                if (res['data']) {
                    _this.forklift = res['data'];
                    if (res['data']['id']) {
                        _this.current_forklift_id = res['data']['id'];
                    }
                    else {
                        if (_this.currentTransport['forklift']) {
                            id = _this.currentTransport['forklift']['id'];
                            _this.current_forklift_id = _this.currentTransport['forklift']['id'];
                        }
                        else {
                            if (_this.currentTransport['forklift_id']) {
                                id = _this.currentTransport['forklift_id'];
                                _this.current_forklift_id = id;
                            }
                            else {
                                if (!_this.current_forklift_id) {
                                    _this.current_forklift_id = res['data']['id'];
                                }
                            }
                        }
                    }
                }
                _this.tab3 = false;
                _this.changeTab('next');
            }, function (err) {
                _this
                    ._logger
                    .error("updateForkliftTransport Error");
                _this
                    ._logger
                    .error(err);
            });
        }
        else if (process == 3) {
            var obj = {
                transport_id: this.currentTransport.id,
                user_id: this.user.user.id
            };
            var requirements = [
                'werbefrei_fuer_tierfutter_41',
                'lebensmittel_futtermittel_42',
                'persoenliche_schutzausruestung_43',
                'persoenliche_schutzausruestung_43_plomben_nr',
                'persoenliche_schutzausruestung_43_schutzbrille',
                'persoenliche_schutzausruestung_43_chem_handschuhe',
                'persoenliche_schutzausruestung_43_warnweste',
                'persoenliche_schutzausruestung_43_vollschutzmaske',
                'persoenliche_schutzausruestung_43_augenspuelflasche',
                'pulverloescher_plombiert_441',
                'pulverloescher_plombiert_441_pruefung',
                'unterkeil_schaufel_442',
                'warnzeichen_warndreiecke_443',
                'auffangbehaelter_444',
                'kanalisationsabdeckung_445'
            ];
            if (this.adr == false) {
                var requirements = ['werbefrei_fuer_tierfutter_41', 'lebensmittel_futtermittel_42'];
            }
            for (var i = 0; i < requirements.length; i++) {
                if (this[requirements[i]] == null || this[requirements[i]] == '') {
                    alert("Bitte prüfen Sie die Punkte vollständig.");
                    return false;
                }
                obj[requirements[i]] = this[requirements[i]];
            }
            obj['prozess'] = 3;
            obj['newforklift'] = this.newforklift;
            this
                .appServie
                .updateForklist(obj)
                .subscribe(function (res) {
                _this
                    ._logger
                    .log("updateForkliftTransport Transports");
                _this
                    ._logger
                    .log(res);
                console.log(res);
                var id = '';
                if (res['data']) {
                    _this.forklift = res['data'];
                    if (res['data']['id']) {
                        _this.current_forklift_id = res['data']['id'];
                    }
                    else {
                        if (_this.currentTransport['forklift']) {
                            id = _this.currentTransport['forklift']['id'];
                            _this.current_forklift_id = _this.currentTransport['forklift']['id'];
                        }
                        else {
                            if (_this.currentTransport['forklift_id']) {
                                id = _this.currentTransport['forklift_id'];
                                _this.current_forklift_id = id;
                            }
                            else {
                                if (!_this.current_forklift_id) {
                                    _this.current_forklift_id = res['data']['id'];
                                }
                            }
                        }
                    }
                }
                _this.changeTab('next');
                _this.tab4 = false;
            }, function (err) {
                _this
                    ._logger
                    .error("updateForkliftTransport Error");
                _this
                    ._logger
                    .error(err);
            });
        }
        else if (process == 4) {
            var obj = {
                transport_id: this.currentTransport.id,
                user_id: this.user.user.id
            };
            var requirements = ['ibc_prueffrist_51', 'ibc_prueffrist_51_date', 'unbeschaedigte_verandstuecke_un_cod_52', 'wirksame_ladungssicherung_53', 'ladungssicherung_foto_54'];
            for (var i = 0; i < requirements.length; i++) {
                obj[requirements[i]] = this[requirements[i]];
            }
            obj['prozess'] = 4;
            obj['newforklift'] = this.newforklift;
            if (this.pulverloescher_plombiert_441_pruefung) {
                obj['pulverloescher_plombiert_441_pruefung'] = this.pulverloescher_plombiert_441_pruefung;
            }
            this
                .appServie
                .updateForklist(obj)
                .subscribe(function (res) {
                _this
                    ._logger
                    .log("updateForkliftTransport Transports");
                _this
                    ._logger
                    .log(res);
                console.log(res);
                var id = '';
                if (res['data']) {
                    _this.forklift = res['data'];
                    if (res['data']['id']) {
                        _this.current_forklift_id = res['data']['id'];
                    }
                    else {
                        if (_this.currentTransport['forklift']) {
                            id = _this.currentTransport['forklift']['id'];
                            _this.current_forklift_id = _this.currentTransport['forklift']['id'];
                        }
                        else {
                            if (_this.currentTransport['forklift_id']) {
                                id = _this.currentTransport['forklift_id'];
                                _this.current_forklift_id = id;
                            }
                            else {
                                if (!_this.current_forklift_id) {
                                    _this.current_forklift_id = res['data']['id'];
                                }
                            }
                        }
                    }
                }
                _this.tab5 = false;
                _this.changeTab('next');
            }, function (err) {
                _this
                    ._logger
                    .error("updateForkliftTransport Error");
                _this
                    ._logger
                    .error(err);
            });
        }
        else if (process == 5) {
            var obj = {
                transport_id: this.currentTransport.id,
                user_id: this.user.user.id
            };
            var requirements = ['signature'];
            for (var i = 0; i < requirements.length; i++) {
                if (this.signature == false) {
                    alert("Bitte prüfen Sie die Punkte vollständig.");
                    return false;
                }
            }
            obj['prozess'] = 5;
            obj['abfahrt'] = this.currentDate;
            obj['newforklift'] = this.newforklift;
            var updateTranspor = {
                id: this.currentTransport.id,
                abfahrt: this.currentDate
            };
            this
                .appServie
                .updateTransporter(updateTranspor)
                .subscribe(function (res) {
                _this
                    ._logger
                    .log("updateTransporter Transports");
            }, function (err) {
                _this
                    ._logger
                    .error("updateTransporter Error");
                _this
                    ._logger
                    .error(err);
            });
            this
                .appServie
                .updateForklist(obj)
                .subscribe(function (res) {
                _this._logger.log(res);
                _this.selectedIndex = 1;
                var id = '';
                _this.currentTransport = {};
                _this.forklift = {};
                _this.newforklift = 0;
                _this.images = [];
                _this.user = _this._localstorage.getObject('user_token');
                _this.currentId = 0;
                _this.current_forklift_id = 0;
                var self = _this;
                _this.restoreVars();
                _this.fetchData(function (data) {
                    self.customData['rows'] = [];
                    self.customData['rows'] = data.data.data;
                    self.customData.count = self.totalCount;
                    self.customData.offset = 0;
                    self.customData.limit = 20;
                }, 1);
                _this.opentabs = false;
            }, function (err) {
                _this._logger.error("updateForkliftTransport Error");
                _this._logger.error(err);
            });
        }
    };
    LinksComponent.prototype.changeTabPositon = function (event) {
        this.selectedIndex = event.index;
    };
    ;
    LinksComponent.prototype.closeWizards = function () {
        this.selectedIndex = 0;
        var id = '';
        this.adr = true;
        this.currentTransport = {};
        this.forklift = {};
        this.newforklift = 0;
        this.images = [];
        this.user = this._localstorage.getObject('user_token');
        this.currentId = 0;
        this.current_forklift_id = 0;
        var self = this;
        this.restoreVars();
        this.fetchData(function (data) {
            self.customData['rows'] = [];
            self.customData['rows'] = data.data.data;
            self.customData.count = self.totalCount;
            self.customData.offset = 0;
            self.customData.limit = 20;
        }, 1);
        this.opentabs = false;
    };
    LinksComponent.prototype.resetTransport = function () {
        var _this = this;
        var obj = {
            id: this.currentTransport.id
        };
        this.appServie.resetTransport(obj)
            .subscribe(function (res) {
            console.log(res);
            _this.opentabs = false;
            _this.adr = true;
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    ;
    return LinksComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentData'),
    __metadata("design:type", Object)
], LinksComponent.prototype, "incomingData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('childData'),
    __metadata("design:type", Object)
], LinksComponent.prototype, "outgoingData", void 0);
LinksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-links',
        template: __webpack_require__("../../../../../src/app/apps/links/links.component.html"),
        styles: [__webpack_require__("../../../../../src/app/apps/links/links.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__management_management_service__["a" /* ManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__management_management_service__["a" /* ManagementService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__apps_service__["a" /* AppsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apps_service__["a" /* AppsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdDialog */]) === "function" && _j || Object])
], LinksComponent);

//Dailog  Componenet
var JazzDialogComponent = (function () {
    function JazzDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.currentUserEmail = this.dialogRef._containerInstance.dialogConfig.data.currentUserEmail;
    }
    return JazzDialogComponent;
}());
JazzDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-jazz-dialog', template: "\n  <h5 class=\"mt-0\">Bericht senden</h5>\n  <p style=\"text-align:center;height: 35px\">\n     <md-input-container class=\"mb-1\" style=\"width: 100%;height: 60px;\">\n       <input mdInput [(ngModel)]=\"currentUserEmail\" placeholder=\"E-Mail\" type=\"email\">\n     </md-input-container>\n  </p>\n  <div style=\"text-align: right\"> <button md-raised-button md-raised-button color=\"primary\" (click)=\"dialogRef.close(currentUserEmail)\">Senden</button> </div>" }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */]) === "function" && _k || Object])
], JazzDialogComponent);

var PopDialogComponent = (function () {
    function PopDialogComponent(dialogRef, sanitizer) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.row = this.dialogRef._containerInstance.dialogConfig.data.row;
        this.row.url = 'https://erbium.ch/backend/api/transports/pdf/report/' + this.row.id;
    }
    return PopDialogComponent;
}());
PopDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'pop-jazz-dialog', template: __webpack_require__("../../../../../src/app/apps/links/transportview.html") }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _m || Object])
], PopDialogComponent);

var PopSignatureDialogComponent = (function () {
    function PopSignatureDialogComponent(_sharedService, _localstorage, appServie, dialogRef, sanitizer, listComponent) {
        this._sharedService = _sharedService;
        this._localstorage = _localstorage;
        this.appServie = appServie;
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.listComponent = listComponent;
        this.noFooter = false;
        this.label = 'Unterschrift Fahrer';
        this.width = 600;
        this.height = 300;
        this.row = this.dialogRef._containerInstance.dialogConfig.data.row;
    }
    PopSignatureDialogComponent.prototype.onClearHandler = function () {
        console.log('onclear clicked...');
    };
    PopSignatureDialogComponent.prototype.onSaveHandler = function (data, row) {
        this.listComponent.onSaveHandler2(data, row);
        this.signature = true;
    };
    PopSignatureDialogComponent.prototype.getDate = function () {
        var date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1).toString(), formatedMonth = (month.length === 1)
            ? ("0" + month)
            : month, day = date
            .getDate()
            .toString(), formatedDay = (day.length === 1)
            ? ("0" + day)
            : day, hour = date
            .getHours()
            .toString(), formatedHour = (hour.length === 1)
            ? ("0" + hour)
            : hour, minute = date
            .getMinutes()
            .toString(), formatedMinute = (minute.length === 1)
            ? ("0" + minute)
            : minute, second = date
            .getSeconds()
            .toString(), formatedSecond = (second.length === 1)
            ? ("0" + second)
            : second;
        return formatedDay + "." + formatedMonth + "." + year + " | " + formatedHour + ':' + formatedMinute + " Uhr";
    };
    PopSignatureDialogComponent.prototype.updateForkliftTransport = function (prozess) {
        var _this = this;
        this.user = this._localstorage.getObject('user_token');
        var obj = {
            transport_id: this.row.id,
            user_id: this.user.user.id
        };
        var requirements = ['signature'];
        for (var i = 0; i < requirements.length; i++) {
            if (this.signature == false) {
                alert("Bitte prüfen Sie die Punkte vollständig.");
                return false;
            }
        }
        obj['prozess'] = 5;
        obj['abfahrt'] = this.getDate();
        obj['newforklift'] = this.row.id;
        this
            .appServie
            .updateForklist(obj)
            .subscribe(function (res) {
            console.log(res);
            _this._sharedService.publishData({
                from: 'popup'
            });
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
        });
    };
    return PopSignatureDialogComponent;
}());
PopSignatureDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        providers: [LinksComponent],
        selector: 'pop-sig-dialog',
        template: "\n<div style=\"margin-top: 5%; display: inline-block;margin-bottom: 10px;\">\n<signature-pad (onSave)=\"onSaveHandler($event, row)\" (onClear)=\"onClearHandler()\" [width]=\"width\" [height]=\"listComponent.height\" [hideFooter]=\"listComponent.noFooter\"\n  [label]=\"label\">\n</signature-pad>\n<div style=\"display:inline-block; text-align:right;margin-left: 26%; margin-top: 8%;\">\n  <b>{{currentDate}}</b>\n</div>\n<button md-raised-button color=\"primary\" style=\"width: 100%; margin-top: 30px;\" (click)=\"updateForkliftTransport(5)\"> Pr\u00FCfen f\u00FCr diesen Transport abschliessen</button>\n</div>\n"
    }),
    __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__libs_localstorage__["a" /* LocalStorage */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__apps_service__["a" /* AppsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apps_service__["a" /* AppsService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogRef */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _s || Object, LinksComponent])
], PopSignatureDialogComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=links.component.js.map

/***/ }),

/***/ "../../../../../src/app/apps/links/transportview.html":
/***/ (function(module, exports) {

module.exports = "<iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(row.url)' style=\"width:718px; height:700px;\" frameborder=\"0\"></iframe>\n<div style=\"text-align: right\"> <button md-raised-button md-raised-button color=\"primary\" (click)=\"dialogRef.close()\" >Close</button> </div>"

/***/ }),

/***/ "../../../../../src/app/apps/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"!edit && user.user.type == 3\">\n  <md-card-title><b>Neuer Transport </b> </md-card-title>\n  <md-card-content>\n    <form [formGroup]=\"form\">\n        <md-input-container dividerColor=\"primary\" class=\"ml-xs mr-xs\" style=\"width: 31%;\" *ngFor=\"let shipment of shipments; let idx = index\">\n          <input class=\"sid\" mdInput md-select-on-focus  placeholder=\"S-ID {{idx+1}}\" [(ngModel)]=\"shipment.value\" [ngModelOptions]=\"{standalone: true}\">\n        </md-input-container>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <button md-raised-button color=\"secondary\" (click)=\"addInput()\">Add Shipment</button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Fahrzeughalter\" type=\"text\" [formControl]=\"form.controls['fahrzeughalter']\" />\n        </md-input-container>\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"LKW Nr.\" type=\"text\" [formControl]=\"form.controls['lkw_nr']\">\n        </md-input-container>\n          <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Destination\" type=\"text\" [formControl]=\"form.controls['destination']\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Fahrer\" type=\"text\" [formControl]=\"form.controls['fahrer']\">\n        </md-input-container>\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Container\" type=\"text\" [formControl]=\"form.controls['container']\">\n        </md-input-container>\n\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Plombennummer\" type=\"text\" [formControl]=\"form.controls['plomben_nr']\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container dividerColor=\"primary\" class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Ankunft\" type=\"text\" [formControl]=\"form.controls['ankunft']\">\n         \n        </md-input-container>\n        <md-input-container dividerColor=\"accent\" class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Abfahrt\" type=\"text\"  [formControl]=\"form.controls['abfahrt']\">\n        </md-input-container>\n        <md-select placeholder=\"Zuweisung*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['rampe']\">\n           <md-option *ngFor=\"let i of list\" [value]=\"i.id\" >{{i.name}}</md-option>\n        </md-select>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-select placeholder=\"ADR*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['adr']\">\n          <md-option value=\"Nein\">Nein</md-option>\n          <md-option value=\"Ja\">Ja</md-option>\n        </md-select>\n\n        <md-select placeholder=\"Luftfracht*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['luftfracht']\">\n          <md-option value=\"Nein\">Nein</md-option>\n          <md-option value=\"Ja\">Ja</md-option>\n        </md-select>\n      </div>\n      <div class=\"mb-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n           <owl-date-time [showHeader]=\"true\" [inputId]=\"'input10'\">\n                <div class=\"calendar-btn\">\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                </div>\n            </owl-date-time>\n      </div>\n      <md-card-actions style=\"margin-top: -4%;margin-bottom: 1%;\">\n        <button md-raised-button color=\"primary\" class=\"primary\" type=\"submit\" (click)=\"onSubmit()\" >Speichern</button>\n        <button md-raised-button color=\"accent\" (click)=\"resetForm()\">Zurücksetzen</button>\n      </md-card-actions>\n    </form>\n  </md-card-content>\n</md-card>\n\n\n<md-card *ngIf=\"edit && user.user.type == 3\">\n  <md-card-title><b>Transport bearbeiten </b> </md-card-title>\n  <md-card-content>\n    <form [formGroup]=\"form\">\n        <md-input-container dividerColor=\"primary\" class=\"ml-xs mr-xs\" style=\"width: 31%;\" *ngFor=\"let shipment of shipments; let idx = index\">\n          <input mdInput class=\"sid\" placeholder=\"S-ID {{idx+1}}\"  [(ngModel)]=\"shipment.value\" [ngModelOptions]=\"{standalone: true}\">\n        </md-input-container>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <button md-raised-button color=\"secondary\" (click)=\"addInput()\">Add Shipment</button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Fahrzeughalter\" type=\"text\" [formControl]=\"form.controls['fahrzeughalter']\" [(ngModel)]=\"editTransportObj.fahrzeughalter\" />\n        </md-input-container>\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"LKW Nr.\" type=\"text\" [formControl]=\"form.controls['lkw_nr']\" [(ngModel)]=\"editTransportObj.lkw_nr\">\n        </md-input-container>\n          <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Destination\" type=\"text\" [formControl]=\"form.controls['destination']\" [(ngModel)]=\"editTransportObj.destination\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Fahrer\" type=\"text\" [formControl]=\"form.controls['fahrer']\" [(ngModel)]=\"editTransportObj.fahrer\">\n        </md-input-container>\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\"> \n          <input mdInput placeholder=\"Container\" type=\"text\" [formControl]=\"form.controls['container']\" [(ngModel)]=\"editTransportObj.container\">\n        </md-input-container>\n\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Plombennummer\" type=\"text\" [formControl]=\"form.controls['plomben_nr']\" [(ngModel)]=\"editTransportObj.plomben_nr\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container dividerColor=\"primary\" class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n          <input mdInput placeholder=\"Ankunft\" type=\"text\" [formControl]=\"form.controls['ankunft']\" [(ngModel)]=\"editTransportObj.ankunft\">\n        </md-input-container>\n        <md-input-container dividerColor=\"accent\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" >\n          <input mdInput placeholder=\"Abfahrt\" type=\"text\"  disabled [formControl]=\"form.controls['abfahrt']\" [(ngModel)]=\"editTransportObj.abfahrt\">\n        </md-input-container>\n        <md-select placeholder=\"Zuweisung*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['rampe']\" [(ngModel)]=\"editTransportObj.rampe\">\n           <md-option *ngFor=\"let i of list\" [value]=\"i.id\" >{{i.name}}</md-option>\n        </md-select>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-select placeholder=\"ADR*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['adr']\" [(ngModel)]=\"editTransportObj.adr\">\n          <md-option value=\"Nein\">Nein</md-option>\n          <md-option value=\"Ja\">Ja</md-option>\n        </md-select>\n\n        <md-select placeholder=\"Luftfracht*\" class=\"ml-xs mr-xs\" style=\"width: 100%;\" [formControl]=\"form.controls['luftfracht']\" [(ngModel)]=\"editTransportObj.luftfracht\">\n          <md-option value=\"Nein\">Nein</md-option>\n          <md-option value=\"Ja\">Ja</md-option>\n        </md-select>\n      </div>\n      <md-card-actions style=\"margin-top: -1%;margin-bottom: 1%;\">\n        <button md-raised-button color=\"primary\" class=\"primary\" (click)=\"onEditSubmit()\" >Speichern</button>\n        <button md-raised-button color=\"accent\" type=\"button\" (click)=\"backForm()\" >Zurück</button>\n        <button md-raised-button color=\"warn\" (click)=\"open()\" > Löschen</button>\n      </md-card-actions>\n    </form>\n  </md-card-content>\n</md-card>\n\n<app-links></app-links>\n<div class=\"loading\" *ngIf=\"spinner\" >Loading&#8230;</div>\n"

/***/ }),

/***/ "../../../../../src/app/apps/transport/transport.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.chat-conversation-user {\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.me {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.me .chat-conversation-avatar {\n  margin-left: 1rem;\n  -webkit-box-ordinal-group: 3;\n  -moz-order: 2;\n  -ms-flex-order: 2;\n  order: 2; }\n\n.chat-conversation-message {\n  position: relative;\n  padding: 0.625rem 1rem;\n  background-color: white;\n  border-radius: 4px; }\n  .chat-conversation-message p {\n    margin: 0; }\n  .chat-conversation-message .chat-date {\n    display: block;\n    font-size: 11px;\n    padding-top: 2px; }\n\n.me .chat-conversation-message {\n  -webkit-box-ordinal-group: 2;\n  -moz-order: 1;\n  -ms-flex-order: 1;\n  order: 1; }\n  .me .chat-conversation-message .chat-date {\n    text-align: right; }\n\n.me .chat-conversation-message::after {\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  content: '';\n  border: 5px solid #ffd740;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  right: -7px; }\n\n.them .chat-conversation-avatar {\n  margin-right: 1rem; }\n\n.them .chat-conversation-message::after {\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: 0;\n  content: '';\n  border: 5px solid white;\n  border-bottom-color: transparent;\n  left: -7px;\n  border-left-color: transparent; }\n\n.chat-conversation-avatar {\n  position: relative;\n  width: 36px;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0; }\n  .chat-conversation-avatar img {\n    max-width: 100%;\n    border-radius: 50%; }\n\n.chat-conversation-user.me .chat-conversation-message {\n  position: relative;\n  background-color: #ffd740;\n  float: right ; }\n  .chat-conversation-user.me .chat-conversation-message p {\n    color: white; }\n\n.app-dark :host /deep/ .them .chat-conversation-message {\n  background: #424242; }\n\n.app-dark :host /deep/ .them .chat-conversation-message::after {\n  border: 5px solid #424242;\n  border-bottom-color: transparent;\n  left: -7px;\n  border-left-color: transparent; }\n\n[dir=\"rtl\"] :host /deep/ .me .chat-conversation-avatar {\n  margin-left: 0;\n  margin-right: 1rem; }\n\n[dir=\"rtl\"] :host /deep/ .me .chat-conversation-message .chat-date {\n  text-align: left; }\n\n[dir=\"rtl\"] :host /deep/ .me .chat-conversation-message::after {\n  border: 5px solid #ffd740;\n  border-top-color: transparent;\n  border-right-color: #ffd740;\n  border-left-color: transparent;\n  right: auto;\n  left: -7px; }\n\n[dir=\"rtl\"] :host /deep/ .them .chat-conversation-avatar {\n  margin-right: 0;\n  margin-left: 1rem; }\n\n[dir=\"rtl\"] :host /deep/ .them .chat-conversation-message::after {\n  border: 5px solid white;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  left: auto;\n  right: -7px; }\n\n[dir=\"rtl\"] :host /deep/ .chat-conversation-user.me .chat-conversation-message {\n  float: left ; }\n\n:host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n:host /deep/ .mat-sidenav-content {\n  padding: 0; }\n\n:host /deep/ md-toolbar + hr, :host /deep/ md-card-content + hr {\n  margin-left: -5px;\n  margin-right: -5px; }\n\n.mat-card-top {\n  margin-top: -64px; }\n\n@media (max-width: 600px) and (orientation: portrait) {\n  .mat-card-top {\n    margin-top: -56px; } }\n\n@media (max-width: 960px) and (orientation: landscape) {\n  .mat-card-top {\n    margin-top: -48px; } }\n\nmd-tab-body {\n  height: 100% !important;\n  overflow: hidden !important; }\n\n/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0; }\n\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apps/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apps_service__ = __webpack_require__("../../../../../src/app/apps/apps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_localstorage__ = __webpack_require__("../../../../../src/app/libs/localstorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service__ = __webpack_require__("../../../../../src/app/apps/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransportComponent = (function () {
    function TransportComponent(dialog, elRef, _fb, _router, _logger, _appsService, _localstorage, _sharedService) {
        var _this = this;
        this.dialog = dialog;
        this.elRef = elRef;
        this._fb = _fb;
        this._router = _router;
        this._logger = _logger;
        this._appsService = _appsService;
        this._localstorage = _localstorage;
        this._sharedService = _sharedService;
        this.list = [];
        this.shipments = [
            {
                value: ""
            }
        ];
        this.spinner = false;
        this.edit = false;
        this.countries = [
            {
                "name": "Afghanistan",
                "code": "AF"
            }, {
                "name": "Åland Islands",
                "code": "AX"
            }, {
                "name": "Albania",
                "code": "AL"
            }, {
                "name": "Algeria",
                "code": "DZ"
            }, {
                "name": "American Samoa",
                "code": "AS"
            }, {
                "name": "AndorrA",
                "code": "AD"
            }, {
                "name": "Angola",
                "code": "AO"
            }, {
                "name": "Anguilla",
                "code": "AI"
            }, {
                "name": "Antarctica",
                "code": "AQ"
            }, {
                "name": "Antigua and Barbuda",
                "code": "AG"
            }, {
                "name": "Argentina",
                "code": "AR"
            }, {
                "name": "Armenia",
                "code": "AM"
            }, {
                "name": "Aruba",
                "code": "AW"
            }, {
                "name": "Australia",
                "code": "AU"
            }, {
                "name": "Austria",
                "code": "AT"
            }, {
                "name": "Azerbaijan",
                "code": "AZ"
            }, {
                "name": "Bahamas",
                "code": "BS"
            }, {
                "name": "Bahrain",
                "code": "BH"
            }, {
                "name": "Bangladesh",
                "code": "BD"
            }, {
                "name": "Barbados",
                "code": "BB"
            }, {
                "name": "Belarus",
                "code": "BY"
            }, {
                "name": "Belgium",
                "code": "BE"
            }, {
                "name": "Belize",
                "code": "BZ"
            }, {
                "name": "Benin",
                "code": "BJ"
            }, {
                "name": "Bermuda",
                "code": "BM"
            }, {
                "name": "Bhutan",
                "code": "BT"
            }, {
                "name": "Bolivia",
                "code": "BO"
            }, {
                "name": "Bosnia and Herzegovina",
                "code": "BA"
            }, {
                "name": "Botswana",
                "code": "BW"
            }, {
                "name": "Bouvet Island",
                "code": "BV"
            }, {
                "name": "Brazil",
                "code": "BR"
            }, {
                "name": "British Indian Ocean Territory",
                "code": "IO"
            }, {
                "name": "Brunei Darussalam",
                "code": "BN"
            }, {
                "name": "Bulgaria",
                "code": "BG"
            }, {
                "name": "Burkina Faso",
                "code": "BF"
            }, {
                "name": "Burundi",
                "code": "BI"
            }, {
                "name": "Cambodia",
                "code": "KH"
            }, {
                "name": "Cameroon",
                "code": "CM"
            }, {
                "name": "Canada",
                "code": "CA"
            }, {
                "name": "Cape Verde",
                "code": "CV"
            }, {
                "name": "Cayman Islands",
                "code": "KY"
            }, {
                "name": "Central African Republic",
                "code": "CF"
            }, {
                "name": "Chad",
                "code": "TD"
            }, {
                "name": "Chile",
                "code": "CL"
            }, {
                "name": "China",
                "code": "CN"
            }, {
                "name": "Christmas Island",
                "code": "CX"
            }, {
                "name": "Cocos (Keeling) Islands",
                "code": "CC"
            }, {
                "name": "Colombia",
                "code": "CO"
            }, {
                "name": "Comoros",
                "code": "KM"
            }, {
                "name": "Congo",
                "code": "CG"
            }, {
                "name": "Congo, The Democratic Republic of the",
                "code": "CD"
            }, {
                "name": "Cook Islands",
                "code": "CK"
            }, {
                "name": "Costa Rica",
                "code": "CR"
            }, {
                "name": "Cote D Ivoire",
                "code": "CI"
            }, {
                "name": "Croatia",
                "code": "HR"
            }, {
                "name": "Cuba",
                "code": "CU"
            }, {
                "name": "Cyprus",
                "code": "CY"
            }, {
                "name": "Czech Republic",
                "code": "CZ"
            }, {
                "name": "Denmark",
                "code": "DK"
            }, {
                "name": "Djibouti",
                "code": "DJ"
            }, {
                "name": "Dominica",
                "code": "DM"
            }, {
                "name": "Dominican Republic",
                "code": "DO"
            }, {
                "name": "Ecuador",
                "code": "EC"
            }, {
                "name": "Egypt",
                "code": "EG"
            }, {
                "name": "El Salvador",
                "code": "SV"
            }, {
                "name": "Equatorial Guinea",
                "code": "GQ"
            }, {
                "name": "Eritrea",
                "code": "ER"
            }, {
                "name": "Estonia",
                "code": "EE"
            }, {
                "name": "Ethiopia",
                "code": "ET"
            }, {
                "name": "Falkland Islands (Malvinas)",
                "code": "FK"
            }, {
                "name": "Faroe Islands",
                "code": "FO"
            }, {
                "name": "Fiji",
                "code": "FJ"
            }, {
                "name": "Finland",
                "code": "FI"
            }, {
                "name": "France",
                "code": "FR"
            }, {
                "name": "French Guiana",
                "code": "GF"
            }, {
                "name": "French Polynesia",
                "code": "PF"
            }, {
                "name": "French Southern Territories",
                "code": "TF"
            }, {
                "name": "Gabon",
                "code": "GA"
            }, {
                "name": "Gambia",
                "code": "GM"
            }, {
                "name": "Georgia",
                "code": "GE"
            }, {
                "name": "Germany",
                "code": "DE"
            }, {
                "name": "Ghana",
                "code": "GH"
            }, {
                "name": "Gibraltar",
                "code": "GI"
            }, {
                "name": "Greece",
                "code": "GR"
            }, {
                "name": "Greenland",
                "code": "GL"
            }, {
                "name": "Grenada",
                "code": "GD"
            }, {
                "name": "Guadeloupe",
                "code": "GP"
            }, {
                "name": "Guam",
                "code": "GU"
            }, {
                "name": "Guatemala",
                "code": "GT"
            }, {
                "name": "Guernsey",
                "code": "GG"
            }, {
                "name": "Guinea",
                "code": "GN"
            }, {
                "name": "Guinea-Bissau",
                "code": "GW"
            }, {
                "name": "Guyana",
                "code": "GY"
            }, {
                "name": "Haiti",
                "code": "HT"
            }, {
                "name": "Heard Island and Mcdonald Islands",
                "code": "HM"
            }, {
                "name": "Holy See (Vatican City State)",
                "code": "VA"
            }, {
                "name": "Honduras",
                "code": "HN"
            }, {
                "name": "Hong Kong",
                "code": "HK"
            }, {
                "name": "Hungary",
                "code": "HU"
            }, {
                "name": "Iceland",
                "code": "IS"
            }, {
                "name": "India",
                "code": "IN"
            }, {
                "name": "Indonesia",
                "code": "ID"
            }, {
                "name": "Iran, Islamic Republic Of",
                "code": "IR"
            }, {
                "name": "Iraq",
                "code": "IQ"
            }, {
                "name": "Ireland",
                "code": "IE"
            }, {
                "name": "Isle of Man",
                "code": "IM"
            }, {
                "name": "Israel",
                "code": "IL"
            }, {
                "name": "Italy",
                "code": "IT"
            }, {
                "name": "Jamaica",
                "code": "JM"
            }, {
                "name": "Japan",
                "code": "JP"
            }, {
                "name": "Jersey",
                "code": "JE"
            }, {
                "name": "Jordan",
                "code": "JO"
            }, {
                "name": "Kazakhstan",
                "code": "KZ"
            }, {
                "name": "Kenya",
                "code": "KE"
            }, {
                "name": "Kiribati",
                "code": "KI"
            }, {
                "name": "Korea, Democratic People S Republic of",
                "code": "KP"
            }, {
                "name": "Korea, Republic of",
                "code": "KR"
            }, {
                "name": "Kuwait",
                "code": "KW"
            }, {
                "name": "Kyrgyzstan",
                "code": "KG"
            }, {
                "name": "Lao People S Democratic Republic",
                "code": "LA"
            }, {
                "name": "Latvia",
                "code": "LV"
            }, {
                "name": "Lebanon",
                "code": "LB"
            }, {
                "name": "Lesotho",
                "code": "LS"
            }, {
                "name": "Liberia",
                "code": "LR"
            }, {
                "name": "Libyan Arab Jamahiriya",
                "code": "LY"
            }, {
                "name": "Liechtenstein",
                "code": "LI"
            }, {
                "name": "Lithuania",
                "code": "LT"
            }, {
                "name": "Luxembourg",
                "code": "LU"
            }, {
                "name": "Macao",
                "code": "MO"
            }, {
                "name": "Macedonia, The Former Yugoslav Republic of",
                "code": "MK"
            }, {
                "name": "Madagascar",
                "code": "MG"
            }, {
                "name": "Malawi",
                "code": "MW"
            }, {
                "name": "Malaysia",
                "code": "MY"
            }, {
                "name": "Maldives",
                "code": "MV"
            }, {
                "name": "Mali",
                "code": "ML"
            }, {
                "name": "Malta",
                "code": "MT"
            }, {
                "name": "Marshall Islands",
                "code": "MH"
            }, {
                "name": "Martinique",
                "code": "MQ"
            }, {
                "name": "Mauritania",
                "code": "MR"
            }, {
                "name": "Mauritius",
                "code": "MU"
            }, {
                "name": "Mayotte",
                "code": "YT"
            }, {
                "name": "Mexico",
                "code": "MX"
            }, {
                "name": "Micronesia, Federated States of",
                "code": "FM"
            }, {
                "name": "Moldova, Republic of",
                "code": "MD"
            }, {
                "name": "Monaco",
                "code": "MC"
            }, {
                "name": "Mongolia",
                "code": "MN"
            }, {
                "name": "Montserrat",
                "code": "MS"
            }, {
                "name": "Morocco",
                "code": "MA"
            }, {
                "name": "Mozambique",
                "code": "MZ"
            }, {
                "name": "Myanmar",
                "code": "MM"
            }, {
                "name": "Namibia",
                "code": "NA"
            }, {
                "name": "Nauru",
                "code": "NR"
            }, {
                "name": "Nepal",
                "code": "NP"
            }, {
                "name": "Netherlands",
                "code": "NL"
            }, {
                "name": "Netherlands Antilles",
                "code": "AN"
            }, {
                "name": "New Caledonia",
                "code": "NC"
            }, {
                "name": "New Zealand",
                "code": "NZ"
            }, {
                "name": "Nicaragua",
                "code": "NI"
            }, {
                "name": "Niger",
                "code": "NE"
            }, {
                "name": "Nigeria",
                "code": "NG"
            }, {
                "name": "Niue",
                "code": "NU"
            }, {
                "name": "Norfolk Island",
                "code": "NF"
            }, {
                "name": "Northern Mariana Islands",
                "code": "MP"
            }, {
                "name": "Norway",
                "code": "NO"
            }, {
                "name": "Oman",
                "code": "OM"
            }, {
                "name": "Pakistan",
                "code": "PK"
            }, {
                "name": "Palau",
                "code": "PW"
            }, {
                "name": "Palestinian Territory, Occupied",
                "code": "PS"
            }, {
                "name": "Panama",
                "code": "PA"
            }, {
                "name": "Papua New Guinea",
                "code": "PG"
            }, {
                "name": "Paraguay",
                "code": "PY"
            }, {
                "name": "Peru",
                "code": "PE"
            }, {
                "name": "Philippines",
                "code": "PH"
            }, {
                "name": "Pitcairn",
                "code": "PN"
            }, {
                "name": "Poland",
                "code": "PL"
            }, {
                "name": "Portugal",
                "code": "PT"
            }, {
                "name": "Puerto Rico",
                "code": "PR"
            }, {
                "name": "Qatar",
                "code": "QA"
            }, {
                "name": "Reunion",
                "code": "RE"
            }, {
                "name": "Romania",
                "code": "RO"
            }, {
                "name": "Russian Federation",
                "code": "RU"
            }, {
                "name": "RWANDA",
                "code": "RW"
            }, {
                "name": "Saint Helena",
                "code": "SH"
            }, {
                "name": "Saint Kitts and Nevis",
                "code": "KN"
            }, {
                "name": "Saint Lucia",
                "code": "LC"
            }, {
                "name": "Saint Pierre and Miquelon",
                "code": "PM"
            }, {
                "name": "Saint Vincent and the Grenadines",
                "code": "VC"
            }, {
                "name": "Samoa",
                "code": "WS"
            }, {
                "name": "San Marino",
                "code": "SM"
            }, {
                "name": "Sao Tome and Principe",
                "code": "ST"
            }, {
                "name": "Saudi Arabia",
                "code": "SA"
            }, {
                "name": "Senegal",
                "code": "SN"
            }, {
                "name": "Serbia and Montenegro",
                "code": "CS"
            }, {
                "name": "Seychelles",
                "code": "SC"
            }, {
                "name": "Sierra Leone",
                "code": "SL"
            }, {
                "name": "Singapore",
                "code": "SG"
            }, {
                "name": "Slovakia",
                "code": "SK"
            }, {
                "name": "Slovenia",
                "code": "SI"
            }, {
                "name": "Solomon Islands",
                "code": "SB"
            }, {
                "name": "Somalia",
                "code": "SO"
            }, {
                "name": "South Africa",
                "code": "ZA"
            }, {
                "name": "South Georgia and the South Sandwich Islands",
                "code": "GS"
            }, {
                "name": "Spain",
                "code": "ES"
            }, {
                "name": "Sri Lanka",
                "code": "LK"
            }, {
                "name": "Sudan",
                "code": "SD"
            }, {
                "name": "Suriname",
                "code": "SR"
            }, {
                "name": "Svalbard and Jan Mayen",
                "code": "SJ"
            }, {
                "name": "Swaziland",
                "code": "SZ"
            }, {
                "name": "Sweden",
                "code": "SE"
            }, {
                "name": "Switzerland",
                "code": "CH"
            }, {
                "name": "Syrian Arab Republic",
                "code": "SY"
            }, {
                "name": "Taiwan, Province of China",
                "code": "TW"
            }, {
                "name": "Tajikistan",
                "code": "TJ"
            }, {
                "name": "Tanzania, United Republic of",
                "code": "TZ"
            }, {
                "name": "Thailand",
                "code": "TH"
            }, {
                "name": "Timor-Leste",
                "code": "TL"
            }, {
                "name": "Togo",
                "code": "TG"
            }, {
                "name": "Tokelau",
                "code": "TK"
            }, {
                "name": "Tonga",
                "code": "TO"
            }, {
                "name": "Trinidad and Tobago",
                "code": "TT"
            }, {
                "name": "Tunisia",
                "code": "TN"
            }, {
                "name": "Turkey",
                "code": "TR"
            }, {
                "name": "Turkmenistan",
                "code": "TM"
            }, {
                "name": "Turks and Caicos Islands",
                "code": "TC"
            }, {
                "name": "Tuvalu",
                "code": "TV"
            }, {
                "name": "Uganda",
                "code": "UG"
            }, {
                "name": "Ukraine",
                "code": "UA"
            }, {
                "name": "United Arab Emirates",
                "code": "AE"
            }, {
                "name": "United Kingdom",
                "code": "GB"
            }, {
                "name": "United States",
                "code": "US"
            }, {
                "name": "United States Minor Outlying Islands",
                "code": "UM"
            }, {
                "name": "Uruguay",
                "code": "UY"
            }, {
                "name": "Uzbekistan",
                "code": "UZ"
            }, {
                "name": "Vanuatu",
                "code": "VU"
            }, {
                "name": "Venezuela",
                "code": "VE"
            }, {
                "name": "Viet Nam",
                "code": "VN"
            }, {
                "name": "Virgin Islands, British",
                "code": "VG"
            }, {
                "name": "Virgin Islands, U.S.",
                "code": "VI"
            }, {
                "name": "Wallis and Futuna",
                "code": "WF"
            }, {
                "name": "Western Sahara",
                "code": "EH"
            }, {
                "name": "Yemen",
                "code": "YE"
            }, {
                "name": "Zambia",
                "code": "ZM"
            }, {
                "name": "Zimbabwe",
                "code": "ZW"
            }
        ];
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this._dateTimeLocal = new Date();
        this
            ._sharedService
            .caseNumber$
            .subscribe(function (data) {
            if (data && data['from'] == 'transport') {
                console.log("Same Componenets");
            }
            else if (data && data['from'] == 'popup') {
                console.log(data, " come from popup nothing to do");
            }
            else if (data && data['from'] == 'delete') {
                console.log('data', data);
            }
            else {
                console.log('links send to transport', data);
                if (data['forklift']) {
                    if (data['forklift']['id']) {
                        data['abfahrt'] = data['forklift']['updated_at'];
                    }
                    else if (data['abfahrt']) {
                        data['abfahrt'] = data['abfahrt'];
                    }
                }
                if (data['shipment']) {
                    if (data['shipment'].length > 0) {
                        _this.shipments = [];
                        for (var i = 0; i < data['shipment'].length; i++) {
                            _this.shipments.push({ value: data['shipment'][i]['shipment_id'] });
                        }
                    }
                }
                _this.editTransportObj = data;
                // this.editTransportObj.destination = this.countries[0];
                _this.edit = true;
                var obk = [
                    'abfahrt',
                    "adr",
                    "ankunft",
                    "container",
                    "destination",
                    "fahrer",
                    "fahrzeughalter",
                    "lkw_nr",
                    "luftfracht",
                    "plomben_nr",
                    "rampe"
                ];
            }
        });
        this
            ._logger
            .log("Transport Constructor!");
    }
    TransportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.input) {
                _this.input.focus();
            }
        }, 300);
    };
    TransportComponent.prototype.handleEvent = function (childData) {
        console.log(childData);
    };
    TransportComponent.prototype.open = function () {
        var _this = this;
        this.dailogRef = this
            .dialog
            .open(confirmDialogComponent);
        this
            .dailogRef
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                if (result == true) {
                    _this.deleteTransports();
                }
                else {
                    console.log(result);
                }
            }
            else {
            }
        });
    };
    TransportComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dateTime = new Date()
            .toISOString()
            .slice(0, 16);
        this.user = this
            ._localstorage
            .getObject('user_token');
        console.log("User Object", this.user);
        this.form = this
            ._fb
            .group({
            fahrzeughalter: [''],
            lkw_nr: [''],
            destination: [''],
            fahrer: [''],
            container: [''],
            plomben_nr: [''],
            adr: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            luftfracht: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            rampe: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            ankunft: [{ value: this.getDate(), disabled: true }],
            abfahrt: [
                {
                    value: "",
                    disabled: true
                }
            ]
        });
        this
            ._appsService
            .getRamps()
            .subscribe(function (res) {
            _this
                ._logger
                .log("getRamps response");
            _this
                ._logger
                .log(res);
            for (var key in res) {
                _this
                    .list
                    .push({ id: key, name: res[key] });
            }
            //this.list = res;  this.form.reset();
        }, function (err) {
            _this
                ._logger
                .error("getRamps error");
            _this
                ._logger
                .error(err);
        });
    };
    TransportComponent.prototype.addInput = function () {
        if (this.shipments.length < 10) {
            this.shipments.push({ value: '' });
            var self = this;
            setTimeout(function () {
                var input = self.elRef.nativeElement.querySelectorAll('.sid');
                input[input.length - 1].focus();
            }, 300);
        }
    };
    TransportComponent.prototype.onSubmit = function () {
        var _this = this;
        this._logger.log(this.shipments);
        this._logger.log(this.form.value);
        if (this.form.valid) {
            var selshipments_1 = [];
            this
                .shipments
                .forEach(function (value) {
                selshipments_1.push(value.value);
            });
            this
                ._logger
                .log(selshipments_1);
            if (selshipments_1.length <= 0) {
                alert("Bitte Sendungs-ID einfügen");
                return false;
            }
            this.form.value['shipment_id'] = selshipments_1;
            this.form.value['ankunft'] = this.getDate();
            this.spinner = true;
            this
                ._logger
                .log(this.form.value);
            this
                ._appsService
                .addTransporter(this.form.value)
                .subscribe(function (res) {
                _this.spinner = false;
                _this
                    ._logger
                    .log("addTransporter response");
                _this.shipments = [{ value: '' }];
                _this
                    ._logger
                    .log(res);
                res.data.from = 'transport';
                _this
                    ._sharedService
                    .publishData(res.data);
                _this
                    .form
                    .reset();
                _this.CreateForm();
            }, function (err) {
                _this._logger.error("addTransporter error");
                _this
                    ._logger
                    .error(err);
                var error = '';
                _this.spinner = false;
                for (var key in err.message) {
                    error += err.message[key][0] + '<br> &nbsp;';
                }
                alert(error);
            });
        }
    };
    TransportComponent.prototype.onEditSubmit = function () {
        var _this = this;
        this
            ._logger
            .log(this.shipments);
        this
            ._logger
            .log(this.form.value);
        if (this.form.valid) {
            var selshipments_2 = [];
            this
                .shipments
                .forEach(function (value) {
                selshipments_2.push(value.value);
            });
            this
                ._logger
                .log(selshipments_2);
            this.form.value['shipment_id'] = selshipments_2;
            this
                ._logger
                .log(this.form.value);
            var obj_1 = this.form.value;
            obj_1.id = this.editTransportObj.id;
            obj_1['ankunft'] = this.editTransportObj['ankunft'];
            this.spinner = true;
            this
                ._appsService
                .updateTransporter(obj_1)
                .subscribe(function (res) {
                _this.spinner = false;
                _this
                    ._logger
                    .log("updateTransporter response");
                _this
                    ._logger
                    .log(res);
                _this.shipments = [{ value: '' }];
                obj_1.from = "edit";
                _this
                    ._sharedService
                    .publishData(obj_1);
                _this
                    .form
                    .reset();
                _this.CreateForm();
                _this.edit = false;
            }, function (err) {
                _this.spinner = false;
                _this
                    ._logger
                    .error("updateTransporter error");
                _this
                    ._logger
                    .error(err);
            });
        }
    };
    TransportComponent.prototype.resetForm = function () {
        this
            .form
            .reset();
    };
    TransportComponent.prototype.deleteTransports = function () {
        var self = this;
        var row = {
            id: this.editTransportObj.id
        };
        this
            ._appsService
            .deleteTransports(row)
            .subscribe(function (res) {
            self.ngOnInit();
            alert("Transport erfolgreich gelöscht.");
            var obj = {
                from: 'delete'
            };
            self.shipments = [{ value: '' }];
            self
                ._sharedService
                .publishData(obj);
            self
                .form
                .reset();
            self.CreateForm();
            self.edit = false;
        }, function (err) {
            alert("Fehler: Transport nicht gelöscht.");
            console.log(err);
        });
    };
    TransportComponent.prototype.parseDateToStringWithFormat = function (date) {
        var result;
        var dd = date
            .getDate()
            .toString();
        var mm = (date.getMonth() + 1).toString();
        var hh = date
            .getHours()
            .toString();
        var min = date
            .getMinutes()
            .toString();
        dd = dd.length === 2
            ? dd
            : "0" + dd;
        mm = mm.length === 2
            ? mm
            : "0" + mm;
        hh = hh.length === 2
            ? hh
            : "0" + hh;
        min = min.length === 2
            ? min
            : "0" + min;
        result = [
            date.getFullYear(),
            '-',
            mm,
            '-',
            dd,
            'T',
            hh,
            ':',
            min
        ].join('');
        return result;
    };
    Object.defineProperty(TransportComponent.prototype, "dateTimeLocal", {
        get: function () {
            return this.parseDateToStringWithFormat(this._dateTimeLocal);
        },
        set: function (v) {
            var actualParsedDate = v
                ? new Date(v)
                : new Date();
            var normalizedParsedDate = new Date(actualParsedDate.getTime() + (actualParsedDate.getTimezoneOffset() * 60000));
            console.log(normalizedParsedDate);
            this._dateTimeLocal = normalizedParsedDate;
        },
        enumerable: true,
        configurable: true
    });
    TransportComponent.prototype.getDate = function () {
        var date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1).toString(), formatedMonth = (month.length === 1)
            ? ("0" + month)
            : month, day = date
            .getDate()
            .toString(), formatedDay = (day.length === 1)
            ? ("0" + day)
            : day, hour = date
            .getHours()
            .toString(), formatedHour = (hour.length === 1)
            ? ("0" + hour)
            : hour, minute = date
            .getMinutes()
            .toString(), formatedMinute = (minute.length === 1)
            ? ("0" + minute)
            : minute, second = date
            .getSeconds()
            .toString(), formatedSecond = (second.length === 1)
            ? ("0" + second)
            : second;
        return formatedDay + "." + formatedMonth + "." + year + " | " + formatedHour + ':' + formatedMinute + " Uhr";
    };
    TransportComponent.prototype.CreateForm = function () {
        this.form = this
            ._fb
            .group({
            fahrzeughalter: [''],
            lkw_nr: [''],
            destination: [''],
            fahrer: [''],
            container: [''],
            plomben_nr: [''],
            adr: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            luftfracht: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            rampe: [
                null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
            ],
            ankunft: [{ value: this.getDate(), disabled: true }],
            abfahrt: [
                {
                    value: "",
                    disabled: true
                }
            ]
        });
    };
    TransportComponent.prototype.backForm = function () {
        this.edit = false;
        this.CreateForm();
        this.shipments = [{
                value: ''
            }];
    };
    return TransportComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdInputDirective */]),
    __metadata("design:type", Object)
], TransportComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('childData'),
    __metadata("design:type", String)
], TransportComponent.prototype, "incomingData", void 0);
TransportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-transport', template: __webpack_require__("../../../../../src/app/apps/transport/transport.component.html"), styles: [__webpack_require__("../../../../../src/app/apps/transport/transport.component.scss")] }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__apps_service__["a" /* AppsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apps_service__["a" /* AppsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__libs_localstorage__["a" /* LocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__libs_localstorage__["a" /* LocalStorage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */]) === "function" && _h || Object])
], TransportComponent);

var confirmDialogComponent = (function () {
    function confirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.yes = true;
        this.no = false;
    }
    return confirmDialogComponent;
}());
confirmDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-jazz-dialog', template: "\n  <h5 class=\"mt-0\">Transport l\u00F6schen</h5>\n  <p style=\"text-align:center;height: 35px\">\n    Soll dieser Transport wirklich gel\u00F6scht werden?\n  </p>\n  <div style=\"text-align: center;\">\n     <button md-raised-button md-raised-button color=\"primary\" (click)=\"dialogRef.close(yes)\">Ja</button>\n     <button md-raised-button md-raised-button color=\"warn\" (click)=\"dialogRef.close(no)\">Abbrechen</button>  \n  </div>"
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdDialogRef */]) === "function" && _j || Object])
], confirmDialogComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=transport.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngx-resize-watcher.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxResizeWatcherDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgxResizeWatcherDirective = (function () {
    function NgxResizeWatcherDirective(table, ref) {
        this.table = table;
        this.ref = ref;
    }
    NgxResizeWatcherDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this.table && this.table.element.clientWidth !== this.latestWidth) {
            setTimeout(function () {
                _this.latestWidth = _this.table.element.clientWidth;
                _this.table.recalculate();
                _this.ref.markForCheck();
            }, 250);
        }
    };
    return NgxResizeWatcherDirective;
}());
NgxResizeWatcherDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngx-resize-watcher]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], NgxResizeWatcherDirective);

var _a, _b;
//# sourceMappingURL=ngx-resize-watcher.directive.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_image_upload_module__ = __webpack_require__("../../../../angular2-image-upload/lib/image-upload.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_image_upload_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_image_upload_module__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__lib_image_upload_module__, "ImageUploadModule")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_image_upload_module__["ImageUploadModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_image_upload_image_upload_component__ = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image-upload.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_image_upload_image_upload_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_image_upload_image_upload_component__);
/* unused harmony reexport ImageUploadComponent */
/* unused harmony reexport FileHolder */




/***/ }),

/***/ "../../../../angular2-image-upload/lib/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.fileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    return FileDropDirective;
}());
FileDropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[fileDrop]'
            },] },
];
FileDropDirective.ctorParameters = function () { return []; };
FileDropDirective.propDecorators = {
    'accept': [{ type: core_1.Input },],
    'fileOver': [{ type: core_1.Output },],
    'fileDrop': [{ type: core_1.Output },],
    'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
};
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../angular2-image-upload/lib/file-drop.directive.js");
var image_upload_component_1 = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image-upload.component.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image.service.js");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    return ImageUploadModule;
}());
ImageUploadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, http_1.HttpModule],
                declarations: [image_upload_component_1.ImageUploadComponent, file_drop_directive_1.FileDropDirective],
                exports: [image_upload_component_1.ImageUploadComponent]
            },] },
];
ImageUploadModule.ctorParameters = function () { return []; };
exports.ImageUploadModule = ImageUploadModule;


/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload/image-upload.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image.service.js");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = function (data) { return data; };
        this.buttonCaption = 'Select Images';
        this.cssClass = 'img-ul';
        this.clearButtonCaption = 'Clear';
        this.dropBoxMessage = 'Drop your images here!';
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.uploadedFiles = [];
        this.removed = new core_1.EventEmitter();
        this.uploadStateChanged = new core_1.EventEmitter();
        this.uploadFinished = new core_1.EventEmitter();
        this.pendingFilesCounter = 0;
        this.onFileOver = function (isOver) { return _this.fileOver = isOver; };
        this.countRemainingSlots = function () { return _this.max - _this.fileCounter; };
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.removed.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        this.inputElement.nativeElement.value = '';
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.removed.emit(file);
    };
    ImageUploadComponent.prototype.ngOnChanges = function (changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    };
    ImageUploadComponent.prototype.onFileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.uploadStateChanged.emit(false);
        }
    };
    ImageUploadComponent.prototype.processUploadedFiles = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var data = this.uploadedFiles[i];
            var fileBlob = void 0, file = void 0, fileUrl = void 0;
            if (data instanceof Object) {
                fileUrl = data.url;
                fileBlob = (data.blob) ? data.blob : new Blob([data]);
                file = new File([fileBlob], data.fileName);
            }
            else {
                fileUrl = data;
                fileBlob = new Blob([fileUrl]);
                file = new File([fileBlob], fileUrl);
            }
            this.files.push(new FileHolder(fileUrl, file));
        }
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var file, beforeUploadResult, img, reader;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = files[i];
                                        if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            this_1.showFileTooLargeMessage = true;
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.beforeUpload({ file: file, url: this_1.url, abort: false })];
                                    case 1:
                                        beforeUploadResult = _a.sent();
                                        if (beforeUploadResult.abort) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            return [2 /*return*/, "continue"];
                                        }
                                        img = document.createElement('img');
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', function (event) {
                                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                            _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                            _this.files.push(fileHolder);
                                        }, false);
                                        reader.readAsDataURL(beforeUploadResult.file);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < filesToUploadNum)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder, url, customForm) {
        var _this = this;
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    return ImageUploadComponent;
}());
ImageUploadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'image-upload',
                template: "\n    <div\n         fileDrop\n         [accept]=\"supportedExtensions\"\n         (fileOver)=\"onFileOver($event)\"\n         (fileDrop)=\"onFileChange($event)\"\n         [ngClass]=\"cssClass\"\n         [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \n         [ngStyle]=\"style?.layout\"\n    >\n      <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \n        <label class=\"img-ul-upload img-ul-button\" [ngStyle]=\"style?.selectButton\">\n          <span [innerText]=\"buttonCaption\"></span>\n          <input\n            type=\"file\"\n            [accept]=\"supportedExtensions\"\n            multiple (change)=\"onFileChange(input.files)\"\n            #input>\n        </label>\n        <label *ngIf=\"fileCounter > 0\" class=\"img-ul-clear img-ul-button\" (click)=\"deleteAll()\" [ngStyle]=\"style?.clearButton\">\n          <span [innerText]=\"clearButtonCaption\"></span>\n        </label>\n        <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\n      </div>\n\n      <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\n\n      <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\n        <div\n          class=\"img-ul-image\"\n          *ngFor=\"let file of files\"\n          [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n        >\n          <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\n            <div class=\"img-ul-spinning-circle\"></div>\n          </div>\n          <div *ngIf=\"!file.pending\" class=\"img-ul-x-mark\" (click)=\"deleteFile(file)\">\n            <span class=\"img-ul-close\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n    .img-ul {\n        --active-color: #3C9;\n        --common-radius: 3px;\n        background-color: #f8f8f8;\n        border-radius: var(--common-radius);\n        border: #d0d0d0 dashed 1px;\n        font-family: sans-serif;\n        position: relative;\n        color: #9b9b9b;\n    }\n\n    .img-ul-file-is-over {\n        border: var(--active-color) solid;\n    }\n\n    .img-ul-hr-inline-group:after {\n        clear: both;\n        content: \"\";\n        display: table;\n    }\n\n    .img-ul-file-upload {    \n        padding: 16px;\n    }\n\n    .img-ul-drag-box-msg {    \n        display: inline-block;\n        font-weight: 600;\n        margin-left: 12px;\n        padding-top: 14px;\n    }\n\n    label.img-ul-button input[type=file] {\n        display: none;\n        position: fixed;\n        top: -99999px;\n    }\n\n    .img-ul-clear {\n        background-color: #FF0000;\n    }\n\n    .img-ul-upload {\n        background-color: var(--active-color);\n    }\n\n    .img-ul-button {\n        -moz-box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        -webkit-box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        float: left;\n        font-size: 1.25em;\n        font-weight: 500;\n        padding: 10px;\n        text-transform: uppercase;\n    }\n\n    .img-ul-button:active span {\n        display: block;\n        position: relative;\n        top: 1px;\n    }\n\n    .img-ul-container {\n        background-color: #fdfdfd;\n        padding: 0 10px;\n    }\n\n    .img-ul-image {    \n        background: center center no-repeat;\n        background-size: contain;\n        display: inline-block;\n        float: left;\n        height: 86px;\n        margin: 6px;\n        position: relative;\n        width: 86px;\n    }\n\n    .img-ul-x-mark {\n        background-color: #000;\n        border-radius: 2px;\n        color: #FFF;\n        cursor: pointer;\n        float: right;\n        height: 20px;\n        margin: 2px;\n        opacity: .7;\n        text-align: center;\n        width: 20px;\n    }\n\n    .img-ul-close {\n        height: 20px;\n        opacity: .7;\n        padding-right: 3px;\n        position: relative;\n        width: 20px;\n    }\n\n    .img-ul-x-mark:hover .img-ul-close {\n        opacity: 1;\n    }\n\n    .img-ul-close:before, .img-ul-close:after {\n        background-color: #FFF;\n        border-radius: 2px;\n        content: '';\n        height: 15px;\n        position: absolute;\n        top: 0;\n        width: 2px;\n    }\n\n    .img-ul-close:before {\n        transform: rotate(45deg);\n    }\n\n    .img-ul-close:after {\n        transform: rotate(-45deg);\n    }\n\n    .img-ul-loading-overlay {\n        background-color: #000;\n        bottom: 0;\n        left: 0;\n        opacity: .7;\n        position: absolute;\n        right: 0;\n        top: 0;\n    }\n\n    .img-ul-spinning-circle {\n        height: 30px;\n        width: 30px;\n        margin: auto;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        border-radius: 50%;\n        border: 3px solid rgba(255, 255, 255, 0);\n        border-top: 3px solid #FFF;\n        border-right: 3px solid #FFF;\n        -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n        animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .img-ul-file-too-large {\n        color: red;\n        padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n  "]
            },] },
];
ImageUploadComponent.ctorParameters = function () { return [
    { type: image_service_1.ImageService, },
]; };
ImageUploadComponent.propDecorators = {
    'beforeUpload': [{ type: core_1.Input },],
    'buttonCaption': [{ type: core_1.Input },],
    'cssClass': [{ type: core_1.Input, args: ['class',] },],
    'clearButtonCaption': [{ type: core_1.Input },],
    'dropBoxMessage': [{ type: core_1.Input },],
    'fileTooLargeMessage': [{ type: core_1.Input },],
    'headers': [{ type: core_1.Input },],
    'max': [{ type: core_1.Input },],
    'maxFileSize': [{ type: core_1.Input },],
    'preview': [{ type: core_1.Input },],
    'partName': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'supportedExtensions': [{ type: core_1.Input, args: ['extensions',] },],
    'url': [{ type: core_1.Input },],
    'withCredentials': [{ type: core_1.Input },],
    'uploadedFiles': [{ type: core_1.Input },],
    'removed': [{ type: core_1.Output },],
    'uploadStateChanged': [{ type: core_1.Output },],
    'uploadFinished': [{ type: core_1.Output },],
    'inputElement': [{ type: core_1.ViewChild, args: ['input',] },],
};
exports.ImageUploadComponent = ImageUploadComponent;


/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload/image.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.postImage = function (url, image, headers, partName, customFormData, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var options = new http_1.RequestOptions();
        if (withCredentials) {
            options.withCredentials = withCredentials;
        }
        if (headers) {
            options.headers = new http_1.Headers(headers);
        }
        var formData = new FormData();
        for (var key in customFormData) {
            formData.append(key, customFormData[key]);
        }
        formData.append(partName, image);
        return this.http.post(url, formData, options);
    };
    return ImageService;
}());
ImageService.decorators = [
    { type: core_1.Injectable },
];
ImageService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.ImageService = ImageService;


/***/ })

});
//# sourceMappingURL=apps.module.chunk.js.map