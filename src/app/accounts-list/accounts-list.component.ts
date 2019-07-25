import {Component, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {IAccounts} from '../entities/accounts';
import {ExternalAccount} from '../entities/externalAccount';
import {ExternalAccountService} from '../services/external-account.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  public accounts: IAccounts[];
  public externalAccounts: ExternalAccount[];

  constructor(
    private accountService: AccountService,
    private externalAccountService: ExternalAccountService
  ) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(data => this.accounts = data);
    this.externalAccountService.getExternalAccounts().subscribe(data => this.externalAccounts = data);
    // console.log(this.accounts);
  }

  deletaAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe();
    window.location.reload();
  }
}
