import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnModel } from 'src/app/models/ColumnModel';
import { RecordModel } from 'src/app/models/RecordModel';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-record-wizard',
  templateUrl: './record-wizard.component.html',
  styleUrls: ['./record-wizard.component.css']
})
export class RecordWizardComponent implements OnInit {

  records: Observable<RecordModel[]>;
  dictionaryColumns: ColumnModel[];
  columnsToDisplay: string[];
  selectedRecord : Observable<RecordModel>;
  @Output() completedStep : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public wizardService : WizardService) { }

  ngOnInit(): void {
    this.records = this.wizardService.getRecords()
    this.selectedRecord = this.wizardService.getSelectedRecord();
    this.dictionaryColumns = this.wizardService.getDictionary().columns;
    this.columnsToDisplay = this.dictionaryColumns.map(column => column.api_name);
  }

  handleSelection(row : RecordModel){
    this.wizardService.selectRecord(row);
    const clickedRows = document.getElementsByClassName('demo-row-is-clicked');
    console.log(clickedRows);
    this.completedStep.emit(clickedRows.length === 0);
  }
}
