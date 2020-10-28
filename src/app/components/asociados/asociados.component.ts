import { Component, OnInit } from '@angular/core';
import { AsociadosService } from '../../services/asociados.service';
import { CatalogosService } from '../../services/catalogos.service';
import {Asociados} from '../../models/asociados';


@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  asociados: Asociados[];
  estados: any;
  categorias: any;
  municipios: any;

  estadoChoise: string;
  categoChoise: string;
  mpioChoise: string;
  constructor(private asociadosService: AsociadosService, private catalogosService: CatalogosService) { }

  ngOnInit() {
    this.asociadosService.getAsociados().subscribe(
      asociados => this.asociados = asociados
    );

    this.cargaEstados();
    this.cargaCatego();

  }


  buscar(){
    this.asociadosService.getAsociadosBusqueda(this.estadoChoise, this.categoChoise, this.mpioChoise).subscribe(
      asociados => this.asociados = asociados.result
    );
  }

  cambioEdo() {
    this.cargaMpio();
  }

  cargaEstados(): void {
      this.catalogosService.getEstados().subscribe(response => {
        this.estados = response.result;
        console.log(this.estados);
      }, err => {
        if (err.status === 400 || err.status === 401) {
          alert( 'no tienes permisos!');
        } else {
          alert( 'Error en la carga de los estados!');
        }
      }
        );
  }

  cargaCatego(): void {
      this.catalogosService.getCategorias().subscribe(response => {
        this.categorias = response.result;
      }, err => {
        if (err.status === 400 || err.status === 401) {
          alert( 'no tienes permisos!');
        } else {
          alert( 'Error en la carga de los estados!');
        }
      }
        );
  }

  cargaMpio(): void {
    this.catalogosService.getMunicipios(this.estadoChoise).subscribe(response => {
      this.municipios = response.result;
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'no tienes permisos!');
      } else {
        alert( 'Error en la carga de los estados!');
      }
    }
      );
}



}
