import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from 'src/app/model/template/template';
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

  selectedTemplate: Observable<Template>;
  selectedRecord: Observable<RecordModel>;
  dictionaryColumns : ColumnModel[];
  record : any;

  constructor(private wizardService : WizardService) {
  }

  /**
  * Obtiene los datos que necesita del servicio de Wizard e inicializa sus
  * atributos.
  */
  ngOnInit(): void {
    this.selectedTemplate = this.wizardService.getSelectedTemplate();
    this.selectedRecord = this.wizardService.getSelectedRecord();
    this.selectedRecord.subscribe(
        record => {
            this.record = record
        }
    );
    let dictionary = this.wizardService.getDictionary();
    //this.dictionaryColumns = this.wizardService.getColumns(dictionary);
    this.dictionaryColumns = dictionary.entries;
  }

}
