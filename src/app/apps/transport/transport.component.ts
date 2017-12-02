import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {Logger} from "angular2-logger/core";
import {AppsService} from '../apps.service';
import {LocalStorage} from '../../libs/localstorage';
import {SharedService} from '../shared.service';

@Component({selector: 'app-transport', templateUrl: './transport.component.html', styleUrls: ['./transport.component.scss']})
export class TransportComponent implements OnInit {

  public form : FormGroup;
  public list = [];
  public shipments : any[] = [
    {
      value: "1"
    }
  ];
  public user : any;
  public edit = false;
  public editTransportObj : any;
  public countries = [
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
  @Input('childData')incomingData : string;
  public handleEvent(childData : any) {
    console.log(childData);
  }
  private _dateTimeLocal : Date;

  constructor(private _fb : FormBuilder, private _router : Router, private _logger : Logger, private _appsService : AppsService, public _localstorage : LocalStorage, public _sharedService : SharedService) {
    this._dateTimeLocal = new Date();
    this
      ._sharedService
      .caseNumber$
      .subscribe(data => {
        if (data && data['from'] == 'transport') {
          console.log("Same Componenets");
        } else {
          console.log('links send to transport', data);
          if (data['forklift']) {
            if (data['forklift']['id']) {
              data['abfahrt'] = data['forklift']['updated_at'];
            }else if(data['abfahrt']){
               data['abfahrt'] = data['abfahrt'];
            }
          }
          if(data['shipment']){
            if(data['shipment'].length >0){
              this.shipments =[];
              for (let i=0;i<data['shipment'].length;i++){
                this.shipments.push({value:data['shipment'][i]['shipment_id']});
              }
            }
          }
          
          this.editTransportObj = data;

          // this.editTransportObj.destination = this.countries[0];
          this.edit = true;
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
          // for(var i=0;i<obk.length;i++){   this.form.value[obk[i]] =
          // data[obk[i]]?data[obk[i]]:''; }
        }
      });
    this
      ._logger
      .log("Transport Constructor!");
  }

  ngOnInit() {
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
        fahrzeughalter: [
          null, Validators.compose([Validators.required])
        ],
        lkw_nr: [
          null, Validators.compose([Validators.required])
        ],
        destination: [
          null, Validators.compose([Validators.required])
        ],
        fahrer: [
          null, Validators.compose([Validators.required])
        ],
        container: [null],
        plomben_nr: [
          null, Validators.compose([Validators.required])
        ],
        adr: [
          null, Validators.compose([Validators.required])
        ],
        luftfracht: [
          null, Validators.compose([Validators.required])
        ],
        rampe: [
          null, Validators.compose([Validators.required])
        ],
        ankunft: [{value:this.getDate(),disabled:true}],
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
      .subscribe(res => {
        this
          ._logger
          .log("getRamps response");
        this
          ._logger
          .log(res);
        for (let key in res) {
          this
            .list
            .push({id: key, name: res[key]})
        }
        //this.list = res;  this.form.reset();
      }, err => {
        this
          ._logger
          .error("getRamps error");
        this
          ._logger
          .error(err);
      });

  }

  addInput() {
    if (this.shipments.length < 10) {
      this
        .shipments
        .push({value: ''});
    }
  }

  onSubmit() {
    this
      ._logger
      .log(this.shipments);
    this
      ._logger
      .log(this.form.value);
    if (this.form.valid) {
      let selshipments = [];
      this
        .shipments
        .forEach(function (value) {
          selshipments.push(value.value);
        });
      this
        ._logger
        .log(selshipments);

        if(selshipments.length <= 0){
          alert("Bitte Sendungs-ID einfügen");
          return false;
        }
      this.form.value['shipment_id'] = selshipments;
      this.form.value['ankunft']= this.getDate();
      this
        ._logger
        .log(this.form.value);

      this
        ._appsService
        .addTransporter(this.form.value)
        .subscribe(res => {
          this
            ._logger
            .log("addTransporter response");
            this.shipments = [{value: ''}];
          this
            ._logger
            .log(res);
          res.data.from = 'transport'
          this
            ._sharedService
            .publishData(res.data);
          this
            .form
            .reset();
            this.CreateForm(); 
        }, err => {
          this
            ._logger
            .error("addTransporter error");
          this
            ._logger
            .error(err);
        });
    }
  }

  onEditSubmit() {
    this
      ._logger
      .log(this.shipments);
    this
      ._logger
      .log(this.form.value);
    if (this.form.valid) {
      let selshipments = [];
      this
        .shipments
        .forEach(function (value) {
          selshipments.push(value.value);
        });
      this
        ._logger
        .log(selshipments);
      this.form.value['shipment_id'] = selshipments;
      this
        ._logger
        .log(this.form.value);
      let obj = this.form.value;
      obj.id = this.editTransportObj.id;
      obj['ankunft']= this.editTransportObj['ankunft'];

      this
        ._appsService
        .updateTransporter(obj)
        .subscribe(res => {
          this
            ._logger
            .log("updateTransporter response");
          this
            ._logger
            .log(res);
              this.shipments = [{value: ''}];
              obj.from ="edit";
              this
            ._sharedService
            .publishData(obj);
          this
            .form
            .reset();
            this.CreateForm();
          this.edit = false;
        }, err => {
          this
            ._logger
            .error("updateTransporter error");
          this
            ._logger
            .error(err);
        });
    }
  }

  resetForm() {
    this
      .form
      .reset();
  }

  private parseDateToStringWithFormat(date : Date) : string {
    let result: string;
    let dd = date
      .getDate()
      .toString();
    let mm = (date.getMonth() + 1).toString();
    let hh = date
      .getHours()
      .toString();
    let min = date
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
  }

  public set dateTimeLocal(v : string) {
    let actualParsedDate = v
      ? new Date(v)
      : new Date();
    let normalizedParsedDate = new Date(actualParsedDate.getTime() + (actualParsedDate.getTimezoneOffset() * 60000));
    console.log(normalizedParsedDate);
    this._dateTimeLocal = normalizedParsedDate;
  }

  public get dateTimeLocal() : string {
    return this.parseDateToStringWithFormat(this._dateTimeLocal);
  }

  public getDate() {
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

  public CreateForm(){
    this.form = this
      ._fb
      .group({
        fahrzeughalter: [
          null, Validators.compose([Validators.required])
        ],
        lkw_nr: [
          null, Validators.compose([Validators.required])
        ],
        destination: [
          null, Validators.compose([Validators.required])
        ],
        fahrer: [
          null, Validators.compose([Validators.required])
        ],
        container: [
          null
        ],
        plomben_nr: [
          null, Validators.compose([Validators.required])
        ],
        adr: [
          null, Validators.compose([Validators.required])
        ],
        luftfracht: [
          null, Validators.compose([Validators.required])
        ],
        rampe: [
          null, Validators.compose([Validators.required])
        ],
        ankunft: [{value:this.getDate(),disabled:true}],
        abfahrt: [
          {
            value: "",
            disabled: true
          }
        ]
      });

  }
  public backForm(){
    this.edit = false;
    //this.form.reset();
    this.CreateForm();
  }
}
