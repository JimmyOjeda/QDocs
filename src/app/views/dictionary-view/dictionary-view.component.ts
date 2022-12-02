import { Component, OnInit } from '@angular/core';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';

@Component({
  selector: 'app-dictionary-view',
  templateUrl: './dictionary-view.component.html',
  styleUrls: ['./dictionary-view.component.css']
})
export class DictionaryViewComponent implements OnInit {
    Qdocs_prueba = [
        {
            value: 'Pais',
            viewValue: '${pais}'
        },
        {
            value: 'Estado',
            viewValue: '${estado}'
        },
        {
            value: 'Municipio',
            viewValue: '${municipio}'
        }
    ];
    Diccionario1 = [
        {
            value: 'Universidad',
            viewValue: '${universidad}'
        },
        {
            value: 'Facultad',
            viewValue: '${facultad}'
        },
        {
            value: 'Licenciatura',
            viewValue: '${licenciatura}'
        }
    ]
    Simulacion = [
      {
          value: 'Nombre',
          viewValue: '${nombre}'
      },
      {
          value: 'Apellido',
          viewValue: '${apellido}'
      },
      {
          value: 'Edad',
          viewValue: '${edad}'
      }
    ]

    selection: string = '';

  constructor(public dictionaryService: ManageDictionariesService) { }

  ngOnInit(): void {
    // this.dictionaries = this.dictionaryService.readAllDictionaries();
  }

}
