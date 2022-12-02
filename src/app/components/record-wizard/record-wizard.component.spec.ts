import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordWizardComponent } from './record-wizard.component';

describe('RecordWizardComponent', () => {
  let recordWizard: RecordWizardComponent;
  let fixture: ComponentFixture<RecordWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordWizardComponent);
    recordWizard = fixture.componentInstance;
    recordWizard.wizardService.selectTemplate(
      {
        "id": "1",
        "title" : "Plantilla 1",
        "image": "../assets/Images/plantillas-black.png"
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(recordWizard).toBeTruthy();
  });
});
