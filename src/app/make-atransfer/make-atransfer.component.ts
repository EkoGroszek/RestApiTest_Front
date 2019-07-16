import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Transfer} from '../entities/transfer';
import {TransferService} from '../services/transfer.service';

@Component({
  selector: 'app-make-atransfer',
  templateUrl: './make-atransfer.component.html',
  styleUrls: ['./make-atransfer.component.css']
})
export class MakeATransferComponent implements OnInit {
  transferFormGroup: FormGroup;
  transfer: Transfer = new Transfer();

  constructor(private transferService: TransferService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.transferFormGroup = this.fb.group({
      sendingAccountNumber: ['',[Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]],
      amount: [0, [Validators.required, Validators.pattern('^[1-9][0-9]*([.][0-9]{1,2})?$')]],
      targetAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]]
    });
  }

  private setAccountDataFromForm() {
    this.transfer.amount = this.transferFormGroup.value.amount;
    this.transfer.sendingAccountNumber = this.transferFormGroup.value.sendingAccountNumber;
    this.transfer.targetAccountNumber = this.transferFormGroup.value.targetAccountNumber;
  }

  onSubmit() {
    if (this.transferFormGroup.invalid) {
      console.log('invalid');
      return;
    }
    this.setAccountDataFromForm();
    console.log(this.transfer);
    // this.transferService.createTransfer(this.transfer).subscribe(data => this.transfer = data);
    this.transferService.createTransfer(this.transfer).subscribe();
  }
}
