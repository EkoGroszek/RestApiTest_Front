import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-make-external-transfer',
  templateUrl: './make-external-transfer.component.html',
  styleUrls: ['./make-external-transfer.component.css']
})
export class MakeExternalTransferComponent implements OnInit {

  transferFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.transferFormGroup = this.fb.group({
      sendingAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]],
      amount: [0, [Validators.required, Validators.pattern('^[0-9]*([.][0-9]{1,2})?$')]],
      targetAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*'),
        Validators.minLength(26), Validators.maxLength(26)]]
    });
  }

  onSubmit() {
    console.log('pacz jkiż to piękny przelew');
  }
}
