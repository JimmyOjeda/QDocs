import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Template } from 'src/app/model/template/template';
import { ManageTemplatesService } from 'src/app/services/manage-templates/manage-templates.service';
import { SelectOptionService } from 'src/app/services/select-option/select-option.service';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.css']
})
export class TemplateSelectionComponent implements OnInit {

  imageSource = "../assets/Images/plantillas-black.png";

  templateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    filename: new FormControl('', Validators.required)
  });

  file: File;

  modalTitle: string = "Crear plantilla";

  templates: Template[] = [];

  constructor(
    private router: Router,
    public selectOptionService: SelectOptionService,
    public manageTemplatesService: ManageTemplatesService  
  ) { }

  ngOnInit(): void {
    this.loadAllTemplates();
  }

  loadAllTemplates() {
    this.manageTemplatesService.readAllTemplates()
      .subscribe(
        response => this.templates = response.data,
        error => console.log(JSON.stringify(error))
      );
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
            name: response.data.name
          })
        }
      )
      
    }   
  }

  saveTemplateConfiguration () {
    let template = {
      _id : this.selectOptionService.optionSelected,
      name : this.templateForm.value.name,
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
      dictionary : "638714dc703736c900efabd0",
      name: "Nombre prueba",
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

  submit(){
    const formData = new FormData();
    formData.append('file', this.templateForm.get('fileSource')?.value!);
   
    /*
    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
      */
  }

}
