import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  name = '';
  email = '';
  creado = '';
  verificado = '';
  id = '';
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userInfo();
  }


  userInfo(): void {
    this.authService.userInfo(sessionStorage.getItem('token')).subscribe(response => {
      //console.log(response);

      this.name = response.name;
      this.email = response.email;
      this.creado = response.created_at;
      this.verificado = response.email_verified_at;
      this.id = response.id;

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

  logout(){

    this.authService.logout();
    this.router.navigate(['/asociados']);
  }


}
