import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/auth';
import { UsuarioRegistro } from '../models/usuario-registro';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BACKEND = 'http://back2end.com/';
  private _usuario: Usuario;
  private _token: string;

  constructor(private http: HttpClient) { }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('email') != null) { 
      this._usuario = JSON.parse(sessionStorage.getItem('email')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(usuario: Usuario): Observable<any> {
    const urlEndpoint = this.URL_BACKEND + 'api/auth/login';

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest '
    });

    return this.http.post<any>(urlEndpoint, usuario, { headers: httpHeaders });
  }


  registro(usuario: UsuarioRegistro): Observable<any> {
    const urlEndpoint = this.URL_BACKEND + 'api/auth/signup';

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest '
    });

    return this.http.post<any>(urlEndpoint, usuario, { headers: httpHeaders });
  }


  userInfo(token: string): Observable<any> {
    const urlEndpointInf = this.URL_BACKEND + 'api/auth/user';
    const tokenCat = 'Bearer ' + token;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': tokenCat
    });
    return this.http.get<any>(urlEndpointInf,  { headers: httpHeaders });
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  isAuthenticated(): boolean {
    if (sessionStorage != null && sessionStorage.getItem('name') != null ) {
      if (sessionStorage.getItem('name').length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
  }
}