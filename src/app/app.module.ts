import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JorStaraComponent } from './jor-stara/jor-stara.component';

import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { CreateAccountComponent } from './create-account/create-account.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MakeATransferComponent } from './make-atransfer/make-atransfer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    JorStaraComponent,
    CreateAccountComponent,
    MakeATransferComponent,
    HomePageComponent,
    AccountsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
