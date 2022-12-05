import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, find, map, Observable, of, pipe } from 'rxjs';
import { Template } from 'src/app/model/template/template';
import { TemplatesResponse } from 'src/app/model/template/template-response';
import { OptionModel } from 'src/app/models/OptionModel';
import { TemplateModel } from 'src/app/models/TemplateModel';
import { ManageTemplatesService } from 'src/app/services/manage-templates/manage-templates.service';
import { StepsService } from 'src/app/services/steps/steps.service';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-template-wizard',
  templateUrl: './template-wizard.component.html',
  styleUrls: ['./template-wizard.component.css']
})
export class TemplateWizardComponent implements OnInit {

  templates : Observable<Template[]>;
  selectedTemplate : Observable<Template>;
  @Output() completedStep : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private wizardService: WizardService,
    private manageTemplatesService : ManageTemplatesService
  ) { }

  ngOnInit(): void {
    this.manageTemplatesService.readAllTemplates().subscribe(
      response => this.templates = of(response.data)
    )
    
    
    this.selectedTemplate = this.wizardService.getSelectedTemplate();
  }

  onSelectedTemplate(selectedOption : OptionModel | null){
    this.wizardService.selectTemplate(selectedOption);
    if(selectedOption){
      this.completedStep.emit(true);
    }else{
      this.completedStep.emit(false);
    }
  }

}
