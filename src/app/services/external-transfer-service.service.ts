import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ExternalTransfer} from '../entities/externalTransfer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalTransferServiceService {
  private url = 'api/externalTransfers';
  private headersObject: HttpHeaders;

  constructor(private  http: HttpClient) {
  }

  private prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
  }


  createTransfer(externalTransfer: ExternalTransfer): Observable<ExternalTransfer> {
    this.prepareHeader();
    return this.http.post<ExternalTransfer>(this.url, externalTransfer,{
      headers: this.headersObject
    });

  }
}
