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
    this.name = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('email');
    this.creado = sessionStorage.getItem('creado');
    this.verificado = sessionStorage.getItem('verificado');
    this.id = sessionStorage.getItem('id');
  }


  logout(){

    this.authService.logout();
    this.router.navigate(['/asociados']);
  }


}
