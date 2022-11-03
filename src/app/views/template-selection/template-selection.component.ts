import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.css']
})
export class TemplateSelectionComponent implements OnInit {

  imageSource = "../assets/Images/plantillas-black.png";
  templates = [
    {
      "title" : "Plantilla 1",
      "link" : "enlace"
    },
    {
      "title" : "Plantilla 2",
      "link" : "enlace"
    },
    {
      "title" : "Plantilla 3",
      "link" : "enlace"
    },
    {
      "title" : "Plantilla 4",
      "link" : "enlace"
    },
    {
      "title" : "Plantilla 5",
      "link" : "enlace"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
