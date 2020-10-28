import { Injectable } from '@angular/core';
import { of, Observable, from} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient) { }


  getCategorias(): Observable<any> {
    const urlEndpointInf = 'http://back2end.com/api/services/category';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get<any>(urlEndpointInf,  { headers: httpHeaders });
  }

  getEstados(): Observable<any> {
    const urlEndpointInf = 'http://back2end.com/api/services/state';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get<any>(urlEndpointInf,  { headers: httpHeaders });
  }

  getMunicipios(edo: string): Observable<any> {
    const urlEndpoint = 'http://back2end.com/api/services/municipality';
    const body = { estado: edo };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest ',
    });

    return this.http.post<any>(urlEndpoint, body, { headers: httpHeaders });
  }



}
