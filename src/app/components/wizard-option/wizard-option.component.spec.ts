import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardOptionComponent } from './wizard-option.component';

describe('WizardOptionComponent', () => {
  let wizardOption: WizardOptionComponent;
  let fixture: ComponentFixture<WizardOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardOptionComponent);
    wizardOption = fixture.componentInstance;
    wizardOption.option = {
      "id": "1",
      "title" : "Plantilla 1",
      "image": "../assets/Images/plantillas-black.png"
    };
    wizardOption.isSelected = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wizardOption).toBeTruthy();
  });
});
