import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TransferService} from '../services/transfer.service';
import {Transfer} from '../entities/transfer';
import {AccountService} from '../services/account.service';
import {IAccounts} from '../entities/accounts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  public sendedTransfers: Transfer[];
  public recievedTransfers: Transfer[];
  public accountDetails: IAccounts;

  constructor(
    private route: ActivatedRoute,
    private transferService: TransferService,
    private accountService: AccountService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id).subscribe(data => this.accountDetails = data);
    this.transferService.getSendedTransfersListById(id).subscribe(data => this.sendedTransfers = data);
    this.transferService.getRecievedTransfersListById(id).subscribe(data => this.recievedTransfers = data);
  }

  btnClick(id) {
    this.router.navigateByUrl('/accountsList/accountDetails/editName/' + id);
  }

}
