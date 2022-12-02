import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DictionaryModel } from 'src/app/models/DictionaryModel';
import { OptionModel } from 'src/app/models/OptionModel';
import { TemplateModel } from 'src/app/models/TemplateModel';
import { RecordModel } from 'src/app/models/RecordModel';
import { DataSource } from '@angular/cdk/collections';

const TEMPLATES = [
    {
      "id": "1",
      "title" : "Plantilla 1",
      "link" : "enlace",
      "image": "../assets/Images/plantillas-black.png",
      "dictionary_id": "1"
    },
    {
      "id": "2",
      "title" : "Plantilla 2",
      "link" : "enlace",
      "image": "../assets/Images/plantillas-black.png",
      "dictionary_id": "1"
    },
    {
      "id": "3",
      "title" : "Simulacion",
      "link" : "enlace",
      "image": "../assets/Images/plantillas-black.png",
      "dictionary_id": "1"
    }
];

const DICTIONARIES : DictionaryModel[] = [
  {
    id: '1',
    name: 'Ventas',
    database_id: '1',
    table_id: 'clientes_table',
    columns: [
      {
        api_name: 'nombre',
        label: 'Nombre'
      },
      {
        api_name: 'apellido',
        label: 'Apellido'
      },
      {
        api_name: 'edad',
        label: 'Edad'
      }
    ]
  }
]

const RECORDS = [
  {
    id: "1",
    value: {
      'nombre' : 'Alex',
      'apellido' : 'Torre',
      'edad' : 22
    }
  },
  {
    id: "2",
    value: {
      'nombre' : 'Jimmy',
      'apellido' : 'Ojeda',
      'edad' : 22
    }
  },
];

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private templates$: BehaviorSubject<TemplateModel[]> = new BehaviorSubject<TemplateModel[]>(TEMPLATES);
  private selectedTemplate$: BehaviorSubject<TemplateModel> = new BehaviorSubject<TemplateModel>(null);
  private records$ : BehaviorSubject<RecordModel[]> = new BehaviorSubject<RecordModel[]>(RECORDS);
  private selectedRecord$: BehaviorSubject<RecordModel> = new BehaviorSubject<RecordModel>(null);

  constructor() {
   }

  getTemplates() : Observable<TemplateModel[]>{
    return this.templates$.asObservable();
  }

  getSelectedTemplate() : Observable<TemplateModel>{
    return this.selectedTemplate$.asObservable();
  }

  selectTemplate(option : OptionModel) : void{
    if(option){
      let selected = this.templates$.value.find(template => template.id === option.id);
      if(selected){
        this.selectedTemplate$.next(selected);
      }
    }else{
      this.selectedTemplate$.next(null);
    }
  }

  getDictionary() : DictionaryModel{
    return DICTIONARIES.find(dictionary => dictionary.id === this.selectedTemplate$.value.dictionary_id);
  }

  getRecords() : Observable<RecordModel[]>{
    return this.records$.asObservable();
  }

  getSelectedRecord() : Observable<RecordModel>{
    return this.selectedRecord$.asObservable();
  }

  selectRecord(row : RecordModel) : void{
    if(this.selectedRecord$.value){
      if(this.selectedRecord$.value.id === row.id){
        this.selectedRecord$.next(null);
      }else{
        this.selectedRecord$.next(row);
      }
    }else{
      this.selectedRecord$.next(row);
    }
  }

}
