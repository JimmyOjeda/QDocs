import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {

    public databases = [
        "BD 01",
        "BD 02",
        "BD 03",
        "BD 04"
    ];

    public tables = [
        "Tabla 01",
        "Tabla 02",
        "Tabla 03",
        "Tabla 04"
    ];

    public columns = [
        "Id",
        "Nombre",
        "Dirección",
        "Teléfono",
        "Escuela",
        "Apodo",
        "Edad"
    ];

    public tokens: any = [];

    public DictionaryForm: FormGroup = new FormGroup({
        dictionaryName: new FormControl('', Validators.required),
        tokens: new FormArray([], Validators.required)
    })

    constructor() { }

    ngOnInit(): void {
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

    sendTokens() {
        if(this.DictionaryForm.status == 'VALID') {
            this.savetokens();
            const dictionaryTokens = {
                "dictionaryName": this.DictionaryForm.value.dictionaryName,
                "tokens": this.tokens
            };
            console.log(dictionaryTokens);
        }
    }

}
