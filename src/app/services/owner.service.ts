import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Owner} from '../entities/owner';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private url = 'api/users';
  private headersObject: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  private prepareHeader() {

    this.headersObject = new HttpHeaders();
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Content-Type', 'application/json');
  }

  getOwners(): Observable<Owner[]> {
    this.prepareHeader();
    return this.http.get<Owner[]>(this.url + '/all', {
      headers: this.headersObject
    });
  }
}
