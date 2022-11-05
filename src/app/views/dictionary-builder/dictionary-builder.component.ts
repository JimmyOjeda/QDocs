import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-builder',
  templateUrl: './dictionary-builder.component.html',
  styleUrls: ['./dictionary-builder.component.css']
})
export class DictionaryBuilderComponent implements OnInit {
  table = [
    "Id",
    "Nombre",
    "Dirección",
    "Teléfono",
    "Escuela",
    "Apodo",
    "Edad"
  ];

  // tempArray: any = [];
  tokens: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  tableToTokens(index: number) {
    this.tokens.push(this.table[index]);
    this.table = this.table.filter(item => item !== this.table[index] )
  }

  tokensToTable(index: number) {
    this.table.push(this.tokens[index]);
    this.tokens = this.tokens.filter((item: any) => item !== this.tokens[index]);
  }

}
