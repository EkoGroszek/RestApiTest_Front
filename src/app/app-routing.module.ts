import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component';
import {MakeATransferComponent} from './make-atransfer/make-atransfer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
import {AccountDetailsComponent} from './account-details/account-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'makeTransfer', component: MakeATransferComponent },
  { path: 'accountsList', component: AccountsListComponent },
  { path: 'accountsList/accountDetails/:id', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
