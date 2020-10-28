import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsociadosService } from '../../services/asociados.service';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.component.html',
  styleUrls: ['./asociado.component.css']
})
export class AsociadoComponent implements OnInit {

  myResponse: any;
  map: string;
  constructor(private activatedRoute: ActivatedRoute, public asociadosService: AsociadosService ) { }

  ngOnInit() {
    this.getAsociadoDetail();
  }



  getAsociadoDetail(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log(id);
      if (id) {
        this.asociadosService.getAsociadoDetail(id).subscribe(response => {
            this.myResponse = response.result[0];
            this.map = `http://maps.google.com/maps?q=${this.myResponse.long},${this.myResponse.lat}&z=15&output=embed`;
        }, err => {
          if (err.status === 400 || err.status === 401) {
            alert( 'No se pudo obtener el detalle');
          } else {
            alert( 'Error al consultar el asociado');
          }
        }
          );
      }
    });
  }



}
