import { Component, OnInit } from '@angular/core';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';

@Component({
  selector: 'app-dictionary-view',
  templateUrl: './dictionary-view.component.html',
  styleUrls: ['./dictionary-view.component.css']
})
export class DictionaryViewComponent implements OnInit {
    foods = [
        {
            value: 'Corte',
            viewValue: 'Carne'
        },
        {
            value: 'Hamburguesa',
            viewValue: 'Cangreburguer'
        },
        {
            value: 'Torta',
            viewValue: 'Doradita'
        }
    ];
    states = [
        {
            value: 'UE',
            viewValue: 'Estados Unidos'
        },
        {
            value: 'UK',
            viewValue: 'Reino Unido'
        },
        {
            value: 'MX',
            viewValue: 'México'
        }
    ]
    selection: string = '';

  constructor(public dictionaryService: ManageDictionariesService) { }

  ngOnInit(): void {
    // this.dictionaries = this.dictionaryService.readAllDictionaries();
  }

}
