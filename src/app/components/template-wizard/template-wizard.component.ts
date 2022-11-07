import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, find, map, Observable, pipe } from 'rxjs';
import { OptionModel } from 'src/app/models/OptionModel';
import { TemplateModel } from 'src/app/models/TemplateModel';
import { StepsService } from 'src/app/services/steps/steps.service';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-template-wizard',
  templateUrl: './template-wizard.component.html',
  styleUrls: ['./template-wizard.component.css']
})
export class TemplateWizardComponent implements OnInit {

  templates : Observable<TemplateModel[]>;
  selectedTemplate : Observable<TemplateModel>;
  @Output() completedStep : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private wizardService : WizardService) { }

  ngOnInit(): void {
    this.templates = this.wizardService.getTemplates();
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
