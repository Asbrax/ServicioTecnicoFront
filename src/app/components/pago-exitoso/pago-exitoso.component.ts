import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-pago-exitoso',
  templateUrl: './pago-exitoso.component.html',
  styleUrls: ['./pago-exitoso.component.css']
})
export class PagoExitosoComponent implements OnInit {


  pagolocal: any;

  constructor(private activatedRoute: ActivatedRoute, public pagosService: PagosService) { }

  ngOnInit() {
    this.pagoDetalle();
    /*
    setTimeout (() => {
      this.pagoDetalle();
  }, 2000);

*/

  }

  pagoDetalle(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log(id);
      if (id) {
        this.pagosService.pagoDetalle(id).subscribe(response => {
            console.log('pago detalle response');
            this.pagolocal = response.result[0];
            console.log(this.pagolocal);
        }, err => {
          if (err.status === 400 || err.status === 401) {
            alert( 'Transaccion de pago incorrecta, no tienes permisos suficientes!');
          } else {
            alert( 'Error en el pago!');
          }
        }
          );
      }
    });
  }
  

 
}
