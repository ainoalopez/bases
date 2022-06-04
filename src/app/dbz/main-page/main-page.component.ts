import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

    agregarNuevoPersonaje( argumento: Personaje ) {
      this.personajes.push( argumento );
    }
}
