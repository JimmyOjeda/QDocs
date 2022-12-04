import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageDatabasesService } from 'src/app/services/manage-databases/manage-databases.service';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {

    databases: any = [];
    tables: any = [];
    columns = [
        "Id",
        "Nombre",
        "Dirección",
        "Teléfono",
        "Escuela",
        "Apodo",
        "Edad"
    ];
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
        private dictionaryService: ManageDictionariesService) { }

    ngOnInit(): void {
        this.loadAllDatabases();
        this.loadTablesFromDatabase();
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
        this.columns = this.columns.filter(item => item !== column);
    }

    removeToken(index: number) {
        let column = this.tokens[index];
        this.columns.push(column.name);
        this.removeFormToken(index);
        this.tokens = this.tokens.filter((item: any) => item !== column);
    }

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

            // * saving dictionaries
            this.dictionaryService.createDictionary({
                "name": this.DictionaryForm.value.dictionaryName,
                "database": this.databaseIdSelected
            }).subscribe(
                response => this.router.navigateByUrl('/dictionary-selection'),
                error => console.log(JSON.stringify(error))
            )
        }
    }

    loadAllDatabases() {
        this.databaseService.readAllDatabases()
            .subscribe(
                response => this.databases = response.data,
                error => console.log(JSON.stringify(error))
            );
    }

    loadTablesFromDatabase() {
        this.tables = [
            "Tabla 01",
            "Tabla 02",
            "Tabla 03",
            "Tabla 04"
        ];
    }

}
