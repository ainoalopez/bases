import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000,
    },
    {
      nombre: 'Vegeta',
      poder: 5000,
    },
  ];

  nuevo: Personaje = 
    {
      nombre: 'Roshi',
      poder: 1000
    };

    // agregarNuevoPersonajerecibe como argumento la interfaz emitida desde el componente hijo agregar y lo inserta en el arreglo de personajes
    agregarNuevoPersonaje( argumento: Personaje ) {
      this.personajes.push( argumento );
    }

    constructor ( private dbzService: DbzService) {}
}
