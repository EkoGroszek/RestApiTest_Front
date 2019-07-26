import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Transfer} from '../entities/transfer';
import {TransferService} from '../services/transfer.service';
import {ToastrService} from 'ngx-toastr';
import {IAccounts} from '../entities/accounts';

@Component({
  selector: 'app-make-atransfer',
  templateUrl: './make-atransfer.component.html',
  styleUrls: ['./make-atransfer.component.css']
})
export class MakeATransferComponent implements OnInit {
  transferFormGroup: FormGroup;
  transfer: Transfer = new Transfer();
  isDisabled = false;


  constructor(
    private transferService: TransferService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.transfer.targetAccount = new IAccounts();
    this.transfer.sendingAccount = new IAccounts();
  }

  ngOnInit() {
    this.transferFormGroup = this.fb.group({
      sendingAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]],
      amount: [0, [Validators.required, Validators.pattern('^[0-9]*([.][0-9]{1,2})?$')]],
      targetAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]],
      ifSendEmail: false,
      emailAddress: ''
    })
    ;
  }

  private setAccountDataFromForm() {
    this.transfer.amount = this.transferFormGroup.value.amount;
    this.transfer.sendingAccount.accountNumber = this.transferFormGroup.value.sendingAccountNumber;
    this.transfer.targetAccount.accountNumber = this.transferFormGroup.value.targetAccountNumber;
    this.transfer.ifSendEmail = this.transferFormGroup.value.ifSendEmail;
    if (this.transferFormGroup.value.ifSendEmail) {
      this.transfer.emailAddress = this.transferFormGroup.value.emailAddress;
    }
  }

  onSubmit() {
    if (this.transferFormGroup.invalid) {
      console.log('invalid');
      this.showError();
      return;
    }
    this.setAccountDataFromForm();
    console.log(this.transfer);
    this.transferService.createTransfer(this.transfer).subscribe(
      data => {
        this.showSuccess();
      },
      data => {
        this.showError();
      });
    console.log(this.transfer);

  }

  showSuccess() {
    this.toastr.success('Wykonano przelew!');
  }

  showError() {
    this.toastr.error('Sprawdź czy wszystkie pola są poprawne', 'Wykryto błąd w formularzu');
  }

  toggleIfSendingEmail() {
    this.isDisabled = !this.isDisabled;
    return;
  }
}
