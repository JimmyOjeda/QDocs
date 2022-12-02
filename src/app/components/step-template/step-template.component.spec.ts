import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTemplateComponent } from './step-template.component';

describe('StepTemplateComponent', () => {
  let stepTemplate: StepTemplateComponent;
  let fixture: ComponentFixture<StepTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTemplateComponent);
    stepTemplate = fixture.componentInstance;
    stepTemplate.step = { stepIndex: 1, isComplete: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(stepTemplate).toBeTruthy();
  });
});
