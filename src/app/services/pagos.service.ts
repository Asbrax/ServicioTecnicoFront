import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private URL_BACKEND = 'http://back2end.com/';
  private _pago: Pago;

  constructor(private http: HttpClient) {}

  pagar(pago: Pago): Observable<any> {
    const urlEndpoint = this.URL_BACKEND + 'api/services/pay';

    const tokenCat = 'Bearer ' + sessionStorage.getItem('token');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest ',
      'Authorization': tokenCat
    });

    return this.http.post<any>(urlEndpoint, pago, { headers: httpHeaders });
  }
}
