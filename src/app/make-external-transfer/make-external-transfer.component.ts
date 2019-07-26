import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExternalTransfer} from '../entities/externalTransfer';
import {ToastrService} from 'ngx-toastr';
import {ExternalTransferServiceService} from '../services/external-transfer-service.service';

@Component({
  selector: 'app-make-external-transfer',
  templateUrl: './make-external-transfer.component.html',
  styleUrls: ['./make-external-transfer.component.css']
})
export class MakeExternalTransferComponent implements OnInit {
  transferFormGroup: FormGroup;
  externalTransfer: ExternalTransfer = new ExternalTransfer();
  isDisabled = false;

  constructor(
    private externalTransferService: ExternalTransferServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
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
    });
  }

  private setAccountDataFromForm() {
    this.externalTransfer.amount = this.transferFormGroup.value.amount;
    this.externalTransfer.externalAccount = this.transferFormGroup.value.sendingAccountNumber;
    this.externalTransfer.toAccount = this.transferFormGroup.value.targetAccountNumber;
    this.externalTransfer.ifSendEmail = this.transferFormGroup.value.ifSendEmail;

    if (this.transferFormGroup.value.ifSendEmail) {
      this.externalTransfer.emailAddress = this.transferFormGroup.value.emailAddress;
    }
  }

  onSubmit() {
    if (this.transferFormGroup.invalid) {
      console.log('invalid');
      this.showError();
      return;
    }
    this.setAccountDataFromForm();
    console.log(this.externalTransfer);
    this.externalTransferService.createTransfer(this.externalTransfer).subscribe(
      data => {
        this.showSuccess();
      },
      data => {
        this.showError();
      });
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
