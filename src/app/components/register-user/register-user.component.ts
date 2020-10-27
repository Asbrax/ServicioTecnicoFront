import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public username: string;
  public password: string;

  usuario: Usuario;

  // tslint:disable-next-line: variable-name
  constructor( private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }
}
