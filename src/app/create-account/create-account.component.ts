import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAccounts} from '../entities/accounts';
import {Owner} from '../entities/owner';
import {AccountService} from '../services/account.service';
import {OwnerService} from '../services/owner.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],

})
export class CreateAccountComponent implements OnInit {


  constructor(
    private accountService: AccountService,
    private ownerService: OwnerService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
  }

  private accounts: Account;
  submitted = false;
  currencies = ['PLN', 'EUR', 'GBP'];
  // owners = new Map();
  owners: Owner[];
  accountFormGroup: FormGroup;
  owner: Owner = new Owner();
  account: IAccounts = new IAccounts();


  onSubmit() {
    this.submitted = true;

    if (this.accountFormGroup.invalid) {
      console.log('invalid');
      this.showError();
      return;
    }

    console.log(this.accountFormGroup.value.accountNumber);
    this.setAccountDataFromForm();
    console.log(this.account);
    this.accountService.addAccount(this.account).subscribe(data => this.account = data);
    this.showSuccess();
  }


  private setAccountDataFromForm() {
    this.account.accountNumber = this.accountFormGroup.value.accountNumber;
    this.account.balance = this.accountFormGroup.value.balance;
    this.account.currency = this.accountFormGroup.value.currencies;
    this.owner.id = this.accountFormGroup.value.ownerId;
    this.account.owner = this.owner;
    this.account.name = this.accountFormGroup.value.accountName;
  }

  private getOwners() {
    this.ownerService.getOwners().subscribe(data => this.owners = data);
  }

  ngOnInit() {
    this.getOwners();
    this.accountFormGroup = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]],
      balance: ['', [Validators.required, Validators.pattern('^[0-9]*([.][0-9]{1,2})?$')]],
      ownerId: ['', Validators.required],
      currencies: ['', Validators.required],
      accountName: ['', Validators.required]
    });
  }

  showSuccess() {
    this.toastr.success('Wykonano przelew!');
  }

  showError() {
    this.toastr.error('Sprawdź czy wszystkie pola są poprawne', 'Wykryto błąd w formularzu');
  }

}
