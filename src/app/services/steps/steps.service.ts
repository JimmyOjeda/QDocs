/**
  * Servicio que permite interactuar con los pasos al generar un documento.
  *
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../../models/StepModel';

const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  /**
     * Establece el paso en el que se encuentra el usuario en la guía de
     * generación de documento.
     *
     * @param step información del número de proceso en el que se encuentra el
     * usuario dentro de la guía de generación de documento.
    */
  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }

  /**
     * Obtener el número de paso en el que se encuentra el usuario en la guía de
     * generación de documento.
     *
     * @return Observable<Response> Un observable con la respuesta del paso
     * en el que se encuentra el usuario dentro de la guía de generación de
     * documento.
    */
  getCurrentStep(): Observable<StepModel> {
    return this.currentStep$.asObservable();
  }

  /**
     * Obtener las etapas que tiene el paso en el que se encuentra
     * el usuario.
     *
     * @return Observable<Response> Un observable con la respuesta del siguiente
     * paso del que se encuentra el usuario dentro de la guía de generación de
     * documento.
    */
  getSteps(): Observable<StepModel[]> {
    return this.steps$.asObservable();
  }

  /**
     * Mueve al usuario a la siguiente etapa de la guía de generación de
     * documento.
  */
  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  /**
     * Devuelve un booleano confirmando si es el último paso en el que se
     * encuentra el usuario en la guía de generación de documento
     *
     * @return booleano para saber si es el último paso.
  */
  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }

  /**
     * Establece el paso actual del usuario en la guía de generación de
     * documento como completado.
  */
  completeStep(completed : boolean) : void{
    this.currentStep$.value.isComplete = completed;
  }
}
