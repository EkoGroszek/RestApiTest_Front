import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccounts} from '../entities/accounts';
import {AccountnameUpdateDTO} from '../DTO/AccountnameUpdateDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = '/api/accounts';
  private headersObject: HttpHeaders;

  private prepareHeader() {

    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
  }


  constructor(private  http: HttpClient) {
  }

  getAccounts(): Observable<IAccounts[]> {
    this.prepareHeader();
    // return this.http.get<IAccounts[]>('/api/accounts/all', {
    return this.http.get<IAccounts[]>(this.url + '/all', {
      headers: this.headersObject
    });
  }

  getAccountById(id: string): Observable<IAccounts> {
    this.prepareHeader();
    return this.http.get<IAccounts>(this.url + '/' + id, {
      headers: this.headersObject
    });

  }

  addAccount(account: IAccounts): Observable<IAccounts> {
    this.prepareHeader();

    return this.http.post<IAccounts>(this.url, account, {
      // return this.http.post<IAccounts>('/api/accounts', account, {
      headers: this.headersObject
    });
  }


  updateAccountName(updatedAccountName: AccountnameUpdateDTO, accountId: string): Observable<AccountnameUpdateDTO> {
    this.prepareHeader();
    console.log(updatedAccountName);
    return this.http.post<AccountnameUpdateDTO>(this.url + '/update/' + accountId, updatedAccountName, {
      headers: this.headersObject
    });
  }
}
