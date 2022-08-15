import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css'],
})
export class ListadoClienteComponent implements OnInit {
  public lista = [];
  constructor() {
    
  }

  ngOnInit() {
    this.lista[0] = new Cliente('Nahuel', 21, true);
    this.lista[1] = new Cliente('Juan', 31, true);
    this.lista[2] = new Cliente('Gabriel', 11, false);
  }
}
