import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    filename: new FormControl('', Validators.required),
    fileSource: new FormControl('', Validators.required)
  });

  modalTitle: string = "Crear plantilla";

  constructor(
    public selectOptionService: SelectOptionService,
    public manageTemplatesService: ManageTemplatesService  
  ) { }

  ngOnInit(): void {
  }

  prepareModalForNewTemplate () {
    this.modalTitle = "Crear plantilla";
    this.templateForm.reset();
    this.selectOptionService.updateSelectedOption(-1);
  }

  loadTemplateData (id: number) {
    this.modalTitle = "Editar plantilla";
    this.templateForm.reset();
    let template = this.manageTemplatesService.readTemplate(id);

    if (template) {
      this.templateForm.patchValue({
        name: template.name,
        filename: template.filename
      })
    }   
  }

  saveTemplateConfiguration () {
    let template = {
      id : this.selectOptionService.optionSelected,
      name : this.templateForm.value.name,
      file : this.templateForm.value.file,
      filename : this.templateForm.value.filename,
      fileSource : this.templateForm.value.fileSource
    }
    this.manageTemplatesService.updateTemplate(template);
  }

  addTemplateConfiguration () {
    this.manageTemplatesService.createTemplate({
      id: this.manageTemplatesService.readAllTemplates.length+1,
      name: this.templateForm.value.name,
      file : this.templateForm.value.file,
      filename: this.templateForm.value.filename,
      fileSource : "enlace"
    });
  }

  removeTemplateConfiguration () {
    this.manageTemplatesService.deleteTemplate(this.selectOptionService.optionSelected);
  }

  onFileChange(event: any) {
    if (event?.target?.files.length > 0) {
      const file = event.target.files[0];
      this.templateForm.patchValue({
        filename: file.name,
        fileSource: file
      });
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
