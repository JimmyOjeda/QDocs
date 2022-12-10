import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/StepModel';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {

  @Input() step: StepModel;

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Marca como completado el paso correspondiente al componente.
  */
  onCompleteStep() {
    this.step.isComplete = true;
  }

}
