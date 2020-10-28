import { Component, OnInit } from '@angular/core';
import { UsuarioRegistro } from '../../models/usuario-registro';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public name: string;
  public password: string;
  public email: string;

  usuario: UsuarioRegistro;

  // tslint:disable-next-line: variable-name
  constructor( public authService: AuthService, private router: Router) {
    this.usuario = new UsuarioRegistro();
  }

  ngOnInit() {
  }

  registro(): void {
    if (this.usuario.name == null || this.usuario.email == null || this.usuario.password == null) {
      alert('Nombre, Email o Contraseña vacías!');
      return;
    }


    this.authService.registro(this.usuario).subscribe(response => {

      this.authService.guardarToken(response.access_token);
      alert('Usuario ' + this.usuario.name + ' creado con éxito');
      this.router.navigate(['/login']);
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'Usuario o clave incorrectas!');
      } else {
        alert( 'Error de plataforma!');
      }
    }
    );
  }
}
