import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/StepModel';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/steps/steps.service';
import { Router } from '@angular/router';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'app-generate-docs-wizard',
  templateUrl: './generate-docs-wizard.component.html',
  styleUrls: ['./generate-docs-wizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenerateDocsWizardComponent implements OnInit {

  currentStep: Observable<StepModel> = new Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router) {
    }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continuar' : 'Generar';
  }

  onSubmit(): void {
    this.router.navigate(['/docs-complete']);
  }

  onCompletedStep(completed : boolean){
    this.stepsService.completeStep(completed);
  }

}
