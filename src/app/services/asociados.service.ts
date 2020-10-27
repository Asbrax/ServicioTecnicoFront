import { Injectable } from '@angular/core';
import { Asociados } from '../models/asociados';
import { of, Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';


@Injectable()
export class AsociadosService {
  private urlEndPoint: string = "http://back2end.com/api/services/index";
  constructor(private http: HttpClient) { }


getAsociados(): Observable <any>{
  return this.http.get(this.urlEndPoint).pipe(
    tap ((response:any)=>{
      console.log('clienteService: Tap1 ');
      (response.result.data as Asociados[]).forEach( asociado=>{
        console.log(asociado.name);
      });
    }),
    map((response: any) => {
      ( response.result.data as Asociados[]).map(asociado =>{
        asociado.name = asociado.name.toUpperCase();
        return asociado;
    });
      return response.result.data;
    })
  );
}

}
