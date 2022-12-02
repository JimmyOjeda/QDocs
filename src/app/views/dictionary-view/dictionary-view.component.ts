import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-view',
  templateUrl: './dictionary-view.component.html',
  styleUrls: ['./dictionary-view.component.css']
})
export class DictionaryViewComponent implements OnInit {

  foods = [
    {
      value: 'steak',
      viewValue: 'Steak'
    },
    {
      value: 'pizza',
      viewValue: 'Pizza'
    },
  ];

  states = [
    {
        value: 'UE',
        viewValue: 'Estados Unidos'
    },
    {
        value: 'UK',
        viewValue: 'Reino Unido'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
