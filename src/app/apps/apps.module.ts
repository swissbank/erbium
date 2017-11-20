import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


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
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SignaturePadModule } from 'angular2-signature-pad';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { ImageUploadModule } from "angular2-image-upload";
import { NgxResizeWatcherDirective } from '../../app/ngx-resize-watcher.directive';







import { AppsRoutes } from './apps.routing';
import { TransportComponent } from './transport/transport.component';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent , JazzDialogComponent} from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ImageUploadModule.forRoot(),
    RouterModule.forChild(AppsRoutes),
    MaterialModule,
    SignaturePadModule,
    NgxDatatableModule,
    /*MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdGridListModule,
    MdMenuModule,
    MdSidenavModule,
    MdProgressBarModule,
    MdTabsModule,
    MdDialogModule,*/
    //CalendarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DateTimePickerModule
   
    //ChartsModule
  ],
  declarations: [
    TransportComponent,
    JazzDialogComponent,
    LinksComponent,
    NgxResizeWatcherDirective
    /*FullcalendarComponent,
    MailComponent,
    MediaComponent,
    ChatComponent,
    SocialComponent*/
  ],
  entryComponents: [ JazzDialogComponent ]
})

export class AppsModule {}
