import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {AccountnameUpdateDTO} from '../DTO/AccountnameUpdateDTO';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  changeAccountNameFormGroup: FormGroup;
  updatedAccountName: AccountnameUpdateDTO = new AccountnameUpdateDTO();
  accountId: string;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.changeAccountNameFormGroup = this.fb.group(
      {
        accountName: ''
      }
    );
    this.accountId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    this.updatedAccountName.accountName = this.changeAccountNameFormGroup.value.accountName;
    console.log(this.updatedAccountName);
    // accountId = this.route.snapshot.paramMap.get('id'));
    this.accountService.updateAccountName(this.updatedAccountName, this.accountId).subscribe(
      data => this.router.navigateByUrl('/accountsList/accountDetails/' + this.accountId)
  )
    ;
  }
}
