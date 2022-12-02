import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnModel } from 'src/app/models/ColumnModel';
import { RecordModel } from 'src/app/models/RecordModel';
import { TemplateModel } from 'src/app/models/TemplateModel';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-summary-wizard',
  templateUrl: './summary-wizard.component.html',
  styleUrls: ['./summary-wizard.component.css']
})
export class SummaryWizardComponent implements OnInit {

  selectedTemplate: Observable<TemplateModel>;
  selectedRecord: Observable<RecordModel>;
  dictionaryColumns : ColumnModel[];

  constructor(public wizardService : WizardService) {
   }

  ngOnInit(): void {
    this.selectedTemplate = this.wizardService.getSelectedTemplate();
    this.selectedRecord = this.wizardService.getSelectedRecord();
    this.dictionaryColumns = this.wizardService.getDictionary().columns;
  }

}
