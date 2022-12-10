/**
  * Servicio que permite interactuar con el menú desplegable
  *
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidenavService {

  isShowing: boolean = false;

  constructor() { }

  /**
  * Sirve para abrir el menú desplegable
  *
  */
  toggle () {
    this.isShowing = !this.isShowing;
  }

  /**
  * Sirve para ocultar el menú desplegable
  *
  */
  close () {
    this.isShowing = false;
  }
}
