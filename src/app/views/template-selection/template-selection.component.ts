import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.css']
})
export class TemplateSelectionComponent implements OnInit {

  imageSource = "../assets/Images/plantillas-black.png";
  templates = [
    {
      "id" : 1,
      "title" : "Plantilla 1",
      "link" : "enlace"
    },
    {
      "id" : 2,
      "title" : "Plantilla 2",
      "link" : "enlace"
    },
    {
      "id" : 3,
      "title" : "Plantilla 3",
      "link" : "enlace"
    },
    {
      "id" : 4,
      "title" : "Plantilla 4",
      "link" : "enlace"
    },
    {
      "id" : 5,
      "title" : "Plantilla 5",
      "link" : "enlace"
    }
  ];

  data = [
    {
      name : "Plantilla 1",
      link : "enlace",
      fileName : "Nombre Archivo"
    },
    {
      name : "Plantilla 2",
      link : "enlace",
      fileName : "Nombre Archivo"
    },
    {
      name : "Plantilla 3",
      link : "enlace",
      fileName : "Nombre Archivo"
    },
    {
      name : "Plantilla 4",
      link : "enlace",
      fileName : "Nombre Archivo"
    },
    {
      name : "Plantilla 5",
      link : "enlace",
      fileName : "Nombre Archivo"
    }
  ];

  templateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    template: new FormControl('', Validators.required)
  });

  lastOptionOpened: number = 0;
  modalTitle: string = "Crear plantilla";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createTemplateConfiguration () {
    this.modalTitle = "Crear plantilla";
    this.templateForm.reset();
  }

  loadTemplateData (id: number) {
    this.modalTitle = "Editar plantilla";
    this.lastOptionOpened = id-1;
    let myId = id;

    this.templateForm.patchValue({
      name: this.data[id-1].name,
      template: this.data[id-1].link
    })
  }

  saveTemplateConfiguration () {
    this.data[this.lastOptionOpened] = {
      name: this.templateForm.value.name!,
      link: this.templateForm.value.template!,
      fileName : "Se debe sacar el nombre de archivo"
    }
  }

  goToTemplateSelection () {
    this.router.navigateByUrl('/data-dictionary');
  }

}
