import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {

    dictionaryName = ""
    databases = [
        "BD 01",
        "BD 02",
        "BD 03",
        "BD 04"
    ]
    tables = [
        "Tabla 01",
        "Tabla 02",
        "Tabla 03",
        "Tabla 04"
    ]
    columns = [
        "Id",
        "Nombre",
        "Dirección",
        "Teléfono",
        "Escuela",
        "Apodo",
        "Edad"
    ];
    tokens: any = [];

    constructor() { }

    ngOnInit(): void {
    }

    columnsToTokens(index: number) {
        let column = this.columns[index];
        let newToken = {
        name: column,
        value: ""
        };
        this.tokens.push(newToken);
        this.columns = this.columns.filter(item => item !== column);
    }

    tokensToColumns(index: number) {
        let column = this.tokens[index];
        this.columns.push(column);
        this.tokens = this.tokens.filter((item: any) => item !== column);
    }

    sendTokens() {
        const dictionaryTokens = {
            "dictionaryName": this.dictionaryName,
            "tokens": this.tokens
        };
        console.log(dictionaryTokens);
    }

}
