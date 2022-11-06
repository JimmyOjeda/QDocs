import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  options = [
    {
      "ImageSource" : "../assets/Images/basededatos.png",
      "Title" : "Bases de datos",
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
