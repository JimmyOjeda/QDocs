import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWizardComponent } from './summary-wizard.component';

describe('SummaryWizardComponent', () => {
  let summaryWizard: SummaryWizardComponent;
  let fixture: ComponentFixture<SummaryWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryWizardComponent);
    summaryWizard = fixture.componentInstance;
    summaryWizard.wizardService.selectTemplate(
      {
        "id": "1",
        "title" : "Plantilla 1",
        "image": "../assets/Images/plantillas-black.png"
      }
    );
    summaryWizard.wizardService.selectRecord(
      {
        id: "1",
        value: {
          'nombre' : 'Alex',
          'apellido' : 'Torre',
          'edad' : 22
        }
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(summaryWizard).toBeTruthy();
  });
});
