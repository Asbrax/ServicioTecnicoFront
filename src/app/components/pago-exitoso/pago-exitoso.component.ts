import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-exitoso',
  templateUrl: './pago-exitoso.component.html',
  styleUrls: ['./pago-exitoso.component.css']
})
export class PagoExitosoComponent implements OnInit {

  

  pagolocal.usuario_id=sessionStorage.getItem('p_user_id');
  pagolocal.asociado_id= sessionStorage.getItem('p_provider_id');
  pagolocal.monto=   sessionStorage.getItem('p_amount');
  pagolocal.titular=   sessionStorage.getItem('p_card_holder');
  pagolocal.numero_tarjeta=   sessionStorage.getItem('p_card_number');
  pagolocal.transaccion=    sessionStorage.getItem('p_transactions_fiserv_id');
  pagolocal.estado=    sessionStorage.getItem('p_status');

  constructor() { }

  ngOnInit() {
  }


 
}
