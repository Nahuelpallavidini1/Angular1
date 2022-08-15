import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-listado-sucursales',
  templateUrl: './listado-sucursales.component.html',
  styleUrls: ['./listado-sucursales.component.css'],
})
export class ListadoSucursalesComponent implements OnInit {
  public lista = [];
  constructor() {}

  ngOnInit() {
    this.lista[0] = new Sucursal(
      'Primer Sucursal',
      'Eva peron 1212',
      'Primer Categoria',
      'Nahuel'
    );
    this.lista[1] = new Sucursal(
      'Segunda Sucursal',
      'fsafasffas',
      'Segunda Categoria',
      'Nahuel'
    );
    this.lista[2] = new Sucursal(
      'Tercer Sucursal',
      'peron 1212',
      'Primer Categoria',
      'Nahuel'
    );
  }
}
