import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageDatabasesService } from 'src/app/services/manage-databases/manage-databases.service';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';
import { ManageEntriesService } from 'src/app/services/manage-entries/manage-entries.service';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {

    databases: any = [];
    keys: any [];
    tables: any = [];
    columns: any = [];
    databaseIdSelected: string;
    tableSelected: string;

    tokens: any = [];

    DictionaryForm: FormGroup = new FormGroup({
        dictionaryName: new FormControl('', Validators.required),
        tokens: new FormArray([], Validators.required)
    })

    constructor(
        private router: Router,
        private databaseService: ManageDatabasesService,
        private dictionaryService: ManageDictionariesService,
        private entryService: ManageEntriesService) { }

    ngOnInit(): void {
        this.loadAllDatabases();
        /*this.databaseService.getRecords(this.databaseIdSelected).subscribe(
            response => console.log(response.data)
        )*/
    }

    /**
     * Agregar los tokens del diccionario como elementos del formulario de tokens.
    */
    private addFormToken(): void {
        const refTokens = this.DictionaryForm.get('tokens') as FormArray;
        refTokens.push( new FormGroup({
            token: new FormControl('', Validators.required)
        }));
    }

    /**
     * Remueve un elemento del formulario.
     *
     * @param index El indice del elemento a remover.
    */
    private removeFormToken(index: number): void {
        const tokenRefs = this.getCtrl('tokens', this.DictionaryForm) as FormArray;
        tokenRefs.removeAt(index);
    }
    
    /**
     * Obtiene el valor de un elemento del form.
     *
     * @param key La llave del elemento a buscar.
     * @param form El formulario que contiene la llave.
    */
    private savetokens() {
        for (let index = 0; index < this.tokens.length; index++) {
            this.tokens[index].value = this.DictionaryForm.value.tokens[index].token;
        }
    }

     /**
     * Obtiene el valor de un elemento del form.
     *
     * @param key La llave del elemento a buscar.
     * @param form El formulario que contiene la llave.
    */
    getCtrl(key: string, form: FormGroup): any {
        return form.get(key);
    }

     /**
     * Realiza un guardado local de tokens en el array de columnas.
     *
     * @param index El indice de la tabla.
    */
    columnsToTokens(index: number) {
        let column = this.columns[index];
        let newToken = {
            name: column,
            value: ""
        };
        this.tokens.push(newToken);
        this.addFormToken();
        this.columns = this.columns.filter((item: any) => item !== column);
    }

     /**
     * Elimina un token de la lista de tokens.
     *
     * @param index El indice del token a eliminar.
    */
    removeToken(index: number) {
        let column = this.tokens[index];
        this.columns.push(column.name);
        this.removeFormToken(index);
        this.tokens = this.tokens.filter((item: any) => item !== column);
    }

     /**
     * Realiza el almacenado local correspondiente del diccionario 
     * con sus datos cargados desde el form, así como la creación
     * en el backend con el consumo de un endpoint de la API.
    */
    saveDictionary() {
        if(this.DictionaryForm.status == 'VALID') {
            this.savetokens();
            const dictionaryTokens = {
                "dictionaryName": this.DictionaryForm.value.dictionaryName,
                "databaseSelected": this.databaseIdSelected,
                "tableSelected": this.tableSelected,
                "tokens": this.tokens
            };
            console.log(dictionaryTokens);

            // * saving dictionaries in database
            this.dictionaryService.createDictionary({
                "name": this.DictionaryForm.value.dictionaryName,
                "database": this.databaseIdSelected
            }).subscribe(
                (response: any) => {
                    dictionaryTokens.tokens.forEach((token: any) => {
                        this.entryService.createEntries(response.data._id, token)
                        .subscribe(
                            response => {},
                            error => console.log(JSON.stringify(error))
                        )
                    });
                    this.router.navigateByUrl('/dictionary-selection')
                },
                error => console.log(JSON.stringify(error))
            )
        }
    }

    /**
     * Consume una función del servicio de bases de datos y obtiene las bases
     * de datos del backend.
     */
    loadAllDatabases() {
        this.databaseService.readAllDatabases()
            .subscribe(
                response => this.databases = response.data,
                error => console.log(JSON.stringify(error))
            );
    }

     /**
     * Carga la tabla asociada a la base de datos y la asigna al menú de
     * opciones de tablas.
     * Actualiza los tockens correspondientes a dicha base de datos.
    */
    loadTablesFromDatabase() {
        this.databaseService.readDatabase(this.databaseIdSelected).subscribe(
            response => {
                this.tables = [response.data.table];
                this.tableSelected = response.data.table;
                this.updateTokens();
            }
        )
    }
    

     /**
     * Realiza una consulta que obtiene todos los registros de una base de datos.
     *
     * @param database El id de la base de datos a consultar.

    */
    loadColumnsFromDatabase(database: string) {
        this.databaseService.getRecords(database).subscribe(
            response => this.columns = Object.keys(response.data[0])
        )
    }

     /**
     * Acciona el cargado de columnas
    */
    updateTokens() {
        this.loadColumnsFromDatabase(this.databaseIdSelected);
    }

}
