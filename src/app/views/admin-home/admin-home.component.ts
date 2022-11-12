import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  options = [
    {
      "ImageSource" : "../assets/Images/libros.png",
    //   "Title" : "Bases de datos",
        "Title" : "Libros",
      "Link" : "/database-selection"
    },
    {
      "ImageSource" : "../assets/Images/diccionario.png",
      "Title" : "Diccionario",
      "Link" : "/dictionary-selection"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
