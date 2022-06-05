import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor( private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); // con el output emitimos eventos, siempre enviaremos un tipo de dato
                                                                            // en este caso emitimos el Personaje, la interfaz

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; } //.trim() elimina los espacios en blanco aambos ladosde la cadena

    // this.onNuevoPersonaje.emit( this.nuevo ); // desde el commponente hijo emitimos el nuevo personaje al main-paige

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
