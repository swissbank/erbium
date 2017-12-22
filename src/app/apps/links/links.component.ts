import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Input,
  Output,
  Inject
} from '@angular/core';
import * as _ from "lodash";
import { DomSanitizer } from '@angular/platform-browser';


import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import {Router} from '@angular/router';
import {Logger} from "angular2-logger/core";

import {ManagementService} from './../../management/management.service';
import {AppsService} from '../apps.service';
import {SharedService} from '../shared.service';
import {LocalStorage} from '../../libs/localstorage';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import {Socket} from 'ng-socket-io';
import { ColdObservable } from 'rxjs/testing/ColdObservable';
import { ListsComponent } from 'app/material/lists/lists.component';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  rows = [];
  temp = [];
  count = 0;
  offset = 0;
  limit = 20;
  dialogRef : MdDialogRef < JazzDialogComponent >;
  dailogRef :  MdDialogRef < PopDialogComponent >;
  dailogSig :  MdDialogRef < PopSignatureDialogComponent >;
  lastCloseResult : string;
  config : MdDialogConfig = {
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
  public next_page_url;
  public forklift :any;
  public last_page_url;
  public totalCount;
  public current_page;
  public currentUserEmail : any;
  public currentId;
  public current_forklift_id;
  public list = [];
  public updateRamp;
  public currentTransport : any = {
    shipmint: [
      {
        shipmint_id: 1
      }
    ],
    fahrers: '',
    fahrzeughalter: '',
    destination: ''
  };
  public width : number = 300;
  public height : number = 300;
  public user : any;
  public selectedIndex : number = 0;
  public noFooter : boolean = false;
  public label : string = 'Unterschrift Fahrer';
  opentabs = false;
  public tab1 = false;
  public tab2 = true;
  public tab3 = true;
  public tab4 = true;
  public tab5 = true;
  public newforklift = 0;
  public images = [];

  public selectedObject : any = {};
  @Input('parentData')incomingData : any;

  @Output('childData')outgoingData = new EventEmitter < any > ();
  public sendData(data : any) {
    data.from = 'links'
    this
      ._sharedService
      .publishData(data);
  }
  public search : any;
  public user_id : any = 1;
  public transport_id : any = 1;
  public fahrzeugausweis_21 : any = null;
  public adr_schulungsbescheinigung_22 : any = null;
  public adr_schulungsbescheinigung_22_answeis_nr : any = "";
  public adr_schulungsbescheinigung_22_gultig_bis : any = "";
  public lichtbildausweis_23 : any = 1;
  public arbeitsbescheinigung_fahrer_24 : any = null;
  public vertrauensabfertigung_25 : any = null;
  public orangefarbene_warntafeln_26 : any = null;
  public schriftliche_weisungen_27 : any = null;
  public bewegungssicherung_31 : any = null;
  public visuelle_ueberpruefung_32 : any = null;
  public ladungsbruecke_besenrein_33 : any = null;
  public ladungssicherungsmittel_34 : any = null;
  public ladungssicherungsmittel_34_gurte : any = null;
  public ladungssicherungsmittel_34_spannstangen : any = null;
  public ladungssicherungsmittel_34_antirutschmatten : any = null;
  public ladungssicherungsmittel_34_leerpaletten : any = null;
  public werbefrei_fuer_tierfutter_41 : any = null;
  public lebensmittel_futtermittel_42 : any = null;
  public persoenliche_schutzausruestung_43 : any = null;
  public persoenliche_schutzausruestung_43_plomben_nr : any = null;
  public persoenliche_schutzausruestung_43_schutzbrille : any = null;
  public persoenliche_schutzausruestung_43_chem_handschuhe : any = null;
  public persoenliche_schutzausruestung_43_warnweste : any = null;
  public persoenliche_schutzausruestung_43_vollschutzmaske : any = null;
  public persoenliche_schutzausruestung_43_augenspuelflasche : any = null;
  public persoenliche_schutzausruestung_43_handlampe : any = null;
  public pulverloescher_plombiert_441 : any = '';
  public pulverloescher_plombiert_441_pruefung : any = null;
  public unterkeil_schaufel_442 : any = null;
  public warnzeichen_warndreiecke_443 : any = null;
  public auffangbehaelter_444 : any = null;
  public kanalisationsabdeckung_445 : any = null;
  public ibc_prueffrist_51 : any = null;
  public ibc_prueffrist_51_date : any = null;
  public unbeschaedigte_verandstuecke_un_cod_52 : any = null;
  public wirksame_ladungssicherung_53 : any = null;
  public ladungssicherung_foto_54 : any = null;
  public signature : Boolean = false;
  public adr = true;
  public prozess : any = 2;

  constructor(public sanitizer: DomSanitizer, public socket : Socket, private _router : Router, private _logger : Logger, private _managementService : ManagementService, public appServie : AppsService, public _localstorage : LocalStorage, public _sharedService : SharedService, public dialog : MdDialog) {
    this._sharedService
      .caseNumber$
      .subscribe(data => {
        if (data && data['from'] == 'links') {
          console.log("Same Componenets");
        } else if (data && data['from'] == 'edit') {
          this.ngOnInit();
        } else if(data && data['from'] == 'popup'){
          this.closeWizards();
        } else {
          this.ngOnInit();
        }
      });
    let self = this;
    this.socket
      .on('new-record', function (data) {
        if (data.from == 'add') {
          self.fun(data);
        } else {
          console.log("Its from list");
        }
      });
    this.socket.on('prozess', function(data){
      self.fun(data);
    });  
  }

  public fun(data) {
    this.ngOnInit();
  }

  public searchTransports() {
    var self = this;
    this.appServie
      .searchTransports("1", this.search)
      .subscribe(data => {
        self.customData['rows'] = data.data.data;
        self.customData.count = data.data.total;
        self.customData.offset = 0;
        self.customData.limit = 20;
      }, err => {
        console.log(err);
      });
  }

  public open(row) {
    this.currentUserEmail = this.user.user.email;
    var obj = {
      data: {
        currentUserEmail: this.currentUserEmail
      }
    }
    this.dialogRef = this
      .dialog
      .open(JazzDialogComponent, obj);
    this
      .dialogRef
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.sendEmail({email: result, id: row.id});
        } else {}
        this.lastCloseResult = result;
        this.dialogRef = null;
      });
  }

  public openView(row) {
    var obj = {
      data: {
        row: row
      }
    }
    console.log(this.newforklift);
    this.dailogRef = this
      .dialog
      .open(PopDialogComponent, obj);
    this.dailogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          console.log(result);
        }
        this.dailogRef = null;
      });
  }

  public openViewSig() {
    var obj = {
      data: {
        row: this.forklift
      }
    }
    if(this.currentTransport.forklift){
      this.newforklift = this.currentTransport.forklift;
    }
    this.dailogRef = this
      .dialog
      .open(PopSignatureDialogComponent, obj);
    this.dailogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          console.log(result);
        }
        this.dailogRef = null;
      });
  };

  customData = {
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
  }

  customDatas = {
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
  }

  documentsQuestions = {
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
  }
  documentsQuestions2 = {
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
  }
  stateControl = {
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
  }

  controlOfTransportUnit = {
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
        question2: "(leicher inhalt wie unten)",
        question3: "1x geschlossene Schutzbrille",
        question4: "1x Paar lange chemikalienbeständige Handschuhe EN374/EN388",
        question5: "1x Warnweste (EN 471) ",
        question6: "1x Vollschutzmaske (resp. Halbmaske) mit Mehrbereichsfilter wie ABEK (EN 141)",
        question7: "1x Augenspülflasche mit reinem Wasser",
        question8: "1x Handlampe Ex. sicher",
        question9: "Pulverlöscher plombiert",
        question10: 'Fälligkeit der nächsten Prüfung:',
        question11: `'1x 2kg + 10kg (min. davon 1x 6kg) für alle Beförderungseinheiten  > 7.5 to
                     1x 2kg + 1x 6kg für alle Beförderungseinheiten > 3.5 to bis  7.5 to
                     2x 2kg für alle Beförderungseinheiten bis 3.5 to'`,
        question12: `1x Unterkeil pro Fahrzeug
                    1x Schaufel`,
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
  controlOfTransportUnit2 = {
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
  }

  protectionOfPublic = {
    rows: [
      {
        sr: '4',
        question: `Intermediate Bulk Container (IBC); Datum der letzten Prüfung: (ADR 6.5.1)    Ist die Prüffrist von  2.5 Jahren seit letzter Prüfung eingehalten?  Wenn Nein, dürfen die IBCs nicht verladen werden.`,
        question2: `
        Wurden nur unbeschädigte einwandfreie Versandstücke mit UN Codierung übergeben? 
        `,
        question3: `Wurde eine wirksame Ladungssicherung angebracht?  
        (Antirutschmatten, keine Leerräume, Formschluss der Ladung, Verteilung des Gewichts auf die Achsen, Ware festgemacht und verzurrt)
        `,
        question4: `Wurde die Ladungssicherung mit Foto dokumentiert
        `,
        question5: "1 Auffangbehälter",
        question6: "1 Kanalisationsabdeckung"
      }
    ],
    count: 10,
    offset: 0,
    limit: 10
  }

  packingAndClosingControl = {
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
  }

  transportDocuments = {
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
  }

  public OnchangeRamp() {
    var obj = {
      rampe: this.updateRamp
    }
    this
      .appServie
      .updateRampe(obj, this.currentTransport.id)
      .subscribe(res => {
        console.log("Update Rampe",res);
      }, err => {
        console.log("Error Update Rampe",err);
      });
  }

  ngOnInit() {

    this
      .appServie
      .getRamps()
      .subscribe(res => {
        for (let key in res) {
          this
            .list
            .push({id: key, name: res[key]})
        }
      }, err => {
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
  }
  dataURLtoFiles(dataurl : any, filename : any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }
  page(offset, limit) {
    const start = offset * limit;
    const end = start + limit;
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
  }
  onPage(event) {
    this.page(event.offset, event.limit);
  }
  fetchData(cb, page) {
    var self = this;
    this
      .appServie
      .getAllTransporters(page)
      .subscribe(res => {
        self.next_page_url = res.data.next_page_url;
        self.last_page_url = res.data.last_page;
        self.current_page = res.data.current_page;
        self.totalCount = res.data.total;
        cb(res);
      }, err => {
        this
          ._logger
          .error(err);
      })
  }
  sendEmail(row) {
    this
      .appServie
      .sendEmail(row, row.id)
      .subscribe(res => {
        alert("Bericht erfolgreich gesendet.");
      }, err => {
        alert("Fehler: Der Bericht wurde nicht gesendet.");
        console.log(err);
      })
    console.log(row);
  }
  openTabs(id, event, forklift_id, row) {
    if (row) {
      if(row['forklift'] && typeof row['forklift'] == 'object'){
        this.forklift = row['forklift'];
      }
      if (row.adr == 'Ja') {}
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
      row.from = 'links'
      this
        ._sharedService
        .publishData(row);
      this.updateRamp = row['rampe'];
      if (row['forklift'] && typeof row['forklift'] == "object") {
        for (let key in row.forklift) {
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
        this.current_forklift_id =this.newforklift;
        this.currentTransport = row;
        if (row['forklift']['image']) {
          this.images = row['forklift']['image'];
        }
        for (let key in row.forklift) {
          if ((this[key] || this[key] == null || this[key] == "" || !this[key]) && key != 'id') {
            this[key] = row.forklift[key] + "";
          }
        }
        if (row['forklift']['prozess']) {
          for (let i = 1; i <= row['forklift']['prozess']; i++) {
            this['tab' + i] = false;
          }
          this.selectedIndex = row['forklift']['prozess'] - 1;
        }
      } else {
        this.currentId = id;
        if ((typeof this.currentTransport['forklift']) == 'object' && this.currentTransport['forklift'] != null) {
          this.current_forklift_id = this.currentTransport['forklift']['id']
            ? this.currentTransport['forklift']['id']
            : forklift_id;
          this.newforklift = this.current_forklift_id;
        } else {
          this.current_forklift_id = forklift_id;
          this.newforklift = this.current_forklift_id;
        }
      }

      for (var i = 0; i < this.customData['rows'].length; i++) {
        if (id == this.customData['rows'][i]['id']) {
          this.customData['rows'][i]['forklift'] = this.user.user.id;
        }
      }
      if(row['forklift'] && typeof row['forklift'] == 'object'){
        this.forklift = row['forklift'];
      }
      return;
    }
    var obj = {
      id: id
    }
    this.currentId = id;
    this.current_forklift_id = forklift_id;
    this
      .appServie
      .pickAndstart(obj)
      .subscribe(res => {
        console.log(res);
        this.currentTransport = res.data;
        if (!this.currentTransport['shipment'] || !this.currentTransport['shipment'] == null) {
          this.currentTransport['shipment'] = [
            {
              shipmint_id: ''
            }
          ];
        }
        if ((typeof res.data['forklift']) == 'object' && res.data['forklift'] != null) {
          this.forklift = res.data['forklift'];
          this.newforklift = res.data['forklift']['id'];
        }
        this.opentabs = true;
        console.log(res);
      }, err => {
        if (err.message == "Transport already start please chose any other transport.") {
          alert("Der Transport hat bereits begonnen, bitte wählen Sie einen anderen Transport aus" +
              ".");
          this.ngOnInit();
          console.log(err);
        } else {
          alert(err.message);
          console.log(err);
        }

      })

  }
  closeTabs() {
    this.opentabs = false;
    this.adr = true;
    this.ngOnInit();
  }

  editTransport(obj) {}

  onClearHandler() {
    console.log('onclear clicked...');
    // this.opentabs = false;
  }

  onSaveHandler(data ,row) {
    var image = this.dataURLtoFiles(data, 'signature.png')
    this.postSignatue(image, row);
  }

  onSaveHandler2(data ,row) {
    var image = this.dataURLtoFiles(data, 'signature.png')
    this.postSignatue2(image, row);
  }
  changeTab(event) {

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
  }
  currentDate = this.getDate();
  changeListener($event, row) : void {
    this.postFile($event.target);
  }

  postFile(inputValue : any) {
    var formData = new FormData();
    formData.append("picture[]", inputValue.files[0]);
    if (this.images.length >= 5) {
      alert("Du hast bereits Bilder hochgeladen");
      return false;
    }
    this
      .appServie
      .uploadForkliftImage(formData, this.newforklift)
      .subscribe(res => {
        console.log(res);
        this.images = res['data']['image'];
        this.opentabs = true;
      }, err => {
        this
          ._logger
          .error(err);
      })
  }

  postSignatue(inputValue, row) : void {
    var formData = new FormData();
    formData.append("signature", inputValue);
    this
      .appServie
      .uploadForkliftSignature(formData, this.newforklift)
      .subscribe(res => {
        this.signature = true;
        alert("Signatur hochgeladen");
      }, err => {
        this
          ._logger
          .error(err);
      })
  }

  postSignatue2(inputValue, row) : void {
    var formData = new FormData();
    formData.append("signature", inputValue);
    this
      .appServie
      .uploadForkliftSignature(formData, row.id)
      .subscribe(res => {
        this.signature = true;
        alert("Signatur hochgeladen");
      }, err => {
        this
          ._logger
          .error(err);
      })
  }
  restoreVars(){
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
  }
  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }
  getDate() {
    var date = new Date(),
      year = date.getFullYear(),
      month = (date.getMonth() + 1).toString(),
      formatedMonth = (month.length === 1)
        ? ("0" + month)
        : month,
      day = date
        .getDate()
        .toString(),
      formatedDay = (day.length === 1)
        ? ("0" + day)
        : day,
      hour = date
        .getHours()
        .toString(),
      formatedHour = (hour.length === 1)
        ? ("0" + hour)
        : hour,
      minute = date
        .getMinutes()
        .toString(),
      formatedMinute = (minute.length === 1)
        ? ("0" + minute)
        : minute,
      second = date
        .getSeconds()
        .toString(),
      formatedSecond = (second.length === 1)
        ? ("0" + second)
        : second;
    return formatedDay + "." + formatedMonth + "." + year + " | " + formatedHour + ':' + formatedMinute + " Uhr";
  }

  deleteImage(row, index) {
    console.log(index);
    let id = this.current_forklift_id;
    this
      .appServie
      .deleteImage(row, id)
      .subscribe(res => {
        console.log(res);
        this
          .images
          .splice(index, 1);
      }, err => {
        console.log(err);
      })
    console.log(row);
  }

  public updateForkliftTransport(process) {
    this.user = this
      ._localstorage
      .getObject('user_token');
  
    if (process == 1) {
      var obj = {
        transport_id: this.currentTransport.id,
        user_id: this.user.user.id
      }
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
          alert("Bitte prüfen Sie die Punkte vollständig.")
          return false;
        }
        obj[requirements[i]] = this[requirements[i]];

      }
      obj['prozess'] = 1;
      obj['newforklift'] = this.newforklift;
      this
        .appServie
        .updateForklist(obj)
        .subscribe(res => {
          console.log(res);
          var id = '';
          if (res['data']) {
            if (res['data']['id']) {
              this.current_forklift_id = res['data']['id'];
              this.forklift = res['data'];
            } else {
              if (this.currentTransport['forklift']) {
                id = this.currentTransport['forklift']['id'];
                this.current_forklift_id = this.currentTransport['forklift']['id'];
              } else {
                if (this.currentTransport['forklift_id']) {
                  id = this.currentTransport['forklift_id'];
                  this.current_forklift_id = id;
                } else {
                  if (!this.current_forklift_id) {
                    this.current_forklift_id = res['data']['id'];
                  }
                }
              }
            }
          }
          this.tab2 = false;
          this.changeTab('next');
        }, err => {
          this
            ._logger
            .error("updateForkliftTransport Error");
          this
            ._logger
            .error(err);
        })
    } else if (process == 2) {

      var obj = {
        transport_id: this.currentTransport.id,
        user_id: this.user.user.id
      }

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
        .subscribe(res => {
          this
            ._logger
            .log("updateForkliftTransport Transports");
          this
            ._logger
            .log(res);
          console.log(res);
          var id = '';
          if (res['data']) {
            this.forklift = res['data'];
            if (res['data']['id']) {
              this.current_forklift_id = res['data']['id'];
            } else {
              if (this.currentTransport['forklift']) {
                id = this.currentTransport['forklift']['id'];
                this.current_forklift_id = this.currentTransport['forklift']['id'];
              } else {
                if (this.currentTransport['forklift_id']) {
                  id = this.currentTransport['forklift_id'];
                  this.current_forklift_id = id;
                } else {
                  if (!this.current_forklift_id) {
                    this.current_forklift_id = res['data']['id'];
                  }
                }
              }
            }
          }
          this.tab3 = false;
          this.changeTab('next');
        }, err => {
          this
            ._logger
            .error("updateForkliftTransport Error");
          this
            ._logger
            .error(err);
        })

    } else if (process == 3) {
      var obj = {
        transport_id: this.currentTransport.id,
        user_id: this.user.user.id
      }
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
          alert("Bitte prüfen Sie die Punkte vollständig.")
          return false;
        }
        obj[requirements[i]] = this[requirements[i]];

      }
      obj['prozess'] = 3;
      obj['newforklift'] = this.newforklift;

      this
        .appServie
        .updateForklist(obj)
        .subscribe(res => {
          this
            ._logger
            .log("updateForkliftTransport Transports");
          this
            ._logger
            .log(res);
          console.log(res);
          var id = '';
          if (res['data']) {
            this.forklift = res['data'];
            if (res['data']['id']) {
              this.current_forklift_id = res['data']['id'];
            } else {
              if (this.currentTransport['forklift']) {
                id = this.currentTransport['forklift']['id'];
                this.current_forklift_id = this.currentTransport['forklift']['id'];
              } else {
                if (this.currentTransport['forklift_id']) {
                  id = this.currentTransport['forklift_id'];
                  this.current_forklift_id = id;
                } else {
                  if (!this.current_forklift_id) {
                    this.current_forklift_id = res['data']['id'];
                  }
                }
              }
            }
          }
          this.changeTab('next');
          this.tab4 = false;
        }, err => {
          this
            ._logger
            .error("updateForkliftTransport Error");
          this
            ._logger
            .error(err);
        })

    } else if (process == 4) {
      var obj = {
        transport_id: this.currentTransport.id,
        user_id: this.user.user.id
      }
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
        .subscribe(res => {
          this
            ._logger
            .log("updateForkliftTransport Transports");
          this
            ._logger
            .log(res);
          console.log(res);
          var id = '';
          if (res['data']) {
            this.forklift = res['data'];
            if (res['data']['id']) {
              this.current_forklift_id = res['data']['id'];
            } else {
              if (this.currentTransport['forklift']) {
                id = this.currentTransport['forklift']['id'];
                this.current_forklift_id = this.currentTransport['forklift']['id'];
              } else {
                if (this.currentTransport['forklift_id']) {
                  id = this.currentTransport['forklift_id'];
                  this.current_forklift_id = id;
                } else {
                  if (!this.current_forklift_id) {
                    this.current_forklift_id = res['data']['id'];
                  }
                }
              }
            }
          }
          this.tab5 = false;
          this.changeTab('next');
        }, err => {
          this
            ._logger
            .error("updateForkliftTransport Error");
          this
            ._logger
            .error(err);
        })

    } else if (process == 5) {
      var obj = {
        transport_id: this.currentTransport.id,
        user_id: this.user.user.id
      }
      var requirements = ['signature'];

      for (var i = 0; i < requirements.length; i++) {
        if (this.signature == false) {
          alert("Bitte prüfen Sie die Punkte vollständig.")
          return false;
        }
      }
      obj['prozess'] = 5;
      obj['abfahrt'] = this.currentDate;
      obj['newforklift'] = this.newforklift;

      var updateTranspor = {
        id: this.currentTransport.id,
        abfahrt: this.currentDate
      }
      this
        .appServie
        .updateTransporter(updateTranspor)
        .subscribe(res => {
          this
            ._logger
            .log("updateTransporter Transports");

        }, err => {
          this
            ._logger
            .error("updateTransporter Error");
          this
            ._logger
            .error(err);
        })
      this
        .appServie
        .updateForklist(obj)
        .subscribe(res => {
          this._logger.log(res);
          this.selectedIndex = 1;
          var id = '';
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
        }, err => {
          this._logger.error("updateForkliftTransport Error");
          this._logger.error(err);
        });
    }
  }
  changeTabPositon (event){
    this.selectedIndex = event.index;
  };
  public closeWizards(){
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
  }
}

