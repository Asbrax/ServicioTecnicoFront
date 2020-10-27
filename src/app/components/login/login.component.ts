import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Inicia sesión';
  usuario: Usuario;

  link = ['/login'];

  constructor(public authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/perfil']);
    }
   
  }

  login(): void {
    if (this.usuario.email == null || this.usuario.password == null) {
      alert('Username o password vacías!');
      return;
    }


    this.authService.login(this.usuario).subscribe(response => {

      this.authService.guardarToken(response.access_token);
      this.userInfo();
      //alert('Bienvenido');
      this.router.navigate(['/perfil']);
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'Usuario o clave incorrectas!');
      } else {
        alert( 'Error de plataforma!');
      }
    }
    );
  }

  registro(): void {
    this.router.navigate(['/registro']);

  }

  userInfo(): void {
    this.authService.userInfo(sessionStorage.getItem('token')).subscribe(response => {
      //console.log(response);

      sessionStorage.setItem('id', response.id);
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem('name', response.name);
      sessionStorage.setItem('creado', response.created_at);
      sessionStorage.setItem('verificado', response.email_verified_at);

      //this.router.navigate(['/asociados']);
      //alert(`Hola ${this.usuario.email}, has iniciado sesión con éxito!`);
    }, err => {
      if (err.status == 400) {
        alert( 'Usuario o clave incorrectas!');
      }else{
        alert( 'Error con la info del usuario!');
      }
    }
    );
  }


}