import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {JorStaraComponent} from './jor-stara/jor-stara.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CreateAccountComponent} from './create-account/create-account.component';
import {AppRoutingModule} from './app-routing.module';
import {MakeATransferComponent} from './make-atransfer/make-atransfer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {EditNameComponent} from './edit-name/edit-name.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MakeExternalTransferComponent } from './make-external-transfer/make-external-transfer.component';


@NgModule({
  declarations: [
    AppComponent,
    JorStaraComponent,
    CreateAccountComponent,
    MakeATransferComponent,
    HomePageComponent,
    AccountsListComponent,
    AccountDetailsComponent,
    EditNameComponent,
    MakeExternalTransferComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