//Dailog  Componenet

@Component({selector: 'app-jazz-dialog', template: `
  <h5 class="mt-0">Bericht senden</h5>
  <p style="text-align:center;height: 35px">
     <md-input-container class="mb-1" style="width: 100%;height: 60px;">
       <input mdInput [(ngModel)]="currentUserEmail" placeholder="E-Mail" type="email">
     </md-input-container>
  </p>
  <div style="text-align: right"> <button md-raised-button md-raised-button color="primary" (click)="dialogRef.close(currentUserEmail)">Senden</button> </div>`})
export class JazzDialogComponent {
  public currentUserEmail;
  constructor(public dialogRef : MdDialogRef < JazzDialogComponent >) {
    this.currentUserEmail = this.dialogRef._containerInstance.dialogConfig.data.currentUserEmail;
  }
}


@Component({selector: 'pop-jazz-dialog', templateUrl: `./transportview.html`})
export class PopDialogComponent {
public row;
constructor(public dialogRef : MdDialogRef < PopDialogComponent >, public sanitizer: DomSanitizer) {
  this.row = this.dialogRef._containerInstance.dialogConfig.data.row;
  this.row.url = 'https://erbium.ch/backend/api/transports/pdf/report/'+this.row.id;
}
}


@Component({
  providers:[LinksComponent],
  selector: 'pop-sig-dialog',
  template: `
<div style="margin-top: 5%; display: inline-block;margin-bottom: 10px;">
<signature-pad (onSave)="onSaveHandler($event, row)" (onClear)="onClearHandler()" [width]="width" [height]="listComponent.height" [hideFooter]="listComponent.noFooter"
  [label]="label">
</signature-pad>
<div style="display:inline-block; text-align:right;margin-left: 26%; margin-top: 8%;">
  <b>{{currentDate}}</b>
</div>
<button md-raised-button color="primary" style="width: 100%; margin-top: 30px;" (click)="updateForkliftTransport(5)"> Prüfen für diesen Transport abschliessen</button>
</div>
`})
export class PopSignatureDialogComponent  {
public row;
public noFooter : boolean = false;
public label : string = 'Unterschrift Fahrer';
public width : number = 300;
public height : number = 300;
public signature : any;
public user :any;
onClearHandler() {
  console.log('onclear clicked...');
}

onSaveHandler(data, row) {
  this.listComponent.onSaveHandler2(data, row); 
  this.signature = true;
}
getDate() {
  var date = new Date(),
    year = date.getFullYear(),
    month = (date.getMonth() + 1).toString(),
    formatedMonth = (month.length === 1)
      ? ("0" + month)
      : month,
    day = date
      .getDate()
      .toString(),
    formatedDay = (day.length === 1)
      ? ("0" + day)
      : day,
    hour = date
      .getHours()
      .toString(),
    formatedHour = (hour.length === 1)
      ? ("0" + hour)
      : hour,
    minute = date
      .getMinutes()
      .toString(),
    formatedMinute = (minute.length === 1)
      ? ("0" + minute)
      : minute,
    second = date
      .getSeconds()
      .toString(),
    formatedSecond = (second.length === 1)
      ? ("0" + second)
      : second;
  return formatedDay + "." + formatedMonth + "." + year + " | " + formatedHour + ':' + formatedMinute + " Uhr";
}

public updateForkliftTransport(prozess){
  this.user = this._localstorage.getObject('user_token');
  var obj = {
    transport_id: this.row.id,
    user_id: this.user.user.id
  }
  var requirements = ['signature'];

  for (var i = 0; i < requirements.length; i++) {
    if (this.signature == false) {
      alert("Bitte prüfen Sie die Punkte vollständig.")
      return false;
    }
  }
  obj['prozess'] = 5;
  obj['abfahrt'] = this.getDate();
  obj['newforklift'] = this.row.id;
  this
    .appServie
    .updateForklist(obj)
    .subscribe(res => {
     console.log(res);
     this._sharedService.publishData({
      from:'popup'
    });
     this.dialogRef.close();
    }, err => {
      console.log(err);
    });

  }
constructor(public _sharedService : SharedService, public _localstorage:LocalStorage,public appServie:AppsService,public dialogRef : MdDialogRef < PopSignatureDialogComponent >, public sanitizer: DomSanitizer, public listComponent: LinksComponent) {
  this.row = this.dialogRef._containerInstance.dialogConfig.data.row;
}
}