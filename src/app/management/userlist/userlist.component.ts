import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from "angular2-logger/core";
import { ManagementService } from '../management.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserListComponent implements OnInit {
  rows = [];
  count = 0;
  offset = 0;
  limit = 10;
  status;
  currentUserToDelete:any;
  dialogRef: MdDialogRef<JazzDialogComponent>;
  lastCloseResult: string;
  config: MdDialogConfig = {
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
  constructor(private _router: Router, private _logger: Logger, private _managementService: ManagementService, public dialog: MdDialog) {
    this._logger.log("UserListComponent Constructor!");
  }

  ngOnInit() {
    this.page(this.offset, this.limit);
  }

   open(row) {
    this.currentUserToDelete = row;
    this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      if(result == 'yes'){
        this.onDelete(this.currentUserToDelete);
      }else{
        this.currentUserToDelete = null;
      }
      this.lastCloseResult = result;
      console.log("Closed Dailog Box",this.lastCloseResult);
      this.dialogRef = null;
    });
  }

  page(offset, limit) {
    this._logger.log("offset, limit", offset, limit);
    this.fetch((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;
      this._logger.log('Page Results', start, end, rows);
    });
  }

  fetch(cb) {
    this._managementService.getUsers().subscribe(        
      res => {
        this._logger.log("getUsers response");
        this._logger.log(res);
        cb(res.data.data);        
      },
      err => {
        this._logger.error("login error");
        this._logger.error(err);
      }
      );
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }

  onDetail(row: any) {
    this._logger.log(row);
    this._managementService.setUser(row);
    this._router.navigate(['/management/useredit']);
  }

  onDelete(row: any) {
    this._managementService.deleteUser(row)
    .subscribe(
      (res)=>{
          this._logger.log("onDelete response");
          this._logger.log(res);
          this.currentUserToDelete = null;
           this.ngOnInit();        
      },
      (err)=>{
          this._logger.error("onDelete error");
          this._logger.error(err);
      }
    )
    this._logger.log(row);
  }

  onActiveUser(id,active){
    console.log(active);
    var obj ={
      id:id,
      status:active.target.value
    }
    this._managementService.activeUser(obj)
    .subscribe(
      res => {
        this._logger.log("onActiveUser response");
        this._logger.log(res);        
      },
      err => {
        this._logger.error("onActiveUser error");
        this._logger.error(err);
      }

    ); 
  }
}




@Component({
  selector: 'app-jazz-dialog',
  template: `
  <h5 class="mt-0">Sind Sie sicher, dass Sie diesen Benutzer löschen wollen?</h5>
  <p style="text-align:right;margin-top:15px">
    <button md-raised-button md-raised-button color="warning" (click)="dialogRef.close('no')">Nein</button>
    <button  md-raised-button md-raised-button color="primary" type="button" (click)="dialogRef.close('yes')">Ja</button>
  </p>`
})
export class JazzDialogComponent {
  constructor(public dialogRef: MdDialogRef <JazzDialogComponent> ) {}
}