import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidenavService {

  isShowing: boolean = false;

  constructor() { }

  toggle () {
    this.isShowing = !this.isShowing;
  }

  close () {
    this.isShowing = false;
  }
}
