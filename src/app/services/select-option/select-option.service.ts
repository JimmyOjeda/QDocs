/**
  * Servicio que permite saber la selección del usuario en ciertas vistas.
  *
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectOptionService {

  optionSelected: number = -1;

  constructor() { }

  /**
     * Guarda en una variable el número de ID del objeto que fue seleccionado
     * en la vista que se encuentre el usuario.
     *
     * @param optionSelected el número del ID que se guardará.
    */
  updateSelectedOption (optionSelected: number) {
    this.optionSelected = optionSelected;
  }

}
