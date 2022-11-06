import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.css']
})
export class TemplateSelectionComponent implements OnInit {

  imageSource = "../assets/Images/plantillas-black.png";
  templates = [
    {
      id : 1,
      name : "Plantilla 1",
      link : "enlace"
    },
    {
      id : 2,
      name : "Plantilla 2",
      link : "enlace"
    },
    {
      id : 3,
      name : "Plantilla 3",
      link : "enlace"
    },
    {
      id : 4,
      name : "Plantilla 4",
      link : "enlace"
    },
    {
      id : 5,
      name : "Plantilla 5",
      link : "enlace"
    }
  ];

  templateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    template: new FormControl('', Validators.required)
  });

  lastOptionOpened: number = 0;
  modalTitle: string = "Crear plantilla";

  constructor(private router: Router, public selectOptionService: SelectOptionService) { }

  ngOnInit(): void {
  }

  createTemplateConfiguration () {
    this.modalTitle = "Crear plantilla";
    this.templateForm.reset();
  }

  loadTemplateData (id: number) {
    this.modalTitle = "Editar plantilla";
    this.lastOptionOpened = id-1;
    let template = this.templates.find(template => template.id === id)!;

    this.templateForm.patchValue({
      name: template.name
    })
  }

  saveTemplateConfiguration () {
    let template = this.templates.find(template => template.id === this.selectOptionService.optionSelected)!;
    let index = this.templates.indexOf(template);

    this.templates[index].name = this.templateForm.value.name!;
    this.templates[index].link = this.templateForm.value.template!;

  }

  removeTemplateConfiguration () {
    let template = this.templates.find(template => template.id === this.selectOptionService.optionSelected)!;
    this.templates.splice(this.templates.indexOf(template),1);
  }

  addTemplateConfiguration () {
    let newTemplateConfiguration = {
      id: this.templates.length+1,
      name: this.templateForm.value.name!,
      link : "enlace"
    };
    this.templates.push(newTemplateConfiguration);
  }

}
