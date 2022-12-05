import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WizardService } from 'src/app/services/wizard/wizard.service';
import { OptionModel } from 'src/app/models/OptionModel';

@Component({
  selector: 'app-wizard-option',
  templateUrl: './wizard-option.component.html',
  styleUrls: ['./wizard-option.component.css']
})
export class WizardOptionComponent implements OnInit {

  @Input() option: OptionModel;
  @Input() isSelected : boolean = false;
  @Output() selectedEvent = new EventEmitter<OptionModel>();
  image = "../assets/Images/plantillas-black.png";
  
  constructor(private wizardService : WizardService) { }

  ngOnInit(): void {
  }

  handleSelection(){
    this.isSelected = !this.isSelected;
    if(this.isSelected){
      this.selectedEvent.emit(this.option);
    }else{
      this.selectedEvent.emit(null);
    }
  }
}
