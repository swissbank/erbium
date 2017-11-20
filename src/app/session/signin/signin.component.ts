import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Logger } from "angular2-logger/core";
import { SessionService } from '../session.service';
import {LocalStorage} from '../../libs/localstorage';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public user;
  public form: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _logger: Logger, private _sessionService: SessionService, public _localstorage : LocalStorage,) {
    this._logger.log("Signin Constructor!");
  }

  ngOnInit() {

    this.user = this._localstorage.getObject('user_token');
    if(this.user.access_token){
        if (this.user.user && typeof this.user.user == 'object'){
               let redirectUrl = this._sessionService.redirectUrl || '/apps/transport';
                this._router.navigate([redirectUrl]); 
        }
    }
    this.form = this._fb.group ( {
      email: [null , Validators.compose ( [ Validators.required, CustomValidators.email ] )], 
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this._logger.log(this.form.value);
    if (this.form.valid) {
      this._sessionService.login(this.form.value).subscribe(        
        res => {
          this._logger.log("login response");
          this._logger.log(res);
          this._logger.log("this._sessionService.isLoggedIn: "+this._sessionService.isLoggedIn);
          // Navigate to the Redirect URL if exist or to dashboard
          if(this._sessionService.isLoggedIn) {
            let redirectUrl = this._sessionService.redirectUrl || '/apps/transport';
            this._router.navigate([redirectUrl]); 
          }
          return false;
        },
        err => {
          alert("Benutzername oder Passwort falsch.");
          this._logger.error("login error");
          console.log(err);
        }
        );
    }
  }

}
