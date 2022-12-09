import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Template } from 'src/app/model/template/template';
import { DictionaryModel } from 'src/app/models/DictionaryModel';
import { ManageDictionariesService } from 'src/app/services/manage-dictionaries/manage-dictionaries.service';
import { ManageTemplatesService } from 'src/app/services/manage-templates/manage-templates.service';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.css']
})
export class TemplateSelectionComponent implements OnInit {

  dictionarySelected : string;
  dictionaries : DictionaryModel[];

  imageSource = "../assets/Images/plantillas-black.png";

  templateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dictionary: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    filename: new FormControl('', Validators.required)
  });

  file: File;

  modalTitle: string = "Crear plantilla";

  templates: Template[] = [];

  constructor(
    private router: Router,
    public selectOptionService: SelectOptionService,
    public manageTemplatesService: ManageTemplatesService,
    public manageDictionariesService : ManageDictionariesService
  ) { }

  ngOnInit(): void {
    this.loadAllTemplates();
    this.loadAllDictionaries();
  }

  loadAllTemplates() {
    this.manageTemplatesService.readAllTemplates()
      .subscribe(
        response => this.templates = response.data,
        error => console.log(JSON.stringify(error))
      );
  }

  loadAllDictionaries() {
    this.manageDictionariesService.readAllDictionaries().subscribe(
      response => {
        this.dictionaries = response.data
        console.log(this.dictionaries);
      }
    )
  }

  prepareModalForNewTemplate () {
    this.modalTitle = "Crear plantilla";
    this.templateForm.reset();
    this.selectOptionService.updateSelectedOption(-1);
  }

  loadTemplateData (id: string) {
    this.modalTitle = "Editar plantilla";
    this.templateForm.reset();
    let template = this.manageTemplatesService.readTemplate(id);

    if (template) {
      template.subscribe(
        response => {
          this.templateForm.patchValue({
            name: response.data.name,
            dictionary: response.data.dictionary
          })
        }
      )

    }
  }

  saveTemplateConfiguration () {
    let template = {
      _id : this.selectOptionService.optionSelected,
      name : this.templateForm.value.name,
      dictionary: this.templateForm.value.dictionary,
      file : this.file
    }
    this.manageTemplatesService.updateTemplate(template)
      .subscribe(
        response => this.loadAllTemplates(),
        error => console.log(JSON.stringify(error))
      )
  }

  addTemplateConfiguration () {
    this.manageTemplatesService.createTemplate({
      dictionary : this.templateForm.value.dictionary,
      name: this.templateForm.value.name,
      file: this.file
    }).subscribe(
      response => this.loadAllTemplates(),
      error => console.log(JSON.stringify(error))
    )
  }

  removeTemplateConfiguration () {
    this.manageTemplatesService.deleteTemplate(this.selectOptionService.optionSelected)
      .subscribe(
        response => this.loadAllTemplates(),
        error => console.log(JSON.stringify(error))
      )
  }

  onFileChange(event: any) {
    if (event?.target?.files.length > 0) {
      const file = event.target.files[0];
      this.templateForm.patchValue({
        filename: file.name
      });
      this.file = file;
      console.log(file);
      console.log(file.name);
    }
  }

}
