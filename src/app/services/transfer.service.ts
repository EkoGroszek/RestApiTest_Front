import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transfer} from '../entities/transfer';
import {Observable} from 'rxjs';
import {IAccounts} from '../entities/accounts';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private url = 'api/transfers';
  private headersObject: HttpHeaders;

  constructor(private  http: HttpClient) {
  }

  private prepareHeader() {

    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
  }

  createTransfer(transfer: Transfer): Observable<Transfer> {
    this.prepareHeader();
    return this.http.post<Transfer>(this.url, transfer, {
      headers: this.headersObject
    });
  }

  getSendedTransfersListById(id: string): Observable<Transfer[]> {
    this.prepareHeader();
    return this.http.get<Transfer[]>(this.url + '/sended/' + id, {
      headers: this.headersObject
    });
  }

  getRecievedTransfersListById(id: string): Observable<Transfer[]> {
    this.prepareHeader();
    return this.http.get<Transfer[]>(this.url + '/received/' + id, {
      headers: this.headersObject
    });
  }

}
