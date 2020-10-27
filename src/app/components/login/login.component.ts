import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo: string = 'Inicia sesión';
  usuario: Usuario;

  constructor(public authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      alert(`Hola ${this.authService.usuario.username} ya estás autenticado!`);
      //this.router.navigate(['/areas']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      alert('Username o password vacías!');
      return;
    }

   

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      //this.router.navigate(['/login']);
      alert(`Hola ${usuario.username}, has iniciado sesión con éxito!`);
    }, err => {
      if (err.status == 400) {
        alert( 'Usuario o clave incorrectas!');
      }
    }
    );
  }

}