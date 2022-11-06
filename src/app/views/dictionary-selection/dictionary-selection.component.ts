import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary-selection',
  templateUrl: './dictionary-selection.component.html',
  styleUrls: ['./dictionary-selection.component.css']
})
export class DictionarySelectionComponent implements OnInit {

  imageSource = "../assets/Images/diccionarioblack.png";

  dictionaries = [
    {
      "title" : "Diccionario 01",
      "link" : "enlace"
    },
    {
      "title" : "Diccionario 02",
      "link" : "enlace"
    },
    {
      "title" : "Diccionario 03",
      "link" : "enlace"
    },
    {
      "title" : "Diccionario 04",
      "link" : "enlace"
    },
    {
      "title" : "Diccionario 05",
      "link" : "enlace"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
