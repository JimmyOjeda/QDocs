import { Component, OnInit } from '@angular/core';
import { PdfManagerService } from 'src/app/services/pdf-manager/pdf-manager.service';

@Component({
  selector: 'app-generate-docs-complete',
  templateUrl: './generate-docs-complete.component.html',
  styleUrls: ['./generate-docs-complete.component.css']
})
export class GenerateDocsCompleteComponent implements OnInit {

  fileURL : string;

  constructor(private pdfManager: PdfManagerService) { }

  ngOnInit(): void {
    this.pdfManager.readFile("63942c1d7f7ab97e03df0fcb","63870012b2b86a89eeca5cf1").subscribe(
      response => {
        /*var fileURL = URL.createObjectURL(response);
        window.open(fileURL);*/
        //this.modifyPdf(response)
        var blob = new Blob([response], {type: "application/pdf"});
        this.fileURL = URL.createObjectURL(blob);
        window.open(this.fileURL);
      }
    )
  }

  openDocument () {
    if (this.fileURL) {
      window.open(this.fileURL);
    }
  }
  

  
}
