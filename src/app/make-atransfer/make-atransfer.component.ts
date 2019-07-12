import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
      sendingAccountNumber: '',
      amount: 0,
      targetAccountNumber: ''
    });
  }

  private setAccountDataFromForm() {
    this.transfer.amount = this.transferFormGroup.value.amount;
    this.transfer.sendingAccountNumber = this.transferFormGroup.value.sendingAccountNumber;
    this.transfer.targetAccountNumber = this.transferFormGroup.value.targetAccountNumber;
  }

  onSubmit() {
    this.setAccountDataFromForm();
    console.log(this.transfer);
    // this.transferService.createTransfer(this.transfer).subscribe(data => this.transfer = data);
    this.transferService.createTransfer(this.transfer).subscribe();
  }
}
