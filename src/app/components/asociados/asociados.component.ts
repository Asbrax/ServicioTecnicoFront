import { Component, OnInit } from '@angular/core';
import { AsociadosService } from '../../services/asociados.service';
import {Asociados} from '../../models/asociados';


@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  asociados: Asociados[];

  constructor(private asociadosService: AsociadosService) { }

  ngOnInit() {
    this.asociadosService.getAsociados().subscribe(
      asociados => this.asociados = asociados
    );
  }

  buscar() {
    console.log(this.asociados);
  }
}
