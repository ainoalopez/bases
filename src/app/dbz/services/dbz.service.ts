import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000,
    },
    {
      nombre: 'Vegeta',
      poder: 5000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // las llaves indican que es un arreglo, los ... indican que es un operador spread
  } // operador spread -> separa cada uno de los elementos que tiene este arreglo y crea uno nuevo

  constructor() {
    console.log('servicio inicializado');
  }
}
