import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-historial-operaciones',
  templateUrl: './historial-operaciones.component.html',
  styleUrls: ['./historial-operaciones.component.css']
})
export class HistorialOperacionesComponent implements OnInit {

  transaccions: any;
  constructor(public authService: AuthService, private router: Router, public pagosService: PagosService) {   }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    this.getTransaccions();
  }

  getTransaccions(): void {
      const id = sessionStorage.getItem('id');
      if (id) {
        this.pagosService.getTransaccions(id).subscribe(response => {
          this.transaccions = response.result;
        }, err => {
          if (err.status === 400 || err.status === 401) {
            alert( 'Transaccion de pago incorrecta, no tienes permisos suficientes!');
          } else {
            alert( 'Error en el pago!');
          }
        }
          );
      }
    }



}
