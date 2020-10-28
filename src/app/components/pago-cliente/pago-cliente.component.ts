import { Component, OnInit } from '@angular/core';
import { Pago } from '../../models/pago';
import { Router } from '@angular/router';
import { PagosService } from '../../services/pagos.service';


@Component({
  selector: 'app-pago-cliente',
  templateUrl: './pago-cliente.component.html',
  styleUrls: ['./pago-cliente.component.css']
})
export class PagoClienteComponent implements OnInit {

    usuario_id: string;
    asociado_id: string;
    monto: number;
    titular: string;
    numero_tarjeta: number;
    mes: number;
    ano: number;
    cvv: number;

    pagolocal: Pago;

  constructor(public pagosService: PagosService,  private router: Router) {
    this.pagolocal = new Pago();
    this.monto = 1500;
   }

  ngOnInit() {
  }


  pagar(): void {
    if (this.numero_tarjeta == null || this.titular == null 
      || this.mes == null || this.ano == null
      || this.cvv == null) {
      alert('¡Completa los campos antes de continuar!');
      return;
    }

    this.pagolocal.usuario_id = sessionStorage.getItem('id');
    this.pagolocal.asociado_id= sessionStorage.getItem('id');
    this.pagolocal.monto= this.monto;
    this.pagolocal.titular= this.titular;
    this.pagolocal.numero_tarjeta= this.numero_tarjeta;
    this.pagolocal.mes= this.mes;
    this.pagolocal.ano= this.ano;
    this.pagolocal.cvv= this.cvv;


    this.pagosService.pagar(this.pagolocal).subscribe(response => {

      this.router.navigate(['/pagoExitoso/' + response.result.id]);
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
