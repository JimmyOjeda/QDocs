import { Component, OnInit } from '@angular/core';
import { PdfManagerService } from 'src/app/services/pdf-manager/pdf-manager.service';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-generate-docs-complete',
  templateUrl: './generate-docs-complete.component.html',
  styleUrls: ['./generate-docs-complete.component.css']
})
export class GenerateDocsCompleteComponent implements OnInit {

  fileURL : string;
  selectedTemplate: string;
  selectedRecord: string;

  constructor(
    private pdfManager: PdfManagerService,
    private wizardService: WizardService
  ) {
    this.wizardService.getSelectedTemplate().subscribe(
      response => this.selectedTemplate = response._id
    )
    this.wizardService.getSelectedRecord().subscribe(
      response => this.selectedRecord = response._id
    )
  }

  ngOnInit(): void {
    let template = this.selectedTemplate;
    let record = this.selectedRecord;
    this.pdfManager.readFile(template,record).subscribe(
      response => {
        var blob = new Blob([response], {type: "application/pdf"});
        this.fileURL = URL.createObjectURL(blob);
        window.open(this.fileURL);
      }
    )
  }

   /**
    * Abre en una nueva pestaña el documento generado.
  */
  openDocument () {
    if (this.fileURL) {
      window.open(this.fileURL);
    }
  }
  
}
