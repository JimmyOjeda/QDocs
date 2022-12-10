/**
  * Servicio que permite interactuar con la guía de generación de documentos.
  *
*/
import { ManageDatabasesService } from 'src/app/services/manage-databases/manage-databases.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DictionaryModel } from 'src/app/models/DictionaryModel';
import { OptionModel } from 'src/app/models/OptionModel';
import { TemplateModel } from 'src/app/models/TemplateModel';
import { RecordModel } from 'src/app/models/RecordModel';
import { DataSource } from '@angular/cdk/collections';
import { ManageTemplatesService } from '../manage-templates/manage-templates.service';
import { Template } from 'src/app/model/template/template';
import { TemplateResponse } from 'src/app/model/template/templates-response';
import { TemplatesResponse } from 'src/app/model/template/template-response';
import { ManageDictionariesService } from '../manage-dictionaries/manage-dictionaries.service';
import { ManageEntriesService } from '../manage-entries/manage-entries.service';
import { ColumnModel } from 'src/app/models/ColumnModel';
import { Database } from 'src/app/model/database/database';

/* const TEMPLATES = [
    {
      "id": "1",
      "title" : "Plantilla 1",
      "link" : "enlace",
      "dictionary_id": "1"
    },
    {
      "id": "2",
      "title" : "Plantilla 2",
      "link" : "enlace",
      "dictionary_id": "1"
    },
    {
      "id": "3",
      "title" : "Plantilla 3",
      "link" : "enlace",
      "dictionary_id": "1"
    },
    {
      "id": "4",
      "title" : "Plantilla 4",
      "link" : "enlace",
      "dictionary_id": "1"
    },
    {
      "id": "5",
      "title" : "Plantilla 5",
      "link" : "enlace",
      "dictionary_id": "1"
    }
];

const DICTIONARIES : DictionaryModel[] = [
  {
    _id: '1',
    name: 'Ventas',
    database: '1',
    columns: [
      {
        entry: 'nombre',
        label: 'Nombre'
      },
      {
        entry: 'apellido',
        label: 'Apellido'
      },
      {
        entry: 'edad',
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
]; */

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private templates: Template[];
  private selectedTemplate: Template;
  private database : Database;
  //private dictionaries: DictionaryModel[];
  private dictionary : DictionaryModel;
  private records: RecordModel[];
  private records$ : BehaviorSubject<RecordModel[]>;
  private selectedRecord$: BehaviorSubject<RecordModel> = new BehaviorSubject<RecordModel>(null);

  constructor(
    private manageTemplatesService: ManageTemplatesService,
    private manageDictionariesService: ManageDictionariesService,
    private manageDatabasesService : ManageDatabasesService,
    private manageEntriesService: ManageEntriesService
  ) {
    this.loadTemplates();

    this.records$ = new BehaviorSubject<RecordModel[]>(this.records);
  }

  /**
  * Servicio que obtiene todas las plantillas seleccionadas por el usuario.
  *
  */
  loadTemplates() {
    this.manageTemplatesService.readAllTemplates().subscribe(
      response => {
        this.templates = response.data;
        console.log(this.templates);
      }
    );
  }

  /**
  * Servicio que carga la base de datos seleccionada por el usuario.
  *
  */
  loadDatabase() {
    this.manageDictionariesService.readDictionary(this.selectedTemplate.dictionary).subscribe(
        response => {
            this.dictionary = response.data

            this.manageDatabasesService.getRecords(this.dictionary.database).subscribe(
                response => {
                  this.records$.next(response.data);
                }
              )
        }
    );
  }

  /**
  * Servicio que obtiene las entradas del diccionario seleccionado.
  *
  */
  loadRecords() {
    this.manageEntriesService.readAllEntries().subscribe(
      response => {
        this.records = response.data;
        console.log("Entradas: ")
        console.log(this.records);
      }
    )
  }

  /**
  * Servicio que obtiene todas las plantillas almacenadas en el backend
  *
  */
  getTemplates() : Observable<TemplatesResponse>{
    return this.manageTemplatesService.readAllTemplates();
  }

  /**
  * Servicio que carga la plantilla seleccionada por el usuario.
  *
  * @return devuelve la plantilla seleccionada por el usuario de todas las
  * que se tienen almacenadas por el backend
  */
  getSelectedTemplate() : Observable<Template>{
    return of(this.selectedTemplate);
  }

  /**
  * Servicio que obtiene la plantilla seleccionada
  *
  * @param option se obtiene el ID de la opción seleccionada por le usuario para
  * obtener la configuración de base de datos almacenadas.
  */
  selectTemplate(option : OptionModel) : void{
    if(option){
      let selected = this.templates.find(template => template._id === option._id);
      if(selected){
        this.selectedTemplate = selected;
        this.loadDatabase();
      }
    }else{
      this.selectedTemplate = null;
    }
  }

  /**
  * Servicio el diccionario seleccionado por el usuario.
  *
  * @return el diccionario seleccionado por el usuario.
  *
  */
  getDictionary() : DictionaryModel{
    //return this.dictionaries.find(dictionary => dictionary._id == this.selectedTemplate.dictionary);
    return this.dictionary;
  }

  /**
  * Servicio que obtiene las columnas de la base de datos seleccionada.
  *
  * @return devuelve las columnas solicitadas de la base de datos seleccionada.
  */
  getColumns(dictionary: DictionaryModel) : ColumnModel[]{
    let columns : ColumnModel[] = new Array;
    this.records.forEach(record => {
      /* if (record.dictionary == dictionary._id) {
        columns.push(
          {
            column: record._id,
            token: record.column
          }
        )
      } */
    });
    return columns
  }

  /**
  * Servicio que obtiene las entradas de la base de datos seleccionada.
  *
  * @return Observable<RecordModel[]> Un observable de la respuesta del backend,
  * la cual contiene las entradas de la base de datos consultada.
  *
  */
  getRecords() : Observable<RecordModel[]>{
    return this.records$.asObservable();
  }

  /**
  * Servicio que obtiene únicamente las entradas seleccionadas dentro de
  * todas las almacenadas.
  *
  * @return Observable<RecordModel> Un observable con respuesta
  * la cual contine solamente las entradas establecidas en el diccionario.
  *
  */
  getSelectedRecord() : Observable<RecordModel>{
    return this.selectedRecord$.asObservable();
  }

  /**
  * Servicio que establece la tupla de la base de datos que sustituirá dentro
  * del documento a generar.
  *
  */
  selectRecord(row : RecordModel) : void{
    if(this.selectedRecord$.value){
      if(this.selectedRecord$.value._id === row._id){
        this.selectedRecord$.next(null);
      }else{
        this.selectedRecord$.next(row);
      }
    }else{
      this.selectedRecord$.next(row);
    }
  }

}
