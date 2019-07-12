import {Component, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {IAccounts} from '../entities/accounts';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  public accounts: IAccounts[];

  constructor(
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(data => this.accounts = data);
    // console.log(this.accounts);
  }

}
