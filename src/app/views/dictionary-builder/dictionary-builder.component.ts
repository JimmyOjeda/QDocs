import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Database } from 'src/app/model/database/database';
import { ManageDatabasesService } from 'src/app/services/manage-databases/manage-databases.service';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {

    public databases: Database[];

    public tables = [
        "Tabla 1",
        "Tabla 2",
        "Tabla 3",
        "Tabla 04"
    ];

    public columns: any = [];

    public columnsEstados = [
        "Pais",
        "Estado",
        "Municipio"
    ];
    public columnsEscuela = [
        "Universidad",
        "Facultad",
        "Licenciatura"
    ];
    public columnsSimulacion = [
        "Nombre",
        "Apellido",
        "Edad"
    ];

    public updateColumns() {
        console.log(this.selection);
        if (this.selection == "Paises") {
            this.columns = this.columnsEstados;
        } else if (this.selection == "Escuela") {
            this.columns = this.columnsEscuela;
        } else if (this.selection == "Simulacion") {
            this.columns = this.columnsSimulacion;
        }
    }

    selection: string = "";

    public tokens: any = [];

    public DictionaryForm: FormGroup = new FormGroup({
        dictionaryName: new FormControl('', Validators.required),
        tokens: new FormArray([], Validators.required)
    })

    constructor(private dictionaryService: ManageDictionariesService,
        private router: Router, private databaseService: ManageDatabasesService) { }

    ngOnInit(): void {
        this.databases = this.databaseService.readAllDatabases();
    }

    private addFormToken(): void {
        const refTokens = this.DictionaryForm.get('tokens') as FormArray;
        refTokens.push( new FormGroup({
            token: new FormControl('', Validators.required)
        }));
    }

    private removeFormToken(index: number): void {
        const tokenRefs = this.getCtrl('tokens', this.DictionaryForm) as FormArray;
        tokenRefs.removeAt(index);
    }

    private savetokens() {
        for (let index = 0; index < this.tokens.length; index++) {
            this.tokens[index].value = this.DictionaryForm.value.tokens[index].token;
        }
    }

    getCtrl(key: string, form: FormGroup): any {
        return form.get(key);
    }

    columnsToTokens(index: number) {
        let column = this.columns[index];
        let newToken = {
            name: column,
            value: ""
        };
        this.tokens.push(newToken);
        this.addFormToken();
        this.columns = this.columns.filter((item:any) => item !== column);
    }

    removeToken(index: number) {
        let column = this.tokens[index];
        this.columns.push(column.name);
        this.removeFormToken(index);
        this.tokens = this.tokens.filter((item: any) => item !== column);
    }

    sendTokens() {
        if(this.DictionaryForm.status == 'VALID') {
            this.savetokens();
            const dictionaryTokens = {
                "dictionaryName": this.DictionaryForm.value.dictionaryName,
                "tokens": this.tokens
            };
            console.log(dictionaryTokens);
            this.dictionaryService.createDictionary(dictionaryTokens.dictionaryName);
            this.router.navigate(['/dictionary-selection']);
        }
    }

}
