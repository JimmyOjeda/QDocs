import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {

  options = [
    {
      "ImageSource" : "../assets/Images/plantilla.png",
      "Title" : "Plantillas",
      "Link" : "enlace_plantillas.php"
    },
    {
      "ImageSource" : "../assets/Images/documento.png",
      "Title" : "Documento",
      "Link" : "enlace_documento.php"
      }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
