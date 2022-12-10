import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from 'src/app/models/StepModel';
import { StepsService } from 'src/app/services/steps/steps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {

  steps: Observable<StepModel[]>;
  currentStep: Observable<StepModel>;

  constructor(private stepsService: StepsService) { }

  /**
  * Utiliza el servicio de pasos para obtener el listado de pasos
  * y conocer el paso actual.
  */
  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  /**
  * Marca el componente como el paso actual en uso.
  */
  onStepClick(step: StepModel) {
    this.stepsService.setCurrentStep(step);
  }
}
