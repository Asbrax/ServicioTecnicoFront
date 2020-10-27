import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-operaciones',
  templateUrl: './historial-operaciones.component.html',
  styleUrls: ['./historial-operaciones.component.css']
})
export class HistorialOperacionesComponent implements OnInit {

  name = '';
  email = '';
  creado = '';
  verificado = '';
  id = '';


  constructor(public authService: AuthService, private router: Router) {   }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    this.name = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('email');
    this.creado = sessionStorage.getItem('creado');
    this.verificado = sessionStorage.getItem('verificado');
    this.id = sessionStorage.getItem('id');


  }

}
