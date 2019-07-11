import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAccounts} from '../entities/accounts';
import {Owner} from '../entities/owner';
import {AccountService} from '../services/account.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  private accounts: Account;

  constructor(private accountService: AccountService, private fb: FormBuilder) {
  }
  currencies = ['PLN', 'EUR', 'GBP'];
  accountFormGroup: FormGroup;
  owner: Owner = new Owner();
  account: IAccounts = new IAccounts();


  onSubmit() {
  // console.log(this.accountFormGroup.value.accountNumber);
    this.setAccountDataFromForm();
    console.log(this.account);
    this.accountService.addAccount(this.account).subscribe(data => this.account = data);

  }


  private setAccountDataFromForm() {
    this.account.accountNumber = this.accountFormGroup.value.accountNumber;
    this.account.balance = this.accountFormGroup.value.balance;
    this.account.currency = this.accountFormGroup.value.currencies;
    this.owner.id = this.accountFormGroup.value.ownerId;
    this.account.owner = this.owner;
    this.account.name = this.accountFormGroup.value.accountName;
  }

  ngOnInit() {
    this.accountFormGroup = this.fb.group({
      accountNumber: '',
      balance: 0,
      ownerId: '',
      currencies: ' ',
      accountName: ''
    });
  }


}
