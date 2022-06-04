import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); // con el output emitimos eventos, siempre enviaremos un tipo de dato
                                                                            // en este caso emitimos el Personaje, la interfaz

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log( this.nuevo );
    this.onNuevoPersonaje.emit( this.nuevo ); // desde el commponente hijo emitimos el nuevo personaje al main-paige

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
