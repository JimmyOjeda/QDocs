import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-selection',
  templateUrl: './database-selection.component.html',
  styleUrls: ['./database-selection.component.css']
})
export class DatabaseSelectionComponent implements OnInit {

  imageSource = "../assets/Images/basededatosblack.png";
  databases = [
    {
      "title" : "Base de datos 01",
      "link" : "enlace"
    },
    {
      "title" : "Base de datos 02",
      "link" : "enlace"
    },
    {
      "title" : "Base de datos 03",
      "link" : "enlace"
    },
    {
      "title" : "Base de datos 04",
      "link" : "enlace"
    },
    {
      "title" : "Base de datos 05",
      "link" : "enlace"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
