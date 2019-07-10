import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccounts} from '../entities/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'localhost:8080/api/accounts/all';
  // url = "/api/accounts/all";
  private headersObject: HttpHeaders;

  prepareHeader() {

    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
    this.headersObject.append(
      'Authorization',
      'Basic' + btoa('admin1:password1')
    );
  }


  constructor(
    private  http: HttpClient
  ) {
  }

  getAccounts(): Observable<IAccounts[]> {
    this.prepareHeader();
    return this.http.get<IAccounts[]>('/api/accounts/all', {
      headers: this.headersObject
    });
  }

}
