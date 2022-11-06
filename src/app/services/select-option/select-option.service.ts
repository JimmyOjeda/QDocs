import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectOptionService {

  optionSelected: number = -1;

  constructor() { }

  updateOptionSelected (optionSelected: number) {
    this.optionSelected = optionSelected;
  }

}
