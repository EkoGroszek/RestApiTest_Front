import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccounts} from '../entities/accounts';
import {ExternalAccount} from '../entities/externalAccount';

@Injectable({
  providedIn: 'root'
})
export class ExternalAccountService {
  private url = '/api/externalAccounts';
  private headersObject: HttpHeaders;

  private prepareHeader() {

    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
  }

  constructor(private  http: HttpClient) {
  }

  getExternalAccounts(): Observable<ExternalAccount[]> {
    this.prepareHeader();
    return this.http.get<ExternalAccount[]>(this.url + '/all', {
      headers: this.headersObject
    });
  }

}
