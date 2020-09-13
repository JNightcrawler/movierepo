import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import  {HttpClientModule} from '@angular/common/http';
import {FormsModule}  from "@angular/forms";
import { TableviewComponent } from './tableview/tableview.component';
import { TablecolDirective } from './tablecol.directive';
import { TableviewdataComponent } from './tableviewdata/tableviewdata.component';
import { TablesortPipe } from './tablesort.pipe';
//import { AngularFontAwesomeModule } from '../../node_modules/angular-font-awesome';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchcomponentComponent,
    TableviewComponent,
    TablecolDirective,
    TableviewdataComponent,
    TablesortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  //  AngularFontAwesomeModule,
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
